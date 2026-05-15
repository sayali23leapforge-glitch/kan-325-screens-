import { useState } from 'react'
import {
  FiArrowLeft,
  FiCheckCircle,
  FiCopy,
  FiEye,
  FiKey,
  FiShield,
  FiTrendingUp,
  FiXCircle,
  FiTrash2,
} from 'react-icons/fi'
import RevokeTokenModal from './RevokeTokenModal'
import './token-details-section.css'

function TokenDetailsSection({ onBackToTokens }) {
  const [isRevokeModalOpen, setIsRevokeModalOpen] = useState(false)

  const handleRevokeClick = () => {
    setIsRevokeModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsRevokeModalOpen(false)
  }

  const handleConfirmRevoke = () => {
    setIsRevokeModalOpen(false)
  }

  const permissionCards = [
    { title: 'Read Access', value: 'All resources', icon: <FiShield size={13} /> },
    { title: 'Write Access', value: 'All resources', icon: <FiShield size={13} /> },
    { title: 'Delete Access', value: 'Limited resources', icon: <FiShield size={13} /> },
    { title: 'User Management', value: 'Full control', icon: <FiShield size={13} /> },
    { title: 'Role Management', value: 'Full control', icon: <FiShield size={13} /> },
    { title: 'Analytics Access', value: 'Read only', icon: <FiShield size={13} /> },
  ]

  const recentActivity = [
    {
      title: 'Successful API Request',
      detail: 'GET /api/v1/users - 200 OK',
      time: '2 hours ago',
      icon: <FiCheckCircle size={14} />,
      iconClass: 'tds-activity-success',
    },
    {
      title: 'Successful API Request',
      detail: 'POST /api/v1/roles - 201 Created',
      time: '2 hours ago',
      icon: <FiCheckCircle size={14} />,
      iconClass: 'tds-activity-success',
    },
    {
      title: 'Successful API Request',
      detail: 'GET /api/v1/reports - 200 OK',
      time: '2 hours ago',
      icon: <FiCheckCircle size={14} />,
      iconClass: 'tds-activity-success',
    },
    {
      title: 'Failed API Request',
      detail: 'POST /api/v1/users - 401 Unauthorized',
      time: '2 hours ago',
      icon: <FiXCircle size={14} />,
      iconClass: 'tds-activity-fail',
    },
  ]

  return (
    <section className="tds-shell">
      <div className="tds-header">
        <div>
          <h3>Token Details</h3>
          <p>View complete information for this API token</p>
        </div>
        <div className="tds-header-actions">
          <button className="tds-revoke-btn" type="button" onClick={handleRevokeClick}>
            <FiTrash2 size={14} />
            Revoke Token
          </button>
          <button className="tds-back-btn" type="button" onClick={onBackToTokens}>
            <FiArrowLeft size={14} />
            Back to Tokens
          </button>
        </div>
      </div>

      <article className="tds-main-card">
        <div className="tds-main-icon">
          <FiKey size={18} />
        </div>
        <div className="tds-main-body">
          <div className="tds-main-title-row">
            <h4>Production API Key</h4>
            <span className="tds-status-badge">Active</span>
          </div>
          <p className="tds-main-desc">Primary API key for production environment access and authentication</p>
          <div className="tds-main-meta">
            <span>Created: Dec 15, 2024</span>
            <span>Expires: Dec 15, 2025</span>
            <span>Last used: 2 hours ago</span>
          </div>
        </div>
      </article>

      <div className="tds-grid-two">
        <section className="tds-card">
          <h5>Token Information</h5>
          <div className="tds-info-list">
            <div className="tds-info-row">
              <span>Token ID</span>
              <div className="tds-value-wrap">
                <code>tok_prod_a8f3j2k9m1n4p7q2</code>
                <button type="button" className="tds-icon-btn" aria-label="Copy token id">
                  <FiCopy size={13} />
                </button>
              </div>
            </div>
            <div className="tds-info-row">
              <span>Token Key</span>
              <div className="tds-value-wrap">
                <code>sk-prod-1234567890abcdef...</code>
                <button type="button" className="tds-icon-btn" aria-label="Copy token key">
                  <FiCopy size={13} />
                </button>
                <button type="button" className="tds-icon-btn" aria-label="View token key">
                  <FiEye size={13} />
                </button>
              </div>
            </div>
            <div className="tds-info-row">
              <span>Token Type</span>
              <div className="tds-value-wrap">
                <span className="tds-pill tds-pill-green">Admin Access</span>
              </div>
            </div>
            <div className="tds-info-row">
              <span>Environment</span>
              <div className="tds-value-wrap">
                <span className="tds-pill tds-pill-blue">Production</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tds-card">
          <h5>Usage Statistics</h5>
          <div className="tds-stats">
            <div className="tds-stat-top">
              <span>Total Requests</span>
              <strong>142,847</strong>
            </div>
            <div className="tds-progress" aria-hidden="true">
              <div className="tds-progress-fill" />
            </div>
            <div className="tds-stat-row">
              <span>Success Rate</span>
              <strong className="tds-green">99.8%</strong>
            </div>
            <div className="tds-stat-row">
              <span>Error Rate</span>
              <strong className="tds-red">0.2%</strong>
            </div>
            <div className="tds-stat-row">
              <span>Avg Response Time</span>
              <strong>247ms</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="tds-card">
        <h5>Permissions &amp; Scopes</h5>
        <div className="tds-permissions-grid">
          {permissionCards.map((item) => (
            <article key={item.title} className="tds-permission-item">
              <span className="tds-permission-icon">{item.icon}</span>
              <div>
                <h6>{item.title}</h6>
                <p>{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tds-card tds-activity-card">
        <h5>Recent Activity</h5>
        <div className="tds-activity-list">
          {recentActivity.map((item, index) => (
            <article key={`${item.title}-${index}`} className="tds-activity-item">
              <span className={`tds-activity-icon ${item.iconClass}`}>{item.icon}</span>
              <div className="tds-activity-body">
                <h6>{item.title}</h6>
                <p>{item.detail}</p>
              </div>
              <span className="tds-activity-time">{item.time}</span>
            </article>
          ))}
        </div>
      </section>

      <RevokeTokenModal
        isOpen={isRevokeModalOpen}
        onClose={handleCloseModal}
        onRevoke={handleConfirmRevoke}
      />
    </section>
  )
}

export default TokenDetailsSection
