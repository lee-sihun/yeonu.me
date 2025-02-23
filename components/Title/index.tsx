"use client";
import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import LottieComponent from "@/components/LottieComponent";
import logoJson from "@/json/logo.json";
import { useRouter } from "next/navigation";

export default function Title() {
  const router = useRouter();
  const lottieRef = useRef(null);
  const [description, setDescription] = useState(
    <span>
      당신을 위한 디자인
      <br />ㅤ
    </span>
  );

  const handleEnterFrame = (frame: number) => {
    const roundedFrame = Math.round(frame);
    if (roundedFrame === 145) {
      setDescription(
        <span>
          개성과 가치를 시각적으로 구현하며 <br className="max-sm:hidden" />
          일관적이면서도 <br className="hidden max-sm:inline" /> 감성적으로
          연결할 수 있는 비주얼 아이덴티티를 창조합니다.
        </span>
      );
    }
  };

  const handleLottieClick = () => {
    router.push("/blog");
  };

  const variants: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative flex justify-center h-screen overflow-x-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="z-10 flex flex-col items-center justify-center"
        variants={variants}
      >
        <div
          onClick={handleLottieClick}
          className="cursor-pointer" 
        >
          <LottieComponent
            animationData={logoJson}
            loop={false}
            autoplay={true}
            ref={lottieRef}
            onEnterFrame={handleEnterFrame}
          />
        </div>
        <div className="mt-[-32px] text-center text-[24px] max-sm:text-[16px] text-[#777777] tracking-[-0.52px] max-sm:tracking-[-0.28px] leading-[34px] max-sm:leading-[22px] whitespace-pre-line flex items-start">
          <AnimatePresence mode="wait">
            <motion.p
              // key={description} // description이 바뀔 때마다 새로운 key 할당
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              {description}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute z-0 bottom-[48%] flex select-none">
        <div className="animate-marquee whitespace-nowrap">
          <p className="flex font-black text-[#9D9D9D]/[.16] text-[240px] max-sm:text-[132px]">
            I like gaming more than working 
          </p>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <p className="flex font-black text-[#9D9D9D]/[.16] text-[240px] max-sm:text-[132px]">
            I like gaming more than working 
          </p>
        </div>
      </div>
    </motion.section>
  );
}
