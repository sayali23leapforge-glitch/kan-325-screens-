import { FiSearch, FiChevronDown, FiFilter, FiDownload } from 'react-icons/fi'
import './applications.css'

function ApplicationsToolbar({
  searchValue,
  onSearchChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange
}) {
  const statusOptions = ['All Status', 'Active', 'Pending', 'Inactive']
  const typeOptions = ['All Types', 'Web Application', 'Mobile App', 'API Service', 'SPA']

  return (
    <div className="applications-toolbar">
      {/* Search Input */}
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search applications..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          aria-label="Search applications"
        />
      </div>

      {/* Status Filter */}
      <div className="filter-dropdown">
        <button className="filter-btn">
          <span>{statusFilter}</span>
          <FiChevronDown size={18} />
        </button>
        <div className="dropdown-menu">
          {statusOptions.map((option) => (
            <button
              key={option}
              className={`dropdown-item ${statusFilter === option ? 'active' : ''}`}
              onClick={() => onStatusChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div className="filter-dropdown">
        <button className="filter-btn">
          <span>{typeFilter}</span>
          <FiChevronDown size={18} />
        </button>
        <div className="dropdown-menu">
          {typeOptions.map((option) => (
            <button
              key={option}
              className={`dropdown-item ${typeFilter === option ? 'active' : ''}`}
              onClick={() => onTypeChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="toolbar-actions">
        <button className="action-icon-btn" aria-label="Filter options">
          <FiFilter size={18} />
        </button>
        <button className="action-icon-btn" aria-label="Download applications">
          <FiDownload size={18} />
        </button>
      </div>
    </div>
  )
}

export default ApplicationsToolbar
