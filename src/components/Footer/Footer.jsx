import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <img src="/logo7.svg" alt="logo" className="footer__logo" />
          </div>

          <div className="footer__box">
            <ul>
              <h2>{t("Resources")}</h2>
              <li>{t("Gift Cards")}</li>
              <li>{t("Find a Store")}</li>
              <li>{t("Membership")}</li>
              <li>{t("Nike Journal")}</li>
              <li>{t("Site Feedback")}</li>
            </ul>
            <ul>
              <h2>{t("Help")}</h2>
              <li>{t("Get Help")}</li>
              <li>{t("Order Status")}</li>
              <li>{t("Shipping and Delivery")}</li>
              <li>{t("Returns")}</li>
              <li>{t("Order Cancellation")}</li>
            </ul>
            <ul>
              <h2>{t("Company")}</h2>
              <li>{t("About Nike")}</li>
              <li>{t("News")}</li>
              <li>{t("Careers")}</li>
              <li>{t("Investors")}</li>
              <li>{t("Purpose")}</li>
            </ul>
            <ul>
              <h2>{t("Promotions & Discounts")}</h2>
              <li>{t("Student")}</li>
              <li>{t("Military")}</li>
              <li>{t("Teacher")}</li>
              <li>{t("First Responders & Medical Professionals")}</li>
              <li>{t("Birthday")}</li>
            </ul>
          </div>

          <div className="footer__bottom">
            <p>{t("© Seven Sport, 2025. All Rights Reserved")}</p>
            <ul className="footer__ul">
              <li>{t("Cookies Settings")}</li>
              <li>{t("Imprint & Legal Data")}</li>
              <li>{t("Privacy Policy")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
