import { FiCheckCircle, FiFileText, FiPlayCircle } from 'react-icons/fi'

const activities = [
  {
    iconTone: 'green',
    Icon: FiCheckCircle,
    text: 'Sarah Wilson accepted the offer for Senior Frontend Developer',
    time: '2 hours ago',
  },
  {
    iconTone: 'blue',
    Icon: FiPlayCircle,
    text: 'David Park completed onboarding for Backend Engineer role',
    time: '5 hours ago',
  },
  {
    iconTone: 'purple',
    Icon: FiFileText,
    text: 'Mason Johnson submitted all onboarding documents',
    time: '1 day ago',
  },
]

function RecentActivity() {
  return (
    <article className="acc-card">
      <div className="acc-section-head">
        <h3>Recent Activity</h3>
      </div>

      <div className="acc-activity-list">
        {activities.map((item) => (
          <div key={item.text} className="acc-activity-item">
            <span className={`acc-activity-icon ${item.iconTone}`}>
              <item.Icon size={11} />
            </span>
            <div className="acc-activity-copy">
              <div className="acc-activity-text">{item.text}</div>
              <div className="acc-activity-time">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default RecentActivity
