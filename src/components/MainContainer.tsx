import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

import ErrorBoundary from "./ErrorBoundary";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Navbar />
      <ErrorBoundary fallback={null}>
        {isDesktopView && children}
      </ErrorBoundary>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>
              <ErrorBoundary fallback={null}>
                {!isDesktopView && children}
              </ErrorBoundary>
            </Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
