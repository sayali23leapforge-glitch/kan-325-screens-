import { FiFilter, FiSearch } from 'react-icons/fi'

function TicketFilters() {
  return (
    <section className="support-filters-card" aria-label="Ticket filters">
      <label className="support-search-input-wrap" htmlFor="support-ticket-search">
        <FiSearch size={14} />
        <input id="support-ticket-search" type="text" placeholder="Search tickets..." />
      </label>

      <button type="button" className="support-filter-select">All Status</button>
      <button type="button" className="support-filter-select">All Priority</button>
      <button type="button" className="support-filter-select">All Agents</button>

      <button type="button" className="support-filter-button">
        <FiFilter size={13} />
        Filters
      </button>
    </section>
  )
}

export default TicketFilters
