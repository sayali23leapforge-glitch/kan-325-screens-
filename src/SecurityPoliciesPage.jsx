import { useState } from 'react'
import {
  FiLock,
  FiSmartphone,
  FiClock,
  FiLogIn,
  FiWifi,
  FiCheckCircle,
  FiGlobe,
  FiAlertCircle
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import SecurityPoliciesHeader from './SecurityPoliciesHeader'
import SecurityHeroBanner from './SecurityHeroBanner'
import ComplianceStatusCard from './ComplianceStatusCard'
import PolicyCard from './PolicyCard'
import AdditionalPolicyCard from './AdditionalPolicyCard'
import PolicyChangeItem from './PolicyChangeItem'
import SecurityPoliciesSP1Page from './SecurityPoliciesSP1Page'
import './security-policies.css'

function SecurityPoliciesPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [currentView, setCurrentView] = useState('main')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data for policy cards
  const passwordPolicyData = {
    icon: <FiLock size={24} />,
    title: 'Password Policy',
    subtitle: 'Enforce strong password requirements and rotation schedules',
    status: 'ACTIVE',
    statusType: 'active',
    gradient: 'gradient-purple',
    details: [
      { label: 'Minimum Length', value: '12 characters' },
      { label: 'Complexity', value: 'High' },
      { label: 'Rotation Period', value: '90 days' },
      { label: 'History Check', value: 'Last 5' }
    ],
    complianceScore: 100,
    complianceColor: 'green',
    complianceChips: ['SOC 2', 'ISO 27001']
  }

  const mfaPolicyData = {
    icon: <FiSmartphone size={24} />,
    title: 'MFA Policy',
    subtitle: 'Multi-factor authentication requirements and trusted device management',
    status: 'ACTIVE',
    statusType: 'active',
    gradient: 'gradient-blue',
    details: [
      { label: 'Enforcement', value: 'Mandatory' },
      { label: 'Methods Allowed', value: '3 types' },
      { label: 'Remember Device', value: '30 days' },
      { label: 'Grace Period', value: '7 days' }
    ],
    complianceScore: 98,
    complianceColor: 'green',
    complianceChips: ['SOC 2', 'NIST']
  }

  const sessionPolicyData = {
    icon: <FiClock size={24} />,
    title: 'Session Policy',
    subtitle: 'Session timeout, idle detection, and concurrent session limits',
    status: 'REVIEW',
    statusType: 'review',
    gradient: 'gradient-orange',
    details: [
      { label: 'Max Duration', value: '8 hours' },
      { label: 'Idle Timeout', value: '30 minutes' },
      { label: 'Concurrent Sessions', value: '3 max' },
      { label: 'Refresh Token', value: '7 days' }
    ],
    complianceScore: 85,
    complianceColor: 'yellow',
    complianceChips: ['SOC 2', 'ISO 27001']
  }

  // Mock additional policy controls
  const additionalPolicies = [
    {
      icon: <FiLogIn size={20} />,
      title: 'Account Lockout Policy',
      subtitle: 'Define thresholds for failed login attempts and lockout duration',
      status: 'Not Configured'
    },
    {
      icon: <FiWifi size={20} />,
      title: 'IP Whitelist Policy',
      subtitle: 'Restrict access to trusted IP addresses and networks',
      status: 'Not Configured'
    },
    {
      icon: <FiCheckCircle size={20} />,
      title: 'Biometric Policy',
      subtitle: 'Configure biometric authentication options and fallbacks',
      status: 'Not Configured'
    },
    {
      icon: <FiGlobe size={20} />,
      title: 'Geo-Location Policy',
      subtitle: 'Control access based on geographic location and travel patterns',
      status: 'Not Configured'
    }
  ]

  // Mock recent policy changes
  const recentChanges = [
    {
      icon: <FiAlertCircle size={20} />,
      title: 'Password Policy Updated',
      description: 'Minimum password length increased from 10 to 12 characters',
      author: 'Michael Chen',
      timestamp: '2 hours ago'
    },
    {
      icon: <FiAlertCircle size={20} />,
      title: 'MFA Policy Enforcement Extended',
      description: 'Grace period extended to 7 days for new user onboarding',
      author: 'Sarah Williams',
      timestamp: '1 day ago'
    },
    {
      icon: <FiAlertCircle size={20} />,
      title: 'Session Policy Review Scheduled',
      description: 'Quarterly review flagged for compliance optimization',
      author: 'System Automation',
      timestamp: '3 days ago'
    }
  ]

  const handleCreatePolicy = () => {
    console.log('Create policy clicked')
    setShowCreateModal(true)
  }

  const handleConfigure = (policyName) => {
    console.log('Configure clicked for:', policyName)
  }

  const handleMenu = (policyName) => {
    console.log('Menu clicked for:', policyName)
  }

  const handleAddPolicy = () => {
    console.log('Add policy clicked')
  }

  const handleViewReport = () => {
    console.log('View report clicked')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      {currentView === 'sp1' ? (
        <section className="dashboard-main">
          <SecurityPoliciesSP1Page onBack={() => setCurrentView('main')} />
        </section>
      ) : (
        <section className="dashboard-main security-main">
          <SecurityPoliciesHeader
            onCreatePolicy={handleCreatePolicy}
            onSP1Click={() => setCurrentView('sp1')}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            notificationCount={12}
          />

          <div className="security-policies-content">
            <SecurityHeroBanner />

            <ComplianceStatusCard onViewReport={handleViewReport} />

            <div className="policy-cards-section">
              <div className="policy-cards-grid">
                <PolicyCard
                  {...passwordPolicyData}
                  onConfigure={() => handleConfigure('Password Policy')}
                  onMenu={() => handleMenu('Password Policy')}
                />
                <PolicyCard
                  {...mfaPolicyData}
                  onConfigure={() => handleConfigure('MFA Policy')}
                  onMenu={() => handleMenu('MFA Policy')}
                />
                <PolicyCard
                  {...sessionPolicyData}
                  onConfigure={() => handleConfigure('Session Policy')}
                  onMenu={() => handleMenu('Session Policy')}
                />
              </div>
            </div>

            <div className="additional-controls-section">
              <div className="section-header">
                <h2 className="section-title">Additional Policy Controls</h2>
                <button className="btn-add-policy" onClick={handleAddPolicy}>
                  + Add Policy
                </button>
              </div>
              <div className="additional-controls-grid">
                {additionalPolicies.map((policy, idx) => (
                  <AdditionalPolicyCard key={idx} {...policy} />
                ))}
              </div>
            </div>

            <div className="recent-changes-section">
              <h2 className="section-title">Recent Policy Changes</h2>
              <div className="changes-list">
                {recentChanges.map((change, idx) => (
                  <div key={idx}>
                    <PolicyChangeItem {...change} />
                    {idx < recentChanges.length - 1 && <div className="divider" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default SecurityPoliciesPage
