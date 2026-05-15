import { useState } from 'react'

const conversationsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    message: 'Hi, I need help with my recent order...',
    time: '2m',
    status: 'Urgent',
    channel: 'messenger',
    unread: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    initials: 'MC',
    message: 'Thank you for the quick response!',
    time: '15m',
    status: 'Resolved',
    channel: 'email',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    initials: 'EW',
    message: 'Can I get a refund for my purchase?',
    time: '1h',
    status: 'Pending',
    channel: 'chat',
    unread: true,
  },
  {
    id: 4,
    name: 'David Martinez',
    initials: 'DM',
    message: 'Is there a discount available?',
    time: '2h',
    status: 'Open',
    channel: 'messenger',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    initials: 'LA',
    message: 'When will my order be delivered?',
    time: '3h',
    status: 'Open',
    channel: 'whatsapp',
  },
  {
    id: 6,
    name: 'James Taylor',
    initials: 'JT',
    message: 'Product inquiry about specifications',
    time: '5h',
    status: 'Resolved',
    channel: 'email',
  },
]

const filters = [
  { label: 'All', count: 48, id: 'all' },
  { label: 'WhatsApp', count: 12, id: 'whatsapp' },
  { label: 'Email', count: 18, id: 'email' },
  { label: 'Messenger', count: 8, id: 'messenger' },
  { label: 'Chat', count: 10, id: 'chat' },
]

function ConversationList({ activeConversation, onSelectConversation }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const renderChannelIcon = (channel) => {
    if (channel === 'whatsapp') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3.25A8.75 8.75 0 0 0 4.4 16.24L3.4 20.6l4.48-1.15A8.75 8.75 0 1 0 12 3.25Zm0 15.5a6.72 6.72 0 0 1-3.42-.94l-.25-.14-2.66.68.7-2.58-.16-.27a6.72 6.72 0 1 1 5.79 3.25Z"
            fill="currentColor"
          />
          <path
            d="M9.9 8.6c.14-.31.28-.32.42-.32h.36c.12 0 .31-.05.48.37.17.42.58 1.46.63 1.56.05.1.09.22.02.36-.07.14-.1.23-.2.35-.1.12-.22.26-.31.35-.1.1-.21.2-.09.43.12.23.52.85 1.12 1.38.77.68 1.42.89 1.65.99.23.1.37.08.51-.05.14-.12.6-.7.76-.94.15-.24.31-.2.52-.12.21.08 1.33.63 1.56.75.23.12.38.19.44.29.06.1.06.59-.13 1.15-.19.56-1.12 1.08-1.53 1.1-.42.02-.84.18-2.84-.6-2.41-.94-3.95-3.36-4.07-3.52-.12-.17-.97-1.29-.97-2.46 0-1.17.61-1.75.82-1.99Z"
            fill="#fff"
          />
        </svg>
      )
    }

    if (channel === 'email') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6.5h16v11H4z" fill="currentColor" />
          <path d="M5.2 7.3 12 12.2l6.8-4.9" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }

    if (channel === 'chat') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5.5 5.75h13A1.75 1.75 0 0 1 20.25 7.5v5A1.75 1.75 0 0 1 18.5 14.25H10l-3.8 3v-3H5.5A1.75 1.75 0 0 1 3.75 12.5v-5A1.75 1.75 0 0 1 5.5 5.75Z"
            fill="currentColor"
          />
        </svg>
      )
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5.5 5.75h13A1.75 1.75 0 0 1 20.25 7.5v5A1.75 1.75 0 0 1 18.5 14.25H10l-3.8 3v-3H5.5A1.75 1.75 0 0 1 3.75 12.5v-5A1.75 1.75 0 0 1 5.5 5.75Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <div className="omnichannel-conversations">
      <div className="conversation-search-section">
        <div className="conversation-search">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="conversation-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      <div className="conversation-list">
        {conversationsData.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            className={`conversation-item ${
              activeConversation?.id === conversation.id || (!activeConversation && conversation.id === 1) ? 'active' : ''
            }`}
            onClick={() => onSelectConversation(conversation)}
          >
            <div className="conversation-avatar">
              <span className="conversation-avatar-initials">{conversation.initials}</span>
              <span className={`conversation-avatar-badge ${conversation.channel}`} aria-hidden="true">
                {renderChannelIcon(conversation.channel)}
              </span>
            </div>

            <div className="conversation-content">
              <div className="conversation-header">
                <p className="conversation-name">{conversation.name}</p>
                <span className="conversation-time">{conversation.time}</span>
              </div>

              <p className="conversation-message">{conversation.message}</p>

              <div className="conversation-meta">
                <span className={`conversation-badge ${conversation.status.toLowerCase()}`}>
                  {conversation.status}
                </span>
                {conversation.unread ? <span className="conversation-unread" aria-hidden="true" /> : null}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ConversationList
