import { useEffect, useRef, useState } from "react";
import "../styles/About.css";

export default function App() {
  const headerRef = useRef(null);
  const arrowRefs = {
    arr: useRef(null),
    brr: useRef(null),
    crr: useRef(null),
  };

  const [hoverState, setHoverState] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.top = "0px";
        headerRef.current.style.position = "sticky";
      }
      document.querySelectorAll(".reveal").forEach((el) => {
        const wndHeight = window.innerHeight;
        const rTop = el.getBoundingClientRect().top;
        const rPoint = 100;

        el.classList.toggle("active", rTop < wndHeight - rPoint);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseOver = (id) => {
    setHoverState((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverState((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="App">
      <nav>
        <div className="contact-info">
          <a href="mailto:karan.kumar@ecerasystem.com">
            <img src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png" alt="Email" />
            <span>karan.kumar@ecerasystem.com</span>
          </a>
          <a href="tel:+91 123456789">
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png" alt="Phone" />
            <span>+91 123456789</span>
          </a>
        </div>
     
      </nav>

      <header id="head" ref={headerRef}>
        <a href="#">
          <span>
            <img src="https://www.ecerasystem.com/ecerasystem/images/eslogo.png" alt="Logo" />
          </span>
          <span id="c_name"></span>
        </a>
        <ul>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#" onMouseOver={() => handleMouseOver('brr')} onMouseLeave={() => handleMouseLeave('brr')}>
              Register/Sign In
            </a>
            <div id="brr" ref={arrowRefs.brr} className={hoverState.brr ? "arrow-active" : "arrow"}></div>
          </li>
          <li>
            <a href="#" onMouseOver={() => handleMouseOver('arr')} onMouseLeave={() => handleMouseLeave('arr')}>
              Services
            </a>
            <div id="arr" ref={arrowRefs.arr} className={hoverState.arr ? "arrow-active" : "arrow"}></div>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Ecera System</h1>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png" alt="Hero" />
          <p>
            Our goal is to remove any technical or financial barriers that can prevent you from making your own website...
          </p>
        </section>

        <section className="services reveal">
          <h1>We Offer Innovative Technology Solutions</h1>
          <p>We provide a wide range of services to help your business grow online...</p>
          <div className="progress-bars">
            <div className="progress"><span>UI/UX Design</span><div className="progress-fill" style={{ width: '90%' }}></div></div>
            <div className="progress"><span>App Development</span><div className="progress-fill" style={{ width: '85%' }}></div></div>
            <div className="progress"><span>Web Development</span><div className="progress-fill" style={{ width: '70%' }}></div></div>
          </div>
        </section>
      </main>

      <footer>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
        <ul>
          <li><a href="#">Training</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <a href="tel:+91 232345553">+91 232345553</a>
        </div>
      </footer>

      <p className="copyright">&copy; 2025 Ecera System. All Rights Reserved.</p>
    </div>
  );
}