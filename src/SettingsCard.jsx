function SettingsCard({ title, children, isDangerZone = false }) {
  return (
    <div className={`settings-card ${isDangerZone ? 'danger-zone' : ''}`}>
      <h3 className="settings-card-title">{title}</h3>
      <div className="settings-card-content">
        {children}
      </div>
    </div>
  )
}

export default SettingsCard
