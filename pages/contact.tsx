import Layout from "../components/Layouts/Layout";
import Contact from "../components/Contact";

export default function ContactPage({
  firstName,
  lastName,
  email,
  message,
  title,
}) {
  return (
    <Layout title={"Inventory: Contact"}>
      <Contact
        firstName={firstName}
        lastName={lastName}
        email={email}
        message={message}
        title={title}
      />
    </Layout>
  );
}
