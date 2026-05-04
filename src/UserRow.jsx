import { FiShield } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function UserRow({ user, isSelected, onSelect, onAction }) {
  const navigate = useNavigate()

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  const handleRowClick = () => {
    navigate(`/users/${user.id}`)
  }

  return (
    <tr className="user-table-row clickable" onClick={handleRowClick}>
      <td className="cell-checkbox" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(user.id, e.target.checked)}
          className="user-checkbox"
        />
      </td>
      <td className="cell-user">
        <div className="user-info">
          <div className="user-avatar-large">{getInitials(user.name)}</div>
          <div className="user-details">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="cell-email">
        <div className="user-email-cell">{user.email}</div>
      </td>
      <td className="cell-role">
        <span className={`role-badge role-badge-${user.role.toLowerCase().replace(' ', '-')}`}>
          {user.role}
        </span>
      </td>
      <td className="cell-status">
        <span className={`status-badge status-badge-${user.status.toLowerCase()}`}>
          <span className={`status-dot status-dot-${user.status.toLowerCase()}`}></span>
          {user.status}
        </span>
      </td>
      <td className="cell-mfa">
        <div className={`mfa-indicator ${user.mfa.toLowerCase()}`}>
          <FiShield size={16} />
          <span>{user.mfa}</span>
        </div>
      </td>
      <td className="cell-last-login">
        <div className="last-login-text">{user.lastLogin}</div>
      </td>
      <td className="cell-actions" onClick={(e) => e.stopPropagation()}>
        <button className="btn-action-menu" onClick={() => onAction(user.id)}>
          <span className="dots">⋮</span>
        </button>
      </td>
    </tr>
  )
}

export default UserRow
