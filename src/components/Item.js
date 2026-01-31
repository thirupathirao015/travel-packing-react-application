// components/Item.js
import React from "react";

export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span
        style={
          item.packed ? { textDecoration: "line-through", opacity: 0.6 } : {}
        }
      >
        {item.quantity} × {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
