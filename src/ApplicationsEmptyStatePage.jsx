import { FiBell, FiPlus, FiShield, FiZap, FiBarChart2 } from 'react-icons/fi'
import Sidebar from './Sidebar'
import EmptyStateHero from './EmptyStateHero'
import FeatureHighlight from './FeatureHighlight'
import './applications-empty-state.css'
import './dashboard.css'

function ApplicationsEmptyStatePage() {
  return (
    <main className="dashboard-layout">
      <Sidebar />
      <section className="dashboard-main">
        {/* Header */}
        <div className="applications-header">
          <div className="header-content">
            <div className="header-title-section">
              <h1 className="page-title">Applications</h1>
              <p className="page-subtitle">Manage OAuth2/OIDC applications for your organization</p>
            </div>

            <div className="header-actions">
              <button className="notification-btn" aria-label="Notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
              <button className="create-app-btn">
                <FiPlus size={18} />
                <span>Create Application</span>
              </button>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/" className="breadcrumb-link">IAM</a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Applications</span>
          </div>
        </div>

        {/* Empty State Content */}
        <div className="dashboard-content empty-state-content">
          <EmptyStateHero />

          {/* Feature Highlights Row */}
          <div className="feature-highlights">
            <FeatureHighlight
              icon={<FiShield size={28} />}
              title="Secure by Default"
              description="Built-in security best practices and OAuth2/OIDC compliance"
            />
            <FeatureHighlight
              icon={<FiZap size={28} />}
              title="Easy Integration"
              description="Simple setup for web, mobile, and API applications"
            />
            <FeatureHighlight
              icon={<FiBarChart2 size={28} />}
              title="Analytics Ready"
              description="Monitor usage and track authentication metrics"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ApplicationsEmptyStatePage
