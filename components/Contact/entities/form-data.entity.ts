export interface ContactForm {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export enum ContactKeys {
    TITLE = "title",
    FIRSTNAME = "firstName",
    LASTNAME = "lastName",
    EMAIL = "email",
    MESSAGE = "message",
}
