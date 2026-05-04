function PolicyChangeItem({ icon, title, description, author, timestamp }) {
  return (
    <div className="policy-change-item">
      <div className="change-item-icon">{icon}</div>
      <div className="change-item-content">
        <div className="change-item-title">{title}</div>
        <div className="change-item-description">{description}</div>
        <div className="change-item-meta">by {author}</div>
      </div>
      <div className="change-item-timestamp">{timestamp}</div>
    </div>
  )
}

export default PolicyChangeItem
