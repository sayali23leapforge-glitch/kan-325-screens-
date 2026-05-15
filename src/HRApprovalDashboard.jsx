import {
  FiBell,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiEye,
  FiFilter,
  FiSearch,
  FiUsers,
  FiX,
  FiXCircle,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './hr-approval-dashboard.css'

const stats = [
  {
    title: 'Pending Approvals',
    value: '21',
    note: '-2 from yesterday',
    badge: 'Urgent',
    tone: 'orange',
    icon: FiClock,
  },
  {
    title: 'Approved This Week',
    value: '158',
    note: '+2 today',
    badge: '+12%',
    tone: 'green',
    icon: FiCheckCircle,
  },
  {
    title: 'Rejected This Week',
    value: '8',
    note: 'No change',
    badge: '-5%',
    tone: 'red',
    icon: FiXCircle,
  },
  {
    title: 'Days to Approve',
    value: '2.3',
    note: '-0.2 improvement',
    badge: 'Avg',
    tone: 'blue',
    icon: FiUsers,
  },
]

const quickActions = [
  { title: 'Bulk Approve', tone: 'green', icon: FiCheck },
  { title: 'Filter Requests', tone: 'blue', icon: FiFilter },
  { title: 'Export Report', tone: 'purple', icon: FiDownload },
  { title: 'Sync Calendar', tone: 'orange', icon: FiCalendar, filled: true },
]

const requests = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    initials: 'SJ',
    leaveType: 'Annual Leave',
    typeClass: 'annual',
    duration: 'Dec 20 - Dec 27, 2024',
    days: '7',
    priority: 'High',
    priorityClass: 'high',
    status: 'Pending',
    statusClass: 'pending',
  },
  {
    id: 2,
    name: 'David Lee',
    role: 'Software Engineer',
    initials: 'DL',
    leaveType: 'Sick Leave',
    typeClass: 'sick',
    duration: 'Dec 18 - Dec 19, 2024',
    days: '2',
    priority: 'Med',
    priorityClass: 'med',
    status: 'Approved',
    statusClass: 'approved',
    synced: true,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Product Designer',
    initials: 'EW',
    leaveType: 'Casual Leave',
    typeClass: 'casual',
    duration: 'Dec 22, 2024',
    days: '1',
    priority: 'Low',
    priorityClass: 'low',
    status: 'Pending',
    statusClass: 'pending',
  },
  {
    id: 4,
    name: 'James Brown',
    role: 'Sales Executive',
    initials: 'JB',
    leaveType: 'Maternity',
    typeClass: 'maternity',
    duration: 'Jan 5 - Mar 31, 2025',
    days: '85',
    priority: 'High',
    priorityClass: 'high',
    status: 'Approved',
    statusClass: 'approved',
    synced: true,
  },
  {
    id: 5,
    name: 'Robert Martinez',
    role: 'Data Analyst',
    initials: 'RM',
    leaveType: 'Annual Leave',
    typeClass: 'annual',
    duration: 'Dec 24 - Dec 26, 2024',
    days: '3',
    priority: 'Med',
    priorityClass: 'med',
    status: 'Pending',
    statusClass: 'pending',
  },
]

function HRApprovalDashboard() {
  return (
    <div className="had-layout">
      <HRMSidebar />

      <main className="had-main">
        <header className="had-header">
          <div>
            <h1>HR Approval Dashboard</h1>
            <div className="had-breadcrumb">
              <span className="link">Home</span>
              <span>&gt;</span>
              <span className="link">HRM</span>
              <span>&gt;</span>
              <span>HR Approval</span>
            </div>
          </div>

          <div className="had-header-actions">
            <span className="had-calendar-chip">Calendar Updated</span>
            <button type="button" className="had-bell" aria-label="Notifications">
              <FiBell size={15} />
              <span>2</span>
            </button>
            <button type="button" className="had-review-btn">
              <FiEye size={14} />
              Review Request
            </button>
          </div>
        </header>

        <section className="had-stats-row">
          {stats.map((card) => {
            const Icon = card.icon

            return (
              <article key={card.title} className="had-stat-card">
                <div className="had-stat-top">
                  <span className={`had-stat-icon ${card.tone}`}>
                    <Icon size={13} />
                  </span>
                  <span className={`had-stat-badge ${card.tone}`}>{card.badge}</span>
                </div>
                <div className="had-stat-value">{card.value}</div>
                <div className="had-stat-title">{card.title}</div>
                <div className="had-stat-note">{card.note}</div>
              </article>
            )
          })}
        </section>

        <section className="had-calendar-banner">
          <div className="had-banner-icon">
            <FiCalendar size={14} />
          </div>
          <div className="had-banner-copy">
            <h3>Calendar Integration Updated</h3>
            <p>
              All approved leave requests have been automatically synced to the company calendar.
              Team members will receive updated availability notifications.
            </p>
            <div className="had-banner-meta">
              <span>2 new approvals synced</span>
              <span>Last sync: 2 minutes ago</span>
            </div>
          </div>
          <button type="button" className="had-banner-close" aria-label="Dismiss">×</button>
        </section>

        <section className="had-quick-actions">
          <h3>Quick Actions</h3>
          <div className="had-actions-grid">
            {quickActions.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  type="button"
                  className={`had-action-card ${item.filled ? 'filled' : ''}`}
                >
                  <span className={`had-action-icon ${item.tone}`}>
                    <Icon size={14} />
                  </span>
                  <span>{item.title}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="had-filter-strip">
          <div className="had-date-row">
            <FiCalendar size={13} />
            <span>December 19, 2024</span>
            <span className="synced">Calendar synced</span>
          </div>

          <div className="had-controls">
            <div className="had-tabs">
              <button type="button" className="active">All</button>
              <button type="button">Pending</button>
              <button type="button">Approved</button>
              <button type="button">Rejected</button>
            </div>
            <button type="button" className="had-control-btn"><FiFilter size={13} />Filter</button>
            <button type="button" className="had-control-btn"><FiSearch size={13} />Search</button>
          </div>
        </section>

        <section className="had-table-card">
          <div className="had-table-head">
            <h2>Pending Approval Requests</h2>
          </div>
          <div className="had-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>Duration</th>
                  <th>Days</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((row) => (
                  <tr key={row.id} className={row.synced ? 'synced-row' : ''}>
                    <td>
                      <div className="employee-cell">
                        <span className="avatar">{row.initials}</span>
                        <div>
                          <div className="name">{row.name}</div>
                          <div className="role">{row.role}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`type-pill ${row.typeClass}`}>{row.leaveType}</span>
                    </td>
                    <td>{row.duration}</td>
                    <td className="days">{row.days}</td>
                    <td>
                      <span className={`priority-pill ${row.priorityClass}`}>{row.priority}</span>
                    </td>
                    <td>
                      <span className={`status-pill ${row.statusClass}`}>{row.status}</span>
                    </td>
                    <td>
                      <div className="action-group">
                        <button type="button" className="approve">Approve</button>
                        <button type="button" className="reject">Reject</button>
                        <button type="button" className="view" aria-label="View"><FiEye size={12} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HRApprovalDashboard
