import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

const RegisterUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [notification, setNotification] = useState("");

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

    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center flex-1 pb-12">
      <div className="flex flex-col flex-1 pb-20 sm:text-center">
        <h2>New here? Register your email address and get started!</h2>
        <h3 className="text-sm">(No spam guarantee!)</h3>
      </div>

      {notification}
      <form
        onSubmit={handleLogin}
        className="flex flex-col minlg:w-2/5 md:w-4/5"
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

export default RegisterUser;
