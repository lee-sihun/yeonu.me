"use client";
import { motion, Variants, useAnimationControls } from "framer-motion";
import ArrowSvg from "@/svg/angle-right-sharp-regular.svg";
import ImageSlider from "./ImageSlider";

export default function Gallery() {
  const variants: Variants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const buttonControls = useAnimationControls();

  const startButtonAnimation = () => {
    buttonControls.start("onscreen");
  };

  return (
    <motion.section className="h-screen px-[20px] pt-[50px] mb-[50px] overflow-x-hidden">
      <div className="mx-auto max-w-[1200px] flex flex-wrap justify-between items-baseline">
        <motion.h2
          className="font-extrabold text-[54px] max-sm:text-[32px] tracking-[-1.08px] max-sm:tracking-[-0.64px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={variants}
          onAnimationComplete={startButtonAnimation} // 애니메이션 완료 시 함수 호출
        >
          내가 펼치는 세계
        </motion.h2>
        <motion.button
          className="flex items-center justify-center"
          initial="offscreen"
          animate={buttonControls}
          variants={variants}
        >
          <p className="font-semibold text-[24px] max-sm:text-[18px] text-[#1581FF] mr-[7px] hover:underline">
            더 있어요!
          </p>
          <div className="w-[16px] h-[26px] max-sm:w-[13px] max-sm:h-[21px]">
            <ArrowSvg />
          </div>
        </motion.button>
      </div>
      <ImageSlider />
    </motion.section>
  );
}
