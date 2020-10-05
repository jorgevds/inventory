import Layout from "../../components/Layouts/Layout";
import Signin from "../../components/Authentication/Signin";

const Login = ({ loggedIn }) => {
  return (
    <Layout loggedIn={loggedIn}>
      <Signin />
    </Layout>
  );
};
export default Login;
