import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css"
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/orders/allOrders", { withCredentials: true })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
   <div className="orders-page">
  {orders.length === 0 ? (
    <div className="empty-state">
      <img src="https://kite.zerodha.com/static/images/no-orders.svg" alt="no orders" />
      <p>You haven't placed any orders today</p>
      <Link to="/" className="btn-primary">Get started</Link>
    </div>
  ) : (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Mode</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td className="instrument">{order.name}</td>
            <td>{order.qty}</td>
            <td>{order.price}</td>

            <td>
              <span className={order.mode === "BUY" ? "badge buyOrder" : "badge sellOrder"}>
                {order.mode}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

  );
};

export default Orders;
