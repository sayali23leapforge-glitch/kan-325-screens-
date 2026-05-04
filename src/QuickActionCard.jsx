function QuickActionCard({ icon, label }) {
  return (
    <button type="button" className="quick-action-card">
      <div className="quick-action-icon">{icon}</div>
      <span className="quick-action-label">{label}</span>
    </button>
  )
}

export default QuickActionCard
