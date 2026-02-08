import { useState } from 'react'
import './App.css'

// Icons as inline SVG components
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.4-.59-2.96-.92-4.61-.92s-3.21.33-4.61.92L5.65 5.67c-.19-.29-.54-.38-.83-.22-.31.16-.43.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM5.26 19.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zm13.48 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1z"/>
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const ShuffleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <polyline points="16 3 21 3 21 8"/>
    <line x1="4" y1="20" x2="21" y2="3"/>
    <polyline points="21 16 21 21 16 21"/>
    <line x1="15" y1="15" x2="21" y2="21"/>
    <line x1="4" y1="4" x2="9" y2="9"/>
  </svg>
)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">Q</span>
            <span className="logo-text">SecureQuiz</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('features')}>Features</button>
            <button onClick={() => scrollToSection('how-it-works')}>How It Works</button>
            <button onClick={() => scrollToSection('download')}>Download</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">100% Free for Teachers</div>
            <h1>Secure MCQ Exam Platform for Educational Institutions</h1>
            <p className="hero-subtitle">
              The ultimate anti-cheating examination solution for coaching centers, schools, and colleges. 
              Conduct secure MCQ tests with advanced cheating prevention technology.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('download')}>
                <DownloadIcon /> Download Free
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('features')}>
                View Features
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">10K+</span>
                <span className="hero-stat-label">Teachers Using</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">500K+</span>
                <span className="hero-stat-label">Exams Conducted</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Free</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="security-demo">
              <div className="security-card">
                <div className="security-header">
                  <ShieldIcon />
                  <span className="security-status">SECURE MODE ACTIVE</span>
                </div>
                <div className="security-features">
                  <div className="security-item">
                    <CheckIcon />
                    <span>App Minimize Detection</span>
                  </div>
                  <div className="security-item">
                    <CheckIcon />
                    <span>Screenshot Prevention</span>
                  </div>
                  <div className="security-item">
                    <CheckIcon />
                    <span>Tab Switch Detection</span>
                  </div>
                  <div className="security-item">
                    <CheckIcon />
                    <span>Question Shuffling</span>
                  </div>
                </div>
                <div className="exam-timer">⏱ Exam in Progress</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="who-for">
        <div className="container">
          <h2 className="section-title">Perfect For</h2>
          <p className="section-subtitle">
            Designed specifically for educational institutions and educators
          </p>
          
          <div className="institution-grid">
            <div className="institution-card">
              <div className="institution-icon">🏫</div>
              <h3>Schools</h3>
              <p>Conduct secure online tests for all grades. Prevent cheating during internal assessments and practice exams.</p>
            </div>
            <div className="institution-card">
              <div className="institution-icon">🎓</div>
              <h3>Colleges</h3>
              <p>Perfect for semester exams, unit tests, and entrance examinations with advanced proctoring features.</p>
            </div>
            <div className="institution-card">
              <div className="institution-icon">📚</div>
              <h3>Coaching Centers</h3>
              <p>Ideal for competitive exam preparation with randomized questions and strict monitoring.</p>
            </div>
            <div className="institution-card">
              <div className="institution-icon">👨‍🏫</div>
              <h3>Private Tutors</h3>
              <p>Individual teachers can conduct secure assessments for their students with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Anti-Cheating Features</h2>
          <p className="section-subtitle">
            Advanced security measures to ensure fair examinations
          </p>
          
          <div className="features-grid">
            <div className="feature-card security">
              <div className="feature-icon-wrapper red">
                <LockIcon />
              </div>
              <h3>App Minimize Detection</h3>
              <p>If any student minimizes or switches away from the exam app, the test is automatically submitted immediately. No second chances.</p>
            </div>
            <div className="feature-card security">
              <div className="feature-icon-wrapper orange">
                <LockIcon />
              </div>
              <h3>Screenshot Prevention</h3>
              <p>Attempting to take screenshots triggers instant auto-submission. Protects exam integrity and prevents question leakage.</p>
            </div>
            <div className="feature-card security">
              <div className="feature-icon-wrapper yellow">
                <LockIcon />
              </div>
              <h3>Tab Switch Detection (Web)</h3>
              <p>For web-based exams, opening new tabs or switching browser windows results in automatic exam submission.</p>
            </div>
            <div className="feature-card security">
              <div className="feature-icon-wrapper green">
                <ShuffleIcon />
              </div>
              <h3>Question Shuffling</h3>
              <p>Each student receives questions in a different randomized order. Prevents copying from neighboring students.</p>
            </div>
            <div className="feature-card security">
              <div className="feature-icon-wrapper blue">
                <CheckIcon />
              </div>
              <h3>Answer Option Shuffling</h3>
              <p>MCQ options are also randomized for each student. Makes cheating virtually impossible.</p>
            </div>
            <div className="feature-card security">
              <div className="feature-icon-wrapper purple">
                <CheckIcon />
              </div>
              <h3>Real-time Monitoring</h3>
              <p>Teachers can monitor all student activities in real-time during the examination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple 4-step process to conduct secure examinations
          </p>
          
          <div className="process-grid">
            <div className="process-card">
              <span className="process-number">01</span>
              <div className="process-icon">📝</div>
              <h3>Create Exam</h3>
              <p>Teachers create MCQ exams by uploading questions or using the built-in question bank. Set time limits and passing criteria.</p>
            </div>
            <div className="process-card">
              <span className="process-number">02</span>
              <div className="process-icon">🔗</div>
              <h3>Share Access</h3>
              <p>Generate unique exam codes or links for students. Share via WhatsApp, email, or display in classroom.</p>
            </div>
            <div className="process-card">
              <span className="process-number">03</span>
              <div className="process-icon">🛡️</div>
              <h3>Secure Testing</h3>
              <p>Students take exams under strict monitoring. Any cheating attempt results in immediate auto-submission.</p>
            </div>
            <div className="process-card">
              <span className="process-number">04</span>
              <div className="process-icon">📊</div>
              <h3>Instant Results</h3>
              <p>Automatic grading and detailed analytics. View individual and class performance reports instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <h2 className="section-title">Download SecureQuiz</h2>
          <p className="section-subtitle">
            Completely FREE for teachers and educational institutions
          </p>
          
          <div className="download-options">
            <div className="download-card featured">
              <div className="featured-badge">Recommended</div>
              <div className="download-icon-wrapper android">
                <AndroidIcon />
              </div>
              <h3>Android App</h3>
              <p>For Students</p>
              <ul className="download-features">
                <li><CheckIcon /> Anti-cheating enabled</li>
                <li><CheckIcon /> Offline mode support</li>
                <li><CheckIcon /> APK direct download</li>
              </ul>
              <a href="https://expo.dev/artifacts/eas/45BzT1GW3vYmHwDVBEB9D8.aab" className="download-btn android-btn">
                <AndroidIcon /> Download APK
              </a>
            </div>

            <div className="download-card">
              <div className="download-icon-wrapper web">
                <GlobeIcon />
              </div>
              <h3>Web Version</h3>
              <p>For Teachers & Students</p>
              <ul className="download-features">
                <li><CheckIcon /> No installation needed</li>
                <li><CheckIcon /> Create & conduct exams</li>
                <li><CheckIcon /> Works on all devices</li>
              </ul>
              <a href="https://bu-quiz-web.vercel.app/" className="download-btn web-btn">
                <GlobeIcon /> Open Web App
              </a>
            </div>

            <div className="download-card">
              <div className="download-icon-wrapper ios">
                <AppleIcon />
              </div>
              <h3>iOS App</h3>
              <p>For Students</p>
              <ul className="download-features">
                <li><CheckIcon /> Native iOS experience</li>
                <li><CheckIcon /> Secure exam mode</li>
                <li><CheckIcon /> App Store download</li>
              </ul>
              <a href="#" className="download-btn ios-btn">
                <AppleIcon /> Download on App Store
              </a>
            </div>
          </div>

          <div className="teacher-note">
            <div className="teacher-note-icon">👨‍🏫</div>
            <div className="teacher-note-content">
              <h3>For Teachers</h3>
              <p>Teachers can use the Web Version to create exams, upload questions, and monitor results. Students use Android/iOS apps or Web to take exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Cheating Details Section */}
      <section className="anti-cheating-details">
        <div className="container">
          <h2 className="section-title">Anti-Cheating Technology Explained</h2>
          
          <div className="anti-cheat-grid">
            <div className="anti-cheat-card">
              <h3>🚫 What Triggers Auto-Submission?</h3>
              <ul>
                <li><span className="highlight">Minimizing App:</span> Student switches to another app</li>
                <li><span className="highlight">Taking Screenshot:</span> Any screenshot attempt on mobile</li>
                <li><span className="highlight">New Tab (Web):</span> Opening new browser tab or window</li>
                <li><span className="highlight">Split Screen:</span> Attempting to use split-screen mode</li>
                <li><span className="highlight">Screen Recording:</span> Starting screen recording app</li>
              </ul>
            </div>

            <div className="anti-cheat-card">
              <h3>🔀 Question Security</h3>
              <ul>
                <li><span className="highlight">Random Order:</span> Each student gets different question sequence</li>
                <li><span className="highlight">Option Shuffle:</span> MCQ options are randomized per student</li>
                <li><span className="highlight">Time Limits:</span> Configurable per question and total exam</li>
                <li><span className="highlight">Single Attempt:</span> Students cannot retake without permission</li>
                <li><span className="highlight">IP Tracking:</span> Monitor student locations (optional)</li>
              </ul>
            </div>

            <div className="anti-cheat-card">
              <h3>📊 Teacher Dashboard</h3>
              <ul>
                <li><span className="highlight">Live Monitoring:</span> Watch exams in real-time</li>
                <li><span className="highlight">Violation Logs:</span> Detailed report of any cheating attempts</li>
                <li><span className="highlight">Auto-Grading:</span> Instant result calculation</li>
                <li><span className="highlight">Analytics:</span> Class performance statistics</li>
                <li><span className="highlight">Export:</span> Download results as Excel/PDF</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="why-free">
        <div className="container">
          <div className="why-free-content">
            <h2>Why Is It Free?</h2>
            <p className="why-free-text">
              We believe quality education should be accessible to everyone. Our mission is to help teachers and educational 
              institutions conduct fair examinations without financial barriers.
            </p>
            <div className="why-free-features">
              <div className="why-free-item">
                <CheckIcon />
                <span>No hidden charges</span>
              </div>
              <div className="why-free-item">
                <CheckIcon />
                <span>Unlimited exams</span>
              </div>
              <div className="why-free-item">
                <CheckIcon />
                <span>Unlimited students</span>
              </div>
              <div className="why-free-item">
                <CheckIcon />
                <span>All features included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Need help setting up? Have questions? We're here to support educators!
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <EmailIcon />
                <div>
                  <h4>Email Support</h4>
                  <p>mukulverma12344@gmail.com</p>
                  <p>mukulverma12344@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <PhoneIcon />
                <div>
                  <h4>Phone Support</h4>
                  <p>+91 9005421652</p>
                  <p>Mon-Sat, 9AM-6PM IST</p>
                </div>
              </div>
              <div className="contact-item">
                <GlobeIcon />
                <div>
                  <h4>Connect With Us</h4>
                  <div className="social-links">
                    <a href="#">WhatsApp</a>
                    <a href="www.linkedin.com/in/mukul-verma-bca">LinkedIn</a>
                    <a href="#">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3>Get In Touch</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Institution Name" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">You are a...</option>
                    <option value="school">School Teacher</option>
                    <option value="college">College Professor</option>
                    <option value="coaching">Coaching Center</option>
                    <option value="tutor">Private Tutor</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">Q</span>
                <span className="logo-text">SecureQuiz</span>
              </div>
              <p>Empowering educators with free, secure examination technology. Making fair assessments accessible to all institutions.</p>
              <div className="footer-social">
                <a href="#" aria-label="WhatsApp">WA</a>
                <a href="#" aria-label="Telegram">TG</a>
                <a href="www.linkedin.com/in/mukul-verma-bca" aria-label="LinkedIn">YT</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#download">Download</a>
                <a href="#">Teacher Dashboard</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#contact">Contact Us</a>
                <a href="#">Help Center</a>
                <a href="#">Video Tutorials</a>
                <a href="#">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Data Security</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 SecureQuiz. All rights reserved.</p>
            <p className="footer-tagline">Fair Exams. Better Education. Free Forever.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
