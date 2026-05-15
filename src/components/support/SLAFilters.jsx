import { FiSearch } from 'react-icons/fi'

function SLAFilters() {
  return (
    <section className="support-sla-filters" aria-label="SLA filters">
      <label className="support-sla-search" htmlFor="support-sla-search">
        <FiSearch size={14} />
        <input id="support-sla-search" type="text" placeholder="Search SLAs..." />
      </label>

      <button type="button" className="support-sla-select">All Priorities</button>
      <button type="button" className="support-sla-select">All Status</button>
    </section>
  )
}

export default SLAFilters
