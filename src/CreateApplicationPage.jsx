import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import StepProgress from './StepProgress'
import ApplicationDetailsForm from './ApplicationDetailsForm'
import './create-application.css'
import './dashboard.css'

function CreateApplicationPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleCancel = () => {
    navigate('/applications')
  }

  const handleSubmit = (formData) => {
    // Save form data and navigate to next step
    console.log('Form Data:', formData)
    // TODO: Store in state/context or pass to next step
    navigate('/applications/create/configuration')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        {/* Header */}
        <div className="create-app-header">
          <button type="button" className="mobile-menu-button" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
            <FiMenu />
          </button>
          <div className="header-title-section">
            <h1 className="page-title">Create Application</h1>
            <p className="page-subtitle">Set up a new OAuth2/OIDC application for your organization</p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="create-app-breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/" className="breadcrumb-link">IAM</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/applications" className="breadcrumb-link">Applications</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Create</span>
        </div>

        {/* Step Progress */}
        <div className="create-app-progress-container">
          <StepProgress currentStep={1} />
        </div>

        {/* Content */}
        <div className="create-app-content">
          <ApplicationDetailsForm
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  )
}

export default CreateApplicationPage
