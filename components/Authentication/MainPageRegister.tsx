import { useState } from "react";
import fire from "../../config/fire-config";
import { toast } from "react-toastify";

const MainPageRegister = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passConf, setPassConf] = useState<string>("");

  const notifySuccess = () => toast.success("Successfully logged in!");
  const notifyPasswordConfError = () =>
    toast.error("Password and password confirmation does not match");
  const notifyMissingPassword = () => toast.error("Please enter a password");
  const notifyRegisterError = () =>
    toast.warning("Something went wrong. Please try again!");

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
        })
        .catch((err) => {
          notifyRegisterError();
        });
    }
  };

  return (
    <section className="flex items-center flex-1 py-12 md:p-8 sm:flex-col md:pb-12 bg-blue justify-evenly">
      <article className="flex flex-col self-start text-white sm:text-center sm:mb-8">
        <h2 className="py-2 text-3xl minmd:mt-8">
          Sick of paper grocery lists?
        </h2>
        <h3 className="py-6 text-xl">Join thousands of others who are too!</h3>
        <h4 className="py-4 text-lg minlg:w-4/5">
          Register now to get started on your journey to golden grocery lists!
        </h4>
      </article>

      <form
        onSubmit={handleRegister}
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
          className="p-2 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
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
          className="p-2 mb-2 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <small className="mb-8">
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
          className="p-2 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default MainPageRegister;
