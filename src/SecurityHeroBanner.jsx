import { FiShield } from 'react-icons/fi'

function SecurityHeroBanner() {
  return (
    <div className="security-hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Policy Configuration Center</h2>
          <p className="hero-subtitle">
            Manage authentication, authorization, and session policies to ensure enterprise-grade security across your organization
          </p>
        </div>
        <div className="hero-icon-box">
          <FiShield size={48} />
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="stat-value">3</div>
          <div className="stat-label">Active Policies</div>
        </div>
        <div className="hero-stat">
          <div className="stat-value">2</div>
          <div className="stat-label">Require Review</div>
        </div>
        <div className="hero-stat">
          <div className="stat-value">98%</div>
          <div className="stat-label">Compliance Score</div>
        </div>
      </div>
    </div>
  )
}

export default SecurityHeroBanner
