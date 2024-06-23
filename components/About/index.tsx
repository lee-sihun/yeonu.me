"use client";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function About() {
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

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <motion.div
        className="overflow-hidden"
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-extrabold text-[80px] tracking-[-1.6px]">
          근데 누구..?
        </h2>
      </motion.div>
      <ProfileCard />
    </section>
  );
}
