import { useEffect } from "react";
import { gsap } from "gsap";

// Fires after the NavigationTransition overlay exits (EXIT_DELAY = 1200ms, mount at 650ms → 550ms left)
// For direct URL loads, adds a short 200ms delay instead.
const TRANSITION_DELAY = 0.55;
const DIRECT_DELAY = 0.2;

export function usePageEntry(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // If the page-transition overlay is still visible, we came via nav transition
    const isViaTransition = !!document.querySelector(".page-transition-active");
    const delay = isViaTransition ? TRANSITION_DELAY : DIRECT_DELAY;

    const tl = gsap.timeline({ delay });

    const kicker = el.querySelectorAll(".pe-kicker");
    const title = el.querySelectorAll(".pe-title");
    const body = el.querySelectorAll(".pe-body");
    const cards = el.querySelectorAll(".pe-card");
    const items = el.querySelectorAll(".pe-item");

    if (kicker.length) {
      tl.to(kicker, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0);
    }

    if (title.length) {
      tl.to(
        title,
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1 },
        kicker.length ? 0.1 : 0
      );
    }

    if (body.length) {
      tl.to(
        body,
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08 },
        0.3
      );
    }

    if (items.length) {
      tl.to(
        items,
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.1 },
        0.4
      );
    }

    if (cards.length) {
      tl.to(
        cards,
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.12 },
        0.3
      );
    }

    return () => {
      tl.kill();
      // Reset states for next navigation
      gsap.set([...kicker, ...title, ...body, ...cards, ...items], {
        clearProps: "all",
      });
    };
  }, [containerRef]);
}
