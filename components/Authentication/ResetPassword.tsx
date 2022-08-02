import fire from "../../config/fire-config";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Toast, ToastStatus } from "../../utils/toasts/toast.entity";
import { toaster } from "../../utils/toasts/Toaster";

const ResetPassword = () => {
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

    const handlePasswordReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fire.auth()
            .sendPasswordResetEmail(emailAddress)
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
                    className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
                />
                <button
                    type="submit"
                    className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
                >
                    Reset password
                </button>
            </form>
        </section>
    );
};
export default ResetPassword;
