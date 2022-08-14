import { auth, fireDatabase } from '@fire-config';
import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

export interface SignupData {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export enum SignUpResult {
    SUCCESS = "success",
    FAILURE = "failure",
}

export const onSignUp: (formData: SignupData) => Promise<SignUpResult> = (
    formData: SignupData,
) => {
    const { email, password, passwordConfirmation } = formData;

    const successToast = new Toast(
        "Successfully logged in!",
        ToastStatus.SUCCESS,
    );

    const passwordIncorrectToast = new Toast(
        "Password and password confirmation do not match",
        ToastStatus.WARNING,
    );

    if (!passwordConfirmation || password !== passwordConfirmation) {
        toaster(passwordIncorrectToast);
        return new Promise(() => SignUpResult.FAILURE);
    }

    return createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
            const userUid = user.user?.uid;

            const account = {
                email: email,
                useruid: userUid,
            };

            const collectionRef = collection(fireDatabase, "Users");

            await setDoc(doc(collectionRef, email), account);

            toaster(successToast);
            return SignUpResult.SUCCESS;
        })
        .catch((err: any) => {
            toaster({ message: err.toString(), status: ToastStatus.ERROR });
            console.error(`SignUpUser: FireStore error -- ${err}`);
            return SignUpResult.FAILURE;
        });
};
