import React from "react";
import Products from "./Products";
import "../css/ItemList.css";

export default function ItemList({ items }) {
  return (
    <ul className="ItemList-ul">
      {items.map((item) => {
        console.log(item);
        return (
          <li key={item.id}>
            <Products item={item}></Products>
          </li>
        );
      })}
    </ul>
  );
}
