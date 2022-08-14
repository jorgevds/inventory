import { ReactText } from 'react';
import { toast, ToastContent, ToastOptions } from 'react-toastify';

import { Toast, ToastStatus } from './toast.entity';

export const toaster = (toastBody: Toast) => {
    const map: {
        [key in ToastStatus]: (
            content: ToastContent,
            options?: ToastOptions | undefined,
        ) => ReactText;
    } = {
        [ToastStatus.SUCCESS]: toast.success,
        [ToastStatus.WARNING]: toast.warning,
        [ToastStatus.ERROR]: toast.error,
    };

    map[toastBody.status](toastBody.message);
};
