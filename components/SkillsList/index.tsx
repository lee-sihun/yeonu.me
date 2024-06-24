"use client";
import { useState, ReactNode } from "react";
import { skills } from "./skills";
import { motion, Variants, useAnimationControls } from "framer-motion";

interface YearButtonProps {
  active?: boolean;
  children: ReactNode;
  onClick: () => void;
}

function YearButton({ active, children, onClick }: YearButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center w-[106px] h-[54px] rounded-[100px] text-[24px] font-semibold tracking-[-0.48] ml-[12px] ${
        active ? "bg-[#E9E9E9] text-[#111111]" : "text-[#575757]"
      }`}
    >
      {children}
    </button>
  );
}

const variants: Variants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.3 },
  },
};

export default function SkillsList() {
  const [activeYear, setActiveYear] = useState<string>(
    Object.keys(skills).reverse()[0]
  );
  const years = Object.keys(skills).reverse();

  const handleYearButtonClick = (year: string) => {
    setActiveYear(year);
  };

  const buttonControls = useAnimationControls();
  const skillControls = useAnimationControls();

  const startButtonAnimation = () => {
    buttonControls.start("onscreen");
  };

  const startSkillAnimation = () => {
    skillControls.start("onscreen");
  };

  return (
    <motion.section className="flex justify-center items-center h-screen px-[24px]">
      <div className="mx-auto max-w-[1200px] flex flex-wrap">
        <motion.h2
          className="font-extrabold text-[54px] tracking-[-1.08px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={variants}
          onAnimationComplete={startButtonAnimation}
        >
          사용하는 프로그램
        </motion.h2>
        <motion.div
          className="flex flex-wrap ml-[42px]"
          initial="offscreen"
          animate={buttonControls}
          variants={variants}
          onAnimationComplete={startSkillAnimation}
        >
          {years.map((year) => (
            <YearButton
              key={year}
              active={activeYear === year}
              onClick={() => handleYearButtonClick(year)}
            >
              {year}
            </YearButton>
          ))}
        </motion.div>
        <motion.div
          className="mx-auto"
          initial="offscreen"
          animate={skillControls}
          variants={variants}
        >
          <motion.div
            className="flex flex-wrap items-center gap-[77px] h-[177px] rounded-[30px] bg-[#E9E9E9] px-[78px] overflow-hidden mt-[83px]"
            layout
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 60,
              damping: 10,
            }}
          >
            {Object.entries(skills[activeYear]).map(
              ([skillName, SkillIcon]) => (
                <motion.div
                  key={skillName}
                  className="flex flex-col items-center"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex h-[85px] items-center mb-[16px]">
                    <SkillIcon />
                  </div>
                  <p className="relative font-medium text-[16px] text-[#313131] tracking-[-0.32px]">
                    {skillName}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
