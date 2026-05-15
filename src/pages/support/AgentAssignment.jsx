import { useState } from 'react'
import {
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiRefreshCw,
  FiUsers,
  FiX,
  FiAlertCircle,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import '../support/agent-assignment.css'
import '../support/all-tickets.css'

function AgentAssignment() {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [newStatus, setNewStatus] = useState('assigned')
  const [statusNote, setStatusNote] = useState('')

  const statusOptions = [
    { value: 'assigned', label: 'Assigned', hint: 'Assign to agent', tone: 'blue' },
    { value: 'in-progress', label: 'In Progress', hint: 'Being worked on', tone: 'yellow' },
    { value: 'escalated', label: 'Escalated', hint: 'Escalate to manager', tone: 'purple' },
    { value: 'pending', label: 'Pending', hint: 'Waiting for response', tone: 'orange' },
    { value: 'resolved', label: 'Resolved', hint: 'Issue resolved', tone: 'green' },
  ]

  const handleOpenStatusModal = (assignment) => {
    setSelectedAssignment(assignment)
    setIsStatusModalOpen(true)
  }

  const handleCloseStatusModal = () => {
    setIsStatusModalOpen(false)
    setStatusNote('')
    setNewStatus('assigned')
    setSelectedAssignment(null)
  }

  const handleUpdateStatus = () => {
    if (!selectedAssignment) {
      return
    }

    console.log('Status updated', {
      ticketId: selectedAssignment.ticketId,
      newStatus,
      note: statusNote,
    })

    handleCloseStatusModal()
  }

  const statsCards = [
    {
      id: 1,
      value: '34',
      label: 'Available Agents',
      icon: FiUsers,
      color: 'green',
      change: '+5',
    },
    {
      id: 2,
      value: '18',
      label: 'Busy Agents',
      icon: FiBell,
      color: 'red',
      change: '+3',
    },
    {
      id: 3,
      value: '142',
      label: 'Assigned Today',
      icon: FiCheck,
      color: 'blue',
      change: '+23',
    },
    {
      id: 4,
      value: '1.8m',
      label: 'Avg Assignment Time',
      icon: FiClock,
      color: 'purple',
      change: '-12%',
    },
  ]

  const pendingAssignments = [
    {
      id: 1,
      ticketId: 'TKT-8923',
      priority: 'Critical',
      priorityColor: 'red',
      waitTime: '5m wait',
      description: 'Server outage affecting database connectivity',
      customer: 'John Smith',
      queue: 'Critical Issues',
      customerAvatar: 'https://i.pravatar.cc/32?img=15',
    },
    {
      id: 2,
      ticketId: 'TKT-8022',
      priority: 'Medium',
      priorityColor: 'blue',
      waitTime: '12m wait',
      description: 'Email configuration not working properly',
      customer: 'Sarah Wilson',
      queue: 'Technical Support',
      customerAvatar: 'https://i.pravatar.cc/32?img=16',
    },
    {
      id: 3,
      ticketId: 'TKT-8923',
      priority: 'Low',
      priorityColor: 'green',
      waitTime: '18m wait',
      description: 'Question about billing cycle',
      customer: 'Mike Brown',
      queue: 'Billing Support',
      customerAvatar: 'https://i.pravatar.cc/32?img=17',
    },
    {
      id: 4,
      ticketId: 'TKT-8977',
      priority: 'Critical',
      priorityColor: 'red',
      waitTime: '3m wait',
      description: 'Account locked - cannot login to account',
      customer: 'Emma Davis',
      queue: 'Security Issues',
      customerAvatar: 'https://i.pravatar.cc/32?img=18',
    },
  ]

  const agentWorkload = [
    {
      id: 1,
      name: 'Alex Morgan',
      avatar: 'https://i.pravatar.cc/40?img=12',
      status: 'Available',
      assigned: 3,
      capacity: 10,
      percentage: 30,
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/40?img=14',
      status: 'Busy',
      assigned: 8,
      capacity: 10,
      percentage: 80,
    },
    {
      id: 3,
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/40?img=13',
      status: 'Available',
      assigned: 5,
      capacity: 10,
      percentage: 50,
    },
    {
      id: 4,
      name: 'Emma Davis',
      avatar: 'https://i.pravatar.cc/40?img=15',
      status: 'Available',
      assigned: 2,
      capacity: 10,
      percentage: 20,
    },
    {
      id: 5,
      name: 'David Lee',
      avatar: 'https://i.pravatar.cc/40?img=19',
      status: 'Busy',
      assigned: 10,
      capacity: 10,
      percentage: 100,
    },
  ]

  const recentAssignments = [
    { id: 1, ticketId: 'TKT-8920', agent: 'Alex Morgan', time: '2 min ago', status: 'Success' },
    { id: 2, ticketId: 'TKT-8919', agent: 'Sarah Chen', time: '4 min ago', status: 'Success' },
    { id: 3, ticketId: 'TKT-8918', agent: 'Mike Johnson', time: '6 min ago', status: 'Success' },
    { id: 4, ticketId: 'TKT-8917', agent: 'Emma Davis', time: '9 min ago', status: 'Success' },
  ]

  const queueStats = [
    { id: 1, name: 'Technical Support', value: '12', icon: FiCheck, color: 'green' },
    { id: 2, name: 'General Support', value: '28', icon: FiBell, color: 'blue' },
    { id: 3, name: 'Billing Support', value: '15', icon: FiCheck, color: 'green' },
    { id: 4, name: 'Premium Support', value: '21', icon: FiBell, color: 'purple' },
  ]

  return (
    <div className="support-tickets-layout">
      <SupportSidebar />
      <main className="agent-assignment-main">
        {/* Header */}
        <div className="agent-assignment-header">
          <div className="agent-assignment-header-content">
            <h1>Agent Assignment</h1>
            <p className="agent-assignment-breadcrumb">Home › Support Tools › Agent Assignment</p>
          </div>
          <div className="agent-assignment-header-actions">
            <button className="agent-assignment-btn-outline">
              <FiRefreshCw size={16} />
              Refresh
            </button>
            <button className="agent-assignment-btn-primary">
              <FiCheck size={16} />
              Assign Agent
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="agent-assignment-stats">
          {statsCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.id} className={`agent-assignment-stat-card stat-${card.color}`}>
                <div className="stat-card-icon">
                  <Icon size={24} />
                </div>
                <div className="stat-card-content">
                  <div className="stat-card-value">{card.value}</div>
                  <div className="stat-card-label">{card.label}</div>
                </div>
                <div className={`stat-card-change change-${card.color}`}>{card.change}</div>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="agent-assignment-grid">
          {/* Left: Pending Assignments */}
          <div className="agent-assignment-left">
            <section className="agent-assignment-section">
              <div className="agent-assignment-section-header">
                <h2>Pending Assignments</h2>
                <div className="agent-assignment-tabs">
                  <button className="tab-button active">All Queues</button>
                  <button className="tab-button">Sort by Wait Time</button>
                </div>
              </div>

              <div className="pending-assignments-list">
                {pendingAssignments.map((assignment, index) => (
                  <div
                    key={assignment.id}
                    className="pending-assignment-row"
                    onClick={() => handleOpenStatusModal(assignment)}
                  >
                    <div className="assignment-row-left">
                      <div className="assignment-ticket-header">
                        <div className="assignment-ticket-id">{assignment.ticketId}</div>
                        <span className={`assignment-priority-badge priority-${assignment.priorityColor}`}>
                          {assignment.priority}
                        </span>
                        <span className="assignment-wait-badge">{assignment.waitTime}</span>
                      </div>
                      <p className="assignment-description">{assignment.description}</p>
                      <div className="assignment-meta">
                        <img src={assignment.customerAvatar} alt={assignment.customer} />
                        <span>{assignment.customer}</span>
                        <span>•</span>
                        <span>{assignment.queue}</span>
                      </div>
                    </div>

                    <div className="assignment-row-right" onClick={(event) => event.stopPropagation()}>
                      <div className="assignment-select-wrapper">
                        <select className="assignment-select" defaultValue="" onClick={(event) => event.stopPropagation()}>
                          <option value="">Select Agent</option>
                          <option value="alex">Alex Morgan</option>
                          <option value="sarah">Sarah Chen</option>
                          <option value="mike">Mike Johnson</option>
                          <option value="emma">Emma Davis</option>
                        </select>
                      </div>
                      <button className="assignment-assign-btn" onClick={(event) => event.stopPropagation()}>Assign</button>
                    </div>

                    {index < pendingAssignments.length - 1 && <div className="assignment-divider" />}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Agent Workload */}
          <aside className="agent-assignment-right">
            <section className="agent-assignment-section">
              <h2>Agent Workload</h2>
              <div className="agent-workload-list">
                {agentWorkload.map((agent) => (
                  <div key={agent.id} className="agent-workload-card">
                    <div className="agent-workload-header">
                      <img src={agent.avatar} alt={agent.name} className="agent-workload-avatar" />
                      <div className="agent-workload-info">
                        <p className="agent-workload-name">{agent.name}</p>
                        <span className={`agent-workload-status status-${agent.status.toLowerCase()}`}>
                          {agent.status}
                        </span>
                      </div>
                    </div>

                    <div className="agent-workload-progress">
                      <div className="progress-bar">
                        <div
                          className={`progress-fill fill-${agent.status.toLowerCase()}`}
                          style={{ width: `${agent.percentage}%` }}
                        />
                      </div>
                      <span className="progress-label">
                        {agent.assigned}/{agent.capacity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Assignments */}
            <section className="agent-assignment-section">
              <h2>Recent Assignments</h2>
              <div className="recent-assignments-list">
                {recentAssignments.map((item) => (
                  <div key={item.id} className="recent-assignment-item">
                    <FiCheckCircle size={16} color="#22c55e" />
                    <div className="recent-assignment-content">
                      <p className="recent-assignment-ticket">{item.ticketId}</p>
                      <p className="recent-assignment-agent">{item.agent}</p>
                    </div>
                    <span className="recent-assignment-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Queue Statistics */}
            <section className="agent-assignment-section">
              <h2>Queue Statistics</h2>
              <div className="queue-stats-grid">
                {queueStats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.id} className={`queue-stat-item stat-color-${stat.color}`}>
                      <Icon size={20} />
                      <p>{stat.name}</p>
                      <strong>{stat.value}</strong>
                    </div>
                  )
                })}
              </div>
            </section>
          </aside>
        </div>

        {isStatusModalOpen && selectedAssignment && (
          <div className="change-status-overlay" onClick={handleCloseStatusModal}>
            <div className="change-status-modal" onClick={(event) => event.stopPropagation()}>
              <div className="change-status-header">
                <h3>Change Status</h3>
                <button
                  type="button"
                  className="change-status-close"
                  aria-label="Close"
                  onClick={handleCloseStatusModal}
                >
                  <FiX size={16} />
                </button>
              </div>

              <div className="change-status-section">
                <p className="change-status-label">Ticket</p>
                <div className="change-status-ticket-box">
                  <p className="change-status-ticket-id">{selectedAssignment.ticketId}</p>
                  <p className="change-status-ticket-desc">{selectedAssignment.description}</p>
                </div>
              </div>

              <div className="change-status-section">
                <p className="change-status-label">Current Status</p>
                <div className="change-status-current-row">
                  <span className="change-status-chip critical">Critical</span>
                  <span className="change-status-chip unassigned">Unassigned</span>
                </div>
              </div>

              <div className="change-status-section">
                <p className="change-status-label">New Status</p>
                <div className="change-status-options">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`change-status-option ${newStatus === option.value ? 'selected' : ''}`}
                      onClick={() => setNewStatus(option.value)}
                    >
                      <span className="change-status-option-left">
                        <span className={`change-status-radio ${newStatus === option.value ? 'checked' : ''}`} />
                        <span className={`change-status-option-chip tone-${option.tone}`}>{option.label}</span>
                        <span className="change-status-option-hint">{option.hint}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="change-status-section">
                <p className="change-status-label">Status Change Note</p>
                <textarea
                  className="change-status-note"
                  placeholder="Add a note about this status change..."
                  value={statusNote}
                  onChange={(event) => setStatusNote(event.target.value)}
                />
              </div>

              <div className="change-status-actions">
                <button type="button" className="change-status-cancel" onClick={handleCloseStatusModal}>
                  Cancel
                </button>
                <button type="button" className="change-status-update" onClick={handleUpdateStatus}>
                  Update Status
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default AgentAssignment
