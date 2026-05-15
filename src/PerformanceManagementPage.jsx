import { useState } from 'react'
import {
  FiBell,
  FiPlus,
  FiStar,
  FiCheckCircle,
  FiClock,
  FiAward,
  FiFilter,
  FiDownload,
} from 'react-icons/fi'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import PerformanceSidebar from './PerformanceSidebar'
import CreateReviewCycleModal from './CreateReviewCycleModal'
import './performance-management-page.css'

const trendDataByQuarter = {
  Q1: [
    { month: 'Jan', overall: 3.9, top: 4.4 },
    { month: 'Feb', overall: 4.0, top: 4.5 },
    { month: 'Mar', overall: 4.1, top: 4.6 },
    { month: 'Apr', overall: 4.1, top: 4.6 },
    { month: 'May', overall: 4.2, top: 4.7 },
    { month: 'Jun', overall: 4.2, top: 4.8 },
  ],
  Q2: [
    { month: 'Jan', overall: 3.8, top: 4.3 },
    { month: 'Feb', overall: 4.0, top: 4.5 },
    { month: 'Mar', overall: 4.1, top: 4.6 },
    { month: 'Apr', overall: 4.0, top: 4.5 },
    { month: 'May', overall: 4.2, top: 4.7 },
    { month: 'Jun', overall: 4.3, top: 4.8 },
  ],
  Q3: [
    { month: 'Jan', overall: 3.7, top: 4.2 },
    { month: 'Feb', overall: 3.9, top: 4.4 },
    { month: 'Mar', overall: 4.0, top: 4.5 },
    { month: 'Apr', overall: 4.1, top: 4.6 },
    { month: 'May', overall: 4.1, top: 4.6 },
    { month: 'Jun', overall: 4.2, top: 4.7 },
  ],
}

const stats = [
  {
    key: 'overall',
    title: 'Overall Rating',
    value: '4.2',
    badge: 'Average',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    badgeClass: 'perf-badge-blue',
    Icon: FiStar,
  },
  {
    key: 'done',
    title: 'Reviews Done',
    value: '189',
    badge: 'Completed',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    badgeClass: 'perf-badge-green',
    Icon: FiCheckCircle,
  },
  {
    key: 'awaiting',
    title: 'Awaiting Review',
    value: '32',
    badge: 'Pending',
    iconBg: '#FEF9C3',
    iconColor: '#CA8A04',
    badgeClass: 'perf-badge-yellow',
    Icon: FiClock,
  },
  {
    key: 'top',
    title: 'High Performers',
    value: '47',
    badge: 'Top',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    badgeClass: 'perf-badge-purple',
    Icon: FiAward,
  },
]

const ratingDistribution = [
  { label: '5 Stars', value: 42, color: '#10B981' },
  { label: '4 Stars', value: 35, color: '#3B82F6' },
  { label: '3 Stars', value: 18, color: '#F59E0B' },
  { label: '2 Stars', value: 4, color: '#F97316' },
  { label: '1 Star', value: 1, color: '#EF4444' },
]

const topPerformers = [
  { name: 'Sarah Mitchell', role: 'Senior Designer', rating: 4.9, avatar: 'SM', avatarColor: '#8B5CF6' },
  { name: 'David Park', role: 'Engineering Lead', rating: 4.8, avatar: 'DP', avatarColor: '#10B981' },
  { name: 'Anna Thompson', role: 'Marketing Manager', rating: 4.7, avatar: 'AT', avatarColor: '#3B82F6' },
]

const reviewRows = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: 'SM',
    avatarColor: '#8B5CF6',
    department: 'Design',
    reviewer: 'Michael Chen',
    period: 'Q2 2024',
    rating: 4.9,
    status: 'Completed',
    action: 'View',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    avatar: 'JR',
    avatarColor: '#2563EB',
    department: 'Engineering',
    reviewer: 'Michael Chen',
    period: 'Q2 2024',
    rating: 4.3,
    status: 'Completed',
    action: 'View',
  },
  {
    id: 3,
    name: 'David Park',
    avatar: 'DP',
    avatarColor: '#10B981',
    department: 'Engineering',
    reviewer: 'Michael Chen',
    period: 'Q2 2024',
    rating: 4.8,
    status: 'Completed',
    action: 'View',
  },
  {
    id: 4,
    name: 'Robert Watson',
    avatar: 'RW',
    avatarColor: '#F59E0B',
    department: 'Product',
    reviewer: 'Michael Chen',
    period: 'Q2 2024',
    rating: 4.1,
    status: 'In Review',
    action: 'Continue',
  },
  {
    id: 5,
    name: 'Anna Thompson',
    avatar: 'AT',
    avatarColor: '#3B82F6',
    department: 'Marketing',
    reviewer: 'Michael Chen',
    period: 'Q2 2024',
    rating: 4.7,
    status: 'Completed',
    action: 'View',
  },
]

function PerformanceManagementPage({ onSwitchModule }) {
  const [activeQuarter, setActiveQuarter] = useState('Q2')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const trendData = trendDataByQuarter[activeQuarter]

  return (
    <div className="perf-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <CreateReviewCycleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <main className="perf-main">
        <header className="perf-header">
          <div className="perf-header-left">
            <h1 className="perf-title">Performance Management</h1>
            <nav className="perf-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Performance Management</span>
            </nav>
          </div>

          <div className="perf-header-right">
            <button className="perf-bell-btn" title="Notifications">
              <FiBell size={18} />
              <span className="perf-bell-badge">5</span>
            </button>
            <button
              className="perf-new-btn"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlus size={14} />
              New Review
            </button>
          </div>
        </header>

        <div className="perf-content">
          <section className="perf-stats-row">
            {stats.map((card) => (
              <article key={card.key} className="perf-stat-card">
                <div className="perf-stat-top">
                  <div className="perf-stat-icon" style={{ backgroundColor: card.iconBg }}>
                    <card.Icon size={16} color={card.iconColor} />
                  </div>
                  <span className={`perf-stat-badge ${card.badgeClass}`}>{card.badge}</span>
                </div>
                <div className="perf-stat-value">{card.value}</div>
                <div className="perf-stat-title">{card.title}</div>
              </article>
            ))}
          </section>

          <section className="perf-mid-row">
            <div className="perf-chart-card">
              <div className="perf-card-header">
                <h2 className="perf-card-title">Performance Trends</h2>
                <div className="perf-tabs">
                  {['Q1', 'Q2', 'Q3'].map((quarter) => (
                    <button
                      key={quarter}
                      type="button"
                      className={`perf-tab ${activeQuarter === quarter ? 'active' : ''}`}
                      onClick={() => setActiveQuarter(quarter)}
                    >
                      {quarter}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={225}>
                <LineChart data={trendData} margin={{ top: 10, right: 8, left: -14, bottom: 0 }}>
                  <CartesianGrid stroke="#F1F5F9" strokeDasharray="2 2" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 10 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 10 }}
                    domain={[3.5, 5]}
                    ticks={[3.5, 4, 4.5, 5]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="overall"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="Overall Rating"
                    dot={{ r: 3, fill: '#3B82F6', strokeWidth: 0 }}
                    activeDot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="top"
                    stroke="#10B981"
                    strokeWidth={2}
                    name="Top Performers"
                    dot={{ r: 3, fill: '#10B981', strokeWidth: 0 }}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="perf-right-card">
              <div className="perf-panel">
                <h2 className="perf-card-title">Rating Distribution</h2>
                <div className="perf-rating-list">
                  {ratingDistribution.map((item) => (
                    <div key={item.label} className="perf-rating-row">
                      <div className="perf-rating-head">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="perf-rating-track">
                        <div
                          className="perf-rating-fill"
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="perf-panel">
                <h2 className="perf-card-title">Top Performers</h2>
                <div className="perf-top-list">
                  {topPerformers.map((person) => (
                    <div key={person.name} className="perf-top-item">
                      <span className="perf-avatar" style={{ backgroundColor: person.avatarColor }}>{person.avatar}</span>
                      <div className="perf-top-info">
                        <div className="perf-top-name">{person.name}</div>
                        <div className="perf-top-role">{person.role}</div>
                      </div>
                      <div className="perf-top-rating">
                        <FiStar size={12} />
                        <span>{person.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="perf-table-card">
            <div className="perf-card-header perf-table-header">
              <h2 className="perf-card-title">Performance Reviews</h2>
              <div className="perf-controls">
                <button type="button" className="perf-control-btn">
                  <FiFilter size={12} />
                  Filter
                </button>
                <button type="button" className="perf-control-btn">
                  <FiDownload size={12} />
                  Export
                </button>
              </div>
            </div>

            <div className="perf-table-wrap">
              <table className="perf-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Reviewer</th>
                    <th>Period</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewRows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div className="perf-employee-cell">
                          <span className="perf-avatar" style={{ backgroundColor: row.avatarColor }}>{row.avatar}</span>
                          <span className="perf-employee-name">{row.name}</span>
                        </div>
                      </td>
                      <td>{row.department}</td>
                      <td>{row.reviewer}</td>
                      <td>{row.period}</td>
                      <td>
                        <div className="perf-rating-cell">
                          <FiStar size={12} />
                          <span>{row.rating}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`perf-status ${row.status === 'Completed' ? 'completed' : 'in-review'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td>
                        <button type="button" className="perf-action-btn">{row.action}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PerformanceManagementPage
