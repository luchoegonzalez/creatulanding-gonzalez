import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import { data, useParams } from "react-router";
import Loader from "./Loader";
import { getProducts, getProductsByCategory } from "../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState()
  const {id} = useParams();

  useEffect(() => {
    if(id) {
      getProductsByCategory(id)
        .then(data => setItems(data))
    } else {
      getProducts()
        .then(data => setItems(data))
    }
  }, [id])

  if (!items) return (
    <Loader/>
  );

  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer
