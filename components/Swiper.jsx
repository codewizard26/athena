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
            <div className=" text-[96px] font-[550]">
              <div className="gradient-text">Where Ideas</div>
              <div className="gradient-text">Become Reality</div>
            </div>

            <div className="flex justify-start">
              <Button>Free Consultation</Button>
            </div>
          </div>
          <div className="">
            <img src="moorti.svg" alt="moorti" />
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
      {/* <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperComponent;
