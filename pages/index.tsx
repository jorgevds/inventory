import Layout from "../components/Layouts/Layout";
import Landing from "../components/LandingPage";
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
        }
      });
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <Layout>
      <div className="flex-1">
        {loggedIn && <Inventory />}
        <Landing />
      </div>
    </Layout>
  );
}
