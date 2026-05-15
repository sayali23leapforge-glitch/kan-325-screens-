import { FiBell, FiPlus, FiUsers, FiCheckCircle, FiClock, FiTrendingUp, FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './onboarding-dashboard.css'

const stats = [
  { title: 'Active Onboarding', value: '5', badge: '+12%', icon: FiUsers, tone: 'blue' },
  { title: 'Completed This Month', value: '12', badge: '+8%', icon: FiCheckCircle, tone: 'green' },
  { title: 'Avg. Days to Complete', value: '3.2', badge: '', icon: FiClock, tone: 'yellow' },
  { title: 'Completion Rate', value: '95%', badge: '95%', icon: FiTrendingUp, tone: 'purple' },
]

const onboardingRows = [
  { name: 'Sarah Johnson', role: 'Senior Engineer • Engineering', date: 'Started Dec 15, 2024', day: 'Day 3', progress: 60, color: 'blue' },
  { name: 'Mark Wilson', role: 'Product Manager • Product', date: 'Started Dec 12, 2024', day: 'Day 6', progress: 85, color: 'green' },
  { name: 'Emily Davis', role: 'UX Designer • Design', date: 'Started Dec 11, 2024', day: 'Day 5', progress: 40, color: 'orange' },
  { name: 'David Kim', role: 'Sales Representative • Sales', date: 'Started Dec 8, 2024', day: 'Day 10', progress: 75, color: 'blue' },
]

const tasks = [
  { title: 'Welcome Email', subtitle: 'Employee portal access', state: 'Complete', tone: 'green' },
  { title: 'IT Setup', subtitle: 'Hardware and accounts', state: 'In Progress', tone: 'blue' },
  { title: 'HR Documentation', subtitle: 'Forms & Policies', state: 'Pending', tone: 'gray' },
  { title: 'Team Introduction', subtitle: 'Team & mentor', state: 'Pending', tone: 'gray' },
  { title: 'Training Schedule', subtitle: 'Orientation', state: 'Pending', tone: 'gray' },
  { title: 'First Week Check-in', subtitle: 'Manager meeting', state: 'Pending', tone: 'gray' },
]

const activities = [
  { title: 'Sarah Johnson started onboarding', subtitle: 'Engineering Department • Senior Developer role', time: '2 hours ago', tone: 'green' },
  { title: 'Mark Wilson completed IT setup', subtitle: 'Hardware and system accounts configured', time: '4 hours ago', tone: 'blue' },
  { title: 'Emily Davis submitted documents', subtitle: 'All required HR forms completed', time: '1 day ago', tone: 'orange' },
  { title: 'Team meeting scheduled', subtitle: 'Introduction meeting for new hires', time: '2 days ago', tone: 'purple' },
]

const milestones = [
  { title: 'First Week Check-ins', subtitle: '3 employees need their first week check-in meetings', tag: 'Due Tomorrow', tone: 'yellow' },
  { title: 'Training Sessions', subtitle: '5 scheduled training sessions for new employees', tag: 'This Week', tone: 'blue' },
  { title: '30-Day Reviews', subtitle: '2 employees reaching 30-day milestone', tag: 'Next Week', tone: 'purple' },
  { title: 'Onboarding Completion', subtitle: '4 employees completing full onboarding program', tag: 'Next Month', tone: 'green' },
]

function StatsCard({ item }) {
  const Icon = item.icon
  return (
    <div className="on2-stat-card">
      <div className={`on2-stat-icon ${item.tone}`}>
        <Icon size={16} />
      </div>
      <div className="on2-stat-main">
        <div className="on2-stat-value">{item.value}</div>
        <div className="on2-stat-label">{item.title}</div>
      </div>
      {item.badge && <span className="on2-stat-badge">{item.badge}</span>}
    </div>
  )
}

function OnboardingList({ onViewAll }) {
  return (
    <div className="on2-card on2-onboarding-card">
      <div className="on2-card-header">
        <h3>Active Onboarding</h3>
        <button type="button" onClick={onViewAll}>View All</button>
      </div>
      <div className="on2-onboarding-list">
        {onboardingRows.map((row) => (
          <div key={row.name} className="on2-row">
            <div className="on2-row-main">
              <img src="https://placehold.co/36x36" alt={row.name} />
              <div>
                <div className="on2-row-name">{row.name}</div>
                <div className="on2-row-role">{row.role}</div>
                <div className="on2-row-date">{row.date}</div>
              </div>
            </div>
            <div className="on2-row-progress-wrap">
              <span className="on2-day-badge">{row.day}</span>
              <div className="on2-progress-track">
                <span className={`on2-progress-fill ${row.color}`} style={{ width: `${row.progress}%` }} />
              </div>
              <div className="on2-progress-text">{row.progress}% Complete</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TaskList() {
  return (
    <div className="on2-card">
      <div className="on2-card-header no-link">
        <h3>Onboarding Tasks</h3>
      </div>
      <div className="on2-task-list">
        {tasks.map((task) => (
          <div key={task.title} className={`on2-task-item ${task.tone}`}>
            <div>
              <div className="on2-task-title">{task.title}</div>
              <div className="on2-task-subtitle">{task.subtitle}</div>
            </div>
            <div className={`on2-task-state ${task.tone}`}>{task.state}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityList() {
  return (
    <div className="on2-card">
      <div className="on2-card-header no-link">
        <h3>Recent Activity</h3>
      </div>
      <div className="on2-activity-list">
        {activities.map((activity) => (
          <div key={activity.title} className="on2-activity-item">
            <span className={`on2-dot ${activity.tone}`} />
            <div>
              <div className="on2-activity-title">{activity.title}</div>
              <div className="on2-activity-subtitle">{activity.subtitle}</div>
              <div className="on2-activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Milestones() {
  return (
    <div className="on2-card">
      <div className="on2-card-header no-link">
        <h3>Upcoming Milestones</h3>
      </div>
      <div className="on2-milestones-list">
        {milestones.map((milestone) => (
          <div key={milestone.title} className={`on2-milestone ${milestone.tone}`}>
            <div>
              <div className="on2-milestone-title">{milestone.title}</div>
              <div className="on2-milestone-subtitle">{milestone.subtitle}</div>
            </div>
            <span className="on2-milestone-tag">{milestone.tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OnboardingDashboard({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="on2-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="on2-main">
        <header className="on2-header">
          <div>
            <h1>Onboarding Dashboard</h1>
            <nav>
              <a href="/">Home</a>
              <FiChevronRight size={12} />
              <a href="/hrm">HRM</a>
              <FiChevronRight size={12} />
              <span>Onboarding</span>
            </nav>
          </div>

          <div className="on2-header-actions">
            <button className="on2-notify" type="button" aria-label="Notifications">
              <FiBell size={16} />
              <span>2</span>
            </button>
            <button className="on2-new-btn" type="button" onClick={() => navigate('/hrm/onboarding/new-task')}>
              <FiPlus size={14} />
              <span>New Task</span>
            </button>
          </div>
        </header>

        <section className="on2-stats-grid">
          {stats.map((item) => (
            <StatsCard key={item.title} item={item} />
          ))}
        </section>

        <section className="on2-main-grid">
          <OnboardingList onViewAll={() => navigate('/hrm/onboarding/assign-checklist')} />
          <TaskList />
        </section>

        <section className="on2-bottom-grid">
          <ActivityList />
          <Milestones />
        </section>
      </main>
    </div>
  )
}

export default OnboardingDashboard
