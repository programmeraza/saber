import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top">
              <img src="/logo7.svg" alt="" className="footer__logo" />
              <ul className="footer__list">
                <li>Man sports</li>
                <li>Woman sports</li>
                <li>Kids sports</li>
                <li>
                  <img src="/logo7.svg" alt="" />
                  Sports
                </li>
              </ul>
              <img src="/globe.svg" alt="" className="footer__language" />
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
