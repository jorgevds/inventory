import Link from 'next/link';
import { useEffect, useState } from 'react';

const Snackbar = () => {
    const [agree, setAgree] = useState<boolean>(false);

    const setCookie = () => {
        const date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = "; expires=" + date.toUTCString();

        document.cookie =
            "Inventory privacy policy cookie=" + expires + "; path=/";
        setAgree(true);
    };

    useEffect(() => {
        const cookies: string[] = document.cookie.split(";");
        const privacyCookie = cookies.find((cookie) =>
            cookie.includes("Inventory privacy policy cookie"),
        );

        if (privacyCookie) {
            setAgree(true);
        }
    }, []);

    return (
        <>
            {!agree ? (
                <article className="fixed bottom-0 z-20 w-full py-2 bg-white minmd:px-12">
                    <section className="flex m-auto minlg:w-4/6 minmd:px-12 sm:w-full sm:px-4">
                        <section>
                            <h2>Inventory uses cookies</h2>
                            <section className="minlg:w-4/5">
                                <p className="sm:w-4/5">
                                    But only to allow for longer login sessions.
                                    See our{" "}
                                    <Link href="/privacy">
                                        <a className="text-blue">
                                            privacy notice
                                        </a>
                                    </Link>{" "}
                                    for more information.
                                </p>
                            </section>
                        </section>
                        <section className="m-auto">
                            <button
                                onClick={() => setCookie()}
                                className="px-4 py-2 m-auto text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-md focus:shadow-outline bg-blue hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark"
                            >
                                Ok
                            </button>
                        </section>
                    </section>
                </article>
            ) : null}
        </>
    );
};

export default Snackbar;
