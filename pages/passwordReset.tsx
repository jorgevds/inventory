import Layout from "../components/Layouts/Layout";
import ResetPassword from "../components/Authentication/ResetPassword";

const ResetPasswordPage = () => {
  return (
    <Layout title={"Inventory: reset your password"}>
      <ResetPassword />
    </Layout>
  );
};

export default ResetPasswordPage;
