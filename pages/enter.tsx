import Layout from "../components/Layout/Layout";
import EnterForm from "../components/Enter";

const EnterPage = ({ loggedIn }) => {
  return (
    <Layout title={"Inventory: enter your inventory"} loggedIn={loggedIn}>
      <EnterForm />
    </Layout>
  );
};

export default EnterPage;
