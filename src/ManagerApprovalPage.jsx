import {
  FiBell,
  FiCalendar,
  FiCheck,
  FiDownload,
  FiEye,
  FiFilter,
  FiSearch,
  FiX,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './manager-approval.css'

const summaryCards = [
  {
    title: 'Pending HR Reviews',
    value: '17',
    badge: 'Critical',
    badgeClass: 'critical',
    iconClass: 'critical',
  },
  {
    title: 'Approved Today',
    value: '68',
    badge: '+18%',
    badgeClass: 'positive',
    iconClass: 'positive',
  },
  {
    title: 'Policy Violations',
    value: '5',
    badge: 'Policy',
    badgeClass: 'policy',
    iconClass: 'policy',
  },
  {
    title: 'Avg. Review Time',
    value: '1.6h',
    badge: '1.6h',
    badgeClass: 'info',
    iconClass: 'info',
  },
]

const requests = [
  {
    id: 1,
    name: 'Robert Davis',
    role: 'Sales Manager',
    initials: 'RD',
    type: 'Disciplinary Action',
    typeClass: 'disciplinary',
    category: 'Misconduct',
    submitted: 'Dec 17',
    details: 'Harassment complaint filed',
    severity: 'High',
    severityClass: 'high',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    role: 'HR Specialist',
    initials: 'ET',
    type: 'Policy Exemption',
    typeClass: 'exemption',
    category: 'Remote Work',
    submitted: 'Dec 18',
    details: 'Extended remote work request',
    severity: 'Medium',
    severityClass: 'medium',
  },
  {
    id: 3,
    name: 'Alex Martinez',
    role: 'Finance Analyst',
    initials: 'AM',
    type: 'Benefits Change',
    typeClass: 'benefits',
    category: 'Health Insurance',
    submitted: 'Dec 16',
    details: 'Family coverage addition',
    severity: 'Low',
    severityClass: 'low',
  },
  {
    id: 4,
    name: 'Sophie Wilson',
    role: 'UX Designer',
    initials: 'SW',
    type: 'Grievance',
    typeClass: 'grievance',
    category: 'Workplace Issue',
    submitted: 'Dec 15',
    details: 'Team conflict resolution',
    severity: 'High',
    severityClass: 'high',
  },
]

const activityLog = [
  {
    title: 'Benefits Change Approved',
    subtitle: 'Alex Martinez - Health Insurance Coverage',
    time: '2 minutes ago',
    className: 'success',
    icon: 'check',
  },
  {
    title: 'Policy Exemption Rejected',
    subtitle: 'David Lee - Extended Leave Request',
    time: '15 minutes ago',
    className: 'danger',
    icon: 'cross',
  },
  {
    title: 'Request Under Review',
    subtitle: 'Sophie Wilson - Grievance Case',
    time: '1 hour ago',
    className: 'info',
    icon: 'view',
  },
]

function ManagerApprovalPage() {
  const navigate = useNavigate()

  const renderActivityIcon = (icon) => {
    if (icon === 'check') return <FiCheck size={13} />
    if (icon === 'cross') return <FiX size={13} />
    return <FiEye size={13} />
  }

  return (
    <div className="hr-approval-layout">
      <HRMSidebar />

      <main className="hr-approval-main">
        <header className="hr-approval-topbar">
          <div>
            <button
              type="button"
              className="hr-approval-back-link"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
            <h1>HR Approval</h1>
            <div className="hr-approval-breadcrumb">
              <span className="crumb-link">Home</span>
              <span>&gt;</span>
              <span className="crumb-link">HRM</span>
              <span>&gt;</span>
              <span>HR Approval</span>
            </div>
          </div>

          <div className="hr-approval-actions">
            <button type="button" className="hr-approval-notification" aria-label="Notifications">
              <FiBell size={16} />
              <span>7</span>
            </button>
            <button type="button" className="hr-approval-export-btn">
              <FiDownload size={14} />
              Export Report
            </button>
          </div>
        </header>

        <section className="hr-approval-alert" role="status" aria-live="polite">
          <div className="alert-icon">✓</div>
          <div className="alert-copy">
            <strong>Attendance Record Updated Successfully</strong>
            <span>Sarah Johnson&apos;s attendance has been corrected and approved by HR.</span>
          </div>
          <button type="button" className="alert-dismiss" aria-label="Dismiss notification">×</button>
        </section>

        <section className="hr-approval-summary-grid">
          {summaryCards.map((card) => (
            <article key={card.title} className="hr-approval-summary-card">
              <div className="summary-top">
                <span className={`summary-icon ${card.iconClass}`} />
                <span className={`summary-badge ${card.badgeClass}`}>{card.badge}</span>
              </div>
              <div className="summary-value">{card.value}</div>
              <div className="summary-label">{card.title}</div>
            </article>
          ))}
        </section>

        <section className="hr-approval-filter-bar">
          <div className="filter-date">
            <FiCalendar size={14} />
            December 18, 2024
          </div>

          <div className="filter-controls">
            <div className="filter-tabs" role="tablist" aria-label="Approval filters">
              <button type="button" className="active">All</button>
              <button type="button">Attendance</button>
              <button type="button">Policy</button>
              <button type="button">Benefits</button>
            </div>
            <button type="button" className="filter-btn"><FiFilter size={14} />Filter</button>
            <button type="button" className="filter-btn"><FiSearch size={14} />Search</button>
          </div>
        </section>

        <section className="hr-approval-table-card">
          <div className="table-card-header">
            <h2>Pending HR Approval Requests</h2>
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Request Type</th>
                  <th>Category</th>
                  <th>Date Submitted</th>
                  <th>Details</th>
                  <th>Severity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>
                      <div className="employee-cell">
                        <span className="employee-avatar">{request.initials}</span>
                        <div>
                          <div className="employee-name">{request.name}</div>
                          <div className="employee-role">{request.role}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`type-chip ${request.typeClass}`}>{request.type}</span>
                    </td>
                    <td>{request.category}</td>
                    <td>{request.submitted}</td>
                    <td>{request.details}</td>
                    <td>
                      <span className={`severity-chip ${request.severityClass}`}>{request.severity}</span>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button type="button" aria-label="Approve"><FiCheck size={13} /></button>
                        <button type="button" aria-label="Reject" className="danger"><FiX size={13} /></button>
                        <button type="button" aria-label="View" className="view"><FiEye size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span>Showing 4 of 17 requests</span>
            <div className="pagination">
              <button type="button" className="muted">&lt;</button>
              <button type="button" className="active">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">&gt;</button>
            </div>
          </div>
        </section>

        <section className="hr-approval-bottom-grid">
          <article className="metric-card">
            <h3>Approval Rate This Month</h3>
            <div className="metric-value success">94.8%</div>
            <p>+2.3% from last month</p>
          </article>

          <article className="metric-card">
            <h3>Average Processing Time</h3>
            <div className="metric-value info">1.6h</div>
            <p>-0.4h improvement</p>
          </article>
        </section>

        <section className="activity-card">
          <h3>Recent Activity Log</h3>
          <div className="activity-list">
            {activityLog.map((entry) => (
              <article key={entry.title} className="activity-row">
                <span className={`activity-dot ${entry.className}`}>
                  {renderActivityIcon(entry.icon)}
                </span>
                <div>
                  <div className="activity-title">{entry.title}</div>
                  <div className="activity-subtitle">{entry.subtitle}</div>
                  <div className="activity-time">{entry.time}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default ManagerApprovalPage