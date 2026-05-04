import { FiInfo, FiCheckCircle } from 'react-icons/fi'

function AlertInfoCard({ title, description, type = 'blue' }) {
  const icon = type === 'green' ? <FiCheckCircle /> : <FiInfo />

  return (
    <div className={`alert-info-card alert-${type}`}>
      <div className="alert-icon-box">{icon}</div>
      <div className="alert-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AlertInfoCard
