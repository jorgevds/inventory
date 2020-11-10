import { useState, useEffect } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

  const notifySuccess = () =>
    toast.success("Item successfully added to your inventory!");

  const user = fire.auth().currentUser;

  const itemTypeList = [
    { id: 1, name: "unit(s)" },
    { id: 2, name: "kg" },
    { id: 3, name: "lb" },
    { id: 4, name: "liter" },
    { id: 5, name: "gallon" },
    { id: 6, name: "pack" },
    { id: 7, name: "dozen" },
    { id: 8, name: "box" },
    { id: 9, name: "bag" },
    { id: 10, name: "bottle" },
    { id: 11, name: "jar" },
    { id: 12, name: "jug" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fire.firestore().collection(`${user.email}`).doc(itemCategory).set({
      item: itemCategory,
      amount: itemAmount,
      type: itemType,
    });

    notifySuccess();
    setItemCategory("");
    setItemAmount(1);
    setSubmit(true);
  };

  // useEffect(() => {
  //   {
  //     !loggedIn ? router.push("/users/login") : router.push("/enter");
  //   }
  // }, []);

  return (
    <section className="flex flex-col flex-1 pb-8 m-auto minmd:w-3/5">
      <article className="m-auto mb-8">
        <h2 className="my-4">Enter items into your inventory</h2>
        <h3 className="my-4">
          Hit <span className="text-blue">enter</span> to register your
          inventory items
        </h3>
      </article>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 pt-12 m-auto border-solid lg:p-4 md:p-8 minmd:rounded-lg minmd:border-4 minmd:justify-between minlg:w-3/5 border-blue sm:w-screen sm:border-t-4 sm:border-b-4"
      >
        <label className="flex justify-between mx-4 my-8 minlg:mx-6 minlg:my-8 sm:flex-col">
          Enter your item
          <input
            type="text"
            value={itemCategory}
            required
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemCategory(event.target.value)
            }
            className="transition-all duration-200 ease-in border-b minmd:w-3/5 sm:mt-8 border-burgundy"
          />
        </label>
        <label className="flex justify-between mx-4 my-8 minlg:mx-6 minlg:my-8 sm:flex-col">
          Specify the amount
          <input
            type="number"
            name="itemAmount"
            value={itemAmount}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setItemAmount(parseInt(event.target.value))
            }
            className="text-center transition-all duration-200 ease-in border-b sm:mt-8 minmd:w-1/5 border-burgundy"
          ></input>
        </label>
        <label className="flex justify-between mx-4 my-8 minlg:mx-6 minlg:my-8 sm:flex-col">
          Choose a type
          <select
            name="type"
            value={itemType}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setItemType(event.target.value)
            }
            defaultValue={"default"}
            className="mb-16 transition-all duration-200 ease-in border-b minmd:w-3/5 sm:mt-8 border-burgundy"
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

        <button
          type="submit"
          name="Enter"
          className="w-4/5 px-4 py-2 m-auto text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg minlg:mb-6 active:bg-blueDark focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
        >
          Enter
        </button>
      </form>
    </section>
  );
};

export default EnterForm;
