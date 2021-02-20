import React from "react";
import { useState, useRef } from "react";
import fire from "../../config/fire-config";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  submit?: boolean;
}

const Form: React.FC<Props> = () => {
  const [title, setTitle] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const reRef = useRef<ReCAPTCHA>();
  const [submit, setSubmit] = useState<boolean>(false);

  const notifyFormSuccess = () => toast.success("Message submitted!");
  const notifyFormError = () =>
    toast.warning("Something went wrong. Please try again!");
  const notifyCaptchaError = () =>
    toast.error("Failed to verify Captcha. Please try again!");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = await reRef.current.executeAsync();
    reRef.current.reset();

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
    const data = await response.json();

    if (data.response == "success") {
      fire
        .firestore()
        .collection("contact-form")
        .doc(email + " " + window.Date())
        .set({
          title: title,
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
        })
        .catch((err) => {
          notifyFormError();
        });

      notifyFormSuccess();
      setTitle("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSubmit(true);
    } else {
      notifyCaptchaError();
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-1 p-8 pt-12 m-auto border-solid shadow-lg sm:border-t-4 sm:border-b-4 minmd:rounded-lg minmd:border-4 minlg:w-3/5 md:w-4/5 sm:w-screen border-blue"
      >
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
        <label htmlFor="title" className="flex justify-between my-4 mb-2">
          Title
        </label>
        <select
          id="title"
          name="title"
          required
          value={title}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setTitle(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:outline-none focus:shadow-formField"
        >
          <option defaultChecked disabled value="">
            Select your title
          </option>
          <option>Sir</option>
          <option>Madam</option>
          <option>Other</option>
        </select>
        <label htmlFor="firstName" className="flex justify-between my-4 mb-2">
          Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setFirstName(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <label htmlFor="lastName" className="flex justify-between my-4 mb-2">
          Last name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="last name"
          value={lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setLastName(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <label htmlFor="email" className="flex justify-between my-4 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setEmail(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <label htmlFor="message" className="flex justify-between my-4 mb-2">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave your message for our team here"
          required
          value={message}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
            setMessage(event.target.value)
          }
          className="mb-16 transition-all duration-200 ease-in border-b border-burgundy min-h-1/8 focus:outline-none focus:shadow-formField"
        />
        <button
          type="submit"
          name="Send"
          className="w-4/5 px-4 py-2 m-auto text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Send
        </button>
      </form>
      {submit ? (
        <section className="flex flex-1 pb-8 m-auto mt-12 text-center minmd:w-3/5 md:w-full">
          <h3 className="text-xl">
            Thank you for your <span className="text-blue">message!</span> Once
            we receive it, we will get to work and respond as quickly as
            possible!
          </h3>
        </section>
      ) : null}
    </section>
  );
};

export default Form;
