import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import world1 from "@/img/KakaoTalk_Photo_2024-07-05-23-19-01.png";
import SliderButtons from "./SliderButtons";

export default function ImageSlider() {
  return (
    <div className="relative w-full overflow-hidden mt-[58px] max-sm:mt-[22px]">
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
          <figure className="overflow-hidden w-full rounded-[30px] max-sm:rounded-[14px]">
            <Image src={world1} alt="world1" width={1200} height={675} />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="overflow-hidden w-full rounded-[30px] max-sm:rounded-[14px]">
            <Image src={world1} alt="world1" width={1200} height={675} />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="overflow-hidden w-full rounded-[30px] max-sm:rounded-[14px]">
            <Image src={world1} alt="world1" width={1200} height={675} />
          </figure>
        </SwiperSlide>
        <SliderButtons />
      </Swiper>
    </div>
  );
}
