import React from "react";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-4">
        <div className="col-6 p-3 ">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh
            crores worth of equity investments.
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="fs-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="/media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "95%" }}
          />
          <div className="text-center my-5" >
            <a href="" className="mx-4" style={{textDecoration:"none"}}>Explore our products &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
            <a href="" className="mx-3" style={{textDecoration:"none"}}>Try Kite demo &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
