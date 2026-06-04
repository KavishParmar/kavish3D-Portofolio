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

interface NavigationTransitionType {
  startTransition: (target: string, label: string) => void;
}

const NavigationTransitionContext =
  createContext<NavigationTransitionType | null>(null);

const DEFAULT_DELAY = 650;
const EXIT_DELAY = 1200;
const CURL_DURATION = 950; // slightly longer than the 0.9s CSS animation

export const NavigationTransitionProvider = ({
  children,
}: PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [label, setLabel] = useState("HOME");
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const startTransition = useCallback(
    (target: string, nextLabel: string) => {
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
      setLabel(nextLabel);
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
            }, CURL_DURATION)
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
      <div
        className={`page-transition${
          visible
            ? " page-transition-active"
            : exiting
            ? " page-transition-exit"
            : " page-transition-below"
        }`}
      >
        <strong className="page-transition-label">{label}</strong>
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
