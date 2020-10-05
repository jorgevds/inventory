import Layout from "../components/Layouts/Layout";
import Inventory from "../components/Inventory";
import fire from "../config/fire-config";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = fire.auth().currentUser;

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (token) {
        window.sessionStorage.getItem(token);
        if (token) {
          setLoggedIn(true);
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

  return (
    <Layout loggedIn={loggedIn} user={user}>
      {loggedIn ? <Inventory /> : null}
    </Layout>
  );
}
