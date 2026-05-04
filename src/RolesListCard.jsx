import { FiSearch } from 'react-icons/fi'
import RoleListItem from './RoleListItem'

function RolesListCard({ title, roles, selectedRoleId, onSelectRole, onCloneRole, searchTerm, onSearchChange, filteredRoles }) {
  return (
    <div className="roles-list-card">
      <h3 className="card-title">{title}</h3>

      <div className="search-box">
        <FiSearch size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="roles-list">
        {filteredRoles.length > 0 ? (
          filteredRoles.map((role) => (
            <RoleListItem
              key={role.id}
              role={role}
              isSelected={selectedRoleId === role.id}
              onSelect={onSelectRole}
              onClone={onCloneRole}
            />
          ))
        ) : (
          <div className="roles-empty-state">
            <p>No roles found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RolesListCard
