import { FiCheckCircle, FiClock, FiSend, FiXCircle } from 'react-icons/fi'

const activityItems = [
  {
    title: 'Sarah Wilson accepted the offer',
    subtitle: 'Senior Frontend Developer • $125,000 base salary',
    time: '2 hours ago',
    iconTone: 'green',
    Icon: FiCheckCircle,
  },
  {
    title: 'Emma Thompson requested salary negotiation',
    subtitle: 'Product Manager • Requested $140,000 (current: $135,000)',
    time: '5 hours ago',
    iconTone: 'yellow',
    Icon: FiClock,
  },
  {
    title: 'New offer sent to David Park',
    subtitle: 'Backend Engineer • $118,000 base salary',
    time: '1 day ago',
    iconTone: 'blue',
    Icon: FiSend,
  },
  {
    title: 'James Miller declined the offer',
    subtitle: 'Full Stack Developer • Reason: Better offer elsewhere',
    time: '2 days ago',
    iconTone: 'red',
    Icon: FiXCircle,
  },
]

function RecentActivity() {
  return (
    <article className="offer-card">
      <div className="offer-section-head">
        <h3>Recent Activity</h3>
      </div>

      <div className="offer-activity-list">
        {activityItems.map((item) => (
          <div key={item.title} className="offer-activity-item">
            <span className={`offer-activity-icon ${item.iconTone}`}>
              <item.Icon size={11} />
            </span>
            <div className="offer-activity-copy">
              <div className="offer-activity-title">{item.title}</div>
              <div className="offer-activity-subtitle">{item.subtitle}</div>
              <div className="offer-activity-time">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default RecentActivity
