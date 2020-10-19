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

  return (
  <div className="flex justify-end flex-auto">
    <button onClick={handleLogout} className="px-4 my-4 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-burgundyDark active:translate-y-1 focus:outline-none focus:shadow-outline hover:transition-all border-purple bg-blue hover:bg-burgundy">
    Logout
    </button>
  </div>
  );
};

export default Logout;
