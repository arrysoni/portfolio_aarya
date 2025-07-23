import React from 'react';
import '../styles/Experience.css';
import RevealOnScroll from '../components/RevealOnScroll';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Aerolens LLC',
    location: 'Massachusetts (Hybrid)',
    duration: 'May 2025 – Present',
    bullets: [
      <>
        Developed <strong>8+ modular React components</strong> to enhance drone UI dashboards used by <strong>3 commercial clients</strong>.
      </>,
      <>
        Designed and implemented an internal <strong>HR Management System</strong> using <strong>React and Firebase</strong>, featuring <strong>Kanban boards</strong>, <strong>dynamic forms</strong>, and <strong>real-time status updates</strong>.
      </>
    ]
  },
  {
    title: 'Technology Team Member',
    company: 'Hack PSU',
    location: 'University Park, PA',
    duration: 'Jan 2024 – Jan 2025',
    bullets: [
      <>
        Led the <strong>2024 website redesign</strong> using <strong>React</strong>, increasing <strong>average session time by 40%</strong>.
      </>,
      <>
        Assisted with <strong>backend deployment</strong> and evaluated <strong>50+ hackathon project submissions</strong>.
      </>
    ]
  },
  {
    title: 'Engagement Team Head',
    company: 'Girls Who Code College Loop',
    location: 'University Park, PA',
    duration: 'Aug 2023 – Jan 2025',
    bullets: [
      <>
        Led <strong>outreach for 50+ active members</strong> and increased engagement by <strong>30%</strong>.
      </>,
      <>
        Coordinated speaker events and <strong>represented Penn State</strong> at the <strong>national Leadership Conference</strong>.
      </>
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <RevealOnScroll delay={0}>
        <h2 className="experience-title">Experience</h2>
      </RevealOnScroll>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <RevealOnScroll delay={0.1 + index * 0.1} key={index}>
            <div className="experience-card">
              <h3>{exp.title}</h3>
              <h4>
                {exp.company} · <span>{exp.location}</span>
              </h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Experience;
