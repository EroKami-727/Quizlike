 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

function App() {
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

export default App;

