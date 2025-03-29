 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

/*function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">Quizlike</h1>
        <div className="nav-buttons">
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Sign Up</button>
        </div>
      </nav>

      <div className="hero-section">
        <h2 className="hero-title">
          Engage. Learn. <span className="highlight">Succeed.</span>
        </h2>
        <p className="hero-text">
          Create fun, engaging quizzes and challenge your friends!
        </p>
        <button
          className={`start-btn ${hovered ? "pulse" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Get Started
        </button>
      </div>

      <div className="content">
        <div className="features">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>
              Create quizzes in minutes with a simple and intuitive interface.
              Perfect for teachers, students, and professionals.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-time Feedback</h3>
            <p>
              Get instant feedback and performance analytics to track progress
              and improve learning outcomes.
            </p>
          </div>
          <div className="feature-card">
            <h3>Engaging Design</h3>
            <p>
              Interactive and visually appealing quizzes that capture
              attention, making learning fun and dynamic.
            </p>
          </div>
        </div>

        <div className="courses">
          <h3 className="course-title">My Courses</h3>
          <ul className="course-list">
            <li>📚 Introduction to JavaScript</li>
            <li>🎨 UI/UX Design Basics</li>
            <li>⚙️ Machine Learning for Beginners</li>
            <li>🌐 Web Development Bootcamp</li>
            <li>📊 Data Analytics Crash Course</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;*/

import React from 'react';
function MainPage() {
  return (
    <div className="main-container">
      {/* Header with logo and auth buttons */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">Quizlike</h1>
        </div>
        <div className="auth-buttons">
          <button className="auth-btn login">Login</button>
          <button className="auth-btn signup">Sign Up</button>
        </div>
      </header>

      {/* Navigation menu */}
      <nav className="navigation">
        <ul className="nav-menu">
          <li className="nav-item active">
            <span className="nav-icon">📚</span>
            <span className="nav-text">My Classes</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📝</span>
            <span className="nav-text">Assignments</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Grades</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">🧠</span>
            <span className="nav-text">Attend a Quiz</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📄</span>
            <span className="nav-text">Materials</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📅</span>
            <span className="nav-text">Schedule</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">💬</span>
            <span className="nav-text">Discussions</span>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <main className="content-area">
        {/* Welcome banner */}
        <section className="welcome-banner">
          <h2>Welcome to Quizlike!</h2>
          <p>Your personal learning platform for interactive quizzes and educational content</p>
        </section>

        {/* Featured courses section */}
        <section className="featured-section">
          <h2 className="section-title">Featured Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <div className="course-image" style={{backgroundColor: '#4b7bec'}}></div>
              <div className="course-info">
                <h3>Introduction to JavaScript</h3>
                <p>Learn the fundamentals of JavaScript programming</p>
                <div className="course-meta">
                  <span className="course-level">Beginner</span>
                  <span className="course-lessons">12 lessons</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image" style={{backgroundColor: '#26de81'}}></div>
              <div className="course-info">
                <h3>React Essentials</h3>
                <p>Master building modern web applications with React</p>
                <div className="course-meta">
                  <span className="course-level">Intermediate</span>
                  <span className="course-lessons">10 lessons</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image" style={{backgroundColor: '#fd9644'}}></div>
              <div className="course-info">
                <h3>UI/UX Design Basics</h3>
                <p>Learn to create beautiful and functional user interfaces</p>
                <div className="course-meta">
                  <span className="course-level">Beginner</span>
                  <span className="course-lessons">8 lessons</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent quizzes section */}
        <section className="recent-quizzes">
          <h2 className="section-title">Recent Quizzes</h2>
          <div className="quiz-list">
            <div className="quiz-item">
              <div className="quiz-icon">🧩</div>
              <div className="quiz-details">
                <h3>JavaScript Fundamentals</h3>
                <p>Test your knowledge of basic JavaScript concepts</p>
                <div className="quiz-meta">
                  <span className="quiz-questions">15 questions</span>
                  <span className="quiz-time">20 minutes</span>
                </div>
              </div>
              <button className="take-quiz-btn">Take Quiz</button>
            </div>
            <div className="quiz-item">
              <div className="quiz-icon">🧩</div>
              <div className="quiz-details">
                <h3>CSS Layouts Challenge</h3>
                <p>Test your skills with flexbox and grid layouts</p>
                <div className="quiz-meta">
                  <span className="quiz-questions">10 questions</span>
                  <span className="quiz-time">15 minutes</span>
                </div>
              </div>
              <button className="take-quiz-btn">Take Quiz</button>
            </div>
            <div className="quiz-item">
              <div className="quiz-icon">🧩</div>
              <div className="quiz-details">
                <h3>React Hooks</h3>
                <p>Master the concepts of React hooks and state management</p>
                <div className="quiz-meta">
                  <span className="quiz-questions">12 questions</span>
                  <span className="quiz-time">18 minutes</span>
                </div>
              </div>
              <button className="take-quiz-btn">Take Quiz</button>
            </div>
          </div>
        </section>

        {/* Upcoming assignments section */}
        <section className="assignments-section">
          <h2 className="section-title">Upcoming Assignments</h2>
          <div className="assignment-list">
            <div className="assignment-item">
              <div className="assignment-date">
                <div className="month">APR</div>
                <div className="day">02</div>
              </div>
              <div className="assignment-details">
                <h3>JavaScript Array Methods</h3>
                <p>Complete the exercises on array manipulation methods</p>
                <div className="assignment-course">Introduction to JavaScript</div>
              </div>
              <div className="assignment-status">Due in 4 days</div>
            </div>
            <div className="assignment-item">
              <div className="assignment-date">
                <div className="month">APR</div>
                <div className="day">05</div>
              </div>
              <div className="assignment-details">
                <h3>Building a React Component</h3>
                <p>Create a reusable React component following best practices</p>
                <div className="assignment-course">React Essentials</div>
              </div>
              <div className="assignment-status">Due in 7 days</div>
            </div>
            <div className="assignment-item">
              <div className="assignment-date">
                <div className="month">APR</div>
                <div className="day">10</div>
              </div>
              <div className="assignment-details">
                <h3>User Interface Design Project</h3>
                <p>Design a mobile app interface with Figma</p>
                <div className="assignment-course">UI/UX Design Basics</div>
              </div>
              <div className="assignment-status">Due in 12 days</div>
            </div>
          </div>
        </section>

        {/* Materials section */}
        <section className="materials-section">
          <h2 className="section-title">Learning Materials</h2>
          <div className="materials-list">
            <div className="material-item">
              <div className="material-icon">📕</div>
              <div className="material-info">
                <h3>JavaScript Cheat Sheet</h3>
                <p>Quick reference for common JavaScript functions and syntax</p>
                <button className="material-download">Download PDF</button>
              </div>
            </div>
            <div className="material-item">
              <div className="material-icon">🎬</div>
              <div className="material-info">
                <h3>React Fundamentals Video Series</h3>
                <p>Comprehensive tutorials for getting started with React</p>
                <button className="material-download">Watch Videos</button>
              </div>
            </div>
            <div className="material-item">
              <div className="material-icon">📘</div>
              <div className="material-info">
                <h3>Web Design Guidelines</h3>
                <p>Best practices for creating accessible and responsive websites</p>
                <button className="material-download">Download PDF</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Quizlike</h2>
            <p>Learn. Quiz. Succeed.</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h3>Platform</h3>
              <ul>
                <li>Features</li>
                <li>Courses</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Support</h3>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Quizlike. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;

