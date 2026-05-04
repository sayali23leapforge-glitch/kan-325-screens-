import { FiCheckCircle, FiBell, FiDownload } from 'react-icons/fi'

function UsersSelectionBar({ totalUsers = 38, selectedCount = 38 }) {
  return (
    <div className="users-selection-bar">
      <div className="selection-info">
        <input 
          type="checkbox" 
          className="select-all-checkbox"
          checked={true}
          readOnly
          title="Select all users"
        />
        <label className="select-all-label">
          Select All ({totalUsers} users)
        </label>
      </div>

      <div className="selection-actions">
        <button className="btn-enable-mfa-all">
          <FiCheckCircle size={16} />
          Enable MFA for Selected
        </button>
        
        <button className="btn-send-notification">
          <FiBell size={16} />
          Send Notification
        </button>
        
        <button className="btn-export-selection">
          <FiDownload size={16} />
          Export
        </button>
      </div>
    </div>
  )
}

export default UsersSelectionBar
