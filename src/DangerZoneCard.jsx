import SettingsCard from './SettingsCard'

function DangerZoneCard({ onResetConfiguration, onDeleteApplication }) {
  return (
    <SettingsCard title="Danger Zone" isDangerZone={true}>
      <div className="danger-zone-actions">
        <button className="btn-danger-secondary" onClick={onResetConfiguration}>
          Reset Configuration
        </button>
        <button className="btn-danger-primary" onClick={onDeleteApplication}>
          Delete Application
        </button>
      </div>
    </SettingsCard>
  )
}

export default DangerZoneCard
