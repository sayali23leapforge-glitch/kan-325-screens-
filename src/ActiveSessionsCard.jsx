import SessionsTable from './SessionsTable'

function ActiveSessionsCard({
  sessions = [],
  selectedSessions = [],
  selectAll = false,
  onSelectSession = () => {},
  onSelectAll = () => {},
  onRevoke = () => {}
}) {
  return (
    <div className="active-sessions-card">
      <div className="card-header">
        <div className="card-title-section">
          <h2 className="card-title">Active Sessions</h2>
          <p className="card-subtitle">Monitor and manage user sessions across all tenants</p>
        </div>
      </div>

      <SessionsTable
        sessions={sessions}
        selectedSessions={selectedSessions}
        selectAll={selectAll}
        onSelectSession={onSelectSession}
        onSelectAll={onSelectAll}
        onRevoke={onRevoke}
      />
    </div>
  )
}

export default ActiveSessionsCard
