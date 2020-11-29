import Head from "next/head";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import fire from "../../config/fire-config";
import React, { useState, useEffect } from "react";

const Layout = ({ children, title = "" }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const fullTitle = "Inventory";

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (token) {
        window.sessionStorage.getItem(token);
        if (token) {
          setLoggedIn(true);
          fetch(window.location.href, {
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
    <>
      <Head>
        <title>{fullTitle + title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@100&display=swap&text=invetory"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icon/favicon-16x16.png"
        />
        <link rel="manifest" href="icon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="icon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="description"
          content="The grocery list app of the 21st century! Fully automated grocery lists in a simple way!"
        />
        <meta property="og:title" content="Inventory" />
        <meta property="og:site_name" content="Grocery lists made easy!" />
        <meta
          property="og:description"
          content="The grocery list app of the 21st century! Fully automated grocery lists in a simple way!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="FB and twitter thumbnail photo (must be URL)"
        />
        <meta
          property="og:url"
          content="https://inventory.jorgevds.vercel.app/"
        />
        <meta name="twitter:card" content="Inventory" />
        <meta
          name="twitter:image:alt"
          content="Inventory: your gateway to clean, easy grocery shopping!"
        />
      </Head>
      <Header loggedIn={loggedIn} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
