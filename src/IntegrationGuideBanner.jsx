import './application-details.css'

function IntegrationGuideBanner({ onViewGuide }) {
  return (
    <div className="integration-guide-banner">
      <div className="integration-guide-icon">📚</div>
      <div className="integration-guide-content">
        <h3 className="integration-guide-title">Integration Guide</h3>
        <p className="integration-guide-subtitle">Learn how to integrate this application with your systems</p>
      </div>
      <button className="integration-guide-btn" onClick={onViewGuide}>
        View Guide →
      </button>
    </div>
  )
}

export default IntegrationGuideBanner
