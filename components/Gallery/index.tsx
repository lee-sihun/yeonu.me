import ArrowSvg from "@/svg/angle-right-sharp-regular.svg";
import ImageSlider from "./ImageSlider";

export default function Gallery() {
  return (
    <section className="h-screen">
      <div className="mx-auto max-w-[1200px] flex flex-wrap justify-between items-baseline">
        <h2 className="font-extrabold text-[54px] tracking-[-1.08px]">
          내가 펼치는 세계
        </h2>
        <button className="flex items-center justify-center">
          <p className="font-semibold text-[24px] text-[#1581FF] mr-[7px]">
            더 있어요!
          </p>
          <ArrowSvg />
        </button>
      </div>
      <ImageSlider />
    </section>
  );
}
