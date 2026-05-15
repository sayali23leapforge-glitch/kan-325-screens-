import {
  FiAlertCircle,
  FiBell,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiDownload,
  FiMapPin,
  FiUser,
  FiX,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './candidate-application-page.css'

const experienceItems = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Solutions, San Francisco',
    period: '2020 - Present',
    points: [
      'Led development of 3 customer-facing React applications serving 500K+ users',
      'Improved application performance by 45% through optimization initiatives',
      'Mentored 4 junior developers and established coding standards',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Innovations Inc., San Jose',
    period: '2017 - 2020',
    points: [
      'Developed responsive web applications using React and Redux',
      'Collaborated with UI/UX team to implement pixel-perfect designs',
      'Reduced bundle size by 30% and improved build pipeline',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'StartupLab, Mountain View',
    period: '2015 - 2017',
    points: [
      'Built reusable UI components using React and Material UI',
      'Wrote unit and integration tests and contributed to CI/CD workflows',
    ],
  },
]

const frontEndSkills = ['React', 'TypeScript', 'JavaScript ES6+', 'Redux', 'HTML/CSS3']
const toolsSkills = ['Git', 'Webpack', 'Jest', 'Cypress', 'Tailwind CSS', 'Figma']
const otherSkills = ['GraphQL', 'Next.js', 'Node.js', 'Performance Optimization', 'Accessibility (WCAG)']

function CandidateApplicationPage() {
  return (
    <div className="ca-layout">
      <HRMSidebar />

      <main className="ca-main">
        <header className="ca-header">
          <div className="ca-header-left">
            <h1 className="ca-title">Candidate Application</h1>
            <nav className="ca-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <a href="/hrm/recruitment">Applications</a>
              <span>/</span>
              <span>Alex Thompson</span>
            </nav>
          </div>

          <div className="ca-header-right">
            <button className="ca-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={14} />
              <span className="ca-bell-badge">2</span>
            </button>
            <div className="ca-status-pill">
              <span className="ca-status-dot" />
              New Application
            </div>
          </div>
        </header>

        <section className="ca-content-wrap">
          <article className="ca-alert-box">
            <div className="ca-alert-head">
              <FiCheck size={12} />
              <h2>Application Received</h2>
            </div>
            <p>
              New candidate application has been submitted for the Senior Frontend Developer position.
            </p>
            <div className="ca-alert-meta">
              <span><FiCalendar size={10} /> Received: January 18, 2024</span>
              <span><FiClock size={10} /> ID: APP-2024-0157</span>
              <span><FiUser size={10} /> By: Via Job Portal</span>
            </div>
          </article>

          <article className="ca-card">
            <div className="ca-profile-row">
              <div className="ca-profile-left">
                <img
                  className="ca-avatar"
                  src="https://i.pravatar.cc/72?img=15"
                  alt="Alex Thompson"
                />
                <div className="ca-profile-copy">
                  <h3>Alex Thompson</h3>
                  <p>Senior Frontend Developer</p>
                  <div className="ca-profile-meta">
                    <span><FiBriefcase size={10} /> 8+ years experience</span>
                    <span><FiMapPin size={10} /> San Francisco, CA</span>
                    <span><FiCalendar size={10} /> 7 days ago applied</span>
                  </div>
                </div>
              </div>
              <button type="button" className="ca-match-btn">Match Score: 92%</button>
            </div>
          </article>

          <article className="ca-card">
            <div className="ca-info-grid">
              <div className="ca-info-item ca-info-blue">
                <div className="ca-info-head"><FiUser size={11} /><span>Education</span></div>
                <strong>BS Computer Science</strong>
                <small>Stanford University</small>
              </div>
              <div className="ca-info-item ca-info-purple">
                <div className="ca-info-head"><FiCheck size={11} /><span>Skills Match</span></div>
                <strong>11 of 12</strong>
                <small>Required skills matched</small>
              </div>
              <div className="ca-info-item ca-info-green">
                <div className="ca-info-head"><FiDollarSign size={11} /><span>Salary Expectation</span></div>
                <strong>$98,000</strong>
                <small>Within range</small>
              </div>
              <div className="ca-info-item ca-info-yellow">
                <div className="ca-info-head"><FiClock size={11} /><span>Availability</span></div>
                <strong>2 Weeks</strong>
                <small>Notice period</small>
              </div>
            </div>
          </article>

          <article className="ca-card">
            <h3 className="ca-card-title">Professional Summary</h3>
            <p className="ca-paragraph">
              Passionate and results-driven Senior Frontend Developer with 8+ years of experience building scalable,
              high-performance web applications. Expertise in React, TypeScript, and modern JavaScript frameworks.
              Proven track record of leading development teams, mentoring junior developers, and delivering exceptional
              user experiences. Strong focus on code quality, performance optimization, and accessibility standards.
            </p>
          </article>

          <article className="ca-card">
            <h3 className="ca-card-title">Work Experience</h3>
            <div className="ca-timeline">
              {experienceItems.map((item) => (
                <div key={item.role} className="ca-exp-item">
                  <div className="ca-exp-head">
                    <div>
                      <h4>{item.role}</h4>
                      <p>{item.company}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="ca-card">
            <h3 className="ca-card-title">Technical Skills</h3>
            <div className="ca-skill-block">
              <h4>Frontend Technologies</h4>
              <div className="ca-tags-row">
                {frontEndSkills.map((skill) => (
                  <span key={skill} className="ca-tag ca-tag-blue">{skill}</span>
                ))}
              </div>
            </div>
            <div className="ca-skill-block">
              <h4>Tools &amp; Frameworks</h4>
              <div className="ca-tags-row">
                {toolsSkills.map((skill) => (
                  <span key={skill} className="ca-tag ca-tag-purple">{skill}</span>
                ))}
              </div>
            </div>
            <div className="ca-skill-block ca-skill-block-last">
              <h4>Other Skills</h4>
              <div className="ca-tags-row">
                {otherSkills.map((skill) => (
                  <span key={skill} className="ca-tag ca-tag-green">{skill}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="ca-card">
            <h3 className="ca-card-title">Attachments</h3>
            <div className="ca-attachments-grid">
              <div className="ca-attachment-item">
                <div className="ca-attachment-left">
                  <span className="ca-file-icon ca-file-pdf">PDF</span>
                  <div>
                    <strong>Resume_AlexThompson.pdf</strong>
                    <small>Updated resume</small>
                  </div>
                </div>
                <button type="button" aria-label="Download resume"><FiDownload size={11} /></button>
              </div>

              <div className="ca-attachment-item">
                <div className="ca-attachment-left">
                  <span className="ca-file-icon ca-file-doc">DOC</span>
                  <div>
                    <strong>CoverLetter_AlexThompson.docx</strong>
                    <small>Cover letter</small>
                  </div>
                </div>
                <button type="button" aria-label="Download cover letter"><FiDownload size={11} /></button>
              </div>

              <div className="ca-attachment-item">
                <div className="ca-attachment-left">
                  <span className="ca-file-icon ca-file-link">URL</span>
                  <div>
                    <strong>Portfolio Website</strong>
                    <small>https://alexportfolio.dev</small>
                  </div>
                </div>
                <button type="button" aria-label="Open portfolio"><FiChevronRight size={11} /></button>
              </div>

              <div className="ca-attachment-item">
                <div className="ca-attachment-left">
                  <span className="ca-file-icon ca-file-link">URL</span>
                  <div>
                    <strong>GitHub Profile</strong>
                    <small>github.com/alexthompson</small>
                  </div>
                </div>
                <button type="button" aria-label="Open github"><FiChevronRight size={11} /></button>
              </div>
            </div>
          </article>

          <article className="ca-card ca-actions-card">
            <div className="ca-actions-row">
              <button type="button" className="ca-btn ca-btn-blue">Move to Screening</button>
              <button type="button" className="ca-btn ca-btn-green">Schedule Interview</button>
              <button type="button" className="ca-btn ca-btn-gray"><FiX size={11} /> Reject</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default CandidateApplicationPage
