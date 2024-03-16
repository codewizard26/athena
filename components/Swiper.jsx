import React, { useRef, useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

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
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
          <Home isActive={activeIndex === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection isActive={activeIndex === 1} />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsSection isActive={activeIndex === 2} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSection isActive={activeIndex === 3} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsletterSection isActive={activeIndex === 4} />
        </SwiperSlide>
        <SwiperSlide>
          <FounderStatement isActive={activeIndex === 5} />
        </SwiperSlide>
        <SwiperSlide>
          <Collaborate isActive={activeIndex === 6} />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
