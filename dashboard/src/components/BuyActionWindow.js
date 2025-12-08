import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = (uid) => {
    axios.post("https://trade-flow-qzb2.onrender.com/orders/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    },{withCredentials: true}).then(()=>{
      return axios.post("https://trade-flow-qzb2.onrender.com/holdings/newHolding", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      avg: stockPrice,    
      net: "0%",
      day: "0%",
      isLoss: false
      },{withCredentials: true}).catch((err)=>console.log(err))
    }).finally(() => closeBuyWindow());
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min={0}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={() => handleBuyClick(uid)}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
