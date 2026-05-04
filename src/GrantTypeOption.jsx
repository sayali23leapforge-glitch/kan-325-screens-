function GrantTypeOption({ title, subtitle, checked, onChange }) {
  return (
    <div className="grant-type-option">
      <input
        type="checkbox"
        className="grant-type-checkbox"
        checked={checked}
        onChange={onChange}
        id={`grant-${title.replace(/\s+/g, '-')}`}
      />
      <label htmlFor={`grant-${title.replace(/\s+/g, '-')}`} className="grant-type-label">
        <div className="grant-type-content">
          <p className="grant-type-title">{title}</p>
          <p className="grant-type-subtitle">{subtitle}</p>
        </div>
      </label>
    </div>
  )
}

export default GrantTypeOption
