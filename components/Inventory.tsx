import { useState, useEffect } from "react";
import fire from "../config/fire-config";

const Inventory = () => {
  const [itemsList, setItemsList] = useState([]);

  const user = fire.auth().currentUser;

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
        console.log(itemsList);
      });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id}>
            {item.item} {item.amount} {item.type}
            <button
              onClick={(event) =>
                fire
                  .firestore()
                  .collection(`${user.email}`)
                  .doc(item.id)
                  .delete()
              }
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
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Inventory;
