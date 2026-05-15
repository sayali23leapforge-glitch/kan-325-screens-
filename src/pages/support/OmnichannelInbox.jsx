import { useState } from 'react'
import SupportSidebar from '../../components/support/SupportSidebar'
import ConversationList from '../../components/omnichannel/ConversationList'
import ChatWindow from '../../components/omnichannel/ChatWindow'
import CustomerPanel from '../../components/omnichannel/CustomerPanel'
import './all-tickets.css'
import './omnichannel-inbox.css'

function OmnichannelInbox() {
  const [activeConversation, setActiveConversation] = useState(null)

  return (
    <div className="omnichannel-layout">
      <SupportSidebar />

      <main className="omnichannel-main">
        <header className="omnichannel-header">
          <div>
            <h1>Omnichannel Inbox</h1>
            <nav className="omnichannel-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Helpdesk</span>
              <span>&gt;</span>
              <span>Omnichannel Inbox</span>
            </nav>
          </div>

          <div className="omnichannel-header-actions">
            <button type="button" className="omnichannel-bell" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M10 17a2 2 0 0 0 4 0" />
              </svg>
              <span>8</span>
            </button>

            <button type="button" className="omnichannel-primary-btn">New Message</button>
          </div>
        </header>

        <section className="omnichannel-content">
          <ConversationList activeConversation={activeConversation} onSelectConversation={setActiveConversation} />
          <ChatWindow activeConversation={activeConversation} />
          <CustomerPanel />
        </section>
      </main>
    </div>
  )
}

export default OmnichannelInbox
