"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Featured() {
  return (
    <div className="mt-36">
      {/* Title  */}
      <p className="font-semibold text-xl">Featured Properties</p>

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Featured;
