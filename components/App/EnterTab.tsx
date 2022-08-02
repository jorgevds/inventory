import { useState } from "react";
import fire from "../../config/fire-config";
import { toaster } from "../../utils/toasts/Toaster";
import { ToastStatus } from "../../utils/toasts/toast.entity";

interface EnterFormProps {
    user: firebase.User | null;
}

const EnterForm: React.FC<EnterFormProps> = ({ user }) => {
    const [itemCategory, setItemCategory] = useState<string>("");
    const [itemAmount, setItemAmount] = useState<number>(1);
    const [itemType, setItemType] = useState<string>();

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
        { id: 13, name: "can" },
    ];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fire.firestore()
            .collection(`${user?.email}`)
            .doc(itemCategory)
            .set({
                item: itemCategory,
                amount: itemAmount,
                type: itemType,
            })
            .catch((error) => {
                toaster({
                    message: "Something went wrong. Please try again!",
                    status: ToastStatus.ERROR,
                });
                console.error(`EnterTab: FireStore error -- ${error}`);
            });

        setItemCategory("");
        setItemAmount(1);
    };

    return (
        <section className="flex flex-col max-w-full m-auto mb-8 border-b border-solid justify-evenly border-burgundy">
            <form onSubmit={handleSubmit} className="flex pt-12 mx-4">
                <label htmlFor="itemCategory">
                    <input
                        id="itemCategory"
                        type="text"
                        value={itemCategory}
                        required
                        autoFocus
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ): void => setItemCategory(event.target.value)}
                        className="w-full pr-4 focus:outline-none"
                    />
                </label>
                <label htmlFor="itemAmount">
                    <input
                        id="itemAmount"
                        type="number"
                        value={itemAmount}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ): void => setItemAmount(parseInt(event.target.value))}
                        className="w-full text-right shadow-md focus:outline-none"
                    ></input>
                </label>
                <label htmlFor="itemType">
                    <select
                        id="itemType"
                        name="type"
                        value={itemType}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>,
                        ): void => setItemType(event.target.value)}
                        defaultValue={"default"}
                        className="minlg:px-4 minlg:mr-2 focus:outline-none"
                    >
                        <option value="default" disabled>
                            Item type
                        </option>
                        {itemTypeList.map((itemTypeList) => (
                            <option
                                key={itemTypeList.id}
                                value={itemTypeList.name}
                            >
                                {itemTypeList.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button
                    type="submit"
                    name="Enter"
                    className="px-4 m-auto mx-4 mb-6 text-white transition-all duration-300 ease-in-out transform rounded-lg active:bg-blueDark focus:outline-none focus:shadow-outline hover:transition-all bg-blue active:translate-y-1 hover:scale-105"
                >
                    +
                </button>
            </form>
        </section>
    );
};

export default EnterForm;
