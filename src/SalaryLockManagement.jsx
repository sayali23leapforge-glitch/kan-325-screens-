import { useState } from 'react'
import {
  FiBell,
  FiCalendar,
  FiCheckCircle,
  FiDownload,
  FiFilter,
  FiLock,
  FiMoreVertical,
  FiUnlock,
  FiUser,
  FiUsers,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './salary-lock-management.css'

const initialRows = [
  {
    period: 'December 2024',
    status: 'Unlocked',
    lockedBy: '-',
    lockDate: '-',
    employees: '247',
  },
  {
    period: 'November 2024',
    status: 'Locked',
    lockedBy: 'Michael Chen',
    lockDate: 'Nov 30, 2024',
    employees: '244',
  },
  {
    period: 'October 2024',
    status: 'Locked',
    lockedBy: 'Sarah Johnson',
    lockDate: 'Oct 31, 2024',
    employees: '242',
  },
  {
    period: 'September 2024',
    status: 'Locked',
    lockedBy: 'Emily Davis',
    lockDate: 'Sep 30, 2024',
    employees: '239',
  },
]

function SalaryLockManagement({ onSwitchModule }) {
  const navigate = useNavigate()
  const [rows, setRows] = useState(initialRows)

  const handleLock = (period) => {
    setRows((prev) =>
      prev.map((row) =>
        row.period === period
          ? {
              ...row,
              status: 'Locked',
              lockedBy: 'Michael Chen',
              lockDate: 'Dec 01, 2024',
            }
          : row,
      ),
    )
    sessionStorage.setItem('payrollPeriodLocked', 'true')
    sessionStorage.setItem('payrollDraftGenerated', 'false')
    sessionStorage.setItem('payrollApproved', 'false')
    sessionStorage.removeItem('payrollDraftId')
    sessionStorage.removeItem('payrollDraftGeneratedDate')
    navigate('/payroll/generate-draft')
  }

  const handleUnlock = (period) => {
    setRows((prev) =>
      prev.map((row) =>
        row.period === period
          ? {
              ...row,
              status: 'Unlocked',
              lockedBy: '-',
              lockDate: '-',
            }
          : row,
      ),
    )

    if (period === 'December 2024') {
      sessionStorage.setItem('payrollPeriodLocked', 'false')
    }
  }

  return (
    <div className="slm-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="slm-main">
        <header className="slm-header">
          <div>
            <h1>Salary Lock</h1>
            <div className="slm-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Salary Lock</span>
            </div>
          </div>

          <button type="button" className="slm-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>3</span>
          </button>
        </header>

        <section className="slm-hero">
          <div className="slm-hero-left">
            <span className="slm-hero-icon"><FiLock size={18} /></span>
            <div>
              <h2>Salary Lock Management</h2>
              <p>Secure and control salary data access for payroll processing periods</p>
            </div>
          </div>

          <div className="slm-hero-actions">
            <button type="button" className="unlock-btn">Unlock Period</button>
            <button
              type="button"
              className="lock-btn"
              onClick={() => {
                sessionStorage.setItem('payrollPeriodLocked', 'true')
                sessionStorage.setItem('payrollDraftGenerated', 'false')
                sessionStorage.setItem('payrollApproved', 'false')
                sessionStorage.removeItem('payrollDraftId')
                sessionStorage.removeItem('payrollDraftGeneratedDate')
                navigate('/payroll/generate-draft')
              }}
            >
              Lock Month
            </button>
          </div>
        </section>

        <section className="slm-stats-grid">
          <article className="slm-stat-card">
            <div className="top"><span className="icon green"><FiLock size={14} /></span><span className="badge green">Active</span></div>
            <strong>3</strong>
            <span>Locked Periods</span>
          </article>
          <article className="slm-stat-card">
            <div className="top"><span className="icon orange"><FiUnlock size={14} /></span><span className="badge orange">Open</span></div>
            <strong>1</strong>
            <span>Unlocked Periods</span>
          </article>
          <article className="slm-stat-card">
            <div className="top"><span className="icon blue"><FiCalendar size={14} /></span><span className="badge blue">Current</span></div>
            <strong>Dec 2024</strong>
            <span>Active Period</span>
          </article>
          <article className="slm-stat-card">
            <div className="top"><span className="icon purple"><FiUsers size={14} /></span><span className="badge purple">Users</span></div>
            <strong>5</strong>
            <span>Authorized Users</span>
          </article>
        </section>

        <section className="slm-table-card">
          <div className="slm-table-head">
            <div>
              <h3>Salary Lock Periods</h3>
              <p>Manage lock status for payroll periods</p>
            </div>
            <div className="controls">
              <button type="button"><FiFilter size={12} />Filter</button>
              <button type="button"><FiDownload size={12} />Export</button>
            </div>
          </div>

          <div className="slm-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Lock Status</th>
                  <th>Locked By</th>
                  <th>Lock Date</th>
                  <th>Employees</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.period}>
                    <td>{row.period}</td>
                    <td>
                      <span className={`status ${row.status === 'Locked' ? 'locked' : 'unlocked'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      {row.status === 'Locked' ? (
                        <span className="user-cell"><span className="avatar">M</span>{row.lockedBy}</span>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>{row.lockDate}</td>
                    <td>{row.employees}</td>
                    <td>
                      {row.status === 'Locked' ? (
                        <button type="button" className="action unlock" onClick={() => handleUnlock(row.period)}>
                          Unlock
                        </button>
                      ) : (
                        <button type="button" className="action lock" onClick={() => handleLock(row.period)}>
                          Lock
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="slm-footer-grid">
            <article className="mini-card">
              <h4>Recent Lock Activity</h4>
              <p>November 2024 Locked</p>
              <p>October 2024 Locked</p>
              <p>September 2024 Locked</p>
            </article>
            <article className="mini-card">
              <h4>Authorized Users</h4>
              <p><FiUser size={12} /> Michael Chen</p>
              <p><FiUser size={12} /> Sarah Johnson</p>
              <p><FiUser size={12} /> Emily Davis</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SalaryLockManagement
