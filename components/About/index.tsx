"use client";
import { useRef, useEffect } from "react";
import { delay, motion, useInView } from "framer-motion";
import ProfileCard from "./ProfileCard";
import ArrowSvg from "@/svg/arrow-bottom.svg";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.8,
    once: true,
    // margin: "0px 0px -20% 0px",
  });

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault();

    if (isInView) {
      if (sectionRef.current) {
        window.scrollTo({
          top:
            document.documentElement.scrollTop +
            sectionRef.current.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }

      document.body.style.overflow = "hidden";
      document.body.addEventListener('touchmove', preventScroll, { passive: false });
      // 3초 후 스크롤 잠금 해제
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.removeEventListener('touchmove', preventScroll);
      }, 4500);

      // 컴포넌트가 언마운트되거나 의존성이 변경될 때 타이머 정리
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
        document.body.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isInView]);

  const backgroundVariants = {
    hidden: { scaleX: 1, originX: 1 },
    visible: {
      scaleX: 0,
      originX: 1,
      transition: {
        duration: 1.5,
        ease: [.33,.04,.08,.73],
      },
    },
  };

  const cardAnimation = () => {
    cardRef.current?.classList.add("active");
    textRef.current?.classList.add("active");
    descRef.current?.classList.add("active");
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#BCCFFF]/[0.1] relative flex flex-col justify-center items-center h-screen min-h-[530px] md:min-h-[840px] overflow-hidden"
    >
      <motion.div
        className="absolute w-full h-full bg-white z-10"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onAnimationComplete={cardAnimation}
      />
      <div ref={textRef} className="overflow-hidden about-text">
        <h2 className="font-extrabold text-[80px] max-md:text-[34px] tracking-[-1.6px]">
          근데 누구..?
        </h2>
      </div>
      <div ref={cardRef} className="about-card">
        <ProfileCard />
      </div>
      <article ref={descRef} className="about-desc">
        <div className="flex flex-col items-center">
          <p className="text-[30px] max-md:text-[24px] font-extrabold text-[#777777] tracking-[-0.32px] max-md:tracking-[-0.48px]">
            ABOUT <span className="text-[#3F3F3F]">. ME!</span>
          </p>
          <div className="w-[31px] max-md:w-[24px]">
            <ArrowSvg className="mt-[30px] max-md:mt-[20px]" />
          </div>
          <span className="mt-[38px] max-md:mt-[27px] text-center text-[26px] max-md:text-[16px] font-medium text-[#777777] tracking-[-0.52px] leading-[34px] whitespace-nowrap">
            앗, 제 소개를 깜빡했군요.
            <br /> 안녕하세요!{" "}
            <span className="text-[#3F3F3F] underline">
              비주얼 아이덴티티 디자이너{" "}
            </span>
            연우입니다. <br />
            <br />
            단순히 눈에 보이는 <span className="text-[#3F3F3F]">디자인</span>을
            넘어 <span className="text-[#3F3F3F]">디테일</span>에 대한{" "}
            <span className="text-[#3F3F3F]">집착</span>과
            <br />
            <span className="text-[#3F3F3F]">창의적인 접근</span>을 통해{" "}
            <span className="text-[#3F3F3F]">브랜드</span>가 전달하고자 하는{" "}
            <span className="text-[#3F3F3F]">가치</span>와{" "}
            <span className="text-[#3F3F3F]">이야기</span>를
            <br />
            <span className="text-[#3F3F3F]">시각적</span>으로 풀어내는 것에
            중점을 둡니다.
          </span>
        </div>
      </article>
    </section>
  );
}
