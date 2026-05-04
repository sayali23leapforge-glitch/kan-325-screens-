import { FiTrendingUp, FiZap, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'
import LogStatCard from './LogStatCard'
import ActivityLogsTable from './ActivityLogsTable'
import LogAnalyticsChart from './LogAnalyticsChart'
import './application-logs.css'

function ApplicationLogsPage() {
  // Mock log data
  const mockLogs = [
    {
      timestamp: '2024-01-15 14:32:18',
      level: 'ERROR',
      event: 'Authentication failed',
      user: 'john.doe@example.com',
      ip: '192.168.1.105',
      details: 'Invalid credentials provided'
    },
    {
      timestamp: '2024-01-15 14:28:55',
      level: 'INFO',
      event: 'User logged in',
      user: 'sarah.smith@example.com',
      ip: '192.168.1.45',
      details: 'Successfully authenticated'
    },
    {
      timestamp: '2024-01-15 14:25:12',
      level: 'WARN',
      event: 'Rate limit exceeded',
      user: 'api-client-001',
      ip: '10.0.0.50',
      details: 'API rate limit threshold reached'
    },
    {
      timestamp: '2024-01-15 14:21:33',
      level: 'INFO',
      event: 'API request processed',
      user: 'system',
      ip: '127.0.0.1',
      details: 'OAuth token issued'
    },
    {
      timestamp: '2024-01-15 14:18:09',
      level: 'ERROR',
      event: 'Database connection error',
      user: 'system',
      ip: '127.0.0.1',
      details: 'Connection timeout after 30s'
    },
    {
      timestamp: '2024-01-15 14:15:44',
      level: 'WARN',
      event: 'Certificate expiring soon',
      user: 'admin@example.com',
      ip: '192.168.1.10',
      details: 'SSL certificate expires in 30 days'
    },
    {
      timestamp: '2024-01-15 14:12:21',
      level: 'INFO',
      event: 'Configuration updated',
      user: 'admin@example.com',
      ip: '192.168.1.10',
      details: 'OAuth scope settings modified'
    },
    {
      timestamp: '2024-01-15 14:08:55',
      level: 'DEBUG',
      event: 'Cache invalidated',
      user: 'system',
      ip: '127.0.0.1',
      details: 'Redis cache cleared'
    }
  ]

  // Mock chart data
  const chartData = [
    { time: '00:00', info: 850, warning: 120, error: 45 },
    { time: '02:00', info: 920, warning: 140, error: 52 },
    { time: '04:00', info: 780, warning: 100, error: 38 },
    { time: '06:00', info: 1050, warning: 180, error: 68 },
    { time: '08:00', info: 1450, warning: 250, error: 95 },
    { time: '10:00', info: 1850, warning: 320, error: 125 },
    { time: '12:00', info: 2150, warning: 380, error: 152 },
    { time: '14:00', info: 1920, warning: 350, error: 134 },
    { time: '16:00', info: 1680, warning: 290, error: 110 },
    { time: '18:00', info: 1240, warning: 210, error: 78 },
    { time: '20:00', info: 980, warning: 150, error: 55 },
    { time: '22:00', info: 750, warning: 110, error: 40 }
  ]

  return (
    <div className="application-logs-page">
      {/* Stats Row */}
      <div className="logs-stats-grid">
        <LogStatCard
          icon={<FiZap size={24} />}
          label="Total Events"
          value="24,567"
          lastText="Last 24 hours"
          trend="+12.5%"
          trendType="positive"
          bgColor="#DBEAFE"
        />
        <LogStatCard
          icon={<FiAlertTriangle size={24} />}
          label="Errors"
          value="127"
          lastText="Last 24 hours"
          trend="-3.2%"
          trendType="negative"
          bgColor="#FEE2E2"
        />
        <LogStatCard
          icon={<FiAlertTriangle size={24} />}
          label="Warnings"
          value="342"
          lastText="Last 24 hours"
          trend="+5.8%"
          trendType="positive"
          bgColor="#FEF3C7"
        />
        <LogStatCard
          icon={<FiCheckCircle size={24} />}
          label="Successful Events"
          value="24,098"
          lastText="Last 24 hours"
          trend="+14.1%"
          trendType="positive"
          bgColor="#DCFCE7"
        />
      </div>

      {/* Activity Logs */}
      <ActivityLogsTable logs={mockLogs} />

      {/* Analytics Chart */}
      <LogAnalyticsChart data={chartData} />
    </div>
  )
}

export default ApplicationLogsPage
