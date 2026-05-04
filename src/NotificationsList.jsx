import NotificationCard from './NotificationCard'

function NotificationsList({ notifications, selectedCategory }) {
  if (notifications.length === 0) {
    return (
      <div className="notifications-empty">
        <p>No notifications</p>
      </div>
    )
  }

  return (
    <div className="notifications-list">
      {notifications.map(notification => (
        <NotificationCard 
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  )
}

export default NotificationsList
