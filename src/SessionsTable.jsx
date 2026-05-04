import SessionRow from './SessionRow'

function SessionsTable({
  sessions = [],
  selectedSessions = [],
  selectAll = false,
  onSelectSession = () => {},
  onSelectAll = () => {},
  onRevoke = () => {}
}) {
  return (
    <div className="sessions-table-container">
      <table className="sessions-table">
        <colgroup>
          <col style={{ width: '50px' }} />
          <col style={{ width: '280px' }} />
          <col style={{ width: '220px' }} />
          <col style={{ width: '140px' }} />
          <col style={{ width: '170px' }} />
          <col style={{ width: '130px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
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
            <th className="col-ip">IP Address</th>
            <th className="col-location">Location</th>
            <th className="col-login">Login Time</th>
            <th className="col-status">Status</th>
            <th className="col-action">Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sessions.length > 0 ? (
            sessions.map((session) => (
              <SessionRow
                key={session.id}
                {...session}
                checked={selectedSessions.includes(session.id)}
                onCheck={onSelectSession}
                onRevoke={onRevoke}
              />
            ))
          ) : (
            <tr className="empty-row">
              <td colSpan="8" className="empty-message">No sessions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default SessionsTable
