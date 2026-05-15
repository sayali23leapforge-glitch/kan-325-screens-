const activitiesData = [
  {
    id: 1,
    icon: '●',
    iconColor: 'blue',
    text: 'Auto-assign rule triggered',
    time: '2 min ago',
  },
  {
    id: 2,
    icon: '●',
    iconColor: 'green',
    text: 'Follow-up email sent',
    time: '5 min ago',
  },
  {
    id: 3,
    icon: '●',
    iconColor: 'orange',
    text: 'SLA alert triggered',
    time: '8 min ago',
  },
  {
    id: 4,
    icon: '●',
    iconColor: 'purple',
    text: 'Ticket auto-categorized',
    time: '3 hours ago',
  },
]

function RecentActivity() {
  return (
    <div className="recent-activity-card">
      <h3 className="recent-activity-title">Recent Activity</h3>
      <div className="recent-activity-list">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-dot ${activity.iconColor}`} />
            <div>
              <div className="activity-text">{activity.text}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
