import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const RegisterUser = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passConf, setPassConf] = useState<string>("");

  const notifySuccess = () => toast.success("Successfully logged in!");
  const notifyPasswordConfError = () =>
    toast.error("Password and password confirmation does not match");
  const notifyMissingPassword = () => toast.error("Please enter a password");
  const notifyRegisterError = () =>
    toast.warning("Unexpected error. Please try again.");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!password) {
      notifyMissingPassword();
    } else if (password !== passConf) {
      notifyPasswordConfError();
      setPassword("");
      setPassConf("");
    } else {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          // get user data from the auth trigger
          const userUid = user.user.uid; // The UID of the user.
          const email = user.user.email; // The email of the user.

          // set account doc
          const account = {
            email: email,
            useruid: userUid,
          };
          fire.firestore().collection(`Users`).doc(email).set(account);
          notifySuccess();
          router.push("/");
        })
        .catch((err) => {
          notifyRegisterError();
        });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center flex-1 py-4 minlg:py-12">
      <div className="flex flex-col flex-1 pb-20 sm:text-center">
        <h2>New here? Register your email address and get started!</h2>
        <h3 className="text-sm">(No spam guarantee!)</h3>
      </div>

      <form
        onSubmit={handleRegister}
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
          className="p-4 pt-2 mb-16 transition-all duration-200 ease-in bg-white border-b border-burgundy"
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
          className="p-4 pt-2 mb-2 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <small className="mb-16">
          Your password must be at least 6 characters in length. We recommend at
          least 1 capital letter and 1 number.
        </small>
        <label htmlFor="passConf" className="minlg:pt-4">
          Password confirmation:
        </label>
        <input
          type="password"
          value={passConf}
          name="passConf"
          onChange={({ target }) => setPassConf(target.value)}
          autoComplete="new-password"
          className="p-4 pt-2 mb-24 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg shadow-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-blueLight hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterUser;
