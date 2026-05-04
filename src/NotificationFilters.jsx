function NotificationFilters({ selectedCategory, onCategoryClick, notifications, onClearAll }) {
  const getCategoryCount = (category) => {
    if (category === 'all') return notifications.length
    return notifications.filter(n => n.category === category).length
  }

  const categories = [
    { label: 'All', value: 'all', count: getCategoryCount('all') },
    { label: 'Security', value: 'Security', count: getCategoryCount('Security') },
    { label: 'System', value: 'System', count: getCategoryCount('System') },
    { label: 'Policy', value: 'Policy', count: getCategoryCount('Policy') }
  ]

  return (
    <div className="notifications-filters">
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`filter-button ${selectedCategory === cat.value ? 'active' : ''}`}
            onClick={() => onCategoryClick(cat.value)}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>
      <button className="btn-clear-all" onClick={onClearAll}>
        Clear All
      </button>
    </div>
  )
}

export default NotificationFilters
