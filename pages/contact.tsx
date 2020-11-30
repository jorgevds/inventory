import Layout from "../components/Layouts/Layout";
import Contact from "../components/Contact/Contact";

export default function ContactPage({
  title,
  firstName,
  lastName,
  email,
  message,
}) {
  return (
    <Layout title={": contact"}>
      <Contact
        title={title}
        firstName={firstName}
        lastName={lastName}
        email={email}
        message={message}
      />
    </Layout>
  );
}
