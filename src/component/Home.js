import React from 'react';
import Products from "./Products";

const Home = ()=> {
    return (
        <div className= "hero">
            <div class="card text-bg-white text-white border-0">
  <img src="/assets/bg1.png" class="card-img" alt="Background"
  height="520px" position="fixed"/>
  <div class="card-img-overlay df-flex flex-column justify-content-center">
  <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS
    </p>
    
  </div>
</div>
</div>
        <Products/>
        </div>
    );
}

export default Home;