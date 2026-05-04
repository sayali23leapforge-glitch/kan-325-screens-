import { FiSearch, FiDownload } from 'react-icons/fi'
import { useState } from 'react'
import LogLevelBadge from './LogLevelBadge'
import Pagination from './Pagination'

function ActivityLogsTable({ logs }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 8

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.ip.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLevel = levelFilter === 'all' || log.level.toLowerCase() === levelFilter.toLowerCase()

    return matchesSearch && matchesLevel
  })

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage)
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleExport = () => {
    console.log('Exporting logs...')
  }

  return (
    <div className="activity-logs-card">
      <h3 className="logs-card-title">Activity Logs</h3>

      {/* Toolbar */}
      <div className="logs-toolbar">
        <div className="search-wrapper">
          <FiSearch size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
          />
        </div>

        <select
          className="level-filter"
          value={levelFilter}
          onChange={(e) => {
            setLevelFilter(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="all">All Levels</option>
          <option value="error">Error</option>
          <option value="warn">Warning</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>

        <button className="btn-export" onClick={handleExport}>
          <FiDownload size={14} />
          <span>Export</span>
        </button>
      </div>

      {/* Table */}
      <div className="logs-table-wrapper">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Level</th>
              <th>Event</th>
              <th>User</th>
              <th>IP Address</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.map((log, idx) => (
              <tr key={idx}>
                <td>{log.timestamp}</td>
                <td><LogLevelBadge level={log.level} /></td>
                <td>{log.event}</td>
                <td>{log.user}</td>
                <td>{log.ip}</td>
                <td><a href="#" className="view-link">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalEntries={filteredLogs.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  )
}

export default ActivityLogsTable
