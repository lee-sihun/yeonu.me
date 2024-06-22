"use client";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import LottieComponent from "@/components/LottieComponent";
import logoJson from "@/json/logo.json";

export default function Title() {
  const lottieRef = useRef(null);
  const [description, setDescription] = useState("당신을 위한 디자인");

  const handleEnterFrame = (frame: number) => {
    const roundedFrame = Math.round(frame); // 프레임 값을 정수로 반올림
    if (roundedFrame === 85) {
      setDescription(
        "개성과 가치를 시각적으로 구현하며 \n 일관적이면서도 감성적으로 연결할 수 있는 비주얼 아이덴티티를 창조합니다."
      );
    }
  };

  const variants: Variants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative flex justify-center h-screen"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="z-10 flex flex-col items-center my-auto"
        variants={variants}
      >
        {/* <h1 className="font-black text-[200px] text-[#111111] tracking-[-4px]">
          Yeonu
        </h1> */}
        <LottieComponent
          animationData={logoJson}
          loop={false}
          autoplay={true}
          ref={lottieRef}
          onEnterFrame={handleEnterFrame} // 이벤트 핸들러 연결
        />

        <div className=" text-center text-[24px] text-[#777777] tracking-[-0.52px] leading-[34px] whitespace-pre-line">
          <p>{description}</p>
        </div>
      </motion.div>

      <div className="absolute z-0 bottom-[48%] flex">
        <div className="animate-marquee whitespace-nowrap">
          <p className="flex font-black text-[#9D9D9D]/[.16] text-[240px]">
            I like gaming more than working 
          </p>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <p className="flex font-black text-[#9D9D9D]/[.16] text-[240px]">
            I like gaming more than working 
          </p>
        </div>
      </div>
    </motion.section>
  );
}
