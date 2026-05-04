import { FiFilter, FiDownload } from 'react-icons/fi'

function MonitoringToolbar({ onFilter = () => {}, onExport = () => {} }) {
  return (
    <div className="monitoring-toolbar">
      <div className="monitoring-left">
        <div className="live-indicator">
          <span className="live-dot"></span>
          <span className="live-text">Live monitoring - Auto refresh every 30s</span>
        </div>
      </div>
      <div className="monitoring-actions">
        <button className="btn-toolbar" onClick={onFilter}>
          <FiFilter size={16} />
          Filter
        </button>
        <button className="btn-toolbar" onClick={onExport}>
          <FiDownload size={16} />
          Export
        </button>
      </div>
    </div>
  )
}

export default MonitoringToolbar
