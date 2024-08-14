"use client";
import { useState, ReactNode } from "react";
import { skills } from "@/components/SkillsList/skills";
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
      className={`w-[106px] max-sm:w-[72px] h-[54px] max-sm:h-[36px] rounded-[100px] text-[24px] max-sm:text-[16px] font-semibold tracking-[-0.48] mr-[12px] max-sm:mr-[9px] ${
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

export default function Test() {
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
    <motion.section className="pt-[200px] max-w-[1220px] h-screen mx-auto">
      <div className="mx-5">
        <div className="flex mx-auto max-xl:flex-col">
          <motion.h2
            className="max-xl:mx-auto font-extrabold text-[54px] max-sm:text-[32px] tracking-[-1.08px] max-sm:tracking-[-0.64px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            onAnimationComplete={startButtonAnimation}
          >
            사용하는 프로그램
          </motion.h2>
          <div className="flex justify-center">
            <div className="max-w-[100%] overflow-hidden">
              <motion.div
                className="overflow-x-scroll whitespace-nowrap scroll ml-[54px] max-xl:ml-[0px] max-xl:mt-[32px]"
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
          </div>
        </div>
        <motion.div
          className="mx-auto flex flex-col"
          initial="offscreen"
          animate={skillControls}
          variants={variants}
        >
          <motion.div
            className="mx-auto flex flex-wrap justify-center items-center gap-x-[74px] max-sm:gap-x-[30px] gap-y-[30px] w-fit rounded-[30px] max-sm:rounded-[14px] bg-[#E9E9E9] px-[78px] max-sm:px-[20px] overflow-hidden mt-[83px] max-xl:mt-[32px] pt-[30px] pb-[34px]"
            layoutId="skillsContainer"
            initial={{ borderRadius: 30 }}
            animate={{ borderRadius: [30, 30] }}
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
                  className="flex flex-col justify-center items-center w-[87px] max-sm:w-[75px]"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex h-[85px] max-sm:h-[52px] items-center mb-[16px] max-sm:mb-[7px]">
                    <div className="max-sm:scale-[0.6]">
                      <SkillIcon />
                    </div>
                  </div>
                  <p className="relative font-medium text-[16px] max-sm:text-[14px] text-[#313131] tracking-[-0.32px]">
                    {skillName}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
          <p className="text-center leading-[32px] mx-auto mt-[50px] max-sm:mt-[32px] font-medium text-[24px] max-sm:text-[20px] tracking-[-0.48px] text-[#313131]">
            {skills[activeYear].description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
