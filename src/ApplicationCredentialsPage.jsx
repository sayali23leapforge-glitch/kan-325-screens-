import ClientCredentialsCard from './ClientCredentialsCard'
import ApiKeysCard from './ApiKeysCard'
import JwtConfigurationCard from './JwtConfigurationCard'
import QuickActionsCard from './QuickActionsCard'
import SecurityTipsCard from './SecurityTipsCard'
import './application-credentials.css'

function ApplicationCredentialsPage() {
  return (
    <div className="credentials-content">
      <div className="credentials-grid">
        {/* Left Column */}
        <div className="credentials-left-column">
          <ClientCredentialsCard />
          <ApiKeysCard />
          <JwtConfigurationCard />
        </div>

        {/* Right Column */}
        <div className="credentials-right-column">
          <QuickActionsCard />
          <SecurityTipsCard />
        </div>
      </div>
    </div>
  )
}

export default ApplicationCredentialsPage
