import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiDownload,
  FiFileText,
  FiInfo,
  FiLoader,
  FiSend,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './payroll-approved-page.css'

const timelineSteps = [
  { title: 'Payroll Generated', subtitle: 'Draft created successfully', state: 'completed' },
  { title: 'Review Completed', subtitle: 'All checks passed', state: 'completed' },
  { title: 'Manager Approved', subtitle: 'Final approval granted', state: 'completed' },
  { title: 'Finance Processing', subtitle: 'Currently processing', state: 'active' },
  { title: 'Bank Transfer', subtitle: 'Pending', state: 'pending' },
]

const financialRows = [
  { label: 'Gross Payroll', value: '$1,240,000' },
  { label: 'Federal Tax Withholding', value: '-$186,000' },
  { label: 'State Tax Withholding', value: '-$62,000' },
  { label: 'Social Security', value: '-$84,400' },
  { label: 'Medicare', value: '-$19,600' },
  { label: 'Benefits & 401K', value: '-$27,000' },
]

function PayrollApprovedPage({ onSwitchModule }) {
  const navigate = useNavigate()

  const approvedBy = sessionStorage.getItem('payrollApprovedBy') || 'Michael Chen'
  const approvedDate = sessionStorage.getItem('payrollApprovedDate') || 'Dec 30, 2024 10:45 AM'

  useEffect(() => {
    const hasApproved = sessionStorage.getItem('payrollApproved') === 'true'

    if (!hasApproved) {
      window.alert('Approve payroll from review screen before opening manager approval.')
      navigate('/payroll/review', { replace: true })
    }
  }, [navigate])

  return (
    <div className="pa-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="pa-main">
        <header className="pa-header">
          <div>
            <h1>Manager Approval</h1>
            <div className="pa-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Manager Approval</span>
            </div>
          </div>
          <button type="button" className="pa-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        <section className="pa-success-banner">
          <div className="pa-success-left">
            <span className="pa-success-icon"><FiCheckCircle size={16} /></span>
            <div>
              <h2>Payroll Approved Successfully</h2>
              <p>December 2024 payroll has been approved and sent for final processing</p>
              <div className="pa-success-meta">
                <span>Approved By: {approvedBy}</span>
                <span>Date: {approvedDate}</span>
              </div>
            </div>
          </div>

          <div className="pa-banner-actions">
            <button type="button" className="pa-download-btn">
              <FiDownload size={13} />
              Download Report
            </button>
            <button
              type="button"
              className="pa-proceed-btn"
              onClick={() => navigate('/payroll/finance-approval')}
            >
              Proceed to Finance
              <FiArrowRight size={13} />
            </button>
          </div>
        </section>

        <section className="pa-stats-grid">
          <article className="pa-stat-card">
            <div className="top"><span className="icon green"><FiUsers size={14} /></span><span className="badge green">Processed</span></div>
            <strong>247</strong>
            <p>Employees Processed</p>
          </article>
          <article className="pa-stat-card">
            <div className="top"><span className="icon blue"><FiDollarSign size={14} /></span><span className="badge blue">Paid</span></div>
            <strong>$942K</strong>
            <p>Total Disbursement</p>
          </article>
          <article className="pa-stat-card">
            <div className="top"><span className="icon purple"><FiCalendar size={14} /></span><span className="badge purple">Scheduled</span></div>
            <strong>Jan 2</strong>
            <p>Payment Date</p>
          </article>
          <article className="pa-stat-card">
            <div className="top"><span className="icon orange"><FiClock size={14} /></span><span className="badge orange">Processing</span></div>
            <strong>2 Days</strong>
            <p>Until Disbursement</p>
          </article>
        </section>

        <section className="pa-content-grid">
          <article className="pa-card pa-timeline-card">
            <h3>Approval Timeline</h3>
            <p>Process tracking</p>
            <div className="pa-timeline-list">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className={`pa-timeline-item ${step.state}`}>
                  <span className="marker">
                    {step.state === 'completed' ? <FiCheck size={10} /> : step.state === 'active' ? <FiLoader size={10} /> : <FiClock size={10} />}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.subtitle}</span>
                  </div>
                  {index !== timelineSteps.length - 1 ? <span className="connector" /> : null}
                </div>
              ))}
            </div>
          </article>

          <article className="pa-card pa-details-card">
            <h3>Approval Details</h3>
            <p>Complete breakdown of approved payroll</p>

            <div className="pa-details-grid">
              <div><span>Approval Reference</span><strong>APR-2024-12-002</strong></div>
              <div><span>Payroll Period</span><strong>December 2024</strong></div>
              <div className="approver"><span>Approved By</span><strong><i>M</i> Michael Chen</strong></div>
              <div><span>Payment Method</span><strong>Direct Bank Transfer</strong></div>
              <div><span>Date &amp; Time</span><strong>Dec 30, 2024 - 10:45 AM</strong></div>
              <div><span>Scheduled Payment</span><strong className="scheduled">January 2, 2025</strong></div>
            </div>

            <div className="pa-breakdown">
              <h4>Financial Breakdown</h4>
              {financialRows.map((row) => (
                <div key={row.label} className="line-item">
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
              <div className="line-item total">
                <span>Net Payroll Amount</span>
                <strong>$942,000</strong>
              </div>
            </div>

            <div className="pa-note-box">
              <strong><FiInfo size={12} /> Manager Comment</strong>
              <p>
                All payroll calculations verified and approved. Overtime hours for QA reviewed and validated.
                Ready for final processing and disbursement.
              </p>
            </div>
          </article>
        </section>

        <section className="pa-card pa-next-steps">
          <h3>Next Steps</h3>
          <div className="pa-next-grid">
            <article>
              <span className="next-icon blue"><FiFileText size={13} /></span>
              <h4>View Payroll Report</h4>
              <p>Complete detailed payroll report with all calculations</p>
              <button type="button" className="blue">Download Report</button>
            </article>
            <article>
              <span className="next-icon green"><FiSend size={13} /></span>
              <h4>Notify Employees</h4>
              <p>Send payment confirmation to all employees</p>
              <button type="button" className="green">Send Notifications</button>
            </article>
            <article>
              <span className="next-icon purple"><FiTrendingUp size={13} /></span>
              <h4>View Analytics</h4>
              <p>Review payroll trends and insights</p>
              <button type="button" className="purple" onClick={() => navigate('/payroll/dashboard')}>View Dashboard</button>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PayrollApprovedPage
