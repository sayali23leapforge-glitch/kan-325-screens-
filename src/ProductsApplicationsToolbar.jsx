function ProductsApplicationsToolbar({ totalProducts, enabledCount, disabledCount }) {
  return (
    <div className="products-applications-toolbar">
      <div className="toolbar-stats">
        <div className="stat-box" style={{ minWidth: '180px' }}>
          <span className="stat-label">Total Products:</span>
          <span className="stat-value" style={{ marginLeft: 'auto' }}>{totalProducts}</span>
        </div>
        <div className="stat-box" style={{ minWidth: '150px' }}>
          <span className="stat-label">Enabled:</span>
          <span className="stat-value enabled" style={{ marginLeft: 'auto' }}>{enabledCount}</span>
        </div>
        <div className="stat-box" style={{ minWidth: '150px' }}>
          <span className="stat-label">Disabled:</span>
          <span className="stat-value disabled" style={{ marginLeft: 'auto' }}>{disabledCount}</span>
        </div>
      </div>
      <div className="toolbar-view-toggle">
        <button className="view-button active">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
          Card View
        </button>
        <button className="view-button">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="4" width="18" height="3" />
            <rect x="3" y="10" width="18" height="3" />
            <rect x="3" y="16" width="18" height="3" />
          </svg>
          Table View
        </button>
      </div>
    </div>
  )
}

export default ProductsApplicationsToolbar
