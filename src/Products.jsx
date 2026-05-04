import Sidebar from './Sidebar'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import StatsCard from './StatsCard'
import './product.css'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.3 9.9 8 11 4.7-1.1 8-5.8 8-11V5l-8-3Zm0 3.2 5 1.9V11c0 3.7-2.2 7.2-5 8.3-2.8-1.1-5-4.6-5-8.3V7.1l5-1.9Z" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-8 2c-3.3 0-6 2.2-6 5v1h12v-1c0-2.8-2.7-5-6-5Zm8 0c-.6 0-1.1.1-1.6.2 1.7 1 2.6 2.5 2.6 4.4v1h5v-1c0-2.8-2.7-5-6-5Z" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h12v18H4V3Zm2 2v14h8V5H6Zm10 6h4v10h-4V11Zm1.5 2v2H19v-2h-1.5Zm0 4v2H19v-2h-1.5Z" />
    </svg>
  )
}

function PieIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 3a8 8 0 1 0 8 8h-8V3Zm2 2.2V11h5.8A6 6 0 0 0 13 5.2Z" />
    </svg>
  )
}

const PRODUCTS = [
  {
    id: 'iam-admin',
    title: 'IAM Admin',
    description:
      'Identity & Access Management platform for user authentication, authorization, and security policies across your enterprise.',
    icon: '🛡',
    iconTone: 'blue',
    featured: true,
    statePill: 'RECENTLY USED',
    statePillTone: 'green',
    tags: [
      { label: 'Admin Access', tone: 'blue' },
      { label: 'Full Control', tone: 'gray' },
    ],
    stats: [
      { value: '1,247', label: 'Users' },
      { value: '24', label: 'Tenants' },
    ],
    cta: 'Launch IAM Admin',
  },
  {
    id: 'hrm-suite',
    title: 'HRM Suite',
    description:
      'Human Resource Management system for employee data, payroll, attendance, performance reviews, and analytics.',
    icon: '👥',
    iconTone: 'violet',
    tags: [
      { label: 'User Access', tone: 'violet' },
      { label: 'Standard', tone: 'gray' },
    ],
    stats: [
      { value: '892', label: 'Employees' },
      { value: '12', label: 'Departments' },
    ],
    cta: 'Launch HRM Suite',
  },
  {
    id: 'ticketing',
    title: 'Ticketing System',
    description:
      'IT service desk and support ticket management platform for handling inquiries, issues, and service requests.',
    icon: '🎫',
    iconTone: 'orange',
    disabled: true,
    statePill: 'RESTRICTED',
    statePillTone: 'gray',
    tags: [
      { label: 'No Access', tone: 'muted' },
      { label: 'Restricted', tone: 'danger' },
    ],
    stats: [
      { value: '2,156', label: 'Tickets' },
      { value: '45', label: 'Agents' },
    ],
    cta: 'Access Restricted',
  },
  {
    id: 'crm',
    title: 'CRM Platform',
    description:
      'Customer Relationship Management platform for sales pipeline, lead tracking, customer interactions, and revenue analytics.',
    icon: '🤝',
    iconTone: 'green',
    statePill: 'BETA',
    statePillTone: 'blue',
    tags: [
      { label: 'User Access', tone: 'green' },
      { label: 'Read Only', tone: 'gray' },
    ],
    stats: [
      { value: '5,432', label: 'Contacts' },
      { value: '234', label: 'Deals' },
    ],
    cta: 'Launch CRM Platform',
  },
  {
    id: 'analytics',
    title: 'Analytics Hub',
    description:
      'Advanced business intelligence and analytics platform with dashboards, reports, data visualization, and predictive insights.',
    icon: '◔',
    iconTone: 'indigo',
    tags: [
      { label: 'Admin Access', tone: 'blue' },
      { label: 'Full Control', tone: 'gray' },
    ],
    stats: [
      { value: '45', label: 'Datasets' },
      { value: '128', label: 'Reports' },
    ],
    cta: 'Launch Analytics Hub',
  },
  {
    id: 'marketplace',
    title: 'App Marketplace',
    description:
      'Enterprise app marketplace for discovering, installing, and managing third-party integrations and extensions.',
    icon: '▣',
    iconTone: 'pink',
    statePill: 'COMING SOON',
    statePillTone: 'amber',
    disabled: true,
    tags: [
      { label: 'Coming Soon', tone: 'amber' },
      { label: 'Preview', tone: 'gray' },
    ],
    stats: [
      { value: '120+', label: 'Apps' },
      { value: 'Top Rated', label: 'Ranking' },
    ],
    cta: 'Coming Soon',
  },
]

const FILTER_STATS = [
  {
    value: '6',
    label: 'Total Products',
    delta: '+2 new',
    iconTone: 'blue',
    icon: <ShieldIcon />,
  },
  {
    value: '4',
    label: 'Accessible Products',
    delta: 'Active',
    iconTone: 'green',
    icon: <UsersIcon />,
  },
  {
    value: '2',
    label: 'Admin Access',
    delta: 'Admin',
    iconTone: 'purple',
    icon: <BuildingIcon />,
  },
  {
    value: '1',
    label: 'Recently Used',
    delta: 'Recent',
    iconTone: 'orange',
    icon: <PieIcon />,
  },
]

function Products() {
  return (
    <main className="products-layout">
          <Sidebar />

      <section className="products-main">
        <Navbar />

        <div className="products-content">
          <section className="welcome-banner" aria-label="Welcome banner">
            <div>
              <h2>Welcome to Karnovate Enterprise Suite</h2>
              <p>
                Select a product to launch and start managing your enterprise operations
              </p>
              <div className="banner-stats">
                <span>3 Products Available</span>
                <span>Last accessed: IAM Admin</span>
              </div>
            </div>
            <div className="banner-icon" aria-hidden="true">
              <ShieldIcon />
            </div>
          </section>

          <section className="controls-row" aria-label="Product controls">
            <button type="button" className="control-dropdown">
              <span>All Products</span>
              <span aria-hidden="true">▾</span>
            </button>
            <button type="button" className="control-sort">
              <span aria-hidden="true">⇅</span>
              <span>Sort by Name</span>
            </button>
          </section>

          <section className="products-grid" aria-label="Available products">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>

          <section className="access-box" aria-label="Access request">
            <div className="access-copy">
              <h3>Need Access to a Product?</h3>
              <p>
                If you need access to a restricted product or want to upgrade your access level,
                please contact your system administrator or submit an access request.
              </p>
            </div>
            <button type="button" className="access-btn">
              Submit Access Request
            </button>
          </section>

          <section className="stats-grid" aria-label="Product stats">
            {FILTER_STATS.map((stat) => (
              <StatsCard key={stat.label} stat={stat} />
            ))}
          </section>

          <footer className="products-footer">
            <p>© 2024 Karnovate Enterprise Suite. All rights reserved.</p>
            <div>
              <a href="#" onClick={(event) => event.preventDefault()}>Privacy Policy</a>
              <a href="#" onClick={(event) => event.preventDefault()}>Terms of Service</a>
              <a href="#" onClick={(event) => event.preventDefault()}>Support</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default Products
