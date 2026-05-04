function LivePreviewCard() {
  return (
    <div className="branding-card">
      <h3 className="branding-card-title">Live Preview</h3>

      <div className="live-preview-container">
        {/* Mock Login Card */}
        <div className="preview-card">
          <div className="preview-logo">
            <div className="preview-logo-box">🛒</div>
          </div>
          <h2 className="preview-app-name">E-Commerce Dashboard</h2>
          <button className="preview-sign-in-btn">Sign In</button>
          <button className="preview-create-account-btn">Create Account</button>
        </div>

        {/* Preview Meta */}
        <div className="preview-meta">
          <div className="preview-meta-item">
            <span className="preview-meta-label">Primary Color</span>
            <div className="preview-meta-value">
              <div className="preview-color-dot" style={{ backgroundColor: '#f0a83c' }}></div>
              <span>#f0a83c</span>
            </div>
          </div>
          <div className="preview-meta-item">
            <span className="preview-meta-label">Font Family</span>
            <span className="preview-meta-value">Inter</span>
          </div>
          <div className="preview-meta-item">
            <span className="preview-meta-label">Font Weight</span>
            <span className="preview-meta-value">Medium</span>
          </div>
        </div>

        <button className="btn-preview-browser">
          Preview in Browser
        </button>
      </div>
    </div>
  )
}

export default LivePreviewCard
