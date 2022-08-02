import { useState, useEffect, useCallback } from "react";
import fire from "../../config/fire-config";
import EnterForm from "./EnterTab";
import firebase from "firebase";
import { toaster } from "../../utils/toasts/Toaster";
import { ToastStatus } from "../../utils/toasts/toast.entity";
import { CupboardAndCartChildProps } from "./CupboardAndCart";

const Inventory: React.FC<CupboardAndCartChildProps> = ({ user }) => {
    const [itemsList, setItemsList] = useState<
        firebase.firestore.DocumentData[]
    >([]);

    const initGroceries = useCallback(() => {
        useEffect(() => {
            fire.firestore()
                .collection(`${user?.email}`)
                .onSnapshot((snap) => {
                    const itemsList = snap.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    setItemsList(itemsList);
                });
        }, [itemsList.length]);
    }, []);

    initGroceries();

    const deleteItem = (item: firebase.firestore.DocumentData) => {
        fire.firestore().collection(`${user?.email}`).doc(item.id).delete();

        toaster({
            message: "Item successfully deleted",
            status: ToastStatus.SUCCESS,
        });
    };

    const updateAmount = (
        item: firebase.firestore.DocumentData,
        event: any,
    ) => {
        fire.firestore()
            .collection(`${user?.email}`)
            .doc(item.id)
            .update({
                amount: `${event.target.value}`,
            });
    };

    return (
        <ul className="flex flex-col">
            <EnterForm user={user} />
            {itemsList.length === 0 ? (
                <div className="m-auto mt-16 text-xl lg:text-center">
                    Click <span className="text-blue">Enter</span> above or the{" "}
                    <span className="text-blue">plus symbol</span> below to get
                    started!
                </div>
            ) : (
                itemsList.map((item) => (
                    <li
                        key={item.id}
                        className="flex my-4 text-lg minmd:mx-12 md:mx-2"
                    >
                        <div
                            className={item.amount == 0 ? "text-burgundy" : ""}
                        >
                            <span className="pr-4">{item.item}</span>{" "}
                            <span className="minmd:px-4">{item.amount}</span>{" "}
                            <span className="minmd:px-4">{item.type}</span>
                        </div>
                        <button
                            onClick={() => {
                                deleteItem(item);
                            }}
                            className="px-4 mx-8 ml-auto text-white transition-all duration-200 ease-in-out rounded-lg shadow-md focus:outline-none sm:px-2 hover:transition-all bg-mauve hover:bg-burgundy"
                        >
                            Delete
                        </button>
                        <input
                            type="number"
                            value={item.amount}
                            onChange={(event) => updateAmount(item, event)}
                            className="w-12 text-center border-b border-burgundy focus:outline-none focus:shadow-formField"
                        />
                    </li>
                ))
            )}
        </ul>
    );
};

export default Inventory;
