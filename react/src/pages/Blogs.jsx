import React from 'react';
import '../styles/Blog.css';
import RevealOnScroll from '../components/RevealOnScroll';

const blogs = [
  {
    title: 'From Writing to Experience: How a Technical Writing Project Transformed My View of UI/UX',
    date: 'July 2025',
    summary:
      'This reflective piece traces how a college technical writing assignment sparked a deep appreciation for user-centered design and shaped how I now approach UI/UX in real-world projects.',
    link: 'https://medium.com/@aarya19204/from-writing-to-experience-how-a-technical-writing-project-transformed-my-view-of-ui-ux-3d2e7cd5637e'
  }
];

const Blog = () => {
  return (
    <section id="blogs" className="blog-section">
      <RevealOnScroll delay={0}>
        <h2 className="blog-title">Blogs</h2>
      </RevealOnScroll>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <RevealOnScroll delay={0.1 + index * 0.15} key={index}>
            <div className="blog-card">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-summary">{blog.summary}</p>
              <a
                href={blog.link}
                className="blog-link"
                target="_blank"
                rel="noreferrer"
              >
                Read on Medium →
              </a>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Blog;
