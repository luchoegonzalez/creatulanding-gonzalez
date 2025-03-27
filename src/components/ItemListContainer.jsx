import { useState, useEffect } from "react"
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data));
  }, [items])


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer
