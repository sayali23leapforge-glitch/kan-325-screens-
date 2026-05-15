import SupportSidebar from '../../components/support/SupportSidebar'
import QueueStats from '../../components/support/QueueStats'
import QueueFilters from '../../components/support/QueueFilters'
import QueueCard from '../../components/support/QueueCard'
import './all-tickets.css'
import './support-queues.css'

const avatarPool = [
  'https://i.pravatar.cc/44?img=12',
  'https://i.pravatar.cc/44?img=21',
  'https://i.pravatar.cc/44?img=47',
  'https://i.pravatar.cc/44?img=39',
]

const queueItems = [
  {
    tone: 'Technical',
    title: 'Technical Support',
    subtitle: 'Hardware & software issues',
    open: '23',
    pending: '8',
    avgTime: '1.2h',
    agents: avatarPool,
    agentCount: '4',
  },
  {
    tone: 'Billing',
    title: 'Billing Support',
    subtitle: 'Payment & account issues',
    open: '15',
    pending: '5',
    avgTime: '2.1h',
    agents: [avatarPool[1], avatarPool[2], avatarPool[3]],
    agentCount: '3',
  },
  {
    tone: 'Sales',
    title: 'Sales Support',
    subtitle: 'Lead and pre-sales questions',
    open: '12',
    pending: '3',
    avgTime: '45m',
    agents: [avatarPool[0], avatarPool[3]],
    agentCount: '2',
  },
  {
    tone: 'General',
    title: 'General Inquiries',
    subtitle: 'General questions and help',
    open: '31',
    pending: '12',
    avgTime: '3.2h',
    agents: [avatarPool[2], avatarPool[3]],
    agentCount: '3',
  },
  {
    tone: 'Urgent',
    title: 'Urgent Issues',
    subtitle: 'Critical & high priority',
    open: '7',
    pending: '2',
    avgTime: '30m',
    agents: [avatarPool[0], avatarPool[1], avatarPool[2], avatarPool[3]],
    agentCount: '5',
  },
  {
    tone: 'Security',
    title: 'Security Issues',
    subtitle: 'Security concerns and incidents',
    open: '9',
    pending: '4',
    avgTime: '1.8h',
    agents: [avatarPool[1], avatarPool[0]],
    agentCount: '2',
  },
  {
    tone: 'Onboarding',
    title: 'Onboarding',
    subtitle: 'New customer setup',
    open: '18',
    pending: '6',
    avgTime: '2.5h',
    agents: [avatarPool[2], avatarPool[1]],
    agentCount: '2',
  },
  {
    tone: 'Archived',
    title: 'Archived Queue',
    subtitle: 'Legacy support queues',
    open: '0',
    pending: '0',
    avgTime: '-',
    agents: ['https://i.pravatar.cc/44?img=1'],
    agentCount: '0',
  },
]

function SupportQueues() {
  return (
    <div className="support-queues-layout">
      <SupportSidebar />

      <main className="support-queues-main">
        <header className="support-queues-header">
          <div>
            <h1>Support Queues</h1>
            <nav className="support-queues-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Queues</span>
            </nav>
          </div>

          <div className="support-queues-header-actions">
            <button type="button" className="support-queues-bell" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M10 17a2 2 0 0 0 4 0" />
              </svg>
              <span>5</span>
            </button>

            <button type="button" className="support-queues-primary-btn">
              + New Queue
            </button>
          </div>
        </header>

        <section className="support-queues-content">
          <QueueStats />
          <QueueFilters />

          <section className="support-queues-grid" aria-label="Queue cards">
            {queueItems.map((queue) => (
              <QueueCard key={queue.title} queue={queue} />
            ))}
          </section>
        </section>
      </main>
    </div>
  )
}

export default SupportQueues
