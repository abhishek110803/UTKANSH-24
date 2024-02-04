import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <ul className="ulik" style={{ listStyle: 'none' }} id="C">
        <li className="lin"><a className="anchor" href="https://www.facebook.com/profile.php?id=100010712640780"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li className="lin"><a className="anchor" href="http://wa.me/918210579488" target="_blank"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
        <li><a className="anchor" href="#"><i className="fab fa-telegram" aria-hidden="true"></i></a></li>
        <li><a className="anchor" href="https://www.linkedin.com/in/abhishek-kumar-992757211/"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a className="anchor" href="https://www.instagram.com/abhishek1108032022/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
      <br />
      <div>Created By Abhishek Kumar</div>
      <div> 2023 All rights reserved.</div>
    </footer>
  );
};

export default Footer;
