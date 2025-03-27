import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Loader from "./Loader";

function ItemListContainer() {
  const [items, setItems] = useState()
  const {id} = useParams();

  useEffect(() => {
    const urlProducts = id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products';
    fetch(urlProducts)
    .then(response => response.json())
    .then(data => setItems(data));
  }, [id])

  if (!items) return (
    <Loader/>
  );

  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer
