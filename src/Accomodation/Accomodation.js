import React, { useEffect } from 'react';
import './Accomodation.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js

const AccomodationPage = () => {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".cardss"), {
            max: 25,
            speed: 400
        });
    }, []);
  return (
    <div className="container">
      <div className="grid">
        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a href="#" className="cta_btn">Buy Now</a>
        </div>

        {/* Repeat the card component for each card */}

        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a href="#" className="cta_btn">Buy Now</a>
        </div>

        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a href="#" className="cta_btn">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default AccomodationPage;
