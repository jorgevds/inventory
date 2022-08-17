import { useRouter } from 'next/router';
import { useState } from 'react';

import { SignUpDedicatedPage } from './SignUpDedicatedPage';
import { SignUpHomePage } from './SignUpHomePage';
import { onSignUp, SignupData, SignUpResult } from './util';

export interface SignUpPageProps {
    clearPassword: boolean[];
    handleChange: (
        email: string,
        password: string,
        passwordConfirmation: string,
    ) => void;
}

export const SignUpUser = () => {
    const router = useRouter();
    const signupPage = router.route.includes("users");

    const [clearPassword, setClearPassword] = useState<boolean[]>([false]);

    const handleChange = (
        email: string,
        password: string,
        passwordConfirmation: string,
    ) => {
        const formData = { email, password, passwordConfirmation };
        signUp(formData);
    };

    const signUp = async (formData: SignupData) => {
        const result = await onSignUp(formData);

        if (result === SignUpResult.FAILURE) {
            setClearPassword([...clearPassword, true]);
        } else {
            router.push("/");
        }
    };

    return signupPage ? (
        <SignUpDedicatedPage
            handleChange={handleChange}
            clearPassword={clearPassword}
        />
    ) : (
        <SignUpHomePage
            handleChange={handleChange}
            clearPassword={clearPassword}
        />
    );
};
