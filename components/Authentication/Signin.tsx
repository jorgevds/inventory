import { useState } from "react";
import fire from "../../config/fire-config";
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
    <section className="flex flex-col items-center justify-center flex-1">
      {notify}
      <form onSubmit={handleLogin} className="flex flex-col w-2/5">
        <label htmlFor={username}>
        Email
        </label>
        <input
          type="email"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className="p-4 m-5"
        />
        <label htmlFor={password}>
        Password
        </label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="p-4 m-5"
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
export default Signin;
