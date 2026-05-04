import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FiSearch, FiCheck, FiX, FiSettings, FiTrash2, FiEye, FiCopy, FiPlus, FiMenu } from 'react-icons/fi'
import './system-settings.css'

function SystemSettingsPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('General Settings')
  const [settings, setSettings] = useState({
    systemName: 'Karnovate IAM Enterprise',
    systemUrl: 'https://iam.karnovate.com',
    defaultTimezone: 'UTC (Coordinated Universal Time)',
    dateFormat: 'MM/DD/YYYY',
    sessionTimeout: '30',
    maintenanceMode: false
  })
  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'noreply@karnovate.com',
    smtpPassword: '••••••••••••',
    fromEmail: 'noreply@karnovate.com',
    fromDisplayName: 'Karnovate System',
    enableSSLTLS: true,
    connectionStatus: 'connected'
  })
  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      name: 'User Registration',
      status: 'Active',
      statusColor: '#22C55E',
      endpoint: 'https://api.example.com/webhooks/users',
      events: ['user.created', 'user.updated'],
      lastTriggered: 'Dec 28, 2024 at 2:15 PM',
      successRate: '98.5%',
      successColor: '#16A34A'
    },
    {
      id: 2,
      name: 'Payment Processing',
      status: 'Warning',
      statusColor: '#EAB308',
      endpoint: 'https://payments.example.com/notify',
      events: ['payment.completed', 'payment.failed'],
      lastTriggered: 'Dec 28, 2024 at 1:45 PM',
      successRate: '85.2%',
      successColor: '#CA8A04'
    },
    {
      id: 3,
      name: 'Security Alerts',
      status: 'Active',
      statusColor: '#22C55E',
      endpoint: 'https://security.example.com/alerts',
      events: ['security.breach', 'login.failed'],
      lastTriggered: 'Dec 27, 2024 at 11:30 AM',
      successRate: '99.1%',
      successColor: '#16A34A'
    }
  ])
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      status: 'Active',
      statusColor: '#22C55E',
      statusBg: '#DCFCE7',
      statusText: '#166534',
      key: 'ak_prod_••••••••••••••••••••••••7a9b',
      permissions: ['read', 'write', 'admin'],
      created: 'Dec 15, 2024',
      lastUsed: 'Dec 28, 2024 at 3:42 PM',
      requests: '1,247 requests today'
    },
    {
      id: 2,
      name: 'Development API Key',
      status: 'Active',
      statusColor: '#3B82F6',
      statusBg: '#DBEAFE',
      statusText: '#1E40AF',
      key: 'ak_dev_••••••••••••••••••••••••3c8f',
      permissions: ['read', 'write'],
      created: 'Dec 10, 2024',
      lastUsed: 'Dec 26, 2024 at 9:15 AM',
      requests: '342 requests today'
    }
  ])
  const [brandingSettings, setBrandingSettings] = useState({
    primaryLogo: 'https://placehold.co/96x64',
    favicon: 'https://placehold.co/32x32',
    primaryColor: '#2563EB',
    secondaryColor: '#4B5563',
    accentColor: '#22C55E',
    primaryFont: 'Inter',
    secondaryFont: 'Inter'
  })

  const configurationItems = [
    { id: 'general', label: 'General Settings', icon: '⚙️' },
    { id: 'email', label: 'Email Configuration', icon: '✉️' },
    { id: 'webhooks', label: 'Webhooks', icon: '🔗' },
    { id: 'api-keys', label: 'API Keys', icon: '🔑' },
    { id: 'branding', label: 'Branding Settings', icon: '🎨' },
    { id: 'environment', label: 'Environment', icon: '🌍' }
  ]

  const handleSave = () => {
    console.log('Settings saved:', settings)
  }

  const handleCancel = () => {
    navigate('/audit-logs')
  }

  return (
    <div className="system-settings-wrapper">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <div className="system-settings-container">
        {/* Header */}
        <div className="settings-header">
          <div className="settings-header-left">
            <button type="button" className="mobile-menu-button" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              <FiMenu />
            </button>
            <h1 className="settings-page-title">System Settings</h1>
            <div className="settings-breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-dot">›</span>
              <span className="breadcrumb-item">IAM</span>
              <span className="breadcrumb-dot">›</span>
              <span className="breadcrumb-item current">System Settings</span>
            </div>
          </div>
          <div className="settings-header-right">
            <button className="change-history-btn">
              <FiSearch size={14} />
              <span>Change History</span>
            </button>
            <button className="save-all-changes-btn" onClick={handleSave}>
              <FiCheck size={14} />
              <span>Save All Changes</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="settings-main-content">
          {/* Left Sidebar */}
          <div className="settings-sidebar">
            <div className="config-section">
              <h3 className="config-title">Configuration</h3>
              <p className="config-subtitle">Manage system-wide settings</p>

              <div className="config-items">
                {configurationItems.map((item) => (
                  <button
                    key={item.id}
                    className={`config-item ${activeSection === item.label ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.label)}
                  >
                    <span className="config-item-icon">{item.icon}</span>
                    <span className="config-item-label">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="settings-content-panel">
            {activeSection === 'General Settings' && (
              <div className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">General System Settings</h2>
                  <p className="section-subtitle">Configure basic system parameters and behaviors</p>
                  <span className="section-update-time">Last updated: Dec 28, 2024 at 3:42 PM</span>
                </div>

                <div className="settings-form">
                  {/* System Name */}
                  <div className="form-group">
                    <label className="form-label">System Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.systemName}
                      onChange={(e) => setSettings({ ...settings, systemName: e.target.value })}
                      placeholder="Enter system name"
                    />
                  </div>

                  {/* System URL */}
                  <div className="form-group">
                    <label className="form-label">System URL</label>
                    <input
                      type="url"
                      className="form-input"
                      value={settings.systemUrl}
                      onChange={(e) => setSettings({ ...settings, systemUrl: e.target.value })}
                      placeholder="Enter system URL"
                    />
                  </div>

                  {/* Default Timezone */}
                  <div className="form-group">
                    <label className="form-label">Default Timezone</label>
                    <select
                      className="form-select"
                      value={settings.defaultTimezone}
                      onChange={(e) => setSettings({ ...settings, defaultTimezone: e.target.value })}
                    >
                      <option>UTC (Coordinated Universal Time)</option>
                      <option>EST (Eastern Standard Time)</option>
                      <option>CST (Central Standard Time)</option>
                      <option>PST (Pacific Standard Time)</option>
                    </select>
                  </div>

                  {/* Date Format */}
                  <div className="form-group">
                    <label className="form-label">Date Format</label>
                    <select
                      className="form-select"
                      value={settings.dateFormat}
                      onChange={(e) => setSettings({ ...settings, dateFormat: e.target.value })}
                    >
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>

                  {/* Session Timeout */}
                  <div className="form-group">
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      className="form-input-small"
                      value={settings.sessionTimeout}
                      onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                      placeholder="30"
                    />
                    <p className="form-helper-text">Idle sessions will automatically logout after this duration</p>
                  </div>

                  {/* Maintenance Mode */}
                  <div className="form-group maintenance-section">
                    <div className="maintenance-label-wrapper">
                      <div>
                        <span className="maintenance-label">Maintenance Mode</span>
                        <p className="maintenance-description">Enable to restrict access during system maintenance</p>
                      </div>
                      <div className="toggle-switch-wrapper">
                        <input
                          type="checkbox"
                          id="maintenance-mode"
                          className="maintenance-toggle"
                          checked={settings.maintenanceMode}
                          onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                        />
                        <label htmlFor="maintenance-mode" className="toggle-label"></label>
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="form-actions">
                    <button className="btn-test-config">
                      <FiCheck size={14} />
                      <span>Test Configuration</span>
                    </button>
                    <button className="btn-save-settings" onClick={handleSave}>
                      <span>Save General Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Email Configuration' && (
              <div className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Email Configuration</h2>
                  <p className="section-subtitle">Configure email server settings and templates</p>
                  <span className="section-update-time">Last updated: Dec 28, 2024 at 3:42 PM</span>
                </div>

                <div className="email-settings-form">
                  {/* SMTP Host */}
                  <div className="form-group">
                    <label className="form-label">SMTP Host</label>
                    <input
                      type="text"
                      className="form-input"
                      value={emailSettings.smtpHost}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
                      placeholder="smtp.gmail.com"
                    />
                  </div>

                  {/* SMTP Port */}
                  <div className="form-group">
                    <label className="form-label">SMTP Port</label>
                    <input
                      type="text"
                      className="form-input"
                      value={emailSettings.smtpPort}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                      placeholder="587"
                    />
                  </div>

                  {/* SMTP Username */}
                  <div className="form-group">
                    <label className="form-label">SMTP Username</label>
                    <input
                      type="text"
                      className="form-input"
                      value={emailSettings.smtpUsername}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
                      placeholder="noreply@karnovate.com"
                    />
                  </div>

                  {/* SMTP Password */}
                  <div className="form-group">
                    <label className="form-label">SMTP Password</label>
                    <input
                      type="password"
                      className="form-input"
                      value={emailSettings.smtpPassword}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                      placeholder="••••••••••••"
                    />
                  </div>

                  {/* From Email Address */}
                  <div className="form-group">
                    <label className="form-label">From Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      value={emailSettings.fromEmail}
                      onChange={(e) => setEmailSettings({ ...emailSettings, fromEmail: e.target.value })}
                      placeholder="noreply@karnovate.com"
                    />
                  </div>

                  {/* From Display Name */}
                  <div className="form-group">
                    <label className="form-label">From Display Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={emailSettings.fromDisplayName}
                      onChange={(e) => setEmailSettings({ ...emailSettings, fromDisplayName: e.target.value })}
                      placeholder="Karnovate System"
                    />
                  </div>

                  {/* Enable SSL/TLS */}
                  <div className="form-group email-ssl-group">
                    <label className="form-label">Enable SSL/TLS</label>
                    <div className="toggle-switch-wrapper">
                      <input
                        type="checkbox"
                        id="ssl-tls-toggle"
                        className="email-toggle"
                        checked={emailSettings.enableSSLTLS}
                        onChange={(e) => setEmailSettings({ ...emailSettings, enableSSLTLS: e.target.checked })}
                      />
                      <label htmlFor="ssl-tls-toggle" className="email-toggle-label"></label>
                    </div>
                  </div>

                  {/* Test Connection */}
                  <div className="form-group email-test-group">
                    <label className="form-label">Test Connection</label>
                    <button className="btn-test-email">
                      <FiCheck size={14} />
                      <span>Send Test Email</span>
                    </button>
                  </div>

                  {/* Connection Status */}
                  <div className="email-connection-status">
                    <h4 className="status-label">Connection Status</h4>
                    <div className="status-box status-success">
                      <div className="status-icon">✓</div>
                      <div className="status-text">
                        <div className="status-title">Connected Successfully</div>
                        <div className="status-timestamp">Last test: Dec 28, 2024 at 3:35 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Webhooks' && (
              <div className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Webhook<br/>Configuration</h2>
                  <p className="section-subtitle">Configure webhook endpoints for real-time notifications</p>
                  <span className="section-update-time">Last updated: Dec 28, 2024 at 3:42 PM</span>
                </div>

                <button className="btn-add-webhook">
                  <FiCheck size={14} />
                  <span>Add Webhook</span>
                </button>

                <div className="webhooks-container">
                  {webhooks.map((webhook) => (
                    <div key={webhook.id} className="webhook-card">
                      <div className="webhook-header">
                        <div className="webhook-status-dot" style={{ backgroundColor: webhook.statusColor }}></div>
                        <h3 className="webhook-name">{webhook.name}</h3>
                        <span className="webhook-status-badge" style={{ 
                          backgroundColor: webhook.statusColor === '#22C55E' ? '#DCFCE7' : '#FEF9C3',
                          color: webhook.statusColor === '#22C55E' ? '#166534' : '#854D0E'
                        }}>
                          {webhook.status}
                        </span>
                        <div className="webhook-actions">
                          <button className="webhook-action-btn">
                            <FiSettings size={14} />
                          </button>
                          <button className="webhook-action-btn">
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="webhook-content">
                        <div className="webhook-field">
                          <label className="webhook-field-label">Endpoint URL</label>
                          <p className="webhook-field-value">{webhook.endpoint}</p>
                        </div>

                        <div className="webhook-field">
                          <label className="webhook-field-label">Events</label>
                          <div className="webhook-events">
                            {webhook.events.map((event, idx) => (
                              <span key={idx} className="event-badge">{event}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="webhook-footer">
                        <div className="webhook-meta">
                          <span className="webhook-meta-text">Last triggered: {webhook.lastTriggered}</span>
                          <span className="webhook-success-rate" style={{ color: webhook.successColor }}>
                            Success Rate: {webhook.successRate}
                          </span>
                          <span className="webhook-test-link">Test</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'API Keys' && (
              <div className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">API Key<br/>Management</h2>
                  <p className="section-subtitle">Manage API keys for secure access to system resources</p>
                  <span className="section-update-time">Last updated: Dec 28, 2024 at 4:15 PM</span>
                </div>

                <button className="btn-generate-key">
                  <FiPlus size={14} />
                  <span>Generate Key</span>
                </button>

                <div className="api-keys-container">
                  {apiKeys.map((apiKey) => (
                    <div key={apiKey.id} className="api-key-card">
                      <div className="api-key-header">
                        <div className="api-key-status-dot" style={{ backgroundColor: apiKey.statusColor }}></div>
                        <h3 className="api-key-name">{apiKey.name}</h3>
                        <span className="api-key-status-badge" style={{ 
                          backgroundColor: apiKey.statusBg,
                          color: apiKey.statusText
                        }}>
                          {apiKey.status}
                        </span>
                        <div className="api-key-actions">
                          <button className="api-key-action-btn" title="View">
                            <FiEye size={14} />
                          </button>
                          <button className="api-key-action-btn" title="Copy">
                            <FiCopy size={14} />
                          </button>
                          <button className="api-key-action-btn" title="Delete">
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="api-key-content">
                        <div className="api-key-field">
                          <label className="api-key-field-label">API Key</label>
                          <div className="api-key-value">{apiKey.key}</div>
                        </div>

                        <div className="api-key-field">
                          <label className="api-key-field-label">Permissions</label>
                          <div className="api-key-permissions">
                            {apiKey.permissions.map((perm, idx) => (
                              <span key={idx} className="permission-badge">{perm}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="api-key-footer">
                        <div className="api-key-meta">
                          <span className="api-key-meta-text">
                            Created: {apiKey.created} | Last used: {apiKey.lastUsed}
                          </span>
                          <span className="api-key-requests" style={{ color: apiKey.statusColor }}>
                            {apiKey.requests}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'Branding Settings' && (
              <div className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Branding<br/>Configuration</h2>
                  <p className="section-subtitle">Customize your organization's brand identity across<br/>all applications</p>
                  <span className="section-update-time">Last updated: Dec 28, 2024 at 4:15 PM</span>
                </div>

                <button className="btn-preview">
                  <FiSettings size={14} />
                  <span>Preview</span>
                </button>

                <div className="branding-container">
                  {/* Logo & Icons Section */}
                  <div className="branding-section">
                    <h3 className="branding-section-title">Logo & Icons</h3>

                    <div className="logo-items-grid">
                      {/* Primary Logo */}
                      <div className="logo-item">
                        <label className="logo-label">Primary Logo</label>
                        <div className="logo-preview-box">
                          <img src={brandingSettings.primaryLogo} alt="Primary Logo" className="logo-image" />
                        </div>
                        <div className="logo-button-group">
                          <button className="btn-upload-new">Upload New</button>
                          <button className="btn-remove">Remove</button>
                        </div>
                      </div>

                      {/* Favicon */}
                      <div className="logo-item">
                        <label className="logo-label">Favicon</label>
                        <div className="logo-preview-box">
                          <img src={brandingSettings.favicon} alt="Favicon" className="favicon-image" />
                        </div>
                        <div className="logo-button-group">
                          <button className="btn-upload-new">Upload New</button>
                          <button className="btn-remove">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Colors Section */}
                  <div className="branding-section">
                    <h3 className="branding-section-title">Brand Colors</h3>

                    <div className="colors-grid">
                      {/* Primary Color */}
                      <div className="color-item">
                        <label className="color-label">Primary Color</label>
                        <div className="color-input-group">
                          <div className="color-preview" style={{ backgroundColor: brandingSettings.primaryColor }}></div>
                          <input
                            type="text"
                            className="color-value-input"
                            value={brandingSettings.primaryColor}
                            onChange={(e) => setBrandingSettings({ ...brandingSettings, primaryColor: e.target.value })}
                            placeholder="#2563EB"
                          />
                        </div>
                      </div>

                      {/* Secondary Color */}
                      <div className="color-item">
                        <label className="color-label">Secondary Color</label>
                        <div className="color-input-group">
                          <div className="color-preview" style={{ backgroundColor: brandingSettings.secondaryColor }}></div>
                          <input
                            type="text"
                            className="color-value-input"
                            value={brandingSettings.secondaryColor}
                            onChange={(e) => setBrandingSettings({ ...brandingSettings, secondaryColor: e.target.value })}
                            placeholder="#4B5563"
                          />
                        </div>
                      </div>

                      {/* Accent Color */}
                      <div className="color-item">
                        <label className="color-label">Accent Color</label>
                        <div className="color-input-group">
                          <div className="color-preview" style={{ backgroundColor: brandingSettings.accentColor }}></div>
                          <input
                            type="text"
                            className="color-value-input"
                            value={brandingSettings.accentColor}
                            onChange={(e) => setBrandingSettings({ ...brandingSettings, accentColor: e.target.value })}
                            placeholder="#22C55E"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div className="branding-section">
                    <h3 className="branding-section-title">Typography</h3>

                    <div className="typography-grid">
                      {/* Primary Font */}
                      <div className="font-item">
                        <label className="font-label">Primary Font</label>
                        <select
                          className="font-select"
                          value={brandingSettings.primaryFont}
                          onChange={(e) => setBrandingSettings({ ...brandingSettings, primaryFont: e.target.value })}
                        >
                          <option>Inter</option>
                          <option>Arial</option>
                          <option>Helvetica</option>
                          <option>Georgia</option>
                        </select>
                      </div>

                      {/* Secondary Font */}
                      <div className="font-item">
                        <label className="font-label">Secondary Font</label>
                        <select
                          className="font-select"
                          value={brandingSettings.secondaryFont}
                          onChange={(e) => setBrandingSettings({ ...brandingSettings, secondaryFont: e.target.value })}
                        >
                          <option>Inter</option>
                          <option>Arial</option>
                          <option>Helvetica</option>
                          <option>Georgia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemSettingsPage
