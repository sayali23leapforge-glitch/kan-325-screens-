import { FiCheck, FiX } from 'react-icons/fi'
import './create-application-review.css'

function SettingStatusCard({ title, enabled = false }) {
  return (
    <div className={`setting-status-card ${enabled ? 'enabled' : 'disabled'}`}>
      <div className="setting-status-icon">
        {enabled ? (
          <FiCheck size={16} />
        ) : (
          <FiX size={16} />
        )}
      </div>
      <span className="setting-status-title">{title}</span>
    </div>
  )
}

export default SettingStatusCard
