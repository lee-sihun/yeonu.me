import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import Lottie, { AnimationItem, AnimationConfigWithData } from "lottie-web";

// Lottie 컴포넌트 Props 타입 정의
interface LottieComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  isPaused?: boolean;
  isStopped?: boolean;
  onEnterFrame?: (frame: number) => void;
}

// 외부에서 사용할 수 있는 메서드를 정의하는 인터페이스
interface LottieComponentRef {
  goToAndPlay: (frame: number, isPlaying?: boolean) => void;
}

// forwardRef를 사용하여 컴포넌트를 감싸고 ref 전달
const LottieComponent = forwardRef<LottieComponentRef, LottieComponentProps>(
  (
    {
      animationData,
      loop,
      autoplay,
      speed,
      isPaused,
      isStopped,
      onEnterFrame,
      ...restProps
    },
    ref
  ) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const [animationInstance, setAnimationInstance] =
      useState<AnimationItem | null>(null);

    useEffect(() => {
      const animationOptions: AnimationConfigWithData = {
        container: animationContainer.current as HTMLDivElement,
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

      // onEnterFrame 이벤트 리스너 등록
      animation.addEventListener("enterFrame", () => {
        const currentFrame = animation.currentFrame;
        if (onEnterFrame) {
          onEnterFrame(currentFrame);
        }
      });

      // 컴포넌트 unmount 시 애니메이션 정리
      return () => animation.destroy();
    }, [animationData, loop, autoplay]); // onEnterFrame 제거

    // Lottie 인터랙션 관리
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

    // 외부에서 사용할 메서드를 useImperativeHandle로 노출
    useImperativeHandle(ref, () => ({
      goToAndPlay(frame: number, isPlaying: boolean = true) {
        if (animationInstance) {
          animationInstance.goToAndPlay(frame, isPlaying);
        }
      },
    }));

    return <div ref={animationContainer} {...restProps} />;
  }
);

export default LottieComponent;
