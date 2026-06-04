import { useEffect, useRef, type ReactNode } from "react";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";
import { usePageEntry } from "./utils/pageEntryAnimation";
import { destroyHomeScroll } from "./utils/homeMotionReset";
import "./styles/PageEntry.css";

interface PageLayoutProps {
  children: ReactNode;
  pageKey: string;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntry(containerRef as React.RefObject<HTMLElement>);

  // Kill ScrollSmoother (home page) and unlock body scroll for inner pages
  useEffect(() => {
    destroyHomeScroll();
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <SocialIcons />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
