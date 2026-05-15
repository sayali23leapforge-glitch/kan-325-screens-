import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FiActivity,
  FiBell,
  FiClock,
  FiDatabase,
  FiLock,
  FiMoreHorizontal,
  FiPlus,
  FiSettings,
  FiShield,
  FiShieldOff,
  FiSmartphone,
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import PasswordPolicyConfigurationPage from './PasswordPolicyConfigurationPage'
import EditPasswordPolicyRulesPage from './EditPasswordPolicyRulesPage'
import MfaPolicyPage from './MfaPolicyPage'
import PasswordPolicyRulesSavedPage from './PasswordPolicyRulesSavedPage'
import SessionPolicyManagementPage from './SessionPolicyManagementPage'
import TokensManagementSection from './TokensManagementSection'
import TokenDetailsSection from './TokenDetailsSection'
import './security-policies.css'

function SecurityPoliciesPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const getScreenFromPath = (pathname) => {
    if (pathname.startsWith('/products/tokens/')) return 'token-details'
    if (pathname === '/products/tokens') return 'tokens'
    if (pathname === '/security-policies/session-policy') return 'session-policy'
    if (pathname === '/security-policies/password-policy/saved') return 'password-policy-saved'
    if (pathname === '/security-policies/password-policy/edit') return 'password-policy-edit'
    if (pathname === '/security-policies/mfa-policy') return 'mfa-policy'
    if (pathname === '/security-policies/password-policy') return 'password-policy'
    return 'policies'
  }

  const [activeScreen, setActiveScreen] = useState(() => getScreenFromPath(location.pathname))

  useEffect(() => {
    setActiveScreen(getScreenFromPath(location.pathname))
  }, [location.pathname])

  const navigateToScreen = (screen) => {
    const pathMap = {
      policies: '/security-policies',
      tokens: '/products/tokens',
      'session-policy': '/security-policies/session-policy',
      'mfa-policy': '/security-policies/mfa-policy',
      'password-policy': '/security-policies/password-policy',
      'password-policy-edit': '/security-policies/password-policy/edit',
      'password-policy-saved': '/security-policies/password-policy/saved',
    }
    setActiveScreen(screen)
    navigate(pathMap[screen])
  }

  const tabs = ['Overview', 'Users', 'Roles', 'Security Policies', 'Access', 'Tokens']

  const handleTabClick = (tab) => {
    if (tab === 'Tokens') {
      navigateToScreen('tokens')
      return
    }

    if (tab === 'Security Policies' || tab === 'Access') {
      navigateToScreen('policies')
    }
  }

  const policyCards = [
    {
      id: 'password-policy',
      theme: 'blue',
      icon: <FiLock size={13} />,
      title: 'Password Policy',
      status: 'Active',
      statusType: 'active',
      description: 'Configure password complexity, expiration and account lockout requirements.',
      rows: [['Min Length', '12'], ['Complexity', 'High'], ['Expiry', '90 days']],
      button: 'Edit Rules',
    },
    {
      id: 'mfa-policy',
      theme: 'purple',
      icon: <FiSmartphone size={13} />,
      title: 'MFA Policy',
      status: 'Active',
      statusType: 'active',
      description: 'Multi-factor authentication enforcement for enhanced security.',
      rows: [['Auth Methods', '3'], ['Remember', '7 days'], ['Risk Level', 'Medium']],
      button: 'Enable Enforcement',
    },
    {
      id: 'session-policy',
      theme: 'green',
      icon: <FiClock size={13} />,
      title: 'Session Policy',
      status: 'Review',
      statusType: 'review',
      description: 'Session timeout and concurrent sign in controls.',
      rows: [['Session Timeout', '30 min'], ['Idle Timeout', '15 min'], ['Max Sessions', '2']],
      button: 'Timeout Settings',
    },
    {
      id: 'access-control',
      theme: 'red',
      icon: <FiShieldOff size={13} />,
      title: 'Access Control',
      status: 'Active',
      statusType: 'active',
      description: 'Role based restrictions and permission matrices.',
      rows: [['Role Matrix', 'Enabled'], ['Audit Trail', 'Enabled'], ['Policy Scope', 'Global']],
      button: 'Configure',
    },
    {
      id: 'data-retention',
      theme: 'yellow',
      icon: <FiDatabase size={13} />,
      title: 'Data Retention',
      status: 'Pending',
      statusType: 'pending',
      description: 'Data lifecycle management and archival compliance.',
      rows: [['Retention Period', '2 years'], ['Backup', 'Daily'], ['Auto Cleanup', 'Enabled']],
      button: 'Review Policy',
    },
    {
      id: 'compliance',
      theme: 'indigo',
      icon: <FiActivity size={13} />,
      title: 'Compliance',
      status: 'Active',
      statusType: 'active',
      description: 'Regulatory compliance monitoring and controls.',
      rows: [['Frameworks', 'SOC 2 / GDPR'], ['Last Audit', '15 days ago'], ['Risk Score', 'Low']],
      button: 'View Report',
    },
  ]

  const handlePolicyNavigate = (card) => {
    if (card.id === 'password-policy') { navigateToScreen('password-policy'); return }
    if (card.id === 'session-policy') { navigateToScreen('session-policy'); return }
    if (card.id === 'mfa-policy') { navigateToScreen('mfa-policy') }
  }

  const handleEditRulesClick = (card) => {
    if (card.id === 'password-policy') { navigateToScreen('password-policy-edit') }
    if (card.id === 'session-policy') { navigateToScreen('session-policy') }
  }

  return (
    <div className="spm-page">
      <Sidebar />
      <main className="spm-main">
        {activeScreen === 'password-policy-saved' ? (
          <PasswordPolicyRulesSavedPage
            onBackToPolicies={() => navigateToScreen('policies')}
            onViewPolicy={() => navigateToScreen('password-policy')}
          />
        ) : activeScreen === 'password-policy-edit' ? (
          <EditPasswordPolicyRulesPage
            onBack={() => navigateToScreen('password-policy')}
            onSave={() => navigateToScreen('password-policy-saved')}
          />
        ) : activeScreen === 'mfa-policy' ? (
          <MfaPolicyPage onBack={() => navigateToScreen('policies')} />
        ) : activeScreen === 'session-policy' ? (
          <SessionPolicyManagementPage />
        ) : activeScreen === 'password-policy' ? (
          <PasswordPolicyConfigurationPage onBack={() => navigateToScreen('policies')} />
        ) : (
          <>
            <header className="spm-header">
              <div>
                <h1 className="spm-header-title">Security Policy Management</h1>
                <div className="spm-breadcrumbs">
                  <span>Home</span>
                  <span className="spm-crumb-sep">&gt;</span>
                  <span>Security</span>
                  <span className="spm-crumb-sep">&gt;</span>
                  <span className="spm-crumb-active">Policies</span>
                </div>
              </div>
              <div className="spm-header-actions">
                <button className="spm-notify-btn" aria-label="Notifications">
                  <FiBell size={15} />
                  <span className="spm-notify-count">3</span>
                </button>
                <button className="spm-new-policy-btn">
                  <FiPlus size={14} />
                  New Policy
                </button>
              </div>
            </header>

            <section className="spm-suite-card">
              <div className="spm-suite-main">
                <div className="spm-suite-icon">
                  <FiShield size={18} />
                </div>
                <div className="spm-suite-text">
                  <h2>IAM Security Suite</h2>
                  <p>Identity and Access Management for secure enterprise collaboration</p>
                  <div className="spm-suite-meta">
                    <span><i className="spm-status-dot" />Active</span>
                    <span>Version: 3.1</span>
                    <span>Users: 247</span>
                  </div>
                </div>
              </div>
              <div className="spm-suite-actions">
                <button className="spm-outline-btn">
                  <FiSettings size={13} />
                  Configure
                </button>
                <button className="spm-primary-btn">Save Changes</button>
              </div>
            </section>

            <div className="spm-tabs" role="tablist" aria-label="Security tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`spm-tab ${
                    activeScreen === 'tokens' || activeScreen === 'token-details'
                      ? (tab === 'Tokens' ? 'active' : '')
                      : (tab === 'Security Policies' ? 'active' : '')
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeScreen === 'tokens' ? (
              <TokensManagementSection />
            ) : activeScreen === 'token-details' ? (
              <TokenDetailsSection
                tokenId={location.pathname.replace('/products/tokens/', '')}
                onBackToTokens={() => navigateToScreen('tokens')}
              />
            ) : (
              <section className="spm-policy-shell">
                <h3>Security Policy Configuration</h3>
                <p>Configure and manage security policies for your organization</p>
                <div className="spm-policy-grid">
                  {policyCards.map((card) => (
                    <article key={card.title} className="spm-policy-card">
                      <div className="spm-policy-card-top">
                        <div className={`spm-card-icon ${card.theme}`}>{card.icon}</div>
                        <span className={`spm-card-status ${card.statusType}`}>{card.status}</span>
                      </div>
                      <h4
                        onClick={() => handlePolicyNavigate(card)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePolicyNavigate(card) }}
                        aria-label={`Open ${card.title}`}
                      >
                        {card.title}
                      </h4>
                      <p className="spm-card-desc">{card.description}</p>
                      <div className="spm-card-rows">
                        {card.rows.map(([label, value]) => (
                          <div key={label} className="spm-card-row">
                            <span>{label}</span>
                            <strong>{value}</strong>
                          </div>
                        ))}
                      </div>
                      <div className="spm-card-actions">
                        <button
                          className={`spm-card-action-btn ${card.theme}`}
                          onClick={() => handleEditRulesClick(card)}
                        >
                          {card.button}
                        </button>
                        <button className="spm-card-more-btn" aria-label="More options">
                          <FiMoreHorizontal size={14} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default SecurityPoliciesPage
