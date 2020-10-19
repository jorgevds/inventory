import { useState } from "react";
import fire from "../config/fire-config";
import { useRouter } from "next/router";

interface Props {
  itemCategory?: string;
  itemAmount?: number;
  submit?: boolean;
  loggedIn?: boolean;
}

const EnterForm: React.FC<Props> = ({ loggedIn }) => {
  const router = useRouter();

  const [itemCategory, setItemCategory] = useState<string>("");
  const [itemAmount, setItemAmount] = useState<number>(1);
  const [itemType, setItemType] = useState<string>();

  const [submit, setSubmit] = useState(false);

  const user = fire.auth().currentUser;

  const itemTypeList = [
    { id: 1, name: "unit" },
    { id: 2, name: "kg" },
    { id: 3, name: "lb" },
    { id: 4, name: "liter" },
    { id: 5, name: "gallon" },
    { id: 6, name: "pack" },
    { id: 7, name: "dozen" },
    { id: 8, name: "box" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // collections only take documents: every user would need their own collection which stores all items,
    // which then creates a doc for each since a doc can only contain 1mb max
    fire.firestore().collection(`${user.email}`).add({
      item: itemCategory,
      amount: itemAmount,
      type: itemType,
    });

    console.log({
      title: itemCategory,
      content: itemAmount,
      type: itemType,
    });

    setItemCategory("");
    setItemAmount(1);
    setSubmit(true);
  };

  return (
    <div className="flex flex-col w-3/5 min-h-screen py-8 m-auto">
      <span className="m-auto mb-8">
      <h2 className="my-4">Enter items into your inventory</h2>
      <h3 className="my-4">
        Hit <span>submit</span> to register your inventory items
      </h3>
      </span>

      <form onSubmit={handleSubmit} className="flex flex-col justify-between flex-1 w-3/5 p-8 pt-12 m-auto border-4 border-solid rounded-lg border-blue">
        <label className="flex justify-between m-8">
          Enter your item
          <input
            type="text"
            value={itemCategory}
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemCategory(event.target.value)
            }
            className="transition-all duration-200 ease-in border-b border-burgundy"/>
        </label>
        <label className="flex justify-between m-8">
          Specify the amount
          <input
            type="number"
            name="itemAmount"
            value={itemAmount}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemAmount(parseInt(event.target.value))
            }
          className="w-12 text-center transition-all duration-200 ease-in border-b border-burgundy"></input>
        </label>
        <label className="flex justify-between m-8">
          Choose a type
          <select
            name="type"
            value={itemType}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setItemType(event.target.value)
            }
            defaultValue={"default"}
            className="mb-16 transition-all duration-200 ease-in border-b border-burgundy">
            <option value="default" disabled>
              Type of item purchased
            </option>
            {itemTypeList.map((itemTypeList) => (
              <option key={itemTypeList.id} value={itemTypeList.name}>
                {itemTypeList.name}
              </option>
            ))}
            ;
          </select>
        </label>

        <button type="submit" 
        name="Enter"
        className="w-4/5 p-2 px-4 m-auto text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105">
          Enter
        </button>
      </form>
    </div>
  );
};

export default EnterForm;
