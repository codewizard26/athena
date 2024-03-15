import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Pagination,
  Keyboard,
  Navigation,
  Mousewheel,
} from "swiper/modules";
import ClientsSection from "./ClinetsSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import AboutSection from "./AboutSection";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FounderStatement from "./FounderStatement";
import Collaborate from "./Collaborate";
import Footer from "./Footer";
import Home from "./Home";

const SwiperComponent = ({ activeSlide }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);

  return (
    <Swiper
      ref={swiperRef}
      direction="vertical"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Parallax, Keyboard, Pagination, Navigation, Mousewheel]}
    >
      <div className="parallax-bg">
        <SwiperSlide className="z-1">
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsSection />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSection />
        </SwiperSlide>
        <SwiperSlide>
          <NewsletterSection />
        </SwiperSlide>
        <SwiperSlide>
          <FounderStatement />
        </SwiperSlide>
        <SwiperSlide>
          <Collaborate />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
