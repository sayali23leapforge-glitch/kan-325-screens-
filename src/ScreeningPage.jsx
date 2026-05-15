import {
  FiAlertCircle,
  FiBell,
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiDownload,
  FiFileText,
  FiFilter,
  FiLayers,
  FiSearch,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './screening-page.css'

const progressCards = [
  {
    title: 'Passed Screening',
    count: 8,
    note: 'Ready for next stage',
    bg: '#F0FDF4',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    Icon: FiCheckCircle,
  },
  {
    title: 'Not Qualified',
    count: 4,
    note: 'Did not meet requirements',
    bg: '#FEF2F2',
    iconBg: '#FEE2E2',
    iconColor: '#DC2626',
    Icon: FiAlertCircle,
  },
  {
    title: 'Pending Review',
    count: 6,
    note: 'To be reviewed by team',
    bg: '#FEFCE8',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    Icon: FiClock,
  },
]

const candidates = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    role: 'Senior Frontend Developer',
    applied: 'Applied Jan 10, 2024',
    experience: '8+ years',
    location: 'San Francisco, CA',
    score: 92,
    status: 'Pending',
    badgeTone: 'yellow',
    button: 'Start Screening',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    role: 'Senior Frontend Developer',
    applied: 'Applied Jan 11, 2024',
    experience: '7+ years',
    location: 'London, UK',
    score: 89,
    status: 'Passed',
    badgeTone: 'green',
    button: 'View Results',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Frontend Developer',
    applied: 'Applied Jan 12, 2024',
    experience: '5+ years',
    location: 'Seattle, WA',
    score: 84,
    status: 'Not Qualified',
    badgeTone: 'red',
    button: 'View Details',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Senior Frontend Developer',
    applied: 'Applied Jan 13, 2024',
    experience: '9+ years',
    location: 'New York, NY',
    score: 95,
    status: 'In Progress',
    badgeTone: 'yellow',
    button: 'Continue',
  },
]

const technicalCriteria = [
  { name: 'React Experience', value: 'Required (5+ years)', tone: 'green' },
  { name: 'TypeScript', value: 'Required', tone: 'green' },
  { name: 'Node.js', value: 'Preferred', tone: 'yellow' },
  { name: 'API Design', value: 'Nice to have', tone: 'orange' },
]

const generalCriteria = [
  { name: 'Education', value: "Bachelor's degree", tone: 'green' },
  { name: 'Experience', value: '6+ years', tone: 'green' },
  { name: 'Location', value: 'Remote/Hybrid', tone: 'blue' },
  { name: 'Availability', value: 'Immediate', tone: 'green' },
]

const quickActions = [
  {
    title: 'Bulk Screen',
    desc: 'Screen multiple candidates',
    bg: '#EFF6FF',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    Icon: FiSearch,
  },
  {
    title: 'Export Results',
    desc: 'Download screening report',
    bg: '#F0FDF4',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    Icon: FiDownload,
  },
  {
    title: 'Update Criteria',
    desc: 'Modify screening rules',
    bg: '#FAF5FF',
    iconBg: '#E9D5FF',
    iconColor: '#9333EA',
    Icon: FiLayers,
  },
  {
    title: 'Schedule Interviews',
    desc: 'Book shortlisted candidates',
    bg: '#FFF7ED',
    iconBg: '#FFEDD5',
    iconColor: '#EA580C',
    Icon: FiClipboard,
  },
]

function ScreeningPage() {
  return (
    <div className="screen-layout">
      <HRMSidebar />

      <main className="screen-main">
        <header className="screen-header">
          <div className="screen-header-left">
            <h1 className="screen-title">Candidate Screening</h1>
            <nav className="screen-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Screening</span>
            </nav>
          </div>
          <div className="screen-header-right">
            <button className="screen-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={14} />
              <span className="screen-bell-badge">3</span>
            </button>
            <div className="screen-status-pill">
              <span className="screen-status-dot" />
              Active Session
            </div>
          </div>
        </header>

        <section className="screen-content-wrap">
          <article className="screen-progress-card">
            <div className="screen-progress-top">
              <h2>Screening Progress</h2>
              <div className="screen-progress-text">12 of 18 candidates screened</div>
            </div>
            <div className="screen-progress-bar">
              <div className="screen-progress-fill" />
            </div>
            <div className="screen-progress-grid">
              {progressCards.map((card) => (
                <div key={card.title} className="screen-progress-item" style={{ background: card.bg }}>
                  <div className="screen-progress-icon" style={{ background: card.iconBg, color: card.iconColor }}>
                    <card.Icon size={14} />
                  </div>
                  <div className="screen-progress-count">{card.count}</div>
                  <div className="screen-progress-title">{card.title}</div>
                  <div className="screen-progress-note">{card.note}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="screen-card">
            <div className="screen-card-header">
              <h3 className="screen-card-title">Candidates to Screen</h3>
              <div className="screen-filters">
                <button type="button" className="screen-filter-chip">All Positions</button>
                <button type="button" className="screen-filter-chip">All Status</button>
              </div>
            </div>

            <div className="screen-candidate-list">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="screen-candidate-row">
                  <div className="screen-candidate-left">
                    <span className="screen-avatar">{candidate.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
                    <div className="screen-candidate-copy">
                      <div className="screen-candidate-name">{candidate.name}</div>
                      <div className="screen-candidate-role">{candidate.role}</div>
                      <div className="screen-candidate-meta">
                        <span>{candidate.applied}</span>
                        <span>{candidate.experience}</span>
                        <span>{candidate.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="screen-candidate-right">
                    <div className="screen-score">
                      <span className="screen-score-label">Resume Score</span>
                      <strong>{candidate.score}%</strong>
                    </div>
                    <span className={`screen-status-badge ${candidate.badgeTone}`}>{candidate.status}</span>
                    <button type="button" className="screen-row-btn">
                      {candidate.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="screen-card">
            <h3 className="screen-card-title">Screening Criteria</h3>
            <div className="screen-criteria-grid">
              <div className="screen-criteria-col">
                <div className="screen-criteria-heading">Technical Requirements</div>
                {technicalCriteria.map((item) => (
                  <div key={item.name} className="screen-criteria-row">
                    <div className="screen-criteria-name">{item.name}</div>
                    <div className={`screen-criteria-value ${item.tone}`}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="screen-criteria-col">
                <div className="screen-criteria-heading">General Requirements</div>
                {generalCriteria.map((item) => (
                  <div key={item.name} className="screen-criteria-row">
                    <div className="screen-criteria-name">{item.name}</div>
                    <div className={`screen-criteria-value ${item.tone}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <section className="screen-quick-grid">
            {quickActions.map((action) => (
              <article key={action.title} className="screen-quick-card" style={{ background: action.bg }}>
                <div className="screen-quick-icon" style={{ background: action.iconBg, color: action.iconColor }}>
                  <action.Icon size={14} />
                </div>
                <div className="screen-quick-copy">
                  <div className="screen-quick-title">{action.title}</div>
                  <div className="screen-quick-desc">{action.desc}</div>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  )
}

export default ScreeningPage
