import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const MainPageRegister = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [notification, setNotification] = useState("");

  const notify = () => toast.success("Successfully logged in!");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      setNotification("Password and password confirmation does not match");
      setTimeout(() => {
        setNotification("");
      }, 2000);
      setPassword("");
      setPassConf("");
      return null;
    }

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
      })
      .catch((err) => {
        // console.log(err.code, err.message);
      });

    notify();
    router.push("/");
  };

  return (
    <section className="flex items-center flex-1 py-12 md:p-8 sm:flex-col md:pb-12 bg-blueDark justify-evenly">
      <article className="flex flex-col self-start text-white sm:text-center">
        <h2 className="py-2 text-3xl minmd:mt-8">
          Sick of paper grocery lists?
        </h2>
        <h3 className="py-6 text-xl">Join thousands of others who are too!</h3>
        <h4 className="py-4 text-lg minlg:w-4/5">
          Register your account with us now to get started on your grocery
          journey!
        </h4>
      </article>

      {notification}
      <form
        onSubmit={handleLogin}
        className="flex flex-col p-4 bg-white border-2 border-solid rounded-md minlg:w-3/12 md:w-8/12 sm:w-4/5 border-burgundy"
      >
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={({ target }) => setEmail(target.value)}
          autoComplete="new-password"
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
          autoComplete="new-password"
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <label htmlFor="passConf">Password confirmation:</label>
        <input
          type="password"
          value={passConf}
          name="passConf"
          onChange={({ target }) => setPassConf(target.value)}
          autoComplete="new-password"
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default MainPageRegister;
