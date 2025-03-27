import Item from "./Item"

export default function ItemList({items}) {
  return (
    <div className="flex flex-wrap gap-4 align-middle justify-center container mx-auto">
      {items.map(item => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  )
}