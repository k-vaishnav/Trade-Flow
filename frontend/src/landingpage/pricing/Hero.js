import React from "react";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row mt-5 p-5 text-center border-bottom">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5 fw-medium">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-3 mt-3 text-center">
        <div className="col-4 p-4">
          <img src="media\images\pricingEquity.svg" />
          <h1 className="fs-4 mt-1">Free equity delivery</h1>
          <p className="text-muted mt-1">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\intradayTrades.svg" />
          <h1 className="fs-4 mt-1">Intraday and F&O trades</h1>
          <p className="text-muted mt-1">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\pricingEquity.svg" />
          <h1 className="fs-4 mt-1">Free direct MF</h1>
          <p className="text-muted mt-1">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
