import Layout from "../components/Layouts/Layout";
import Landing from "../components/LandingPage/LandingPage";
import CupboardAndCart from "../components/App/CupboardAndCart";
import { useAuth } from "../components/Authentication/AuthContext";
import SignUpUser from "../components/Authentication/Signup/SignUpUser";

export default function Home() {
    const { loggedIn } = useAuth();

    return (
        <Layout title={": home"}>
            {loggedIn ? (
                <CupboardAndCart />
            ) : (
                <>
                    <SignUpUser />
                    <Landing />
                </>
            )}
        </Layout>
    );
}
