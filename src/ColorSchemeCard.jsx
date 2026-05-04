import { useState } from 'react'

function ColorSchemeCard() {
  const [colors, setColors] = useState({
    primary: '#f0a83c',
    secondary: '#0f2c45',
    success: '#10b981',
    error: '#ef4444'
  })

  const handleColorChange = (key, value) => {
    if (/^#[0-9A-F]{6}$/i.test(value) || value === '') {
      setColors(prev => ({ ...prev, [key]: value }))
    }
  }

  const colorLabels = [
    { key: 'primary', name: 'Primary Color' },
    { key: 'secondary', name: 'Secondary Color' },
    { key: 'success', name: 'Success Color' },
    { key: 'error', name: 'Error Color' }
  ]

  return (
    <div className="branding-card">
      <h3 className="branding-card-title">Color Scheme</h3>

      <div className="color-fields">
        {colorLabels.map(label => (
          <div key={label.key} className="color-field-row">
            <div className="color-field-input">
              <label className="color-field-label">{label.name}</label>
              <input
                type="text"
                className="color-text-input"
                value={colors[label.key]}
                onChange={(e) => handleColorChange(label.key, e.target.value)}
                placeholder="#000000"
              />
            </div>
            <div className="color-swatch-wrapper">
              <input
                type="color"
                className="color-picker"
                value={colors[label.key]}
                onChange={(e) => handleColorChange(label.key, e.target.value)}
              />
              <div
                className="color-swatch"
                style={{ backgroundColor: colors[label.key] }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="color-preview-section">
        <p className="color-preview-title">Color Preview</p>
        <div className="color-preview-grid">
          <div className="preview-color-block" style={{ backgroundColor: colors.primary }}>
            <span>Primary</span>
          </div>
          <div className="preview-color-block" style={{ backgroundColor: colors.secondary }}>
            <span>Secondary</span>
          </div>
          <div className="preview-color-block" style={{ backgroundColor: colors.success }}>
            <span>Success</span>
          </div>
          <div className="preview-color-block" style={{ backgroundColor: colors.error }}>
            <span>Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorSchemeCard
