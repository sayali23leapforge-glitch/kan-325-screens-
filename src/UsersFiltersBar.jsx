import { FiSearch } from 'react-icons/fi'

function UsersFiltersBar({ search, onSearchChange, status, onStatusChange, role, onRoleChange, mfa, onMfaChange, onApplyFilters, onReset }) {
  return (
    <div className="users-filters-card">
      <div className="filters-grid">
        <div className="filter-search">
          <FiSearch size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search users by name, email..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Manager">Manager</option>
          <option value="User">User</option>
          <option value="Viewer">Viewer</option>
        </select>

        <select
          value={mfa}
          onChange={(e) => onMfaChange(e.target.value)}
          className="filter-select"
        >
          <option value="">MFA Status</option>
          <option value="Enabled">Enabled</option>
          <option value="Disabled">Disabled</option>
        </select>

        <button className="btn-apply-filters" onClick={onApplyFilters}>
          Apply Filters
        </button>

        <button className="btn-reset-filters" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default UsersFiltersBar
