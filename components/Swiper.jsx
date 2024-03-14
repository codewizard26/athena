"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Pagination,
  Keyboard,
  Navigation,
  Mousewheel,
} from "swiper/modules";
import { Button } from "./ui/button";
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

const SwiperComponent = () => {
  return (
    <Swiper
      direction="vertical"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      mousewheel={true}
      className=""
      // parallax={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      // navigation={true}
      modules={[Parallax, Keyboard, Pagination, Navigation, Mousewheel]}
      // className="mySwiper h-screen w-screen "
    >
      <div
        // slot="container-start"
        className="parallax-bg "
        // style={{
        //   backgroundImage:
        //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
        // }}
        // data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide
        // style={{
        //   background: `url(moorti.svg)  center center / cover no-repeat`,
        //   backgroundSize: "contain",
        // }}
        className=""
      >
        <div className="grid grid-cols-2">
          <div className="h-full w-full sm:space-y-6 flex flex-col justify-center">
            <div className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl  font-[550]">
              <div className="gradient-text">Where Ideas</div>
              <div className="gradient-text">Become Reality</div>
            </div>

            <div className="flex justify-start">
              <Button>Free Consultation</Button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src="moorti.svg" alt="moorti" className="max-w-[50%] h-auto" />
          </div>
        </div>
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
    </Swiper>
  );
};

export default SwiperComponent;
