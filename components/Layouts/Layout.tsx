import Head from "next/head";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import fire from "../../config/fire-config";
import React, { useState } from "react";

const Layout = ({ children, title = "Inventory" }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

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
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Sansita+Swashed:wght@300&display=swap" rel="stylesheet"/>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <meta name="description" content="description for your website" />
        <meta property="og:title" content="FB and twitter title" />
        <meta
          property="og:site_name"
          content="optional tag for FB with expanded site title"
        />
        <meta
          property="og:description"
          content="description for your website for FB and twitter"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="FB and twitter thumbnail photo (must be URL)"
        />
        <meta
          property="og:url"
          content="FB and twitterURL to the hosted web page"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="twitter img alt of the thumbnail photo"
        />
      </Head>
      <Header loggedIn={loggedIn} />
      <h1 className="py-4 text-4xl text-center font-title">Inventory</h1>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
