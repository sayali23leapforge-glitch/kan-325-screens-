import { useNavigate } from 'react-router-dom'
import { FiAlertTriangle, FiBell, FiCheck, FiClock, FiDollarSign, FiFlag } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './job-requisition-approval-page.css'

function JobRequisitionApprovalPage() {
  const navigate = useNavigate()

  return (
    <div className="jra-layout">
      <HRMSidebar />

      <main className="jra-main">
        <header className="jra-header">
          <div className="jra-header-left">
            <h1 className="jra-title">Job Requisition Approval</h1>
            <nav className="jra-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Approval</span>
            </nav>
          </div>

          <div className="jra-header-right">
            <button className="jra-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={14} />
              <span className="jra-bell-badge">2</span>
            </button>
            <div className="jra-status-pill">
              <span className="jra-status-dot" />
              Pending Review
            </div>
          </div>
        </header>

        <section className="jra-content-wrap">
          <article className="jra-alert-box">
            <div className="jra-alert-title-row">
              <FiAlertTriangle size={13} />
              <h2>Approval Required</h2>
            </div>
            <p>This job requisition has been submitted for approval and requires your review.</p>
            <div className="jra-alert-meta">
              <span>
                <FiCheck size={11} /> Submitted by: Michael Chen
              </span>
              <span>
                <FiClock size={11} /> Date: January 15, 2024
              </span>
              <span>
                <FiClock size={11} /> ID: REQ-2024-0081
              </span>
            </div>
          </article>

          <article className="jra-card">
            <h3 className="jra-card-title">Approval Summary</h3>
            <div className="jra-summary-grid">
              <div className="jra-summary-item jra-summary-blue">
                <div className="jra-summary-head">
                  <FiCheck size={12} />
                  <span>Position</span>
                </div>
                <strong>Senior Frontend Developer</strong>
                <small>Engineering Department</small>
              </div>

              <div className="jra-summary-item jra-summary-green">
                <div className="jra-summary-head">
                  <FiDollarSign size={12} />
                  <span>Salary Range</span>
                </div>
                <strong>$85,000 - $115,000</strong>
                <small>Annual CTC</small>
              </div>

              <div className="jra-summary-item jra-summary-purple">
                <div className="jra-summary-head">
                  <FiFlag size={12} />
                  <span>Priority</span>
                </div>
                <strong>High Priority</strong>
                <small>Immediate hiring required</small>
              </div>
            </div>
          </article>

          <article className="jra-card">
            <h3 className="jra-card-title">Job Details</h3>

            <div className="jra-details-grid">
              <div className="jra-detail-col">
                <div className="jra-detail-row"><span>Job Title</span><strong>Senior Frontend Developer</strong></div>
                <div className="jra-detail-row"><span>Employment Type</span><strong>Full-time</strong></div>
                <div className="jra-detail-row"><span>Experience Level</span><strong>Senior Level (5-8 years)</strong></div>
              </div>

              <div className="jra-detail-col">
                <div className="jra-detail-row"><span>Department</span><strong>Engineering</strong></div>
                <div className="jra-detail-row"><span>Location</span><strong>Bangalore</strong></div>
                <div className="jra-detail-row"><span>Reporting Manager</span><strong>John Smith - Engineering Director</strong></div>
              </div>
            </div>

            <div className="jra-text-block">
              <h4>Role Summary</h4>
              <p>
                We are seeking a highly skilled Senior Frontend Developer to join our engineering team. The ideal candidate
                will have extensive experience with modern JavaScript frameworks and a passion for creating exceptional user experiences.
              </p>
            </div>

            <div className="jra-text-block">
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Lead frontend development initiatives and mentor junior developers</li>
                <li>Architect and implement scalable React applications</li>
                <li>Collaborate with design and backend teams to deliver seamless user experiences</li>
                <li>Optimize application performance and ensure cross-browser compatibility</li>
                <li>Participate in code reviews and maintain high coding standards</li>
              </ul>
            </div>
          </article>

          <article className="jra-card">
            <h3 className="jra-card-title">Budget Impact Analysis</h3>
            <div className="jra-budget-grid">
              <div className="jra-budget-left">
                <div className="jra-budget-row"><span>Base Salary (Annual)</span><strong>$100,000</strong></div>
                <div className="jra-budget-row"><span>Benefits &amp; Insurance</span><strong>$18,000</strong></div>
                <div className="jra-budget-row"><span>Equipment &amp; Setup</span><strong>$3,500</strong></div>
                <div className="jra-budget-row"><span>Training/Development</span><strong>$2,000</strong></div>
                <div className="jra-budget-total"><span>Total Annual Cost</span><strong>$123,500</strong></div>
              </div>

              <div className="jra-budget-right">
                <h4>Budget Allocation</h4>
                <ul>
                  <li>Engineering Department Budget</li>
                  <li>Available: $235,000</li>
                  <li>After hire: $111,500</li>
                  <li>Budget approved for this position</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="jra-card">
            <h3 className="jra-card-title">Approval Comments</h3>
            <label className="jra-comment-field" htmlFor="approval-comments">
              <span>Comments (Optional)</span>
              <textarea id="approval-comments" rows={4} placeholder="Add any comments or feedback about this requisition..." />
            </label>

            <div className="jra-guidelines">
              <h4>Approval Guidelines:</h4>
              <ul>
                <li>Verify this position aligns with department headcount plan</li>
                <li>Review compensation and budget impact details</li>
                <li>Ensure role urgency with company hiring priorities</li>
                <li>Consider current market conditions and pipeline</li>
              </ul>
            </div>
          </article>

          <article className="jra-card jra-last-card">
            <h3 className="jra-card-title">Approval Decision</h3>
            <div className="jra-actions-row">
              <button type="button" className="jra-btn jra-btn-reject">Reject Requisition</button>
              <button type="button" className="jra-btn jra-btn-changes">Request Changes</button>
              <button
                type="button"
                className="jra-btn jra-btn-approve"
                onClick={() => navigate('/hrm/recruitment')}
              >
                Approve Requisition
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default JobRequisitionApprovalPage
