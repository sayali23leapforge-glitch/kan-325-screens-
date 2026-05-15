import { FiFilter, FiSearch } from 'react-icons/fi'

function KBSearchBar() {
  return (
    <section className="kb-search-bar" aria-label="Knowledge base search and filters">
      <label className="kb-search-input" htmlFor="kb-search">
        <FiSearch size={14} />
        <input id="kb-search" type="text" placeholder="Search articles, FAQs, guides..." />
      </label>

      <button type="button" className="kb-filter-select">All Categories</button>
      <button type="button" className="kb-filter-button">
        <FiFilter size={13} />
        Filters
      </button>
    </section>
  )
}

export default KBSearchBar
