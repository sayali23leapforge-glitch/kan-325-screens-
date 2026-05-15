function FiltersBar() {
  return (
    <article className="reports-filter-card">
      <div className="reports-filter-grid">
        <label className="reports-filter-field">
          <span>Date Range</span>
          <button type="button" className="reports-filter-control">
            <strong>Last 7 Days</strong>
            <i>▾</i>
          </button>
        </label>

        <label className="reports-filter-field">
          <span>Channel</span>
          <button type="button" className="reports-filter-control">
            <strong>All Channels</strong>
            <i>▾</i>
          </button>
        </label>

        <label className="reports-filter-field">
          <span>Agent</span>
          <button type="button" className="reports-filter-control">
            <strong>All Agents</strong>
            <i>▾</i>
          </button>
        </label>

        <label className="reports-filter-field">
          <span>Status</span>
          <button type="button" className="reports-filter-control">
            <strong>All Status</strong>
            <i>▾</i>
          </button>
        </label>

        <button type="button" className="reports-filter-apply">
          Apply Filters
        </button>
      </div>
    </article>
  )
}

export default FiltersBar