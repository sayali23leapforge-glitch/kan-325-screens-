import { FiBell } from 'react-icons/fi'
import HRMSidebar from '../HRMSidebar'
import AcceptanceOverview from './AcceptanceOverview'
import AcceptedOffers from './AcceptedOffers'
import OnboardingProgress from './OnboardingProgress'
import AcceptanceAnalytics from './AcceptanceAnalytics'
import RecentActivity from './RecentActivity'
import './acceptance-page.css'

function AcceptancePage() {
  return (
    <div className="acc-layout">
      <HRMSidebar />

      <main className="acc-main">
        <header className="acc-header">
          <div className="acc-header-left">
            <h1 className="acc-title">Offer Acceptance</h1>
            <nav className="acc-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Acceptance</span>
            </nav>
          </div>

          <div className="acc-header-right">
            <button type="button" className="acc-bell-btn" aria-label="Notifications">
              <FiBell size={14} />
              <span className="acc-bell-badge">3</span>
            </button>
            <div className="acc-status-pill">
              <span className="acc-status-dot" />
              Active Session
            </div>
          </div>
        </header>

        <section className="acc-content-wrap">
          <AcceptanceOverview />
          <AcceptedOffers />
          <OnboardingProgress />
          <AcceptanceAnalytics />
          <RecentActivity />
        </section>
      </main>
    </div>
  )
}

export default AcceptancePage
