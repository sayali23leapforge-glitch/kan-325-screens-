const templates = [
  {
    title: 'Software Engineer',
    tone: 'green',
    points: ['Base salary: $90K - $150K', 'Equity package included', 'Health & dental benefits', '4 weeks PTO'],
    used: 'Used 15 times',
  },
  {
    title: 'Product Manager',
    tone: 'blue',
    points: ['Base salary: $120K - $180K', 'Performance bonuses', 'Stock options', 'Flexible work arrangement'],
    used: 'Used 8 times',
  },
  {
    title: 'UI/UX Designer',
    tone: 'purple',
    points: ['Base salary: $80K - $130K', 'Creative development budget', 'Conference attendance', 'Remote work options'],
    used: 'Used 6 times',
  },
]

function OfferTemplates() {
  return (
    <article className="offer-card">
      <div className="offer-section-head">
        <h3>Offer Templates</h3>
      </div>

      <div className="offer-template-grid">
        {templates.map((template) => (
          <div className="offer-template-card" key={template.title}>
            <div className={`offer-template-title ${template.tone}`}>{template.title}</div>
            <ul>
              {template.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="offer-template-foot">
              <span>{template.used}</span>
              <button type="button" className={`offer-template-btn ${template.tone}`}>Use Template</button>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default OfferTemplates
