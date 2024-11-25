import React from "react";
import Products from "../Products/Products.jsx";
import "./ItemList.css";

export default function ItemList({ items, layoutType }) {
  return (
    <ul className={`ItemList-ul ${layoutType}`}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Products item={item}></Products>
          </li>
        );
      })}
    </ul>
  );
}
