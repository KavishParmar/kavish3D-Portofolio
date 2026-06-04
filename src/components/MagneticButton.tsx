import { useRef, type ReactNode, type CSSProperties } from "react";
import { gsap } from "gsap";

interface Props {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}

const MagneticButton = ({ children, strength = 0.4, className, style }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: "power2.out" });
  };

  const onMouseLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
