import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiChevronDown, FiDownload, FiFilter, FiPlus } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './regularization-request-page.css'

const summaryCards = [
  { id: 1, title: 'Pending Requests', value: '12', badge: 'Pending', icon: 'P', tone: 'orange' },
  { id: 2, title: 'Approved This Month', value: '48', badge: 'Approved', icon: 'A', tone: 'green' },
  { id: 3, title: 'Rejected This Month', value: '3', badge: 'Rejected', icon: 'R', tone: 'red' },
  { id: 4, title: 'Requests Today', value: '5', badge: 'Today', icon: 'T', tone: 'blue' },
]

const requestRows = [
  {
    id: 1,
    employee: 'Sarah Johnson',
    department: 'Engineering',
    initials: 'SJ',
    avatarTone: 'purple',
    date: 'Dec 18, 2024',
    type: 'Late Arrival',
    typeTone: 'orange',
    reason: 'Medical appointment',
    status: 'Pending',
    statusTone: 'yellow',
  },
  {
    id: 2,
    employee: 'David Kim',
    department: 'Marketing',
    initials: 'DK',
    avatarTone: 'slate',
    date: 'Dec 17, 2024',
    type: 'Missed Punch',
    typeTone: 'red',
    reason: 'Forgot to punch out',
    status: 'Approved',
    statusTone: 'green',
  },
  {
    id: 3,
    employee: 'Emily Davis',
    department: 'Sales',
    initials: 'ED',
    avatarTone: 'blue',
    date: 'Dec 16, 2024',
    type: 'Early Exit',
    typeTone: 'blue',
    reason: 'Family emergency',
    status: 'Pending',
    statusTone: 'yellow',
  },
  {
    id: 4,
    employee: 'Alex Rodriguez',
    department: 'Operations',
    initials: 'AR',
    avatarTone: 'green',
    date: 'Dec 15, 2024',
    type: 'Work From Home',
    typeTone: 'purple',
    reason: 'Internet issues at office',
    status: 'Approved',
    statusTone: 'green',
  },
  {
    id: 5,
    employee: 'Lisa Wang',
    department: 'HR',
    initials: 'LW',
    avatarTone: 'amber',
    date: 'Dec 14, 2024',
    type: 'Late Arrival',
    typeTone: 'orange',
    reason: 'Traffic jam due to accident',
    status: 'Rejected',
    statusTone: 'red',
  },
]

function RegularizationRequestPage({ onSwitchModule }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All Requests')

  return (
    <div className="rr-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="rr-main">
        <header className="rr-header">
          <div className="rr-header-left">
            <h1 className="rr-title">Regularization Request</h1>
            <nav className="rr-breadcrumb">
              <a href="/">Home</a>
              <span>&gt;</span>
              <a href="/hrm/attendance">Attendance</a>
              <span>&gt;</span>
              <span>Regularization Request</span>
            </nav>
          </div>

          <div className="rr-header-right">
            <button className="rr-notify-btn" title="Notifications">
              <FiBell size={18} />
              <span className="rr-notify-badge">3</span>
            </button>
            <button className="rr-primary-btn">
              <FiPlus size={15} />
              New Request
            </button>
          </div>
        </header>

        <section className="rr-content">
          <div className="rr-summary-grid">
            {summaryCards.map((card) => (
              <article
                key={card.id}
                className={`rr-summary-card ${card.id === 1 ? 'rr-summary-card-clickable' : ''}`}
                onClick={card.id === 1 ? () => navigate('/manager-approval') : undefined}
                role={card.id === 1 ? 'button' : undefined}
                tabIndex={card.id === 1 ? 0 : undefined}
                onKeyDown={
                  card.id === 1
                    ? (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          navigate('/manager-approval')
                        }
                      }
                    : undefined
                }
              >
                <div className="rr-card-top">
                  <span className={`rr-card-icon ${card.tone}`}>{card.icon}</span>
                  <span className={`rr-card-badge ${card.tone}`}>{card.badge}</span>
                </div>
                <div className="rr-card-value">{card.value}</div>
                <div className="rr-card-label">{card.title}</div>
              </article>
            ))}
          </div>

          <div className="rr-filter-row">
            <div className="rr-filter-left">
              {['All Requests', 'Pending', 'Approved', 'Rejected'].map((tab) => (
                <button
                  key={tab}
                  className={`rr-tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => {
                    if (tab === 'Pending') {
                      navigate('/manager-approval')
                      return
                    }
                    setActiveTab(tab)
                  }}
                >
                  {tab}
                </button>
              ))}

              <button className="rr-dept-btn">
                All Departments
                <FiChevronDown size={14} />
              </button>
            </div>

            <div className="rr-filter-actions">
              <button className="rr-secondary-btn">
                <FiFilter size={14} />
                Filter
              </button>
              <button className="rr-secondary-btn">
                <FiDownload size={14} />
                Export
              </button>
            </div>
          </div>

          <section className="rr-table-card">
            <div className="rr-table-title">Regularization Requests</div>

            <div className="rr-table-wrap">
              <table className="rr-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requestRows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div className="rr-employee-cell">
                          <span className={`rr-avatar ${row.avatarTone}`}>{row.initials}</span>
                          <div>
                            <div className="rr-employee-name">{row.employee}</div>
                            <div className="rr-employee-dept">{row.department}</div>
                          </div>
                        </div>
                      </td>
                      <td>{row.date}</td>
                      <td>
                        <span className={`rr-type-tag ${row.typeTone}`}>{row.type}</span>
                      </td>
                      <td>{row.reason}</td>
                      <td>
                        <span className={`rr-status-tag ${row.statusTone}`}>{row.status}</span>
                      </td>
                      <td>
                        {row.status === 'Pending' ? (
                          <div className="rr-action-links">
                            <button className="rr-link approve">Approve</button>
                            <button className="rr-link reject">Reject</button>
                          </div>
                        ) : (
                          <button className="rr-link view">View</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rr-table-footer">
              <span>Showing 1 to 5 of 63 results</span>
              <div className="rr-pagination">
                <button className="rr-page-btn">Previous</button>
                <button className="rr-page-btn active">1</button>
                <button className="rr-page-btn">2</button>
                <button className="rr-page-btn">3</button>
                <button className="rr-page-btn">Next</button>
              </div>
            </div>
          </section>

          <section className="rr-quick-actions">
            <div>
              <div className="rr-quick-title">Quick Actions</div>
              <div className="rr-quick-subtitle">Manage attendance regularization requests efficiently</div>
            </div>
            <div className="rr-quick-btns">
              <button className="rr-primary-btn small">
                <FiPlus size={14} />
                New Request
              </button>
              <button className="rr-secondary-btn small">Bulk Approve</button>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default RegularizationRequestPage
