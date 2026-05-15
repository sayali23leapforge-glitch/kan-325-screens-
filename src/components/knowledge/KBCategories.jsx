import { FiBookOpen, FiShield, FiTool, FiZap } from 'react-icons/fi'

const categories = [
  { label: 'Getting Started', count: 42, icon: FiZap, active: true },
  { label: 'Account & Billing', count: 38, icon: FiBookOpen },
  { label: 'Technical Support', count: 56, icon: FiTool },
  { label: 'Features', count: 64, icon: FiZap },
  { label: 'Troubleshooting', count: 48, icon: FiTool },
  { label: 'Security & Privacy', count: 28, icon: FiShield },
]

const tags = ['Setup', 'API', 'Integration', 'Password', 'Billing', 'Mobile']

function KBCategories() {
  return (
    <aside className="kb-categories-card">
      <h3>Categories</h3>

      <div className="kb-categories-list">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button key={category.label} type="button" className={`kb-category-item ${category.active ? 'active' : ''}`}>
              <Icon size={12} />
              <span>{category.label}</span>
              <em>{category.count}</em>
            </button>
          )
        })}
      </div>

      <div className="kb-tags-block">
        <p>Popular Tags</p>
        <div className="kb-tags-wrap">
          {tags.map((tag) => (
            <span key={tag} className="kb-tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default KBCategories
