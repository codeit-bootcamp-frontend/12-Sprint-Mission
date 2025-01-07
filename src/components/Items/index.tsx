import React from "react";
import Header from "../Header/index.tsx";
import Best from "../Best/index.tsx";
import AllProducts from "../AllProducts/index.tsx";

const Items: React.FC = () => {
  return (
    <div>
      <Header />
      <Best />
      <AllProducts />
    </div>
  );
};

export default Items;
