import {
  FiBell,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiEdit2,
  FiPlus,
  FiVideo,
  FiXCircle,
  FiStar,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './interview-page.css'

const overviewStats = [
  {
    title: 'Scheduled',
    count: 12,
    note: 'This week',
    bg: '#EFF6FF',
    iconColor: '#2563EB',
    Icon: FiCalendar,
  },
  {
    title: 'Completed',
    count: 8,
    note: 'Awaiting feedback',
    bg: '#F0FDF4',
    iconColor: '#16A34A',
    Icon: FiCheckCircle,
  },
  {
    title: 'In Progress',
    count: 3,
    note: 'Currently ongoing',
    bg: '#FEFCE8',
    iconColor: '#D97706',
    Icon: FiClock,
  },
  {
    title: 'Cancelled',
    count: 2,
    note: 'Need rescheduling',
    bg: '#FEF2F2',
    iconColor: '#DC2626',
    Icon: FiXCircle,
  },
]

const interviews = [
  {
    day: '15',
    month: 'JAN',
    time: '2:00 PM',
    name: 'Alex Rodriguez',
    role: 'Senior Frontend Developer',
    round: 'Technical Round',
    duration: '45 minutes',
    mode: 'Video Call',
    modeTone: 'blue',
    interviewer: 'John Smith',
    status: 'Scheduled',
    statusTone: 'blue',
  },
  {
    day: '15',
    month: 'JAN',
    time: '3:30 PM',
    name: 'Emma Thompson',
    role: 'Senior Frontend Developer',
    round: 'HR Round',
    duration: '30 minutes',
    mode: 'Video Call',
    modeTone: 'blue',
    interviewer: 'Sarah Johnson',
    status: 'In Progress',
    statusTone: 'green',
  },
  {
    day: '16',
    month: 'JAN',
    time: '10:00 AM',
    name: 'Sarah Williams',
    role: 'Senior Frontend Developer',
    round: 'Final Round',
    duration: '60 minutes',
    mode: 'In-Person',
    modeTone: 'orange',
    interviewer: 'Mike Chen',
    status: 'Scheduled',
    statusTone: 'blue',
  },
]

const templates = [
  {
    title: 'Technical Interview',
    color: '#2563EB',
    tone: 'blue',
    points: ['Coding challenges', 'System design questions', 'Technical problem solving', 'Code review simulation'],
    duration: 'Duration: 60 mins',
  },
  {
    title: 'Behavioral Interview',
    color: '#16A34A',
    tone: 'green',
    points: ['Cultural fit assessment', 'Past experience review', 'Situational questions', 'Career goals discussion'],
    duration: 'Duration: 45 mins',
  },
  {
    title: 'Final Interview',
    color: '#9333EA',
    tone: 'purple',
    points: ['Executive presentation', 'Salary negotiation', 'Role expectations', 'Next steps discussion'],
    duration: 'Duration: 30 mins',
  },
]

const feedbackItems = [
  {
    name: 'Emma Thompson',
    role: 'Technical Interview',
    date: 'Jan 12, 2024',
    score: '4.0/5',
    text: 'Excellent technical skills and problem-solving approach. Strong communication and ability to explain complex concepts clearly.',
    badge: 'Recommended',
    badgeTone: 'green',
    interviewer: 'Interviewer: John Smith',
  },
  {
    name: 'Michael Chen',
    role: 'HR Interview',
    date: 'Jan 10, 2024',
    score: '3.0/5',
    text: 'Good cultural fit but lacks some experience in key areas. Would benefit from additional training and mentorship.',
    badge: 'Consider',
    badgeTone: 'yellow',
    interviewer: 'Interviewer: Sarah Johnson',
  },
]

function InterviewPage() {
  return (
    <div className="interview-layout">
      <HRMSidebar />

      <main className="interview-main">
        <header className="interview-header">
          <div className="interview-header-left">
            <h1 className="interview-title">Interview Management</h1>
            <nav className="interview-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Interviews</span>
            </nav>
          </div>

          <div className="interview-header-right">
            <button type="button" className="interview-bell-btn" aria-label="Notifications">
              <FiBell size={14} />
              <span className="interview-bell-badge">3</span>
            </button>
            <div className="interview-status-pill">
              <span className="interview-status-dot" />
              Active Session
            </div>
          </div>
        </header>

        <section className="interview-content-wrap">
          <article className="interview-card">
            <div className="interview-overview-head">
              <h2>Interview Overview</h2>
              <div className="interview-overview-actions">
                <button type="button" className="interview-btn interview-btn-primary">
                  <FiPlus size={11} />
                  Schedule Interview
                </button>
                <button type="button" className="interview-btn interview-btn-outline">View Calendar</button>
              </div>
            </div>

            <div className="interview-overview-grid">
              {overviewStats.map((item) => (
                <div key={item.title} className="interview-overview-item" style={{ background: item.bg }}>
                  <div className="interview-overview-title" style={{ color: item.iconColor }}>
                    <item.Icon size={11} />
                    {item.title}
                  </div>
                  <div className="interview-overview-count">{item.count}</div>
                  <div className="interview-overview-note">{item.note}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="interview-card">
            <div className="interview-section-head">
              <h3>Upcoming Interviews</h3>
              <div className="interview-filter-group">
                <button type="button" className="interview-filter-btn">Today</button>
                <button type="button" className="interview-filter-btn">All Types</button>
              </div>
            </div>

            <div className="interview-list">
              {interviews.map((item) => (
                <div className="interview-row" key={`${item.name}-${item.day}`}>
                  <div className="interview-row-date">
                    <div className="interview-day">{item.day}</div>
                    <div className="interview-month">{item.month}</div>
                    <div className="interview-time">{item.time}</div>
                  </div>

                  <div className="interview-row-main">
                    <img className="interview-avatar" src={`https://i.pravatar.cc/46?u=${item.name}`} alt={item.name} />
                    <div className="interview-row-copy">
                      <div className="interview-row-name">{item.name}</div>
                      <div className="interview-row-role">{item.role}</div>
                      <div className="interview-row-meta">
                        <span>{item.round}</span>
                        <span>{item.duration}</span>
                        <span className={`interview-mode ${item.modeTone}`}>{item.mode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="interview-row-side">
                    <div className="interview-row-interviewer">Interviewer</div>
                    <div className="interview-row-interviewer-name">{item.interviewer}</div>
                  </div>

                  <div className="interview-row-actions">
                    <span className={`interview-status-badge ${item.statusTone}`}>{item.status}</span>
                    <button type="button" className="interview-icon-btn video" aria-label="Video call">
                      <FiVideo size={11} />
                    </button>
                    <button type="button" className="interview-icon-btn" aria-label="Edit interview">
                      <FiEdit2 size={11} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="interview-card">
            <div className="interview-section-head">
              <h3>Interview Templates</h3>
            </div>

            <div className="interview-template-grid">
              {templates.map((template) => (
                <div className="interview-template-card" key={template.title}>
                  <div className="interview-template-title" style={{ color: template.color }}>
                    {template.title}
                  </div>
                  <ul className="interview-template-list">
                    {template.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="interview-template-footer">
                    <span>{template.duration}</span>
                    <button type="button" className={`interview-template-btn ${template.tone}`}>Use Template</button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="interview-card">
            <div className="interview-section-head">
              <h3>Recent Interview Feedback</h3>
            </div>

            <div className="interview-feedback-list">
              {feedbackItems.map((item) => (
                <div className="interview-feedback-card" key={item.name}>
                  <div className="interview-feedback-left">
                    <img className="interview-feedback-avatar" src={`https://i.pravatar.cc/40?u=${item.name}`} alt={item.name} />
                    <div className="interview-feedback-copy">
                      <div className="interview-feedback-name">{item.name}</div>
                      <div className="interview-feedback-meta">{item.role} • {item.date}</div>
                      <p>{item.text}</p>
                      <div className="interview-feedback-bottom">
                        <span className={`interview-feedback-badge ${item.badgeTone}`}>{item.badge}</span>
                        <span className="interview-feedback-interviewer">{item.interviewer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="interview-feedback-rating">
                    <div className="interview-stars" aria-label={`Rating ${item.score}`}>
                      <FiStar size={10} />
                      <FiStar size={10} />
                      <FiStar size={10} />
                      <FiStar size={10} />
                      <FiStar size={10} className="dim" />
                    </div>
                    <div className="interview-score">{item.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default InterviewPage
