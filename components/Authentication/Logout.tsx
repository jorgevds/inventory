import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Logout = () => {
  const router = useRouter();

  const notify = () => toast.error("Successfully logged out!");

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        notify();
        {
          router.pathname != "/" && router.push("/");
        }
      });
  };

  return (
    <div className="flex justify-end flex-auto sm:px-2">
      <button
        onClick={handleLogout}
        className="px-4 my-4 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-burgundyDark active:translate-y-1 focus:outline-none focus:shadow-outline hover:transition-all border-purple bg-blue hover:bg-burgundy"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
