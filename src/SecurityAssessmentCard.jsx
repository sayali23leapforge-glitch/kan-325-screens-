import { FiCheckCircle } from 'react-icons/fi'
import './create-application-review.css'

function SecurityAssessmentCard() {
  const checklist = [
    'PKCE enabled for enhanced security',
    'Secure token lifetime configuration',
    'Refresh token rotation enabled',
    'Valid HTTPS redirect URIs'
  ]

  return (
    <div className="security-assessment-card">
      <div className="security-assessment-header">
        <h3 className="security-assessment-title">Security Assessment</h3>
      </div>
      
      <div className="security-metrics">
        <div className="security-metric">
          <span className="security-metric-value">A+</span>
          <span className="security-metric-label">Security Score</span>
        </div>
        <div className="security-metric">
          <span className="security-metric-value">5/5</span>
          <span className="security-metric-label">Best Practices</span>
        </div>
        <div className="security-metric">
          <span className="security-metric-value">0</span>
          <span className="security-metric-label">Warnings</span>
        </div>
      </div>

      <div className="security-checklist">
        {checklist.map((item, index) => (
          <div key={index} className="security-check-item">
            <FiCheckCircle size={16} className="check-icon" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityAssessmentCard
