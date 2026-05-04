import { FiChevronDown } from 'react-icons/fi'
import './create-application-configuration.css'

function AdvancedSettingsAccordion({ isOpen = false, onToggle }) {
  return (
    <div className="advanced-settings-section">
      <button
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => onToggle(!isOpen)}
        type="button"
      >
        <h3 className="accordion-title">Advanced Settings</h3>
        <FiChevronDown size={20} className="accordion-chevron" />
      </button>

      {isOpen && (
        <div className="accordion-content">
          <div className="advanced-setting-item">
            <label className="advanced-label">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={false}
              />
              <span>Require HTTPS for redirect URIs</span>
            </label>
            <p className="advanced-helper">Enforce HTTPS protocol for all redirect URLs (recommended for production)</p>
          </div>

          <div className="advanced-setting-item">
            <label className="advanced-label">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={true}
              />
              <span>Allow refresh token rotation</span>
            </label>
            <p className="advanced-helper">Issue a new refresh token with each refresh request</p>
          </div>

          <div className="advanced-setting-item">
            <label className="advanced-label">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={false}
              />
              <span>Require proof key for public clients (PKCE)</span>
            </label>
            <p className="advanced-helper">Enhanced security for native and single-page applications</p>
          </div>

          <div className="advanced-setting-item">
            <label className="advanced-label">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={false}
              />
              <span>Include client ID in request validation</span>
            </label>
            <p className="advanced-helper">Validate client ID for all token requests</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedSettingsAccordion
