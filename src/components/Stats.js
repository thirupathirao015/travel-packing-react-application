// components/Stats.js
import React from "react";

export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="emptyFooterText">
        <em>Start adding some items to your packing list 💼</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to fly ✈"
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
      <span className="developer">
        Developed by Ramisetti Thirupathi 💻 👍{" "}
      </span>
    </footer>
  );
}
