import { FiUpload } from 'react-icons/fi'
import { useState } from 'react'

function BrandingUploadCard({ title, labels, maxSize, formats }) {
  const [previews, setPreviews] = useState({})

  const handleUpload = (field) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = formats.join(',')
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file && file.size <= maxSize) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setPreviews(prev => ({ ...prev, [field]: event.target.result }))
        }
        reader.readAsDataURL(file)
      } else {
        alert(`File must be ${formats.join(' or ')} and less than ${maxSize / (1024 * 1024)}MB`)
      }
    }
    input.click()
  }

  return (
    <div className="branding-card">
      <h3 className="branding-card-title">{title}</h3>
      <div className="upload-grid">
        {labels.map(label => (
          <div key={label.id} className="upload-section">
            <label className="upload-label">{label.name}</label>
            <div className="upload-preview-area">
              {previews[label.id] ? (
                <img src={previews[label.id]} alt={label.name} className="upload-preview-image" />
              ) : (
                <div className={`upload-placeholder ${label.class}`}>
                  <FiUpload size={32} />
                </div>
              )}
            </div>
            <p className="upload-helper">{label.helper}</p>
            <button
              className="btn-upload"
              onClick={() => handleUpload(label.id)}
            >
              {label.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandingUploadCard
