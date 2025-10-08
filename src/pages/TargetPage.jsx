import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import DropCount from "../components/DropCount/DropCount";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const TargetPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Preloader />
      <Header />
      <DropCount />

      <div className="target">
        <div className="container">
          <div className="target__wrapper">
            <h2 className="target__title">{t("New drop is coming soon")}</h2>
            <p className="target__subtitle">
              {t("Keep track of the time and be the first to know about the launch")}
            </p>

            <button className="target__button">{t("Be the first to know")}</button>
            <p className="target__note">
              {t("Subscribe so you don't miss the launch")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TargetPage;
