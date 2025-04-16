import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { getProductById } from "../firebase/db";

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setItem(res)
      })
  }, [id])

  if (!item) return (
    <Loader/>
  );

  return (
    <ItemDetail item={item}/>
  )
}
