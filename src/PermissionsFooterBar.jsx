import { FiEye, FiSave } from 'react-icons/fi'

function PermissionsFooterBar({ changedCount, onCancel, onPreview, onSave }) {
  return (
    <div className="permissions-footer-bar">
      <div className="footer-left">
        <span className="changes-text">
          {changedCount} {changedCount === 1 ? 'change' : 'changes'} made to permissions
        </span>
      </div>

      <div className="footer-right">
        <button className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-preview" onClick={onPreview}>
          <FiEye size={14} />
          <span>Preview Changes</span>
        </button>
        <button className="btn-save" onClick={onSave}>
          <FiSave size={14} />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  )
}

export default PermissionsFooterBar
