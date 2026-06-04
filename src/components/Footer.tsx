import { useNavigationTransition } from "../context/NavigationTransition";
import "./styles/Footer.css";

const Footer = () => {
  const { startTransition } = useNavigationTransition();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-left">
          <span className="footer-logo">KP</span>
          <p className="footer-tagline">
            AI Agency Founder &amp; Web Developer
            <br />
            Building the future, one pixel at a time.
          </p>
        </div>

        <div className="site-footer-right">
          <div className="footer-nav-group">
            <h6>Pages</h6>
            <ul>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); startTransition("/", "HOME"); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); startTransition("/about", "ABOUT"); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); startTransition("/work", "WORK"); }}>
                  Work
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); startTransition("/contact", "CONTACT"); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <h6>Connect</h6>
            <ul>
              <li>
                <a href="https://linkedin.com/in/kavish-parmar" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/kavishparmar" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:kavishparmar5@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {year} Kavish Parmar — All rights reserved.</p>
        <p className="footer-made-with">
          Designed &amp; Developed with <span>♥</span> by KP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
