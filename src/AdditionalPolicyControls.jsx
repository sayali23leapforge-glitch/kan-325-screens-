import { FiPlus } from 'react-icons/fi'

function AdditionalPolicyControls() {
  const policies = [
    {
      id: 1,
      icon: '🔐',
      title: 'Account Lockout Policy',
      description: 'Define thresholds for failed login attempts and lockout duration',
      status: 'Not Configured',
      iconBg: '#E0E7FF',
      iconColor: '#4F46E5'
    },
    {
      id: 2,
      icon: '🌐',
      title: 'IP Whitelist Policy',
      description: 'Restrict access to trusted IP addresses and networks',
      status: 'Not Configured',
      iconBg: '#CCFBF1',
      iconColor: '#0D9488'
    },
    {
      id: 3,
      icon: '👆',
      title: 'Biometric Policy',
      description: 'Configure biometric authentication options and fallbacks',
      status: 'Not Configured',
      iconBg: '#FCE7F3',
      iconColor: '#DB2777'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Geo-Location Policy',
      description: 'Control access based on geographic location and travel patterns',
      status: 'Not Configured',
      iconBg: '#FEF3C7',
      iconColor: '#D97706'
    }
  ]

  return (
    <div className="additional-policy-controls-container">
      <div className="controls-header">
        <h3 className="controls-title">Additional Policy Controls</h3>
        <button className="btn-add-policy">
          <FiPlus size={14} />
          Add Policy
        </button>
      </div>
      
      <div className="policy-controls-grid">
        {policies.map((policy) => (
          <div key={policy.id} className="policy-control-card">
            <div 
              className="control-card-icon"
              style={{ backgroundColor: policy.iconBg }}
            >
              {policy.icon}
            </div>
            <div className="control-card-content">
              <h4 className="control-card-title">{policy.title}</h4>
              <p className="control-card-description">{policy.description}</p>
              <div className="control-card-status">{policy.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdditionalPolicyControls
