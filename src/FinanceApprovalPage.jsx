import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLoader,
  FiMessageSquare,
  FiUpload,
  FiUsers,
  FiX,
  FiAlertTriangle,
  FiEdit2,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './finance-approval-page.css'

const checklistItems = [
  { label: 'Budget Allocation', detail: 'Sufficient funds available', state: 'completed' },
  { label: 'Tax Calculations', detail: 'All deductions verified', state: 'completed' },
  { label: 'Compliance Check', detail: 'Regulatory requirements met', state: 'completed' },
  { label: 'Bank Account Validation', detail: 'All accounts verified', state: 'completed' },
  { label: 'Manager Approval', detail: 'Approved by Michael Chen', state: 'completed' },
  { label: 'Finance Review', detail: 'Pending final approval', state: 'active' },
  { label: 'Fund Transfer', label2: 'Waiting approval', state: 'pending' },
]

const financialRows = [
  { label: 'Gross Payroll', value: '$1,340,000', negative: false },
  { label: 'Federal Tax Withholding', value: '-$186,500', negative: true },
  { label: 'State Tax Withholding', value: '-$62,000', negative: true },
  { label: 'Social Security', value: '-$24,800', negative: true },
  { label: 'Medicare', value: '-$19,500', negative: true },
  { label: 'Benefits & 401K', value: '-$7,200', negative: true },
]

function FinanceApprovalPage({ onSwitchModule }) {
  const navigate = useNavigate()
  const [comment, setComment] = useState('')

  useEffect(() => {
    const hasApproved = sessionStorage.getItem('payrollApproved') === 'true'
    if (!hasApproved) {
      window.alert('Complete manager approval before accessing finance approval.')
      navigate('/payroll/approved', { replace: true })
    }
  }, [navigate])

  return (
    <div className="fa-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="fa-main">
        {/* Header */}
        <header className="fa-header">
          <div>
            <h1>Finance Approval</h1>
            <div className="fa-breadcrumb">
              <span>Home</span><span>&gt;</span>
              <span>Payroll</span><span>&gt;</span>
              <span>Finance Approval</span>
            </div>
          </div>
          <button type="button" className="fa-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        {/* Blue awaiting banner */}
        <section className="fa-hero">
          <div className="fa-hero-left">
            <span className="fa-hero-icon"><FiFileText size={16} /></span>
            <div>
              <h2>Payroll Awaiting Finance Approval</h2>
              <p>December 2024 payroll has been approved by management and requires final finance review</p>
              <div className="fa-hero-meta">
                <span>Reference: APR-2024-12-002</span>
                <span>Submitted: Dec 30, 2024 10:45 AM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="fa-stats-grid">
          <article className="fa-stat-card">
            <div className="top"><span className="icon green"><FiUsers size={13} /></span><span className="badge green">Approved</span></div>
            <strong>247</strong><p>Employees</p>
          </article>
          <article className="fa-stat-card">
            <div className="top"><span className="icon blue">$</span><span className="badge blue">Net Pay</span></div>
            <strong>$942K</strong><p>Total Disbursement</p>
          </article>
          <article className="fa-stat-card">
            <div className="top"><span className="icon purple">$</span><span className="badge purple">Budget</span></div>
            <strong>$1.2M</strong><p>Gross Payroll</p>
          </article>
          <article className="fa-stat-card">
            <div className="top"><span className="icon orange"><FiClock size={13} /></span><span className="badge orange">Scheduled</span></div>
            <strong>Jan 2</strong><p>Payment Date</p>
          </article>
        </section>

        {/* Main two-column */}
        <section className="fa-content-grid">
          {/* Left: Finance Checklist */}
          <article className="fa-card fa-checklist-card">
            <h3>Finance Checklist</h3>
            <p>Review requirements</p>
            <div className="fa-checklist-items">
              {checklistItems.map((item) => (
                <div key={item.label} className={`fa-checklist-item ${item.state}`}>
                  <span className="marker">
                    {item.state === 'completed'
                      ? <FiCheck size={10} />
                      : item.state === 'active'
                        ? <FiLoader size={10} />
                        : <FiClock size={10} />}
                  </span>
                  <div className="connector-wrap">
                    <strong>{item.label}</strong>
                    <span>{item.detail || item.label2}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Right: Financial Review + Breakdown + Budget + Comment */}
          <div className="fa-right-col">
            <article className="fa-card fa-review-card">
              <h3>Financial Review</h3>
              <p>Complete breakdown and analysis</p>

              <div className="fa-review-grid">
                <div><span>Approval Reference</span><strong>APR-2024-12-002</strong></div>
                <div><span>Payroll Period</span><strong>December 2024</strong></div>
                <div className="approver"><span>Approved By</span>
                  <strong><i>M</i> Michael Chen<span className="role">HR Manager</span></strong>
                </div>
                <div><span>Payment Method</span><strong>Direct Bank Transfer</strong></div>
                <div><span>Submitted On</span><strong>Dec 30, 2024 - 10:45 AM</strong></div>
                <div><span>Scheduled Payment</span><strong className="green">January 2, 2025</strong></div>
              </div>

              <div className="fa-breakdown">
                <h4>Financial Breakdown</h4>
                {financialRows.map((row) => (
                  <div key={row.label} className="line-item">
                    <span>{row.label}</span>
                    <strong className={row.negative ? 'neg' : ''}>{row.value}</strong>
                  </div>
                ))}
                <div className="line-item total">
                  <span>Net Payroll Amount</span>
                  <strong>$942,000</strong>
                </div>
              </div>

              <div className="fa-budget-analysis">
                <h4>Budget Analysis</h4>
                <div className="budget-row">
                  <div>
                    <span>Monthly Budget</span>
                    <strong>$1,300,000</strong>
                    <em>Within budget</em>
                  </div>
                  <div>
                    <span>Available Balance</span>
                    <strong>$358,000</strong>
                    <em>After disbursement</em>
                  </div>
                </div>
              </div>

              <div className="fa-manager-comment">
                <div className="avatar-row">
                  <span className="avatar">M</span>
                  <div>
                    <strong>Michael Chen — HR Manager</strong>
                    <p>
                      All payroll calculations verified and approved. Overtime hours for QA reviewed and
                      validated. Ready for final processing and disbursement.
                    </p>
                    <em>Dec 30, 2024 · 10:45 AM</em>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Finance Approval Actions */}
        <section className="fa-card fa-actions-card">
          <h3>Finance Approval Actions</h3>

          <div className="fa-warning-box">
            <FiAlertTriangle size={13} />
            <p><strong>Review Required</strong> — Please review all financial details carefully before approving. This action will initiate the fund transfer process and cannot be undone.</p>
          </div>

          <label className="fa-comment-label">
            Finance Review Comments (Optional)
            <textarea
              className="fa-comment-input"
              placeholder="Add any notes or comments regarding this payroll approval..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>

          <div className="fa-action-buttons">
            <button
              type="button"
              className="approve-btn"
              onClick={() => {
                sessionStorage.setItem('payrollFinanceApproved', 'true')
                alert('Payroll has been approved and fund transfer initiated.')
              }}
            >
              <FiCheckCircle size={14} />
              Approve &amp; Process Payment
            </button>
            <button
              type="button"
              className="reject-btn"
              onClick={() => navigate('/payroll/approved')}
            >
              <FiX size={14} />
              Reject Payroll
            </button>
            <button type="button" className="changes-btn">
              <FiEdit2 size={13} />
              Request Changes
            </button>
          </div>
        </section>

        {/* Supporting Documents */}
        <section className="fa-card fa-docs-card">
          <h3>Supporting Documents</h3>
          <div className="fa-doc-row">
            <div className="fa-doc-item">
              <span className="doc-icon"><FiFileText size={14} /></span>
              <div>
                <strong>Payroll Report</strong>
                <em>2.3 Mb · PDF</em>
              </div>
            </div>
            <button type="button" className="fa-upload-btn" aria-label="Upload">
              <FiUpload size={14} />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FinanceApprovalPage
