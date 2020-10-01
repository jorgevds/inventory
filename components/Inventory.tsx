import { useState, useEffect } from "react";
import fire from "../config/fire-config";

const Inventory = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fire
      .firestore()
      .collection("inventory")
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default Inventory;
