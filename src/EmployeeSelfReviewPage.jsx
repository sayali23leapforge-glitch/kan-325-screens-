import { useNavigate } from 'react-router-dom'
import { FiBell, FiSave, FiClock, FiCheckCircle, FiShare2 } from 'react-icons/fi'
import PerformanceSidebar from './PerformanceSidebar'
import './employee-self-review-page.css'

const goalCards = [
  {
    id: 1,
    colorClass: 'esr-goal-blue',
    title: 'Increase Client Quality of Deliverables',
    target: 'Target: Reduce bug rate to 15%',
    progress: 'Achievement: 32%',
    status: 'On Track',
    reflection:
      'I maintained clear sprint review cadence, prioritized high-risk areas, and collaborated with QA to reduce defects. I improved test scenario coverage in critical modules.',
    statusClass: 'esr-badge-green',
  },
  {
    id: 2,
    colorClass: 'esr-goal-purple',
    title: 'Complete AI Modernization Project',
    target: 'Target: 75% adoption',
    progress: 'Achievement: 58%',
    status: 'Nearly Complete',
    reflection:
      'Successfully migrated 60% of legacy services to the new REST framework. The remaining 5% is pending design approval and integration validation from external teams.',
    statusClass: 'esr-badge-yellow',
  },
  {
    id: 3,
    colorClass: 'esr-goal-orange',
    title: 'Mentor Junior Developers',
    target: 'Target: 2 mentees',
    progress: 'Achievement: 3',
    status: 'Exceeded Target',
    reflection:
      'Mentored 3 junior developers this quarter, exceeding the target. Conducted weekly 1:1 sessions, technical workshops, and hands-on pairing across core modules.',
    statusClass: 'esr-badge-green',
  },
]

const competencies = [
  { name: 'Technical Skills', score: 4.2, color: '#3B82F6', dots: 4 },
  { name: 'Leadership', score: 4.0, color: '#F97316', dots: 4 },
  { name: 'Communication', score: 4.6, color: '#22C55E', dots: 5 },
  { name: 'Collaboration', score: 4.5, color: '#06B6D4', dots: 5 },
  { name: 'Problem Solving', score: 4.1, color: '#A855F7', dots: 4 },
  { name: 'Innovation', score: 3.8, color: '#EC4899', dots: 4 },
]

function EmployeeSelfReviewPage({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="esr-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <main className="esr-main">
        <header className="esr-header">
          <div className="esr-header-left">
            <h1 className="esr-title">Employee Self Review</h1>
            <nav className="esr-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/performance">Performance</a>
              <span>/</span>
              <span>Self Review</span>
            </nav>
          </div>
          <div className="esr-header-right">
            <button className="esr-bell-btn" type="button" title="Notifications">
              <FiBell size={18} />
              <span className="esr-bell-badge">2</span>
            </button>
            <button className="esr-save-draft-btn" type="button">
              <FiSave size={14} />
              Save Draft
            </button>
          </div>
        </header>

        <section className="esr-content">
          <article className="esr-top-card">
            <div className="esr-top-icon">★</div>
            <div className="esr-top-copy">
              <h2>Q1 2024 Self Review</h2>
              <p>Review period: January 1, 2024 - March 31, 2024</p>
              <div className="esr-top-badges">
                <span className="esr-chip esr-chip-blue">Due: Apr 15, 2024</span>
                <span className="esr-chip esr-chip-yellow">Draft</span>
                <span className="esr-chip esr-chip-green">75% Complete</span>
              </div>
            </div>
          </article>

          <article className="esr-progress-card">
            <div className="esr-progress-head">
              <h3>Review Progress</h3>
              <span>3 of 4 sections completed</span>
            </div>
            <div className="esr-progress-track" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <div className="esr-progress-fill" />
            </div>
            <div className="esr-progress-labels">
              <span className="esr-progress-ok"><FiCheckCircle size={12} /> Goals &amp; Achievements completed</span>
              <span className="esr-progress-ok"><FiCheckCircle size={12} /> Core Competencies completed</span>
              <span className="esr-progress-ok"><FiCheckCircle size={12} /> Development Areas completed</span>
              <span className="esr-progress-pending"><FiClock size={12} /> Overall Summary pending</span>
            </div>
          </article>

          <article className="esr-section-card">
            <div className="esr-section-head">
              <h3>Goals &amp; Achievements</h3>
              <span className="esr-section-status esr-badge-green">3 completed</span>
            </div>

            <div className="esr-goal-list">
              {goalCards.map((goal) => (
                <section key={goal.id} className={`esr-goal-card ${goal.colorClass}`}>
                  <div className="esr-goal-head">
                    <span className="esr-goal-number">{goal.id}</span>
                    <div className="esr-goal-meta">
                      <h4>{goal.title}</h4>
                      <p>{goal.target}</p>
                    </div>
                    <span className={`esr-section-status ${goal.statusClass}`}>{goal.status}</span>
                  </div>

                  <div className="esr-goal-progress-row">
                    <div className="esr-goal-progress-bar">
                      <div className="esr-goal-progress-fill" style={{ width: goal.id === 1 ? '32%' : goal.id === 2 ? '58%' : '100%' }} />
                    </div>
                    <span>{goal.progress}</span>
                  </div>

                  <label className="esr-field-label" htmlFor={`reflection-${goal.id}`}>
                    Reflection
                  </label>
                  <textarea
                    id={`reflection-${goal.id}`}
                    className="esr-goal-textarea"
                    defaultValue={goal.reflection}
                    rows={3}
                  />
                </section>
              ))}
            </div>
          </article>

          <article className="esr-section-card">
            <div className="esr-section-head">
              <h3>Core Competencies</h3>
              <span className="esr-section-status esr-badge-green">6 competencies</span>
            </div>

            <div className="esr-competency-grid">
              {competencies.map((item) => (
                <div key={item.name} className="esr-competency-item">
                  <div className="esr-competency-head">
                    <h4>{item.name}</h4>
                    <span>{item.score}</span>
                  </div>
                  <div className="esr-dot-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={`${item.name}-${i}`}
                        className="esr-dot"
                        style={{
                          background: i < item.dots ? item.color : '#E5E7EB',
                        }}
                      />
                    ))}
                  </div>
                  <p>Strong performance with consistent growth in this competency area.</p>
                </div>
              ))}
            </div>
          </article>

          <article className="esr-section-card">
            <div className="esr-section-head">
              <h3>Development Areas</h3>
              <span className="esr-section-status esr-badge-green">1 complete</span>
            </div>
            <label className="esr-field-label" htmlFor="developmentAreas">
              Key areas you want to develop in the next quarter
            </label>
            <textarea
              id="developmentAreas"
              className="esr-large-textarea"
              defaultValue="1. Cloud Architecture: Deepen my knowledge of AWS services and cloud-native architectures. Plan to complete AWS Solutions Architect certification.&#10;2. Project Planning: Improve my skills in defining realistic project estimates, risk tracking, and cross-team communication with stakeholders."
              rows={5}
            />
          </article>

          <article className="esr-section-card esr-summary-card">
            <div className="esr-section-head">
              <h3>Overall Summary</h3>
              <span className="esr-section-status esr-badge-yellow">Pending</span>
            </div>

            <label className="esr-field-label" htmlFor="overallSummary">Overall self assessment</label>
            <textarea
              id="overallSummary"
              className="esr-large-textarea"
              placeholder="Provide a comprehensive summary of your performance this quarter, highlighting key achievements, challenges overcome, and your perspective on areas of growth."
              rows={4}
            />

            <label className="esr-field-label" htmlFor="nextQuarter">Goals for next quarter</label>
            <textarea
              id="nextQuarter"
              className="esr-large-textarea"
              placeholder="Outline your goals and objectives for the upcoming quarter..."
              rows={3}
            />
          </article>

          <footer className="esr-footer-actions">
            <div className="esr-footer-left">
              <span className="esr-footer-note">Ready to submit?</span>
            </div>
            <div className="esr-footer-right">
              <button type="button" className="esr-footer-btn esr-btn-ghost">Save as Draft</button>
              <button type="button" className="esr-footer-btn esr-btn-outline"><FiShare2 size={14} /> Share</button>
              <button
                type="button"
                className="esr-footer-btn esr-btn-primary"
                onClick={() => navigate('/hrm/performance/reviews/manager')}
              >
                Submit Review
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default EmployeeSelfReviewPage
