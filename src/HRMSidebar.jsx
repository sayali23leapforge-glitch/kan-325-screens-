import { useNavigate, useLocation } from 'react-router-dom'
import {
  FiBarChart2,
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiGrid,
  FiMoreVertical,
  FiShield,
  FiSettings,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import './hrm-sidebar.css'

function HRMSidebar({ onSwitchModule }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSwitchModule = () => {
    if (typeof onSwitchModule === 'function') {
      onSwitchModule()
      return
    }

    navigate('/dashboard')
  }

  const isDashboardActive = location.pathname === '/hrm/dashboard' || location.pathname === '/hrm'
  const isEmployeesActive = location.pathname === '/hrm/employees' || location.pathname.startsWith('/hrm/employees/')
  const isOnboardingActive = location.pathname === '/hrm/onboarding'
  const isAttendanceActive =
    location.pathname === '/hrm/attendance' ||
    location.pathname === '/regularization-request' ||
    location.pathname === '/manager-approval'
  const isLeavesActive =
    location.pathname === '/leave-management' ||
    location.pathname === '/hrm/leaves' ||
    location.pathname === '/hrm/leaves/apply'
  const isPayrollActive = location.pathname === '/hrm/payroll'
  const isPerformanceActive = location.pathname === '/hrm/performance'
  const isRecruitmentActive =
    location.pathname === '/hrm/recruitment' ||
    location.pathname.startsWith('/hrm/recruitment/') ||
    location.pathname === '/hrm/requirement' ||
    location.pathname.startsWith('/hrm/requirement/')
  const isReportsActive = location.pathname === '/hrm/reports'
  const isSettingsActive = location.pathname === '/hrm/settings'
  const isAuditLogsActive = location.pathname === '/hrm/audit' || location.pathname === '/hrm/audit-logs'

  const handleDashboardClick = () => {
    navigate('/hrm/dashboard')
  }

  const handleEmployeesClick = () => {
    navigate('/hrm/employees')
  }

  const handleOnboardingClick = () => {
    navigate('/hrm/onboarding')
  }

  const handleAttendanceClick = () => {
    navigate('/hrm/attendance')
  }

  const handleLeaveManagementClick = () => {
    navigate('/leave-management')
  }

  const handlePayrollClick = () => {
    navigate('/hrm/payroll')
  }

  const handlePerformanceClick = () => {
    navigate('/hrm/performance')
  }

  const handleRecruitmentClick = () => {
    navigate('/hrm/recruitment')
  }

  const handleReportsClick = () => {
    navigate('/hrm/reports')
  }

  const handleSettingsClick = () => {
    navigate('/hrm/settings')
  }

  const handleAuditLogsClick = () => {
    navigate('/hrm/audit')
  }

  const navSections = [
    {
      label: 'CORE MANAGEMENT',
      items: [
        {
          label: 'Employee Directory',
          icon: <FiUsers />,
          badge: '247',
          tone: 'blue',
          active: isEmployeesActive,
          onClick: handleEmployeesClick,
        },
        {
          label: 'Onboarding',
          icon: <FiHome />,
          badge: '5',
          tone: 'green',
          active: isOnboardingActive,
          onClick: handleOnboardingClick,
        },
        {
          label: 'Attendance',
          icon: <FiClock />,
          active: isAttendanceActive,
          onClick: handleAttendanceClick,
        },
        {
          label: 'Leave Management',
          icon: <FiFileText />,
          badge: '12',
          tone: 'yellow',
          active: isLeavesActive,
          onClick: handleLeaveManagementClick,
        },
        {
          label: 'Payroll',
          icon: <FiDollarSign />,
          active: isPayrollActive,
          onClick: handlePayrollClick,
        },
      ],
    },
    {
      label: 'TALENT & GROWTH',
      items: [
        {
          label: 'Performance',
          icon: <FiTrendingUp />,
          active: isPerformanceActive,
          onClick: handlePerformanceClick,
        },
        {
          label: 'Recruitment',
          icon: <FiGrid />,
          badge: '18',
          tone: 'purple',
          active: isRecruitmentActive,
          onClick: handleRecruitmentClick,
        },
      ],
    },
    {
      label: 'ANALYTICS',
      items: [
        {
          label: 'Reports',
          icon: <FiBarChart2 />,
          active: isReportsActive,
          onClick: handleReportsClick,
        },
        {
          label: 'Settings',
          icon: <FiSettings />,
          active: isSettingsActive,
          onClick: handleSettingsClick,
        },
        {
          label: 'Audit',
          icon: <FiShield />,
          active: isAuditLogsActive,
          onClick: handleAuditLogsClick,
          dot: true,
        },
      ],
    },
  ]

  return (
    <aside className="hrm-sidebar" aria-label="HRM Sidebar">
      <div className="hrm-sidebar-top">
        <div className="hrm-sidebar-brand-row hrm-sidebar-brand-block">
          <div className="hrm-sidebar-brand-mark" aria-hidden="true">
            <span className="hrm-sidebar-brand-mark-inner">K</span>
          </div>
          <div className="hrm-sidebar-brand-copy">
            <strong>Karnovate</strong>
            <span>Enterprise Suite</span>
          </div>
        </div>

        <div className="hrm-sidebar-status">
          <span className="status-dot" />
          <span>Production</span>
        </div>

        <button type="button" className="hrm-sidebar-module-card" onClick={handleSwitchModule}>
          <span className="hrm-sidebar-module-icon">
            <FiShield />
          </span>
          <span className="hrm-sidebar-module-copy">
            <strong>HRM Admin</strong>
            <span>Human Resources</span>
          </span>
          <FiChevronDown className="hrm-sidebar-chevron" />
        </button>
      </div>

      <nav className="hrm-sidebar-nav">
        <button type="button" className={`hrm-sidebar-dashboard-card ${isDashboardActive ? 'active' : ''}`} onClick={handleDashboardClick}>
          <span className="hrm-sidebar-dashboard-icon">
            <FiHome />
          </span>
          <span className="hrm-sidebar-dashboard-copy">Dashboard</span>
          <span className="hrm-sidebar-badge">8</span>
        </button>

        {navSections.map((section) => (
          <section className="hrm-sidebar-section" key={section.label}>
            <div className="hrm-sidebar-section-label">{section.label}</div>
            <div className="hrm-sidebar-section-list">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`hrm-sidebar-item ${item.active ? 'active' : ''}`}
                  onClick={item.onClick}
                >
                  <span className="hrm-sidebar-item-icon">
                    {item.icon}
                  </span>
                  <span className="hrm-sidebar-item-label">{item.label}</span>
                  {item.badge && <span className={`hrm-sidebar-item-badge ${item.tone || ''}`}>{item.badge}</span>}
                  {item.dot && <span className="hrm-sidebar-item-dot" />}
                </button>
              ))}
            </div>
          </section>
        ))}
      </nav>

      <div className="hrm-sidebar-bottom">
        <div className="hrm-sidebar-profile">
          <div className="hrm-sidebar-profile-avatar">M</div>
          <div className="hrm-sidebar-profile-copy">
            <strong>Michael Chen</strong>
            <span>HR Manager</span>
          </div>
          <FiMoreVertical className="hrm-sidebar-profile-menu" />
        </div>
      </div>
    </aside>
  )
}

export default HRMSidebar
