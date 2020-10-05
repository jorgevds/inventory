import { useState } from "react";
import fire from "../../config/fire-config";

const Logout = () => {
  const [notification, setNotification] = useState("");

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification("Logged out");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
