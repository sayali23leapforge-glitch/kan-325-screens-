import './create-application.css'

function StepProgress({ currentStep = 1 }) {
  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Configuration' },
    { number: 3, label: 'Review' }
  ]

  return (
    <div className="step-progress">
      {steps.map((step, index) => (
        <div key={step.number} className="step-progress-item">
          {/* Step Circle */}
          <div
            className={`step-circle ${
              step.number === currentStep ? 'active' : step.number < currentStep ? 'completed' : ''
            }`}
          >
            {step.number < currentStep ? (
              <span className="step-checkmark">✓</span>
            ) : (
              <span className="step-number">{step.number}</span>
            )}
          </div>

          {/* Step Label */}
          <span className="step-label">{step.label}</span>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className={`step-connector ${step.number < currentStep ? 'completed' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StepProgress
