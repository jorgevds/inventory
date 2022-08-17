import { SignUpUser } from '../../components/Authentication/Signup/SignUpUser';
import { Layout } from '../../components/Layouts/Layout';

const SignUp = () => {
    return (
        <Layout title={": sign up"}>
            <SignUpUser />
        </Layout>
    );
};

export default SignUp;
