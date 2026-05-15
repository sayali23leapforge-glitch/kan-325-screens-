import React from 'react'
import {
  FiActivity,
  FiAlertTriangle,
  FiArrowRight,
  FiBell,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiFileText,
  FiLock,
  FiShield,
  FiUser,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import SupportSidebar from './components/support/SupportSidebar'
import './pages/support/all-tickets.css'
import './audit-trail.css'

function AuditTrailPage() {
  const navigate = useNavigate()

  return (
    <div className="support-tickets-layout">
      <SupportSidebar />
      <main className="audit-fixed-main">
        <div className="audit-fixed-wrapper">
          <header className="audit-header-fixed">
            <h1 className="audit-title-fixed">Audit Flow</h1>
            <p className="audit-subtitle-fixed">Track sensitive actions and security events</p>
            <div className="audit-header-actions-fixed">
              <button type="button" className="audit-notify-fixed" aria-label="Notifications">
                <FiBell size={18} />
                <span className="audit-notify-badge" />
              </button>
              <button type="button" className="audit-new-action-fixed" onClick={() => navigate('/audit-module')}>+ New Action</button>
            </div>
          </header>

          <section className="audit-stat-card stat-red">
            <div className="audit-stat-row"><span>Sensitive Actions</span><FiAlertTriangle size={18} /></div>
            <div className="audit-stat-value">42</div>
            <div className="audit-stat-foot">+8 today</div>
          </section>

          <section className="audit-stat-card stat-orange">
            <div className="audit-stat-row"><span>Pending Approval</span><FiClock size={18} /></div>
            <div className="audit-stat-value">12</div>
            <div className="audit-stat-foot">-3 today</div>
          </section>

          <section className="audit-stat-card stat-green">
            <div className="audit-stat-row"><span>Completed</span><FiCheckCircle size={18} /></div>
            <div className="audit-stat-value">187</div>
            <div className="audit-stat-foot">+24 today</div>
          </section>

          <section className="audit-stat-card stat-purple">
            <div className="audit-stat-row"><span>Compliance Score</span><FiShield size={18} /></div>
            <div className="audit-stat-value">98%</div>
            <div className="audit-stat-foot">+2% avg</div>
          </section>

          <section className="audit-process-shell">
            <h2 className="audit-process-title">Audit Flow Process</h2>
            <div className="audit-process-tags"><span>Real-time</span><span>Secured</span></div>

            <div className="audit-step step-1">
              <div className="audit-step-badge step-red">Step 1</div>
              <h3>Sensitive Action</h3>
              <p>User initiates action</p>
              <ul><li>User Deletion</li><li>Permission Change</li><li>Data Export</li></ul>
            </div>

            <div className="audit-step step-2">
              <div className="audit-step-badge step-orange">Step 2</div>
              <h3>Confirmation</h3>
              <p>Security verification</p>
              <ul><li>Identity Verified</li><li>2FA Required</li><li>Approval Needed</li></ul>
            </div>

            <div className="audit-step step-3">
              <div className="audit-step-badge step-blue">Step 3</div>
              <h3>Execute Action</h3>
              <p>Process & execute</p>
              <ul><li>Validation Complete</li><li>Action Processing</li><li>Notification Sent</li></ul>
            </div>

            <div className="audit-step step-4">
              <div className="audit-step-badge step-green">Step 4</div>
              <h3>Audit Entry</h3>
              <p>Record created</p>
              <ul><li>Timestamped</li><li>Digitally Signed</li><li>Archived Securely</li></ul>
            </div>

            <FiArrowRight className="arrow-1" size={20} color="#9CA3AF" />
            <FiArrowRight className="arrow-2" size={20} color="#9CA3AF" />
            <FiArrowRight className="arrow-3" size={20} color="#9CA3AF" />

            <div className="audit-cta-fixed">
              <FiActivity size={16} color="#8B5CF6" />
              <h3>View in Audit Module</h3>
              <p>Complete audit trail available for review</p>
              <button type="button">View Audit Log</button>
            </div>
          </section>

          <section className="audit-success-shell">
            <div className="audit-success-banner">
              <FiCheckCircle size={16} />
              <span>Audit Entry Created Successfully</span>
              <em>Completed</em>
            </div>

            <div className="audit-meta-card">
              <h4><FiFileText size={14} /> Entry Metadata</h4>
              <p><span>Action Type</span><strong>User Deletion</strong></p>
              <p><span>Performed By</span><strong>Admin User</strong></p>
              <p><span>Timestamp</span><strong>2026-05-15 10:42:20 UTC</strong></p>
              <p><span>Risk Level</span><strong className="tone-red">HIGH RISK</strong></p>
              <p><span>ID</span><strong>AUD-987456</strong></p>
            </div>

            <div className="audit-verify-card">
              <h4><FiLock size={14} /> Security Verification</h4>
              <p>Identity Verification</p>
              <p>Multi-factor Authentication</p>
              <p>Approval Status: Approved</p>
              <p>Execution Check: Passed</p>
              <p>Compliance Check: Compliant</p>
            </div>

            <div className="audit-action-details">
              <h4>Action Details</h4>
              <div className="audit-action-grid">
                <p><span>Affected Resource</span><strong>User Account (john.doe)</strong></p>
                <p><span>Reason</span><strong>Security Policy Violation</strong></p>
                <p><span>IP Address</span><strong>192.168.1.45</strong></p>
                <p><span>Session ID</span><strong>sess-8f5c9a4</strong></p>
              </div>
              <small>This action was completed after all verification checks. All logs retained for 365 days.</small>
            </div>

            <div className="audit-bottom-actions">
              <button type="button" className="btn-export"><FiDownload size={12} /> Export</button>
              <button type="button" className="btn-view-log">View Full Log</button>
            </div>

            <div className="audit-recent-shell">
              <h4>Recent Audit Entries</h4>
              <div className="recent-line"><span>User Deletion</span><em>2 minutes ago</em></div>
              <div className="recent-line"><span>Permission Change</span><em>15 minutes ago</em></div>
              <div className="recent-line"><span>Data Export</span><em>1 hour ago</em></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AuditTrailPage
