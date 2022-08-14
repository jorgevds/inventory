import { fireDatabase } from '@fire-config';
import { ToastStatus } from '@toaster/toast.entity';
import { toaster } from '@toaster/Toaster';
import { collection, doc, DocumentData, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

import { CupboardAndCartChildProps } from './CupboardAndCart';

const ShoppingList: React.FC<CupboardAndCartChildProps> = ({ user }) => {
    const [groceryList, setGroceryList] = useState<DocumentData[]>([]);

    const initGroceries = useCallback(() => {
        useEffect(() => {
            const setItems = async () => {
                const q = query(
                    collection(fireDatabase, `${user?.email}`),
                    where("amount", "==", "0"),
                );

                const snapshot = await getDocs(q);

                let groceries: DocumentData[] = [];
                snapshot.forEach((snap) => {
                    groceries.push(snap.data());
                });

                setGroceryList(groceries);
            };

            setItems();
        }, [groceryList.length]);
    }, []);

    initGroceries();

    const tickOffGroceryList = async (item: DocumentData) => {
        await updateDoc(doc(fireDatabase, `${user?.email}`, item.item), {
            amount: parseInt(item.amount) + 1,
        });

        toaster({
            message: "Successfully added 1!",
            status: ToastStatus.SUCCESS,
        });
    };

    return (
        <article className="flex flex-col">
            {!groceryList.length ? (
                <div className="mt-16 text-xl text-center">
                    You are all stocked up on groceries!
                </div>
            ) : (
                <ul className="sm:mt-4">
                    {groceryList.map((item: DocumentData) => (
                        <li
                            key={item.item}
                            className="flex flex-col my-8 text-lg transition-all duration-200 ease-in-out hover:text-mauve minmd:mx-16 sm:my-6 sm:mx-8"
                        >
                            <div>
                                <button
                                    className="flex justify-between w-full"
                                    onClick={() => {
                                        tickOffGroceryList(item);
                                    }}
                                >
                                    <p>{item.item}</p>
                                    <p className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg shadow-md cursor-pointer border-blue text-blue hover:text-mauve">
                                        +
                                    </p>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default ShoppingList;
