import { FiSearch } from 'react-icons/fi'

function QueueFilters() {
  return (
    <section className="support-queue-filters" aria-label="Queue filters">
      <label className="support-queue-search" htmlFor="support-queue-search">
        <FiSearch size={14} />
        <input id="support-queue-search" type="text" placeholder="Search queues..." />
      </label>

      <button type="button" className="support-queue-select">All Departments</button>
      <button type="button" className="support-queue-select">All Status</button>
    </section>
  )
}

export default QueueFilters
