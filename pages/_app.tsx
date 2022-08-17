import '../styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { AppProps } from 'next/app';
import { Slide, ToastContainer } from 'react-toastify';

import { AuthProvider } from '../components/Authentication/AuthContext';
import { Snackbar } from '../components/Authentication/Snackbar';

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
