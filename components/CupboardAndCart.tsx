import Inventory from "./Inventory";
import ShoppingList from "./ShoppingList";
import { useState } from "react";

const CupboardAndCart = ({ loggedIn }) => {
  const [toggleInventory, setToggleInventory] = useState<boolean>(false);

  const toggleButton = () => {
    setToggleInventory((value) => !value);
  };

  return (
    <div className="flex flex-col flex-1 mt-12">
      <div className="flex justify-between w-3/5 px-6 m-auto sm:w-full">
        <button
          className="px-4 pt-2 border-t-2 border-l-2 border-r-2 border-solid rounded-md border-blue"
          onClick={toggleButton}
        >
          Inventory
        </button>
        <button
          className="px-4 pt-2 border-t-2 border-l-2 border-r-2 border-solid rounded-md border-purple"
          onClick={toggleButton}
        >
          Groceries
        </button>
      </div>
      <div className="flex flex-col w-3/5 min-h-screen m-auto border-solid minmd:rounded-lg minmd:border-4 border-blue sm:w-screen sm:border-t-4 sm:border-b-4">
        {loggedIn ? (
          toggleInventory ? (
            <Inventory />
          ) : (
            <ShoppingList />
          )
        ) : (
          <div className="flex m-auto mt-16 text-xl">
            Enter items into your inventory to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default CupboardAndCart;
