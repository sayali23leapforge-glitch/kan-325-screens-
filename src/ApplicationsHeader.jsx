import { useNavigate } from 'react-router-dom'
import { FiBell, FiPlus, FiBox, FiMenu } from 'react-icons/fi'
import './applications.css'

function ApplicationsHeader({ onMenuToggle }) {
  const navigate = useNavigate()

  const handleCreateApp = () => {
    navigate('/applications/create')
  }

  const handleProductsClick = () => {
    navigate('/products-applications')
  }

  const handlePro2Click = () => {
    navigate('/products-applications/pro-2')
  }

  return (
    <div className="applications-header">
      <div className="header-content">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <div className="header-title-section">
          <h1 className="page-title">Applications</h1>
          <p className="page-subtitle">Manage OAuth2/OIDC applications for your organization</p>
        </div>

        <div className="header-actions">
          <button className="notification-btn" aria-label="Notifications">
            <FiBell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <button className="products-btn" onClick={handleProductsClick} title="View Products & Applications">
            <FiBox size={18} />
            <span>Products</span>
          </button>
          <button className="products-btn" onClick={handlePro2Click} title="View Pro 2">
            <span>Pro 2</span>
          </button>
          <button className="create-app-btn" onClick={handleCreateApp}>
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
  )
}

export default ApplicationsHeader
