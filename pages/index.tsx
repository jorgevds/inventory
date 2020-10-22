import Layout from "../components/Layouts/Layout";
import Landing from "../components/LandingPage";
import CupboardAndCart from "../components/CupboardAndCart";
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
      <div className="flex flex-1 min-h-screen">
        {loggedIn ? (
          <CupboardAndCart loggedIn={loggedIn} />
        ) : (
          <h2 className="pb-8 m-auto">Log in to get started!</h2>
        )}
        <Landing />
      </div>
    </Layout>
  );
}
