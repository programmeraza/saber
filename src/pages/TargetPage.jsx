import React from "react";
import Header from "../components/Header/Header";
import DropCount from "../components/DropCount/DropCount";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const TargetPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <DropCount />

      <div className="target">
        <div className="container">
          <div className="target__wrapper">
            <h2 className="target__title">Новый дроп уже скоро</h2>
            <p className="target__subtitle">
              Следи за временем и будь первым, кто узнает о запуске
            </p>

            <button className="target__button">Узнать первым</button>
            <p className="target__note">
              Подпишись, чтобы не пропустить старт продаж
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TargetPage;
