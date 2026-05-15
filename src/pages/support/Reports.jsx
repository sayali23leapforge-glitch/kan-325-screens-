import { FiBell, FiDownload, FiFilter, FiMail, FiMessageCircle, FiPhone, FiPieChart, FiRefreshCw, FiTrendingUp, FiUsers, FiCheckCircle, FiClock } from 'react-icons/fi'
import Sidebar from '../../support-desk/components/supportDesk/Sidebar'
import StatsCard from '../../components/reports/StatsCard'
import FiltersBar from '../../components/reports/FiltersBar'
import TicketTrendsChart from '../../components/reports/TicketTrendsChart'
import ChannelPieChart from '../../components/reports/ChannelPieChart'
import AgentsList from '../../components/reports/AgentsList'
import TicketsTable from '../../components/reports/TicketsTable'
import '../../support-desk/support-desk.css'
import './reports.css'

const stats = [
  {
    title: 'Total Tickets',
    value: '1,247',
    badge: '+12%',
    badgeTone: 'green',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    icon: FiMessageCircle,
  },
  {
    title: 'Resolved Tickets',
    value: '1,089',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    icon: FiCheckCircle,
  },
  {
    title: 'Avg Response Time',
    value: '2.4h',
    badge: '-5%',
    badgeTone: 'red',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    icon: FiClock,
  },
  {
    title: 'Satisfaction Score',
    value: '4.8',
    iconBg: '#FEF9C3',
    iconColor: '#CA8A04',
    icon: FiUsers,
  },
]

function Reports() {
  return (
    <div className="sd-shell reports-shell">
      <Sidebar />

      <div className="sd-content-shell reports-content-shell">
        <header className="sd-header reports-header">
          <div>
            <h1>Reports & Analytics</h1>
            <div className="sd-breadcrumb reports-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="reports-header-actions">
            <button type="button" className="reports-notification-button" aria-label="Notifications">
              <FiBell size={14} />
              <span>8</span>
            </button>
            <button type="button" className="reports-export-button">
              <FiDownload size={14} />
              Export Report
            </button>
          </div>
        </header>

        <section className="reports-page-content">
          <FiltersBar />

          <section className="reports-stats-grid">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </section>

          <section className="reports-top-grid">
            <TicketTrendsChart />
            <ChannelPieChart />
          </section>

          <section className="reports-lower-grid">
            <article className="reports-panel reports-bar-panel">
              <div className="reports-panel-header">
                <h2>Avg Response Time</h2>
                <span className="reports-mini-tab active">Week</span>
              </div>
              <div className="reports-bar-chart">
                {[38, 52, 46, 58, 41, 48, 55].map((height, index) => (
                  <span key={`response-${index}`} style={{ height: `${height}%`, backgroundColor: '#8B5CF6' }} />
                ))}
              </div>
            </article>

            <article className="reports-panel reports-bar-panel">
              <div className="reports-panel-header">
                <h2>Resolution Rate</h2>
                <span className="reports-mini-tab">Week</span>
              </div>
              <div className="reports-bar-chart green">
                {[44, 50, 57, 54, 61, 58, 64].map((height, index) => (
                  <span key={`resolution-${index}`} style={{ height: `${height}%`, backgroundColor: '#10B981' }} />
                ))}
              </div>
            </article>

            <AgentsList />
          </section>

          <TicketsTable />
        </section>
      </div>
    </div>
  )
}

export default Reports