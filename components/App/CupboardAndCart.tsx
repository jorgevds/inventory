import Link from "next/link";
import Inventory from "./Inventory";
import ShoppingList from "./ShoppingList";
import { useState } from "react";

const CupboardAndCart = ({ loggedIn }) => {
  const [toggleInventory, setToggleInventory] = useState<boolean>(false);

  const toggleButton = () => {
    setToggleInventory((value) => !value);
  };

  return (
    <div className="flex flex-col flex-1 mt-12 ">
      <div className="flex justify-between w-3/5 m-auto minmd:px-12 sm:w-full">
        <button
          className={
            toggleInventory
              ? "bg-blue text-white py-2 pt-4 border-t-2 border-l-2 border-r-2 border-solid md:px-4 minlg:px-8 rounded-t-xl border-blue focus:outline-none"
              : "py-2 pt-4 border-t-2 border-l-2 border-r-2 border-solid md:px-4 minlg:px-8 rounded-t-xl border-blue focus:outline-none"
          }
          onClick={toggleButton}
        >
          Inventory
        </button>
        <button
          className={
            !toggleInventory
              ? "bg-blue text-white py-2 pt-4 border-t-2 border-l-2 border-r-2 border-solid md:px-4 minlg:px-8 rounded-t-xl border-purple focus:outline-none"
              : "py-2 pt-4 border-t-2 border-l-2 border-r-2 border-solid md:px-4 minlg:px-8 rounded-t-xl border-purple focus:outline-none"
          }
          onClick={toggleButton}
        >
          Groceries
        </button>
      </div>
      <div className="flex flex-col w-3/5 min-h-screen m-auto border-solid minmd:shadow-xl minmd:rounded-lg minmd:border-4 border-blue sm:w-screen sm:border-t-4 sm:border-b-4">
        {loggedIn ? (
          !toggleInventory ? (
            <ShoppingList loggedIn={loggedIn} />
          ) : (
            <Inventory loggedIn={loggedIn} />
          )
        ) : (
          <div className="flex m-auto mt-16 text-xl">
            <Link href="/enter">
              <a>Enter items into your inventory to get started!</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CupboardAndCart;
