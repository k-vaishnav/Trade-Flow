import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} className="p-3" alt="product image" />
        </div>
        <div className="col-6 p-4 mt-5 " style={{ width: "45%","marginLeft":"5%" }}>
          <h1>{productName}</h1>
          <p className="text-muted fs-6" style={{ lineHeight: "1.8" }}>
            {productDesc}
          </p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "20%" }}
            >
              learnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media\images\googlePlayBadge.svg" />{" "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none", marginLeft: "20%" }}
            >
              <img src="media\images\appstoreBadge.svg" />
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSection;
