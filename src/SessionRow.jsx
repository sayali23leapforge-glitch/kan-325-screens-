import { FiMapPin, FiSmartphone } from 'react-icons/fi'

function SessionRow({
  id,
  user,
  email,
  avatar,
  device,
  ipAddress,
  location,
  loginTime,
  status,
  checked = false,
  onCheck = () => {},
  onRevoke = () => {}
}) {
  const getStatusClass = () => {
    if (status === 'Active') return 'status-active'
    if (status === 'Idle') return 'status-idle'
    return 'status-active'
  }

  return (
    <tr className="data-row">
      <td>
        <input
          type="checkbox"
          className="row-checkbox"
          checked={checked}
          onChange={() => onCheck(id)}
          aria-label={`Select ${user}`}
        />
      </td>
      <td>
        <div className="user-info">
          <div className="user-avatar">{avatar}</div>
          <div className="user-text">
            <div className="user-name">{user}</div>
            <div className="user-email">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="device-info">
          <FiSmartphone size={14} />
          <span>{device}</span>
        </div>
      </td>
      <td>
        <div className="ip-address">{ipAddress}</div>
      </td>
      <td>
        <div className="location-info">
          <FiMapPin size={14} />
          <span>{location}</span>
        </div>
      </td>
      <td>
        <div className="login-time">{loginTime}</div>
      </td>
      <td>
        <span className={`status-badge ${getStatusClass()}`}>{status}</span>
      </td>
      <td>
        <button className="btn-revoke" onClick={() => onRevoke(id)}>
          Revoke
        </button>
      </td>
    </tr>
  )
}

export default SessionRow
