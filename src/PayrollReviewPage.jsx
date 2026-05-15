import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiAlertCircle,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEye,
  FiFilter,
  FiUsers,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './payroll-review-page.css'

const checklistItems = [
  { label: 'Employee Data', detail: '247 employees verified', tone: 'success' },
  { label: 'Attendance Records', detail: 'All records validated', tone: 'success' },
  { label: 'Overtime Calculations', detail: '45 employees with OT', tone: 'success' },
  { label: 'Tax Calculations', detail: '3 discrepancies found', tone: 'warning' },
  { label: 'Benefits Deductions', detail: 'All deductions applied', tone: 'success' },
  { label: 'Compliance Check', detail: 'All regulations met', tone: 'success' },
]

const employeeRows = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    avatar: 'SJ',
    gross: '$10,500',
    grossDetail: '+$1,200 OT',
    deductions: '$2,000',
    net: '$8,500',
    status: 'Verified',
  },
  {
    name: 'James Anderson',
    role: 'Product Manager',
    avatar: 'JA',
    gross: '$11,800',
    grossDetail: 'Base salary',
    deductions: '$2,600',
    net: '$9,200',
    status: 'Review',
  },
  {
    name: 'David Martinez',
    role: 'Sales Lead',
    avatar: 'DM',
    gross: '$9,500',
    grossDetail: '+$500 bonus',
    deductions: '$1,700',
    net: '$7,800',
    status: 'Verified',
  },
  {
    name: 'Emily Wilson',
    role: 'UX Designer',
    avatar: 'EW',
    gross: '$8,500',
    grossDetail: 'Base salary',
    deductions: '$1,600',
    net: '$6,900',
    status: 'Verified',
  },
  {
    name: 'Robert Chen',
    role: 'Data Analyst',
    avatar: 'RC',
    gross: '$7,800',
    grossDetail: '+$300 OT',
    deductions: '$1,400',
    net: '$6,400',
    status: 'Verified',
  },
]

function PayrollReviewPage({ onSwitchModule }) {
  const navigate = useNavigate()
  const draftId = sessionStorage.getItem('payrollDraftId') || 'DRF-2024-12-002'
  const generatedDate = sessionStorage.getItem('payrollDraftGeneratedDate') || 'Dec 29, 2024'

  useEffect(() => {
    const hasGeneratedDraft = sessionStorage.getItem('payrollDraftGenerated') === 'true'

    if (!hasGeneratedDraft) {
      window.alert('Generate a draft payroll before opening review.')
      navigate('/payroll/generate-draft', { replace: true })
    }
  }, [navigate])

  return (
    <div className="pr-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />
      <main className="pr-main">
        <header className="pr-header">
          <div>
            <h1>Review Payroll</h1>
            <div className="pr-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Review</span>
            </div>
          </div>

          <button type="button" className="pr-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        <section className="pr-hero">
          <div className="pr-hero-left">
            <span className="pr-hero-icon"><FiCheckCircle size={16} /></span>
            <div>
              <h2>Review Draft Payroll</h2>
              <p>Review and approve payroll calculations for December 2024</p>
              <div className="pr-hero-meta">
                <span>Draft ID: {draftId}</span>
                <span>Generated: {generatedDate}</span>
              </div>
            </div>
          </div>

          <div className="pr-hero-actions">
            <button type="button" className="approve">Approve Payroll</button>
            <button type="button" className="reject">Reject Draft</button>
          </div>
        </section>

        <section className="pr-stats-grid">
          <article className="pr-stat-card">
            <div className="top">
              <span className="icon blue"><FiUsers size={14} /></span>
              <span className="badge green">Processed</span>
            </div>
            <strong>247</strong>
            <p>Total Employees</p>
          </article>
          <article className="pr-stat-card">
            <div className="top">
              <span className="icon green">$</span>
              <span className="badge blue">Calculated</span>
            </div>
            <strong>$1.24M</strong>
            <p>Gross Pay Total</p>
          </article>
          <article className="pr-stat-card">
            <div className="top">
              <span className="icon orange"><FiAlertCircle size={14} /></span>
              <span className="badge orange">Deducted</span>
            </div>
            <strong>$298K</strong>
            <p>Total Deductions</p>
          </article>
          <article className="pr-stat-card">
            <div className="top">
              <span className="icon purple">₹</span>
              <span className="badge purple">Final</span>
            </div>
            <strong>$942K</strong>
            <p>Net Payroll</p>
          </article>
        </section>

        <section className="pr-content-grid">
          <article className="pr-card pr-checklist-card">
            <h3>Review Checklist</h3>
            <p>Validation steps completed</p>
            <div className="pr-checklist-items">
              {checklistItems.map((item) => (
                <div key={item.label} className="pr-checklist-item">
                  <span className={`marker ${item.tone}`}>
                    {item.tone === 'success' ? <FiCheck size={11} /> : <FiAlertCircle size={11} />}
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="pr-card pr-table-card">
            <div className="pr-table-head">
              <div>
                <h3>Employee Payroll Details</h3>
                <p>Detailed breakdown by employee</p>
              </div>
              <div className="controls">
                <button type="button"><FiDownload size={12} /> Export</button>
                <button type="button"><FiFilter size={12} /> Filter</button>
              </div>
            </div>

            <div className="pr-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Gross Pay</th>
                    <th>Deductions</th>
                    <th>Net Pay</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeRows.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <div className="pr-employee-cell">
                          <span className="avatar">{row.avatar}</span>
                          <div>
                            <strong>{row.name}</strong>
                            <span>{row.role}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <strong>{row.gross}</strong>
                        <span className="sub">{row.grossDetail}</span>
                      </td>
                      <td>{row.deductions}</td>
                      <td><strong>{row.net}</strong></td>
                      <td>
                        <span className={`pr-status ${row.status.toLowerCase()}`}>{row.status}</span>
                      </td>
                      <td>
                        <button type="button" className="pr-view-btn" aria-label={`View ${row.name}`}>
                          <FiEye size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pr-table-footer">
              <span>Showing 5 of 247 employees</span>
              <div className="pr-pagination">
                <button type="button" aria-label="Previous"><FiChevronLeft size={12} /></button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button" aria-label="Next"><FiChevronRight size={12} /></button>
              </div>
            </div>
          </article>
        </section>

        <section className="pr-card pr-final-actions">
          <h3>Final Approval Actions</h3>
          <div className="pr-final-actions-row">
            <button
              type="button"
              className="approve-process"
              onClick={() => {
                sessionStorage.setItem('payrollApproved', 'true')
                sessionStorage.setItem('payrollApprovedBy', 'Michael Chen')
                sessionStorage.setItem('payrollApprovedDate', 'Dec 30, 2024 10:45 AM')
                navigate('/payroll/approved')
              }}
            >
              Approve &amp; Process Payroll
            </button>
            <button type="button" className="request-mods">Request Modifications</button>
            <button type="button" className="reject-draft" onClick={() => navigate('/payroll/generate-draft')}>
              Reject Draft
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PayrollReviewPage
