import { auth } from '@fire-config';
import { ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { useRouter } from 'next/router';

const Logout = () => {
    const router = useRouter();

    const handleLogout = () => {
        auth.signOut().then(() => {
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
                className="px-4 my-4 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-md focus:shadow-outline bg-blue hover:bg-burgundy hover:transition-all focus:outline-none active:translate-y-1 active:bg-burgundyDark"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
