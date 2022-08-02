import React, { FormEvent, useEffect, useState } from "react";
import { SignUpPageProps } from "./SignUpUser";

export const SignUpDedicatedPage: React.FC<SignUpPageProps> = ({
    handleChange,
    clearPassword,
}) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] =
        useState<string>("");

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleChange(email, password, passwordConfirmation);
    };

    useEffect(() => {
        if (clearPassword[clearPassword.length - 1] === true) {
            setPassword("");
            setPasswordConfirmation("");
        }
    }, [clearPassword.length]);

    return (
        <section className="flex flex-col items-center justify-center flex-1 py-4 minlg:py-12">
            <div className="flex flex-col flex-1 pb-20 sm:text-center">
                <h2>New here? Sign up and get started!</h2>
                <h3 className="text-sm">(No spam guarantee!)</h3>
            </div>

            <form
                onSubmit={(e) => submit(e)}
                className="flex flex-col minlg:w-2/5 md:w-4/5"
            >
                <label htmlFor="email" className="minlg:pt-4">
                    Email:
                </label>
                <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={({ target }) => setEmail(target.value)}
                    autoComplete="new-password"
                    className="p-4 pt-2 mb-16 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
                />
                <label htmlFor="password" className="minlg:pt-4">
                    Password:
                </label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={({ target }) => setPassword(target.value)}
                    autoComplete="new-password"
                    className="p-4 pt-2 mb-2 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
                />
                <small className="mb-16">
                    Your password must be at least 6 characters in length. We
                    recommend at least 1 capital letter and 1 number.
                </small>
                <label htmlFor="passwordConfirmation" className="minlg:pt-4">
                    Password confirmation:
                </label>
                <input
                    type="password"
                    value={passwordConfirmation}
                    name="passwordConfirmation"
                    onChange={({ target }) =>
                        setPasswordConfirmation(target.value)
                    }
                    autoComplete="new-password"
                    className="p-4 pt-2 mb-24 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
                />
                <button
                    type="submit"
                    className={
                        !email ||
                        password.length < 6 ||
                        passwordConfirmation.length < 6
                            ? "signup-button bg-grey pointer-events-none"
                            : "signup-button bg-blue active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all active:translate-y-1 hover:scale-105"
                    }
                    disabled={
                        !email ||
                        password.length < 6 ||
                        passwordConfirmation.length < 6
                    }
                >
                    Sign up
                </button>
            </form>
        </section>
    );
};
