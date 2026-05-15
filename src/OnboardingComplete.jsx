import { FiBell, FiChevronRight, FiPlus, FiCheck, FiMonitor, FiEdit3, FiMousePointer, FiInfo, FiUser, FiDownload, FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './onboarding-complete.css'

const checklistItems = [
  { title: 'Manager Approval', note: 'Approved by David Martinez on Dec 10, 2024' },
  { title: 'IT Provisioning', note: 'Equipment delivered and configured on Dec 14, 2024' },
  { title: 'Document Verification', note: 'All documents verified and archived' },
  { title: 'Training & Orientation', note: 'Completed orientation sessions and training modules' },
  { title: 'Access & Permissions', note: 'All system access and permissions configured' },
]

const assets = [
  { name: 'MacBook Pro 16" M3', meta: 'Serial: MBP-2024-001', icon: FiMonitor },
  { name: 'Dell 27" 4K Monitor', meta: 'Serial: DELL-2024-045', icon: FiMonitor },
  { name: 'Mechanical Keyboard', meta: 'Model: Keychron K8', icon: FiEdit3 },
  { name: 'Wireless Mouse', meta: 'Model: Logitech MX Master 3', icon: FiMousePointer },
]

function OnboardingComplete({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="oc-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="oc-main">
        <div className="oc-header">
          <div>
            <h1>Onboarding Complete</h1>
            <nav>
              <a href="/">Home</a>
              <FiChevronRight size={11} />
              <a href="/hrm/onboarding-2">HRM</a>
              <FiChevronRight size={11} />
              <span>Onboarding Complete</span>
            </nav>
          </div>

          <div className="oc-header-actions">
            <button className="oc-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>3</span>
            </button>
            <button className="oc-new-employee">
              <FiPlus size={14} />
              New Employee
            </button>
          </div>
        </div>

        <div className="oc-content">
          <section className="oc-success-card">
            <div className="oc-success-icon">
              <FiCheck size={30} />
            </div>
            <h2>Onboarding Completed Successfully!</h2>
            <p>Sarah Johnson is now fully onboarded and ready to start</p>
            <div className="oc-success-stats">
              <div>
                <span>Start Date</span>
                <strong>Dec 15, 2024</strong>
              </div>
              <div>
                <span>Department</span>
                <strong>Engineering</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Senior Developer</strong>
              </div>
            </div>
          </section>

          <section className="oc-profile-card">
            <img src="https://placehold.co/123x123" alt="Sarah Johnson" />
            <div>
              <h3>Sarah Johnson</h3>
              <p>Senior Developer • Engineering</p>
              <div className="oc-tags">
                <span className="green">Active</span>
                <span className="blue">Full-time</span>
                <span className="purple">Remote</span>
              </div>
            </div>
          </section>

          <section className="oc-card">
            <header>
              <h3>Onboarding Checklist</h3>
              <p>All tasks completed successfully</p>
            </header>
            <div className="oc-checklist">
              {checklistItems.map((item) => (
                <div className="oc-check-item" key={item.title}>
                  <span className="dot"><FiCheck size={10} /></span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.note}</p>
                  </div>
                  <em>Completed</em>
                </div>
              ))}
            </div>
          </section>

          <section className="oc-card">
            <header>
              <h3>Equipment Summary</h3>
            </header>
            <div className="oc-assets">
              {assets.map((asset) => (
                <div className="oc-asset" key={asset.name}>
                  <asset.icon size={18} />
                  <div>
                    <h4>{asset.name}</h4>
                    <p>{asset.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="oc-next-steps">
            <div className="oc-next-icon">
              <FiInfo size={16} />
            </div>
            <div>
              <h3>Next Steps</h3>
              <ul>
                <li>Employee will receive welcome email with first-day instructions</li>
                <li>Manager will be notified to schedule team introduction meeting</li>
                <li>HR will conduct 30-day check-in on Jan 15, 2025</li>
              </ul>
            </div>
          </section>

          <div className="oc-actions">
            <button className="primary" onClick={() => navigate('/hrm/employee-profile/1')}>
              <FiUser size={14} />
              View Employee Profile
            </button>
            <button className="orange">
              <FiDownload size={14} />
              Download Summary
            </button>
            <button className="ghost" onClick={() => navigate('/hrm/dashboard')}>
              <FiArrowLeft size={14} />
              Back to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OnboardingComplete
