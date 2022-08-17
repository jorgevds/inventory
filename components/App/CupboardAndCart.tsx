import { getAuth, User } from 'firebase/auth';
import { useState } from 'react';

import { Inventory } from './Inventory';
import { ShoppingList } from './ShoppingList';

export interface CupboardAndCartChildProps {
    user: User | null;
}

export const CupboardAndCart = ({}) => {
    const [inventoryVisible, setInventoryVisible] = useState<boolean>(true);

    const user = getAuth().currentUser;

    return (
        <div className="mt-12 flex flex-1 flex-col ">
            <div className="m-auto flex w-3/5 justify-between minmd:px-12 sm:w-full">
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
            <div className="m-auto flex min-h-screen w-3/5 flex-col border-solid border-blue minmd:rounded-lg minmd:border-4 minmd:shadow-xl sm:w-screen sm:border-t-4 sm:border-b-4">
                {inventoryVisible ? (
                    <Inventory user={user} />
                ) : (
                    <ShoppingList user={user} />
                )}
            </div>
        </div>
    );
};
