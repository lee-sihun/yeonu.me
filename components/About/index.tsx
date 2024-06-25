"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const divVariants = {
    hidden: { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardAnimation = () => {
    cardRef.current?.classList.add('active');
    textRef.current?.classList.add('active');
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-screen overflow-hidden">
      <motion.div
        ref={textRef}
        className="overflow-hidden about-text"
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onAnimationComplete={cardAnimation}
      >
        <h2 className="font-extrabold text-[80px] tracking-[-1.6px]">
          근데 누구..?
        </h2>
      </motion.div>
      <div ref={cardRef} className="about-card">
        <ProfileCard />
      </div>
    </section>
  );
}
