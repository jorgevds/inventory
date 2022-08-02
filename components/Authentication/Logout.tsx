import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import { toaster } from "../../utils/toasts/Toaster";
import { ToastStatus } from "../../utils/toasts/toast.entity";

const Logout = () => {
    const router = useRouter();

    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                toaster({
                    message: "Successfully logged out!",
                    status: ToastStatus.SUCCESS,
                });

                router.pathname !== "/" && router.push("/");
            });
    };

    return (
        <div className="flex justify-end minlg:px-6 md:flex-auto sm:px-2">
            <button
                onClick={handleLogout}
                className="px-4 my-4 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-md active:bg-burgundyDark active:translate-y-1 focus:outline-none focus:shadow-outline hover:transition-all bg-blue hover:bg-burgundy"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
