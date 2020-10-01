import { timeEnd } from "console";
import { firestore } from "firebase";
import Form from "./Form";

const Contact = ({ firstName, lastName, email, message, title }) => {
  return (
    <section>
      <h1>Contact</h1>
      <h2>Got questions?</h2>
      <h2>We might have answers!</h2>
      <p>
        Fill in the contact form below and let us know! We'll get back to you as
        soon as we can!
      </p>
      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        message={message}
        title={title}
      />
    </section>
  );
};

export default Contact;
