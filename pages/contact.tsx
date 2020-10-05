import Layout from "../components/Layouts/Layout";
import Contact from "../components/Contact";

export default function ContactPage({ loggedIn }) {
  return (
    <Layout title={"Inventory: Contact"} loggedIn={loggedIn}>
      <Contact />
    </Layout>
  );
}
