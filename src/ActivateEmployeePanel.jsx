import { useMemo, useState } from 'react'

function ActivateEmployeePanel({ onEmployeeClick }) {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'John Smith',
      role: 'Senior Software Engineer',
      email: 'john.smith@karnovate.com',
      avatar: 'https://placehold.co/34x34',
      status: 'inactive',
    },
    {
      id: 2,
      name: 'Lisa Chen',
      role: 'Marketing Manager',
      email: 'lisa.chen@karnovate.com',
      avatar: 'https://placehold.co/34x34',
      status: 'active',
    },
    {
      id: 3,
      name: 'David Park',
      role: 'Sales Director',
      email: 'david.park@karnovate.com',
      avatar: 'https://placehold.co/34x34',
      status: 'pending',
    },
    {
      id: 4,
      name: 'Maria Garcia',
      role: 'Product Designer',
      email: 'maria.garcia@karnovate.com',
      avatar: 'https://placehold.co/34x34',
      status: 'active',
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      email: 'james.wilson@karnovate.com',
      avatar: 'https://placehold.co/34x34',
      status: 'inactive',
    },
  ])
  const [selectedIds, setSelectedIds] = useState([])

  const selectedCount = selectedIds.length

  const allSelected = useMemo(() => rows.length > 0 && selectedIds.length === rows.length, [rows.length, selectedIds.length])

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds([])
      return
    }
    setSelectedIds(rows.map((row) => row.id))
  }

  const toggleRow = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]))
  }

  const activateSelected = () => {
    if (selectedIds.length === 0) {
      return
    }

    setRows((prev) => prev.map((row) => (selectedIds.includes(row.id) ? { ...row, status: 'active' } : row)))
    setSelectedIds([])
  }

  const handleAction = (id, status) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.id !== id) {
          return row
        }

        return {
          ...row,
          status: status === 'active' ? 'inactive' : 'active',
        }
      })
    )
  }

  return (
    <section className="activate-employee-panel">
      <div className="activate-employee-header">
        <div>
          <h3>Activate Employee</h3>
          <p>Enable or disable employee access to the system</p>
        </div>
        <button className="activate-employee-bulk-btn" onClick={activateSelected}>
          Activate Selected{selectedCount > 0 ? ` (${selectedCount})` : ''}
        </button>
      </div>

      <div className="activate-employee-list">
        <div className="activate-employee-row activate-employee-row-head">
          <div className="activate-employee-left">
            <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Select all employees" />
            <span>Select All</span>
          </div>
        </div>

        {rows.map((row) => {
          const isActive = row.status === 'active'
          const isPending = row.status === 'pending'
          const actionLabel = isActive ? 'Deactivate' : 'Activate'

          return (
            <div
              key={row.id}
              className="activate-employee-row activate-employee-row-clickable"
              onClick={() => onEmployeeClick?.(row.id)}
            >
              <div className="activate-employee-left">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Select ${row.name}`}
                />
                <img src={row.avatar} alt={row.name} className="activate-employee-avatar" />
                <div className="activate-employee-text">
                  <div className="activate-employee-name">{row.name}</div>
                  <div className="activate-employee-role">{row.role}</div>
                  <div className="activate-employee-email">{row.email}</div>
                </div>
              </div>

              <div className="activate-employee-right">
                <span className={`activate-employee-status ${row.status}`}>
                  {isPending ? 'Pending' : isActive ? 'Active' : 'Inactive'}
                </span>
                <button
                  className={`activate-employee-action-btn ${isActive ? 'gray' : 'blue'}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAction(row.id, row.status)
                  }}
                >
                  {actionLabel}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ActivateEmployeePanel
