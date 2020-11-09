import "../tailwind.css";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AppProps } from "next/app";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
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
    </>
  );
}

export default MyApp;
