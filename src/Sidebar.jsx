import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FiAlertCircle,
  FiBell,
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiGrid,
  FiHeadphones,
  FiHome,
  FiLock,
  FiMenu,
  FiSettings,
  FiShield,
  FiUsers,
  FiDatabase,
  FiLayers,
  FiFileText,
  FiLifeBuoy,
  FiBarChart2,
} from 'react-icons/fi'
import './sidebar.css'

function SidebarSection({ label, children }) {
  return (
    <section className="sidebar-section-block" aria-label={label}>
      <div className="sidebar-group-label">{label}</div>
      <div className="sidebar-section-items">{children}</div>
    </section>
  )
}

function SidebarItem({ icon, label, badge, active, muted, className = '', onClick, suffix, href }) {
  return (
    <button
      type="button"
      className={`sidebar-item ${active ? 'active' : ''} ${muted ? 'muted' : ''} ${className}`}
      disabled={muted}
      onClick={onClick}
      aria-pressed={active}
      data-href={href}
    >
      <span className="sidebar-item-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="sidebar-item-label">{label}</span>
      {badge && <span className={`sidebar-badge ${badge.tone || ''}`}>{badge.label}</span>}
      {suffix && <span className="sidebar-item-suffix" aria-hidden="true">{suffix}</span>}
    </button>
  )
}

function Sidebar({ sidebarOpen = false }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(() => window.innerWidth <= 900)
  const [rolesOpen, setRolesOpen] = useState(true)
  const [sessionsTokensOpen, setSessionsTokensOpen] = useState(false)

  const handleDashboardClick = () => {
    navigate('/dashboard')
  }

  const handleTenantsClick = () => {
    navigate('/tenants')
  }

  const handleProductsAppsClick = () => {
    navigate('/applications')
  }

  const handleUsersClick = () => {
    navigate('/users')
  }

  const handleRolesPermissionsClick = () => {
    navigate('/roles-permissions')
  }

  const handleRoleManagementClick = () => {
    navigate('/roles-permissions/role-management')
  }

  const handlePermissionMatrixClick = () => {
    navigate('/roles-permissions/permission-matrix')
  }

  const handleSecurityPoliciesClick = () => {
    navigate('/security-policies')
  }

  const handleSessionsTokensClick = () => {
    navigate('/sessions-tokens')
  }

  const handleViewSessionsClick = () => {
    navigate('/view-sessions')
  }

  const handleActiveTokensClick = () => {
    navigate('/sessions-tokens?tab=tokens')
  }

  const handleTokenPoliciesClick = () => {
    navigate('/sessions-tokens?tab=policies')
  }

  const handleAuditLogsClick = () => {
    navigate('/audit-logs')
  }

  const isDashboardActive = location.pathname === '/dashboard'
  const isTenantsActive = location.pathname === '/tenants'
  const isApplicationsActive = location.pathname === '/applications'
  const isUsersActive = location.pathname === '/users'
  const isRolesPermissionsActive = location.pathname === '/roles-permissions'
  const isRoleManagementActive = location.pathname === '/roles-permissions/role-management'
  const isPermissionMatrixActive = location.pathname === '/roles-permissions/permission-matrix'
  const isSecurityPoliciesActive = location.pathname === '/security-policies'
  const isSessionsTokensActive = location.pathname === '/sessions-tokens'
  const isAuditLogsActive = location.pathname === '/audit-logs'

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${sidebarOpen ? 'mobile-open' : ''}`} aria-label="Sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand-row">
          <div className="sidebar-brand">
            <div className="sidebar-brand-mark">
              <FiShield />
            </div>
            <div className="sidebar-brand-copy">
              <strong>Karnovate</strong>
              <span>Enterprise Suite</span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-toggle"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((previous) => !previous)}
          >
            <FiMenu />
          </button>
        </div>

        <div className="sidebar-status">
          <span className="status-dot" />
          <span>Production</span>
        </div>

        <button type="button" className="sidebar-organization-card">
          <span className="org-icon">
            <FiShield />
          </span>
          <span className="sidebar-organization-copy">
            <strong>IAM Admin</strong>
            <span>Identity & Access</span>
          </span>
          <FiChevronDown className="sidebar-chevron" aria-hidden="true" />
        </button>
      </div>

      <nav className="sidebar-nav">
        <SidebarItem
          icon={<FiHome />}
          label="Dashboard"
          active={isDashboardActive}
          onClick={handleDashboardClick}
          badge={{ label: '12', tone: 'orange' }}
        />

        <SidebarSection label="Core Management">
          <SidebarItem icon={<FiDatabase />} label="Tenants" badge={{ label: '8', tone: 'orange' }} active={isTenantsActive} onClick={handleTenantsClick} />
          <SidebarItem icon={<FiUsers />} label="Users" badge={{ label: '247', tone: 'purple' }} active={isUsersActive} onClick={handleUsersClick} />
          <SidebarItem
            icon={<FiLayers />}
            label="Roles & Permissions"
            active={isRolesPermissionsActive}
            suffix={rolesOpen ? <FiChevronDown /> : <FiChevronRight />}
            onClick={() => {
              if (!isRolesPermissionsActive) {
                handleRolesPermissionsClick()
              } else {
                setRolesOpen((previous) => !previous)
              }
            }}
          />

          {rolesOpen && (
            <div className="sidebar-submenu">
              <button type="button" className={`sidebar-submenu-item ${isRoleManagementActive ? 'active' : ''}`} onClick={handleRoleManagementClick}>Role Management</button>
              <button type="button" className={`sidebar-submenu-item ${isPermissionMatrixActive ? 'active' : ''}`} onClick={handlePermissionMatrixClick}>Permission Matrix</button>
              <button type="button">Access Policies</button>
            </div>
          )}

          <SidebarItem icon={<FiGrid />} label="Products & Apps" active={isApplicationsActive} onClick={handleProductsAppsClick} />
        </SidebarSection>

        <SidebarSection label="Security">
          <SidebarItem icon={<FiLock />} label="Security Policies" active={isSecurityPoliciesActive} onClick={handleSecurityPoliciesClick} suffix={<span className="sidebar-crown">♛</span>} />
          <SidebarItem
            icon={<FiFileText />}
            label="Sessions & Tokens"
            active={isSessionsTokensActive}
            suffix={sessionsTokensOpen ? <FiChevronDown /> : <FiChevronRight />}
            onClick={() => {
              if (!isSessionsTokensActive) {
                handleSessionsTokensClick()
              }
              setSessionsTokensOpen((previous) => !previous)
            }}
          />

          {sessionsTokensOpen && (
            <div className="sidebar-submenu">
              <button type="button" className="sidebar-submenu-item active" onClick={handleViewSessionsClick}>View Sessions</button>
              <button type="button" className="sidebar-submenu-item" onClick={handleActiveTokensClick}>Active Tokens</button>
              <button type="button" className="sidebar-submenu-item" onClick={handleTokenPoliciesClick}>Token Policies</button>
            </div>
          )}

          <SidebarItem icon={<FiAlertCircle />} label="Audit Logs" active={isAuditLogsActive} onClick={handleAuditLogsClick} suffix={<span className="sidebar-dot red" />} />
        </SidebarSection>

        <SidebarSection label="Analytics">
          <SidebarItem icon={<FiBarChart2 />} label="Reports" />
          <SidebarItem icon={<FiBell />} label="Alerts" badge={{ label: '3', tone: 'red' }} />
        </SidebarSection>

        <SidebarSection label="Advanced Settings">
          <SidebarItem icon={<FiSettings />} label="Advanced Settings" muted suffix={<FiLock />} />
        </SidebarSection>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-support">
          <button type="button">
            <FiLifeBuoy />
            <span>Help Center</span>
          </button>
          <button type="button">
            <FiBookOpen />
            <span>Documentation</span>
          </button>
          <button type="button">
            <FiHeadphones />
            <span>Support</span>
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="sidebar-profile-avatar">MC</div>
          <div className="sidebar-profile-copy">
            <strong>Michael Chen</strong>
            <span>Super Admin</span>
          </div>
          <button type="button" className="sidebar-menu-button" aria-label="Open profile menu">
            <FiMenu />
          </button>
        </div>
      </div>
    </aside>
  )
}

export { SidebarItem, SidebarSection }

export default Sidebar
