import { FormEvent, useEffect, useState } from 'react';

import { SignUpPageProps } from './SignUpUser';

export const SignUpHomePage: React.FC<SignUpPageProps> = ({
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
        <section className="flex items-center flex-1 py-12 justify-evenly bg-blue md:p-8 md:pb-12 sm:flex-col">
            <article className="flex flex-col self-start text-white sm:mb-8 sm:text-center">
                <h2 className="py-2 text-3xl minmd:mt-8">
                    Sick of paper grocery lists?
                </h2>
                <h3 className="py-6 text-xl">
                    Join thousands of others who are too!
                </h3>
                <h4 className="py-4 text-lg minlg:w-4/5">
                    Sign up now to get started on your journey to golden grocery
                    lists!
                </h4>
            </article>

            <form
                onSubmit={(e) => submit(e)}
                className="flex flex-col p-4 bg-white rounded-md shadow-2xl minlg:w-3/12 md:w-6/12 sm:w-4/5"
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
                    className="p-2 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:focus:outline-none"
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
                    className="p-2 mb-2 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:focus:outline-none"
                />
                <small className="mb-8">
                    Your password must be at least 6 characters in length. We
                    recommend at least 1 capital letter and 1 number.
                </small>
                <label htmlFor="passConf" className="minlg:pt-4">
                    Password confirmation:
                </label>
                <input
                    type="password"
                    value={passwordConfirmation}
                    name="passConf"
                    onChange={({ target }) =>
                        setPasswordConfirmation(target.value)
                    }
                    autoComplete="new-password"
                    className="p-2 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:focus:outline-none"
                />
                <button
                    type="submit"
                    className={
                        !email ||
                        password.length < 6 ||
                        passwordConfirmation.length < 6
                            ? "signup-button pointer-events-none bg-grey"
                            : "signup-button focus:shadow-outline bg-blue hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark"
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
