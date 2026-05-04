import { useNavigate } from 'react-router-dom'
import { FiPlus, FiFileText, FiPlay } from 'react-icons/fi'
import './applications-empty-state.css'

function EmptyStateHero() {
  const navigate = useNavigate()

  const handleCreateApp = () => {
    navigate('/applications/create')
  }

  return (
    <div className="empty-state-hero">
      {/* Icon Circle */}
      <div className="empty-state-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="box-icon"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <polyline points="12 22.08 12 12" />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="empty-state-heading">No applications yet</h2>

      {/* Description */}
      <p className="empty-state-description">
        Get started by creating your first OAuth2/OIDC application.
        <br />
        You can configure web apps, mobile applications, and API
        <br />
        services to integrate with your identity provider.
      </p>

      {/* Primary CTA Button */}
      <button className="empty-state-cta" onClick={handleCreateApp}>
        <FiPlus size={18} />
        <span>Create Your First Application</span>
      </button>

      {/* Secondary Links */}
      <div className="empty-state-links">
        <a href="#" className="empty-state-link">
          <FiFileText size={16} />
          <span>View Documentation</span>
        </a>
        <span className="link-separator">·</span>
        <a href="#" className="empty-state-link">
          <FiPlay size={16} />
          <span>Watch Tutorial</span>
        </a>
      </div>
    </div>
  )
}

export default EmptyStateHero
