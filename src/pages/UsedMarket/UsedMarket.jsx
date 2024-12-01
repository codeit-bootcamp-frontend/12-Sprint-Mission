
import React from "react";
import BestProduct from "./components/BestProduct";
import AllProduct from "./components/AllProduct";
import './UsedMarket.css'

function UsedMarket() {

    return (
        <div className="wrapper">
            <BestProduct />
            <AllProduct />
        </div>
    );
}

export default UsedMarket;