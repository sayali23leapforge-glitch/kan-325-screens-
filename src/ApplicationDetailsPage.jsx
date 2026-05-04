import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import ApplicationHeader from './ApplicationHeader'
import DetailsTabs from './DetailsTabs'
import StatCard from './StatCard'
import CredentialField from './CredentialField'
import EndpointField from './EndpointField'
import IntegrationGuideBanner from './IntegrationGuideBanner'
import ApplicationSettingsPage from './ApplicationSettingsPage'
import ApplicationCredentialsPage from './ApplicationCredentialsPage'
import ApplicationBrandingPage from './ApplicationBrandingPage'
import ApplicationLogsPage from './ApplicationLogsPage'
import './application-details.css'

function ApplicationDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('overview')
  const [secretVisible, setSecretVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock application data
  const applicationData = {
    id: id || '1',
    name: 'E-Commerce Dashboard',
    environment: 'Production Application',
    clientId: 'ecom_dashboard_prod_2024',
    clientSecret: 'your_client_secret_here',
    stats: {
      users: { value: '12,847', trend: '+12%', footer: 'Last 30 days' },
      logins: { value: '1,429', trend: '+8%', footer: 'Today' },
      failedLogins: { value: '23', trend: '-5%', footer: 'Last 24 hours' }
    },
    endpoints: {
      authorization: 'https://auth.karnovate.com/oauth2/authorize',
      token: 'https://auth.karnovate.com/oauth2/token',
      userinfo: 'https://auth.karnovate.com/oauth2/userinfo',
      jwks: 'https://auth.karnovate.com/.well-known/jwks.json'
    }
  }

  const handleEdit = () => {
    console.log('Edit application:', applicationData.id)
    // Navigate to edit page
  }

  const handleDelete = () => {
    console.log('Delete application:', applicationData.id)
    // Show confirmation modal
  }

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
  }

  const handleRotateSecret = () => {
    console.log('Rotate client secret')
    // Show confirmation modal
  }

  const handleViewGuide = () => {
    console.log('View integration guide')
    // Open guide or navigate to guide page
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        {/* Header */}
        <ApplicationHeader
          appName={applicationData.name}
          environment={applicationData.environment}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Breadcrumb */}
        <div className="details-breadcrumb">
          <span className="breadcrumb-link">Home</span>
          {' / '}
          <span className="breadcrumb-link">IAM</span>
          {' / '}
          <span className="breadcrumb-link">Applications</span>
          {' / '}
          <span className="breadcrumb-current">{applicationData.name}</span>
        </div>

        {/* Tabs */}
        <DetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div className="details-content">
            {/* Stats Row */}
            <div className="stats-grid">
              <StatCard
                icon="👥"
                label="Total Users"
                value={applicationData.stats.users.value}
                trend={applicationData.stats.users.trend}
                footer={applicationData.stats.users.footer}
                trendType="positive"
              />
              <StatCard
                icon="📱"
                label="Daily Logins"
                value={applicationData.stats.logins.value}
                trend={applicationData.stats.logins.trend}
                footer={applicationData.stats.logins.footer}
                trendType="positive"
              />
              <StatCard
                icon="⚠️"
                label="Failed Logins"
                value={applicationData.stats.failedLogins.value}
                trend={applicationData.stats.failedLogins.trend}
                footer={applicationData.stats.failedLogins.footer}
                trendType="negative"
              />
            </div>

            {/* Main Content Grid */}
            <div className="details-grid">
              {/* Client Credentials Card */}
              <div className="details-card">
                <h3 className="details-card-title">Client Credentials</h3>
                <div className="details-card-content">
                  <CredentialField
                    label="Client ID"
                    value={applicationData.clientId}
                    onCopy={() => handleCopy(applicationData.clientId)}
                  />
                  <CredentialField
                    label="Client Secret"
                    value={applicationData.clientSecret}
                    isMasked={!secretVisible}
                    onCopy={() => handleCopy(applicationData.clientSecret)}
                    onToggleVisibility={() => setSecretVisible(!secretVisible)}
                    showToggle={true}
                  />
                  <div className="rotate-secret-section">
                    <button className="btn-danger" onClick={handleRotateSecret}>
                      🔄 Rotate Client Secret
                    </button>
                    <p className="rotate-secret-note">This will invalidate the current secret immediately</p>
                  </div>
                </div>
              </div>

              {/* OIDC Endpoints Card */}
              <div className="details-card">
                <h3 className="details-card-title">OIDC Endpoints</h3>
                <div className="details-card-content">
                  <EndpointField
                    label="Authorization Endpoint"
                    value={applicationData.endpoints.authorization}
                    onCopy={() => handleCopy(applicationData.endpoints.authorization)}
                  />
                  <EndpointField
                    label="Token Endpoint"
                    value={applicationData.endpoints.token}
                    onCopy={() => handleCopy(applicationData.endpoints.token)}
                  />
                  <EndpointField
                    label="UserInfo Endpoint"
                    value={applicationData.endpoints.userinfo}
                    onCopy={() => handleCopy(applicationData.endpoints.userinfo)}
                  />
                  <EndpointField
                    label="JWKS Endpoint"
                    value={applicationData.endpoints.jwks}
                    onCopy={() => handleCopy(applicationData.endpoints.jwks)}
                  />
                </div>
              </div>
            </div>

            {/* Integration Guide Banner */}
            <IntegrationGuideBanner onViewGuide={handleViewGuide} />
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <ApplicationSettingsPage />
        )}

        {/* Credentials Tab */}
        {activeTab === 'credentials' && (
          <ApplicationCredentialsPage />
        )}

        {/* Branding Tab */}
        {activeTab === 'branding' && (
          <ApplicationBrandingPage />
        )}

        {/* Logs Tab */}
        {activeTab === 'logs' && (
          <ApplicationLogsPage />
        )}
      </section>
    </main>
  )
}

export default ApplicationDetailsPage
