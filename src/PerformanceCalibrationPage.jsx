import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiDownload,
  FiSettings,
  FiPlay,
  FiUsers,
  FiAlertTriangle,
  FiClock,
} from 'react-icons/fi'
import PerformanceSidebar from './PerformanceSidebar'
import './performance-calibration-page.css'

const ratingDistribution = [
  { label: '5 - Outstanding', count: 2, pct: 8, width: '8%', color: '#7C3AED' },
  { label: '4 - Exceeds', count: 8, pct: 33, width: '33%', color: '#22C55E' },
  { label: '3 - Meets', count: 12, pct: 50, width: '50%', color: '#3B82F6' },
  { label: '2 - Below', count: 2, pct: 8, width: '8%', color: '#F59E0B' },
]

function PerformanceCalibrationPage({ onSwitchModule }) {
  const navigate = useNavigate()
  return (
    <div className="pc-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <main className="pc-main">
        <header className="pc-header">
          <div className="pc-header-left">
            <h1 className="pc-title">Performance Calibration</h1>
            <nav className="pc-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/performance">Performance</a>
              <span>/</span>
              <span>Calibration</span>
            </nav>
          </div>
          <div className="pc-header-right">
            <button className="pc-bell-btn" type="button" title="Notifications">
              <FiBell size={17} />
              <span className="pc-bell-badge">3</span>
            </button>
            <button className="pc-export-btn" type="button">
              <FiDownload size={14} />
              Export Results
            </button>
          </div>
        </header>

        <section className="pc-content">
          <article className="pc-session-card">
            <div className="pc-session-head">
              <div className="pc-session-title-wrap">
                <span className="pc-session-icon">⛶</span>
                <div>
                  <h2>Q1 2024 Performance Calibration Session</h2>
                  <p>Standardize performance ratings across Engineering teams</p>
                  <div className="pc-session-badges">
                    <span className="pc-chip pc-chip-blue">Due: April 25, 2024</span>
                    <span className="pc-chip pc-chip-orange">In Progress</span>
                    <span className="pc-chip pc-chip-green">15 Participants</span>
                  </div>
                </div>
              </div>
              <div className="pc-session-actions">
                <button type="button" className="pc-btn-settings">
                  <FiSettings size={13} />
                  Settings
                </button>
                <button type="button" className="pc-btn-start">
                  <FiPlay size={13} />
                  Start Session
                </button>
              </div>
            </div>

            <div className="pc-stats-row">
              <div className="pc-stat-card pc-stat-blue">
                <div className="pc-stat-icon"><FiUsers size={14} /></div>
                <p>Total Reviews</p>
                <strong>24</strong>
                <span>Ready for calibration</span>
              </div>
              <div className="pc-stat-card pc-stat-green">
                <div className="pc-stat-icon"><FiUsers size={14} /></div>
                <p>Calibrated</p>
                <strong>8</strong>
                <span>Consensus reached</span>
              </div>
              <div className="pc-stat-card pc-stat-orange">
                <div className="pc-stat-icon"><FiAlertTriangle size={14} /></div>
                <p>Flagged</p>
                <strong>3</strong>
                <span>Rating discrepancies</span>
              </div>
              <div className="pc-stat-card pc-stat-gray">
                <div className="pc-stat-icon"><FiClock size={14} /></div>
                <p>Pending</p>
                <strong>13</strong>
                <span>Awaiting discussion</span>
              </div>
            </div>
          </article>

          <div className="pc-main-grid">
            <article className="pc-queue-card">
              <div className="pc-queue-head">
                <h3>Calibration Queue</h3>
                <div className="pc-queue-filters">
                  <button type="button" className="pc-team-filter">All Teams</button>
                  <button type="button" className="pc-filter-icon" aria-label="Open filter" />
                </div>
              </div>

              <div className="pc-queue-list">
                <div className="pc-queue-row pc-queue-row-high">
                  <img className="pc-avatar-img" src="https://i.pravatar.cc/46?img=12" alt="John Smith" />
                  <div className="pc-person-meta">
                    <strong>John Smith</strong>
                    <span className="pc-role-line">Senior Software Engineer • Frontend Team</span>
                    <p>
                      <span className="pc-label">Self:</span> <em className="pc-self-green">4/5 (Exceeds)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Manager:</span> <em className="pc-self-orange">3/5 (Meets)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Variance:</span> <b className="pc-var-neg">-1</b>
                    </p>
                  </div>
                  <div className="pc-row-actions">
                    <span className="pc-priority pc-priority-high">High Priority</span>
                    <button type="button" className="pc-review-btn">Review Case</button>
                    <button type="button" className="pc-final-review-btn" onClick={() => navigate('/hrm/performance/final-rating/1')}>Final Review</button>
                  </div>
                </div>

                <div className="pc-queue-row pc-queue-row-medium">
                  <img className="pc-avatar-img" src="https://i.pravatar.cc/46?img=32" alt="Emily Chen" />
                  <div className="pc-person-meta">
                    <strong>Emily Chen</strong>
                    <span className="pc-role-line">Backend Engineer • API Team</span>
                    <p>
                      <span className="pc-label">Self:</span> <em className="pc-self-blue">3/5 (Meets)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Manager:</span> <em className="pc-self-green">4/5 (Exceeds)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Variance:</span> <b className="pc-var-pos">+1</b>
                    </p>
                  </div>
                  <div className="pc-row-actions">
                    <span className="pc-priority pc-priority-medium">Medium Priority</span>
                    <button type="button" className="pc-review-btn">Review Case</button>
                    <button type="button" className="pc-final-review-btn" onClick={() => navigate('/hrm/performance/final-rating/2')}>Final Review</button>
                  </div>
                </div>

                <div className="pc-queue-row pc-queue-row-aligned">
                  <img className="pc-avatar-img" src="https://i.pravatar.cc/46?img=15" alt="Michael Rodriguez" />
                  <div className="pc-person-meta">
                    <strong>Michael Rodriguez</strong>
                    <span className="pc-role-line">DevOps Engineer • Infrastructure Team</span>
                    <p>
                      <span className="pc-label">Self:</span> <em className="pc-self-green">4/5 (Exceeds)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Manager:</span> <em className="pc-self-green">4/5 (Exceeds)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Variance:</span> <b className="pc-var-zero">0</b>
                    </p>
                  </div>
                  <div className="pc-row-actions">
                    <span className="pc-priority pc-priority-aligned">Aligned</span>
                    <button type="button" className="pc-review-btn pc-review-btn-approved">Approved</button>
                  </div>
                </div>

                <div className="pc-queue-row pc-queue-row-aligned">
                  <img className="pc-avatar-img" src="https://i.pravatar.cc/46?img=47" alt="Sarah Williams" />
                  <div className="pc-person-meta">
                    <strong>Sarah Williams</strong>
                    <span className="pc-role-line">Frontend Engineer • UI/UX Team</span>
                    <p>
                      <span className="pc-label">Self:</span> <em className="pc-self-blue">3/5 (Meets)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Manager:</span> <em className="pc-self-blue">3/5 (Meets)</em>
                      <span className="pc-dot-sep">|</span>
                      <span className="pc-label">Variance:</span> <b className="pc-var-zero">0</b>
                    </p>
                  </div>
                  <div className="pc-row-actions">
                    <span className="pc-priority pc-priority-aligned">Aligned</span>
                    <button type="button" className="pc-review-btn pc-review-btn-approved">Approved</button>
                  </div>
                </div>
              </div>
            </article>

            <aside className="pc-insights-card">
              <h3>Calibration Insights</h3>

              <section className="pc-insight-section">
                <h4>Rating Distribution</h4>
                <div className="pc-dist-list">
                  {ratingDistribution.map((item) => (
                    <div key={item.label} className="pc-dist-row">
                      <div className="pc-dist-label-line">
                        <span>{item.label}</span>
                        <span>{item.count} ({item.pct}%)</span>
                      </div>
                      <div className="pc-dist-track">
                        <div className="pc-dist-fill" style={{ width: item.width, background: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pc-insight-section">
                <h4>Key Insights</h4>
                <ul className="pc-insight-list">
                  <li>67% alignment between self and manager ratings</li>
                  <li>3 cases show significant variance (&gt;1 point)</li>
                  <li>Average rating: 3.4/5 Meets Expectations</li>
                </ul>
              </section>

              <section className="pc-insight-section">
                <h4>Session Progress</h4>
                <div className="pc-progress-head">
                  <span>Completion</span>
                  <span>33%</span>
                </div>
                <div className="pc-progress-track">
                  <div className="pc-progress-fill" />
                </div>
                <p className="pc-progress-note">8 of 24 reviews calibrated</p>
              </section>

              <section className="pc-time-box">
                <h4><FiClock size={13} /> Time Remaining</h4>
                <strong>5 days</strong>
                <p>Until calibration deadline</p>
              </section>
            </aside>
          </div>

          <article className="pc-guidelines-card">
            <h3>Calibration Guidelines</h3>
            <div className="pc-guidelines-grid">
              <div className="pc-guide-item">
                <span className="pc-guide-icon pc-guide-blue">⚖</span>
                <div>
                  <h4>Consistency</h4>
                  <p>Ensure ratings are consistent across similar roles and performance levels</p>
                </div>
              </div>
              <div className="pc-guide-item">
                <span className="pc-guide-icon pc-guide-green">💬</span>
                <div>
                  <h4>Discussion</h4>
                  <p>Engage in constructive dialogue to understand different perspectives</p>
                </div>
              </div>
              <div className="pc-guide-item">
                <span className="pc-guide-icon pc-guide-purple">📄</span>
                <div>
                  <h4>Documentation</h4>
                  <p>Document rationale for all rating adjustments and decisions</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default PerformanceCalibrationPage
