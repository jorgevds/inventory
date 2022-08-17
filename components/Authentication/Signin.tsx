import { auth } from '@fire-config';
import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export const Signin = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const successToast = new Toast(
        "Successfully logged in!",
        ToastStatus.SUCCESS,
    );
    const errorToast = new Toast("Failed to log in.", ToastStatus.ERROR);
    const loginDetailsIncorrectToast = new Toast(
        "Are you sure your information is right?",
        ToastStatus.WARNING,
    );
    const sessionNotStoredToast = new Toast(
        "Failed to log session. Your next page visit may require you to login again.",
        ToastStatus.WARNING,
    );

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, username, password).catch(() => {
            setPassword("");

            toaster(errorToast);
            setTimeout(() => {
                toaster(loginDetailsIncorrectToast);
            }, 1000);
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                toaster(successToast);

                user.getIdToken().then((token) => {
                    window.sessionStorage.getItem(token);

                    if (token) {
                        try {
                            fetch(window.location.href, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: token,
                                },
                            });
                        } catch (error) {
                            toaster(sessionNotStoredToast);
                        }
                    }
                });

                router.push("/");
            }
        });
    };

    return (
        <section className="flex flex-col items-center justify-center flex-1 py-4 minlg:py-12">
            <div className="flex flex-col flex-1 pb-20">
                <h2>Sign in to use your Inventory!</h2>
            </div>
            <form
                onSubmit={handleLogin}
                className="flex flex-col minlg:w-2/5 md:w-4/5"
            >
                <label htmlFor="username" className="minlg:pt-4">
                    Email
                </label>
                <input
                    type="email"
                    value={username}
                    name="username"
                    onChange={({ target }) => setUsername(target.value)}
                    className="p-4 pt-2 mb-16 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <label htmlFor="password" className="minlg:pt-4">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={({ target }) => setPassword(target.value)}
                    className="p-4 pt-2 mb-24 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <button
                    type="submit"
                    className="w-2/5 p-2 px-4 m-auto mb-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg focus:shadow-outline bg-blue hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark"
                >
                    Login
                </button>
            </form>
            <div>
                <Link href="/passwordReset">
                    <a className="transition-all duration-200 ease-in-out hover:text-blue">
                        <h3>Forgot your password?</h3>
                    </a>
                </Link>
            </div>
        </section>
    );
};
