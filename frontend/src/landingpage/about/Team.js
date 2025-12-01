import React from "react";

const Team = () => {
  return (
    <div className="container ">
      <div className="row border-top p-3">
        <h1 className="text-center mt-3">People</h1>
      </div>

      <div
        className="row  text-muted p-3"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="people"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4 fw-medium">Nithin Kamath</h4>
          <h6 className="mt-3 fw-light">Founder, CEO</h6>
        </div>

        <div className="col-6 p-3" >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p >
            Connect on <a href="" style={{textDecoration:"none"}}>HomePage / </a><a href="" style={{textDecoration:"none"}}>TradingQnA / </a>
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Team;
