import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../Authentication/AuthContext";

const Snackbar = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const { loggedIn } = useAuth();

  return (
    <>
      {!loggedIn && !agree && (
        <section className="sticky bottom-0 z-20 w-full py-2 bg-white minmd:px-12">
          <article className="flex flex-col m-auto minlg:w-3/6 minmd:px-12 sm:w-full sm:px-4">
            <h2>Inventory uses cookies</h2>
            <article className="flex">
              <p className="sm:w-3/5">
                But only to allow for longer login sessions. See our{" "}
                <Link href="/privacy">
                  <a className="text-blue">privacy notice</a>
                </Link>{" "}
                for more information.
              </p>
              <button
                onClick={() => setAgree(true)}
                className="px-4 py-2 m-auto text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-md active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
              >
                Ok
              </button>
            </article>
          </article>
        </section>
      )}
    </>
  );
};
export default Snackbar;
