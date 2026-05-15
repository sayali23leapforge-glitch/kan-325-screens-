import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight,
  FiBarChart2,
  FiDownload,
  FiEdit,
  FiPlus,
  FiTrendingDown,
  FiTrendingUp,
  FiUsers,
  FiMessageSquare,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import './system-routing.css'

export default function SystemRouting() {
  const navigate = useNavigate()

  const metrics = [
    {
      icon: '47',
      label: 'Active Rules',
      value: '47',
      trend: '+12%',
      trendType: 'up',
    },
    {
      label: 'Success Rate',
      value: '94%',
      trend: '+8%',
      trendType: 'up',
    },
    {
      label: 'Avg Response',
      value: '2.3s',
      trend: '-3%',
      trendType: 'down',
    },
    {
      label: 'Routed Today',
      value: '1,247',
      trend: '+15%',
      trendType: 'up',
    },
  ]

  const rules = [
    {
      name: 'High Priority Technical Issues',
      description: 'Route urgent technical tickets to senior agents',
      conditions: 'Priority: High + Category: Technical',
      routeTo: 'Senior Tech Team',
      successRate: '96%',
      status: 'active',
    },
    {
      name: 'Billing Inquiries',
      description: 'Direct billing-related issues to finance team',
      conditions: 'Category: Billing',
      routeTo: 'Finance Team',
      successRate: '98%',
      status: 'active',
    },
    {
      name: 'Premium Customer Support',
      description: 'Priority handling for premium tier customers',
      conditions: 'Customer Tier: Premium',
      routeTo: 'Premium Support',
      successRate: '92%',
      status: 'testing',
    },
    {
      name: 'Account Security Issues',
      description: 'Route security incidents to dedicated team',
      conditions: 'Keywords: Security, Account',
      routeTo: 'Security Team',
      successRate: '89%',
      status: 'inactive',
    },
  ]

  const flowSteps = [
    {
      label: 'Ticket Created',
      description: 'Initial ticket entry into the system',
      icon: 'FiPlus',
      color: 'blue',
    },
    {
      label: 'Rule Evaluation',
      description: 'System applies routing rules',
      icon: 'FiBarChart2',
      color: 'purple',
    },
    {
      label: 'Auto Assignment',
      description: 'Ticket routed to agent/team',
      icon: 'FiArrowRight',
      color: 'orange',
    },
    {
      label: 'Agent Notification',
      description: 'Agent receives ticket notification',
      icon: 'FiBell',
      color: 'green',
    },
  ]

  const performanceMetrics = [
    { label: 'Routing Accuracy', value: 94, color: 'green' },
    { label: 'Response Time', value: 68, color: 'blue' },
    { label: 'Agent Satisfaction', value: 87, color: 'purple' },
    { label: 'Rule Coverage', value: 91, color: 'orange' },
  ]

  const teamDistribution = [
    { name: 'Technical Support', percentage: 42 },
    { name: 'General Support', percentage: 28 },
    { name: 'Billing Team', percentage: 18 },
    { name: 'Premium Support', percentage: 12 },
  ]

  const quickActions = [
    { label: 'Create New Rule', icon: 'FiPlus' },
    { label: 'Export Configuration', icon: 'FiDownload' },
    { label: 'View Analytics', icon: 'FiBarChart2' },
    { label: 'Routing History', icon: 'FiMessageSquare' },
  ]

  const recentActivity = [
    { action: 'Rule activated', time: '2 mins ago' },
    { action: 'New rule created', time: '1 hour ago' },
    { action: 'Rule modified', time: '3 hours ago' },
    { action: 'Rule deactivated', time: '5 hours ago' },
  ]

  const getStatusColor = (status) => {
    if (status === 'active') return 'green'
    if (status === 'testing') return 'yellow'
    if (status === 'inactive') return 'red'
    return 'gray'
  }

  return (
    <div style={{ display: 'flex' }}>
      <SupportSidebar />
      <main className="sr-main">
      <header className="sr-header">
        <div>
          <h1>System Routing</h1>
          <div className="sr-breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Support Tools</span>
            <span>/</span>
            <span>System Routing</span>
          </div>
        </div>
        <div className="sr-header-actions">
          <button className="sr-btn-outline">
            <FiDownload size={14} />
            Export Rules
          </button>
          <button className="sr-btn-primary">
            <FiPlus size={14} />
            Add Rule
          </button>
        </div>
      </header>

      <div className="sr-content">
        {/* Metric Cards */}
        <div className="sr-metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="sr-metric-card">
              {metric.icon && (
                <div className="sr-metric-icon">
                  <span>{metric.icon}</span>
                </div>
              )}
              <div className="sr-metric-content">
                <p className="sr-metric-value">{metric.value}</p>
                <p className="sr-metric-label">{metric.label}</p>
              </div>
              <div className={`sr-metric-trend ${metric.trendType}`}>
                {metric.trendType === 'up' ? (
                  <FiTrendingUp size={12} />
                ) : (
                  <FiTrendingDown size={12} />
                )}
                <span>{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sr-main-grid">
          {/* Left Section */}
          <div className="sr-left-section">
            {/* Routing Rules */}
            <div className="sr-card">
              <div className="sr-card-header">
                <h3>Routing Rules</h3>
                <div className="sr-card-controls">
                  <select className="sr-dropdown">
                    <option>All Rules</option>
                    <option>Active</option>
                    <option>Testing</option>
                    <option>Inactive</option>
                  </select>
                  <button className="sr-card-btn">
                    <FiPlus size={12} />
                    New Rule
                  </button>
                </div>
              </div>
              <div className="sr-rules-list">
                {rules.map((rule, idx) => (
                  <div key={idx} className="sr-rule-item">
                    <div
                      className={`sr-rule-status-dot ${getStatusColor(
                        rule.status
                      )}`}
                    />
                    <div className="sr-rule-content">
                      <div className="sr-rule-header">
                        <h4>{rule.name}</h4>
                        <span className={`sr-rule-badge ${rule.status}`}>
                          {rule.status.charAt(0).toUpperCase() +
                            rule.status.slice(1)}
                        </span>
                      </div>
                      <p className="sr-rule-description">{rule.description}</p>
                      <div className="sr-rule-details">
                        <div className="sr-rule-detail">
                          <span>Conditions:</span>
                          <p>{rule.conditions}</p>
                        </div>
                        <div className="sr-rule-detail">
                          <span>Route To:</span>
                          <p>{rule.routeTo}</p>
                        </div>
                        <div className="sr-rule-detail">
                          <span>Success Rate:</span>
                          <p>{rule.successRate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="sr-rule-actions">
                      <button>
                        <FiEdit size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Routing Flow Diagram */}
            <div className="sr-card sr-flow-card">
              <h3>Routing Flow Diagram</h3>
              <div className="sr-flow-steps">
                {flowSteps.map((step, idx) => (
                  <div key={idx} className="sr-flow-step">
                    <div className={`sr-flow-icon sr-flow-${step.color}`}>
                      {step.color === 'blue' && <FiPlus size={16} />}
                      {step.color === 'purple' && <FiBarChart2 size={16} />}
                      {step.color === 'orange' && <FiArrowRight size={16} />}
                      {step.color === 'green' && <FiMessageSquare size={16} />}
                    </div>
                    <div className="sr-flow-content">
                      <p className="sr-flow-label">{step.label}</p>
                      <p className="sr-flow-description">{step.description}</p>
                    </div>
                    {idx < flowSteps.length - 1 && (
                      <div className="sr-flow-arrow">
                        <FiArrowRight size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="sr-right-section">
            {/* Performance Metrics */}
            <div className="sr-card sr-sidebar-card">
              <h3>Performance Metrics</h3>
              <div className="sr-metrics-list">
                {performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="sr-metric-bar">
                    <div className="sr-metric-bar-header">
                      <span>{metric.label}</span>
                      <span className="sr-metric-bar-value">{metric.value}%</span>
                    </div>
                    <div className="sr-metric-bar-track">
                      <div
                        className={`sr-metric-bar-fill sr-${metric.color}`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Distribution */}
            <div className="sr-card sr-sidebar-card">
              <h3>Team Distribution</h3>
              <div className="sr-team-list">
                {teamDistribution.map((team, idx) => (
                  <div key={idx} className="sr-team-item">
                    <div className="sr-team-info">
                      <FiUsers size={12} />
                      <span>{team.name}</span>
                    </div>
                    <span className="sr-team-percentage">{team.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="sr-card sr-sidebar-card">
              <h3>Quick Actions</h3>
              <div className="sr-actions-list">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    className="sr-action-btn"
                    onClick={() => navigate('/support-tools/system-routing')}
                  >
                    {action.icon === 'FiPlus' && <FiPlus size={12} />}
                    {action.icon === 'FiDownload' && <FiDownload size={12} />}
                    {action.icon === 'FiBarChart2' && <FiBarChart2 size={12} />}
                    {action.icon === 'FiMessageSquare' && <FiMessageSquare size={12} />}
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="sr-card sr-sidebar-card">
              <h3>Recent Activity</h3>
              <div className="sr-activity-list">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="sr-activity-item">
                    <div className="sr-activity-dot" />
                    <div className="sr-activity-content">
                      <p>{activity.action}</p>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}
