import { ScrollSmoother } from "gsap/ScrollSmoother";

let smoother: ScrollSmoother | undefined;

export const setSmoother = (value: ScrollSmoother | undefined) => {
  smoother = value;
};

export const getSmoother = () => smoother;
