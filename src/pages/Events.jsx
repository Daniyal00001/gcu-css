import { useState } from 'react';
import { motion } from 'framer-motion';

const upcomingEvents = [
  {
    title: 'HackFest 2025',
    date: 'November 25-27, 2025',
    time: '48 Hours Non-Stop',
    location: 'Main Campus Auditorium',
    category: 'Hackathon',
    description: 'Join the biggest coding marathon of the year! Build innovative solutions, compete for prizes worth $10,000, and network with industry leaders.',
    participants: '500+',
    prizes: '$10,000',
    status: 'Registration Open',
    image: '🏆',
    tags: ['Coding', 'Competition', 'Prizes']
  },
  {
    title: 'AI & Machine Learning Summit',
    date: 'December 10, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Computer Science Block',
    category: 'Workshop',
    description: 'Deep dive into artificial intelligence and machine learning with hands-on sessions led by industry experts from Google and Microsoft.',
    participants: '200+',
    prizes: 'Certificates',
    status: 'Early Bird',
    image: '🤖',
    tags: ['AI', 'ML', 'Workshop']
  },
  {
    title: 'Tech Career Fair 2026',
    date: 'January 15, 2026',
    time: '10:00 AM - 5:00 PM',
    location: 'University Grounds',
    category: 'Networking',
    description: 'Meet recruiters from top tech companies, attend career talks, and land your dream job or internship opportunity.',
    participants: '1000+',
    prizes: 'Job Opportunities',
    status: 'Coming Soon',
    image: '💼',
    tags: ['Career', 'Networking', 'Jobs']
  },
  {
    title: 'CodeWars Championship',
    date: 'February 5, 2026',
    time: '12:00 PM - 8:00 PM',
    location: 'Virtual + On-Campus',
    category: 'Competition',
    description: 'Battle it out in competitive programming! Solve algorithmic challenges and climb the leaderboard for glory and prizes.',
    participants: '300+',
    prizes: '$5,000',
    status: 'Registration Open',
    image: '⚔️',
    tags: ['Programming', 'Algorithm', 'Competition']
  }
];

const pastEvents = [
  {
    title: 'Web Dev Bootcamp 2025',
    date: 'October 20, 2025',
    location: 'Lab 3, CS Block',
    category: 'Workshop',
    description: 'Intensive 3-day bootcamp covering React, Node.js, and modern web development practices.',
    participants: '150',
    image: '💻',
    highlights: ['Full Stack Development', '3 Days Training', 'Live Projects']
  },
  {
    title: 'Cybersecurity Symposium',
    date: 'September 15, 2025',
    location: 'Main Auditorium',
    category: 'Seminar',
    description: 'Industry leaders shared insights on ethical hacking, penetration testing, and cybersecurity trends.',
    participants: '400',
    image: '🔒',
    highlights: ['Expert Speakers', 'Live Demos', 'Networking']
  },
  {
    title: 'Game Dev Jam',
    date: 'August 10, 2025',
    location: 'Innovation Lab',
    category: 'Hackathon',
    description: '24-hour game development challenge where teams created innovative games from scratch.',
    participants: '80',
    image: '🎮',
    highlights: ['24 Hours', 'Game Creation', 'Cash Prizes']
  }
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .events-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #000814 0%, #001d3d 50%, #003366 100%);
          color: #e5e7eb;
          position: relative;
        }

        /* Animated Background Particles */
        .bg-particles {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100px, -1000px); opacity: 0; }
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 140px 20px 100px;
          text-align: center;
          overflow: hidden;
          z-index: 1;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          z-index: -1;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
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
          letter-spacing: 2px;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(229, 231, 235, 0.8);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: #ffd700;
          display: block;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        }

        .stat-label {
          font-size: 1rem;
          color: rgba(229, 231, 235, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        /* Tabs Section */
        .tabs-section {
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 16px 40px;
          background: rgba(0, 26, 51, 0.6);
          border: 2px solid rgba(255, 215, 0, 0.2);
          border-radius: 50px;
          color: rgba(229, 231, 235, 0.8);
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .tab-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tab-btn:hover::before {
          opacity: 1;
        }

        .tab-btn:hover {
          border-color: #ffd700;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          border-color: #ffd700;
          color: #001a33;
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.5);
        }

        /* Events Grid */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .event-card {
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.8), rgba(0, 51, 102, 0.6));
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 24px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .event-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #ffd700, #ffed4e, #ffd700);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .event-card:hover::before {
          opacity: 1;
        }

        .event-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: #ffd700;
          box-shadow: 0 25px 60px rgba(255, 215, 0, 0.25),
                      0 0 0 1px rgba(255, 215, 0, 0.1) inset;
        }

        .event-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.3));
        }

        .event-category {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(255, 215, 0, 0.15);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 20px;
          color: #ffd700;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .event-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .event-date-time {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .event-date-time span {
          font-size: 0.95rem;
          color: rgba(229, 231, 235, 0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .event-description {
          font-size: 1rem;
          color: rgba(229, 231, 235, 0.8);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .event-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 215, 0, 0.1);
          margin-top: 20px;
        }

        .meta-item {
          text-align: center;
        }

        .meta-value {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffd700;
          display: block;
        }

        .meta-label {
          font-size: 0.8rem;
          color: rgba(229, 231, 235, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        .event-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .tag {
          padding: 4px 12px;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          font-size: 0.8rem;
          color: rgba(255, 215, 0, 0.9);
        }

        .status-badge {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, #00ff88, #00cc6f);
          border-radius: 20px;
          color: #001a33;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3); }
          50% { box-shadow: 0 4px 25px rgba(0, 255, 136, 0.6); }
        }

        /* Past Event Card */
        .past-event-card {
          background: linear-gradient(135deg, rgba(0, 26, 51, 0.5), rgba(0, 51, 102, 0.4));
          border-color: rgba(255, 215, 0, 0.15);
        }

        .past-event-card .event-icon {
          opacity: 0.7;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: rgba(229, 231, 235, 0.7);
        }

        .highlight-item::before {
          content: '✓';
          color: #ffd700;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.9), rgba(0, 26, 51, 0.95));
          border-top: 2px solid rgba(255, 215, 0, 0.2);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
          filter: blur(80px);
          z-index: -1;
        }

        .cta-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffd700;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .cta-text {
          font-size: 1.3rem;
          color: rgba(229, 231, 235, 0.8);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .cta-btn {
          display: inline-block;
          padding: 20px 50px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #001a33;
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-btn:hover::before {
          width: 400px;
          height: 400px;
        }

        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(255, 215, 0, 0.6);
        }

        .cta-btn span {
          position: relative;
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .events-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stats-container {
            gap: 40px;
          }

          .cta-title {
            font-size: 2.2rem;
          }

          .cta-text {
            font-size: 1.1rem;
          }

          .events-grid {
            grid-template-columns: 1fr;
          }

          .tabs-container {
            gap: 12px;
          }

          .tab-btn {
            padding: 12px 24px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .event-title {
            font-size: 1.3rem;
          }

          .cta-btn {
            padding: 16px 36px;
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="events-page">
        {/* Animated Background Particles */}
        <div className="bg-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-glow" />
          <motion.h1
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Events
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the most exciting tech events, workshops, and hackathons. Network with industry leaders, 
            learn cutting-edge technologies, and showcase your skills!
          </motion.p>

          <motion.div
            className="stats-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Events Hosted</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Participants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$50K+</span>
              <span className="stat-label">In Prizes</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Tabs Section */}
        <section className="tabs-section">
          <div className="tabs-container">
            <button
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <motion.div
              className="events-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="event-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="event-icon">{event.image}</span>
                  <span className="event-category">{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-date-time">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>

                  <p className="event-description">{event.description}</p>

                  {event.tags && (
                    <div className="event-tags">
                      {event.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="event-meta">
                    <div className="meta-item">
                      <span className="meta-value">{event.participants}</span>
                      <span className="meta-label">Participants</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-value">{event.prizes}</span>
                      <span className="meta-label">Prizes</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <span className="status-badge">{event.status}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <motion.div
              className="events-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="event-card past-event-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="event-icon">{event.image}</span>
                  <span className="event-category">{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-date-time">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>

                  <p className="event-description">{event.description}</p>

                  <div className="highlights-list">
                    {event.highlights.map((highlight, i) => (
                      <div key={i} className="highlight-item">{highlight}</div>
                    ))}
                  </div>

                  <div className="event-meta">
                    <div className="meta-item">
                      <span className="meta-value">{event.participants}</span>
                      <span className="meta-label">Attended</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-value">⭐⭐⭐⭐⭐</span>
                      <span className="meta-label">Rating</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-glow" />
          <motion.h2
            className="cta-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Join?
          </motion.h2>
          <motion.p
            className="cta-text"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Don't miss out on incredible opportunities to learn, network, and grow. 
            Register now and be part of our thriving tech community!
          </motion.p>
          <motion.button
            className="cta-btn"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Register Now</span>
          </motion.button>
        </motion.section>
      </div>
    </>
  );
}