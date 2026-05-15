import { FiBell, FiClock, FiDownload, FiMail, FiPaperclip, FiRefreshCw } from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './unified-inbox.css'

function UnifiedInbox() {
  return (
    <div className="receive-email-root">
      <div className="main-container">
        <SupportSidebar />

        <main className="receive-email-main">
          <header className="receive-email-header">
            <div className="receive-email-head-left">
              <h1>Receive Email</h1>
              <p>Email processing and inbox management</p>
            </div>

            <div className="receive-email-head-right">
              <button type="button" className="notify-button" aria-label="Notifications">
                <FiBell size={16} />
                <span>2</span>
              </button>
              <button type="button" className="sync-button">
                <FiRefreshCw size={14} />
                Sync Emails
              </button>
            </div>
          </header>

          <section className="receive-shell card">
            <div className="status-banner success-main">
              <FiMail size={14} />
              <div>
                <strong>Email Received Successfully</strong>
                <p>New message processed and added to inbox</p>
              </div>
              <span className="time-stamp">Just now</span>
            </div>

            <div className="status-banner success-sub">
              <FiClock size={14} />
              <div>
                <strong>Processing Complete</strong>
                <p>Email has been successfully received, classified, and routed to the appropriate team</p>
              </div>
            </div>

            <div className="content">
              <div className="left">
                <article className="card info-card">
                  <h2>Email Information</h2>
                  <div className="sender-row">
                    <img src="https://i.pravatar.cc/50?img=47" alt="Sarah Johnson" />
                    <div>
                      <strong>Sarah Johnson</strong>
                      <p>sarah.johnson@email.com</p>
                    </div>
                  </div>

                  <dl>
                    <div>
                      <dt>Subject:</dt>
                      <dd>Urgent: Recent Exchange Request - Order #12345</dd>
                    </div>
                    <div>
                      <dt>Received:</dt>
                      <dd>2 min ago</dd>
                    </div>
                    <div>
                      <dt>Size:</dt>
                      <dd>245 KB</dd>
                    </div>
                    <div>
                      <dt>Priority:</dt>
                      <dd className="danger-text">High</dd>
                    </div>
                    <div>
                      <dt>Source:</dt>
                      <dd className="link-text">Gmail Inbox</dd>
                    </div>
                  </dl>
                </article>

                <article className="card ai-card">
                  <h2>AI Analysis</h2>
                  <dl>
                    <div><dt>Sentiment:</dt><dd className="warn-text">Frustrated</dd></div>
                    <div><dt>Language:</dt><dd>English</dd></div>
                    <div><dt>Urgency:</dt><dd className="danger-text">High</dd></div>
                    <div><dt>Auto-Assign:</dt><dd>Order Support</dd></div>
                    <div><dt>Confidence:</dt><dd className="ok-text">94%</dd></div>
                  </dl>
                </article>

                <article className="card processing-card">
                  <h2>Processing Details</h2>
                  <ul>
                    <li><span className="dot ok" />Spam filter passed</li>
                    <li><span className="dot ok" />Attachments scanned</li>
                    <li><span className="dot ok" />Customer profile matched</li>
                    <li><span className="dot ok" />Routing score calculated</li>
                  </ul>
                </article>
              </div>

              <div className="right">
                <article className="card message-card">
                  <h2>Message Content</h2>
                  <div className="meta-lines">
                    <p><span>From:</span> Sarah Johnson &lt;sarah.johnson@email.com&gt;</p>
                    <p><span>To:</span> support@helpdesk.com</p>
                    <p><span>Subject:</span> Urgent: Recent Exchange Request - Order #12345</p>
                  </div>

                  <div className="body-copy">
                    <p>Hi Support Team,</p>
                    <p>
                      I hope this message finds you well. I am writing regarding my recent order #12345 that I received earlier today.
                      Unfortunately, there seems to have been a mix-up with my order. I specifically ordered the blue wireless
                      headphones (SKU: WH-BLU-001), but received the black version instead (SKU: WH-BLK-001).
                    </p>
                    <p>
                      I would appreciate the assistance in getting this issue resolved for me as soon as possible. Could you please
                      help me arrange an exchange for the correct item?
                    </p>
                  </div>

                  <div className="attachments">
                    <h3>Attachments</h3>
                    <div className="attachment-item">
                      <FiPaperclip size={13} />
                      <div>
                        <strong>order_receipt_12345.pdf</strong>
                        <p>245 KB • Scanned</p>
                      </div>
                      <FiDownload size={13} />
                    </div>
                    <div className="attachment-item">
                      <FiPaperclip size={13} />
                      <div>
                        <strong>received_product.jpg</strong>
                        <p>1.2 MB • Scanned</p>
                      </div>
                      <FiDownload size={13} />
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="actions-row">
              <button type="button" className="action action-reply">Reply</button>
              <button type="button" className="action action-read">Mark as Read</button>
              <button type="button" className="action action-assign">Assign</button>
              <button type="button" className="action action-tags">Tags</button>
              <button type="button" className="action action-archive">Archive</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default UnifiedInbox
