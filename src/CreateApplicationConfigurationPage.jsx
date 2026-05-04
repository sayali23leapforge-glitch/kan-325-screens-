import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import StepProgress from './StepProgress'
import UriFieldList from './UriFieldList'
import GrantTypeCard from './GrantTypeCard'
import TokenSettingsSection from './TokenSettingsSection'
import AdvancedSettingsAccordion from './AdvancedSettingsAccordion'
import './create-application-configuration.css'

function CreateApplicationConfigurationPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Redirect URIs state
  const [redirectUris, setRedirectUris] = useState([
    { id: 1, value: 'https://localhost:3000/callback', isValid: true },
    { id: 2, value: 'https://example.com/callback', isValid: true },
    { id: 3, value: 'https://example.com/callback-staging', isValid: true },
    { id: 4, value: 'https://example.com/callback-dev', isValid: true },
  ])

  // Logout URIs state
  const [logoutUris, setLogoutUris] = useState([
    { id: 1, value: 'https://example.com/logout', isValid: true },
  ])

  // Grant types state (multi-select)
  const [grantTypes, setGrantTypes] = useState({
    authorizationCode: true,
    refreshToken: true,
    implicit: false,
    clientCredentials: false,
  })

  // Token settings state
  const [tokenSettings, setTokenSettings] = useState({
    accessTokenExpiry: 3600,
    refreshTokenExpiry: 2592000,
    idTokenExpiry: 3600,
    authCodeExpiry: 60,
  })

  // Advanced settings state
  const [advancedOpen, setAdvancedOpen] = useState(false)

  // Form state
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    // Validate redirect URIs
    if (redirectUris.length === 0) {
      newErrors.redirectUris = 'At least one redirect URI is required'
    } else if (redirectUris.some(uri => uri.isValid === false)) {
      newErrors.redirectUris = 'All redirect URIs must be valid HTTPS URLs'
    }

    // Validate grant types
    const hasSelectedGrantType = Object.values(grantTypes).some(v => v === true)
    if (!hasSelectedGrantType) {
      newErrors.grantTypes = 'At least one grant type must be selected'
    }

    return newErrors
  }

  const handleBack = () => {
    navigate('/applications/create')
  }

  const handleSaveDraft = () => {
    console.log('Saving draft with configuration:', {
      redirectUris,
      logoutUris,
      grantTypes,
      tokenSettings,
    })
    // TODO: Implement actual draft save to API
  }

  const handleContinue = () => {
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Configuration saved:', {
      redirectUris,
      logoutUris,
      grantTypes,
      tokenSettings,
    })

    // Navigate to review page (Step 3)
    navigate('/applications/create/review')
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
            <p className="page-subtitle">OAuth2/OIDC Configuration</p>
          </div>
          <div className="header-breadcrumb">
            Applications / <span>Create</span>
          </div>
        </div>

        <div className="form-container">
          <StepProgress currentStep={2} />

          <div className="configuration-form">
            {errors.redirectUris && (
              <div className="error-banner">
                <span>{errors.redirectUris}</span>
              </div>
            )}

            {errors.grantTypes && (
              <div className="error-banner">
                <span>{errors.grantTypes}</span>
              </div>
            )}

            {/* Redirect URIs Section */}
            <UriFieldList
              uris={redirectUris}
              onUrisChange={setRedirectUris}
              label="Redirect URIs"
              helperText="After authentication, users will be redirected to these URLs. You can specify multiple URLs for different environments."
              isRequired={true}
            />

            {/* Logout URIs Section */}
            <UriFieldList
              uris={logoutUris}
              onUrisChange={setLogoutUris}
              label="Post Logout Redirect URIs"
              helperText="Users will be redirected to these URLs after logging out"
              isRequired={false}
            />

            {/* Grant Types Section */}
            <div className="grant-types-section">
              <div className="section-header">
                <label className="section-label">
                  Grant Types
                  <span className="required"> *</span>
                </label>
                <p className="section-helper-text">Select the OAuth2 flows that your application will use</p>
              </div>

              <div className="grant-types-grid">
                <GrantTypeCard
                  type="authorizationCode"
                  title="Authorization Code"
                  description="Most secure flow for web applications. Exchanges auth code for tokens server-to-server."
                  isSelected={grantTypes.authorizationCode}
                  onChange={(selected) =>
                    setGrantTypes({ ...grantTypes, authorizationCode: selected })
                  }
                />

                <GrantTypeCard
                  type="refreshToken"
                  title="Refresh Token"
                  description="Obtain new access tokens without re-authentication. Use to extend user sessions."
                  isSelected={grantTypes.refreshToken}
                  onChange={(selected) =>
                    setGrantTypes({ ...grantTypes, refreshToken: selected })
                  }
                />

                <GrantTypeCard
                  type="implicit"
                  title="Implicit"
                  description="For single-page applications (deprecated). Tokens are returned directly in URL."
                  isSelected={grantTypes.implicit}
                  onChange={(selected) =>
                    setGrantTypes({ ...grantTypes, implicit: selected })
                  }
                  isDeprecated={true}
                />

                <GrantTypeCard
                  type="clientCredentials"
                  title="Client Credentials"
                  description="For machine-to-machine authentication. Backend services authenticate directly."
                  isSelected={grantTypes.clientCredentials}
                  onChange={(selected) =>
                    setGrantTypes({ ...grantTypes, clientCredentials: selected })
                  }
                />
              </div>
            </div>

            {/* Token Settings Section */}
            <TokenSettingsSection
              settings={tokenSettings}
              onSettingsChange={setTokenSettings}
            />

            {/* Advanced Settings Section */}
            <AdvancedSettingsAccordion
              isOpen={advancedOpen}
              onToggle={setAdvancedOpen}
            />
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button className="btn-secondary" onClick={handleBack}>
              ← Back
            </button>
            <button className="btn-secondary" onClick={handleSaveDraft}>
              Save as Draft
            </button>
            <button className="btn-primary" onClick={handleContinue}>
              Continue to Review →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateApplicationConfigurationPage
