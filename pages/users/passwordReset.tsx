import { ResetPassword } from '../../components/Authentication/ResetPassword';
import { Layout } from '../../components/Layouts/Layout';

const ResetPasswordPage = () => {
    return (
        <Layout title={": reset password"}>
            <ResetPassword />
        </Layout>
    );
};

export default ResetPasswordPage;
