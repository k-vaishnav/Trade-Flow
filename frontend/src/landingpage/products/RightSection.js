import React from "react";

const RightSection = ({ imageURL, productName, productDesc, learnMore }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted fs-6" style={{ lineHeight: "1.8" }}>{productDesc}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            learnMore <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="product image" />
        </div>
      </div>
    </div>
  );
};
export default RightSection;
