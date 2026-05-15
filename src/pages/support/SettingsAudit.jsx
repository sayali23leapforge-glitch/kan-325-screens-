import { FiBell, FiSave } from 'react-icons/fi'
import Sidebar from '../../support-desk/components/supportDesk/Sidebar'
import SettingsSidebar from '../../components/settings/SettingsSidebar'
import AuditTrailSection from '../../components/settings/AuditTrailSection'
import EventTrackingSection from '../../components/settings/EventTrackingSection'
import RecentActivitySection from '../../components/settings/RecentActivitySection'
import '../../support-desk/support-desk.css'
import './settings.css'
import './settings-audit.css'

function SettingsAudit() {
  return (
    <div className="sd-shell settings-shell">
      <Sidebar />

      <div className="sd-content-shell settings-content-shell">
        <header className="sd-header settings-header">
          <div>
            <h1>Settings</h1>
            <nav className="sd-breadcrumb settings-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Settings</span>
            </nav>
          </div>

          <div className="settings-header-actions">
            <button type="button" className="settings-notification-button" aria-label="Notifications">
              <FiBell size={14} />
              <span>8</span>
            </button>
            <button type="button" className="settings-save-button">
              <FiSave size={13} />
              Save Changes
            </button>
          </div>
        </header>

        <section className="settings-page-content audit-page-content">
          <SettingsSidebar />

          <div className="settings-main-column">
            <AuditTrailSection />
            <EventTrackingSection />
            <RecentActivitySection />
          </div>
        </section>
      </div>
    </div>
  )
}

export default SettingsAudit