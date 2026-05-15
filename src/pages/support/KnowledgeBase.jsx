import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiEye,
  FiSearch,
  FiThumbsUp,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './knowledge-base.css'

const stats = [
  { title: 'Total Articles', value: '247', tone: 'blue', icon: FiBookOpen },
  { title: 'Views This Month', value: '12.4K', tone: 'green', icon: FiEye },
  { title: 'Helpful Rating', value: '94%', tone: 'purple', icon: FiThumbsUp },
  { title: 'Pending Review', value: '8', tone: 'orange', icon: FiClock },
]

const categoryCards = [
  { title: 'Getting Started', articles: '42 articles', popular: 'Popular: Account Setup Guide', tone: 'blue' },
  { title: 'Troubleshooting', articles: '38 articles', popular: 'Popular: Login Problems', tone: 'green' },
  { title: 'Account Settings', articles: '29 articles', popular: 'Popular: Password Reset', tone: 'purple' },
  { title: 'Billing & Payments', articles: '24 articles', popular: 'Popular: Update Payment Method', tone: 'orange' },
]

const popularArticles = [
  { title: 'How to reset your password', description: 'Account security and access guide', views: '2,452 views', rating: '98%', rank: 1 },
  { title: 'Setting up two-factor authentication', description: 'Protect your account with 2FA', views: '2,118 views', rating: '96%', rank: 2 },
  { title: 'Understanding your billing cycle', description: 'Invoices, charges, and statements', views: '1,982 views', rating: '95%', rank: 3 },
  { title: 'Troubleshooting login issues', description: 'Common sign-in problem fixes', views: '1,764 views', rating: '93%', rank: 4 },
  { title: 'Upgrading your subscription', description: 'Plans, limits, and billing changes', views: '1,533 views', rating: '91%', rank: 5 },
]

const recentArticles = [
  { category: 'Getting Started', title: 'Complete account setup checklist', author: 'By Maya Patel', date: '2 days ago' },
  { category: 'Troubleshooting', title: 'Resolving connection timeout errors', author: 'By Liam Carter', date: '3 days ago' },
  { category: 'Account Settings', title: 'Managing profile and notification settings', author: 'By Noor Hassan', date: '4 days ago' },
]

function KnowledgeBase() {
  const navigate = useNavigate()

  return (
    <div className="kb-layout">
      <SupportSidebar />

      <main className="kb-main">
        <header className="kb-header">
          <div>
            <h1>Knowledge Base</h1>
            <nav className="kb-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Knowledge Base</span>
            </nav>
          </div>

          <div className="kb-header-actions">
            <button type="button" className="kb-bell" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M10 17a2 2 0 0 0 4 0" />
              </svg>
              <span>5</span>
            </button>

            <button
              type="button"
              className="kb-primary-btn"
              onClick={() => navigate('/create-article')}
            >
              + New Article
            </button>
          </div>
        </header>

        <section className="kb-content">
          <section className="kb-hero-card">
            <h2>Search Knowledge Base</h2>
            <p>Find answers to common questions and troubleshooting guides</p>

            <div className="kb-hero-search">
              <FiSearch size={15} />
              <input type="text" placeholder="Search articles, guides, FAQs..." />
              <button type="button" aria-label="Search knowledge base">
                <FiSearch size={14} />
              </button>
            </div>

            <div className="kb-hero-pills">
              <span>Getting Started</span>
              <span>Account Setup</span>
              <span>Troubleshooting</span>
              <span>Billing</span>
            </div>
          </section>

          <section className="kb-stats-grid" aria-label="Knowledge base stats">
            {stats.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="kb-stat-card">
                  <div className={`kb-stat-icon ${item.tone}`}>
                    <Icon size={14} />
                  </div>
                  <div>
                    <strong>{item.value}</strong>
                    <p>{item.title}</p>
                  </div>
                </article>
              )
            })}
          </section>

          <div className="kb-main-grid">
            <section className="kb-categories-panel">
              <div className="kb-panel-head">
                <div>
                  <h3>Article Categories</h3>
                  <p>Browse by topic</p>
                </div>
                <button type="button">View all</button>
              </div>

              <div className="kb-category-grid">
                {categoryCards.map((item) => (
                  <article key={item.title} className={`kb-category-card ${item.tone}`}>
                    <div className="kb-category-top">
                      <h4>{item.title}</h4>
                      <span>{item.articles}</span>
                    </div>
                    <p>{item.popular}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="kb-popular-panel">
              <div className="kb-panel-head">
                <div>
                  <h3>Popular Articles</h3>
                  <p>Most viewed this week</p>
                </div>
              </div>

              <div className="kb-popular-list">
                {popularArticles.map((item) => (
                  <article key={item.rank} className="kb-popular-item">
                    <span className={`kb-rank rank-${item.rank}`}>{item.rank}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="kb-popular-meta">
                        <span>{item.views}</span>
                        <strong>{item.rating}</strong>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>

          <section className="kb-recent-panel">
            <div className="kb-panel-head recent">
              <div>
                <h3>Recent Articles</h3>
                <p>Latest additions to knowledge base</p>
              </div>

              <div className="kb-recent-actions">
                <button type="button" className="kb-category-filter">All Categories <FiChevronDown size={12} /></button>
                <button type="button" className="kb-view-all">View All</button>
              </div>
            </div>

            <div className="kb-recent-grid">
              {recentArticles.map((item) => (
                <article key={item.title} className="kb-recent-item">
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                  <div>
                    <p>{item.author}</p>
                    <small>{item.date}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="kb-cta-panel">
            <span>
              <FiCheckCircle size={14} />
            </span>
            <h3>Can&apos;t find what you&apos;re looking for?</h3>
            <div>
              <button type="button">Contact Support</button>
              <button type="button" className="secondary">Ask AI Bot</button>
            </div>
            <FiArrowRight size={14} />
          </section>
        </section>
      </main>
    </div>
  )
}

export default KnowledgeBase
