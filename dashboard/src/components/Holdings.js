import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";
const URL = "http://localhost:3002/holdings/allHoldings";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    try {
      axios.get(URL).then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const labels = allHoldings.map((subArray) => subArray.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalInvestment = allHoldings.reduce(
    (sum, holding) => sum + holding.avg * holding.qty,
    0.0
  );
  const currentValue = allHoldings.reduce((sum, h) => sum + h.price * h.qty, 0);
  const totalPL = currentValue - totalInvestment;
  const plPercent = (totalPL / totalInvestment) * 100;
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((holding, index) => {
              const curVal = holding.qty * holding.price;
              const isProfit = curVal - holding.avg * holding.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = holding.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{holding.name}</td>
                  <td>{holding.qty}</td>
                  <td>{holding.avg.toFixed(2)}</td>
                  <td>{holding.price.toFixed(2)}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curVal - holding.avg * holding.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{holding.net}</td>
                  <td className={dayClass}>{holding.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={plPercent > 0 ? "profit" : "loss"}>
            {totalPL.toFixed(2)} ({plPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
