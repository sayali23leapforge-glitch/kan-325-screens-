import { FiServer } from 'react-icons/fi'

function SystemStatusCard({ name, status }) {
  let statusClass = 'operational'
  let statusBgColor = '#ecfdf5'

  if (status === 'Maintenance') {
    statusClass = 'maintenance'
    statusBgColor = '#fffbeb'
  } else if (status === 'Coming Soon') {
    statusClass = 'coming-soon'
    statusBgColor = '#f3f4f6'
  }

  return (
    <div className={`system-status-item status-${statusClass}`}>
      <div className="status-icon">
        <FiServer />
      </div>
      <div className="status-name">{name}</div>
      <div className="status-badge">{status}</div>
    </div>
  )
}

export default SystemStatusCard
