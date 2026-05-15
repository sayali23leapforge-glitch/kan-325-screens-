import { useState } from 'react'
import { FiLock, FiSmartphone, FiClock, FiPlus, FiEdit2, FiMoreVertical } from 'react-icons/fi'
import EditPasswordPolicyRulesPage from './EditPasswordPolicyRulesPage'
import EditMFAPolicyPage from './EditMFAPolicyPage'
import './security-policy-configuration.css'

function SecurityPolicyConfigurationView() {
  const [selectedPolicy, setSelectedPolicy] = useState(null)

  if (selectedPolicy === 'Password Policy') {
    return <EditPasswordPolicyRulesPage onBack={() => setSelectedPolicy(null)} onSave={() => setSelectedPolicy(null)} />
  }
  if (selectedPolicy === 'MFA Policy') {
    return <EditMFAPolicyPage onBack={() => setSelectedPolicy(null)} />
  }

  const policies = [
    {
      id: 'password', name: 'Password Policy',
      icon: <FiLock size={24} />, iconColor: '#7C3AED', bgColor: '#EDE9FE',
      status: 'Active', statusColor: '#16A34A', statusBg: '#DCFCE7',
      description: 'Enforce strong password requirements',
      details: [{ label: 'Min Length', value: '12 chars' }, { label: 'Complexity', value: 'High' }, { label: 'Rotation', value: '90 days' }, { label: 'History', value: 'Last 5' }],
      compliance: 100, complianceColor: '#16A34A', badges: ['SOC 2', 'ISO 27001']
    },
    {
      id: 'mfa', name: 'MFA Policy',
      icon: <FiSmartphone size={24} />, iconColor: '#2563EB', bgColor: '#DBEAFE',
      status: 'Active', statusColor: '#16A34A', statusBg: '#DCFCE7',
      description: 'Multi-factor authentication requirements',
      details: [{ label: 'Enforcement', value: 'Mandatory' }, { label: 'Methods', value: '3 types' }, { label: 'Remember', value: '30 days' }, { label: 'Grace', value: '7 days' }],
      compliance: 98, complianceColor: '#16A34A', badges: ['SOC 2', 'NIST']
    },
    {
      id: 'session', name: 'Session Policy',
      icon: <FiClock size={24} />, iconColor: '#D97706', bgColor: '#FEF3C7',
      status: 'Review', statusColor: '#D97706', statusBg: '#FEF3C7',
      description: 'Session timeout and idle detection settings',
      details: [{ label: 'Max Duration', value: '8 hours' }, { label: 'Idle Timeout', value: '30 min' }, { label: 'Concurrent', value: '3 max' }, { label: 'Refresh', value: '7 days' }],
      compliance: 85, complianceColor: '#D97706', badges: ['SOC 2', 'ISO 27001']
    }
  ]

  return (
    <div className="security-config-view">
      <div className="security-config-header">
        <div>
          <h2 className="security-config-title">Security Policy Configuration</h2>
          <p className="security-config-subtitle">Manage and configure security policies for your organization</p>
        </div>
        <button className="btn-create-policy"><FiPlus size={16} />Create Custom Policy</button>
      </div>
      <div className="policy-cards-grid">
        {policies.map(policy => (
          <div key={policy.id} className="policy-config-card">
            <div className="policy-config-card-header">
              <div className="policy-icon-wrap" style={{ background: policy.bgColor, color: policy.iconColor }}>{policy.icon}</div>
              <span className="policy-status-badge" style={{ background: policy.statusBg, color: policy.statusColor }}>{policy.status}</span>
              <button className="policy-menu-btn"><FiMoreVertical size={16} /></button>
            </div>
            <h3 className="policy-card-title">{policy.name}</h3>
            <p className="policy-card-desc">{policy.description}</p>
            <div className="policy-details-grid">
              {policy.details.map((d, i) => (
                <div key={i} className="policy-detail-item">
                  <span className="policy-detail-label">{d.label}</span>
                  <span className="policy-detail-value">{d.value}</span>
                </div>
              ))}
            </div>
            <div className="policy-compliance-row">
              <span className="compliance-label">Compliance Score</span>
              <span className="compliance-score" style={{ color: policy.complianceColor }}>{policy.compliance}%</span>
            </div>
            <div className="compliance-bar-bg">
              <div className="compliance-bar-fill" style={{ width: `${policy.compliance}%`, background: policy.complianceColor }} />
            </div>
            <div className="policy-badges-row">
              {policy.badges.map(b => <span key={b} className="policy-badge">{b}</span>)}
            </div>
            <div className="policy-card-actions">
              <button className="btn-edit-rules" onClick={() => setSelectedPolicy(policy.name)}><FiEdit2 size={14} />Edit Rules</button>
              <button className="btn-view-policy">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityPolicyConfigurationView
