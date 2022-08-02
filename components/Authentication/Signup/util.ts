import { Toast, ToastStatus } from "../../../utils/toasts/toast.entity";
import { toaster } from "../../../utils/toasts/Toaster";
import fire from "../../../config/fire-config";

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

    return fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const userUid = user.user?.uid;

            const account = {
                email: email,
                useruid: userUid,
            };

            fire.firestore().collection(`Users`).doc(email).set(account);

            toaster(successToast);
            return SignUpResult.SUCCESS;
        })
        .catch((err: any) => {
            toaster({ message: err.toString(), status: ToastStatus.ERROR });
            console.error(`SignUpUser: FireStore error -- ${err}`);
            return SignUpResult.FAILURE;
        });
};
