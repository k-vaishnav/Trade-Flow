import React from "react";

const Hero =()=>{
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
               <img src = 'media/images/homeHero.png' alt = "Hero" className="mb-5"/>
               <h1>Invest in everything</h1>
               <p>Online platform to invest in Stocks, derivatives, mutual funds, and more</p>
               <button className="p-2 btn btn-primary fs-5 mb-5" style ={{width: "20%","margin": "0 auto"}}>Signup Now</button>
            </div>
            
        </div>
    );
}
export default Hero;