import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FiBell, FiArrowRight } from 'react-icons/fi'
import './selectProduct.css'

const SELECT_PRODUCTS = [
  {
    id: 'hrm',
    name: 'Human Resource Management',
    description: 'Complete HR module for employee management, payroll, and performance tracking',
    status: 'Active',
    statusTone: 'active',
    iconTone: 'purple',
    iconGlyph: '◉',
    features: [
      'Employee Database',
      'Payroll Management',
      'Performance Tracking'
    ],
    userCount: '247 Users',
    userLabel: '247 Users'
  },
  {
    id: 'crm',
    name: 'Customer Relationship Management',
    description: 'Comprehensive CRM platform for customer interactions, sales pipeline, and marketing campaigns',
    status: 'Pending',
    statusTone: 'pending',
    iconTone: 'blue',
    iconGlyph: '◉',
    features: [
      'Lead Management',
      'Sales Pipeline',
      'Customer Analytics'
    ],
    userCount: '156 Active',
    userLabel: '156 Active'
  },
  {
    id: 'erp',
    name: 'Enterprise Resource Planning',
    description: 'Integrated business management suite for finance, inventory management and supply chain operations',
    status: 'Active',
    statusTone: 'active',
    iconTone: 'teal',
    iconGlyph: '◉',
    features: [
      'Financial Management',
      'Inventory Control',
      'Supply Chain'
    ],
    userCount: '89 Users',
    userLabel: '89 Users'
  },
  {
    id: 'pm',
    name: 'Project Management',
    description: 'Advanced project planning and collaboration tools for team productivity, timeline tracking, and resource management',
    status: 'Inactive',
    statusTone: 'inactive',
    iconTone: 'orange',
    iconGlyph: '◉',
    features: [
      'Task Management',
      'Team Collaboration',
      'Timeline Tracking'
    ],
    userCount: '0 Users',
    userLabel: '0 Users'
  },
  {
    id: 'bi',
    name: 'Business Intelligence',
    description: 'Data analytics and business intelligence platform with interactive dashboards and custom reporting',
    status: 'Pending',
    statusTone: 'pending',
    iconTone: 'indigo',
    iconGlyph: '◉',
    features: [
      'Interactive Dashboards',
      'Data Analytics',
      'Custom Reports'
    ],
    userCount: '0 Users',
    userLabel: '0 Users'
  },
  {
    id: 'dm',
    name: 'Document Management',
    description: 'Secure document storage and workflow automation platform for compliance and document lifecycle management',
    status: 'Active',
    statusTone: 'active',
    iconTone: 'green',
    iconGlyph: '◉',
    features: [
      'Document Storage',
      'Workflow Automation',
      'Compliance Features'
    ],
    userCount: '124 Users',
    userLabel: '124 Users'
  }
]

function SelectProductPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <main className="sp-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="sp-main">
        <header className="sp-header">
          <div className="sp-header-top">
            <div className="sp-header-title-wrap">
              <h1 className="sp-title">Select Product</h1>
            </div>
            <div className="sp-header-actions">
              <button className="sp-notification-btn" title="Notifications">
                <FiBell size={20} />
                <span className="sp-notification-badge">3</span>
              </button>
            </div>
          </div>
          <nav className="sp-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products-applications">Products & Apps</a>
            <span>/</span>
            <span>Select Product</span>
          </nav>
        </header>

        <div className="sp-content">
          <div className="sp-intro">
            <h2 className="sp-intro-title">Choose a Product to View Details</h2>
            <p className="sp-intro-subtitle">Select any product below to view its configuration, status, and management options</p>
          </div>

          <div className="sp-products-grid">
            {SELECT_PRODUCTS.map((product) => (
              <article key={product.id} className="sp-product-card">
                <div className="sp-card-top">
                  <div className={`sp-card-icon ${product.iconTone}`}>
                    <span>{product.iconGlyph}</span>
                  </div>
                  <span className={`sp-status-badge ${product.statusTone}`}>{product.status}</span>
                </div>

                <div className="sp-card-content">
                  <h3 className="sp-card-title">{product.name}</h3>
                  <p className="sp-card-description">{product.description}</p>

                  <ul className="sp-card-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="sp-feature-item">
                        <span className="sp-feature-check">✓</span>
                        <span className="sp-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sp-card-footer">
                  <span className="sp-card-user-count">{product.userLabel}</span>
                  <button type="button" className="sp-view-details-btn" onClick={() => navigate(`/products-applications/select-product/${product.id}-details`)}>
                    View Details
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SelectProductPage
