import React from 'react';
import './Tshirtdetails.css'; // Import CSS file

const Tshirtdetails = () => {
  const handleSmallImageClick = (index) => {
    const mainImg = document.getElementById('MainImg');
    const smallImgs = document.getElementsByClassName('small-img');
    mainImg.src = smallImgs[index].src;
  };

  return (
    <section id="merchandise" className="merchandise">
      <div className="single-tshirt-image">
        <img src="img/t1.png" width="100%" id="MainImg" alt="" />

        <div className="small-tshirt-group">
          <div className="small-tshirt-col">
            <img
              src="t1.png"
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(0)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src="t2.png"
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(1)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src="t3.png"
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(2)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src="t4.png"
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}
            />
          </div>
        </div>
      </div>

      <div className="single-tshirt-details">
        <h2 style={{ fontFamily: 'Roboto' }}>Basic Utkansh T-shirt</h2>
        <h3>₹350.00</h3>

        <a href="checkout_for_t-shirt.html">
          <button>Book Now</button>
        </a>
        <h4>Product Details</h4>
        <span>
          Embrace the timeless elegance of simplicity with our Classic Utkansh T-Shirt. This design
          features the iconic Utkansh logo in a clean and minimalistic style, allowing the essence of
          the fest to speak for itself. The classic Utkansh lettering is artfully integrated, creating
          a sophisticated and versatile look suitable for various occasions. Whether you're attending
          events, workshops, or simply expressing your college fest pride, this T-shirt is a perfect
          choice for those who appreciate understated elegance.
        </span>
      </div>
    </section>
  );
};

export default  Tshirtdetails;
