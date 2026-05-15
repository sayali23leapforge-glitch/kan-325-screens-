import Sidebar from './components/supportDesk/Sidebar'
import Header from './components/supportDesk/Header'
import StatCard from './components/supportDesk/StatCard'
import TicketTrends from './components/supportDesk/TicketTrends'
import PriorityChart from './components/supportDesk/PriorityChart'
import RecentTickets from './components/supportDesk/RecentTickets'
import TopAgents from './components/supportDesk/TopAgents'
import './support-desk.css'

const statItems = [
  { title: 'Total Tickets', value: '156', tone: 'blue' },
  { title: 'Open Tickets', value: '45', tone: 'yellow' },
  { title: 'Resolved Today', value: '98', tone: 'green' },
  { title: 'Satisfaction Rate', value: '96%', tone: 'purple' },
]

function SupportDeskDashboard() {
  return (
    <div className="sd-shell">
      <Sidebar />

      <div className="sd-content-shell">
        <Header />

        <section className="sd-page-content">
          <div className="sd-stats-grid">
            {statItems.map((item) => (
              <StatCard key={item.title} title={item.title} value={item.value} tone={item.tone} />
            ))}
          </div>

          <div className="sd-chart-grid">
            <TicketTrends />
            <PriorityChart />
          </div>

          <div className="sd-table-grid">
            <RecentTickets />
            <TopAgents />
          </div>
        </section>
      </div>
    </div>
  )
}

export default SupportDeskDashboard
