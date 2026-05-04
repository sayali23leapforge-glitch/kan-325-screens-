import { FiAlertCircle } from 'react-icons/fi'
import './create-application-configuration.css'

function GrantTypeCard({ 
  type, 
  title, 
  description, 
  isSelected, 
  onChange,
  isDeprecated = false
}) {
  return (
    <div 
      className={`grant-type-card ${isSelected ? 'selected' : ''} ${isDeprecated ? 'deprecated' : ''}`}
      onClick={() => onChange(!isSelected)}
    >
      <div className="grant-type-header">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation()
            onChange(!isSelected)
          }}
          className="grant-type-checkbox"
        />
        <h3 className="grant-type-title">{title}</h3>
        {isDeprecated && (
          <span className="deprecated-badge">Not Recommended</span>
        )}
      </div>
      <p className="grant-type-description">{description}</p>
      {isDeprecated && (
        <div className="deprecated-warning">
          <FiAlertCircle size={14} />
          <span>This grant type is deprecated and not recommended for new implementations</span>
        </div>
      )}
    </div>
  )
}

export default GrantTypeCard
