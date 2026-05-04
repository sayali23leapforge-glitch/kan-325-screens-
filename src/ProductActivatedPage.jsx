import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiDatabase,
  FiUsers,
  FiShield,
  FiLink,
  FiClock,
  FiHardDrive,
  FiAlertCircle,
  FiUpload,
  FiLayers,
  FiCalendar,
  FiSettings,
  FiBox,
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import './productActivated.css'

const COMPLETED_TASKS = [
  {
    icon: FiDatabase,
    title: 'Database Setup',
    subtitle: '15 tables created successfully',
  },
  {
    icon: FiUsers,
    title: 'User Notifications',
    subtitle: '247 users notified via email',
  },
  {
    icon: FiShield,
    title: 'Permissions Setup',
    subtitle: 'HR roles and permissions configured',
  },
  {
    icon: FiLink,
    title: 'Integration Setup',
    subtitle: 'IAM and tenant management connected',
  },
]

const METRICS = [
  { title: 'Setup Time', value: '2m 34s', tone: 'blue', icon: FiClock },
  { title: 'Storage Used', value: '52MB', tone: 'purple', icon: FiHardDrive },
  { title: 'Success Rate', value: '100%', tone: 'green', icon: FiCheckCircle },
  { title: 'Errors', value: '0', tone: 'amber', icon: FiAlertCircle },
]

const NEXT_STEPS = [
  {
    id: 'import',
    icon: FiUpload,
    title: 'Import Employee Data',
    subtitle: 'Upload existing employee records to populate your HRM system',
    action: 'Start Import Process',
    tone: 'blue',
  },
  {
    id: 'departments',
    icon: FiLayers,
    title: 'Configure Departments',
    subtitle: 'Set up your organizational structure and department hierarchy',
    action: 'Configure Departments',
    tone: 'purple',
  },
  {
    id: 'policies',
    icon: FiCalendar,
    title: 'Setup Attendance Policies',
    subtitle: 'Define working hours, leave policies, and attendance rules',
    action: 'Setup Policies',
    tone: 'green',
  },
]

function ProductActivatedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <main className="pa-success-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="pa-success-main">
        <header className="pa-success-header">
          <div className="pa-success-header-top">
            <h1 className="pa-success-title">Product Active</h1>
            <button className="pa-success-notification" type="button" title="Notifications" aria-label="Notifications">
              <FiBell size={18} />
              <span className="pa-success-notification-badge">3</span>
            </button>
          </div>

          <nav className="pa-success-breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="pa-success-breadcrumb-link" onClick={() => navigate('/')}>
              Home
            </button>
            <span>/</span>
            <button type="button" className="pa-success-breadcrumb-link" onClick={() => navigate('/products-applications/pro-2')}>
              Products & Apps
            </button>
            <span>/</span>
            <button type="button" className="pa-success-breadcrumb-link" onClick={() => navigate('/products-applications/pro-2/human-resource-management/impact-warning')}>
              Impact Warning
            </button>
            <span>/</span>
            <span className="pa-success-breadcrumb-current">Product Active</span>
          </nav>
        </header>

        <div className="pa-success-content">
          <section className="pa-success-hero-card">
            <div className="pa-success-check-circle">
              <FiCheck size={20} />
            </div>
            <h2>Human Resource Management</h2>
            <p>Product has been successfully activated and is now available for use.</p>
            <span className="pa-success-status-pill">Active & Running</span>
          </section>

          <section className="pa-success-summary-card">
            <header className="pa-success-section-head">
              <h3>Activation Summary</h3>
              <p>All system changes have been applied successfully</p>
            </header>

            <div className="pa-success-summary-grid">
              <section className="pa-success-completed-col">
                <h4>Completed Tasks</h4>
                {COMPLETED_TASKS.map((task) => {
                  const Icon = task.icon
                  return (
                    <article key={task.title} className="pa-success-task-row">
                      <div className="pa-success-task-icon"><Icon size={13} /></div>
                      <div className="pa-success-task-copy">
                        <div className="pa-success-task-title">{task.title}</div>
                        <div className="pa-success-task-subtitle">{task.subtitle}</div>
                      </div>
                      <FiCheckCircle size={14} className="pa-success-task-done" />
                    </article>
                  )
                })}
              </section>

              <section className="pa-success-metrics-col">
                <h4>System Metrics</h4>
                <div className="pa-success-metrics-grid">
                  {METRICS.map((metric) => {
                    const Icon = metric.icon
                    return (
                      <article key={metric.title} className="pa-success-metric-card">
                        <Icon size={12} />
                        <div className="pa-success-metric-title">{metric.title}</div>
                        <div className={`pa-success-metric-value ${metric.tone}`}>{metric.value}</div>
                      </article>
                    )
                  })}
                </div>

                <div className="pa-success-health">
                  <div className="pa-success-health-row">
                    <span>System Health</span>
                    <strong>Excellent</strong>
                  </div>
                  <div className="pa-success-health-track">
                    <div className="pa-success-health-fill" />
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="pa-success-next-card">
            <header className="pa-success-section-head">
              <h3>Next Steps</h3>
              <p>Complete your HRM setup with these recommended actions</p>
            </header>

            <div className="pa-success-next-list">
              {NEXT_STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <article key={step.id} className={`pa-success-next-item ${step.tone}`}>
                    <div className="pa-success-next-icon"><Icon size={14} /></div>
                    <div className="pa-success-next-copy">
                      <h4>{step.title}</h4>
                      <p>{step.subtitle}</p>
                      <button type="button">{step.action} →</button>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="pa-success-actions">
              <button type="button" className="pa-success-btn ghost" onClick={() => navigate('/products-applications/pro-2')}>
                <FiBox size={13} />
                <span>View All Products</span>
              </button>
              <button type="button" className="pa-success-btn primary">
                <FiSettings size={13} />
                <span>Configure HRM Settings</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default ProductActivatedPage
