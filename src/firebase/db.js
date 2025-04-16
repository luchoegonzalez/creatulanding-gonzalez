import { getFirestore, collection, getDocs } from "firebase/firestore";
import {app} from "./config.js";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}