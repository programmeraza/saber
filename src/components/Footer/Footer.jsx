import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [activeId, setActiveId] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top">
              <img src="/logo7.svg" alt="" className="footer__logo" />
            </div>

            <div className="footer__box">
              <ul>
                <h2>Resources</h2>
                <li>Gift Cards</li>
                <li>Find a Store</li>
                <li>Membership</li>
                <li>Nike Journal</li>
                <li>Site Feedback</li>
              </ul>
              <ul>
                <h2>Help</h2>
                <li>Get Help</li>
                <li>Order Status</li>
                <li>Shipping and Delivery</li>
                <li>Returns</li>
                <li>Order Cancellation</li>
              </ul>
              <ul>
                <h2>Company</h2>
                <li>About Nike</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Purpose</li>
              </ul>
              <ul>
                <h2>Promotions & Discounts</h2>
                <li>Student</li>
                <li>Military</li>
                <li>Teacher</li>
                <li>First Responders & Medical Professionals</li>
                <li>Birthday</li>
              </ul>
            </div>

            <div className="footer__bottom">
              <p>© Seven Sport, 2025. All Rights Reserved</p>
              <ul className="footer__ul">
                <li>Cookies Settings</li>
                <li>Imprint & Legal Data</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;