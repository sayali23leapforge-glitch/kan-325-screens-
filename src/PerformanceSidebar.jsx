import { useLocation, useNavigate } from 'react-router-dom'
import {
  FiHome,
  FiTrendingUp,
  FiBarChart2,
  FiTarget,
  FiUsers,
  FiFileText,
  FiAward,
  FiBook,
  FiSettings,
  FiBell,
  FiMoreVertical,
  FiChevronDown,
} from 'react-icons/fi'
import './performance-sidebar.css'

function PerformanceSidebar({ onSwitchModule }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSwitchModule = () => {
    if (typeof onSwitchModule === 'function') {
      onSwitchModule()
      return
    }
    navigate('/hrm/performance')
  }

  const isDashboardActive = location.pathname === '/hrm/performance'
  const isKpiActive = location.pathname === '/hrm/performance/kpi'
  const isGoalsActive = location.pathname === '/hrm/performance/goals'
  const isTeamActive = location.pathname === '/hrm/performance/team'
  const isReviewsActive = location.pathname === '/hrm/performance/reviews'
  const isCalibrationActive = location.pathname === '/hrm/performance/calibration'
  const isReportsActive = location.pathname === '/hrm/performance/reports'
  const isInsightsActive = location.pathname === '/hrm/performance/insights'
  const isTrendsActive = location.pathname === '/hrm/performance/trends'
  const isTrainingActive = location.pathname === '/hrm/performance/training'
  const isCertificationsActive = location.pathname === '/hrm/performance/certifications'
  const isConfigureActive = location.pathname === '/hrm/performance/configure'
  const isNotificationsActive = location.pathname === '/hrm/performance/notifications'

  const navSections = [
    {
      label: 'PERFORMANCE METRICS',
      items: [
        {
          label: 'KPI Overview',
          icon: <FiTarget size={16} />,
          active: isKpiActive,
          onClick: () => navigate('/hrm/performance/kpi'),
        },
        {
          label: 'Goals & Targets',
          icon: <FiAward size={16} />,
          active: isGoalsActive,
          onClick: () => navigate('/hrm/performance/goals'),
        },
        {
          label: 'Team Performance',
          icon: <FiUsers size={16} />,
          active: isTeamActive,
          onClick: () => navigate('/hrm/performance/team'),
        },
        {
          label: 'Reviews',
          icon: <FiFileText size={16} />,
          active: isReviewsActive,
          onClick: () => navigate('/hrm/performance/reviews'),
        },
        {
          label: 'Calibration',
          icon: <FiUsers size={16} />,
          active: isCalibrationActive,
          onClick: () => navigate('/hrm/performance/calibration'),
        },
      ],
    },
    {
      label: 'ANALYTICS',
      items: [
        {
          label: 'Reports',
          icon: <FiBarChart2 size={16} />,
          active: isReportsActive,
          onClick: () => navigate('/hrm/performance/reports'),
        },
        {
          label: 'Insights',
          icon: <FiTrendingUp size={16} />,
          active: isInsightsActive,
          onClick: () => navigate('/hrm/performance/insights'),
        },
        {
          label: 'Trends',
          icon: <FiTrendingUp size={16} />,
          active: isTrendsActive,
          onClick: () => navigate('/hrm/performance/trends'),
        },
      ],
    },
    {
      label: 'DEVELOPMENT',
      items: [
        {
          label: 'Training',
          icon: <FiBook size={16} />,
          active: isTrainingActive,
          onClick: () => navigate('/hrm/performance/training'),
        },
        {
          label: 'Certifications',
          icon: <FiAward size={16} />,
          active: isCertificationsActive,
          onClick: () => navigate('/hrm/performance/certifications'),
        },
      ],
    },
    {
      label: 'SETTINGS',
      items: [
        {
          label: 'Configure Metrics',
          icon: <FiSettings size={16} />,
          active: isConfigureActive,
          onClick: () => navigate('/hrm/performance/configure'),
        },
        {
          label: 'Notifications',
          icon: <FiBell size={16} />,
          active: isNotificationsActive,
          onClick: () => navigate('/hrm/performance/notifications'),
        },
      ],
    },
  ]

  return (
    <aside className="perf-sidebar" aria-label="Performance Sidebar">
      <div className="perf-sidebar-top">
        <div className="perf-sidebar-brand-row">
          <div className="perf-sidebar-brand-mark">
            <span className="perf-sidebar-brand-mark-inner">K</span>
          </div>
          <div className="perf-sidebar-brand-copy">
            <strong>Karnovate</strong>
            <span>Enterprise Suite</span>
          </div>
        </div>

        <div className="perf-sidebar-status">
          <span className="perf-status-dot" />
          <span>Production</span>
        </div>

        <button type="button" className="perf-sidebar-module-card" onClick={handleSwitchModule}>
          <span className="perf-sidebar-module-icon">
            <FiTrendingUp size={16} />
          </span>
          <span className="perf-sidebar-module-copy">
            <strong>Performance</strong>
            <span>Performance Management</span>
          </span>
          <FiChevronDown className="perf-sidebar-chevron" size={16} />
        </button>
      </div>

      <nav className="perf-sidebar-nav">
        <button
          type="button"
          className={`perf-sidebar-dashboard-card ${isDashboardActive ? 'active' : ''}`}
          onClick={() => navigate('/hrm/performance')}
        >
          <span className="perf-sidebar-dashboard-icon">
            <FiHome size={16} />
          </span>
          <span className="perf-sidebar-dashboard-copy">Dashboard</span>
        </button>

        {navSections.map((section) => (
          <section className="perf-sidebar-section" key={section.label}>
            <div className="perf-sidebar-section-label">{section.label}</div>
            <div className="perf-sidebar-section-list">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`perf-sidebar-item ${item.active ? 'active' : ''}`}
                  onClick={item.onClick}
                >
                  <span className="perf-sidebar-item-icon">{item.icon}</span>
                  <span className="perf-sidebar-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </nav>

      <div className="perf-sidebar-bottom">
        <div className="perf-sidebar-profile">
          <div className="perf-sidebar-profile-avatar">MC</div>
          <div className="perf-sidebar-profile-copy">
            <strong>Michael Chen</strong>
            <span>Performance Lead</span>
          </div>
          <FiMoreVertical className="perf-sidebar-profile-menu" size={16} />
        </div>
      </div>
    </aside>
  )
}

export default PerformanceSidebar
