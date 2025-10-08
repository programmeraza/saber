import React from "react";
import "./Charity.scss";

const Charity = () => {
  return (
    <>
      <div className="charity">
        <div className="container">
          <div className="charity__wrapper">
            <div className="charity__content">
              <h2 className="charity__title">Поддержи нашу инициативу</h2>
              <p className="charity__text">
                Мы верим, что спорт объединяет людей и делает мир лучше. 
                Каждое пожертвование помогает нам развивать молодёжные 
                спортивные программы и поддерживать детей, мечтающих о большом спорте.
              </p>
              <p className="charity__text">
                Отсканируй QR-код, чтобы сделать пожертвование, или нажми на кнопку ниже.
              </p>
              <button className="charity__button">Сделать пожертвование</button>
            </div>

            <div className="charity__qr">
              <img src="/qr-donate.png" alt="QR для пожертвования" />
              <p className="charity__qr-text">Наведи камеру и поддержи нас</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charity;
