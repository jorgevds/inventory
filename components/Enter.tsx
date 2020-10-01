import { useState } from "react";
import fire from "../config/fire-config";

interface Props {
  itemCategory?: number;
  itemAmount?: number;
  submit?: boolean;
}

const EnterForm: React.FC<Props> = () => {
  const [itemCategory, setItemCategory] = useState<string>("");
  const [itemAmount, setItemAmount] = useState<number>(1);
  const [itemType, setItemType] = useState<string>();

  const [submit, setSubmit] = useState(false);

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

    fire.firestore().collection("inventory").add({
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
    <>
      <h2>Enter items into your inventory</h2>
      <h3>
        Hit <span>submit</span> to register your inventory items
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Enter your item
          <input
            type="text"
            className="numberInput"
            value={itemCategory}
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemCategory(event.target.value)
            }
          />
        </label>
        <label>
          Specify the amount
          <input
            type="number"
            name="itemAmount"
            value={itemAmount}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemAmount(parseInt(event.target.value))
            }
          ></input>
        </label>
        <label>
          Choose a type
          <select
            name="type"
            value={itemType}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setItemType(event.target.value)
            }
            defaultValue={"default"}
          >
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

        <button type="submit" name="Submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EnterForm;
