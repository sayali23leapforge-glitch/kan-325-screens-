import { FiCopy, FiUsers } from 'react-icons/fi'
import RoleTypeBadge from './RoleTypeBadge'

function RoleListItem({ role, isSelected, onSelect, onClone }) {
  return (
    <div
      className={`role-list-item ${isSelected ? 'active' : ''}`}
      onClick={() => onSelect(role.id)}
    >
      <div className="role-item-header">
        <div className="role-item-title-section">
          <h4 className="role-item-name">{role.name}</h4>
          <RoleTypeBadge type={role.type} />
        </div>
        <button
          className="btn-clone-role"
          onClick={(e) => {
            e.stopPropagation()
            onClone(role.id)
          }}
          title="Clone this role"
        >
          <FiCopy size={16} />
        </button>
      </div>

      <p className="role-item-description">{role.description}</p>

      <div className="role-item-footer">
        <div className="role-item-users">
          <FiUsers size={14} />
          <span>{role.userCount} users</span>
        </div>
      </div>
    </div>
  )
}

export default RoleListItem
