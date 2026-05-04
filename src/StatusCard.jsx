import { FiCheck } from 'react-icons/fi'
import ToggleSwitch from './ToggleSwitch'
import SettingsCard from './SettingsCard'

function StatusCard({ isActive, onToggle, created, lastModified, modifiedBy }) {
  return (
    <SettingsCard title="Status">
      <div className="status-active-section">
        <div className="status-active-left">
          <div className="status-icon-box">
            <FiCheck size={24} />
          </div>
          <div className="status-text">
            <p className="status-title">Active</p>
            <p className="status-subtitle">Application is live</p>
          </div>
        </div>
        <ToggleSwitch checked={isActive} onChange={onToggle} />
      </div>

      <div className="status-metadata">
        <div className="metadata-row">
          <span className="metadata-label">Created</span>
          <span className="metadata-value">{created}</span>
        </div>
        <div className="metadata-row">
          <span className="metadata-label">Last Modified</span>
          <span className="metadata-value">{lastModified}</span>
        </div>
        <div className="metadata-row">
          <span className="metadata-label">Modified By</span>
          <span className="metadata-value">{modifiedBy}</span>
        </div>
      </div>
    </SettingsCard>
  )
}

export default StatusCard
