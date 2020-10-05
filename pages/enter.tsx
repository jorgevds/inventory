import Layout from "../components/Layouts/Layout";
import EnterForm from "../components/Enter";
import fire from "../config/fire-config";
import { useState } from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const EnterPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = fire.auth().currentUser;
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      // user.getIdToken().then(function (token) {
      //   console.log(token);
      // });
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <Layout title={"Inventory: enter your inventory"} loggedIn={loggedIn}>
      {loggedIn ? <EnterForm /> : null}
    </Layout>
  );
};

export default EnterPage;
