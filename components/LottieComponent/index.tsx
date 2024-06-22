import React, { useState, useRef, useEffect } from "react";
import Lottie, { AnimationItem, AnimationConfigWithData } from "lottie-web";

// Lottie 컴포넌트 Props 타입 정의
interface LottieComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  isPaused?: boolean;
  isStopped?: boolean;
}

// Lottie 컴포넌트 정의
const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  loop,
  autoplay,
  speed,
  isPaused,
  isStopped,
  ...restProps
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [animationInstance, setAnimationInstance] =
    useState<AnimationItem | null>(null);

  useEffect(() => {
    const animationOptions: AnimationConfigWithData = {
      container: animationContainer.current as HTMLDivElement, // container 타입 명시
      renderer: "svg",
      loop: loop !== undefined ? loop : true,
      autoplay: autoplay !== undefined ? autoplay : true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const animation = Lottie.loadAnimation(animationOptions);
    setAnimationInstance(animation);

    return () => animation.destroy();
  }, [animationData, loop, autoplay]);

  useEffect(() => {
    if (animationInstance) {
      if (isPaused) {
        animationInstance.pause();
      } else {
        animationInstance.play();
      }

      if (isStopped) {
        animationInstance.stop();
      }

      if (speed !== undefined) {
        animationInstance.setSpeed(speed);
      }
    }
  }, [isPaused, isStopped, speed, animationInstance]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;

// https://velog.io/@smurf_/%EB%82%B4%EA%B0%80-%EB%8B%B5%EB%8B%B5%ED%95%B4%EC%84%9C-%EC%A0%81%EC%96%B4%EB%91%90%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%93%B0%EB%8A%94-Lottie-Web