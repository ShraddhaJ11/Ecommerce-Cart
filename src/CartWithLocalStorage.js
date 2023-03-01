import { useState } from "react";

export default function CartWithLocalStorage() {
  const [items, setItems] = useState([
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Laptop", price: 100500 },
    { id: 3, name: "Iphone", price: 90000 },
  ]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, item]));
  };

  const removeItem = (id) => {
    const itemsLeft = cartItems.filter((item) => item.id !== id);
    setCartItems([...itemsLeft]);
    localStorage.setItem("cart", JSON.stringify([...itemsLeft]));
  };

  return (
    <div className="App">
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => addItem(item)}>Add Item</button>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </div>
        ))}
      </div>
      <h2>Cart Items From Local Storage</h2>
      <div>
        {JSON.parse(localStorage.getItem("cart"))?.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
