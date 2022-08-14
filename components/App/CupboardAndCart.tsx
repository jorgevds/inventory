import { getAuth, User } from 'firebase/auth';
import { useState } from 'react';

import Inventory from './Inventory';
import ShoppingList from './ShoppingList';

export interface CupboardAndCartChildProps {
    user: User | null;
}

const CupboardAndCart = ({}) => {
    const [inventoryVisible, setInventoryVisible] = useState<boolean>(true);

    const user = getAuth().currentUser;

    return (
        <div className="flex flex-col flex-1 mt-12 ">
            <div className="flex justify-between w-3/5 m-auto minmd:px-12 sm:w-full">
                <button
                    className={
                        inventoryVisible
                            ? "rounded-t-xl bg-blue py-2 pt-4 text-white focus:outline-none minlg:px-8 md:px-4"
                            : "rounded-t-xl border-t-2 border-l-2 border-r-2 border-solid border-blue py-2 pt-4 focus:outline-none minlg:px-8 md:px-4"
                    }
                    onClick={() => setInventoryVisible(true)}
                >
                    Inventory
                </button>
                <button
                    className={
                        !inventoryVisible
                            ? "rounded-t-xl bg-blue py-2 pt-4 text-white focus:outline-none minlg:px-8 md:px-4"
                            : "rounded-t-xl border-t-2 border-l-2 border-r-2 border-solid border-purple py-2 pt-4 focus:outline-none minlg:px-8 md:px-4"
                    }
                    onClick={() => setInventoryVisible(false)}
                >
                    Groceries
                </button>
            </div>
            <div className="flex flex-col w-3/5 min-h-screen m-auto border-solid border-blue minmd:rounded-lg minmd:border-4 minmd:shadow-xl sm:w-screen sm:border-t-4 sm:border-b-4">
                {inventoryVisible ? (
                    <Inventory user={user} />
                ) : (
                    <ShoppingList user={user} />
                )}
            </div>
        </div>
    );
};

export default CupboardAndCart;
