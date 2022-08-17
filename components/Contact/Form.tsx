import React, { FormEvent, useEffect, useReducer } from 'react';
import { useState } from 'react';

import { ContactSubmitProps } from './Contact';
import { ContactForm, ContactKeys } from './entities/form-data.entity';

interface UpdateAction {
    type: ContactKeys;
    payload: string;
    reset?: boolean;
}

interface ResetAction {
    reset: "reset";
}

type Action = UpdateAction | ResetAction;

export const Form: React.FC<ContactSubmitProps> = ({
    clearState,
    submitContactForm,
}) => {
    const DEFAULT_STATE = {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const initialiseFormData = (): ContactForm => {
        return DEFAULT_STATE;
    };

    const reduceFormData = (
        state: ContactForm,
        action: Action,
    ): ContactForm => {
        if ("reset" in action) {
            return initialiseFormData();
        }

        const { type, payload }: { type: ContactKeys; payload: string } =
            action;

        const map: {
            [key in ContactKeys]: (
                state: ContactForm,
                payload: Partial<ContactForm>,
            ) => ContactForm;
        } = {
            [ContactKeys.TITLE]: reduceCallback,
            [ContactKeys.FIRSTNAME]: reduceCallback,
            [ContactKeys.LASTNAME]: reduceCallback,
            [ContactKeys.EMAIL]: reduceCallback,
            [ContactKeys.MESSAGE]: reduceCallback,
        };

        return map[type](state, { [type]: payload });
    };

    const reduceCallback = <T extends Partial<ContactForm>>(
        state: ContactForm,
        payload: T,
    ): ContactForm => {
        return { ...state, ...payload };
    };

    const [formData, dispatch] = useReducer(
        reduceFormData,
        DEFAULT_STATE,
        initialiseFormData,
    );

    const [submit, setSubmit] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitContactForm(formData);
    };

    useEffect(() => {
        if (clearState[clearState.length - 1] === true) {
            dispatch({ reset: "reset" });
            setSubmit(true);
        }
    }, [clearState.length]);

    return (
        <section>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between flex-1 p-8 pt-12 m-auto border-solid shadow-lg border-blue minlg:w-3/5 minmd:rounded-lg minmd:border-4 md:w-4/5 sm:w-screen sm:border-t-4 sm:border-b-4"
            >
                <label
                    htmlFor="title"
                    className="flex justify-between my-4 mb-2"
                >
                    Title
                </label>
                <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>,
                    ): void =>
                        dispatch({
                            type: ContactKeys.TITLE,
                            payload: event.target.value,
                        })
                    }
                    className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:shadow-formField focus:outline-none"
                >
                    <option defaultChecked disabled value="">
                        Select your title
                    </option>
                    <option>Sir</option>
                    <option>Madam</option>
                    <option>Other</option>
                </select>
                <label
                    htmlFor="firstName"
                    className="flex justify-between my-4 mb-2"
                >
                    Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    value={formData.firstName}
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                    ): void =>
                        dispatch({
                            type: ContactKeys.FIRSTNAME,
                            payload: event.target.value,
                        })
                    }
                    className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <label
                    htmlFor="lastName"
                    className="flex justify-between my-4 mb-2"
                >
                    Last name
                </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    value={formData.lastName}
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                    ): void =>
                        dispatch({
                            type: ContactKeys.LASTNAME,
                            payload: event.target.value,
                        })
                    }
                    className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <label
                    htmlFor="email"
                    className="flex justify-between my-4 mb-2"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    value={formData.email}
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                    ): void =>
                        dispatch({
                            type: ContactKeys.EMAIL,
                            payload: event.target.value,
                        })
                    }
                    className="mb-4 transition-all duration-200 ease-in border-b border-burgundy focus:shadow-formField focus:outline-none"
                />
                <label
                    htmlFor="message"
                    className="flex justify-between my-4 mb-2"
                >
                    Your message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Leave your message for our team here"
                    required
                    value={formData.message}
                    onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void =>
                        dispatch({
                            type: ContactKeys.MESSAGE,
                            payload: event.target.value,
                        })
                    }
                    className="mb-16 transition-all duration-200 ease-in border-b min-h-1/8 border-burgundy focus:shadow-formField focus:outline-none"
                />
                <button
                    type="submit"
                    name="Send"
                    className={
                        !formData.email || !formData.message
                            ? "contact-submit-button pointer-events-none bg-grey"
                            : "contact-submit-button focus:shadow-outline transform bg-blue transition-all duration-300 ease-in-out hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark"
                    }
                    disabled={!formData.email || !formData.message}
                >
                    Send
                </button>
            </form>
            {submit ? (
                <section className="flex flex-1 pb-8 m-auto mt-12 text-center minmd:w-3/5 md:w-full">
                    <h3 className="text-xl">
                        Thank you for your{" "}
                        <span className="text-blue">message!</span> Once we
                        receive it, we will get to work and respond as quickly
                        as possible!
                    </h3>
                </section>
            ) : null}
        </section>
    );
};
