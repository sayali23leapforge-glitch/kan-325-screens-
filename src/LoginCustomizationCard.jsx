import { FiUpload } from 'react-icons/fi'
import { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'

function LoginCustomizationCard() {
  const [formData, setFormData] = useState({
    pageTitle: 'Welcome to E-Commerce Dashboard',
    welcomeMessage: 'Sign in to access your account and manage your e-commerce operations.',
    showCompanyLogo: true,
    enableSocialLogin: true
  })

  const [backgroundImage, setBackgroundImage] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleToggleChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleUploadBackground = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file && file.size <= 5 * 1024 * 1024) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setBackgroundImage(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('File must be an image and less than 5MB')
      }
    }
    input.click()
  }

  return (
    <div className="branding-card">
      <h3 className="branding-card-title">Login Page Customization</h3>

      <div className="login-customization-content">
        {/* Page Title */}
        <div className="login-form-group">
          <label className="login-label">Page Title</label>
          <input
            type="text"
            className="login-input"
            value={formData.pageTitle}
            onChange={(e) => handleInputChange('pageTitle', e.target.value)}
          />
        </div>

        {/* Welcome Message */}
        <div className="login-form-group">
          <label className="login-label">Welcome Message</label>
          <textarea
            className="login-textarea"
            rows="3"
            value={formData.welcomeMessage}
            onChange={(e) => handleInputChange('welcomeMessage', e.target.value)}
          />
        </div>

        {/* Background Image */}
        <div className="login-form-group">
          <label className="login-label">Background Image</label>
          <div className="upload-background-area">
            {backgroundImage ? (
              <img src={backgroundImage} alt="Login background" className="background-preview" />
            ) : (
              <div className="background-placeholder">
                <FiUpload size={40} />
                <p>Upload a background image for the login page</p>
              </div>
            )}
          </div>
          <button className="btn-upload-bg" onClick={handleUploadBackground}>
            Upload Image
          </button>
        </div>

        {/* Toggle Options */}
        <div className="login-toggle-row">
          <div className="toggle-content">
            <p className="toggle-title">Show Company Logo</p>
            <p className="toggle-subtitle">Display your logo on the login page</p>
          </div>
          <ToggleSwitch
            checked={formData.showCompanyLogo}
            onChange={() => handleToggleChange('showCompanyLogo')}
          />
        </div>

        <div className="login-toggle-row">
          <div className="toggle-content">
            <p className="toggle-title">Enable Social Login</p>
            <p className="toggle-subtitle">Allow users to sign in with social providers</p>
          </div>
          <ToggleSwitch
            checked={formData.enableSocialLogin}
            onChange={() => handleToggleChange('enableSocialLogin')}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginCustomizationCard
