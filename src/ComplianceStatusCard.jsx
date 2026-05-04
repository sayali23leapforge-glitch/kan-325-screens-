import { FiCheck } from 'react-icons/fi'

function ComplianceStatusCard({ onViewReport = () => {} }) {
  return (
    <div className="compliance-status-card">
      <div className="compliance-status-left">
        <div className="compliance-icon-box">
          <FiCheck size={24} />
        </div>
        <div className="compliance-status-content">
          <h3 className="compliance-status-title">
            Compliance Status: Excellent
          </h3>
          <p className="compliance-status-subtitle">
            All critical policies are active and meet industry standards (SOC 2, ISO 27001)
          </p>
        </div>
      </div>
      <button className="compliance-report-link" onClick={onViewReport}>
        View Full Report →
      </button>
    </div>
  )
}

export default ComplianceStatusCard
