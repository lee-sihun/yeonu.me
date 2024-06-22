"use client";
import { motion, Variants } from "framer-motion";

export default function Home() {
  return (
    <>
      <Title />
      <Title />
      <Title />
    </>
  );
}

function Title() {
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
        <h1 className="font-black text-[200px] text-[#111111]">Yeonu</h1>
        <div className="text-center text-[26px] text-[#777777]">
          <p>개성과 가치를 시각적으로 구현하며</p>
          <p>
            일관적이면서도 감성적으로 연결할 수 있는 비주얼 아이덴티티를
            창조합니다.
          </p>
        </div>
      </motion.div>
      <div className="absolute z-0 bottom-1/2 flex">
        <div className="animate-marquee whitespace-nowrap">
          <p className="flex font-black text-gray-200 text-9xl">
            I like gaming more than working 
          </p>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <p className="flex font-black text-gray-200 text-9xl">
            I like gaming more than working 
          </p>
        </div>
      </div>
    </motion.section>
  );
}
