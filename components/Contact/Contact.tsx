import { fireDatabase } from '@fire-config';
import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

import { CaptchaCheck } from '../CaptchaCheck';
import { ContactForm } from './entities/form-data.entity';
import { Form } from './Form';

export interface ContactSubmitProps {
    clearState: boolean[];
    submitContactForm: (formData: ContactForm) => void;
}

export const Contact = () => {
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
    const pleaseRefreshError = new Toast(
        "Something went wrong. Please refresh the page and try again.",
        ToastStatus.ERROR,
    );

    const validateCaptchaToken = (token: string) => {
        setToken(token);
    };

    const submitContactForm = async (formData: ContactForm) => {
        const result = await handleSubmit(formData);

        if (result === true) {
            setClearState([...clearState, true]);
        }
    };

    const handleSubmit: (formData: ContactForm) => Promise<boolean> = async (
        formData: ContactForm,
    ): Promise<boolean> => {
        if (!token) {
            toaster(submitError);
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
        if (data.response === "failure") {
            toaster(pleaseRefreshError);
            return false;
        }

        if (data.response === "success") {
            const { title, firstName, lastName, email, message } = formData;

            const collectionRef = collection(fireDatabase, "contact-form");

            return await setDoc(
                doc(collectionRef, `${email} - ${window.Date()}`),
                {
                    title,
                    firstName,
                    lastName,
                    email,
                    message,
                },
            )
                .then(() => {
                    toaster(messageSubmitted);
                    return true;
                })
                .catch((err: any) => {
                    console.error(
                        "Contact: Something went wrong while saving contact message. Error:",
                        err,
                    );
                    return false;
                });
        } else {
            toaster(submitError);
            return false;
        }
    };

    return (
        <section className="flex flex-col flex-1 py-4 m-auto minlg:py-12 minmd:w-3/5 md:w-full">
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
