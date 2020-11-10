import Layout from "../components/Layouts/Layout";
import Landing from "../components/LandingPage/LandingPage";
import CupboardAndCart from "../components/App/CupboardAndCart";
import MainPageRegister from "../components/Authentication/MainPageRegister";
import fire from "../config/fire-config";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

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
    <Layout title={": home"}>
      {loggedIn ? (
        <CupboardAndCart loggedIn={loggedIn} />
      ) : (
        <>
          <MainPageRegister />
          <Landing />
        </>
      )}
    </Layout>
  );
}
