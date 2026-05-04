import { FiX } from 'react-icons/fi'

function UsersActiveFiltersDisplay({ appliedFilters = {}, onClearAll, onRemoveFilter }) {
  const colorMap = {
    yellow: { bg: '#FEF3C7', text: '#92400E', icon: '#D97706' },
    green: { bg: '#DCFCE7', text: '#166534', icon: '#16A34A' },
    blue: { bg: '#DBEAFE', text: '#1E40AF', icon: '#2563EB' },
    purple: { bg: '#F3E8FF', text: '#6B21A8', icon: '#9333EA' },
    orange: { bg: '#FFEDD5', text: '#9A3412', icon: '#EA580C' },
    red: { bg: '#FEE2E2', text: '#991B1B', icon: '#DC2626' }
  }

  // Build filters array from appliedFilters object
  const buildFiltersArray = () => {
    const filters = []
    
    if (appliedFilters.mfa) {
      filters.push({
        id: 'mfa',
        label: `MFA: ${appliedFilters.mfa}`,
        color: appliedFilters.mfa === 'Disabled' ? 'yellow' : 'green'
      })
    }
    
    if (appliedFilters.status) {
      filters.push({
        id: 'status',
        label: `Status: ${appliedFilters.status}`,
        color: 'green'
      })
    }
    
    if (appliedFilters.role) {
      filters.push({
        id: 'role',
        label: `Role: ${appliedFilters.role}`,
        color: 'blue'
      })
    }
    
    if (appliedFilters.search) {
      filters.push({
        id: 'search',
        label: `Search: ${appliedFilters.search}`,
        color: 'purple'
      })
    }
    
    return filters.length > 0 ? filters : []
  }

  const filtersToDisplay = buildFiltersArray()

  return (
    <div className="users-active-filters-display">
      <div className="filters-header">
        <h4 className="filters-title">Active Filters</h4>
        <button className="filters-clear-all" onClick={onClearAll}>Clear All</button>
      </div>
      
      <div className="filters-chips-container">
        {filtersToDisplay.map((filter, idx) => {
          const colors = colorMap[filter.color] || colorMap.gray
          return (
            <div 
              key={filter.id || idx}
              className="filter-chip"
              style={{ backgroundColor: colors.bg }}
            >
              <div className="chip-icon" style={{ color: colors.icon }}>
                ✓
              </div>
              <span className="chip-text" style={{ color: colors.text }}>
                {filter.label}
              </span>
              <button 
                className="chip-remove-btn"
                style={{ color: colors.text }}
                onClick={() => onRemoveFilter && onRemoveFilter(filter.id || idx)}
                title="Remove filter"
              >
                <FiX size={14} />
              </button>
            </div>
          )
        })}
        
        <div className="filter-chip add-filter-chip">
          <svg className="chip-icon" viewBox="0 0 24 24" width="16" height="16">
            <rect x="2" y="11" width="20" height="2" fill="currentColor" />
            <rect x="11" y="2" width="2" height="20" fill="currentColor" />
          </svg>
          <span className="chip-text">Add Filter</span>
        </div>
      </div>
    </div>
  )
}

export default UsersActiveFiltersDisplay
