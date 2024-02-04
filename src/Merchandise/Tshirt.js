import React from 'react';
import './Tshirt.css';
const Merchandise = () => {
    return (
        
        <div className='outer'>

            <h1 className="Merchandise">Merchandise</h1>
          
                <div className="ram ">
                    <div className=" column">
                        <figure className="featured-image align-center ">
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1677902127/merchandise/polo_t-shirt-removebg-preview_yrxa9n.png" width="400px" height="220px" alt="Utkansh Tshirt Black" />
                        </figure>
                        <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Tshirt Black</h3>
                        <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 350/-</h5>
                        <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                            <a href="tshirtdetails.html" onMouseOver={(e) => e.target.style.color = '#FAFA33'} onMouseOut={(e) => e.target.style.color = 'blue'}>Order Now</a>
                        </h2>
                    </div>
                    <div className="">
                        <figure className="featured-image ">
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1677902127/merchandise/round_neck-removebg-preview_pgewsb.png" width="400px" height="220px" alt="Utkansh Tshirt Gray" />
                        </figure>
                        <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Tshirt Gray</h3>
                        <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 300/-</h5>
                        <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                            <a href="tshirtdetails.html" onMouseOver={(e) => e.target.style.color = '#FAFA33'} onMouseOut={(e) => e.target.style.color = 'blue'}>Order Now</a>
                        </h2>
                    </div>
                </div>
        
        </div>
    );
};

export default Merchandise;
