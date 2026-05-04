import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import StepProgress from './StepProgress'
import ReviewSectionCard from './ReviewSectionCard'
import InfoRow from './InfoRow'
import StatusItem from './StatusItem'
import SuccessBanner from './SuccessBanner'
import './create-application-final-review.css'

function CreateApplicationFinalReviewPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [secretVisible, setSecretVisible] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  // Mock application data
  const applicationData = {
    name: 'Customer Portal',
    description: 'A web application for customer self-service portal',
    type: 'Web Application',
    clientId: 'cust_portal_2024_a7b3c9d1',
    clientSecret: 'your_client_secret_here',
    callbackUrls: [
      'https://portal.company.com/auth/callback',
      'https://dev-portal.company.com/auth/callback'
    ],
    logoutUrls: [
      'https://portal.company.com/logout'
    ],
    tokenSettings: {
      accessTokenExpiry: '3600 seconds',
      refreshTokenExpiry: '30 days'
    },
    grantTypes: ['Authorization Code', 'Refresh Token'],
    security: {
      pkceRequired: true,
      authTimeRequired: false,
      skipConsentScreen: false
    }
  }

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    // Could add a toast notification here
  }

  const handleEditSection = (section) => {
    // Navigate to the related edit section
    if (section === 'basic') {
      navigate('/applications/create')
    } else if (section === 'oauth') {
      navigate('/applications/create/configuration')
    } else if (section === 'security') {
      navigate('/applications/create/configuration')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleCreateApplication = async () => {
    setIsCreating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Application created successfully:', applicationData)
      // Navigate to applications list
      navigate('/applications')
    } catch (error) {
      console.error('Error creating application:', error)
      setIsCreating(false)
    }
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <div className="create-app-header">
          <button type="button" className="mobile-menu-button" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
            <FiMenu />
          </button>
          <div className="header-content">
            <h1 className="page-title">Create Application</h1>
            <p className="page-subtitle">Review and confirm your application settings</p>
          </div>
          <div className="header-breadcrumb">
            <span className="breadcrumb-link">Home</span>
            {' / '}
            <span className="breadcrumb-link">IAM</span>
            {' / '}
            <span className="breadcrumb-link">Applications</span>
            {' / '}
            <span className="breadcrumb-current">Create</span>
          </div>
        </div>

        <div className="final-review-container">
          {/* Step Progress */}
          <StepProgress currentStep={3} />

          {/* Main Review Card */}
          <div className="final-review-card">
            <div className="final-review-card-header">
              <h2 className="final-review-card-title">Review Application</h2>
              <p className="final-review-card-subtitle">Please review the application settings before creating</p>
            </div>

            <div className="final-review-card-content">
              {/* Basic Information Section */}
              <ReviewSectionCard
                title="Basic Information"
                onEdit={() => handleEditSection('basic')}
              >
                <div className="basic-info-layout">
                  <div className="basic-info-icon-section">
                    <div className="basic-info-icon">🔷</div>
                  </div>
                  <div className="basic-info-details">
                    <h3 className="basic-info-name">{applicationData.name}</h3>
                    <p className="basic-info-description">{applicationData.description}</p>
                    <div className="basic-info-type-pill">{applicationData.type}</div>
                  </div>
                </div>

                <div className="basic-info-credentials">
                  <InfoRow
                    label="Client ID"
                    value={applicationData.clientId}
                    isCode={true}
                    onCopy={() => handleCopy(applicationData.clientId)}
                  />
                  <InfoRow
                    label="Client Secret"
                    value={applicationData.clientSecret}
                    isMasked={!secretVisible}
                    isCode={true}
                    onCopy={() => handleCopy(applicationData.clientSecret)}
                    onToggleVisibility={() => setSecretVisible(!secretVisible)}
                  />
                </div>
              </ReviewSectionCard>

              {/* OAuth2/OIDC Configuration Section */}
              <ReviewSectionCard
                title="OAuth2/OIDC Configuration"
                onEdit={() => handleEditSection('oauth')}
              >
                <div className="oauth-config-layout">
                  <div className="oauth-config-column">
                    <div className="oauth-config-subsection">
                      <label className="oauth-config-subsection-label">Callback URLs</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {applicationData.callbackUrls.map((url, index) => (
                          <div key={index} className="uri-display-pill">
                            <span className="uri-display-icon">✓</span>
                            <span>{url}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="oauth-config-subsection">
                      <label className="oauth-config-subsection-label">Logout URLs</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {applicationData.logoutUrls.map((url, index) => (
                          <div key={index} className="uri-display-pill">
                            <span className="uri-display-icon">✓</span>
                            <span>{url}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="oauth-config-column">
                    <div className="oauth-config-subsection">
                      <label className="oauth-config-subsection-label">Token Settings</label>
                      {Object.entries(applicationData.tokenSettings).map(([key, value]) => (
                        <div key={key} className="token-setting-display">
                          <span className="token-setting-label">
                            {key === 'accessTokenExpiry' && 'Access Token Expiration'}
                            {key === 'refreshTokenExpiry' && 'Refresh Token Expiration'}
                          </span>
                          <span className="token-setting-value">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="oauth-config-subsection">
                      <label className="oauth-config-subsection-label">Grant Types</label>
                      <div className="grant-types-display-container">
                        {applicationData.grantTypes.map((grantType, index) => (
                          <div key={index} className="grant-type-display-pill">
                            <span>✓</span>
                            <span>{grantType}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ReviewSectionCard>

              {/* Security Settings Section */}
              <ReviewSectionCard
                title="Security Settings"
                onEdit={() => handleEditSection('security')}
              >
                <div className="security-settings-layout">
                  <StatusItem
                    title="PKCE Required"
                    subtitle="Enhanced security"
                    enabled={applicationData.security.pkceRequired}
                  />
                  <StatusItem
                    title="Auth Time"
                    subtitle="Disabled"
                    enabled={applicationData.security.authTimeRequired}
                  />
                  <StatusItem
                    title="Skip Consent"
                    subtitle="Disabled"
                    enabled={applicationData.security.skipConsentScreen}
                  />
                </div>
              </ReviewSectionCard>

              {/* Success Banner */}
              <div style={{ padding: '0 24px 24px 24px' }}>
                <SuccessBanner />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="final-review-footer">
            <button
              className="final-review-action-btn secondary"
              onClick={handleBack}
              disabled={isCreating}
            >
              ← Back
            </button>
            <button
              className="final-review-action-btn primary"
              onClick={handleCreateApplication}
              disabled={isCreating}
            >
              {isCreating ? 'Creating Application...' : '+ Create Application'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateApplicationFinalReviewPage
