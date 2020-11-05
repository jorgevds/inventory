import { useState, useEffect } from "react";
import fire from "../../config/fire-config";

const ShoppingList = ({ loggedIn }) => {
  const [groceryList, setGroceryList] = useState([]);

  const user = fire.auth().currentUser;

  {
    loggedIn &&
      useEffect(() => {
        let mounted = true;
        fire
          .firestore()
          .collection(`${user.email}`)
          .where("amount", "==", "0")
          .onSnapshot(function (querySnapshot) {
            let groceries = [];
            querySnapshot.forEach(function (doc) {
              groceries.push(doc.data());
            });
            {
              mounted ? setGroceryList(groceries) : null;
            }
          });
        return () => (mounted = false);
      }, []);
  }

  return (
    <ul className="flex flex-col">
      {!groceryList.length ? (
        <div className="m-auto mt-16 text-xl sm:text-center">
          You are all stocked up on groceries!
        </div>
      ) : (
        groceryList.map((item) => (
          <li
            key={item.item}
            className="flex flex-col mt-8 text-lg sm:mx-8 minmd:mx-16"
          >
            <div>
              <button
                className="flex justify-between w-full"
                onClick={(event) =>
                  fire
                    .firestore()
                    .collection(`${user.email}`)
                    .doc(item.item)
                    .update({
                      amount: parseInt(item.amount) + 1,
                    })
                }
              >
                <p>{item.item}</p>
                <p className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg cursor-pointer text-blue hover:text-mauve border-blue">
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
