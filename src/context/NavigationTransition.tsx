import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/styles/NavigationTransition.css";
import { getSmoother } from "../components/utils/scrollSmoother";
import { resetHomeMotionState } from "../components/utils/homeMotionReset";

interface ClickCoords {
  clientX: number;
  clientY: number;
}

interface NavigationTransitionType {
  startTransition: (target: string, label: string, coords?: ClickCoords | React.MouseEvent) => void;
}

const NavigationTransitionContext =
  createContext<NavigationTransitionType | null>(null);

const DEFAULT_DELAY = 650;
const EXIT_DELAY = 1200;
const CURTAIN_DURATION = 950;

export const NavigationTransitionProvider = ({
  children,
}: PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const startTransition = useCallback(
    // coords param kept for API compatibility but not used by the curtain effect
    (target: string, _label: string, _coords?: ClickCoords | React.MouseEvent) => {
      const [pathname, hash = ""] = target.split("#");
      const nextPath = pathname || "/";
      const nextHash = hash ? `#${hash}` : "";

      if (
        location.pathname === nextPath &&
        location.hash === nextHash &&
        nextPath !== "/"
      ) {
        return;
      }

      clearTimers();
      setExiting(false);
      setVisible(true);

      timers.current.push(
        window.setTimeout(() => {
          if (nextPath === "/") {
            resetHomeMotionState();
            getSmoother()?.scrollTop(0);
          }

          navigate(nextHash ? `${nextPath}${nextHash}` : nextPath);
          window.scrollTo(0, 0);

          if (nextHash) {
            timers.current.push(
              window.setTimeout(() => {
                document
                  .getElementById(nextHash.replace("#", ""))
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 80)
            );
          }
        }, DEFAULT_DELAY)
      );

      timers.current.push(
        window.setTimeout(() => {
          setVisible(false);
          setExiting(true);
          timers.current.push(
            window.setTimeout(() => {
              setExiting(false);
            }, CURTAIN_DURATION)
          );
        }, EXIT_DELAY)
      );
    },
    [clearTimers, location.hash, location.pathname, navigate]
  );

  useEffect(() => clearTimers, [clearTimers]);

  const value = useMemo(
    () => ({
      startTransition,
    }),
    [startTransition]
  );

  return (
    <NavigationTransitionContext.Provider value={value}>
      {children}
      {/*
        SVG curtain — 120vh tall so the curved bottom overhangs 20vh.
        - below:  translateY(120%)  → entirely below viewport
        - active: translateY(0%)    → covers full screen (curve is below the fold)
        - exit:   translateY(-120%) → sweeps upward; curved edge crosses the viewport
                                      creating the wave-peel reveal (matches screenshot)
      */}
      <div
        className={`page-transition${
          visible
            ? " page-transition-active"
            : exiting
            ? " page-transition-exit"
            : " page-transition-below"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/*
            Path covers the full viewBox width and 100/120 of height (= 100vh),
            then a quadratic bezier dips down to y=120 (= 120vh) at the center.
            This curved hem is what sweeps visibly across the screen on exit.
          */}
          <path d="M0 0 L100 0 L100 100 Q50 120 0 100 Z" fill="#111111" />
        </svg>
      </div>
    </NavigationTransitionContext.Provider>
  );
};

export const useNavigationTransition = () => {
  const context = useContext(NavigationTransitionContext);
  if (!context) {
    throw new Error(
      "useNavigationTransition must be used within a NavigationTransitionProvider"
    );
  }
  return context;
};
