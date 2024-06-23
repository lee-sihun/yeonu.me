import Image from "next/image";
import bgImage from "@/img/card-background.png";

export default function ProfileCard() {
  return (
    <figure className="w-[635px] h-[351px] rounded-[22px] relative">
      <Image
        src={bgImage}
        alt="Background image of the card"
        fill={true}
        className="absolute inset-0"
      />
      <div className="glass w-full h-full absolute inset-0 z-10" />
    </figure>
  );
}
