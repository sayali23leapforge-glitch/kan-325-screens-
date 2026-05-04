import { useNavigate } from 'react-router-dom'
import { FiChevronRight, FiSearch, FiSliders, FiMenu } from 'react-icons/fi'

function ProductsApplicationsHeader({ onMenuToggle }) {
  const navigate = useNavigate()

  const handlePro2Click = () => {
    navigate('/products-applications/pro-2')
  }

  return (
    <header className="products-applications-header">
      <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
        <FiMenu />
      </button>
      <div className="header-title">Products & Applications</div>
      
      <div className="header-bottom">
        <nav className="breadcrumb">
          <span className="breadcrumb-link">Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-link">IAM</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Products & Applications</span>
        </nav>
        
        <div className="header-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <FiSearch className="search-icon" size={15} />
          </div>
          
          <button className="filter-btn">
            <FiSliders size={15} />
            <span>Filter</span>
          </button>

          <button className="pro2-btn" onClick={handlePro2Click} title="View Pro 2">
            <span>Pro 2</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default ProductsApplicationsHeader
