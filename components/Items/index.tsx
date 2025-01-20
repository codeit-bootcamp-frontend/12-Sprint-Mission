import React from "react";
import Header from "../Header/index";
import Best from "../Best/index";
import AllProducts from "../AllProducts/index";

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
