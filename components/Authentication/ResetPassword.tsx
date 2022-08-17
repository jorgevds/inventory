import { auth } from '@fire-config';
import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export const ResetPassword = () => {
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState<string>("");

    const successToast = new Toast(
        "Email sent! Please check your inbox for a password reset email",
        ToastStatus.SUCCESS,
    );
    const errorToast = new Toast(
        "Unexpected error. Please try again.",
        ToastStatus.ERROR,
    );

    const handlePasswordReset = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await sendPasswordResetEmail(auth, emailAddress)
            .then(() => {
                toaster(successToast);
                router.push("/");
            })
            .catch((e) => {
                toaster(errorToast);
            });
    };

    return (
        <section className="flex flex-col items-center justify-center flex-1 pb-12">
            <div className="flex flex-col flex-1 py-12 pb-20">
                <h2>
                    Enter your email address down below and click "Reset
                    password" to reset your password!
                </h2>
            </div>

            <form
                onSubmit={handlePasswordReset}
                className="flex flex-col w-2/5"
            >
                <label htmlFor="emailAddress">Email</label>
                <input
                    type="email"
                    value={emailAddress}
                    name="emailAddress"
                    onChange={({ target }) => setEmailAddress(target.value)}
                    required
                    className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <button
                    type="submit"
                    className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg focus:shadow-outline border-purple bg-blue hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark"
                >
                    Reset password
                </button>
            </form>
        </section>
    );
};
