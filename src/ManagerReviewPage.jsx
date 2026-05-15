import { useNavigate } from 'react-router-dom'
import { FiBell, FiSave, FiClock, FiCheckCircle } from 'react-icons/fi'
import PerformanceSidebar from './PerformanceSidebar'
import './manager-review-page.css'

const ratingScale = [1, 2, 3, 4, 5]

const emojiRatings = [
  { label: 'Poor', emoji: '😞' },
  { label: 'Fair', emoji: '😐' },
  { label: 'Good', emoji: '🙂' },
  { label: 'Great', emoji: '😊' },
  { label: 'Outstanding', emoji: '🌟' },
]

function ManagerReviewPage({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="mr-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <main className="mr-main">
        <header className="mr-header">
          <div className="mr-header-left">
            <h1 className="mr-title">Manager Review</h1>
            <nav className="mr-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/performance">Performance</a>
              <span>/</span>
              <span>Manager Review</span>
            </nav>
          </div>
          <div className="mr-header-right">
            <button className="mr-bell-btn" type="button" title="Notifications">
              <FiBell size={18} />
              <span className="mr-bell-badge">3</span>
            </button>
            <button className="mr-save-btn" type="button">
              <FiSave size={14} />
              Save Review
            </button>
          </div>
        </header>

        <section className="mr-content">
          <article className="mr-top-card">
            <div className="mr-top-icon">★</div>
            <div className="mr-top-copy">
              <h2>Q1 2024 Manager Review</h2>
              <p>Review for: Sarah Mitchell | Jan 1, 2024 - Mar 31, 2024</p>
              <div className="mr-chip-row">
                <span className="mr-chip mr-chip-blue">Due: Apr 20, 2024</span>
                <span className="mr-chip mr-chip-green">Employee Review Complete</span>
                <span className="mr-chip mr-chip-orange">Manager Review In Progress</span>
              </div>
            </div>
          </article>

          <article className="mr-status-grid-card">
            <div className="mr-status-grid">
              <div className="mr-status-block mr-status-blue">
                <div className="mr-status-icon"><FiCheckCircle size={14} /></div>
                <p>Employee</p>
                <strong>Complete</strong>
              </div>
              <div className="mr-status-block mr-status-purple">
                <div className="mr-status-icon"><FiClock size={14} /></div>
                <p>Manager</p>
                <strong>Active</strong>
              </div>
              <div className="mr-status-block mr-status-gray">
                <div className="mr-status-icon"><FiClock size={14} /></div>
                <p>Meeting</p>
                <strong>Pending</strong>
              </div>
            </div>
          </article>

          <article className="mr-section-card">
            <div className="mr-section-head">
              <h3>Employee Self Review Summary</h3>
              <span className="mr-status-pill mr-status-pill-green">Self Review Submitted</span>
            </div>

            <div className="mr-summary-grid">
              <div className="mr-summary-box mr-summary-goals">
                <h4>Goal Achievements</h4>
                <ul>
                  <li>
                    <span>Client Quality Improvement</span>
                    <em className="mr-tag mr-tag-green">Exceeded</em>
                  </li>
                  <li>
                    <span>AI Modernization Project</span>
                    <em className="mr-tag mr-tag-yellow">On Track</em>
                  </li>
                  <li>
                    <span>Mentorship Program</span>
                    <em className="mr-tag mr-tag-green">Exceeded</em>
                  </li>
                </ul>
              </div>

              <div className="mr-summary-box mr-summary-competency">
                <h4>Competency Ratings</h4>
                <ul>
                  <li><span>Technical Skills</span><strong>4.2/5</strong></li>
                  <li><span>Communication</span><strong>4.6/5</strong></li>
                  <li><span>Leadership</span><strong>4.0/5</strong></li>
                  <li><span>Collaboration</span><strong>4.5/5</strong></li>
                </ul>
              </div>
            </div>
          </article>

          <article className="mr-section-card">
            <div className="mr-section-head">
              <h3>Manager Evaluation: Goals &amp; Achievements</h3>
            </div>

            <p className="mr-caption">One overall rating for performance in goal achievement</p>
            <div className="mr-rating-row">
              {ratingScale.map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`mr-rating-card${rating === 3 ? ' selected' : ''}`}
                >
                  <span>{rating}</span>
                  <small>{rating === 1 ? 'Needs Work' : rating === 5 ? 'Exceptional' : 'Rating'}</small>
                </button>
              ))}
            </div>

            <label className="mr-label" htmlFor="goalFeedback">Goal feedback</label>
            <textarea
              id="goalFeedback"
              className="mr-textarea"
              rows={4}
              placeholder="Provide specific feedback on goal achievements, outcomes, and impact."
            />
          </article>

          <article className="mr-section-card">
            <div className="mr-section-head">
              <h3>Manager Evaluation: Core Competencies</h3>
            </div>
            <label className="mr-label" htmlFor="competencyFeedback">Competency feedback</label>
            <textarea
              id="competencyFeedback"
              className="mr-textarea"
              rows={4}
              placeholder="Comment on strengths, collaboration, communication, and leadership behavior."
            />

            <label className="mr-label" htmlFor="developmentNotes">Development notes</label>
            <textarea
              id="developmentNotes"
              className="mr-textarea"
              rows={3}
              placeholder="Provide development guidance and suggested next-step focus areas."
            />
          </article>

          <article className="mr-devrec-card">
            <div className="mr-devrec-header">
              <div className="mr-devrec-icon" aria-hidden="true">
                <span className="mr-devrec-icon-core" />
              </div>
              <div className="mr-devrec-header-copy">
                <h3>Development Areas &amp; Recommendations</h3>
                <p>Identify growth opportunities and development plans</p>
              </div>
            </div>

            <div className="mr-devrec-body">
              <label className="mr-devrec-label" htmlFor="keyStrengths">Key Strengths</label>
              <textarea
                id="keyStrengths"
                className="mr-devrec-textarea"
                rows={3}
                placeholder="Highlight the employee's top strengths and positive contributions..."
              />

              <label className="mr-devrec-label" htmlFor="areasDevelopment">Areas for Development</label>
              <textarea
                id="areasDevelopment"
                className="mr-devrec-textarea"
                rows={3}
                placeholder="Identify specific areas where the employee can grow and improve..."
              />

              <label className="mr-devrec-label" htmlFor="recommendedActions">Recommended Development Actions</label>
              <textarea
                id="recommendedActions"
                className="mr-devrec-textarea"
                rows={3}
                placeholder="Suggest specific training, projects, or experiences to support growth.."
              />
            </div>
          </article>

          <article className="mr-section-card">
            <div className="mr-section-head">
              <h3>Overall Performance Rating</h3>
            </div>
            <p className="mr-caption">Select one overall performance rating</p>
            <div className="mr-emoji-grid">
              {emojiRatings.map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  className={`mr-emoji-card${idx === 2 ? ' selected' : ''}`}
                >
                  <span className="mr-emoji">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </article>

          <footer className="mr-footer">
            <button type="button" className="mr-footer-btn mr-btn-save">Save Review</button>
            <button
              type="button"
              className="mr-footer-btn mr-btn-submit"
              onClick={() => navigate('/hrm/performance/calibration')}
            >
              Submit Final Review
            </button>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default ManagerReviewPage
