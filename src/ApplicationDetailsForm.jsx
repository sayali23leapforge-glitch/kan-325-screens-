import { useState } from 'react'
import { FiX, FiArrowRight, FiUpload } from 'react-icons/fi'
import ApplicationTypeCard from './ApplicationTypeCard'
import './create-application.css'

function ApplicationDetailsForm({ onCancel, onSubmit }) {
  const [appName, setAppName] = useState('')
  const [appType, setAppType] = useState(null)
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!appName.trim()) {
      newErrors.appName = 'Application name is required'
    }
    if (!appType) {
      newErrors.appType = 'Application type is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({ appName, appType, description })
    }
  }

  return (
    <form className="application-details-form" onSubmit={handleSubmit}>
      <div className="form-card">
        <div className="form-card-header">
          <h2 className="form-card-title">Application Details</h2>
          <p className="form-card-subtitle">Provide basic information about your application</p>
        </div>

        <div className="form-fields">
          {/* Application Name Field */}
          <div className="form-field">
            <label htmlFor="app-name" className="form-label">
              Application Name <span className="required">*</span>
            </label>
            <input
              id="app-name"
              type="text"
              className={`form-input ${errors.appName ? 'error' : ''}`}
              placeholder="Enter application name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />
            <p className="form-helper-text">This will be displayed to users during authentication</p>
            {errors.appName && <p className="form-error">{errors.appName}</p>}
          </div>

          {/* Application Type Field */}
          <div className="form-field">
            <label className="form-label">
              Application Type <span className="required">*</span>
            </label>
            <div className="app-type-grid">
              <ApplicationTypeCard
                type="spa"
                isSelected={appType === 'spa'}
                onSelect={setAppType}
              />
              <ApplicationTypeCard
                type="web"
                isSelected={appType === 'web'}
                onSelect={setAppType}
              />
              <ApplicationTypeCard
                type="native"
                isSelected={appType === 'native'}
                onSelect={setAppType}
              />
              <ApplicationTypeCard
                type="m2m"
                isSelected={appType === 'm2m'}
                onSelect={setAppType}
              />
            </div>
            {errors.appType && <p className="form-error">{errors.appType}</p>}
          </div>

          {/* Description Field */}
          <div className="form-field">
            <label htmlFor="description" className="form-label">
              Description <span className="optional">(Optional)</span>
            </label>
            <textarea
              id="description"
              className="form-textarea"
              placeholder="Describe what this application does..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
            <p className="form-helper-text">Help your team understand the purpose of this application</p>
          </div>

          {/* Application Logo Field */}
          <div className="form-field">
            <label className="form-label">
              Application Logo <span className="optional">(Optional)</span>
            </label>
            <div className="logo-upload-container">
              <div className="logo-placeholder">
                <FiUpload size={24} />
              </div>
              <div className="logo-upload-content">
                <button type="button" className="upload-btn">
                  <FiUpload size={16} />
                  <span>Upload Logo</span>
                </button>
              </div>
            </div>
            <p className="form-helper-text">PNG, JPG up to 2MB. Recommended size: 256×256px</p>
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div className="form-footer">
        <button type="button" className="form-btn cancel-btn" onClick={onCancel}>
          <FiX size={18} />
          <span>Cancel</span>
        </button>
        <button type="submit" className="form-btn next-btn">
          <span>Next Step</span>
          <FiArrowRight size={18} />
        </button>
      </div>
    </form>
  )
}

export default ApplicationDetailsForm
