import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSmoother, setSmoother } from "./scrollSmoother";

gsap.registerPlugin(ScrollTrigger);

export const resetHomeMotionState = () => {
  gsap.killTweensOf([
    ".character-model",
    ".landing-container",
    ".about-me",
    ".about-section",
    ".what-box-in",
    ".whatIDO",
    ".character-rim",
  ]);

  gsap.set(".character-model", {
    clearProps: "transform,x,y,pointerEvents",
  });
  gsap.set(".landing-container", { clearProps: "transform,opacity" });
  gsap.set(".about-me", { clearProps: "transform,opacity" });
  gsap.set(".about-section", { clearProps: "transform,opacity" });
  gsap.set(".whatIDO", { clearProps: "transform" });
  gsap.set(".character-rim", { clearProps: "transform,opacity" });

  ScrollTrigger.clearScrollMemory();
};

export const destroyHomeScroll = () => {
  getSmoother()?.kill();
  setSmoother(undefined);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  resetHomeMotionState();
};
