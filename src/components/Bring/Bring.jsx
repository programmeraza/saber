import React from "react";
import "./Bring.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Bring = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bring">
        <div className="bring__container">
          <div className="bring__wrapper">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {[1, 2, 3].map((slide, index) => (
                <SwiperSlide key={index}>
                  <h1>
                    {t("BRING THE VICTORY HOME")}
                  </h1>
                  <Link>
                    <button className="bring__btn">{t("SHOP NOW")}</button>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bring__content">
              <h1>{t("BUILD TO ACHIEVE GREATNESS")}</h1>
              <p>
                {t(
                  "Where champions are forged and records are broken. Every athlete, every team, every moment contributes to the legacy of sport. Build your future, shape your destiny, and become part of the story that will inspire generations."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bring;
