import React from "react";
import Best from "@/components/Best";
import AllProducts from "@/components/AllProducts";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Best />
      <AllProducts />
    </div>
  );
};

export default Home;
