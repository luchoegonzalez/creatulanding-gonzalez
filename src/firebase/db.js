import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import {app} from "./config.js";

const db = getFirestore(app);

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push({ id: doc.id, ...doc.data() });
  });

  return categories;
}

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

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  let item = null;

  if (docSnap.exists()) {
    item = { id: docSnap.id, ...docSnap.data() }
  } else {
    console.log("El documento no existe");
  }

  return item;
}

export const createBuyOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return `🦄 ¡Muchas gracias por tu compra! El ID de tu orden es: ${docRef.id}`;
  } catch (e) {
    return `❌ Ha habido un error en tu compra: ${e.message}`;
  }
}