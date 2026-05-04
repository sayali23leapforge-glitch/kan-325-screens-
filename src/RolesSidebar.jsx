import { FiSearch } from 'react-icons/fi'
import RoleCard from './RoleCard'

function RolesSidebar({ roles, selectedRoleId, searchTerm, onSearchChange, onSelectRole, onRoleAction, systemRoles, customRoles }) {
  return (
    <div className="roles-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Roles</h3>
        <span className="sidebar-count">{roles.length} total</span>
      </div>

      <div className="search-box-sidebar">
        <FiSearch size={16} className="search-icon-sidebar" />
        <input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input-sidebar"
        />
      </div>

      <div className="roles-list-sidebar">
        {systemRoles.length > 0 && (
          <div className="roles-section">
            <h4 className="section-label">SYSTEM ROLES</h4>
            <div className="roles-section-items">
              {systemRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  isSelected={selectedRoleId === role.id}
                  onSelect={onSelectRole}
                  onAction={onRoleAction}
                />
              ))}
            </div>
          </div>
        )}

        {customRoles.length > 0 && (
          <div className="roles-section">
            <h4 className="section-label">CUSTOM ROLES</h4>
            <div className="roles-section-items">
              {customRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  isSelected={selectedRoleId === role.id}
                  onSelect={onSelectRole}
                  onAction={onRoleAction}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RolesSidebar
