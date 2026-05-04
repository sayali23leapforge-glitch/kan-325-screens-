import { FiTrash2, FiPlus } from 'react-icons/fi'

function UriListField({ label, uris, onAdd, onRemove, placeholder = 'https://' }) {
  return (
    <div className="uri-list-field">
      <label className="settings-label">{label}</label>
      <div className="uri-list">
        {uris.map((uri, index) => (
          <div key={index} className="uri-row">
            <input
              type="text"
              className="uri-input"
              value={uri}
              readOnly
              placeholder={placeholder}
            />
            <button
              className="uri-delete-btn"
              onClick={() => onRemove(index)}
              aria-label="Delete URI"
              title="Delete URI"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <button className="uri-add-btn" onClick={onAdd}>
        <FiPlus size={16} />
        <span>Add {label}</span>
      </button>
    </div>
  )
}

export default UriListField
