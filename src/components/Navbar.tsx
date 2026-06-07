import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { useNavigationTransition } from "../context/NavigationTransition";
import { getSmoother, setSmoother } from "./utils/scrollSmoother";
import { useLoading } from "../context/LoadingProvider";
import { destroyHomeScroll, resetHomeMotionState } from "./utils/homeMotionReset";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kavishparmar/" },
  { label: "GitHub", href: "https://github.com/kavishparmar" },
  { label: "Instagram", href: "https://www.instagram.com/kavishparmar_/" },
  { label: "Twitter", href: "https://x.com/kavishparmar_" },
];

// Magnetic hover — attaches to a button element
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

// Top-bar nav link with blob fill + magnetic
function TopNavBtn({ label, onClick, isActive }: { label: string; onClick: (e: React.MouseEvent) => void; isActive?: boolean }) {
  const ref = useMagnetic(0.3);
  return (
    <button ref={ref} type="button" className={`top-nav-link${isActive ? " active" : ""}`} onClick={onClick}>
      {label}
      <span className="top-active-dot" aria-hidden="true" />
    </button>
  );
}

// Sidebar nav link with dot indicator + magnetic
function SideNavBtn({
  label,
  onClick,
  style,
  isActive,
}: {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  isActive?: boolean;
}) {
  const ref = useMagnetic(0.18);
  return (
    <button ref={ref} type="button" className={`nav-link${isActive ? " active" : ""}`} style={style} onClick={onClick}>
      <span className="side-dot" />
      {label}
    </button>
  );
}

const Navbar = () => {
  const location = useLocation();
  const { startTransition } = useNavigationTransition();
  const { isLoading } = useLoading();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 80);
  const [logoHovered, setLogoHovered] = useState(false);
  const hamburgerRef = useMagnetic(0.3);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isHomePage = useMemo(() => location.pathname === "/", [location.pathname]);

  useEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content || !isHomePage) return;

    const createdSmoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    document.body.style.overflowY = "auto";
    setSmoother(createdSmoother);
    resetHomeMotionState();
    createdSmoother.scrollTop(0);
    window.scrollTo(0, 0);
    createdSmoother.paused(isLoading);

    const handleResize = () => {
      ScrollSmoother.refresh(true);
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflowY = "";
      destroyHomeScroll();
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage || isLoading) return;
    const rafId = requestAnimationFrame(() => {
      getSmoother()?.paused(false);
      getSmoother()?.scrollTop(0);
      window.scrollTo(0, 0);
      ScrollTrigger.refresh(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, [isHomePage, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const past = window.scrollY > 80;
      setScrolled(past);
      if (!past) setIsMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      getSmoother()?.paused(isMenuOpen);
    } else {
      document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
    }
    return () => {
      if (!isHomePage) document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen, isHomePage]);

  const attachMagneticHover = useCallback((el: HTMLElement, strength: number) => {
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && closeButtonRef.current) {
      return attachMagneticHover(closeButtonRef.current, 0.25);
    }
  }, [isMenuOpen, attachMagneticHover]);

  useEffect(() => {
    if (isMenuOpen) {
      const socialLinks = document.querySelectorAll(".nav-social-link");
      const cleanups: (() => void)[] = [];

      socialLinks.forEach((link) => {
        const cleanup = attachMagneticHover(link as HTMLElement, 0.2);
        cleanups.push(cleanup);
      });

      return () => {
        cleanups.forEach(cleanup => cleanup());
      };
    }
  }, [isMenuOpen, attachMagneticHover]);

  const closeMenu = () => setIsMenuOpen(false);

  const goHome = (e?: React.MouseEvent) => {
    closeMenu();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      startTransition("/", "HOME", e);
    }
  };

  const handleNav = (page: string, e: React.MouseEvent) => {
    closeMenu();
    const coords = { clientX: e.clientX, clientY: e.clientY };
    setTimeout(() => {
      if (page === "Work") startTransition("/work", "WORK", coords);
      else if (page === "About") startTransition("/about", "ABOUT", coords);
      else if (page === "Contact") startTransition("/contact", "CONTACT", coords);
    }, 300);
  };

  return (
    <>
      {/* ── Top navbar (visible before scroll) ── */}
      <header className={`top-navbar${scrolled ? " hidden" : ""}`}>
        <button
          type="button"
          className="top-navbar-logo"
          onClick={goHome}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <span className="logo-symbol">©</span>
          <span className="logo-texts">
            <span className={`logo-codeby${logoHovered ? " out" : ""}`}>&nbsp;Code by Kavish</span>
            <span className={`logo-kavish${logoHovered ? " in" : ""}`}>&nbsp;Kavish Parmar</span>
          </span>
        </button>

        <nav className="top-navbar-links">
          <TopNavBtn label="Work" onClick={(e) => handleNav("Work", e)} isActive={location.pathname === "/work"} />
          <TopNavBtn label="About" onClick={(e) => handleNav("About", e)} isActive={location.pathname === "/about"} />
          <TopNavBtn label="Contact" onClick={(e) => handleNav("Contact", e)} isActive={location.pathname === "/contact"} />
        </nav>
      </header>

      {/* ── Hamburger button (visible after scroll) ── */}
      <button
        ref={hamburgerRef}
        type="button"
        className={`btn-hamburger${scrolled ? " visible" : ""}${isMenuOpen ? " menu-open" : ""}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* ── Overlay ── */}
      <div
        className={`nav-overlay${isMenuOpen ? " active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Side drawer ── */}
      <nav className={`side-nav${isMenuOpen ? " active" : ""}`} aria-hidden={!isMenuOpen}>
        <button
          ref={closeButtonRef}
          type="button"
          className="side-nav-close"
          onClick={closeMenu}
          aria-label="Close navigation"
          style={{ position: "absolute", top: "20px", right: "28px", zIndex: 10, background: "none", border: "none", color: "#eae5ec", fontSize: "28px", cursor: "pointer", willChange: "transform", padding: "0", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          ✕
        </button>
        <div className="nav-section">
          <h5 className="nav-heading">Navigation</h5>
          {["Home", "Work", "About", "Contact"].map((item, i) => {
            const itemPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
            <SideNavBtn
              key={item}
              label={item}
              style={{ transitionDelay: isMenuOpen ? `${0.05 + i * 0.06}s` : "0s" }}
              onClick={(e) => (item === "Home" ? goHome(e) : handleNav(item, e))}
              isActive={location.pathname === itemPath}
            />
            );
          })}
        </div>

        <div className="nav-section nav-socials">
          <h5 className="nav-heading">Socials</h5>
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link"
              style={{ transitionDelay: isMenuOpen ? `${0.25 + i * 0.05}s` : "0s" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

    </>
  );
};

export default Navbar;
