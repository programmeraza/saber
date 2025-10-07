import React from "react";
import "./Link.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
const Link = () => {
  return (
    <>
      <div className="link">
        <div className="container">
          <div className="link__wrapper">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img className="link__image" src="/1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="link__image" src="/2.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Link;
