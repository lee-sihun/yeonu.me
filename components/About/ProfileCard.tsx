import Image from "next/image";
import bgImage from "@/img/card-background.png";
import profileImage from "@/img/profile.png";

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
    </figure>
  );
}
