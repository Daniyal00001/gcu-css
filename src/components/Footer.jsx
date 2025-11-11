import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Register', path: '/register' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: '📘', 
      url: 'https://facebook.com/cssgcu',
      ariaLabel: 'Visit our Facebook page'
    },
    { 
      name: 'Instagram', 
      icon: '📸', 
      url: 'https://instagram.com/cssgcu',
      ariaLabel: 'Follow us on Instagram'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/company/cssgcu',
      ariaLabel: 'Connect on LinkedIn'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/cssgcu',
      ariaLabel: 'Follow us on Twitter'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Footer Top */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">CSS</div>
              <div className="footer-logo-text">
                <h3>Computer Science Society</h3>
                <p>GC University Lahore</p>
              </div>
            </div>
            <p className="footer-desc">
              Empowering students through technology, innovation, and collaboration. 
              Building the future of computer science, one event at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:css@gcu.edu.pk" className="footer-link">
                  css@gcu.edu.pk
                </a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>GC University, Katchery Road, Lahore</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+92 42 111 000 010</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.ariaLabel}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="newsletter">
              <p className="newsletter-text">Stay updated with our events</p>
              <Link to="/register" className="btn btn-accent btn-sm">
                Join Now
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Computer Science Society, GCU Lahore. All rights reserved.
            </p>
            <p className="dev-credit">
              Built with ❤️ for Tech Taakra 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;