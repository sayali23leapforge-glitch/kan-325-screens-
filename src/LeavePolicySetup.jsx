import {
  FiBell,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiCopy,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFileText,
  FiPlus,
  FiTrash2,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './leave-policy-setup.css'

const leaveTypes = [
  {
    name: 'Annual Leave',
    tagClass: 'annual',
    allocation: '25 days',
    consecutive: '15 days',
    approval: 'Yes',
  },
  {
    name: 'Sick Leave',
    tagClass: 'sick',
    allocation: '12 days',
    consecutive: '7 days',
    approval: 'No',
  },
  {
    name: 'Maternity',
    tagClass: 'maternity',
    allocation: '90 days',
    consecutive: '90 days',
    approval: 'Yes',
  },
  {
    name: 'Casual Leave',
    tagClass: 'casual',
    allocation: '8 days',
    consecutive: '3 days',
    approval: 'Yes',
  },
]

function LeavePolicySetup() {
  const navigate = useNavigate()

  return (
    <div className="lps-layout">
      <HRMSidebar />

      <main className="lps-main">
        <header className="lps-header">
          <div>
            <h1>Leave Policy Setup</h1>
            <div className="lps-breadcrumb">
              <span className="link">Home</span>
              <span>&gt;</span>
              <span className="link">HRM</span>
              <span>&gt;</span>
              <span className="link">Leave Management</span>
              <span>&gt;</span>
              <span>Policy Setup</span>
            </div>
          </div>

          <div className="lps-header-actions">
            <button type="button" className="lps-bell" aria-label="Notifications">
              <FiBell size={15} />
              <span>3</span>
            </button>
            <button type="button" className="lps-save-btn">
              <FiFileText size={13} />
              Save Changes
            </button>
          </div>
        </header>

        <section className="lps-tabs">
          <button type="button" className="active">General Policies</button>
          <button type="button" onClick={() => navigate('/leave/types')}>Leave Types</button>
          <button type="button" onClick={() => navigate('/leave/accrual-rules')}>Approval Rules</button>
          <button type="button">Calendar Settings</button>
        </section>

        <section className="lps-body-grid">
          <div className="lps-left-column">
            <article className="lps-card">
              <div className="lps-card-head">
                <div className="lps-card-title-row">
                  <span className="lps-card-icon"><FiSettingsDot /></span>
                  <div>
                    <h2>General Leave Settings</h2>
                    <p>Configure company-wide leave policies</p>
                  </div>
                </div>
                <div className="lps-card-meta">
                  <FiClock size={12} />
                  Last updated: 2 hours ago
                </div>
              </div>

              <div className="lps-form-grid">
                <label className="lps-field">
                  <span>Leave Year Start Date</span>
                  <div className="lps-input-icon">
                    <input type="text" defaultValue="01-01-2024" />
                    <FiCalendar size={14} />
                  </div>
                </label>

                <label className="lps-field">
                  <span>Working Days Per Week</span>
                  <div className="lps-input-icon">
                    <input type="text" defaultValue="5 Days (Mon-Fri)" />
                    <FiChevronDown size={14} />
                  </div>
                </label>

                <label className="lps-field">
                  <span>Maximum Carry Forward Days</span>
                  <input type="text" defaultValue="10" />
                </label>

                <label className="lps-field">
                  <span>Minimum Notice Period (Days)</span>
                  <input type="text" defaultValue="3" />
                </label>
              </div>

              <div className="lps-weekend-block">
                <span>Weekend Days</span>
                <div className="lps-weekend-row">
                  <label><input type="checkbox" />Sun</label>
                  <label><input type="checkbox" />Mon</label>
                  <label><input type="checkbox" />Tue</label>
                  <label><input type="checkbox" />Wed</label>
                  <label><input type="checkbox" />Thu</label>
                  <label><input type="checkbox" />Fri</label>
                  <label><input type="checkbox" defaultChecked />Sat</label>
                </div>
              </div>

              <div className="lps-toggle-block">
                <span>Additional Settings</span>
                <div className="lps-toggle-row">
                  <div>
                    <strong>Allow Negative Balance</strong>
                    <p>Employees can have leave balance below zero</p>
                  </div>
                  <button type="button" className="lps-toggle off" aria-label="Allow Negative Balance" />
                </div>

                <div className="lps-toggle-row">
                  <div>
                    <strong>Auto-approve Weekend Applications</strong>
                    <p>Skip manual review for weekend leave requests</p>
                  </div>
                  <button type="button" className="lps-toggle on" aria-label="Auto approve weekend" />
                </div>

                <div className="lps-toggle-row">
                  <div>
                    <strong>Email Notifications</strong>
                    <p>Send notifications for leave actions</p>
                  </div>
                  <button type="button" className="lps-toggle on" aria-label="Email notifications" />
                </div>
              </div>
            </article>

            <article className="lps-card">
              <div className="lps-list-head">
                <div>
                  <h2>Leave Types</h2>
                  <p>Manage different types of leaves</p>
                </div>
                <button type="button" className="lps-add-btn">
                  <FiPlus size={13} />
                  Add Type
                </button>
              </div>

              <div className="lps-type-list">
                {leaveTypes.map((item) => (
                  <div key={item.name} className="lps-type-row">
                    <div className="lps-type-top">
                      <div className="lps-type-meta">
                        <span className={`lps-type-tag ${item.tagClass}`}>{item.name}</span>
                        <span className="lps-active">Active</span>
                      </div>
                      <div className="lps-type-actions">
                        <button type="button" aria-label="Edit"><FiEdit2 size={12} /></button>
                        <button type="button" aria-label="Delete"><FiTrash2 size={12} /></button>
                      </div>
                    </div>
                    <div className="lps-type-details">
                      <span>Annual Allocation: <strong>{item.allocation}</strong></span>
                      <span>Max Consecutive: <strong>{item.consecutive}</strong></span>
                      <span>Requires Approval: <strong>{item.approval}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="lps-right-column">
            <article className="lps-side-card">
              <h3>Policy Summary</h3>
              <p>Current configuration overview</p>
              <div className="lps-summary-list">
                <div className="blue"><span>Total Leave Types</span><strong>4</strong></div>
                <div className="green"><span>Total Annual Days</span><strong>135</strong></div>
                <div className="purple"><span>Working Days</span><strong>5</strong></div>
                <div className="orange"><span>Carry Forward</span><strong>10</strong></div>
              </div>
            </article>

            <article className="lps-quick-card">
              <h3>Quick Actions</h3>
              <button type="button"><FiDownload size={13} />Export Policy</button>
              <button type="button"><FiCopy size={13} />Duplicate Policy</button>
              <button type="button"><FiEye size={13} />View History</button>
            </article>

            <article className="lps-warning-card">
              <strong>Unsaved Changes</strong>
              <p>You have unsaved changes. Click "Save Changes" to apply your policy updates.</p>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}

function FiSettingsDot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 0 0 12 8.5Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19.4 12A7.4 7.4 0 0 0 19.35 11.2L21 9.9L19.4 7.2L17.4 7.9C16.9 7.5 16.4 7.2 15.8 7L15.5 5H12.5L12.2 7C11.6 7.2 11.1 7.5 10.6 7.9L8.6 7.2L7 9.9L8.65 11.2A7.4 7.4 0 0 0 8.6 12C8.6 12.3 8.62 12.6 8.65 12.8L7 14.1L8.6 16.8L10.6 16.1C11.1 16.5 11.6 16.8 12.2 17L12.5 19H15.5L15.8 17C16.4 16.8 16.9 16.5 17.4 16.1L19.4 16.8L21 14.1L19.35 12.8C19.38 12.6 19.4 12.3 19.4 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default LeavePolicySetup
