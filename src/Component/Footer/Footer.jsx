
import React from 'react';
 
export default function Footer() {
  return <>
    <footer className="footer-container mt-4">
      <div className="footer-section about">
        <h2>
        <i className="fa-solid fa-cart-shopping text-success p-2"></i>
           E-Commerce   </h2>
        <p>We provide a unique and distinctive shopping experience to our customers . Discover the latest products and exclusive offers </p>
      </div>

      <div className="footer-section links">
        <h2>Home</h2>
        <ul>
          <li><a href="/product">Product</a></li>
          <li><a href="/catrgoires"> Catrgoires</a></li>
          <li><a href="/brands">Brands  </a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h2> CALL Me</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +123456789</p>
      </div>

      <div className="footer-section  ">
        <h2> About Social  </h2>
        <a  className='P-4'   href="#" target="_blank" rel="noopener noreferrer">
          
     
        <i className="fa-brands fa-facebook ">   Facebook</i>          
          
          </a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter P-2" aria-hidden="true">  twitter</i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram P-2" aria-hidden="true">  Instagram </i></a>
      </div>
    </footer>
    </>
 };

 