import { useState, useEffect, useCallback } from "react";
import fire from "../../config/fire-config";
import { toaster } from "../../utils/toasts/Toaster";
import { ToastStatus } from "../../utils/toasts/toast.entity";
import { CupboardAndCartChildProps } from "./CupboardAndCart";

const ShoppingList: React.FC<CupboardAndCartChildProps> = ({ user }) => {
    const [groceryList, setGroceryList] =
        useState<firebase.firestore.DocumentData>([]);

    const initGroceries = useCallback(() => {
        useEffect(() => {
            fire.firestore()
                .collection(`${user?.email}`)
                .where("amount", "==", "0")
                .onSnapshot((querySnapshot) => {
                    let groceries: firebase.firestore.DocumentData = [];

                    querySnapshot.forEach(function (doc) {
                        groceries.push(doc.data());
                    });

                    setGroceryList(groceries);
                });
        }, [groceryList.length]);
    }, []);

    initGroceries();

    const tickOffGroceryList = (item: firebase.firestore.DocumentData) => {
        fire.firestore()
            .collection(`${user?.email}`)
            .doc(item.item)
            .update({
                amount: parseInt(item.amount) + 1,
            });

        toaster({
            message: "Successfully added 1!",
            status: ToastStatus.SUCCESS,
        });
    };

    return (
        <ul className="flex flex-col sm:mt-4">
            {!groceryList.length ? (
                <div className="m-auto mt-16 text-xl sm:text-center">
                    You are all stocked up on groceries!
                </div>
            ) : (
                groceryList.map((item: firebase.firestore.DocumentData) => (
                    <li
                        key={item.item}
                        className="flex flex-col my-8 text-lg transition-all duration-200 ease-in-out sm:my-6 sm:mx-8 minmd:mx-16 hover:text-mauve"
                    >
                        <div>
                            <button
                                className="flex justify-between w-full"
                                onClick={() => {
                                    tickOffGroceryList(item);
                                }}
                            >
                                <p>{item.item}</p>
                                <p className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg shadow-md cursor-pointer hover:text-mauve text-blue border-blue">
                                    +
                                </p>
                            </button>
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
};

export default ShoppingList;
