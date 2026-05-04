import { FiX } from 'react-icons/fi'

function ActiveFiltersDisplay() {
  const filters = [
    { label: 'User: sarah.johnson@company.com', color: 'blue' },
    { label: 'Event: Authentication Failed', color: 'purple' },
    { label: 'IP: 192.168.1.100', color: 'green' },
    { label: 'Time: Last 24 hours', color: 'orange' }
  ]

  const colorMap = {
    blue: { bg: '#DBEAFE', text: '#1E40AF' },
    purple: { bg: '#F3E8FF', text: '#6B21A8' },
    green: { bg: '#DCFCE7', text: '#166534' },
    orange: { bg: '#FFEDD5', text: '#9A3412' }
  }

  return (
    <div className="active-filters-display">
      <div className="filters-header-row">
        <h4 className="filters-label">Active Filters</h4>
        <button className="clear-all-btn">Clear All</button>
      </div>
      
      <div className="filters-chips">
        {filters.map((filter, idx) => {
          const colors = colorMap[filter.color]
          return (
            <div 
              key={idx}
              className="filter-chip"
              style={{ backgroundColor: colors.bg }}
            >
              <span style={{ color: colors.text }}>{filter.label}</span>
              <button 
                className="remove-filter-btn"
                style={{ color: colors.text }}
                title="Remove filter"
              >
                <FiX size={14} />
              </button>
            </div>
          )
        })}
        
        <div className="add-filter-chip">
          <button className="add-filter-btn">
            <span>+ Add Filter</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActiveFiltersDisplay
