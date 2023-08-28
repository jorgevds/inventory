
import { fireDatabase } from '@fire-config';
import { sortItemAlphabetically } from '@helpers/sort.helper';
import { ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { collection, deleteDoc, doc, DocumentData, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { CupboardAndCartChildProps } from './CupboardAndCart';
import { EnterForm } from './EnterTab';
import { InventoryItem } from './entities/inventory-item.entity';
import { LoadingItems } from './LoadingItems';

export const Recipes: React.FC<CupboardAndCartChildProps> = ({ user }) => {
    const [itemsList, setItemsList] = useState<InventoryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const initItems = async () => {
        setLoading(true);
        let data: InventoryItem[] = [];

        const collectionRef = collection(fireDatabase, `${user?.email}`);
        const snapshot = await getDocs(collectionRef);

        snapshot.forEach((snap) => {
            const item = {
                id: snap.id,
                ...snap.data(),
            } as InventoryItem;

            data.push(item);
        });

        setItemsList(data.sort(sortItemAlphabetically));
        setLoading(false);
    };

    useEffect(() => {
        initItems();
    }, []);

    const deleteItem = async (item: DocumentData) => {
        await deleteDoc(doc(fireDatabase, `${user?.email}`, item.id));

        toaster({
            message: "Item successfully deleted",
            status: ToastStatus.SUCCESS,
        });

        const newList = itemsList.filter(
            (itemFromList) => itemFromList.id !== item.id,
        );

        setItemsList(newList.sort(sortItemAlphabetically));
    };

    const changeItemAmount = async (
        item: InventoryItem,
        increment: boolean = false,
    ) => {
        if (!item.id) return;
        const newAmount = increment ? item.amount + 1 : item.amount - 1;

        await updateDoc(doc(fireDatabase, `${user?.email}`, item.id), {
            amount: newAmount,
        });

        const match = itemsList.find(
            (itemFromList) => itemFromList.id === item.id,
        );
        if (!match) return;

        const newList = itemsList.filter(
            (itemFromList) => itemFromList.id !== item.id,
        );

        setItemsList(
            [{ ...match, amount: newAmount }, ...newList].sort(
                sortItemAlphabetically,
            ),
        );
    };

    const bubbleItemEntered = () => {
        initItems();
    };

    return (
        <article className="flex flex-col">
            <EnterForm user={user} bubbleItemEntered={bubbleItemEntered} />
            <LoadingItems loading={loading}>
                {itemsList.length === 0 ? (
                    <div className="mt-16 text-xl text-center">
                        Click <span className="text-blue">Enter</span> above or
                        the <span className="text-blue">plus symbol</span> below
                        to get started!
                    </div>
                ) : (
                    <ul>
                        {itemsList.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between my-4 text-lg minxl:mx-12 xl:mx-8 md:mx-2"
                            >
                                <div
                                    className={
                                        item.amount === 0 ? "text-burgundy" : ""
                                    }
                                >
                                    <span className="pr-4">{item.item}</span>{" "}
                                    <span className="minmd:px-4">
                                        {item.amount}
                                    </span>{" "}
                                    <span className="minmd:px-4">
                                        {item.type}
                                    </span>
                                </div>
                                <div className="flex justify-between w-auto xl:w-3/12 md:w-auto">
                                    <button
                                        className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg shadow-md cursor-pointer border-blue text-blue hover:text-mauve"
                                        onClick={() =>
                                            changeItemAmount(item, true)
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg shadow-md cursor-pointer border-blue text-blue hover:text-mauve minxl:mx-2 md:mx-2"
                                        onClick={() => changeItemAmount(item)}
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => {
                                            deleteItem(item);
                                        }}
                                        className="px-4 mr-4 text-white transition-all duration-200 ease-in-out rounded-lg shadow-md bg-mauve hover:bg-burgundy hover:transition-all focus:outline-none sm:px-2"
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </LoadingItems>
        </article>
    );
};
