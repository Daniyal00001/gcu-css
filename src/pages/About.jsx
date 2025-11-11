import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const missionVision = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To cultivate a dynamic community of tech enthusiasts, fostering innovation, collaboration, and continuous learning. We aim to bridge the gap between academic knowledge and industry practices through hands-on experiences and mentorship.',
    },
    {
      icon: '🚀',
      title: 'Our Vision',
      description: 'To establish CSS as Pakistan\'s leading student-run tech society, recognized for producing innovative thinkers, skilled developers, and future tech leaders who will shape the digital landscape of tomorrow.',
    },
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Encouraging creative thinking and breakthrough solutions',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Building strong partnerships and teamwork',
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous growth and skill development',
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Striving for quality in everything we do',
    },
  ];

  const achievements = [
    {
      year: '2024',
      title: 'National Hackathon Winners',
      description: 'Our team secured 1st place in Pakistan\'s largest student hackathon',
    },
    {
      year: '2023',
      title: 'Tech Taakra Launch',
      description: 'Successfully organized our flagship inter-university competition',
    },
    {
      year: '2023',
      title: 'Industry Partnership',
      description: 'Partnered with 20+ leading tech companies for mentorship programs',
    },
    {
      year: '2022',
      title: 'Society Expansion',
      description: 'Grew from 100 to 500+ active members in one year',
    },
  ];

  const team = [
    {
      name: 'Maryam Gondal',
      role: 'President',
   image: '👩‍💼',
      description: 'Leading CSS with vision and dedication',
    },
    {
      name: 'Zain Amir',
      role: 'Vice President',
         image: '👨‍💼',
      
      description: 'Managing operations and member engagement',
    },
    {
      name: 'Ali Raza',
      role: 'Technical Lead',
      image: '👨‍💻',
      description: 'Overseeing all technical initiatives',
    },
    {
      name: 'Fatima Malik',
      role: 'Events Manager',
      image: '👩‍🎓',
      description: 'Organizing impactful events and workshops',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-icon">📖</span>
              About Us
            </motion.div>
            <h1 className="about-title">
              Building the Future of <span className="highlight">Tech at GCU</span>
            </h1>
            <p className="about-subtitle">
              Established in 2020, the Computer Science Society has become GC University's 
              most active and impactful student organization, dedicated to empowering the 
              next generation of technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="mission-vision-grid">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                className="mission-vision-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="mv-icon">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="achievements-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey</h2>
            <p className="section-subtitle">
              Milestones that define our success
            </p>
          </motion.div>

          <div className="timeline">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-year">{achievement.year}</div>
                <div className="timeline-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Leaders</h2>
            <p className="section-subtitle">
              The dedicated team driving CSS forward
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="team-image">{member.image}</div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Want to Be Part of Our Story?</h2>
            <p>
              Join hundreds of students who are shaping the future of technology at GCU
            </p>
            <div className="cta-buttons">
              <a href="/register" className="btn btn-accent btn-lg">
                Join CSS Today
              </a>
              <a href="/events" className="btn btn-outline btn-lg">
                View Our Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;