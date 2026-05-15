import { FiDownload, FiFilter, FiFileText, FiShield, FiUsers } from 'react-icons/fi'

function AuditTrailSection() {
  return (
    <article className="audit-panel">
      <div className="audit-panel-header">
        <div className="audit-panel-icon blue">
          <FiFileText size={14} />
        </div>
        <div>
          <h2>Audit Trail</h2>
          <p>Monitor and track all system activities</p>
        </div>
      </div>

      <div className="audit-kpi-grid">
        <div className="audit-kpi-card blue">
          <strong>2,847</strong>
          <span>Events Today</span>
        </div>
        <div className="audit-kpi-card green">
          <strong>156</strong>
          <span>Active Users</span>
        </div>
        <div className="audit-kpi-card orange">
          <strong>3</strong>
          <span>Security Alerts</span>
        </div>
      </div>

      <div className="audit-input-grid">
        <label className="audit-field">
          <span>Audit Log Retention</span>
          <button type="button" className="audit-select">90 Days</button>
        </label>
        <label className="audit-field">
          <span>Export Format</span>
          <button type="button" className="audit-select">CSV</button>
        </label>
      </div>

      <div className="audit-actions-row">
        <button type="button" className="audit-btn-primary">
          <FiDownload size={12} />
          Export Audit Log
        </button>
        <button type="button" className="audit-btn-secondary">
          <FiFilter size={12} />
          Filter Events
        </button>
      </div>
    </article>
  )
}

export default AuditTrailSection