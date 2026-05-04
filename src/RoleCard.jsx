import { FiMoreVertical, FiUsers } from 'react-icons/fi'

function RoleCard({ role, isSelected, onSelect, onAction }) {
  return (
    <div
      className={`role-card ${isSelected ? 'active' : ''}`}
      onClick={() => onSelect(role.id)}
    >
      <div className="role-card-header">
        <div className="role-card-title">
          <h4 className="role-name">{role.name}</h4>
          {role.type === 'System' && <span className="role-badge-system">System</span>}
        </div>
        <button
          className="btn-role-actions"
          onClick={(e) => {
            e.stopPropagation()
            onAction(role.id)
          }}
        >
          <FiMoreVertical size={16} />
        </button>
      </div>
      <p className="role-description">{role.description}</p>
      <div className="role-card-footer">
        <div className="role-user-count">
          <FiUsers size={14} />
          <span>{role.userCount} users</span>
        </div>
      </div>
    </div>
  )
}

export default RoleCard
