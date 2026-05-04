function BrandingTipsCard() {
  const tips = [
    'Use high contrast colors for better accessibility',
    'Keep your logo simple and recognizable',
    'Test your colors in both light and dark modes',
    'Maintain consistency across all touchpoints'
  ]

  return (
    <div className="branding-card tips-card">
      <h3 className="branding-card-title">Branding Tips</h3>
      <ul className="tips-list">
        {tips.map((tip, idx) => (
          <li key={idx} className="tip-item">{tip}</li>
        ))}
      </ul>
    </div>
  )
}

export default BrandingTipsCard
