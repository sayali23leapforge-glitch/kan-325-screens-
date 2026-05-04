import { FiTrash2 } from 'react-icons/fi'
import CopyButton from './CopyButton'
import VisibilityToggle from './VisibilityToggle'
import { useState } from 'react'

function ApiKeyItem({ id, title, createdMeta, keyValue, permissions }) {
  const [keyVisible, setKeyVisible] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  if (isDeleted) return null

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this API key?')) {
      setIsDeleted(true)
    }
  }

  const getPermissionTagColor = (permission) => {
    if (permission.includes('analytics') || permission.includes('reports')) {
      return 'tag-purple'
    }
    return 'tag-blue'
  }

  return (
    <div className="api-key-item">
      <div className="api-key-header">
        <div className="api-key-info">
          <h4 className="api-key-title">{title}</h4>
          <p className="api-key-meta">{createdMeta}</p>
        </div>
        <div className="api-key-actions">
          <span className="status-badge status-active">Active</span>
          <button
            className="api-key-delete-btn"
            onClick={handleDelete}
            title="Delete API key"
            aria-label="Delete API key"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>

      <div className="api-key-value-group">
        <input
          type={keyVisible ? 'text' : 'password'}
          className="api-key-input"
          value={keyValue}
          readOnly
        />
        <VisibilityToggle
          isVisible={keyVisible}
          onToggle={() => setKeyVisible(!keyVisible)}
        />
        <CopyButton value={keyValue} label="Copy" />
      </div>

      <div className="api-key-permissions">
        {permissions.map((permission, idx) => (
          <span key={idx} className={`permission-tag ${getPermissionTagColor(permission)}`}>
            {permission}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ApiKeyItem
