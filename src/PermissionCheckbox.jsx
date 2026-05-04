function PermissionCheckbox({ checked, onChange }) {
  return (
    <label className="permission-checkbox-label">
      <input
        type="checkbox"
        className="permission-checkbox-input"
        checked={checked}
        onChange={onChange}
      />
      <span className="permission-checkbox-visual"></span>
    </label>
  )
}

export default PermissionCheckbox
