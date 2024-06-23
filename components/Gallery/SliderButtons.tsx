"use client";
import { useState, useEffect, useCallback } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "@/svg/arrow-left.svg";
import RightArrow from "@/svg/arrow-right.svg";
import { motion, AnimatePresence, Variants } from "framer-motion";

const buttonVariants: Variants = {
  normal: { x: 0 },
  warning: (direction: "left" | "right") => ({
    x: direction === "left" ? -10 : 10,
  }),
};

const messageContainerVariants: Variants = {
  hidden: { width: "36px" },
  visible: { width: "auto" },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "auto" },
};

const useSliderControl = (swiper: any) => {
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

  return { isBeginning, isEnd, showWarning, handleClick };
};

export default function SliderButtons() {
  const swiper = useSwiper();
  const { isBeginning, isEnd, showWarning, handleClick } =
    useSliderControl(swiper);

  return (
    <div className="flex mt-[57px] justify-center items-center">
      <motion.button
        variants={buttonVariants}
        custom="left"
        animate={showWarning ? "warning" : "normal"}
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
        variants={messageContainerVariants}
        initial="hidden"
        animate={showWarning ? "visible" : "hidden"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence>
          {showWarning && (
            <motion.p
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="mx-[18px] text-[24px] text-[#363636] tracking-[-0.48px] whitespace-nowrap select-none"
            >
              천천히 보세요!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.button
        variants={buttonVariants}
        custom="right"
        animate={showWarning ? "warning" : "normal"}
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
