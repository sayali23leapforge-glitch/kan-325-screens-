import { FiSearch } from 'react-icons/fi'

function AuditFiltersPanel({
  userSearch,
  onUserSearch,
  selectedActionType,
  onActionTypeChange,
  selectedProduct,
  onProductChange,
  dateRange,
  onDateRangeChange,
  onQuickDateSelect,
  eventTypeFilters,
  onEventTypeToggle,
  selectedSeverities,
  onSeverityToggle,
  onApplyFilters,
  onResetFilters
}) {
  const severityCounts = {
    Info: 324,
    Warning: 56,
    Critical: 12
  }

  const severityColors = {
    Info: { bg: '#DBEAFE', text: '#1E40AF' },
    Warning: { bg: '#FEF9C3', text: '#854D0E' },
    Critical: { bg: '#FEE2E2', text: '#991B1B' }
  }

  return (
    <div className="audit-filters-panel">
      <div className="filters-header">
        <h3 className="filters-title">Filters</h3>
        <p className="filters-subtitle">Refine your audit log search</p>
      </div>

      <div className="filter-section">
        <label className="filter-label">User</label>
        <div className="filter-search">
          <FiSearch className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Search users..."
            value={userSearch}
            onChange={onUserSearch}
            className="filter-input"
          />
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Action Type</label>
        <select 
          value={selectedActionType}
          onChange={onActionTypeChange}
          className="filter-select"
        >
          <option>All Actions</option>
          <option>Create</option>
          <option>Update</option>
          <option>Delete</option>
          <option>Export</option>
        </select>
      </div>

      <div className="filter-section">
        <label className="filter-label">Product</label>
        <select 
          value={selectedProduct}
          onChange={onProductChange}
          className="filter-select"
        >
          <option>All Products</option>
          <option>IAM</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Operations</option>
        </select>
      </div>

      <div className="filter-section">
        <label className="filter-label">Date Range</label>
        <div className="date-range-inputs">
          <input type="text" placeholder="dd-mm-yyyy" className="date-input" />
          <input type="text" placeholder="dd-mm-yyyy" className="date-input" />
        </div>
        <div className="quick-filters">
          <button 
            className={`quick-filter-pill ${dateRange === 'Today' ? 'active' : ''}`}
            onClick={() => onQuickDateSelect('Today')}
          >
            Today
          </button>
          <button 
            className={`quick-filter-pill ${dateRange === 'Last 7 days' ? 'active' : ''}`}
            onClick={() => onQuickDateSelect('Last 7 days')}
          >
            Last 7 days
          </button>
          <button 
            className={`quick-filter-pill ${dateRange === 'Last 30 days' ? 'active' : ''}`}
            onClick={() => onQuickDateSelect('Last 30 days')}
          >
            Last 30 days
          </button>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Severity</label>
        <div className="severity-filters">
          {['Info', 'Warning', 'Critical'].map(severity => (
            <label key={severity} className="severity-checkbox">
              <input
                type="checkbox"
                checked={selectedSeverities[severity] || false}
                onChange={() => onSeverityToggle(severity)}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <span className="severity-text">{severity}</span>
              <span 
                className="severity-count"
                style={{
                  backgroundColor: severityColors[severity].bg,
                  color: severityColors[severity].text
                }}
              >
                {severityCounts[severity]}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-actions">
        <button 
          className="btn-primary filter-btn"
          onClick={onApplyFilters}
        >
          Apply Filters
        </button>
        <button 
          className="btn-secondary filter-btn"
          onClick={onResetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default AuditFiltersPanel
