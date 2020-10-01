import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotification] = useState("");

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
export default Login;
