import { FiCheckCircle, FiDownload, FiPlayCircle, FiTrendingUp, FiUsers } from 'react-icons/fi'

const stats = [
  {
    title: 'Accepted',
    value: '12',
    note: 'This month',
    bg: '#F0FDF4',
    color: '#16A34A',
    Icon: FiCheckCircle,
  },
  {
    title: 'Onboarding',
    value: '8',
    note: 'In progress',
    bg: '#EFF6FF',
    color: '#2563EB',
    Icon: FiUsers,
  },
  {
    title: 'Started',
    value: '5',
    note: 'This week',
    bg: '#FAF5FF',
    color: '#9333EA',
    Icon: FiPlayCircle,
  },
  {
    title: 'Acceptance Rate',
    value: '85%',
    note: 'Last quarter',
    bg: '#FEFCE8',
    color: '#D97706',
    Icon: FiTrendingUp,
  },
]

function AcceptanceOverview() {
  return (
    <article className="acc-card">
      <div className="acc-card-head">
        <h2>Acceptance Overview</h2>
        <div className="acc-overview-actions">
          <button type="button" className="acc-btn acc-btn-track">Track Acceptance</button>
          <button type="button" className="acc-btn acc-btn-outline">
            <FiDownload size={11} />
            Export Report
          </button>
        </div>
      </div>

      <div className="acc-overview-grid">
        {stats.map((item) => (
          <div key={item.title} className="acc-overview-item" style={{ background: item.bg }}>
            <div className="acc-overview-title" style={{ color: item.color }}>
              <item.Icon size={11} />
              {item.title}
            </div>
            <div className="acc-overview-value">{item.value}</div>
            <div className="acc-overview-note">{item.note}</div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default AcceptanceOverview
