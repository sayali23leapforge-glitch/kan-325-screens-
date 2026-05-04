function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="toggle-switch-wrapper">
      <input
        type="checkbox"
        className="toggle-switch-input"
        checked={checked}
        onChange={onChange}
        id="status-toggle"
      />
      <label htmlFor="status-toggle" className="toggle-switch-label">
        <span className="toggle-switch-track"></span>
        <span className="toggle-switch-thumb"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
