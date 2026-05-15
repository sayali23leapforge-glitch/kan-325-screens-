import { FiCalendar, FiCheckCircle, FiClock, FiPlus, FiXCircle } from 'react-icons/fi'

const overviewStats = [
  {
    title: 'Pending',
    count: 5,
    note: 'Awaiting response',
    bg: '#EFF6FF',
    color: '#2563EB',
    Icon: FiCalendar,
  },
  {
    title: 'Accepted',
    count: 12,
    note: 'This month',
    bg: '#F0FDF4',
    color: '#16A34A',
    Icon: FiCheckCircle,
  },
  {
    title: 'Under Review',
    count: 3,
    note: 'Negotiation phase',
    bg: '#FEFCE8',
    color: '#D97706',
    Icon: FiClock,
  },
  {
    title: 'Declined',
    count: 4,
    note: 'This month',
    bg: '#FEF2F2',
    color: '#DC2626',
    Icon: FiXCircle,
  },
]

function OfferOverview() {
  return (
    <article className="offer-card">
      <div className="offer-card-head">
        <h2>Offer Overview</h2>
        <div className="offer-overview-actions">
          <button type="button" className="offer-btn offer-btn-create">
            <FiPlus size={11} />
            Create Offer
          </button>
          <button type="button" className="offer-btn offer-btn-outline">Export Report</button>
        </div>
      </div>

      <div className="offer-overview-grid">
        {overviewStats.map((item) => (
          <div key={item.title} className="offer-overview-item" style={{ background: item.bg }}>
            <div className="offer-overview-title" style={{ color: item.color }}>
              <item.Icon size={11} />
              {item.title}
            </div>
            <div className="offer-overview-count">{item.count}</div>
            <div className="offer-overview-note">{item.note}</div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default OfferOverview
