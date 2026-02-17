import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h5>Support Portal</h5>
        <Link to = "/support">Track Tickets</Link>
      </div>
      <div className="row p-4">
        <div className="col-6 p-2">
          <h2 className="fs-3">
            {" "}
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg. how do I activate F&O, Why do myorder getting rejected..." className="text-muted" />
          <br />
          <Link to="/support" style={{fontSize:"15px","marginRight":"10%"}}>Track account opening</Link>
          <Link to="/support" style={{fontSize:"15px","marginRight":"10%"}}>Track segment activation</Link>
          <Link to="/support" style={{fontSize:"15px","marginRight":"10%"}}>Intraday margins</Link>
          <Link to="/support" style={{fontSize:"15px","marginRight":"10%"}}>Kite user manual</Link>
        </div>
        <div className="col-2 me-0"></div>
        <div className="col-4 p-2" id ="left">
            <h2 className="fs-3">Featured</h2>
            <ol style ={{lineHeight:"1.5"}}>
                <li>
                    <Link to = "/support" style={{fontSize:"15px"}}>Current Takeovers and Delisting - January 2024</Link><br/>
                </li>
                <li>
                    <Link to = "/support" style={{fontSize:"15px"}}>Latest Intraday leverages - MIS & CO</Link><br/>
                </li>
            </ol>
        </div>
      </div>
    </section>
  );
};
export default Hero;
