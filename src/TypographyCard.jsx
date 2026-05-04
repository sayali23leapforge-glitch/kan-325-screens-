import { useState } from 'react'

function TypographyCard() {
  const [fontWeight, setFontWeight] = useState('Medium')

  const weights = ['Light', 'Regular', 'Medium', 'Bold']

  const fontWeightMap = {
    'Light': 300,
    'Regular': 400,
    'Medium': 500,
    'Bold': 700
  }

  return (
    <div className="branding-card">
      <h3 className="branding-card-title">Typography</h3>

      <div className="typography-fields">
        <div className="typography-field">
          <label className="typography-label">Primary Font</label>
          <input
            type="text"
            className="typography-input"
            value="Inter"
            readOnly
          />
        </div>

        <div className="typography-field">
          <label className="typography-label">Font Weight</label>
          <div className="weight-buttons">
            {weights.map(weight => (
              <button
                key={weight}
                className={`weight-button ${fontWeight === weight ? 'active' : ''}`}
                onClick={() => setFontWeight(weight)}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="typography-preview">
        <p className="typography-preview-label">Typography Preview</p>
        <div className="preview-content">
          <p className="preview-heading" style={{ fontWeight: fontWeightMap[fontWeight] }}>
            Heading Text
          </p>
          <p className="preview-body" style={{ fontWeight: fontWeightMap[fontWeight] }}>
            Body text for general content and descriptions
          </p>
          <p className="preview-small" style={{ fontWeight: fontWeightMap[fontWeight] }}>
            Small text for captions and metadata
          </p>
        </div>
      </div>
    </div>
  )
}

export default TypographyCard
