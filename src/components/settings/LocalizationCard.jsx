function LocalizationCard() {
  return (
    <article className="settings-panel">
      <div className="settings-panel-header">
        <div className="settings-panel-icon orange">
          <span className="settings-localization-mark" />
        </div>
        <div>
          <h2>Localization</h2>
          <p>Set language and regional preferences</p>
        </div>
      </div>

      <div className="settings-form-grid two-col">
        <label className="settings-field">
          <span>Default Language</span>
          <input defaultValue="English (US)" />
        </label>
        <label className="settings-field">
          <span>Date Format</span>
          <input defaultValue="MM/DD/YYYY" />
        </label>
      </div>
    </article>
  )
}

export default LocalizationCard