import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FiBell, FiArrowLeft, FiSettings, FiTool } from 'react-icons/fi'
import './productDetails.css'

const PRODUCT_DETAILS = {
  hrm: {
    name: 'Human Resource Management',
    status: 'Active',
    statusColor: 'green',
    userCount: '247 Active Users',
    icon: '◉',
    iconTone: 'purple',
    description: 'Human Resource Management (HRM) is a comprehensive suite designed to streamline employee lifecycle management. From recruitment and onboarding to performance tracking and payroll management, our HRM solution provides complete control over your workforce. With advanced analytics and real-time reporting capabilities, you can make data-driven decisions to optimize HR operations and maximize employee satisfaction.',
    features: [
      { title: 'Employee Onboarding', subtitle: 'Streamlined hiring process', icon: '◉', color: 'purple' },
      { title: 'Payroll Management', subtitle: 'Automated compensation', icon: '◉', color: 'green' },
      { title: 'Attendance Tracking', subtitle: 'Real-time monitoring', icon: '◉', color: 'blue' },
      { title: 'Performance Review', subtitle: '360-degree feedback system', icon: '◉', color: 'orange' }
    ],
    metrics: [
      { value: '247', label: 'Active Users' },
      { value: '1,847', label: 'Transactions' },
      { value: '98.5%', label: 'Uptime' },
      { value: '4.8', label: 'User Rating' }
    ],
    quickStats: [
      { label: 'License Type', value: 'Enterprise' },
      { label: 'Deployment', value: 'Cloud' },
      { label: 'Version', value: 'v2.4.1' },
      { label: 'Last Updated', value: '2 days ago' },
      { label: 'Support Level', value: 'Premium' }
    ],
    recentActivity: [
      { text: 'System audit created', timestamp: '2 minutes ago', color: 'blue' },
      { text: 'Support ticket opened', timestamp: '1 hour ago', color: 'yellow' },
      { text: 'New user onboarded', timestamp: '3 hours ago', color: 'green' },
      { text: 'Settings updated by admin', timestamp: '1 day ago', color: 'purple' }
    ]
  }
}

function ProductDetailsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()
  const { productId } = useParams()

  // Extract product ID (e.g., "hrm-details" -> "hrm")
  const cleanProductId = productId ? productId.replace('-details', '') : 'hrm'
  const product = PRODUCT_DETAILS[cleanProductId] || PRODUCT_DETAILS.hrm
  const TABS = ['Overview', 'Users & Access', 'Configuration', 'Security', 'Analytics', 'Logs']

  return (
    <main className="pd-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="pd-main">
        <header className="pd-header">
          <div className="pd-header-top">
            <button className="pd-back-btn" onClick={() => navigate('/products-applications/select-product')}>
              <FiArrowLeft size={16} />
              <span>Back to Products</span>
            </button>
            <div className="pd-header-right">
              <button className="pd-icon-btn" title="Settings">
                <FiSettings size={18} />
              </button>
              <button className="pd-manage-btn">
                <FiTool size={16} />
                <span>Manage</span>
              </button>
            </div>
          </div>

          <div className="pd-product-header">
            <div className={`pd-product-icon ${product.iconTone}`}>
              <span>{product.icon}</span>
            </div>
            <div className="pd-product-info">
              <h1 className="pd-product-title">{product.name}</h1>
              <div className="pd-product-meta">
                <span className={`pd-status-dot ${product.statusColor}`} />
                <span className="pd-status-text">{product.status}</span>
                <span className="pd-meta-separator">•</span>
                <span className="pd-user-text">{product.userCount}</span>
              </div>
            </div>
          </div>

          <nav className="pd-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products-applications">Products & Apps</a>
            <span>/</span>
            <span>HRM Details</span>
          </nav>

          <div className="pd-notification">
            <button className="pd-notification-btn" title="Notifications">
              <FiBell size={20} />
              <span className="pd-notification-badge">3</span>
            </button>
          </div>
        </header>

        <div className="pd-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`pd-tab ${activeTab === tab.toLowerCase().replace(/ /g, '-') ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(/ /g, '-'))}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pd-content">
          <div className="pd-left-column">
            <div className="pd-card">
              <h2 className="pd-card-title">Product Description</h2>
              <p className="pd-description-text">{product.description}</p>

              <div className="pd-features-grid">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="pd-feature-item">
                    <div className={`pd-feature-icon ${feature.color}`}>
                      <span>{feature.icon}</span>
                    </div>
                    <div className="pd-feature-text">
                      <div className="pd-feature-title">{feature.title}</div>
                      <div className="pd-feature-subtitle">{feature.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-card pd-metrics-card">
              <h2 className="pd-card-title">Usage Metrics</h2>
              <p className="pd-metrics-subtitle">Current month performance indicators</p>
              <div className="pd-metrics-grid">
                {product.metrics.map((metric, idx) => (
                  <div key={idx} className="pd-metric-box">
                    <div className="pd-metric-value">{metric.value}</div>
                    <div className="pd-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pd-right-column">
            <div className="pd-card pd-quick-stats">
              <h2 className="pd-card-title">Quick Stats</h2>
              <div className="pd-stats-list">
                {product.quickStats.map((stat, idx) => (
                  <div key={idx} className="pd-stat-row">
                    <span className="pd-stat-label">{stat.label}</span>
                    <span className="pd-stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-card pd-activity-card">
              <h2 className="pd-card-title">Recent Activity</h2>
              <div className="pd-activity-list">
                {product.recentActivity.map((activity, idx) => (
                  <div key={idx} className="pd-activity-item">
                    <span className={`pd-activity-dot ${activity.color}`} />
                    <div className="pd-activity-content">
                      <div className="pd-activity-text">{activity.text}</div>
                      <div className="pd-activity-time">{activity.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailsPage
