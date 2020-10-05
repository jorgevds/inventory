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
    <section>
      <h2>Login</h2>
      {notify}
      <form onSubmit={handleLogin}>
        Email
        <input
          type="email"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
export default Signin;
