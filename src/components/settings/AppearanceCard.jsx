function AppearanceCard() {
  return (
    <article className="settings-panel">
      <div className="settings-panel-header">
        <div className="settings-panel-icon purple">
          <span className="settings-appearance-mark" />
        </div>
        <div>
          <h2>Appearance</h2>
          <p>Customize your helpdesk appearance</p>
        </div>
      </div>

      <div className="settings-appearance-grid">
        <div className="settings-theme-card active">
          <div className="settings-theme-radio active" />
          <span>Light</span>
          <div className="settings-theme-preview light" />
        </div>
        <div className="settings-theme-card">
          <div className="settings-theme-radio" />
          <span>Dark</span>
          <div className="settings-theme-preview dark" />
        </div>
        <label className="settings-field primary-color-field">
          <span>Primary Color</span>
          <div className="settings-color-row">
            <span className="settings-color-swatch" />
            <input defaultValue="#3B82F6" />
          </div>
        </label>
      </div>
    </article>
  )
}

export default AppearanceCard