import Layout from "../components/Layout/Layout";
import Inventory from "../components/Inventory";
import fire from "../config/fire-config";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = fire.auth().currentUser;

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <Layout loggedIn={loggedIn}>
      <h1>Inventory</h1>
      {loggedIn ? <Inventory /> : null}
    </Layout>
  );
}
