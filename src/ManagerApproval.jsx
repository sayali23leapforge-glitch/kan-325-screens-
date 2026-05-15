import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiChevronRight, FiCheck, FiX, FiEye, FiCheckCircle, FiXCircle, FiMessageSquare, FiCheckSquare } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './manager-approval.css'

const statCards = [
  {
    id: 1,
    title: 'Pending Approvals',
    value: '8',
    icon: FiBell,
    color: 'orange',
    badge: 'Urgent',
  },
  {
    id: 2,
    title: 'Approved This Week',
    value: '24',
    change: '+15%',
    icon: FiCheckCircle,
    color: 'green',
  },
  {
    id: 3,
    title: 'Avg Response Time',
    value: '2.1h',
    icon: FiMessageSquare,
    color: 'blue',
  },
  {
    id: 4,
    title: 'Awaiting My Review',
    value: '5',
    icon: FiCheckSquare,
    color: 'purple',
  },
]

const pendingApprovals = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    department: 'Engineering',
    submittedTime: '2 hours ago',
    title: 'Onboarding Documents Review',
    description: 'Background check and contract approval required for new hire starting Monday.',
    priority: 'High',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 2,
    name: 'Mark Wilson',
    role: 'Product Manager',
    department: 'Product',
    submittedTime: '4 hours ago',
    title: 'Equipment Budget Approval',
    description: 'Request for additional MacBook Pro and monitor setup for new team member.',
    priority: 'Medium',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UX Designer',
    department: 'Design',
    submittedTime: '6 hours ago',
    title: 'Training Program Enrollment',
    description: 'Request to enroll in Advanced UX Design certification program - $2,500.',
    priority: 'Low',
    avatar: 'https://placehold.co/36x36',
  },
]

const quickActions = [
  {
    id: 1,
    title: 'Bulk Approve',
    description: 'Approve multiple items',
    icon: FiCheckSquare,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Set Reminders',
    description: 'For pending reviews',
    icon: FiBell,
    color: 'orange',
  },
  {
    id: 3,
    title: 'Delegate Review',
    description: 'Assign to team member',
    icon: FiCheckCircle,
    color: 'purple',
  },
]

const recentActivity = [
  {
    id: 1,
    icon: FiCheckCircle,
    text: 'Approved leave request',
    user: 'Maria Rodriguez',
    time: '4 hours ago',
    color: 'green',
  },
  {
    id: 2,
    icon: FiXCircle,
    text: 'Rejected budget request',
    user: 'David Chen',
    time: '2 hours ago',
    color: 'red',
  },
  {
    id: 3,
    icon: FiMessageSquare,
    text: 'Added reviewer comment',
    user: 'Alex Johnson',
    time: '1 hour ago',
    color: 'blue',
  },
  {
    id: 4,
    icon: FiCheckCircle,
    text: 'Approved onboarding',
    user: 'Maria Rodriguez',
    time: '4 hours ago',
    color: 'green',
  },
]

function ManagerApproval({ onSwitchModule }) {
  const navigate = useNavigate()
  const [approvals, setApprovals] = useState(pendingApprovals)

  const handleApprove = (id) => {
    setApprovals(approvals.filter((approval) => approval.id !== id))
    navigate('/hrm/onboarding/it-provisioning')
  }

  const handleReject = (id) => {
    setApprovals(approvals.filter((approval) => approval.id !== id))
  }

  return (
    <div className="ma-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="ma-main">
        <div className="ma-content">
          <header className="ma-header">
            <div>
              <h1>Manager Approval</h1>
              <nav>
                <a href="/">Home</a>
                <FiChevronRight size={11} />
                <a href="/hrm/onboarding-2">HRM</a>
                <FiChevronRight size={11} />
                <span>Manager Approval</span>
              </nav>
            </div>

            <button className="ma-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>2</span>
            </button>
          </header>

          <div className="ma-stats-grid">
            {statCards.map((card) => {
              const IconComponent = card.icon
              return (
                <div key={card.id} className={`ma-stat-card ma-stat-${card.color}`}>
                  <div className="ma-stat-header">
                    <span className="ma-stat-icon">
                      <IconComponent size={18} />
                    </span>
                    {card.badge && <span className="ma-stat-badge">{card.badge}</span>}
                    {card.change && <span className="ma-stat-change">{card.change}</span>}
                  </div>
                  <div className="ma-stat-value">{card.value}</div>
                  <div className="ma-stat-label">{card.title}</div>
                </div>
              )
            })}
          </div>

          <div className="ma-main-grid">
            <section className="ma-panel-left">
              <div className="ma-panel-header">
                <h3>Pending Approvals</h3>
                <div className="ma-filter-controls">
                  <select className="ma-filter">
                    <option>All Types</option>
                    <option>Onboarding</option>
                    <option>Budget</option>
                    <option>Training</option>
                  </select>
                  <a href="#" className="ma-view-all">
                    View All
                  </a>
                </div>
              </div>

              <div className="ma-approvals-list">
                {approvals.map((approval) => (
                  <div key={approval.id} className="ma-approval-item">
                    <img src={approval.avatar} alt={approval.name} className="ma-avatar" />

                    <div className="ma-approval-content">
                      <div className="ma-approval-header">
                        <div>
                          <h4>{approval.name}</h4>
                          <p>{approval.role + ' • ' + approval.department}</p>
                          <span className="ma-submitted-time">Submitted {approval.submittedTime}</span>
                        </div>
                        <span className={`ma-priority ${approval.priority.toLowerCase()}`}>
                          {approval.priority}
                        </span>
                      </div>

                      <div className="ma-approval-title">{approval.title}</div>
                      <div className="ma-approval-description">{approval.description}</div>

                      <div className="ma-approval-actions">
                        <button
                          className="ma-btn approve"
                          onClick={() => handleApprove(approval.id)}
                        >
                          <FiCheck size={14} />
                          Approve
                        </button>
                        <button
                          className="ma-btn reject"
                          onClick={() => handleReject(approval.id)}
                        >
                          <FiX size={14} />
                          Reject
                        </button>
                        <button className="ma-btn outline">
                          <FiEye size={14} />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="ma-panel-right">
              <div className="ma-quick-actions">
                <h3>Quick Actions</h3>
                <div className="ma-action-cards">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon
                    return (
                      <div key={action.id} className={`ma-action-card ma-action-${action.color}`}>
                        <div className="ma-action-icon">
                          <IconComponent size={18} />
                        </div>
                        <div className="ma-action-text">
                          <h4>{action.title}</h4>
                          <p>{action.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="ma-recent-activity">
                <h3>Recent Activity</h3>
                <div className="ma-activity-list">
                  {recentActivity.map((activity) => {
                    const IconComponent = activity.icon
                    return (
                      <div key={activity.id} className="ma-activity-item">
                        <div className={`ma-activity-icon ma-activity-${activity.color}`}>
                          <IconComponent size={14} />
                        </div>
                        <div className="ma-activity-content">
                          <div className="ma-activity-text">
                            {activity.text}
                            <span className="ma-activity-user">{activity.user}</span>
                          </div>
                          <div className="ma-activity-time">{activity.time}</div>
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

export default ManagerApproval
