import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'css@gcu.edu.pk',
      link: 'mailto:css@gcu.edu.pk'
    },
    {
      icon: '📱',
      title: 'Phone',
      detail: '+92 300 1234567',
      link: 'tel:+923001234567'
    },
    {
      icon: '📍',
      title: 'Location',
      detail: 'GC University, Katchery Road, Lahore',
      link: 'https://maps.google.com'
    },
    {
      icon: '🕐',
      title: 'Office Hours',
      detail: 'Mon - Fri: 9:00 AM - 5:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', color: '#0077b5', link: '#' },
    { icon: '🐦', name: 'Twitter', color: '#1da1f2', link: '#' },
    { icon: '📘', name: 'Facebook', color: '#1877f2', link: '#' },
    { icon: '📷', name: 'Instagram', color: '#e4405f', link: '#' },
    { icon: '💻', name: 'GitHub', color: '#333', link: '#' },
    { icon: '📺', name: 'YouTube', color: '#ff0000', link: '#' }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #000814 0%, #001d3d 50%, #003366 100%);
          color: #e5e7eb;
          position: relative;
          overflow-x: hidden;
        }

        /* Animated Background */
        .bg-gradient {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float-orb 15s ease-in-out infinite;
        }

        .orb-1 {
          top: 10%;
          left: 20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
          animation-delay: 0s;
        }

        .orb-2 {
          bottom: 20%;
          right: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 100, 200, 0.3), transparent);
          animation-delay: 5s;
        }

        .orb-3 {
          top: 60%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.2), transparent);
          animation-delay: 10s;
        }

        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 140px 20px 80px;
          text-align: center;
          z-index: 1;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(229, 231, 235, 0.8);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Main Content */
        .contact-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px 100px;
          position: relative;
          z-index: 1;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        /* Contact Info Section */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.8), rgba(0, 51, 102, 0.6));
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 20px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffd700, #ffed4e);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .info-card:hover::before {
          opacity: 1;
        }

        .info-card:hover {
          transform: translateX(10px);
          border-color: #ffd700;
          box-shadow: 0 20px 50px rgba(255, 215, 0, 0.2);
        }

        .info-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 16px;
          filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.4));
        }

        .info-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffd700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-detail {
          font-size: 1.05rem;
          color: rgba(229, 231, 235, 0.9);
          line-height: 1.6;
        }

        /* Social Links */
        .social-section {
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.8), rgba(0, 51, 102, 0.6));
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .social-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
          text-align: center;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: rgba(0, 26, 51, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.15);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          transform: translateY(-5px);
          border-color: #ffd700;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
        }

        .social-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
        }

        .social-name {
          font-size: 0.85rem;
          color: rgba(229, 231, 235, 0.8);
          font-weight: 600;
        }

        /* Form Section */
        .form-section {
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.8), rgba(0, 51, 102, 0.6));
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 24px;
          padding: 50px;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .form-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #ffd700, #ffed4e, #ffd700);
        }

        .form-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .form-subtitle {
          font-size: 1.05rem;
          color: rgba(229, 231, 235, 0.7);
          margin-bottom: 40px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          position: relative;
        }

        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(229, 231, 235, 0.9);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px 20px;
          background: rgba(0, 26, 51, 0.6);
          border: 2px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #ffd700;
          box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.1),
                      0 0 20px rgba(255, 215, 0, 0.2);
          background: rgba(0, 26, 51, 0.8);
        }

        .form-textarea {
          min-height: 160px;
          resize: vertical;
          font-family: inherit;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(229, 231, 235, 0.4);
        }

        .submit-btn {
          padding: 18px 40px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #001a33;
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .submit-btn:hover::before {
          width: 400px;
          height: 400px;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
        }

        .submit-btn:active {
          transform: translateY(-1px);
        }

        .submit-btn span {
          position: relative;
          z-index: 1;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success Message */
        .success-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, rgba(0, 255, 136, 0.95), rgba(0, 204, 111, 0.95));
          padding: 40px 60px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 255, 136, 0.4);
          z-index: 1000;
          text-align: center;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 16px;
          display: block;
          animation: bounce 0.6s ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .success-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #001a33;
          margin-bottom: 8px;
        }

        .success-text {
          font-size: 1.1rem;
          color: rgba(0, 26, 51, 0.8);
        }

        /* Map Section */
        .map-section {
          margin-top: 80px;
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.8), rgba(0, 51, 102, 0.6));
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(10px);
        }

        .map-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
          text-align: center;
        }

        .map-container {
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(255, 215, 0, 0.2);
          background: rgba(0, 26, 51, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-placeholder {
          text-align: center;
          color: rgba(229, 231, 235, 0.6);
        }

        .map-placeholder-icon {
          font-size: 4rem;
          margin-bottom: 16px;
          display: block;
          opacity: 0.5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-section {
            padding: 40px 30px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-section {
            padding: 30px 20px;
          }

          .form-title {
            font-size: 1.6rem;
          }

          .map-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .submit-btn {
            width: 100%;
          }

          .success-message {
            padding: 30px 40px;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Animated Background */}
        <div className="bg-gradient">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>

        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions? Want to join us? We'd love to hear from you! 
            Reach out and let's start a conversation.
          </motion.p>
        </motion.section>

        {/* Main Content */}
        <div className="contact-content">
          <div className="content-grid">
            {/* Left Side - Contact Info */}
            <motion.div
              className="info-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link || '#'}
                  className="info-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <h3 className="info-title">{info.title}</h3>
                  <p className="info-detail">{info.detail}</p>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                className="social-section"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h3 className="social-title">Connect With Us</h3>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="social-link"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <motion.button
                  type="button"
                  className="submit-btn"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="map-title">Find Us Here</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <span className="map-placeholder-icon">🗺️</span>
                <p>GC University Lahore</p>
                <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                  Katchery Road, Anarkali, Lahore, Punjab
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Message */}
        {submitted && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <span className="success-icon">✅</span>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-text">We'll get back to you soon.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}