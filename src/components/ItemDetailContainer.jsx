import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setItem(data));
  }, [id])

  if (!item) return (
    <Loader/>
  );

  return (
    <ItemDetail item={item}/>
  )
}
