// components/PackingList.js
import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [showConfirm, setShowConfirm] = useState(false);

  function handleClearClick() {
    setShowConfirm(true); // open popup
  }

  function handleCancel() {
    setShowConfirm(false); // close popup
  }

  function handleConfirm() {
    clearItems(); // clear list
    setShowConfirm(false); // close popup
  }

  let sortedItems;
  //sort by input
  if (sortBy === "input") {
    sortedItems = items;
  }

  //sort by description
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  // note [...items]  vs items.slice() both are same

  //sort by packed items
  if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={handleClearClick}>You want to clear ?</button>
      </div>

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>⚠️ Are you sure you want to clear all items?</p>
            <div className="confirm-actions">
              <button onClick={handleCancel}>Cancel</button>
              <button className="danger" onClick={handleConfirm}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
