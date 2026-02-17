import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    await axios
      .get("https://trade-flow-qzb2.onrender.com/orders/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `https://trade-flow-qzb2.onrender.com/orders/${id}`,
        { qty: 10 }, // simple example update
        { withCredentials: true },
      );
      fetchOrders();
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://trade-flow-qzb2.onrender.com/orders/${id}`,
        { withCredentials: true },
      );
      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      {orders.length === 0 ? (
        <div className="empty-state">
          <img
            src="https://kite.zerodha.com/static/images/no-orders.svg"
            alt="no orders"
          />
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn-primary">
            Get started
          </Link>
        </div>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td className="instrument">{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>

                <td>
                  <span
                    className={
                      order.mode === "BUY"
                        ? "badge buyOrder"
                        : "badge sellOrder"
                    }
                  >
                    {order.mode}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(order._id)}
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order._id)}
                    style={{ color: "red" }}
                  >
                    Delete
                  </button>
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
