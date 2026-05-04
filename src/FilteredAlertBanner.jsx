import { FiAlertCircle, FiArrowLeft } from 'react-icons/fi'

function FilteredAlertBanner({ onBackToAllLogs }) {
  return (
    <div className="filtered-alert-banner">
      <div className="alert-icon-wrapper">
        <div className="alert-icon">
          <FiAlertCircle size={24} />
        </div>
      </div>
      
      <div className="alert-content">
        <div className="alert-header">
          <h3 className="alert-title">Filtered by Alert</h3>
          <span className="alert-severity-badge">CRITICAL</span>
        </div>
        <p className="alert-description">
          Showing audit logs related to: <strong>Multiple Failed Login Attempts - sarah.johnson@company.com</strong>
        </p>
        <button className="back-to-logs-btn" onClick={onBackToAllLogs}>
          <FiArrowLeft size={14} />
          Back to All Logs
        </button>
      </div>
    </div>
  )
}

export default FilteredAlertBanner
