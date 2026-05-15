import {
  FiArrowRight,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiCircle,
  FiClock,
  FiEdit2,
  FiFilter,
  FiMoreHorizontal,
  FiPlus,
  FiRefreshCw,
  FiTrash2,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import '../support/queue-assignment.css'
import '../support/all-tickets.css'

function QueueAssignment() {
  const metricCards = [
    {
      id: 1,
      value: '12',
      label: 'Active Queues',
      icon: FiUsers,
      color: 'blue',
      change: '+2',
    },
    {
      id: 2,
      value: '187',
      label: 'In Queue',
      icon: FiBell,
      color: 'orange',
      change: '+23',
    },
    {
      id: 3,
      value: '34',
      label: 'Available Agents',
      icon: FiCheck,
      color: 'green',
      change: '+12',
    },
    {
      id: 4,
      value: '4.2m',
      label: 'Avg Wait Time',
      icon: FiClock,
      color: 'purple',
      change: '-18%',
    },
  ]

  const queues = [
    {
      id: 1,
      name: 'Critical Issues',
      priority: 'High Priority',
      description: 'Urgent issues and security incidents requiring immediate attention',
      color: 'red',
      icon: FiZap,
      inQueue: 23,
      assigned: 8,
      timeSlot: '1.2m',
      agents: '8 / 12',
    },
    {
      id: 2,
      name: 'Technical Support',
      priority: 'Medium Priority',
      description: 'Technical troubleshooting and system support requests',
      color: 'blue',
      icon: FiUsers,
      inQueue: 56,
      assigned: 14,
      timeSlot: '3.8m',
      agents: '12 / 18',
    },
    {
      id: 3,
      name: 'Billing & Payments',
      priority: 'Medium Priority',
      description: 'Payment issues, invoices, and billing inquiries',
      color: 'green',
      icon: FiCheck,
      inQueue: 34,
      assigned: 9,
      timeSlot: '5.1m',
      agents: '8 / 10',
    },
    {
      id: 4,
      name: 'General Inquiries',
      priority: 'Low Priority',
      description: 'General questions and support requests',
      color: 'purple',
      icon: FiBell,
      inQueue: 74,
      assigned: 12,
      timeSlot: '8.7m',
      agents: '8 / 15',
    },
  ]

  const assignmentFlowSteps = [
    {
      id: 1,
      title: 'Ticket Enters Queue',
      description: 'Request detail extracted and queue routing checked',
      icon: FiCheckCircle,
      color: 'blue',
    },
    {
      id: 2,
      title: 'Priority Sorting',
      description: 'Prioritized by priority level and wait time',
      icon: FiFilter,
      color: 'purple',
    },
    {
      id: 3,
      title: 'Agent Availability Check',
      description: 'System verifies available qualified agents',
      icon: FiUsers,
      color: 'orange',
    },
    {
      id: 4,
      title: 'Assignment Complete',
      description: 'Agent assigned and agent notified',
      icon: FiCheckCircle,
      color: 'green',
    },
  ]

  const agents = [
    {
      id: 1,
      name: 'Alex Morgan',
      status: 'Available',
      avatar: 'https://i.pravatar.cc/40?img=12',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      status: 'Busy',
      avatar: 'https://i.pravatar.cc/40?img=13',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      status: 'Available',
      avatar: 'https://i.pravatar.cc/40?img=14',
    },
    {
      id: 4,
      name: 'Emma Davis',
      status: 'Away',
      avatar: 'https://i.pravatar.cc/40?img=15',
    },
  ]

  const assignmentRules = [
    { id: 1, name: 'Priority First', description: 'Highest priority tickets first always' },
    { id: 2, name: 'Load Balancing', description: 'Distribute tickets equally among agents' },
    { id: 3, name: 'Skill Matching', description: 'Assign based on agent expertise' },
    { id: 4, name: 'Wait Time Cap', description: 'Route if wait exceeds limit' },
  ]

  const recentAssignments = [
    { id: 1, ticket: 'TKT-4021', agent: 'Alex Morgan', time: '2m ago' },
    { id: 2, ticket: 'TKT-4020', agent: 'Sarah Chen', time: '4m ago' },
    { id: 3, ticket: 'TKT-4019', agent: 'Emma Davis', time: '6m ago' },
  ]

  return (
    <div className="support-tickets-layout">
      <SupportSidebar />
      <main className="queue-assignment-main">
        {/* Header */}
        <div className="queue-assignment-header">
          <div className="queue-assignment-header-content">
            <h1>Queue Assignment</h1>
            <p className="queue-assignment-breadcrumb">Home › Support Tools › Queue Assignment</p>
          </div>
          <div className="queue-assignment-header-actions">
            <button className="queue-assignment-btn-outline">
              <FiRefreshCw size={16} />
              Refresh Queues
            </button>
            <button className="queue-assignment-btn-primary">
              <FiPlus size={16} />
              Create Queue
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="queue-assignment-metrics">
          {metricCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.id} className={`queue-assignment-metric-card metric-${card.color}`}>
                <div className="metric-card-icon">
                  <Icon size={24} />
                </div>
                <div className="metric-card-content">
                  <div className="metric-card-value">{card.value}</div>
                  <div className="metric-card-label">{card.label}</div>
                </div>
                <div className={`metric-card-change change-${card.color}`}>{card.change}</div>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="queue-assignment-grid">
          {/* Left Column */}
          <div className="queue-assignment-left">
            {/* Support Queues */}
            <section className="queue-assignment-section">
              <div className="queue-assignment-section-header">
                <h2>Support Queues</h2>
                <div className="queue-assignment-section-tabs">
                  <button className="queue-tab-active">All Queues</button>
                  <button className="queue-tab">Sort by Priority</button>
                </div>
              </div>

              <div className="queue-assignment-queue-list">
                {queues.map((queue) => {
                  const Icon = queue.icon
                  return (
                    <div key={queue.id} className={`queue-item queue-color-${queue.color}`}>
                      <div className="queue-item-left">
                        <div className={`queue-item-icon icon-${queue.color}`}>
                          <Icon size={16} />
                        </div>
                        <div className="queue-item-content">
                          <h3>{queue.name}</h3>
                          <p className="queue-item-priority">{queue.priority}</p>
                          <p className="queue-item-description">{queue.description}</p>
                          <div className="queue-item-stats">
                            <span>{queue.inQueue} in queue</span>
                            <span>•</span>
                            <span>{queue.assigned} assigned</span>
                            <span>•</span>
                            <span>{queue.timeSlot}</span>
                            <span>•</span>
                            <span>{queue.agents}</span>
                          </div>
                        </div>
                      </div>
                      <div className="queue-item-actions">
                        <button className="queue-action-btn">
                          <FiCircle size={14} />
                          <span>Clear Queue</span>
                        </button>
                        <button className="queue-action-btn-primary">
                          <FiArrowRight size={14} />
                          <span>Pause Queue</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Assignment Flow */}
            <section className="queue-assignment-section">
              <h2>Assignment Flow</h2>
              <div className="queue-assignment-flow">
                {assignmentFlowSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.id}>
                      <div className={`flow-step flow-step-${step.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flow-step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                      {index < assignmentFlowSteps.length - 1 && (
                        <div className="flow-arrow">
                          <FiArrowRight size={16} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="queue-assignment-right">
            {/* Agent Availability */}
            <section className="queue-assignment-sidebar-section">
              <h3>Agent Availability</h3>
              <div className="agent-list">
                {agents.map((agent) => (
                  <div key={agent.id} className="agent-item">
                    <img src={agent.avatar} alt={agent.name} className="agent-avatar" />
                    <div className="agent-info">
                      <p className="agent-name">{agent.name}</p>
                      <p className={`agent-status status-${agent.status.toLowerCase()}`}>{agent.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All Agents</button>
            </section>

            {/* Assignment Rules */}
            <section className="queue-assignment-sidebar-section">
              <h3>Assignment Rules</h3>
              <div className="rules-list">
                {assignmentRules.map((rule) => (
                  <div key={rule.id} className="rule-item">
                    <div className="rule-icon">
                      <FiZap size={14} />
                    </div>
                    <div className="rule-content">
                      <p className="rule-name">{rule.name}</p>
                      <p className="rule-description">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Assignments */}
            <section className="queue-assignment-sidebar-section">
              <h3>Recent Assignments</h3>
              <div className="recent-list">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="recent-item">
                    <div className="recent-check">
                      <FiCheckCircle size={14} color="#22c55e" />
                    </div>
                    <div className="recent-content">
                      <p className="recent-ticket">{assignment.ticket}</p>
                      <p className="recent-agent">{assignment.agent}</p>
                    </div>
                    <p className="recent-time">{assignment.time}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default QueueAssignment
