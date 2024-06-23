"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import LeftArrow from "@/svg/arrow-left.svg";
import RightArrow from "@/svg/arrow-right.svg";
import Image from "next/image";
import world1 from "@/img/world1.png";

function SliderButtons() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateButtonStates = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateButtonStates);
    swiper.on("update", updateButtonStates);

    return () => {
      swiper.off("slideChange", updateButtonStates);
      swiper.off("update", updateButtonStates);
    };
  }, [swiper]);

  return (
    <div className="flex mt-[57px] justify-center">
      <button
        className={`w-[70px] h-[70px] rounded-full border-[1px] border-[#C9C9C9] flex items-center justify-center ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <LeftArrow />
      </button>
      <button
        className={`w-[70px] h-[70px] rounded-full border-[1px] border-[#C9C9C9] flex items-center justify-center ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default function ImageSlider() {
  return (
    <div className="relative w-full overflow-hidden mt-[63px]">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={120}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="overflow-hidden w-full rounded-[30px]">
            <Image src={world1} alt="world1" width={1200} height={681} />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="overflow-hidden w-full rounded-[30px]">
            <Image src={world1} alt="world1" width={1200} height={681} />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="overflow-hidden w-full rounded-[30px]">
            <Image src={world1} alt="world1" width={1200} height={681} />
          </figure>
        </SwiperSlide>
        <SliderButtons />
      </Swiper>
    </div>
  );
}
