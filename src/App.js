// App.js
import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Your passport", quantity: 2, packed: false },
  { id: 2, description: "Wearing clothes", quantity: 12, packed: true },
  { id: 3, description: "Electronic devices like Laptop, Charger ext", quantity: 1, packed: false },
];

export default function App() {
  // 🧠 State in Parent Component
  const [items, setItems] = useState(initialItems);

  // 🧩 Function to Add Item (will be passed to <Form />)
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  // 🧩 Function to Delete Item
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearListItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        clearItems={handleClearListItems}
      />
      <Stats items={items} />
    </div>
  );
}
