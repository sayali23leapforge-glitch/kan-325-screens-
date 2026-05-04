import SettingsCard from './SettingsCard'

function AdvancedOptionsCard({ options, onChange }) {
  return (
    <SettingsCard title="Advanced">
      <div className="advanced-options">
        {Object.entries(options).map(([key, { title, subtitle, checked }]) => (
          <div key={key} className="advanced-option-row">
            <input
              type="checkbox"
              className="advanced-checkbox"
              checked={checked}
              onChange={() => onChange(key, !checked)}
              id={`advanced-${key}`}
            />
            <label htmlFor={`advanced-${key}`} className="advanced-option-label">
              <div className="advanced-option-content">
                <p className="advanced-option-title">{title}</p>
                <p className="advanced-option-subtitle">{subtitle}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </SettingsCard>
  )
}

export default AdvancedOptionsCard
