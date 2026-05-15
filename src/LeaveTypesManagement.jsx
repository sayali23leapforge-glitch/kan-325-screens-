import {
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiEdit2,
  FiEye,
  FiFilter,
  FiGrid,
  FiHeart,
  FiMoreVertical,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiUmbrella,
  FiUser,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './leave-types-management.css'

const leaveTypeCards = [
  {
    title: 'Annual Leave',
    description: 'Standard vacation days for all employees',
    icon: FiCalendar,
    tone: 'blue',
    allocation: '25 days',
    consecutive: '15 days',
    notice: '7 days',
    approval: 'Yes',
    usage: 78,
    editLabel: 'Edit',
  },
  {
    title: 'Sick Leave',
    description: 'Medical leave for health-related absences',
    icon: FiHeart,
    tone: 'red',
    allocation: '12 days',
    consecutive: '7 days',
    notice: 'Same day',
    approval: 'No',
    usage: 45,
    editLabel: 'Edit',
  },
  {
    title: 'Maternity Leave',
    description: 'Parental leave for new mothers',
    icon: FiUser,
    tone: 'purple',
    allocation: '90 days',
    consecutive: '90 days',
    notice: '30 days',
    approval: 'Yes',
    usage: 12,
    editLabel: 'Edit',
  },
  {
    title: 'Casual Leave',
    description: 'Short-term personal time off',
    icon: FiUmbrella,
    tone: 'green',
    allocation: '8 days',
    consecutive: '3 days',
    notice: '2 days',
    approval: 'Yes',
    usage: 92,
    editLabel: 'Edit',
  },
]

const tableRows = [
  {
    title: 'Annual Leave',
    subtitle: 'Vacation days',
    tone: 'blue',
    allocation: '25 days',
    maxDays: '15 days',
    notice: '7 days',
    status: 'Active',
    icon: FiCalendar,
  },
  {
    title: 'Sick Leave',
    subtitle: 'Medical leave',
    tone: 'red',
    allocation: '12 days',
    maxDays: '7 days',
    notice: 'Same day',
    status: 'Active',
    icon: FiHeart,
  },
  {
    title: 'Maternity Leave',
    subtitle: 'Parental leave',
    tone: 'purple',
    allocation: '90 days',
    maxDays: '90 days',
    notice: '30 days',
    status: 'Active',
    icon: FiUser,
  },
  {
    title: 'Casual Leave',
    subtitle: 'Personal time',
    tone: 'green',
    allocation: '8 days',
    maxDays: '3 days',
    notice: '2 days',
    status: 'Active',
    icon: FiUmbrella,
  },
]

function LeaveTypesManagement() {
  const navigate = useNavigate()

  return (
    <div className="ltm-layout">
      <HRMSidebar />

      <main className="ltm-main">
        <header className="ltm-header">
          <div>
            <h1>Leave Types Management</h1>
            <div className="ltm-breadcrumb">
              <span className="link">Home</span>
              <span>&gt;</span>
              <span className="link">HRM</span>
              <span>&gt;</span>
              <span className="link">Leave Management</span>
              <span>&gt;</span>
              <span>Leave Types</span>
            </div>
          </div>

          <div className="ltm-header-actions">
            <button type="button" className="ltm-bell" aria-label="Notifications">
              <FiBell size={15} />
              <span>3</span>
            </button>
            <button type="button" className="ltm-add-btn">
              <FiPlus size={14} />
              Add Leave Type
            </button>
          </div>
        </header>

        <section className="ltm-tabs-bar">
          <div className="ltm-tabs">
            <button type="button">General Policies</button>
            <button type="button" className="active">Leave Types</button>
            <button type="button" onClick={() => navigate('/leave/accrual-rules')}>Approval Rules</button>
            <button type="button">Calendar Settings</button>
          </div>
          <div className="ltm-status-indicator">
            <span>4 Active Types</span>
            <span className="dot" />
            <span className="ok">All Configured</span>
          </div>
        </section>

        <section className="ltm-cards-grid">
          {leaveTypeCards.map((card) => {
            const Icon = card.icon
            return (
              <article key={card.title} className="ltm-type-card">
                <div className="ltm-card-top">
                  <span className={`ltm-icon ${card.tone}`}>
                    <Icon size={14} />
                  </span>
                  <div className="ltm-card-actions-top">
                    <span className="ltm-active-badge">Active</span>
                    <button type="button" aria-label="More">
                      <FiMoreVertical size={14} />
                    </button>
                  </div>
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <div className="ltm-meta-list">
                  <div><span>Annual Allocation</span><strong>{card.allocation}</strong></div>
                  <div><span>Max Consecutive</span><strong>{card.consecutive}</strong></div>
                  <div><span>Notice Period</span><strong>{card.notice}</strong></div>
                  <div><span>Requires Approval</span><strong>{card.approval}</strong></div>
                </div>

                <div className="ltm-divider" />

                <div className="ltm-usage-row">
                  <span>Usage Rate</span>
                  <strong>{card.usage}%</strong>
                </div>
                <div className="ltm-progress-track">
                  <div className={`ltm-progress-fill ${card.tone}`} style={{ width: `${card.usage}%` }} />
                </div>

                <div className="ltm-card-footer">
                  <button type="button" className={`ltm-edit-btn ${card.tone}`}>{card.editLabel}</button>
                  <button type="button" className="ltm-copy-btn" aria-label="Copy">
                    <FiGrid size={12} />
                  </button>
                </div>
              </article>
            )
          })}
        </section>

        <section className="ltm-bottom-grid">
          <article className="ltm-table-card">
            <div className="ltm-table-head">
              <h2>Detailed Configuration</h2>
              <div className="ltm-table-controls">
                <div className="ltm-search-box">
                  <FiSearch size={13} />
                  <input type="text" defaultValue="" placeholder="Search leave types..." />
                </div>
                <button type="button" className="ltm-filter-btn" aria-label="Filter">
                  <FiFilter size={13} />
                </button>
              </div>
            </div>

            <div className="ltm-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Leave Type</th>
                    <th>Allocation</th>
                    <th>Max Days</th>
                    <th>Notice</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => {
                    const RowIcon = row.icon
                    return (
                      <tr key={row.title}>
                        <td>
                          <div className="ltm-leave-type-cell">
                            <span className={`ltm-mini-icon ${row.tone}`}>
                              <RowIcon size={12} />
                            </span>
                            <div>
                              <div className="name">{row.title}</div>
                              <div className="sub">{row.subtitle}</div>
                            </div>
                          </div>
                        </td>
                        <td>{row.allocation}</td>
                        <td>{row.maxDays}</td>
                        <td>{row.notice}</td>
                        <td><span className="ltm-active-badge">{row.status}</span></td>
                        <td>
                          <div className="ltm-row-actions">
                            <button type="button" className="edit" aria-label="Edit"><FiEdit2 size={12} /></button>
                            <button type="button" className="view" aria-label="View"><FiEye size={12} /></button>
                            <button type="button" className="delete" aria-label="Delete"><FiTrash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </article>

          <aside className="ltm-right-panel">
            <article className="ltm-stats-card">
              <h3>Quick Stats</h3>
              <div className="ltm-stat-row"><span>Total Types</span><strong>4</strong></div>
              <div className="ltm-stat-row"><span>Active</span><strong>4</strong></div>
              <div className="ltm-stat-row"><span>Inactive</span><strong>0</strong></div>
            </article>

            <article className="ltm-create-card">
              <h3>Add New Leave Type</h3>
              <p>Create custom leave types for your organization</p>
              <button type="button">Create New Type</button>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default LeaveTypesManagement
