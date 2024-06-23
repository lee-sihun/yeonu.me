"use client";
import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import LeftArrow from "@/svg/arrow-left.svg";
import RightArrow from "@/svg/arrow-right.svg";
import Image from "next/image";
import world1 from "@/img/world1.png";

function SliderButtons() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [clickCount, setClickCount] = useState(0);

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

  useEffect(() => {
    let warningTimer: NodeJS.Timeout;
    let resetTimer: NodeJS.Timeout;

    if (clickCount >= 3) {
      setShowWarning(true);
      warningTimer = setTimeout(() => {
        setShowWarning(false);
        setClickCount(0);
      }, 3000);
    }

    resetTimer = setTimeout(() => {
      if (clickCount < 3) {
        setClickCount(0);
      }
    }, 1000);

    return () => {
      clearTimeout(warningTimer);
      clearTimeout(resetTimer);
    };
  }, [clickCount]);

  const handleClick = useCallback(
    (direction: "prev" | "next") => {
      if (showWarning) return;
      setClickCount((prevCount) => prevCount + 1);
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    },
    [swiper, showWarning]
  );

  return (
    <div className="flex mt-[57px] justify-center items-center">
      <motion.button
        animate={{ x: showWarning ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`w-[70px] h-[70px] rounded-full border-[1px] border-[#C9C9C9] flex items-center justify-center ${
          isBeginning || showWarning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleClick("prev")}
        disabled={isBeginning || showWarning}
      >
        <LeftArrow />
      </motion.button>
      <motion.div
        animate={{ width: showWarning ? "auto" : "36px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence>
          {showWarning && (
            <motion.p
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-[18px] text-[24px] text-[#363636] tracking-[-0.48px] whitespace-nowrap"
            >
              천천히 보세요
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.button
        animate={{ x: showWarning ? 10 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`w-[70px] h-[70px] rounded-full border-[1px] border-[#C9C9C9] flex items-center justify-center ${
          isEnd || showWarning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleClick("next")}
        disabled={isEnd || showWarning}
      >
        <RightArrow />
      </motion.button>
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
