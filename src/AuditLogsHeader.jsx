import { useNavigate } from 'react-router-dom'
import { FiBell, FiDownload, FiFilter, FiMenu } from 'react-icons/fi'

function AuditLogsHeader({ stats, onDownload, unreadCount, onMenuToggle }) {
  const navigate = useNavigate()

  const handleNotificationClick = () => {
    navigate('/notifications')
  }

  return (
    <div className="audit-header">
      <div className="audit-header-top">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <div className="audit-header-title-section">
          <h1 className="page-title">Audit Logs</h1>
        </div>
        
        <div className="audit-header-actions">
          <button className="btn-icon-with-badge" onClick={handleNotificationClick} title="View notifications">
            <FiBell size={20} />
            {unreadCount > 0 && <span className="badge-notification">{unreadCount}</span>}
          </button>
          
          <button className="btn-primary" onClick={onDownload}>
            <FiDownload size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="audit-header-bottom">
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-sep">›</span>
          <a href="/iam" className="breadcrumb-link">IAM</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Audit Logs</span>
        </div>
      </div>
    </div>
  )
}

export default AuditLogsHeader
