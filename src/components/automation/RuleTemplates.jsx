const templatesData = [
  {
    id: 1,
    color: '#2563EB',
    name: 'Auto Assignment',
    description: 'Automatically assign tickets based on category, priority, or keywords',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 2,
    color: '#16A34A',
    name: 'SLA Management',
    description: 'Set up alerts and escalations for SLA compliance',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 3,
    color: '#9333EA',
    name: 'Email Automation',
    description: 'Send automated responses and follow-ups',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: 4,
    color: '#EA580C',
    name: 'Smart Tagging',
    description: 'Automatically categorize and tag tickets',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
      </svg>
    ),
  },
]

function RuleTemplates() {
  return (
    <div className="rule-templates-card">
      <h3 className="rule-templates-title">Rule Templates</h3>
      <div className="rule-templates-list">
        {templatesData.map((template) => (
          <button
            key={template.id}
            type="button"
            className="template-item"
          >
            <div
              className="template-icon-box"
              style={{ backgroundColor: template.color }}
            >
              {template.icon}
            </div>
            <div className="template-content">
              <div className="template-name">{template.name}</div>
              <div className="template-description">{template.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default RuleTemplates
