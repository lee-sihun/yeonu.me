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
      className={`flex justify-center items-center w-[106px] max-sm:w-[72px] h-[54px] max-sm:h-[36px] rounded-[100px] text-[24px] max-sm:text-[16px] font-semibold tracking-[-0.48] first:ml-0 ml-[12px] max-sm:ml-[9px] ${
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
    transition: { duration: 0.3, delay: 0.4 },
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
    <motion.section className="flex justify-center items-center h-screen">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-row max-xl:flex-col max-xl:items-center px-[20px]">
          <motion.h2
            className="font-extrabold text-[54px] max-sm:text-[32px] tracking-[-1.08px] max-sm:tracking-[-0.64px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            onAnimationComplete={startButtonAnimation}
          >
            사용하는 프로그램
          </motion.h2>
          <motion.div
            className="flex ml-[54px] max-xl:ml-[0px] max-xl:mt-[32px]"
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
        </div>
        <motion.div
          className="mx-auto flex flex-col"
          initial="offscreen"
          animate={skillControls}
          variants={variants}
        >
          <motion.div
            className="flex flex-wrap items-center gap-[77px] h-[177px] rounded-[30px] bg-[#E9E9E9] px-[78px] overflow-hidden mt-[83px]"
            layoutId="skillsContainer"
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {Object.entries(skills[activeYear].skills).map(
              ([skillName, SkillIcon]) => (
                <motion.div
                  key={`${activeYear}-${skillName}`}
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
          <p className="mx-auto mt-[50px] font-medium text-[24px] tracking-[-0.48px] text-[#313131]">
            {skills[activeYear].description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
