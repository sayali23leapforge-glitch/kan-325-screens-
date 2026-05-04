import { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'
import AnnouncementBanner from './AnnouncementBanner'
import AlertInfoCard from './AlertInfoCard'
import StatsCard from './StatsCard'
import QuickActionCard from './QuickActionCard'
import ActivityItem from './ActivityItem'
import SystemStatusCard from './SystemStatusCard'
import IAMDashboard1 from './IAMDashboard1'
import SecurityAlerts from './SecurityAlerts'
import './dashboard.css'

import {
  FiUsers,
  FiBox,
  FiAlertCircle,
  FiTrendingUp,
  FiUserPlus,
  FiFileText,
  FiLock,
  FiClock,
  FiCalendar,
  FiSettings,
  FiMenu,
  FiX,
} from 'react-icons/fi'

function Dashboard() {
  const [showBanner, setShowBanner] = useState(true)
  const [dashboardView, setDashboardView] = useState('default')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const statCards = [
    {
      value: '2,847',
      label: 'Active Users',
      delta: '+12%',
      footer: '342 vs last month',
      iconTone: 'blue',
      icon: <FiUsers />,
    },
    {
      value: '6',
      label: 'Active Products',
      delta: 'Live',
      footer: 'All systems operational',
      iconTone: 'purple',
      icon: <FiBox />,
    },
    {
      value: '142',
      label: 'Open Tickets',
      delta: '-8%',
      footer: '13 less than yesterday',
      iconTone: 'orange',
      icon: <FiAlertCircle />,
    },
    {
      value: '98.7%',
      label: 'System Uptime',
      delta: '+24%',
      footer: 'Above target',
      iconTone: 'green',
      icon: <FiTrendingUp />,
    },
  ]

  const quickActions = [
    { icon: <FiUserPlus />, label: 'Add User' },
    { icon: <FiFileText />, label: 'Generate Report' },
    { icon: <FiLock />, label: 'Manage Access' },
    { icon: <FiClock />, label: 'Create Ticket' },
    { icon: <FiCalendar />, label: 'Schedule Event' },
    { icon: <FiSettings />, label: 'System Config' },
  ]

  const activityItems = [
    {
      title: 'New user registered',
      description: 'Sarah Johnson joined the HRM Suite platform',
      timestamp: '2 minutes ago',
      iconColor: 'blue',
    },
    {
      title: 'Access request approved',
      description: 'John Doe granted admin access to Analytics Hub',
      timestamp: '15 minutes ago',
      iconColor: 'green',
    },
    {
      title: 'Report generated',
      description: 'Monthly analytics report created successfully',
      timestamp: '1 hour ago',
      iconColor: 'purple',
    },
    {
      title: 'Ticket resolved',
      description: 'Support ticket #2847 marked as resolved',
      timestamp: '2 hours ago',
      iconColor: 'orange',
    },
    {
      title: 'Database backup completed',
      description: 'Automated backup finished successfully',
      timestamp: '3 hours ago',
      iconColor: 'teal',
    },
  ]

  const systemStatus = [
    { name: 'IAM Admin', status: 'Operational' },
    { name: 'HRM Suite', status: 'Operational' },
    { name: 'CRM Platform', status: 'Operational' },
    { name: 'Ticketing', status: 'Maintenance' },
    { name: 'Analytics Hub', status: 'Operational' },
    { name: 'Marketplace', status: 'Coming Soon' },
  ]

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <DashboardHeader 
          dashboardView={dashboardView} 
          setDashboardView={setDashboardView}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="dashboard-content">
          {dashboardView === 'security-alerts' ? (
            <SecurityAlerts onBack={() => setDashboardView('iam1')} />
          ) : dashboardView === 'iam1' ? (
            <IAMDashboard1 setDashboardView={setDashboardView} />
          ) : (
            <>
              {showBanner && (
                <AnnouncementBanner onDismiss={() => setShowBanner(false)} />
              )}

              <div className="dashboard-alerts-row">
                <AlertInfoCard
                  title="New Feature Available"
                  description="Analytics Hub now includes predictive insights dashboard."
                  type="blue"
                />
                <AlertInfoCard
                  title="Access Request Approved"
                  description="Your request for CRM Platform admin access has been approved."
                  type="green"
                />
              </div>

              <div className="dashboard-stats-grid">
                {statCards.map((stat, index) => (
                  <StatsCard key={index} stat={stat} />
                ))}
              </div>

              <section className="quick-actions-card">
                <h3>Quick Actions</h3>
                <div className="quick-actions-grid">
                  {quickActions.map((action, index) => (
                    <QuickActionCard key={index} {...action} />
                  ))}
                </div>
              </section>

              <div className="dashboard-bottom-grid">
                <section className="recent-activity-card">
                  <div className="activity-header">
                    <h3>Recent Activity</h3>
                    <a href="#" className="view-all-link">
                      View All
                    </a>
                  </div>
                  <div className="activity-list">
                    {activityItems.map((item, index) => (
                      <ActivityItem key={index} {...item} />
                    ))}
                  </div>
                </section>

                <section className="system-status-card">
                  <div className="status-header">
                    <h3>System Status</h3>
                    <span className="status-online-dot" />
                  </div>
                  <div className="status-list">
                    {systemStatus.map((item, index) => (
                      <SystemStatusCard key={index} {...item} />
                    ))}
                  </div>
                </section>
              </div>

              <section className="dashboard-metrics">
                <div className="metrics-card">
                  <h4>Usage Overview</h4>
                  <p className="metrics-placeholder">
                    User activity metrics and platform engagement trends.
                  </p>
                </div>

                <div className="metrics-card">
                  <h4>Performance Metrics</h4>
                  <p className="metrics-placeholder">
                    System performance, response times, and reliability indicators.
                  </p>
                </div>

                <div className="metrics-card">
                  <h4>Team Activity</h4>
                  <p className="metrics-placeholder">
                    Team collaboration activity, project progress, and task completion.
                  </p>
                </div>

                <div className="metrics-card">
                  <h4>Support Overview</h4>
                  <p className="metrics-placeholder">
                    Support ticket volume, resolution times, and customer satisfaction.
                  </p>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Dashboard