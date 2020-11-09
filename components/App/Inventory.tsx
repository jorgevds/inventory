import { useState, useEffect } from "react";
import Link from "next/link";
import fire from "../../config/fire-config";
import { toast } from "react-toastify";

const Inventory = ({ loggedIn }) => {
  const [itemsList, setItemsList] = useState([]);

  const notify = () => toast.success("Item successfully deleted");

  const user = fire.auth().currentUser;

  {
    loggedIn &&
      useEffect(() => {
        let mounted = true;
        fire
          .firestore()
          .collection(`${user.email}`)
          .onSnapshot((snap) => {
            const itemsList = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            {
              mounted ? setItemsList(itemsList) : null;
            }
          });
        return () => (mounted = false);
      }, []);
  }

  return (
    <ul className="flex flex-col">
      {!itemsList.length ? (
        <div className="m-auto mt-16 text-xl lg:text-center">
          Click <span className="text-blue">enter</span> or the{" "}
          <span className="text-blue">plus symbol</span> below to get started!
        </div>
      ) : (
        itemsList.map((item) => (
          <li key={item.id} className="flex mt-8 text-lg minmd:mx-12 md:mx-2">
            <div className={item.amount == 0 ? "text-burgundy" : null}>
              <span className="pr-4">{item.item}</span>{" "}
              <span className="minmd:px-4">{item.amount}</span>{" "}
              <span className="minmd:px-4">{item.type}</span>
            </div>
            <button
              onClick={(event) => {
                fire
                  .firestore()
                  .collection(`${user.email}`)
                  .doc(item.id)
                  .delete();
                notify();
              }}
              className="px-4 mx-8 ml-auto text-white transition-all duration-200 ease-in-out border-2 border-solid rounded-lg sm:px-2 hover:transition-all border-burgundy bg-mauve hover:bg-burgundy"
            >
              Delete
            </button>
            <input
              type="number"
              value={item.amount}
              onChange={(event) =>
                fire
                  .firestore()
                  .collection(`${user.email}`)
                  .doc(item.id)
                  .update({
                    amount: `${event.target.value}`,
                  })
              }
              className="w-12 text-center border-b border-burgundy"
            />
          </li>
        ))
      )}
      <ul className="flex my-20 justify-evenly">
        <li className="w-4/5 border-b-2 border-blue"></li>
        <li>
          <Link href="/enter">
            <a className="px-2 text-xl font-bold transition-all duration-200 ease-in-out border-2 border-solid rounded-lg cursor-pointer text-blue hover:text-mauve border-blue">
              +
            </a>
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default Inventory;
