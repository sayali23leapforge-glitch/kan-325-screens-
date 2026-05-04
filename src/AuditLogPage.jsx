import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './audit-log.css'

const AuditLogPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock tenant data
  const tenantData = {
    id: 'TNT-001',
    name: 'Acme Corporation',
    initials: 'AC',
    domain: 'acme.example.com',
    subscription: 'Enterprise',
    status: 'Active',
    users: 47,
    avatarGradient: 'linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)',
  }

  // Mock products data with toggles
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Analytics Suite',
      description: 'Advanced data analytics and reporting',
      icon: '📊',
      iconColor: 'analytics',
      enabled: true,
      features: [
        'Real-time dashboards and visualizations',
        'Custom report builder',
        'Data export capabilities',
        'API access for integrations'
      ],
      statusType: 'success',
      activeUsers: 23,
      usage: '156 reports generated this month',
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      title: 'AI Assistant',
      description: 'Intelligent automation and insights',
      icon: '🤖',
      iconColor: 'ai',
      enabled: true,
      features: [
        'Natural language query processing',
        'Automated workflow suggestions',
        'Predictive analytics',
        'Smart notifications'
      ],
      statusType: 'success',
      activeUsers: 31,
      usage: '89 AI queries processed today',
      lastAccessed: '15 minutes ago'
    },
    {
      id: 3,
      title: 'Collaboration Hub',
      description: 'Team communication and project management',
      icon: '🤝',
      iconColor: 'collab',
      enabled: false,
      features: [
        'Real-time messaging and chat',
        'Project boards and task management',
        'File sharing and version control',
        'Video conferencing integration'
      ],
      statusType: 'warning',
      warningText: 'Enabling this will affect all users. Consider notifying your team before activation.',
      status: 'Not Activated'
    },
    {
      id: 4,
      title: 'Advanced Security',
      description: 'Enhanced security monitoring and controls',
      icon: '🔒',
      iconColor: 'security',
      enabled: true,
      features: [
        'Multi-factor authentication enforcement',
        'Advanced threat detection',
        'Security audit trails',
        'Compliance reporting'
      ],
      statusType: 'critical',
      criticalText: 'High Impact: Disabling will remove MFA requirements and security monitoring for all 47 users.',
      lastScanned: '1 hour ago'
    },
    {
      id: 5,
      title: 'Mobile Access',
      description: 'Native mobile applications',
      icon: '📱',
      iconColor: 'mobile',
      enabled: true,
      features: [
        'iOS and Android applications',
        'Offline data synchronization',
        'Push notifications',
        'Biometric authentication'
      ]
    }
  ])

  const handleToggle = (productId) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, enabled: !product.enabled } : product
    ))
  }

  return (
    <div className="audit-log-page">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="audit-log-main">
        {/* Header */}
        <div className="audit-log-header-section">
          <div className="audit-log-header-top">
            <h1 className="audit-log-main-title">Product Enablement</h1>
            <button 
              className="audit-log-download-btn"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="audit-log-breadcrumb-section">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-item">IAM</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-item">Tenants</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-item current">{tenantData.name}</span>
          </div>
        </div>

        <div className="audit-log-content-area">
          {/* Tenant Info Card */}
          <div className="audit-log-tenant-card-main">
            <div className="tenant-avatar-main" style={{ background: tenantData.avatarGradient }}>
              {tenantData.initials}
            </div>
            <div className="tenant-info-main">
              <h2 className="tenant-name-main">{tenantData.name}</h2>
              <p className="tenant-meta-main">Tenant ID: {tenantData.id} • Domain: {tenantData.domain}</p>
              <div className="tenant-badges-main">
                <span className="plan-badge-main">{tenantData.subscription}</span>
                <span className="status-badge-main active">Active</span>
                <span className="users-badge-main">{tenantData.users} Users</span>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="audit-log-notice-card">
            <div className="notice-icon">⚠</div>
            <div className="notice-content">
              <h4 className="notice-title">Important Notice</h4>
              <p className="notice-description">Disabling products will immediately revoke access for all tenant users. This action cannot be undone and may affect ongoing operations.</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid-main">
            {products.map(product => (
              <div key={product.id} className="product-card-main">
                {/* Header with Toggle */}
                <div className="product-header-main">
                  <div className="product-icon-main" data-icon-color={product.iconColor}>
                    {product.icon}
                  </div>
                  <div className="product-title-section">
                    <h3 className="product-title-main">{product.title}</h3>
                    <p className="product-desc-main">{product.description}</p>
                  </div>
                  <label className="toggle-switch-main">
                    <input 
                      type="checkbox" 
                      checked={product.enabled}
                      onChange={() => handleToggle(product.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                {/* Features List */}
                <div className="features-list-main">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="feature-row-main">
                      <span className="feature-check-main">✓</span>
                      <span className="feature-text-main">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Status Sections */}
                {product.statusType === 'success' && (
                  <div className="status-success-main">
                    <div className="status-icon-main">✓</div>
                    <div className="status-text-section">
                      <h5 className="status-label-main">Current Status</h5>
                      <p className="status-line-main"><strong>Active:</strong> {product.activeUsers} users actively using {product.title.toLowerCase()}</p>
                      <p className="status-line-main"><strong>Usage:</strong> {product.usage}</p>
                    </div>
                  </div>
                )}

                {product.statusType === 'warning' && (
                  <div className="status-warning-main">
                    <div className="warning-icon-main">⚠</div>
                    <div className="warning-text-section">
                      <h5 className="warning-label-main">Impact Warning</h5>
                      <p className="warning-text-main">{product.warningText}</p>
                    </div>
                  </div>
                )}

                {product.statusType === 'critical' && (
                  <div className="status-critical-main">
                    <div className="critical-icon-main">⚠</div>
                    <div className="critical-text-section">
                      <h5 className="critical-label-main">Critical Warning</h5>
                      <p className="critical-text-main">{product.criticalText}</p>
                    </div>
                  </div>
                )}

                {/* Footer Info */}
                <div className="product-footer-main">
                  {product.lastAccessed && (
                    <p className="product-footer-text">Last accessed: {product.lastAccessed}</p>
                  )}
                  {product.lastScanned && (
                    <p className="product-footer-text">Last security scan: {product.lastScanned}</p>
                  )}
                  {product.status && (
                    <p className="product-footer-text">Status: {product.status}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="audit-log-footer-main">
            <button className="save-changes-btn">Save Changes</button>
            <button 
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditLogPage
