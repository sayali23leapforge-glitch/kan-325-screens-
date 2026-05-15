import {
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiGrid,
  FiHelpCircle,
  FiLogOut,
  FiPercent,
  FiSettings,
  FiShield,
  FiUsers,
} from 'react-icons/fi'
import './payroll-sidebar.css'

function PayrollSidebar() {
  return (
    <aside className="psb-sidebar">
      {/* Logo */}
      <div className="psb-logo-section">
        <div className="psb-logo-icon">
          <span>K</span>
        </div>
        <div className="psb-logo-text">
          <span className="psb-logo-name">Karnovate</span>
          <span className="psb-logo-sub">Enterprise Suite</span>
        </div>
        <span className="psb-logo-grid"><FiGrid size={13} /></span>
      </div>

      {/* User */}
      <div className="psb-user-section">
        <div className="psb-user-box">
          <div className="psb-user-avatar">
            <FiUsers size={11} color="#34D399" />
          </div>
          <div className="psb-user-info">
            <span className="psb-user-name">Payroll Admin</span>
            <span className="psb-user-role">Human Resources</span>
          </div>
          <FiChevronRight size={11} className="psb-chevron" />
        </div>
        <div className="psb-production-badge">
          <span className="psb-prod-dot" />
          Production
        </div>
      </div>

      {/* Nav */}
      <nav className="psb-nav">
        {/* Dashboard – active */}
        <div className="psb-nav-item psb-nav-active">
          <FiGrid size={13} className="psb-nav-icon" />
          <span>Dashboard</span>
          <span className="psb-badge psb-badge-amber">8</span>
        </div>

        {/* PAYROLL MANAGEMENT */}
        <p className="psb-section-label">Payroll Management</p>

        <div className="psb-nav-item">
          <FiUsers size={13} className="psb-nav-icon" />
          <span>Employees</span>
          <span className="psb-badge psb-badge-blue">247</span>
        </div>
        <div className="psb-nav-item">
          <FiDollarSign size={13} className="psb-nav-icon" />
          <span>Payroll Runs</span>
          <span className="psb-badge psb-badge-green">12</span>
        </div>
        <div className="psb-nav-item">
          <FiFileText size={13} className="psb-nav-icon" />
          <span>Pay Stubs</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>
        <div className="psb-nav-item">
          <FiPercent size={13} className="psb-nav-icon" />
          <span>Tax Management</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>

        {/* TIME & ATTENDANCE */}
        <p className="psb-section-label">Time &amp; Attendance</p>

        <div className="psb-nav-item">
          <FiClock size={13} className="psb-nav-icon" />
          <span>Timesheets</span>
          <span className="psb-badge psb-badge-orange">15</span>
        </div>
        <div className="psb-nav-item">
          <FiCalendar size={13} className="psb-nav-icon" />
          <span>Leave Requests</span>
          <span className="psb-badge psb-badge-purple">7</span>
        </div>
        <div className="psb-nav-item">
          <FiClock size={13} className="psb-nav-icon" />
          <span>Overtime</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>

        {/* BENEFITS */}
        <p className="psb-section-label">Benefits</p>

        <div className="psb-nav-item">
          <FiShield size={13} className="psb-nav-icon" />
          <span>Insurance</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>
        <div className="psb-nav-item">
          <FiBriefcase size={13} className="psb-nav-icon" />
          <span>401(k)</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>

        {/* REPORTS */}
        <p className="psb-section-label">Reports</p>

        <div className="psb-nav-item">
          <FiBarChart2 size={13} className="psb-nav-icon" />
          <span>Payroll Reports</span>
          <FiChevronRight size={11} className="psb-nav-arrow" />
        </div>
        <div className="psb-nav-item">
          <FiCheckCircle size={13} className="psb-nav-icon" />
          <span>Compliance</span>
          <span className="psb-badge psb-badge-red">2</span>
        </div>
      </nav>

      {/* Footer */}
      <div className="psb-footer">
        <div className="psb-footer-item">
          <FiHelpCircle size={13} />
          <span>Help Center</span>
        </div>
        <div className="psb-footer-item">
          <FiSettings size={13} />
          <span>Settings</span>
        </div>
        <div className="psb-footer-user">
          <img src="https://placehold.co/38x38" alt="avatar" className="psb-footer-avatar" />
          <div className="psb-footer-user-info">
            <span>Sarah Johnson</span>
            <small>Payroll Manager</small>
          </div>
          <FiLogOut size={13} className="psb-footer-logout" />
        </div>
      </div>
    </aside>
  )
}

export default PayrollSidebar
