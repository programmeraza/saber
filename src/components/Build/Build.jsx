import React from "react";
import "./Build.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

const Build = () => {
  return (
    <>
      <div className="build">
        <div className="container">
          <div className="build__wrapper">
            <div className="build__texts">
              <h1 className="build__title">{/* {t.buildTitle} */}qwerty</h1>
              <p className="build__text">{/*{t.(buildTexts)}  */}</p>
            </div>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src="/1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/5.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
