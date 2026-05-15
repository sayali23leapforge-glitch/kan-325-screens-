import { FiArrowLeft, FiBell, FiCalendar, FiUploadCloud } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './apply-leave.css'

const balanceCards = [
  {
    title: 'Annual Leave',
    remaining: '18',
    total: '25 days',
    tone: 'blue',
  },
  {
    title: 'Sick Leave',
    remaining: '8',
    total: '12 days',
    tone: 'green',
  },
  {
    title: 'Casual Leave',
    remaining: '3',
    total: '8 days',
    tone: 'orange',
  },
]

const recentApplications = [
  {
    title: 'Annual Leave',
    date: 'Dec 10-12, 2024',
    status: 'Approved',
    tone: 'approved',
  },
  {
    title: 'Sick Leave',
    date: 'Nov 28, 2024',
    status: 'Approved',
    tone: 'approved',
  },
  {
    title: 'Casual Leave',
    date: 'Nov 15, 2024',
    status: 'Pending',
    tone: 'pending',
  },
]

const policyItems = [
  'Submit applications 7 days in advance',
  'Medical certificate required for sick leave > 3 days',
  'Emergency leaves require manager approval',
  'Maximum 5 consecutive casual leaves',
]

function ApplyLeave({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="apply-leave-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="apply-leave-main">
        <header className="apply-leave-header">
          <div className="apply-leave-header-left">
            <h1 className="apply-leave-title">Apply Leave</h1>
            <div className="apply-leave-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>HRM</span>
              <span>&gt;</span>
              <span>Leave Management</span>
              <span>&gt;</span>
              <span>Apply Leave</span>
            </div>
          </div>

          <div className="apply-leave-header-actions">
            <button type="button" className="apply-leave-bell-btn" aria-label="Notifications">
              <FiBell size={16} />
              <span className="apply-leave-bell-badge">7</span>
            </button>
            <button
              type="button"
              className="apply-leave-dashboard-btn"
              onClick={() => navigate('/hrm/dashboard')}
            >
              <FiArrowLeft size={14} />
              Back to Dashboard
            </button>
          </div>
        </header>

        <section className="apply-leave-grid">
          <section className="apply-leave-card apply-leave-form-card">
            <div className="apply-leave-card-header">
              <h2>Leave Application Form</h2>
              <span className="apply-leave-draft-badge">Draft</span>
            </div>

            <div className="apply-leave-form-grid">
              <div className="apply-leave-field">
                <label htmlFor="leave-type">Leave Type *</label>
                <select id="leave-type" defaultValue="">
                  <option value="" disabled>
                    Select leave type
                  </option>
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                </select>
              </div>

              <div className="apply-leave-field">
                <label htmlFor="priority-level">Priority Level</label>
                <input id="priority-level" type="text" defaultValue="Normal" />
              </div>

              <div className="apply-leave-field">
                <label htmlFor="start-date">Start Date *</label>
                <div className="apply-leave-input-icon">
                  <input id="start-date" type="text" defaultValue="20-12-2024" />
                  <FiCalendar size={14} />
                </div>
              </div>

              <div className="apply-leave-field">
                <label htmlFor="end-date">End Date *</label>
                <div className="apply-leave-input-icon">
                  <input id="end-date" type="text" defaultValue="27-12-2024" />
                  <FiCalendar size={14} />
                </div>
              </div>
            </div>

            <div className="apply-leave-field apply-leave-half-day-field">
              <label>Half Day Option</label>
              <div className="apply-leave-radio-row">
                <label className="apply-leave-radio-label">
                  <input type="radio" name="half-day" defaultChecked />
                  <span>Full Day</span>
                </label>
                <label className="apply-leave-radio-label">
                  <input type="radio" name="half-day" />
                  <span>First Half</span>
                </label>
                <label className="apply-leave-radio-label">
                  <input type="radio" name="half-day" />
                  <span>Second Half</span>
                </label>
              </div>
            </div>

            <div className="apply-leave-field">
              <label htmlFor="reason-for-leave">Reason for Leave *</label>
              <textarea
                id="reason-for-leave"
                rows="4"
                defaultValue=""
                placeholder="Please provide a detailed reason for your leave request..."
              />
            </div>

            <div className="apply-leave-field">
              <label htmlFor="work-handover">Work Handover Details</label>
              <textarea
                id="work-handover"
                rows="4"
                defaultValue=""
                placeholder="Describe how your work will be handled during your absence..."
              />
            </div>

            <div className="apply-leave-field">
              <label>Attach Documents</label>
              <button type="button" className="apply-leave-upload-box">
                <FiUploadCloud size={26} />
                <span>Drop files here or click to upload</span>
                <small>PDF, DOC, JPG up to 10MB</small>
              </button>
            </div>

            <div className="apply-leave-actions-row">
              <button type="button" className="apply-leave-submit-btn">
                Submit Application
              </button>
              <button type="button" className="apply-leave-draft-btn">
                Save as Draft
              </button>
              <button type="button" className="apply-leave-cancel-btn">
                Cancel
              </button>
            </div>
          </section>

          <aside className="apply-leave-side-panel">
            <section className="apply-leave-card apply-leave-balance-card">
              <h2>Your Leave Balance</h2>
              <div className="apply-leave-balance-list">
                {balanceCards.map((item) => (
                  <article key={item.title} className={`apply-leave-balance-item ${item.tone}`}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>Remaining</p>
                    </div>
                    <div className="apply-leave-balance-meta">
                      <strong>{item.remaining}</strong>
                      <span>of {item.total}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="apply-leave-card apply-leave-recent-card">
              <h2>Recent Applications</h2>
              <div className="apply-leave-recent-list">
                {recentApplications.map((item) => (
                  <article key={`${item.title}-${item.date}`} className="apply-leave-recent-item">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.date}</p>
                    </div>
                    <span className={`apply-leave-status-badge ${item.tone}`}>{item.status}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="apply-leave-policy-card">
              <div className="apply-leave-policy-title-row">
                <span className="apply-leave-policy-dot">i</span>
                <h2>Leave Policy Reminder</h2>
              </div>
              <ul className="apply-leave-policy-list">
                {policyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default ApplyLeave