const onboarding = [
  {
    name: 'Sarah Wilson',
    role: 'Senior Frontend Developer',
    percent: '75% Complete',
    progress: 75,
    steps: [
      { label: 'Documents Submitted', tone: 'green' },
      { label: 'IT Setup Complete', tone: 'green' },
      { label: 'Security Training', tone: 'yellow' },
    ],
  },
  {
    name: 'Mason Johnson',
    role: 'Full Stack Developer',
    percent: '45% Complete',
    progress: 45,
    steps: [
      { label: 'Documents Submitted', tone: 'green' },
      { label: 'IT Setup', tone: 'yellow' },
      { label: 'Security Training', tone: 'gray' },
    ],
  },
]

function OnboardingProgress() {
  return (
    <article className="acc-card">
      <div className="acc-section-head">
        <h3>Onboarding Progress</h3>
      </div>

      <div className="acc-onboarding-list">
        {onboarding.map((item) => (
          <div className="acc-onboarding-item" key={item.name}>
            <div className="acc-onboarding-head">
              <div className="acc-onboarding-person">
                <img className="acc-avatar" src={`https://i.pravatar.cc/46?u=${item.name}`} alt={item.name} />
                <div>
                  <div className="acc-offer-name">{item.name}</div>
                  <div className="acc-offer-role">{item.role}</div>
                </div>
              </div>
              <div className="acc-onboarding-percent">{item.percent}</div>
            </div>

            <div className="acc-progress-track">
              <div className="acc-progress-fill" style={{ width: `${item.progress}%` }} />
            </div>

            <div className="acc-step-row">
              {item.steps.map((step) => (
                <div key={step.label} className="acc-step-item">
                  <span className={`acc-step-dot ${step.tone}`} />
                  {step.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default OnboardingProgress
