import { FiMenu } from 'react-icons/fi'
import './application-details.css'

function ApplicationHeader({ appName, environment, onEdit, onDelete, onMenuToggle = () => {} }) {
  return (
    <div className="application-header">
      <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
        <FiMenu />
      </button>
      <div className="application-header-left">
        <div className="application-icon">📊</div>
        <div className="application-header-text">
          <h1 className="application-name">{appName}</h1>
          <p className="application-environment">{environment}</p>
        </div>
      </div>
      <div className="application-header-actions">
        <button className="app-action-btn secondary" onClick={onEdit}>
          ✎ Edit
        </button>
        <button className="app-action-btn danger" onClick={onDelete}>
          🗑 Delete
        </button>
      </div>
    </div>
  )
}

export default ApplicationHeader
