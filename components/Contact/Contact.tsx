import { fireDatabase } from '@fire-config';
import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

import { CaptchaCheck } from '../CaptchaCheck';
import Form from './Form';

export interface ContactSubmitProps {
    clearState: boolean[];
    submitContactForm: (
        title: string,
        firstName: string,
        lastName: string,
        email: string,
        message: string,
    ) => void;
}

const Contact = () => {
    const [token, setToken] = useState<string | null>();
    const [clearState, setClearState] = useState<boolean[]>([false]);

    const messageSubmitted = new Toast(
        "Message submitted!",
        ToastStatus.SUCCESS,
    );
    const submitError = new Toast(
        "Something went wrong. Please try again!",
        ToastStatus.ERROR,
    );

    const validateCaptchaToken = (token: string) => {
        setToken(token);
    };

    const submitContactForm = async (
        title: string,
        firstName: string,
        lastName: string,
        email: string,
        message: string,
    ) => {
        const result = await handleSubmit(
            title,
            firstName,
            lastName,
            email,
            message,
        );

        if (result === true) {
            setClearState([...clearState, true]);
        } else {
            toaster(submitError);
        }
    };

    const handleSubmit: (
        title: string,
        firstName: string,
        lastName: string,
        email: string,
        message: string,
    ) => Promise<boolean> = async (
        title: string,
        firstName: string,
        lastName: string,
        email: string,
        message: string,
    ) => {
        if (!token) {
            return false;
        }

        const response = await fetch("/api/auth", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
            }),
        });

        const data = await response.json();

        if (data.response == "success") {
            const collectionRef = collection(fireDatabase, "contact-form");

            return await setDoc(
                doc(collectionRef, email + " " + window.Date()),
                {
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    message: message,
                },
            )
                .then(() => {
                    toaster(messageSubmitted);
                    return true;
                })
                .catch((err: any) => {
                    console.error("Contact: Firestore error:", err);
                    return false;
                });
        } else {
            return false;
        }
    };

    return (
        <section className="m-auto flex flex-1 flex-col py-4 minlg:py-12 minmd:w-3/5 md:w-full">
            <article className="m-auto mb-8">
                <h2 className="my-4">Got questions?</h2>
                <h2 className="my-4">We might have answers!</h2>
                <h3>
                    Fill in the <span className="text-blue">contact form</span>{" "}
                    below and let us know!
                </h3>
                <h3>We'll get back to you as soon as we can!</h3>
            </article>

            <Form
                clearState={clearState}
                submitContactForm={submitContactForm}
            />
            <CaptchaCheck validateCaptchaToken={validateCaptchaToken} />
        </section>
    );
};

export default Contact;
