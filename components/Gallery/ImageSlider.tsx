import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SliderButtons from "./SliderButtons";
import { images } from "./images";

interface ImageSliderProps {
  clickNext: boolean;
  setClickNext: (value: boolean) => void;
}

export default function ImageSlider({
  clickNext,
  setClickNext,
}: ImageSliderProps) {
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
        {Object.values(images).map((image, index) => (
          <SwiperSlide key={index}>
            <figure className="overflow-hidden w-full rounded-[30px] max-sm:rounded-[14px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
              />
            </figure>
          </SwiperSlide>
        ))}
        <SliderButtons clickNext={clickNext} setClickNext={setClickNext} />
      </Swiper>
    </div>
  );
}
