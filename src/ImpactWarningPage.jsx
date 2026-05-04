import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiAlertTriangle,
  FiDatabase,
  FiHardDrive,
  FiUsers,
  FiMail,
  FiKey,
  FiActivity,
  FiClock,
  FiCpu,
  FiCheckCircle,
  FiArrowLeft,
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import './impactWarning.css'

function ImpactWarningPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <main className="iw-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="iw-main">
        <header className="iw-header">
          <div className="iw-header-top">
            <h1 className="iw-page-title">Impact Warning</h1>
            <button className="iw-notification-btn" type="button" title="Notifications" aria-label="Notifications">
              <FiBell size={18} />
              <span className="iw-notification-badge">3</span>
            </button>
          </div>

          <nav className="iw-breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="iw-breadcrumb-link" onClick={() => navigate('/')}>
              Home
            </button>
            <span>/</span>
            <button type="button" className="iw-breadcrumb-link" onClick={() => navigate('/products-applications/pro-2')}>
              Products & Apps
            </button>
            <span>/</span>
            <button
              type="button"
              className="iw-breadcrumb-link"
              onClick={() => navigate('/products-applications/pro-2/human-resource-management/enable')}
            >
              Enable Product
            </button>
            <span>/</span>
            <span className="iw-breadcrumb-current">Impact Warning</span>
          </nav>
        </header>

        <div className="iw-content-wrap">
          <section className="iw-main-card" aria-label="Impact Warning Details">
            <section className="iw-top-intro">
              <div className="iw-top-icon-box">
                <FiAlertTriangle size={16} />
              </div>
              <div className="iw-top-copy">
                <h2>Impact Assessment Required</h2>
                <p>
                  Please review the following system impacts before enabling the Human Resource
                  Management product.
                </p>
                <span className="iw-top-tag">Human Resource Management</span>
              </div>
            </section>

            <section className="iw-block iw-red">
              <div className="iw-block-title-row">
                <div className="iw-title-icon red">
                  <FiDatabase size={13} />
                </div>
                <div>
                  <h3>Database Schema Changes</h3>
                  <p>The following database modifications will be applied to your system:</p>
                </div>
              </div>

              <div className="iw-two-col-grid">
                <article className="iw-mini-card">
                  <div className="iw-mini-title-row">
                    <FiDatabase size={12} />
                    <h4>New Tables</h4>
                  </div>
                  <p className="iw-mini-big">15 tables will be created</p>
                  <p className="iw-mini-sub">employees, departments, attendance, payroll, etc.</p>
                </article>

                <article className="iw-mini-card">
                  <div className="iw-mini-title-row">
                    <FiHardDrive size={12} />
                    <h4>Storage Impact</h4>
                  </div>
                  <p className="iw-mini-big">~50MB initial size</p>
                  <p className="iw-mini-sub">Growth estimated at 5MB/month</p>
                </article>
              </div>

              <div className="iw-warning-note">
                <FiAlertTriangle size={13} />
                <span>
                  Database changes cannot be easily reversed. Ensure you have a backup before proceeding.
                </span>
              </div>
            </section>

            <section className="iw-block iw-yellow">
              <div className="iw-block-title-row">
                <div className="iw-title-icon yellow">
                  <FiUsers size={13} />
                </div>
                <div>
                  <h3>User Notifications & Access</h3>
                  <p>All system users will be affected by this activation:</p>
                </div>
              </div>

              <div className="iw-row-list">
                <div className="iw-row-item">
                  <span className="iw-row-left"><FiMail size={12} /> Email Notifications</span>
                  <span className="iw-row-right">247 users</span>
                </div>
                <div className="iw-row-item">
                  <span className="iw-row-left"><FiKey size={12} /> New Permissions</span>
                  <span className="iw-row-right">HR roles created</span>
                </div>
                <div className="iw-row-item">
                  <span className="iw-row-left"><FiAlertTriangle size={12} /> System Alerts</span>
                  <span className="iw-row-right">Admin notifications</span>
                </div>
              </div>

              <div className="iw-info-note">
                <FiAlertTriangle size={13} />
                <span>Users will receive immediate notification emails about the new HRM features and access changes.</span>
              </div>
            </section>

            <section className="iw-block iw-blue">
              <div className="iw-block-title-row">
                <div className="iw-title-icon blue">
                  <FiActivity size={13} />
                </div>
                <div>
                  <h3>System Performance & Resources</h3>
                  <p>Expected system resource utilization changes:</p>
                </div>
              </div>

              <div className="iw-perf-grid">
                <article className="iw-perf-card">
                  <FiClock size={14} />
                  <div>Setup Time</div>
                  <strong>2-3 min</strong>
                </article>
                <article className="iw-perf-card">
                  <FiHardDrive size={14} />
                  <div>Memory Usage</div>
                  <strong>+15MB</strong>
                </article>
                <article className="iw-perf-card">
                  <FiCpu size={14} />
                  <div>CPU Impact</div>
                  <strong>Minimal</strong>
                </article>
              </div>

              <div className="iw-blue-note">
                <FiCheckCircle size={13} />
                <span>System performance impact is expected to be minimal. No downtime required during activation.</span>
              </div>
            </section>

            <section className="iw-block iw-purple">
              <div className="iw-block-title-row">
                <div className="iw-title-icon purple">
                  <FiCheckCircle size={13} />
                </div>
                <div>
                  <h3>Integration Dependencies</h3>
                  <p>The following system integrations will be automatically configured:</p>
                </div>
              </div>

              <div className="iw-row-list">
                <div className="iw-row-item">
                  <span className="iw-row-left">IAM Integration</span>
                  <span className="iw-status-pill ready">Ready</span>
                </div>
                <div className="iw-row-item">
                  <span className="iw-row-left">Email Service</span>
                  <span className="iw-status-pill setup">Setup Required</span>
                </div>
                <div className="iw-row-item">
                  <span className="iw-row-left">Tenant Management</span>
                  <span className="iw-status-pill ready">Ready</span>
                </div>
              </div>
            </section>

            <section className="iw-summary">
              <h3>Summary of Changes</h3>
              <div className="iw-summary-metrics">
                <div><span>15</span><small>New Tables</small></div>
                <div><span>247</span><small>Users Notified</small></div>
                <div><span>3</span><small>New Roles</small></div>
                <div><span>50MB</span><small>Storage Used</small></div>
              </div>
            </section>

            <div className="iw-actions">
              <button type="button" className="iw-btn back" onClick={() => navigate('/products-applications/pro-2/human-resource-management/enable')}>
                <FiArrowLeft size={14} />
                <span>Back to Product</span>
              </button>
              <button
                type="button"
                className="iw-btn proceed"
                onClick={() => navigate('/products-applications/pro-2/human-resource-management/product-activated')}
              >
                Acknowledge & Proceed
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default ImpactWarningPage
