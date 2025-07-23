import React from 'react';
import '../styles/Project.css';

const projects = [
  {
    title: 'AI-Powered Portfolio Optimization Tool',
    link: 'https://github.com/arrysoni/AI-Powered-Portfolio-Optimization-Tool',
    tech: ['Streamlit', 'Reinforcement Learning', 'Python'],
    description:
      'A Streamlit web app that helps users optimize 20+ asset portfolios using reinforcement learning. Includes PDF export, risk sliders, and Sharpe Ratio benchmarking.'
  },
  {
    title: 'Interview Scheduler App (HireSphere)',
    link: 'https://github.com/arrysoni/interview-scheduler-app',
    tech: ['React', 'Tailwind CSS', 'Lucide-React'],
    description:
      'Role-based interview management app with dynamic forms, Kanban board, and analytics cards for HRs, candidates, and interviewers. Clean, modular design.'
  },
  {
    title: 'Modified CPU Design',
    link: 'https://github.com/arrysoni/Modified-CPU',
    tech: ['Verilog', 'MIPS Architecture'],
    description:
      'A fully implemented 5-stage pipelined MIPS CPU in Verilog with forwarding, hazard detection, and delayed branching support.'
  },
  {
    title: 'YumNum Food Delivery Website',
    link: 'https://github.com/arrysoni/yumnumfood',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A static 5-page responsive website with location-based filtering for food delivery. Deployed via GitHub Pages and optimized for all devices.'
  },
  {
    title: 'Course Scheduler',
    link: 'https://github.com/arrysoni/Course-Scheduler',
    tech: ['React', 'Firebase', 'Node.js'],
    description:
      'Helps students plan their academic schedule by generating optimized course combinations based on constraints like time, credit load, and prerequisites.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
