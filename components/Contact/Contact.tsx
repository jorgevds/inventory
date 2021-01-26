import Form from "./Form";

const Contact = ({ firstName, lastName, email, message, title }) => {
  return (
    <section className="flex flex-col flex-1 py-4 m-auto minlg:py-12 minmd:w-3/5 md:w-full">
      <article className="m-auto mb-8">
        <h2 className="my-4">Got questions?</h2>
        <h2 className="my-4">We might have answers!</h2>
        <h3>
          Fill in the <span className="text-blue">contact form</span> below and
          let us know!
        </h3>
        <h3>We'll get back to you as soon as we can!</h3>
      </article>

      <Form
        title={title}
        firstName={firstName}
        lastName={lastName}
        email={email}
        message={message}
      />
    </section>
  );
};

export default Contact;
