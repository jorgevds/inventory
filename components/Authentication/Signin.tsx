import { useState } from "react";
import fire from "../../config/fire-config";
import Link from "next/link";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotification] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const user = fire.auth().currentUser;

  const handleLogin = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message);
        setNotification(err.message);
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        user.getIdToken().then(function (token) {
          window.sessionStorage.getItem(token);
          if (token) {
            fetch("http://localhost:3000/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            });
          }
        });
      } else {
        setLoggedIn(false);
      }
    });

    fire
      .auth()
      .setPersistence(fire.auth.Auth.Persistence.SESSION)
      .then(function () {
        return fire.auth().signInWithEmailAndPassword(username, password);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    setUsername("");
    setPassword("");
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center flex-1 pb-12">
      <div className="flex flex-col flex-1 pb-20">
        <h2>Sign in to use your Inventory!</h2>
      </div>
      {notify}
      <form
        onSubmit={handleLogin}
        className="flex flex-col minlg:w-2/5 md:w-4/5"
      >
        <label htmlFor={username}>Email</label>
        <input
          type="email"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <label htmlFor={password}>Password</label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Login
        </button>
      </form>
      <div>
        <Link href="/passwordReset">
          <a>
            <h3>Forgot your password?</h3>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Signin;
