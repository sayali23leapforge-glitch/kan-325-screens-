import { useState } from 'react'
import Sidebar from './Sidebar'
import NotificationsHeader from './NotificationsHeader'
import NotificationFilters from './NotificationFilters'
import NotificationsList from './NotificationsList'
import './notifications.css'

function NotificationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Critical: Multiple Failed Login Attempts',
      description: 'Detected 5 failed login attempts from IP 192.168.45.120 for user sarah.j@acmecorp.com. Account temporarily locked for security.',
      severity: 'Critical',
      category: 'Security',
      timestamp: '2 minutes ago',
      read: false,
      borderColor: '#EF4444',
      backgroundColor: '#FEE2E2',
      iconColor: '#DC2626'
    },
    {
      id: 2,
      title: 'Security Policy Update Required',
      description: "Your organization's password policy needs to be updated to meet new compliance requirements. Action required by Jan 15, 2025.",
      severity: 'Warning',
      category: 'Policy',
      timestamp: '1 hour ago',
      read: false,
      borderColor: '#EAB308',
      backgroundColor: '#FEF9C3',
      iconColor: '#CA8A04'
    },
    {
      id: 3,
      title: 'New User Added to Your Team',
      description: 'Alex Rivera has been added to the Engineering team with Developer role permissions by Michael Chen.',
      severity: 'Info',
      category: 'System',
      timestamp: '3 hours ago',
      read: false,
      borderColor: '#3B82F6',
      backgroundColor: '#DBEAFE',
      iconColor: '#2563EB'
    },
    {
      id: 4,
      title: 'System Maintenance Scheduled',
      description: 'Planned maintenance window on Jan 12, 2025 from 2:00 AM to 4:00 AM EST. Services may be temporarily unavailable.',
      severity: 'Info',
      category: 'System',
      timestamp: 'Yesterday',
      read: true,
      borderColor: '#D1D5DB',
      backgroundColor: '#E5E7EB',
      iconColor: '#4B5563'
    },
    {
      id: 5,
      title: 'API Token Expiring Soon',
      description: 'Your API access token for Analytics Platform will expire in 7 days. Please generate a new token to maintain access.',
      severity: 'Info',
      category: 'Security',
      timestamp: '2 days ago',
      read: true,
      borderColor: '#D1D5DB',
      backgroundColor: '#E5E7EB',
      iconColor: '#4B5563'
    },
    {
      id: 6,
      title: 'Compliance Report Generated',
      description: 'Monthly security compliance report for December 2024 is now available for download and review.',
      severity: 'Info',
      category: 'System',
      timestamp: '3 days ago',
      read: true,
      borderColor: '#D1D5DB',
      backgroundColor: '#E5E7EB',
      iconColor: '#4B5563'
    }
  ])

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })))
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const filteredNotifications = selectedCategory === 'all' 
    ? notifications 
    : notifications.filter(n => n.category === selectedCategory)

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <NotificationsHeader 
          onMarkAllRead={handleMarkAllRead}
          unreadCount={notifications.filter(n => !n.read).length}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="notifications-container">
          <NotificationFilters 
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
            notifications={notifications}
            onClearAll={handleClearAll}
          />
          <NotificationsList 
            notifications={filteredNotifications}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </main>
  )
}

export default NotificationsPage
