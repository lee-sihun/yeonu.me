"use client";
import Image from "next/image";
import bgImage from "@/img/card-background.png";
import profileImage from "@/img/profile.png";
import { useRef } from "react";

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const xPercentage = x / rect.width;
    const yPercentage = y / rect.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    cardRef.current.style.setProperty("--x-rotation", `${yRotation}deg`);
    cardRef.current.style.setProperty("--y-rotation", `${xRotation}deg`);
    cardRef.current.style.setProperty("--x", `${xPercentage * 100}%`);
    cardRef.current.style.setProperty("--y", `${yPercentage * 100}%`);
  };

  return (
    <figure
      ref={cardRef}
      onMouseMove={handleMouseMove}
      // transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] [perspective:800px]
      className="rotate-[-4.5deg] w-[635px] h-[351px] rounded-[22px] relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] max-md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(0.55)] [perspective:800px] max-md:scale-[0.5]"
    >
      <Image
        src={bgImage}
        alt="Background image of the card"
        fill={true}
        className="absolute inset-0 rounded-[22px]"
      />
      <div className="glass w-full h-full absolute inset-0 z-10" />
      <div className="absolute w-[224px] h-[224px] rounded-[10px] shadow-inner top-[22px] right-[23px] z-20">
        <Image
          src={profileImage}
          alt="Profile image of the card"
          fill={true}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute top-[32px] left-[40px] z-20">
        <p className="text-[32px] font-semibold text-white tracking-[2.56px]">
          ARTIST
        </p>
      </div>
      <div className="absolute bottom-[64px] left-[42px] z-20">
        <p className="text-[32px] font-semibold text-white tracking-[2.56px]">
          LEE YEONU
        </p>
      </div>
      <div className="absolute bottom-[31px] left-[42px] z-20">
        <p className="text-[28px] font-semibold text-white tracking-[2.24px]">
          020710-4XXXXXX
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
    </figure>
  );
}
// https://www.frontend.fyi/v/css-3d-perspective-animations
