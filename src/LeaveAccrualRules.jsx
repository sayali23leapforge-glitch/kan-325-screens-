import {
  FiBell,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiCopy,
  FiEdit2,
  FiEye,
  FiFilter,
  FiGrid,
  FiHeart,
  FiMoreVertical,
  FiPlus,
  FiSearch,
  FiThumbsUp,
  FiTrash2,
  FiUsers,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './leave-accrual-rules.css'

const cards = [
  {
    title: 'Annual Leave Accrual',
    icon: FiCalendar,
    tone: 'blue',
    description: 'Monthly accrual for vacation days',
    rate: '2.08 days/month',
    maxCarry: '5 days',
    waiting: '90 days',
    prorated: 'Yes',
    appliedTo: '247 employees',
    appliedTone: 'blue',
    btnTone: 'blue',
    usage: 78,
  },
  {
    title: 'Sick Leave Accrual',
    icon: FiHeart,
    tone: 'red',
    description: 'Monthly accrual for medical leave',
    rate: '1.0 day/month',
    maxCarry: '3 days',
    waiting: '30 days',
    prorated: 'Yes',
    appliedTo: '247 employees',
    appliedTone: 'red',
    btnTone: 'red',
    usage: 45,
  },
  {
    title: 'Personal Time Accrual',
    icon: FiUsers,
    tone: 'green',
    description: 'Quarterly accrual for personal days',
    rate: '2.0 days/quarter',
    maxCarry: '2 days',
    waiting: '180 days',
    prorated: 'No',
    appliedTo: '198 employees',
    appliedTone: 'green',
    btnTone: 'green',
    usage: 92,
  },
]

const rows = [
  {
    title: 'Annual Leave',
    subtitle: 'Vacation accrual',
    rate: '2.08 days',
    frequency: 'Monthly',
    carry: '5 days',
    employees: '247',
    icon: FiCalendar,
  },
  {
    title: 'Sick Leave',
    subtitle: 'Medical accrual',
    rate: '1.0 day',
    frequency: 'Monthly',
    carry: '3 days',
    employees: '247',
    icon: FiHeart,
  },
  {
    title: 'Personal Time',
    subtitle: 'Personal days',
    rate: '2.0 days',
    frequency: 'Quarterly',
    carry: '2 days',
    employees: '198',
    icon: FiThumbsUp,
  },
]

function LeaveAccrualRules() {
  const navigate = useNavigate()

  return (
    <div className="lar-layout">
      <HRMSidebar />

      <main className="lar-main">
        <header className="lar-header">
          <div>
            <h1>Accrual Rules Management</h1>
            <div className="lar-breadcrumb">
              <span className="link">Home</span>
              <span>&gt;</span>
              <span className="link">HRM</span>
              <span>&gt;</span>
              <span className="link">Leave Management</span>
              <span>&gt;</span>
              <span>Accrual Rules</span>
            </div>
          </div>

          <div className="lar-actions">
            <button type="button" className="lar-bell" aria-label="Notifications">
              <FiBell size={15} />
              <span>3</span>
            </button>
            <button type="button" className="lar-add-btn">
              <FiPlus size={14} />
              Add Accrual Rule
            </button>
          </div>
        </header>

        <section className="lar-tabs-row">
          <div className="lar-tabs">
            <button type="button">General Policies</button>
            <button type="button">Leave Types</button>
            <button type="button" className="active">Accrual Rules</button>
            <button type="button" onClick={() => navigate('/leave/accrual-rules')}>Approval Rules</button>
            <button type="button">Calendar Settings</button>
          </div>
          <div className="lar-status">
            <span>6 Active Rules</span>
            <span className="dot" />
            <span className="ok">All Configured</span>
          </div>
        </section>

        <section className="lar-cards-grid">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article key={card.title} className="lar-card">
                <div className="lar-card-top">
                  <span className={`lar-icon ${card.tone}`}>
                    <Icon size={14} />
                  </span>
                  <div className="lar-card-top-right">
                    <span className="lar-active">Active</span>
                    <button type="button" aria-label="More">
                      <FiMoreVertical size={14} />
                    </button>
                  </div>
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <div className="lar-details">
                  <div><span>Accrual Rate</span><strong>{card.rate}</strong></div>
                  <div><span>Max Carry Over</span><strong>{card.maxCarry}</strong></div>
                  <div><span>Waiting Period</span><strong>{card.waiting}</strong></div>
                  <div><span>Pro-rated</span><strong className={card.prorated === 'No' ? 'no' : 'yes'}>{card.prorated}</strong></div>
                </div>

                <div className="lar-divider" />

                <div className="lar-applied-row">
                  <span>Applied to</span>
                  <strong className={card.appliedTone}>{card.appliedTo}</strong>
                </div>

                <div className="lar-footer">
                  <button type="button" className={`lar-edit-btn ${card.btnTone}`}>Edit Rule</button>
                  <button type="button" className="lar-copy-btn" aria-label="Action">
                    <FiCopy size={12} />
                  </button>
                </div>
              </article>
            )
          })}
        </section>

        <section className="lar-bottom-grid">
          <article className="lar-table-card">
            <div className="lar-table-head">
              <h2>Accrual Rules Configuration</h2>
              <div className="lar-table-controls">
                <div className="lar-search-box">
                  <FiSearch size={13} />
                  <input type="text" defaultValue="" placeholder="Search accrual rules..." />
                </div>
                <button type="button" className="lar-filter-btn" aria-label="Filter">
                  <FiFilter size={13} />
                </button>
              </div>
            </div>

            <div className="lar-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Rule Name</th>
                    <th>Accrual Rate</th>
                    <th>Frequency</th>
                    <th>Max Carry</th>
                    <th>Employees</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    const RowIcon = row.icon
                    return (
                      <tr key={row.title}>
                        <td>
                          <div className="lar-rule-cell">
                            <span className={`lar-mini-icon ${row.title === 'Sick Leave' ? 'red' : row.title === 'Personal Time' ? 'green' : 'blue'}`}>
                              <RowIcon size={12} />
                            </span>
                            <div>
                              <div className="name">{row.title}</div>
                              <div className="sub">{row.subtitle}</div>
                            </div>
                          </div>
                        </td>
                        <td>{row.rate}</td>
                        <td>{row.frequency}</td>
                        <td>{row.carry}</td>
                        <td>{row.employees}</td>
                        <td><span className="lar-status-pill">Active</span></td>
                        <td>
                          <div className="lar-row-actions">
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

          <aside className="lar-right-panel">
            <article className="lar-insights-card">
              <h3>Accrual Insights</h3>
              <div className="lar-insight blue"><span>Total Active Rules</span><strong>6</strong></div>
              <div className="lar-insight green"><span>Employees Covered</span><strong>247</strong></div>
              <div className="lar-insight orange"><span>Avg Accrual Rate</span><strong>1.69</strong><small>days per month</small></div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default LeaveAccrualRules
