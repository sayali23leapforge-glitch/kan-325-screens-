import { FiTrash2, FiPlus } from 'react-icons/fi'
import './create-application-configuration.css'

function UriFieldList({ 
  uris = [],
  onUrisChange,
  label,
  helperText,
  isRequired = false,
  isDashboard = false 
}) {
  const validateUrl = (url) => {
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === 'https:' || urlObj.protocol === 'http:'
    } catch {
      return false
    }
  }

  const handleAddUri = () => {
    onUrisChange([...uris, { id: Date.now(), value: '', isValid: null }])
  }

  const handleRemoveUri = (id) => {
    onUrisChange(uris.filter(uri => uri.id !== id))
  }

  const handleUriChange = (id, value) => {
    const isValid = value.trim() === '' ? null : validateUrl(value)
    onUrisChange(
      uris.map(uri =>
        uri.id === id ? { ...uri, value, isValid } : uri
      )
    )
  }

  return (
    <div className={`uri-field-list-section ${isDashboard ? 'dashboard-section' : ''}`}>
      <div className="section-header">
        <label className="section-label">
          {label}
          {isRequired && <span className="required"> *</span>}
        </label>
        <p className="section-helper-text">{helperText}</p>
      </div>

      <div className="uri-fields-container">
        {uris.map((uri) => (
          <div key={uri.id} className="uri-field-wrapper">
            <div className="uri-field-row">
              <input
                type="url"
                value={uri.value}
                onChange={(e) => handleUriChange(uri.id, e.target.value)}
                placeholder="https://example.com/callback"
                className={`uri-input ${
                  uri.isValid === false ? 'error' : uri.isValid === true ? 'valid' : ''
                }`}
              />
              <button
                className="uri-delete-btn"
                onClick={() => handleRemoveUri(uri.id)}
                type="button"
                aria-label="Delete URI"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
            {uri.isValid !== null && (
              <div className={`uri-validation-inline ${uri.isValid ? 'valid' : 'error'}`}>
                <span className="validation-dot"></span>
                <span className="validation-text">
                  {uri.isValid ? 'Valid redirect URI' : 'Invalid redirect URI'}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="add-uri-btn"
        onClick={handleAddUri}
        type="button"
      >
        <FiPlus size={16} />
        <span>Add {label.includes('Logout') ? 'Logout URI' : 'Redirect URI'}</span>
      </button>
    </div>
  )
}

export default UriFieldList
