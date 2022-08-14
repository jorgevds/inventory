import { Toast, ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface CaptchaCheckProps {
    validateCaptchaToken: (token: string) => void;
}

export const CaptchaCheck: React.FC<CaptchaCheckProps> = ({
    validateCaptchaToken,
}) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const reRef = useRef<ReCAPTCHA>(null);

    const captchaError = new Toast(
        "Failed to verify Captcha. Please try again!",
        ToastStatus.ERROR,
    );

    useEffect(() => {
        const checkCaptcha = async () => {
            if (!reRef || !reRef.current) {
                toaster(captchaError);
                return null;
            }
            const token = await reRef.current.executeAsync();
            reRef.current.reset();

            if (!token) return null;
            console.log(token);

            validateCaptchaToken(token);
        };

        checkCaptcha();
    }, []);

    if (!siteKey) return null;

    return (
        <div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                size="invisible"
                ref={reRef}
            />
        </div>
    );
};
