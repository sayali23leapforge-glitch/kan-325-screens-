import { useState } from 'react'

const messagesData = [
  {
    id: 1,
    type: 'received',
    text: 'Hi, I have a question about my recent order. I placed an order yesterday and I have not received any confirmation email yet.',
    time: '10:45 AM',
  },
  {
    id: 2,
    type: 'sent',
    text: 'Hello! Thank you for reaching out. Can you please provide your order number or the email address associated with your account? I\'ll help you track down your order.',
  },
  {
    id: 3,
    type: 'received',
    text: 'Sure! My order number is ORD-43678. I ordered a laptop and some accessories.',
  },
  {
    id: 4,
    type: 'sent',
    text: 'Thank you! I can see your order here. Your order is currently being processed and should ship within 1-2 business days. Once it ships, you\'ll receive a tracking number via email.',
  },
]

function ChatWindow({ activeConversation }) {
  const [messageInput, setMessageInput] = useState('')

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('')
    }
  }

  return (
    <div className="omnichannel-chat">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-user-status">
            <p className="chat-user-name">{activeConversation?.name || 'Sarah Johnson'}</p>
            <p className="chat-user-status-text">
              <span className="status-dot" />
              Online
            </p>
          </div>
          <p className="chat-customer-id">Customer ID</p>
        </div>

        <div className="chat-header-actions">
          <button type="button" className="chat-action-btn" aria-label="Call">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
          <button type="button" className="chat-action-btn" aria-label="Video">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </button>
          <button type="button" className="chat-action-btn" aria-label="More">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="chat-body">
        {messagesData.map((message, index) => (
          <div key={message.id}>
            {index === 0 && <div className="message-time">Today, 10:45 AM</div>}
            <div className={`message ${message.type}`}>
              <div className="message-bubble">{message.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-section">
        <div className="chat-input-actions">
          <button type="button" className="input-action-btn" aria-label="Attachment">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 0 19.8 4.3M22 12.5a10 10 0 0 0-19.8-4.2" />
            </svg>
          </button>
          <button type="button" className="input-action-btn" aria-label="Emoji">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </button>
        </div>

        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            type="button"
            className="chat-send-btn"
            onClick={handleSendMessage}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16865249 C3.34915502,0.9115551 2.40734225,1.0689339 1.77946707,1.4788733 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5953432 3.19218622,10.7524405 3.50612381,10.7524405 L16.6915026,11.5379274 C16.6915026,11.5379274 17.1624089,11.5379274 17.1624089,11.0666352 L17.1624089,12.0092196 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
