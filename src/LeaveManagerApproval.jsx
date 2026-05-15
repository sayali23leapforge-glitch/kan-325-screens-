import {
  FiAlertTriangle,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiEye,
  FiSearch,
  FiX,
  FiXCircle,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './leave-manager-approval.css'

const topCards = [
  { title: 'Pending Approvals', value: '12', tone: 'orange', icon: FiClock },
  { title: 'Approved Today', value: '8', tone: 'green', icon: FiCheckCircle },
  { title: 'Rejected This Week', value: '3', tone: 'red', icon: FiXCircle },
  { title: 'Urgent Requests', value: '5', tone: 'purple', icon: FiAlertTriangle },
]

const requests = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer • EMP-1247',
    leaveType: 'Annual Leave',
    duration: '5 Days',
    startDate: 'Dec 20, 2024',
    endDate: 'Dec 24, 2024',
    reason:
      'Family vacation planned for the holidays. All current projects are on track and will be handed over to Alex.',
    status: 'Pending',
    statusTone: 'pending',
    initials: 'SJ',
  },
  {
    id: 2,
    name: 'David Martinez',
    role: 'Project Manager • EMP-0892',
    leaveType: 'Sick Leave',
    duration: '2 Days',
    startDate: 'Dec 18, 2024',
    endDate: 'Dec 19, 2024',
    reason:
      'Experiencing severe flu symptoms. Medical certificate will be provided upon return.',
    status: 'Pending',
    statusTone: 'pending',
    initials: 'DM',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'UI Designer • EMP-3456',
    leaveType: 'Emergency Leave',
    duration: '3 Days',
    startDate: 'Dec 17, 2024',
    endDate: 'Dec 19, 2024',
    reason: 'Family emergency requiring immediate attention.',
    status: 'Urgent',
    statusTone: 'urgent',
    initials: 'EC',
    alert: 'Urgent: emergency requiring immediate attention. Manager action required.',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Marketing Specialist • EMP-5421',
    leaveType: 'Casual Leave',
    duration: '1 Day',
    startDate: 'Dec 16, 2024',
    endDate: 'Dec 16, 2024',
    reason: 'Personal work and documentation updates.',
    status: 'Pending',
    statusTone: 'pending',
    initials: 'JW',
  },
]

function LeaveManagerApproval({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="lma-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="lma-main">
        <header className="lma-header">
          <div className="lma-header-copy">
            <h1>Manager Approval</h1>
            <div className="lma-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>HRM</span>
              <span>&gt;</span>
              <span>Leave Management</span>
              <span>&gt;</span>
              <span>Manager Approval</span>
            </div>
          </div>

          <div className="lma-header-actions">
            <button type="button" className="lma-bell" aria-label="Notifications">
              <FiBell size={14} />
              <span>2</span>
            </button>
            <button
              type="button"
              className="lma-back-btn"
              onClick={() => navigate('/hrm/dashboard')}
            >
              Back to Dashboard
            </button>
          </div>
        </header>

        <section className="lma-content">
          <div className="lma-top-cards">
            {topCards.map((card) => {
              const Icon = card.icon

              return (
                <article key={card.title} className="lma-top-card">
                  <div className="lma-top-title">{card.title}</div>
                  <div className="lma-top-meta">
                    <strong>{card.value}</strong>
                    <span className={`lma-icon-box ${card.tone}`}>
                      <Icon size={12} />
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="lma-filter-row">
            <div className="lma-search-wrap">
              <FiSearch size={14} />
              <input type="text" defaultValue="" placeholder="Search by employee name or ID..." />
            </div>

            <button type="button" className="lma-select-btn">
              All Leave Types
              <FiChevronDown size={14} />
            </button>
            <button type="button" className="lma-select-btn">
              All Status
              <FiChevronDown size={14} />
            </button>
            <button type="button" className="lma-select-btn">
              All Departments
              <FiChevronDown size={14} />
            </button>
          </div>

          <div className="lma-request-list">
            {requests.map((item) => (
              <article key={item.id} className="lma-request-card">
                <div className="lma-request-left">
                  <div className="lma-avatar">{item.initials}</div>

                  <div className="lma-request-copy">
                    <div className="lma-name-row">
                      <h3>{item.name}</h3>
                      <span className={`lma-status ${item.statusTone}`}>{item.status}</span>
                    </div>

                    <p className="lma-role">{item.role}</p>

                    <div className="lma-meta-row">
                      <span className="type">Leave Type: {item.leaveType}</span>
                      <span className="duration">Duration: {item.duration}</span>
                      <span className="date">Start: {item.startDate}</span>
                      <span className="date">End: {item.endDate}</span>
                    </div>

                    <p className="lma-reason">{item.reason}</p>

                    {item.alert && <div className="lma-alert">{item.alert}</div>}

                    <div className="lma-footer-row">
                      <span>Submitted: 2 hours ago</span>
                      <span>Department: Engineering</span>
                      <span>Requester: system</span>
                    </div>
                  </div>
                </div>

                <div className="lma-actions">
                  <button type="button" className="approve">
                    <FiCheck size={13} />
                    Approve
                  </button>
                  <button type="button" className="reject">
                    <FiX size={13} />
                    Reject
                  </button>
                  <button type="button" className="view">
                    <FiEye size={13} />
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default LeaveManagerApproval
