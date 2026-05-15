import { FiBell } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import OfferOverview from './OfferOverview'
import PendingOffersList from './PendingOffersList'
import OfferTemplates from './OfferTemplates'
import RecentActivity from './RecentActivity'
import './offer-page.css'

function OfferPage() {
  return (
    <div className="offer-layout">
      <HRMSidebar />

      <main className="offer-main">
        <header className="offer-header">
          <div className="offer-header-left">
            <h1 className="offer-title">Offer Management</h1>
            <nav className="offer-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Offers</span>
            </nav>
          </div>

          <div className="offer-header-right">
            <button type="button" className="offer-bell-btn" aria-label="Notifications">
              <FiBell size={14} />
              <span className="offer-bell-badge">3</span>
            </button>
            <div className="offer-status-pill">
              <span className="offer-status-dot" />
              Active Session
            </div>
          </div>
        </header>

        <section className="offer-content-wrap">
          <OfferOverview />
          <PendingOffersList />
          <OfferTemplates />
          <RecentActivity />
        </section>
      </main>
    </div>
  )
}

export default OfferPage
