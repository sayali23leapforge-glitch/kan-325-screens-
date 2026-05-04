import { FiDownload } from 'react-icons/fi'

function ExportOptionsPanel() {
  const exportFormats = [
    { type: 'CSV', icon: '📄' },
    { type: 'JSON', icon: '{}' },
    { type: 'PDF', icon: '📑' }
  ]

  return (
    <div className="export-options-panel">
      <div className="export-header">
        <div className="export-icon-wrapper">
          <FiDownload size={18} />
        </div>
        <div className="export-title-section">
          <h4 className="export-title">Export Options</h4>
          <p className="export-subtitle">Download filtered logs in your preferred format</p>
        </div>
      </div>

      <div className="export-buttons">
        {exportFormats.map((format) => (
          <button key={format.type} className="export-format-btn">
            <span className="format-icon">{format.icon}</span>
            <span>{format.type}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ExportOptionsPanel
