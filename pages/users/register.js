import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [userName, setUsername] = useState("");
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
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message);
      });
    router.push("/");
  };

  return (
    <section>
      <h2>Create new user</h2>
      {notification}
      <form onSubmit={handleLogin}>
        Email:{" "}
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        Password conf:{" "}
        <input
          type="password"
          value={passConf}
          onChange={({ target }) => setPassConf(target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Register;
