export class Toast {
    message: string;
    status: ToastStatus;

    constructor(message: string, status: ToastStatus) {
        this.message = message;
        this.status = status;
    }
}

export enum ToastStatus {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
}
