"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Img1 from "@/assets/carousel/p1.jpg";
import Img2 from "@/assets/carousel/p2.jpg";
import Img3 from "@/assets/carousel/p3.jpg";
import Img4 from "@/assets/carousel/p4.jpg";
import Img5 from "@/assets/carousel/p5.jpg";
import CarouselCard from "./CarouselCard";

function Featured() {
  return (
    <div className="mt-52 px-20">
      {/* Title  */}
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl">Featured Properties</p>
        <p className="font-semibold text-blue-700 text-xl cursor-pointer">
          see all
        </p>
      </div>

      <div>
        <div>
          <Swiper spaceBetween={15} slidesPerView={3} className="mt-8">
            <SwiperSlide>
              <CarouselCard
                src={Img1}
                alt=""
                height={200}
                width={100}
                title="Apex Heights"
                desc="Brooklyn,New York"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                src={Img2}
                alt=""
                height={200}
                width={100}
                title="Horizon Heights"
                desc="81 st,Los Angeles"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                src={Img3}
                alt=""
                height={200}
                width={100}
                title="Panorama"
                desc="Castle st,New York"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                src={Img4}
                alt=""
                height={200}
                width={100}
                title="title number 4"
                desc="number four pic description fot carousel card number four"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                src={Img5}
                alt=""
                height={200}
                width={100}
                title="title number 5"
                desc="number five pic description fot carousel card number five"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Featured;
