import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FiBell, FiPlus, FiSearch, FiChevronDown, FiGrid, FiList, FiLayout } from 'react-icons/fi'
import './productsAppsPro2.css'

const SUMMARY_CARDS = [
  {
    label: 'Total Products',
    value: '6',
    tone: 'blue',
    icon: '◻'
  },
  {
    label: 'Active',
    value: '3',
    tone: 'green',
    icon: '◉'
  },
  {
    label: 'Pending',
    value: '2',
    tone: 'amber',
    icon: '◉'
  },
  {
    label: 'Inactive',
    value: '1',
    tone: 'slate',
    icon: '◉'
  }
]

const PRODUCT_CARDS = [
  {
    id: 'iam',
    name: 'Identity & Access Management',
    description: 'Core authentication and authorization',
    status: 'Active',
    statusTone: 'active',
    metricAValue: '1,247',
    metricALabel: 'Users',
    metricBValue: '24',
    metricBLabel: 'Tenants',
    actionLabel: 'Manage Product',
    actionTone: 'manage',
    iconTone: 'blue',
    iconGlyph: '◈'
  },
  {
    id: 'hrm',
    name: 'Human Resource Management',
    description: 'Employee management and HR workflows',
    status: 'Pending',
    statusTone: 'pending',
    metricAValue: '0',
    metricALabel: 'Employees',
    metricBValue: '0',
    metricBLabel: 'Departments',
    actionLabel: 'Enable Product',
    actionTone: 'enable',
    iconTone: 'purple',
    iconGlyph: '◉'
  },
  {
    id: 'ticketing',
    name: 'Ticketing System',
    description: 'Support ticket management',
    status: 'Inactive',
    statusTone: 'inactive',
    metricAValue: '0',
    metricALabel: 'Tickets',
    metricBValue: '0',
    metricBLabel: 'Agents',
    actionLabel: 'Enable Product',
    actionTone: 'enable',
    iconTone: 'green',
    iconGlyph: '◉'
  },
  {
    id: 'crm',
    name: 'Customer Relationship Management',
    description: 'Customer data and sales pipeline',
    status: 'Active',
    statusTone: 'active',
    metricAValue: '892',
    metricALabel: 'Customers',
    metricBValue: '156',
    metricBLabel: 'Deals',
    actionLabel: 'Manage Product',
    actionTone: 'manage',
    iconTone: 'orange',
    iconGlyph: '◉'
  },
  {
    id: 'analytics',
    name: 'Business Analytics',
    description: 'Data insights and reporting',
    status: 'Pending',
    statusTone: 'pending',
    metricAValue: '0',
    metricALabel: '',
    metricBValue: '0',
    metricBLabel: '',
    actionLabel: '',
    actionTone: '',
    iconTone: 'indigo',
    iconGlyph: '◉'
  }
]

function ProductsAppsPro2Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const handleCardActionClick = (product) => {
    if (product.id === 'hrm' && product.actionLabel === 'Enable Product') {
      navigate('/products-applications/pro-2/human-resource-management/enable')
    }
  }

  return (
    <main className="pa2-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="pa2-main">
        <header className="pa2-header">
          <div className="pa2-header-top">
            <div className="pa2-header-title-wrap">
              <h1 className="pa2-title">Products & Applications</h1>
            </div>
            <div className="pa2-header-actions">
              <button className="pa2-notification-btn" title="Notifications">
                <FiBell size={20} />
                <span className="pa2-notification-badge">3</span>
              </button>
              <button className="pa2-select-product-btn" title="Select Product" onClick={() => navigate('/products-applications/select-product')}>
                <FiLayout size={18} />
              </button>
              <button className="pa2-add-product-btn">
                <FiPlus size={18} />
                <span>Add Product</span>
              </button>
            </div>
          </div>
          <nav className="pa2-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/">IAM</a>
            <span>/</span>
            <span>Products & Apps</span>
          </nav>
        </header>

        <div className="pa2-content">
          <div className="pa2-summary-grid">
            {SUMMARY_CARDS.map((item) => (
              <div key={item.label} className="pa2-summary-card">
                <div className={`pa2-summary-icon ${item.tone}`}>{item.icon}</div>
                <div className="pa2-summary-text">
                  <div className="pa2-summary-value">{item.value}</div>
                  <div className="pa2-summary-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pa2-filter-row">
            <div className="pa2-filter-left">
              <div className="pa2-search-box">
                <FiSearch className="pa2-search-icon" size={16} />
                <input type="text" placeholder="Search products..." className="pa2-search-input" />
              </div>
              <button className="pa2-filter-btn" type="button">
                <span>All Status</span>
                <FiChevronDown size={14} />
              </button>
              <button className="pa2-filter-btn" type="button">
                <span>All Categories</span>
                <FiChevronDown size={14} />
              </button>
            </div>
            <div className="pa2-view-switch">
              <button className="pa2-view-btn active" type="button">
                <FiGrid size={14} />
                <span>Grid</span>
              </button>
              <button className="pa2-view-btn" type="button">
                <FiList size={14} />
                <span>List</span>
              </button>
            </div>
          </div>

          <div className="pa2-products-grid">
            {PRODUCT_CARDS.map((product) => (
              <article key={product.id} className="pa2-product-card">
                <div className="pa2-card-header">
                  <div className={`pa2-card-icon ${product.iconTone}`}>
                    <span>{product.iconGlyph}</span>
                  </div>
                  <div className="pa2-card-title-wrap">
                    <div className="pa2-card-title-row">
                      <h3 className="pa2-card-title">{product.name}</h3>
                      <span className={`pa2-status-badge ${product.statusTone}`}>{product.status}</span>
                    </div>
                    <p className="pa2-card-description">{product.description}</p>
                  </div>
                </div>

                <div className="pa2-card-stats">
                  <div className="pa2-card-stat-item">
                    <div className="pa2-card-stat-value">{product.metricAValue}</div>
                    <div className="pa2-card-stat-label">{product.metricALabel}</div>
                  </div>
                  <div className="pa2-card-stat-item">
                    <div className="pa2-card-stat-value">{product.metricBValue}</div>
                    <div className="pa2-card-stat-label">{product.metricBLabel}</div>
                  </div>
                </div>

                {product.actionLabel ? (
                  <button
                    className={`pa2-card-action ${product.actionTone}`}
                    type="button"
                    onClick={
                      product.id === 'hrm' && product.actionLabel === 'Enable Product'
                        ? () => handleCardActionClick(product)
                        : undefined
                    }
                  >
                    {product.actionLabel}
                  </button>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsAppsPro2Page

