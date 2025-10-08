import React from "react";
import { useTranslation } from "react-i18next";
import "./Charity.scss";

const Charity = () => {
  const { t } = useTranslation();

  return (
    <div className="charity">
      <div className="container">
        <div className="charity__wrapper">
          <div className="charity__content">
            <h2 className="charity__title">{t("Support our initiative")}</h2>
            <p className="charity__text">
              {t(
                "We believe that sport unites people and makes the world better. Every donation helps us develop youth sports programs and support children who dream of big sports."
              )}
            </p>
            <p className="charity__text">
              {t("Scan the QR code to donate or click the button below.")}
            </p>
            <button className="charity__button">{t("Make a donation")}</button>
          </div>

          <div className="charity__qr">
            <img src="/qr-donate.png" alt={t("QR for donation")} />
            <p className="charity__qr-text">{t("Point your camera and support us")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
