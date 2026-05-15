import { useState } from 'react'
import { FiBell, FiPlus, FiTarget, FiCheckCircle, FiClock, FiTrendingUp, FiFilter, FiSearch } from 'react-icons/fi'
import PerformanceSidebar from './PerformanceSidebar'
import AssignGoalsModal from './AssignGoalsModal'
import './goals-targets-page.css'

const GOALS = [
  { id: 1, title: 'Improve Customer Satisfaction Score', category: 'Performance', employee: 'Sarah Mitchell', progress: 75, status: 'On Track', due: 'Dec 31, 2024' },
  { id: 2, title: 'Complete Leadership Development Program', category: 'Development', employee: 'David Park', progress: 45, status: 'In Progress', due: 'Sep 30, 2024' },
  { id: 3, title: 'Reduce Code Review Turnaround Time', category: 'Technical', employee: 'James Rodriguez', progress: 90, status: 'Near Complete', due: 'Jun 30, 2024' },
  { id: 4, title: 'Launch Q3 Marketing Campaign', category: 'Operational', employee: 'Anna Thompson', progress: 20, status: 'At Risk', due: 'Aug 15, 2024' },
  { id: 5, title: 'Achieve AWS Solutions Architect Certification', category: 'Technical', employee: 'Robert Watson', progress: 60, status: 'On Track', due: 'Nov 30, 2024' },
]

const STATUS_COLORS = {
  'On Track':     { bg: '#DCFCE7', color: '#166534' },
  'In Progress':  { bg: '#DBEAFE', color: '#1E40AF' },
  'Near Complete':{ bg: '#F3E8FF', color: '#6B21A8' },
  'At Risk':      { bg: '#FEF9C3', color: '#854D0E' },
}

function GoalsTargetsPage({ onSwitchModule }) {
  const [isAssignOpen, setIsAssignOpen] = useState(false)

  return (
    <div className="gt-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <AssignGoalsModal isOpen={isAssignOpen} onClose={() => setIsAssignOpen(false)} />

      <main className="gt-main">
        {/* Page Header */}
        <header className="gt-header">
          <div className="gt-header-left">
            <h1 className="gt-title">Goals &amp; Targets</h1>
            <nav className="gt-breadcrumb">
              <a href="/">Home</a><span>/</span>
              <a href="/hrm/performance">Performance</a><span>/</span>
              <span>Goals &amp; Targets</span>
            </nav>
          </div>
          <div className="gt-header-right">
            <button className="gt-bell-btn" title="Notifications">
              <FiBell size={18} />
              <span className="gt-bell-badge">3</span>
            </button>
            <button className="gt-assign-btn" onClick={() => setIsAssignOpen(true)}>
              <FiPlus size={14} />
              Assign Goal
            </button>
          </div>
        </header>

        <div className="gt-content">
          {/* Stats row */}
          <div className="gt-stats-row">
            {[
              { label: 'Total Goals', value: '24', icon: <FiTarget size={16} />, bg: '#DBEAFE', color: '#2563EB', badge: 'Active', badgeCls: 'gt-badge-blue' },
              { label: 'Completed', value: '11', icon: <FiCheckCircle size={16} />, bg: '#DCFCE7', color: '#16A34A', badge: 'Done', badgeCls: 'gt-badge-green' },
              { label: 'In Progress', value: '9', icon: <FiTrendingUp size={16} />, bg: '#F3E8FF', color: '#9333EA', badge: 'Running', badgeCls: 'gt-badge-purple' },
              { label: 'Overdue', value: '4', icon: <FiClock size={16} />, bg: '#FEF9C3', color: '#CA8A04', badge: 'Late', badgeCls: 'gt-badge-yellow' },
            ].map(s => (
              <div className="gt-stat-card" key={s.label}>
                <div className="gt-stat-top">
                  <span className="gt-stat-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</span>
                  <span className={`gt-badge ${s.badgeCls}`}>{s.badge}</span>
                </div>
                <div className="gt-stat-value">{s.value}</div>
                <div className="gt-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Table card */}
          <div className="gt-table-card">
            <div className="gt-table-header">
              <h2 className="gt-table-title">All Goals</h2>
              <div className="gt-table-actions">
                <div className="gt-search-wrap">
                  <FiSearch size={13} className="gt-search-icon" />
                  <input className="gt-search" type="text" placeholder="Search goals..." />
                </div>
                <button className="gt-filter-btn"><FiFilter size={13} /> Filter</button>
                <button className="gt-assign-btn-sm" onClick={() => setIsAssignOpen(true)}>
                  <FiPlus size={13} /> Assign Goal
                </button>
              </div>
            </div>

            <table className="gt-table">
              <thead>
                <tr>
                  <th>Goal Title</th>
                  <th>Category</th>
                  <th>Employee</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {GOALS.map(g => {
                  const sc = STATUS_COLORS[g.status] || { bg: '#F3F4F6', color: '#374151' }
                  return (
                    <tr key={g.id}>
                      <td className="gt-td-title">{g.title}</td>
                      <td><span className="gt-category-pill">{g.category}</span></td>
                      <td>{g.employee}</td>
                      <td>
                        <div className="gt-progress-wrap">
                          <div className="gt-progress-bar">
                            <div className="gt-progress-fill" style={{ width: `${g.progress}%` }} />
                          </div>
                          <span className="gt-progress-pct">{g.progress}%</span>
                        </div>
                      </td>
                      <td>
                        <span className="gt-status-badge" style={{ background: sc.bg, color: sc.color }}>
                          {g.status}
                        </span>
                      </td>
                      <td>{g.due}</td>
                      <td>
                        <button className="gt-view-btn">View</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GoalsTargetsPage
