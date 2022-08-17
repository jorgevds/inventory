import { Signin } from '../../components/Authentication/Signin';
import { Layout } from '../../components/Layouts/Layout';

const Login = () => {
    return (
        <Layout title={": login"}>
            <Signin />
        </Layout>
    );
};
export default Login;
