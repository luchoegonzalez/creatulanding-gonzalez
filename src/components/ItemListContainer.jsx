import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
  const [items, setItems] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const urlProducts = id ? `https://api.escuelajs.co/api/v1/products?categoryId=${id}` : 'https://api.escuelajs.co/api/v1/products?offset=0&limit=50';
    fetch(urlProducts)
    .then(response => response.json())
    .then(data => setItems(data));
  }, [id])


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer
