import "../tailwind.css";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../components/Authentication/AuthContext";
import Snackbar from "../components/Authentication/Snackbar";

function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <AuthProvider>
            <Component {...pageProps} />
            <ToastContainer
                position="top-center"
                transition={Slide}
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
            <Snackbar />
        </AuthProvider>
    );
}

export default MyApp;
