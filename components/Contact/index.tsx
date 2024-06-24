export default function Contact() {
  return (
    <section className="relative flex justify-center h-screen">
      <div className="max-w-[1200px] my-auto">
        <h2 className="text-[30px] font-extrabold text-[#777777] tracking-[-0.32px]">
          CONTACT <span className="text-[#3F3F3F]">. ME!</span>
        </h2>
        <h3 className="text-[96px] font-light text-[#111111] tracking-[-1.92px] my-[18px]">
          im@yeonu.me
        </h3>
        <span className="text-[26px] font-medium text-[#777777] tracking-[-0.52px]">
          <span className="text-[#111111]">차가운 화면</span> 너머,{" "}
          <span className="text-[#111111]">온기</span>를 느낄 수 있는{" "}
          <span className="text-[#111111]">디자인</span>
          <br />
          단순히 트렌드를 따르는 것이 아닌, 브랜드의 진심을 담아 오래도록 기억에
          남는 <span className="text-[#111111]">아이덴티티</span>를
          만들어갑니다.
        </span>
      </div>
      <div className="absolute z-0 top-0 flex select-none">
        <div className="animate-marquee3 whitespace-nowrap">
          <p className="flex font-black text-[#B4B5DF]/[.05] text-[840px] tracking-[-16.4px]">
            Yeonu Yeonu Yeonu 
          </p>
        </div>
        <div className="absolute top-0 animate-marquee4 whitespace-nowrap">
          <p className="flex font-black text-[#B4B5DF]/[.05] text-[840px] tracking-[-16.4px]">
            Yeonu Yeonu Yeonu 
          </p>
        </div>
      </div>
    </section>
  );
}
