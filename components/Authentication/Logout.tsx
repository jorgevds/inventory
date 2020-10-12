import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const [notification, setNotification] = useState("");

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification("You have successfully logged out");
          router.push("/"); 
      });
  };

  return <button onClick={handleLogout} className="flex justify-end flex-auto py-4">Logout</button>;
};

export default Logout;
