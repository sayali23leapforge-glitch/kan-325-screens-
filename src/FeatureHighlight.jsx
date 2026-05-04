import './applications-empty-state.css'

function FeatureHighlight({ icon, title, description }) {
  return (
    <div className="feature-highlight">
      <div className="feature-icon">{icon}</div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-description">{description}</p>
    </div>
  )
}

export default FeatureHighlight
