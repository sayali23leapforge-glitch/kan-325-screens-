import './view-sessions-table.css'
import { FiMapPin, FiSmartphone, FiMonitor, FiInfo, FiX } from 'react-icons/fi'

function ViewSessionsRow({ session, checked, onCheck, onRevoke }) {
  const getStatusColor = (status) => {
    return status === 'Active'
      ? { bg: '#DCFCE7', color: '#166534', label: 'Active' }
      : { bg: '#FEF3C7', color: '#92400E', label: 'Idle' }
  }

  const isMobile = session.deviceType.toLowerCase().includes('ios') || session.deviceType.toLowerCase().includes('android')
  const DeviceIcon = isMobile ? FiSmartphone : FiMonitor

  const statusStyle = getStatusColor(session.status)

  return (
    <tr className="data-row">
      <td className="col-checkbox">
        <input
          type="checkbox"
          className="row-checkbox"
          checked={checked}
          onChange={onCheck}
        />
      </td>
      <td className="col-user">
        <div className="user-info">
          <div
            className="user-avatar"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600
            }}
          >
            {session.avatar}
          </div>
          <div className="user-text">
            <div className="user-name">{session.user}</div>
            <div className="user-email">{session.email}</div>
          </div>
        </div>
      </td>
      <td className="col-device">
        <div className="device-info">
          <div className="device-icon-wrapper">
            <DeviceIcon size={16} style={{ color: '#2563EB' }} />
          </div>
          <div className="device-text">
            <div className="device-name">{session.device}</div>
            <div className="device-type">{session.deviceType}</div>
          </div>
        </div>
      </td>
      <td className="col-location">
        <div className="location-info">
          <div className="location-name">{session.location}</div>
          <div className="ip-address">{session.ipAddress}</div>
        </div>
      </td>
      <td className="col-started">
        <div className="started-time">{session.loginTime}</div>
      </td>
      <td className="col-duration">
        <div className="duration-text">{session.duration}</div>
      </td>
      <td className="col-status">
        <span
          className="status-badge"
          style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
        >
          {statusStyle.label}
        </span>
      </td>
      <td className="col-actions">
        <div className="action-buttons">
          <button className="btn-action btn-info" title="More info">
            <FiInfo size={16} />
          </button>
          <button 
            className="btn-action btn-revoke" 
            type="button"
            onClick={() => onRevoke(session.id)}
            title="Revoke session"
          >
            <FiX size={16} />
          </button>
        </div>
      </td>
    </tr>
  )
}

function ViewSessionsTable({ sessions = [], selectedSessions = [], selectAll = false, onSelectSession = () => {}, onSelectAll = () => {}, onRevoke = () => {} }) {
  return (
    <div className="view-sessions-table-container">
      <table className="view-sessions-table">
        <colgroup>
          <col style={{ width: '50px' }} />
          <col style={{ width: '240px' }} />
          <col style={{ width: '200px' }} />
          <col style={{ width: '200px' }} />
          <col style={{ width: '140px' }} />
          <col style={{ width: '100px' }} />
          <col style={{ width: '120px' }} />
          <col style={{ width: '100px' }} />
        </colgroup>
        <thead className="table-head">
          <tr>
            <th className="col-checkbox">
              <input
                type="checkbox"
                className="header-checkbox"
                checked={selectAll}
                onChange={onSelectAll}
                aria-label="Select all sessions"
              />
            </th>
            <th className="col-user">User</th>
            <th className="col-device">Device</th>
            <th className="col-location">Location</th>
            <th className="col-started">Started</th>
            <th className="col-duration">Duration</th>
            <th className="col-status">Status</th>
            <th className="col-actions">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sessions.length > 0 ? (
            sessions.map((session) => (
              <ViewSessionsRow
                key={session.id}
                session={session}
                checked={selectedSessions.includes(session.id)}
                onCheck={() => onSelectSession(session.id)}
                onRevoke={onRevoke}
              />
            ))
          ) : (
            <tr className="empty-row">
              <td colSpan="8">No sessions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ViewSessionsTable
