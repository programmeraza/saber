import React from "react";
import "./Bring.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

const Bring = () => {
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
              <SwiperSlide>
                <h1>
                  BRING THE <br /> VICTORY HOME
                </h1>
                <Link>
                    <button className="bring__btn">SHOP NOW</button>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <h1>
                  BRING THE <br /> VICTORY HOME
                </h1>
                <Link>
                    <button className="bring__btn">SHOP NOW</button>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <h1>
                  BRING THE <br /> VICTORY HOME
                </h1>
                <Link>
                    <button className="bring__btn">SHOP NOW</button>
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className="bring__content">
              <h1>BUILD TO ACHIEVE GREATNESS</h1>
              <p>
                Where champions are forged and records are broken. Every
                athlete, every team, every moment contributes to the legacy of
                sport. Build your future, shape your destiny, and become part of
                the story that will inspire generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bring;
