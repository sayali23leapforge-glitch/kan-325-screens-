import SupportSidebar from '../../components/support/SupportSidebar'
import AutomationStats from '../../components/automation/AutomationStats'
import AutomationList from '../../components/automation/AutomationList'
import QuickActions from '../../components/automation/QuickActions'
import RuleTemplates from '../../components/automation/RuleTemplates'
import RecentActivity from '../../components/automation/RecentActivity'
import './all-tickets.css'
import './automation.css'

function Automation() {
  return (
    <div className="automation-layout">
      <SupportSidebar />

      <main className="automation-main">
        <header className="automation-header">
          <div>
            <h1>Automation</h1>
            <nav className="automation-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Automation</span>
            </nav>
          </div>

          <div className="automation-header-actions">
            <button type="button" className="automation-bell" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M10 17a2 2 0 0 0 4 0" />
              </svg>
              <span>5</span>
            </button>

            <button type="button" className="automation-primary-btn">+ New Rule</button>
          </div>
        </header>

        <section className="automation-content">
          <AutomationStats />

          <div className="automation-main-grid">
            <AutomationList />

            <div className="automation-sidebar">
              <QuickActions />
              <RuleTemplates />
              <RecentActivity />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Automation
