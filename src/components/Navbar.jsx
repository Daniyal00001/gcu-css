import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import "./Navbar.css";
import logo from "../assets/images/CSS GOLD 2.png"; // ✅ update if your path differs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Announcements", path: "/announcements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <motion.nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-container container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <motion.img
              src={logo}
              alt="CSS GCU Logo"
              className="logo-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="logo-details">
              <span className="logo-title">CSS</span>
              <span className="logo-subtitle">GC University Lahore</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}

            {/* Register Button - Mobile */}
            <li className="nav-item mobile-only">
              <Link to="/register" className="btn btn-accent nav-btn">
                Register Now
              </Link>
            </li>
          </ul>

          {/* Register Button - Desktop */}
          <Link to="/register" className="btn btn-accent nav-btn desktop-only">
            Register Now
          </Link>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
