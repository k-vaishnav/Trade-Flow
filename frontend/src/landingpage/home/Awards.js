import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-6 col-lg-6 col-sm-12 p-sm-3 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3 mt-2">Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul className="tight-list">
                <li>
                  <p>Futurers and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <ul className="tight-list">
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Go</p>
                </li>
              </ul>
            </div>
          </div>
          <img src = "media\images\pressLogos.png" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
};
export default Awards;
