import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Laptop", price: 100500 },
    { id: 3, name: "Iphone", price: 90000 }
  ]);

  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.cart);

  return (
    <div className="App">
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => dispatch(addItem(item))}>Add Item</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div>
        {cartItem.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
