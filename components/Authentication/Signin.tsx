import { useState } from "react";
import fire from "../../config/fire-config";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Signin = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const notifySuccess = () => toast.success("Successfully logged in!");
  const notifyError = () => toast.error("Failed to log in!");
  const notifyLoginDetails = () =>
    toast.warning("Are you sure your information is right?");
  const notifySessionFailure = () =>
    toast.warning(
      "Failed to log session. Next page visit may require you to login again."
    );

  const handleLogin = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(() => {
        setPassword("");
        notifyError();
        setTimeout(() => {
          notifyLoginDetails();
        }, 1000);
      });

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        notifySuccess();
        user.getIdToken().then(function (token) {
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
              notifySessionFailure();
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
          className="p-4 pt-2 mb-16 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <label htmlFor="password" className="minlg:pt-4">
          Password
        </label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
          className="p-4 pt-2 mb-24 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
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

export default Signin;
