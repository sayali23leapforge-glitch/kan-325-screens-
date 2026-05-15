import { FiBell, FiSave } from 'react-icons/fi'
import Sidebar from '../../support-desk/components/supportDesk/Sidebar'
import SettingsSidebar from '../../components/settings/SettingsSidebar'
import CompanyInfoCard from '../../components/settings/CompanyInfoCard'
import BusinessHoursCard from '../../components/settings/BusinessHoursCard'
import AppearanceCard from '../../components/settings/AppearanceCard'
import LocalizationCard from '../../components/settings/LocalizationCard'
import '../../support-desk/support-desk.css'
import './settings.css'

function Settings() {
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

        <section className="settings-page-content">
          <SettingsSidebar />

          <div className="settings-main-column">
            <CompanyInfoCard />
            <BusinessHoursCard />
            <AppearanceCard />
            <LocalizationCard />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Settings