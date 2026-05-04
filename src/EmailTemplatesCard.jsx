import { useState } from 'react'

function EmailTemplatesCard() {
  const [templates] = useState([
    {
      id: 1,
      title: 'Welcome Email',
      subtitle: 'Sent when a new user registers',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Password Reset',
      subtitle: 'Sent when user requests password reset',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Email Verification',
      subtitle: 'Sent to verify user email address',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Account Locked',
      subtitle: 'Sent when account is locked due to security',
      status: 'Inactive'
    }
  ])

  const handleCustomize = () => {
    console.log('Customize email templates')
  }

  return (
    <div className="branding-card">
      <div className="email-templates-header">
        <h3 className="branding-card-title">Email Templates</h3>
        <button className="btn-customize" onClick={handleCustomize}>
          Customize
        </button>
      </div>

      <div className="email-templates-list">
        {templates.map(template => (
          <div key={template.id} className="email-template-item">
            <div className="template-info">
              <p className="template-title">{template.title}</p>
              <p className="template-subtitle">{template.subtitle}</p>
            </div>
            <span className={`template-status template-status-${template.status.toLowerCase()}`}>
              {template.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailTemplatesCard
