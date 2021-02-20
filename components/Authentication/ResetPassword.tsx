import fire from "../../config/fire-config";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const router = useRouter();
  const [emailAddress, setEmailAddress] = useState<string>("");

  const notifySuccess = () =>
    toast.success(
      "Email sent! Please check your inbox for a password reset email"
    );
  const notifyError = () =>
    toast.warning("Unexpected error. Please try again.");

  const handlePasswordReset = (e) => {
    e.preventDefault();

    fire
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
        notifySuccess();
        router.push("/");
      })
      .catch((e) => {
        notifyError();
      });
  };

  return (
    <section className="flex flex-col items-center justify-center flex-1 pb-12">
      <div className="flex flex-col flex-1 py-12 pb-20">
        <h2>
          Enter your email address down below and click "Reset password" to
          reset your password!
        </h2>
      </div>

      <form onSubmit={handlePasswordReset} className="flex flex-col w-2/5">
        <label htmlFor="emailAddress">Email</label>
        <input
          type="email"
          value={emailAddress}
          name="emailAddress"
          onChange={({ target }) => setEmailAddress(target.value)}
          required
          className="p-4 mb-12 transition-all duration-200 ease-in bg-white border-b border-burgundy focus:outline-none focus:shadow-formField"
        />
        <button
          type="submit"
          className="w-2/5 p-2 px-4 m-auto mb-12 text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Reset password
        </button>
      </form>
    </section>
  );
};
export default ResetPassword;
