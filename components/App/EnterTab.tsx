import { fireDatabase } from '@fire-config';
import { ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

import { InventoryItem } from './entities/inventory-item.entity';

interface EnterFormProps {
    user: User | null;
    bubbleItemEntered: () => void;
}

export const EnterForm: React.FC<EnterFormProps> = ({
    user,
    bubbleItemEntered: emitItem,
}) => {
    const [enterItem, setEnterItem] = useState<InventoryItem>({
        item: "",
        amount: 1,
        type: "",
    });

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

    const changeValue = (event: any) => {
        setEnterItem((prevState: InventoryItem) => ({
            ...prevState,
            [event.target.name]:
                event.target.name === "amount"
                    ? parseInt(event.target.value)
                    : event.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await setDoc(doc(fireDatabase, `${user?.email}`, enterItem.item), {
            ...enterItem,
        }).catch((error) => {
            toaster({
                message: "Something went wrong. Please try again!",
                status: ToastStatus.ERROR,
            });
            console.error(`EnterTab: FireStore error -- ${error}`);
        });

        toaster({
            message: "Successfully added an item!",
            status: ToastStatus.SUCCESS,
        });

        emitItem();
        setEnterItem({ item: "", amount: 1, type: "" });
    };

    return (
        <section className="m-auto mb-8 flex max-w-full flex-col justify-evenly border-b border-solid border-burgundy">
            <form onSubmit={handleSubmit} className="mx-4 flex pt-12">
                <label htmlFor="itemCategory">
                    <input
                        id="itemCategory"
                        type="text"
                        value={enterItem.item}
                        required
                        name="item"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ): void => changeValue(event)}
                        className="w-full pr-4 focus:outline-none"
                    />
                </label>
                <label htmlFor="itemAmount">
                    <input
                        id="itemAmount"
                        type="number"
                        value={enterItem.amount}
                        min="1"
                        name="amount"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ): void => changeValue(event)}
                        className="w-full text-right shadow-md focus:outline-none"
                    ></input>
                </label>
                <label htmlFor="itemType">
                    <select
                        id="itemType"
                        name="type"
                        value={enterItem.type}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>,
                        ): void => changeValue(event)}
                        className="focus:outline-none minlg:mr-2 minlg:px-4"
                    >
                        <option value="" disabled>
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
                    className={
                        !enterItem.item || !enterItem.type
                            ? "counter-button pointer-events-none bg-grey"
                            : "counter-button focus:shadow-outline transform bg-blue transition-all duration-300 ease-in-out hover:scale-105 hover:transition-all focus:outline-none active:translate-y-1 active:bg-blueDark "
                    }
                    disabled={!enterItem.item || !enterItem.type}
                >
                    +
                </button>
            </form>
        </section>
    );
};
