import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiChevronRight,
  FiPlus,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiMonitor,
  FiMousePointer,
  FiSmartphone,
  FiTablet,
  FiEdit3,
  FiPackage,
  FiTruck,
  FiRefreshCw,
  FiCheck,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './it-provisioning.css'

const statCards = [
  { id: 1, title: 'Pending Requests', value: '12', chip: 'Active', color: 'blue', icon: FiBox },
  { id: 2, title: 'Completed This Month', value: '38', chip: '+18%', color: 'green', icon: FiCheckCircle },
  { id: 3, title: 'Avg. Setup Time', value: '1.5d', chip: '1.5d', color: 'orange', icon: FiClock },
  { id: 4, title: 'Total Assets', value: '247', chip: 'Low', color: 'purple', icon: FiLayers },
]

const requests = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    dept: 'Engineering',
    startDate: 'Dec 15, 2024',
    badge: { text: 'Urgent', tone: 'urgent' },
    packageName: 'Developer Pro',
    equipment: [
      { name: 'MacBook Pro 16" M3', icon: FiMonitor },
      { name: 'Dell 27" 4K Monitor', icon: FiMonitor },
      { name: 'Mechanical Keyboard', icon: FiEdit3 },
      { name: 'Wireless Mouse', icon: FiMousePointer },
    ],
    actions: [
      { label: 'Approve', tone: 'green', icon: FiCheck },
      { label: 'Order', tone: 'blue', icon: FiPackage },
      { label: 'Details', tone: 'ghost' },
    ],
  },
  {
    id: 2,
    name: 'Mark Wilson',
    role: 'Product Manager',
    dept: 'Product',
    startDate: 'Dec 18, 2024',
    badge: { text: 'In Progress', tone: 'progress' },
    packageName: 'Business Standard',
    equipment: [
      { name: 'MacBook Air M2', icon: FiMonitor },
      { name: 'Noise Canceling Headset', icon: FiEdit3 },
      { name: 'iPhone 15 Pro', icon: FiSmartphone },
      { name: 'USB-C Adapter Kit', icon: FiEdit3 },
    ],
    info: { text: 'Equipment ordered - ETA: Dec 16', tone: 'info', icon: FiClock },
    actions: [
      { label: 'Track Order', tone: 'orange', icon: FiTruck },
      { label: 'Details', tone: 'ghost' },
    ],
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UX Designer',
    dept: 'Design',
    startDate: 'Dec 20, 2024',
    badge: { text: 'Completed', tone: 'completed' },
    packageName: 'Creative Suite',
    equipment: [
      { name: 'MacBook Pro 14" M3', icon: FiMonitor },
      { name: 'iPad Pro 12.9"', icon: FiTablet },
      { name: 'Apple Pencil Pro', icon: FiEdit3 },
      { name: 'LG 27" 5K Display', icon: FiMonitor },
    ],
    info: { text: 'All equipment delivered & configured', tone: 'success', icon: FiCheckCircle },
    actions: [{ label: 'View Details', tone: 'ghost' }],
  },
]

const quickActions = [
  { id: 1, title: 'Bulk Order', description: 'Order multiple items', tone: 'blue', icon: FiBox },
  { id: 2, title: 'View Inventory', description: 'Check stock levels', tone: 'purple', icon: FiLayers },
  { id: 3, title: 'Generate Report', description: 'Asset allocation report', tone: 'orange', icon: FiEdit3 },
  { id: 4, title: 'Asset Return', description: 'Process equipment return', tone: 'green', icon: FiRefreshCw },
]

const recentActivity = [
  { id: 1, icon: FiCheckCircle, text: 'Equipment delivered', meta: 'Emily Davis • 2 hours ago', tone: 'green' },
  { id: 2, icon: FiTruck, text: 'Order shipped', meta: 'Mark Wilson • 5 hours ago', tone: 'blue' },
  { id: 3, icon: FiEdit3, text: 'New request created', meta: 'Sarah Johnson • 1 day ago', tone: 'orange' },
  { id: 4, icon: FiLayers, text: 'Inventory updated', meta: 'System • 2 days ago', tone: 'purple' },
]

function ITProvisioning({ onSwitchModule }) {
  const navigate = useNavigate()
  const [items] = useState(requests)

  return (
    <div className="ip-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="ip-main">
        <div className="ip-content">
          <header className="ip-header">
            <div>
              <h1>IT Provisioning</h1>
              <nav>
                <a href="/">Home</a>
                <FiChevronRight size={11} />
                <a href="/hrm/onboarding-2">HRM</a>
                <FiChevronRight size={11} />
                <span>IT Provisioning</span>
              </nav>
            </div>
            <div className="ip-header-actions">
              <button className="ip-notify" aria-label="Notifications">
                <FiBell size={16} />
                <span>3</span>
              </button>
              <button className="ip-new-request">
                <FiPlus size={14} />
                New Request
              </button>
            </div>
          </header>

          <div className="ip-stats-grid">
            {statCards.map((card) => {
              const IconComponent = card.icon
              return (
                <div key={card.id} className={`ip-stat-card ip-stat-${card.color}`}>
                  <div className="ip-stat-header">
                    <span className="ip-stat-icon">
                      <IconComponent size={18} />
                    </span>
                    <span className={`ip-stat-chip ip-chip-${card.color}`}>{card.chip}</span>
                  </div>
                  <div className="ip-stat-value">{card.value}</div>
                  <div className="ip-stat-label">{card.title}</div>
                </div>
              )
            })}
          </div>

          <div className="ip-main-grid">
            <section className="ip-panel-left">
              <div className="ip-panel-header">
                <h3>Provisioning Requests</h3>
                <div className="ip-filter-controls">
                  <select className="ip-filter">
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                  <a href="#" className="ip-view-all">
                    View All
                  </a>
                </div>
              </div>

              <div className="ip-requests-list">
                {items.map((request) => (
                  <div key={request.id} className="ip-request-item">
                    <img src={request.avatar} alt={request.name} className="ip-avatar" />

                    <div className="ip-request-content">
                      <div className="ip-request-header">
                        <div>
                          <h4>{request.name}</h4>
                          <p>{request.role + ' • ' + request.dept}</p>
                          <span className="ip-start-date">Start Date: {request.startDate}</span>
                        </div>
                        <span className={`ip-status ip-status-${request.badge.tone}`}>{request.badge.text}</span>
                      </div>

                      <div className="ip-package-box">
                        <h5>Equipment Package: {request.packageName}</h5>
                        <div className="ip-equipment-list">
                        {request.equipment.map((eq, idx) => (
                          <div key={idx} className="ip-equipment-item">
                            <span className="ip-eq-icon"><eq.icon size={12} /></span>
                            <span className="ip-eq-name">{eq.name}</span>
                          </div>
                        ))}
                        </div>
                      </div>

                      {request.info && (
                        <div className={`ip-info-box ip-info-${request.info.tone}`}>
                          <request.info.icon size={12} />
                          <span>{request.info.text}</span>
                        </div>
                      )}

                      <div className="ip-request-actions">
                        {request.actions.map((action, idx) => (
                          <button
                            key={idx}
                            className={`ip-btn ip-btn-${action.tone}`}
                            onClick={() => {
                              if (action.label === 'Approve') {
                                navigate('/hrm/onboarding/complete')
                              }
                            }}
                          >
                            {action.icon ? <action.icon size={13} /> : null}
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="ip-panel-right">
              <div className="ip-quick-actions">
                <h3>Quick Actions</h3>
                <div className="ip-action-cards">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon
                    return (
                      <div key={action.id} className={`ip-action-card ip-action-${action.tone}`}>
                        <div className="ip-action-icon">
                          <IconComponent size={18} />
                        </div>
                        <div className="ip-action-text">
                          <h4>{action.title}</h4>
                          <p>{action.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="ip-recent-activity">
                <h3>Recent Activity</h3>
                <div className="ip-activity-list">
                  {recentActivity.map((activity) => {
                    const IconComponent = activity.icon
                    return (
                      <div key={activity.id} className="ip-activity-item">
                        <div className={`ip-activity-icon ip-activity-${activity.tone}`}>
                          <IconComponent size={14} />
                        </div>
                        <div className="ip-activity-content">
                          <div className="ip-activity-text">{activity.text}</div>
                          <div className="ip-activity-time">{activity.meta}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ITProvisioning
