import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiUsers, FiCalendar, FiBarChart2, FiCreditCard, FiCheckCircle, FiAlertCircle, FiFileText, FiLifeBuoy } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './humanResourceEnableProduct.css'

const FEATURE_ITEMS = [
  {
    id: 'onboarding',
    title: 'Employee Onboarding',
    subtitle: 'Streamlined hiring process',
    tone: 'purple',
    icon: FiUsers,
  },
  {
    id: 'attendance',
    title: 'Attendance Tracking',
    subtitle: 'Real-time monitoring',
    tone: 'blue',
    icon: FiCalendar,
  },
  {
    id: 'reviews',
    title: 'Performance Reviews',
    subtitle: '360-degree feedback',
    tone: 'green',
    icon: FiBarChart2,
  },
  {
    id: 'payroll',
    title: 'Payroll Integration',
    subtitle: 'Automated processing',
    tone: 'orange',
    icon: FiCreditCard,
  },
]

const REQUIREMENTS = [
  {
    id: 'db',
    title: 'Database Schema',
    subtitle: 'Required tables will be created automatically',
    tone: 'success',
  },
  {
    id: 'permissions',
    title: 'Default Permissions',
    subtitle: 'HR Manager, HR Staff, and Employee roles will be configured',
    tone: 'success',
  },
  {
    id: 'integration',
    title: 'Integration Points',
    subtitle: 'IAM integration for user authentication',
    tone: 'success',
  },
  {
    id: 'email',
    title: 'Email Configuration',
    subtitle: 'SMTP settings required for notifications',
    tone: 'notice',
  },
]

function HumanResourceEnableProductPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <main className="hr-enable-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="hr-enable-main">
        <header className="hr-enable-header">
          <div className="hr-enable-header-top">
            <h1 className="hr-enable-page-title">Enable Product</h1>
            <button className="hr-enable-notification-btn" type="button" title="Notifications" aria-label="Notifications">
              <FiBell size={18} />
              <span className="hr-enable-notification-badge">3</span>
            </button>
          </div>

          <nav className="hr-enable-breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="hr-enable-breadcrumb-link" onClick={() => navigate('/')}>
              Home
            </button>
            <span>/</span>
            <button type="button" className="hr-enable-breadcrumb-link" onClick={() => navigate('/products-applications/pro-2')}>
              Products & Apps
            </button>
            <span>/</span>
            <span className="hr-enable-breadcrumb-current">Enable Product</span>
          </nav>
        </header>

        <div className="hr-enable-content-wrap">
          <section className="hr-enable-main-card" aria-label="Enable Human Resource Management">
            <div className="hr-enable-product-head">
              <div className="hr-enable-product-icon-box">
                <FiUsers size={24} />
              </div>

              <div className="hr-enable-product-copy">
                <h2 className="hr-enable-product-title">Human Resource Management</h2>
                <p className="hr-enable-product-subtitle">Employee management and HR workflows</p>
                <div className="hr-enable-tag-row">
                  <span className="hr-enable-tag business">Business</span>
                  <span className="hr-enable-tag hr">HR</span>
                  <span className="hr-enable-tag management">Management</span>
                </div>
              </div>
            </div>

            <section className="hr-enable-section hr-enable-section-overview">
              <h3 className="hr-enable-section-title">Product Overview</h3>
              <p className="hr-enable-overview-text">
                The Human Resource Management system provides comprehensive tools for managing your
                organization&apos;s workforce. It includes employee onboarding, attendance tracking, leave management,
                performance reviews, and payroll integration capabilities.
              </p>

              <div className="hr-enable-feature-grid">
                {FEATURE_ITEMS.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <article key={feature.id} className="hr-enable-feature-item">
                      <div className={`hr-enable-feature-icon ${feature.tone}`}>
                        <Icon size={13} />
                      </div>
                      <div>
                        <div className="hr-enable-feature-title">{feature.title}</div>
                        <div className="hr-enable-feature-subtitle">{feature.subtitle}</div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>

            <section className="hr-enable-section hr-enable-section-config">
              <h3 className="hr-enable-section-title">Configuration Requirements</h3>
              <div className="hr-enable-requirements-list">
                {REQUIREMENTS.map((item) => (
                  <div key={item.id} className={`hr-enable-requirement-item ${item.tone}`}>
                    <span className="hr-enable-requirement-icon" aria-hidden="true">
                      {item.tone === 'notice' ? (
                        <FiAlertCircle className="notice" size={16} />
                      ) : (
                        <FiCheckCircle className="success" size={16} />
                      )}
                    </span>
                    <div>
                      <div className="hr-enable-requirement-title">{item.title}</div>
                      <div className="hr-enable-requirement-subtitle">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="hr-enable-notice" aria-label="Important Notice">
              <div className="hr-enable-notice-head">
                <div className="hr-enable-notice-icon-box" aria-hidden="true">
                  <FiAlertCircle size={16} />
                </div>
                <div className="hr-enable-notice-copy">
                  <h3 className="hr-enable-notice-title">Important Notice</h3>
                  <p className="hr-enable-notice-lead">Enabling this product will:</p>
                </div>
              </div>
              <ul className="hr-enable-notice-list">
                <li>Create necessary database tables and schema</li>
                <li>Configure default roles and permissions</li>
                <li>Enable product-specific features for all tenants</li>
                <li>Send activation notifications to administrators</li>
              </ul>
            </section>

            <div className="hr-enable-actions-row">
              <button type="button" className="hr-enable-btn cancel" onClick={() => navigate('/products-applications/pro-2')}>
                Cancel
              </button>
              <button
                type="button"
                className="hr-enable-btn primary"
                onClick={() => navigate('/products-applications/pro-2/human-resource-management/impact-warning')}
              >
                Enable Product
              </button>
            </div>
          </section>

          <section className="hr-enable-support-grid" aria-label="Support Links">
            <article className="hr-enable-support-card">
              <div className="hr-enable-support-icon doc">
                <FiFileText size={16} />
              </div>
              <div className="hr-enable-support-copy">
                <h4>Documentation</h4>
                <p>Learn how to configure and use the HRM system</p>
                <button type="button">View Docs</button>
              </div>
            </article>

            <article className="hr-enable-support-card">
              <div className="hr-enable-support-icon support">
                <FiLifeBuoy size={16} />
              </div>
              <div className="hr-enable-support-copy">
                <h4>Support</h4>
                <p>Need help? Our support team is here for you</p>
                <button type="button">Contact Support</button>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  )
}

export default HumanResourceEnableProductPage
