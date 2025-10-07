import "./Hero.scss";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__wrapper">
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
                <img src="./hero.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./hero.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./hero.png" alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="hero__block">
              <h1>FIND YOUR PERFECT SPORT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
