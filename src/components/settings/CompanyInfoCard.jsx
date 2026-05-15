import { FiUpload } from 'react-icons/fi'

function CompanyInfoCard() {
  return (
    <article className="settings-panel">
      <div className="settings-panel-header">
        <div className="settings-panel-icon blue">
          <FiUpload size={16} />
        </div>
        <div>
          <h2>Company Information</h2>
          <p>Update your company details and branding</p>
        </div>
      </div>

      <div className="settings-form-grid two-col">
        <label className="settings-field">
          <span>Company Name</span>
          <input defaultValue="HelpDesk Pro" />
        </label>
        <label className="settings-field">
          <span>Website</span>
          <input defaultValue="https://helpdeskpro.com" />
        </label>
        <label className="settings-field">
          <span>Support Email</span>
          <input defaultValue="support@helpdeskpro.com" />
        </label>
        <label className="settings-field">
          <span>Phone Number</span>
          <input defaultValue="+1 (555) 123-4567" />
        </label>
      </div>

      <div className="settings-logo-row">
        <div className="settings-logo-box">
          <span className="settings-logo-icon">
            <FiUpload size={18} />
          </span>
          <div>
            <button type="button" className="settings-upload-btn">Upload New Logo</button>
            <p>PNG, JPG up to 2MB. Recommended size: 200×200px</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CompanyInfoCard