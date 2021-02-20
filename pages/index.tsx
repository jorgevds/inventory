import Layout from "../components/Layouts/Layout";
import Landing from "../components/LandingPage/LandingPage";
import CupboardAndCart from "../components/App/CupboardAndCart";
import MainPageRegister from "../components/Authentication/MainPageRegister";
import { useAuth } from "../components/Authentication/AuthContext";

export default function Home() {
  const { loggedIn } = useAuth();

  return (
    <Layout title={": home"}>
      {loggedIn ? (
        <CupboardAndCart loggedIn={loggedIn} />
      ) : (
        <>
          <MainPageRegister />
          <Landing />
        </>
      )}
    </Layout>
  );
}
