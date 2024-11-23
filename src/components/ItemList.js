import React from "react";
import Products from "./Products";

export default function ItemList({ items }) {
  return (
    <ul>
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
