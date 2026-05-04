import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCheckCircle, FiCheck, FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import StepProgress from './StepProgress'
import ReviewHeroBanner from './ReviewHeroBanner'
import ReviewSection from './ReviewSection'
import SummaryField from './SummaryField'
import TokenSummaryCard from './TokenSummaryCard'
import SettingStatusCard from './SettingStatusCard'
import SecurityAssessmentCard from './SecurityAssessmentCard'
import './create-application-review.css'

function CreateApplicationReviewPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data from previous steps (in production, this would come from state or context)
  const applicationData = {
    name: 'Enterprise Portal App',
    type: 'Web Application',
    clientId: 'portal-app-client-2024',
    description: 'Main enterprise portal for employee access and management',
    redirectUris: [
      'https://portal.company.com/auth/callback',
      'https://dev-portal.company.com/auth/callback'
    ],
    logoutRedirectUris: [
      'https://portal.company.com/logout'
    ],
    grantTypes: ['Authorization Code', 'Refresh Token'],
    tokenSettings: {
      accessTokenExpiry: 3600,
      refreshTokenExpiry: 2592000,
      idTokenExpiry: 3600,
      authCodeExpiry: 60
    }
  }

  const [isCreating, setIsCreating] = useState(false)

  const handleBackToConfiguration = () => {
    navigate('/applications/create/configuration')
  }

  const handleSaveAsDraft = () => {
    console.log('Saving as draft:', applicationData)
    // TODO: Implement actual API call
  }

  const handleCreateApplication = async () => {
    setIsCreating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Application created:', applicationData)
      // Navigate to final review page
      navigate('/applications/create/final-review')
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
            <p className="page-subtitle">Review and confirm your OAuth2/OIDC configuration</p>
          </div>
          <div className="header-breadcrumb">
            <span className="breadcrumb-link">Home</span>
            {' / '}
            <span className="breadcrumb-link">IAM</span>
            {' / '}
            <span className="breadcrumb-link">Applications</span>
            {' / '}
            <span className="breadcrumb-current">Review</span>
          </div>
        </div>

        <div className="review-container">
          {/* Step Progress */}
          <StepProgress currentStep={3} />

          {/* Review Card */}
          <div className="review-card">
            {/* Hero Banner */}
            <ReviewHeroBanner
              appName={applicationData.name}
              appType={applicationData.type}
              status="Ready for deployment"
            />

            {/* Sections Container */}
            <div className="review-sections-container">
              {/* Basic Information Section */}
              <ReviewSection title="Basic Information" icon="ℹ️">
                <div className="summary-fields-grid">
                  <div>
                    <SummaryField label="Application Name" value={applicationData.name} />
                  </div>
                  <div>
                    <SummaryField label="Application Type" value={applicationData.type} />
                  </div>
                  <div>
                    <SummaryField label="Client ID" value={applicationData.clientId} isMuted={true} />
                  </div>
                  <div>
                    <SummaryField label="Description" value={applicationData.description} />
                  </div>
                </div>
              </ReviewSection>

              {/* OAuth2/OIDC Configuration Section */}
              <ReviewSection title="OAuth2/OIDC Configuration" icon="🔐">
                {/* Redirect URIs */}
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Redirect URIs
                  </h4>
                  <div className="uri-pills-container">
                    {applicationData.redirectUris.map((uri, index) => (
                      <div key={index} className="uri-pill">
                        <FiCheck size={14} className="uri-pill-icon" />
                        <span>{uri}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logout Redirect URIs */}
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Logout Redirect URIs
                  </h4>
                  <div className="uri-pills-container">
                    {applicationData.logoutRedirectUris.map((uri, index) => (
                      <div key={index} className="uri-pill">
                        <FiCheck size={14} className="uri-pill-icon" />
                        <span>{uri}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grant Types */}
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Grant Types
                  </h4>
                  <div className="grant-types-display">
                    {applicationData.grantTypes.map((grantType, index) => (
                      <div key={index} className="grant-type-pill">
                        <FiCheck size={14} className="grant-type-pill-icon" />
                        <span>{grantType}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ReviewSection>

              {/* Token Lifetime Settings Section */}
              <ReviewSection title="Token Lifetime Settings" icon="⏱️">
                <div className="token-summary-grid">
                  <TokenSummaryCard
                    title="Access Token Expiration"
                    value="3600"
                    unit="seconds"
                    helper="1 hour"
                  />
                  <TokenSummaryCard
                    title="Refresh Token Expiration"
                    value="30"
                    unit="days"
                    helper="2,592,000 seconds"
                  />
                  <TokenSummaryCard
                    title="ID Token Expiration"
                    value="3600"
                    unit="seconds"
                    helper="1 hour"
                  />
                  <TokenSummaryCard
                    title="Authorization Code Expiration"
                    value="60"
                    unit="seconds"
                    helper="1 minute"
                  />
                </div>
              </ReviewSection>

              {/* Advanced Settings Section */}
              <ReviewSection title="Advanced Settings" icon="⚙️">
                <div className="advanced-settings-grid">
                  <SettingStatusCard title="Require PKCE" enabled={true} />
                  <SettingStatusCard title="Rotate Refresh Tokens" enabled={true} />
                  <SettingStatusCard title="Require Auth Time" enabled={false} />
                  <SettingStatusCard title="Skip Consent Screen" enabled={false} />
                </div>

                <div className="additional-settings-text">
                  <div className="setting-text-item">
                    <span className="setting-text-label">Token Endpoint Authentication</span>
                    <span className="setting-text-value">Client Secret Basic</span>
                  </div>
                  <div className="setting-text-item">
                    <span className="setting-text-label">CORS Origins</span>
                    <span className="setting-text-value">None configured</span>
                  </div>
                </div>
              </ReviewSection>

              {/* Security Assessment Section */}
              <div style={{ padding: '24px' }}>
                <SecurityAssessmentCard />
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="review-action-footer">
            <button
              className="review-action-button secondary"
              onClick={handleBackToConfiguration}
              disabled={isCreating}
            >
              <FiArrowLeft size={14} />
              Back to Configuration
            </button>
            <button
              className="review-action-button secondary"
              onClick={handleSaveAsDraft}
              disabled={isCreating}
            >
              Save as Draft
            </button>
            <button
              className="review-action-button primary"
              onClick={handleCreateApplication}
              disabled={isCreating}
            >
              {isCreating ? 'Creating...' : 'Create Application'}
              {!isCreating && ' →'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateApplicationReviewPage
