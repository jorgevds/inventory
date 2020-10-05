import Layout from "../components/Layouts/Layout";
import About from "../components/About";

export default function AboutPage({ loggedIn }) {
  return (
    <Layout title={"Inventory: About"} loggedIn={loggedIn}>
      <About />
    </Layout>
  );
}
