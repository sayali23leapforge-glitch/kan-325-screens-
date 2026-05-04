function AdditionalPolicyCard({ icon, title, subtitle, status = 'Not Configured' }) {
  const getStatusClass = () => {
    if (status === 'Not Configured') return 'status-not-configured'
    if (status === 'Active') return 'status-active'
    if (status === 'Review') return 'status-review'
    return 'status-not-configured'
  }

  return (
    <div className="additional-policy-card">
      <div className="policy-card-icon">{icon}</div>
      <div className="policy-card-content">
        <h3 className="policy-card-title">{title}</h3>
        <p className="policy-card-subtitle">{subtitle}</p>
        <span className={`policy-status-pill ${getStatusClass()}`}>{status}</span>
      </div>
    </div>
  )
}

export default AdditionalPolicyCard
