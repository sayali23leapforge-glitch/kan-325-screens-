import React from "react";
import {
  FiActivity,
  FiArrowRight,
  FiBell,
  FiBookOpen,
  FiCircle,
  FiFileText,
  FiGlobe,
  FiGrid,
  FiHome,
  FiInbox,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShield,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const ticketManagementItems = [
  { label: 'Dashboard', icon: FiHome, path: '/support-desk' },
  { label: 'All Tickets', icon: FiGrid, path: '/support-desk/tickets', badge: '156' },
  { label: 'Queues', icon: FiLayers, path: '/support-desk/queues' },
  { label: 'Open Tickets', icon: FiCircle, badge: '45' },
  { label: 'Pending', icon: FiUsers, badge: '28' },
  { label: 'Resolved', icon: FiFileText },
  { label: 'Closed', icon: FiBookOpen },
  { label: 'SLA Management', icon: FiShield, path: '/support-desk/sla-management' },
]

const messageItems = [
  { label: 'All Channels', icon: FiGrid, badge: '', badgeTone: 'blue', path: '/support-desk/all-channels' },
  { label: 'Ticket Lifecycle', icon: FiLayers, badge: '87', badgeTone: 'red', path: '/support-desk/ticket-lifecycle' },
  { label: 'Unified Inbox', icon: FiInbox, badge: '156', badgeTone: 'blue', path: '/support-desk/omnichannel-inbox' },
  { label: 'Email', icon: FiMail, badge: '78', badgeTone: 'green', path: '/support-desk/unified-inbox' },
  { label: 'Chat', icon: FiMessageCircle, badge: '45', badgeTone: 'yellow' },
  { label: 'Social Media', icon: FiGlobe, badge: '33', badgeTone: 'purple', className: 'muted' },
]

const supportToolItems = [
  { label: 'Customers', icon: FiUsers },
  { label: 'Knowledge Base', icon: FiBookOpen, path: '/support-desk/knowledge-base' },
  { label: 'Reports', icon: FiGrid, path: '/support-desk/reports' },
  { label: 'Settings', icon: FiSettings, path: '/support-desk/settings' },
  { label: 'Automation', icon: FiZap, path: '/support-desk/automation', tone: 'orange' },
  { label: 'Automation Builder', icon: FiZap, path: '/automation-builder', className: 'builder-item' },
  { label: 'System Events', icon: FiActivity, path: '/support-desk/system-events', tone: 'purple' },
  { label: 'Audit Trail', icon: FiShield, path: '/support-desk/audit-trail' },
  { label: 'Notification Center', icon: FiBell, path: '/notification-center', tone: 'blue' },
  { label: 'Omnichannel Inbox', icon: FiInbox, path: '/support-desk/omnichannel-inbox' },
  { label: 'System Routing', icon: FiArrowRight, path: '/support-tools/system-routing' },
  { label: 'Queue Assignment', icon: FiLayers, path: '/support-desk/queue-assignment' },
  { label: 'Agent Assignment', icon: FiUsers, path: '/agent-assignment' },
]

function SupportSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActiveItem = (item) => {
    if (!item.path) {
      return false
    }
    return location.pathname === item.path
  }

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <aside className="support-sidebar">
      <div>
        <div className="support-brand-row">
          <span className="support-brand-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 12h8" />
              <path d="M12 8v8" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>
          <div>
            <p className="support-brand-title">HelpDesk Pro</p>
            <p className="support-brand-subtitle">Support Center</p>
          </div>
        </div>

        <div className="support-online-pill">
          <span className="support-online-dot" />
          <span>Online</span>
        </div>

        <button type="button" className="support-user-card">
          <img src="https://i.pravatar.cc/76?img=12" alt="Alex Morgan" />
          <div>
            <p>Alex Morgan</p>
            <span>Support Agent</span>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <nav className="support-nav-block" aria-label="Support navigation">
          <p className="support-nav-section-title">MESSAGES</p>


          {messageItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path && location.pathname === item.path;
            return (
              <button
                key={item.label}
                type="button"
                className={`support-nav-item badge-${item.badgeTone || 'blue'} ${item.className || ''} ${isActive ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
                {item.badge ? <em>{item.badge}</em> : null}
              </button>
            );
          })}

          <p className="support-nav-section-title">TICKET MANAGEMENT</p>

          {ticketManagementItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                className={`support-nav-item ${isActiveItem(item) ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
                {item.badge ? <em>{item.badge}</em> : null}
              </button>
            )
          })}

          <p className="support-nav-section-title">SUPPORT TOOLS</p>

          {supportToolItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                className={`support-nav-item ${item.tone ? `tone-${item.tone}` : ''} ${item.className || ''} ${isActiveItem(item) ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <button type="button" className="support-user-footer">
        <img src="https://i.pravatar.cc/48?img=12" alt="Alex Morgan" />
        <div>
          <p>Alex Morgan</p>
          <span>Agent</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </svg>
      </button>
    </aside>
  )
}

export default SupportSidebar
