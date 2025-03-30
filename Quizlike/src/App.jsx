import { useState } from 'react';
import './App.css';
import React from 'react';

function MainPage() {
  // State to track which navigation item is active
  const [activeNav, setActiveNav] = useState('My Classes');

  // Navigation items data
  const navItems = [
    { icon: '📚', text: 'My Classes' },
    { icon: '📝', text: 'Assignments' },
    { icon: '📊', text: 'Grades' },
    { icon: '🧠', text: 'Attend a Quiz' },
    { icon: '📄', text: 'Materials' },
    { icon: '📅', text: 'Schedule' },
    { icon: '💬', text: 'Discussions' }
  ];

  // Handler for navigation item click
  const handleNavClick = (navText) => {
    setActiveNav(navText);
  };

  // Content renderer based on active navigation
  const renderContent = () => {
    switch(activeNav) {
      case 'My Classes':
        return (
          <>
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
          </>
        );
      case 'Assignments':
        return (
          <section className="assignments-section">
            <div className="section-header">
              <h2 className="section-title">Your Assignments</h2>
              <div className="section-actions">
                <select className="filter-dropdown">
                  <option>All Assignments</option>
                  <option>Upcoming</option>
                  <option>Past Due</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
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
              <div className="assignment-item">
                <div className="assignment-date">
                  <div className="month">APR</div>
                  <div className="day">15</div>
                </div>
                <div className="assignment-details">
                  <h3>Advanced CSS Animations</h3>
                  <p>Create a series of CSS animations for a website</p>
                  <div className="assignment-course">Advanced CSS</div>
                </div>
                <div className="assignment-status">Due in 17 days</div>
              </div>
            </div>
          </section>
        );
      case 'Materials':
        return (
          <section className="materials-section">
            <div className="section-header">
              <h2 className="section-title">Learning Materials</h2>
              <div className="section-actions">
                <button className="action-btn">Upload New</button>
                <select className="filter-dropdown">
                  <option>All Materials</option>
                  <option>Documents</option>
                  <option>Videos</option>
                  <option>Resources</option>
                </select>
              </div>
            </div>
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
              <div className="material-item">
                <div className="material-icon">📊</div>
                <div className="material-info">
                  <h3>UI/UX Design Principles Presentation</h3>
                  <p>Slides covering fundamental principles of user interface design</p>
                  <button className="material-download">View Slides</button>
                </div>
              </div>
            </div>
          </section>
        );
      case 'Grades':
        return (
          <section className="grades-section">
            <h2 className="section-title">Your Grades</h2>
            <div className="grades-summary">
              <div className="grade-card">
                <div className="grade-header">Overall GPA</div>
                <div className="grade-value">3.8</div>
                <div className="grade-indicator positive">+0.2 from last semester</div>
              </div>
              <div className="grade-card">
                <div className="grade-header">Current Semester</div>
                <div className="grade-value">89%</div>
                <div className="grade-label">B+</div>
              </div>
              <div className="grade-card">
                <div className="grade-header">Completed Credits</div>
                <div className="grade-value">36</div>
                <div className="grade-indicator">of 120 required</div>
              </div>
            </div>
            <div className="course-grades">
              <h3 className="subsection-title">Course Breakdown</h3>
              <table className="grades-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Assignments</th>
                    <th>Quizzes</th>
                    <th>Midterm</th>
                    <th>Final</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Introduction to JavaScript</td>
                    <td>92%</td>
                    <td>88%</td>
                    <td>85%</td>
                    <td>—</td>
                    <td><strong>89%</strong></td>
                  </tr>
                  <tr>
                    <td>React Essentials</td>
                    <td>95%</td>
                    <td>91%</td>
                    <td>88%</td>
                    <td>—</td>
                    <td><strong>92%</strong></td>
                  </tr>
                  <tr>
                    <td>UI/UX Design Basics</td>
                    <td>90%</td>
                    <td>85%</td>
                    <td>80%</td>
                    <td>—</td>
                    <td><strong>85%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );
      case 'Attend a Quiz':
        return (
          <section className="attend-quiz-section">
            <h2 className="section-title">Available Quizzes</h2>
            <div className="quiz-code-entry">
              <input type="text" placeholder="Enter quiz code" className="quiz-code-input" />
              <button className="join-quiz-btn">Join Quiz</button>
            </div>
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
        );
      case 'Schedule':
        return (
          <section className="schedule-section">
            <h2 className="section-title">Your Schedule</h2>
            <div className="calendar-navigation">
              <button className="calendar-nav-btn">◀ Previous</button>
              <h3 className="calendar-month">April 2025</h3>
              <button className="calendar-nav-btn">Next ▶</button>
            </div>
            <div className="calendar-view">
              <div className="calendar-weekdays">
                <div className="weekday">Mon</div>
                <div className="weekday">Tue</div>
                <div className="weekday">Wed</div>
                <div className="weekday">Thu</div>
                <div className="weekday">Fri</div>
                <div className="weekday">Sat</div>
                <div className="weekday">Sun</div>
              </div>
              <div className="calendar-days">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className={`calendar-day ${i === 2 || i === 5 || i === 10 ? 'has-events' : ''}`}>
                    <div className="day-number">{i + 1}</div>
                    {i === 2 && <div className="day-event assignment">JS Array Methods Due</div>}
                    {i === 5 && <div className="day-event assignment">React Component Due</div>}
                    {i === 10 && <div className="day-event quiz">UI Design Quiz</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="upcoming-events">
              <h3 className="subsection-title">Upcoming Events</h3>
              <div className="event-list">
                <div className="event-item">
                  <div className="event-date">APR 02</div>
                  <div className="event-details">
                    <h4>JavaScript Array Methods Assignment Due</h4>
                    <p>11:59 PM</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">APR 05</div>
                  <div className="event-details">
                    <h4>React Component Assignment Due</h4>
                    <p>11:59 PM</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">APR 10</div>
                  <div className="event-details">
                    <h4>UI Design Quiz</h4>
                    <p>2:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'Discussions':
        return (
          <section className="discussions-section">
            <h2 className="section-title">Course Discussions</h2>
            <div className="discussions-filter">
              <select className="course-filter">
                <option>All Courses</option>
                <option>Introduction to JavaScript</option>
                <option>React Essentials</option>
                <option>UI/UX Design Basics</option>
              </select>
              <button className="new-post-btn">New Post</button>
            </div>
            <div className="discussion-threads">
              <div className="discussion-item">
                <div className="discussion-votes">
                  <button className="vote-btn">▲</button>
                  <span className="vote-count">12</span>
                  <button className="vote-btn">▼</button>
                </div>
                <div className="discussion-content">
                  <h3 className="discussion-title">Help with JavaScript Promises</h3>
                  <p className="discussion-preview">I'm having trouble understanding how to chain promises properly...</p>
                  <div className="discussion-meta">
                    <span className="discussion-author">John D.</span>
                    <span className="discussion-time">2 hours ago</span>
                    <span className="discussion-replies">6 replies</span>
                  </div>
                </div>
              </div>
              <div className="discussion-item">
                <div className="discussion-votes">
                  <button className="vote-btn">▲</button>
                  <span className="vote-count">8</span>
                  <button className="vote-btn">▼</button>
                </div>
                <div className="discussion-content">
                  <h3 className="discussion-title">React state management strategies</h3>
                  <p className="discussion-preview">What's the best approach for managing state in a large React application?</p>
                  <div className="discussion-meta">
                    <span className="discussion-author">Sarah M.</span>
                    <span className="discussion-time">Yesterday</span>
                    <span className="discussion-replies">12 replies</span>
                  </div>
                </div>
              </div>
              <div className="discussion-item">
                <div className="discussion-votes">
                  <button className="vote-btn">▲</button>
                  <span className="vote-count">15</span>
                  <button className="vote-btn">▼</button>
                </div>
                <div className="discussion-content">
                  <h3 className="discussion-title">Design resources for UI/UX projects</h3>
                  <p className="discussion-preview">I'm looking for good free resources for UI components and icons...</p>
                  <div className="discussion-meta">
                    <span className="discussion-author">Michael T.</span>
                    <span className="discussion-time">2 days ago</span>
                    <span className="discussion-replies">8 replies</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <section className="welcome-banner">
            <h2>Page Under Construction</h2>
            <p>This section is coming soon!</p>
          </section>
        );
    }
  };

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
          {navItems.map((item) => (
            <li 
              key={item.text}
              className={`nav-item ${activeNav === item.text ? 'active' : ''}`}
              onClick={() => handleNavClick(item.text)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content area with animated transitions */}
      <main className="content-area">
        <div className="content-slider">
          {renderContent()}
        </div>
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

