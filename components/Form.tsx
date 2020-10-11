import React from "react";
import { useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  title: string;
  submit?: boolean;
}

const Form: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };
  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {};
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {};
  const handleTextAreaChange = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titel">Titel</label>
          <select
            name="titel"
            required
            value={title}
            onChange={handleSelectChange}
          >
            <option>Sir</option>
            <option>Madam</option>
            <option>Other</option>
          </select>
        </div>
        <label htmlFor="voornaam">Voornaam</label>
        <input
          type="text"
          name="voornaam"
          placeholder="voornaam"
          value={firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="achternaam">Naam</label>
        <input
          type="text"
          name="achternaam"
          placeholder="naam"
          value={lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="bericht">Uw bericht</label>
        <textarea
          name="bericht"
          placeholder="hier uw boodschap"
          required
          value={message}
          onChange={handleTextAreaChange}
        />
        <button type="submit">Verzend</button>
      </form>
      {submit ? (
        <h3>
          Bedankt voor uw bericht! Wij gaan aan het werk en geven u zo snel
          mogelijk een antwoord.
        </h3>
      ) : (
        <h3>
          Gelieve een titel bovenaan te kiezen en een boodschap achter te laten.
          Om u van een antwoord te voorzien, hebben we een emailadres nodig.
        </h3>
      )}
    </div>
  );
};

export default Form;
