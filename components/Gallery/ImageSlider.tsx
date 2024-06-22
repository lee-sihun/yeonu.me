import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import world1 from "@/img/world1.png";

export default function ImageSlider() {
  return (
    <div className="relative w-full overflow-hidden mt-[63px]">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={120}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
      </Swiper>
    </div>
  );
}
