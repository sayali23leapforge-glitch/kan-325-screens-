import { FiBell, FiCalendar, FiCheckCircle, FiClock, FiMail, FiPaperclip, FiPhone, FiPlus, FiSearch, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './create-ticket.css'

function CreateTicket() {
  const navigate = useNavigate()

  return (
    <div className="support-tickets-layout">
      <SupportSidebar />

      <main className="create-ticket-main">
        <header className="create-ticket-header">
          <div>
            <h1>Create New Ticket</h1>
            <nav className="create-ticket-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Tickets</span>
              <span>&gt;</span>
              <span>Create Ticket</span>
            </nav>
          </div>

          <div className="create-ticket-actions">
            <button type="button" className="create-ticket-btn-outline">Save Draft</button>
            <button
              type="button"
              className="create-ticket-btn-primary"
              onClick={() => navigate('/support-desk/tickets/success')}
            >
              Create Ticket
            </button>
          </div>
        </header>

        <section className="create-ticket-content">
          <div className="create-ticket-left">
            <article className="create-ticket-card">
              <h2>Ticket Information</h2>

              <div className="create-ticket-grid">
                <label className="create-ticket-field">
                  <span>Customer</span>
                  <div className="create-ticket-search-wrap">
                    <input type="text" placeholder="Search customer..." />
                    <FiSearch size={12} />
                  </div>
                </label>

                <label className="create-ticket-field">
                  <span>Priority</span>
                  <select defaultValue="Low">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </label>

                <label className="create-ticket-field">
                  <span>Category</span>
                  <select defaultValue="Technical Support">
                    <option>Technical Support</option>
                    <option>Billing</option>
                    <option>General</option>
                  </select>
                </label>

                <label className="create-ticket-field">
                  <span>Assign To</span>
                  <select defaultValue="Auto Assign">
                    <option>Auto Assign</option>
                    <option>Alex Morgan</option>
                    <option>Sarah Wilson</option>
                  </select>
                </label>

                <label className="create-ticket-field create-ticket-full">
                  <span>Subject</span>
                  <input type="text" placeholder="Brief description of the issue" />
                </label>

                <label className="create-ticket-field create-ticket-full">
                  <span>Description</span>
                  <textarea placeholder="Detailed description of the issue..." rows={5} />
                </label>

                <label className="create-ticket-field create-ticket-full">
                  <span>Tags</span>
                  <input type="text" placeholder="Add tags separated by commas" />
                </label>
              </div>
            </article>

            <article className="create-ticket-card">
              <h2>Attachments</h2>

              <div className="create-ticket-dropzone">
                <FiPaperclip size={20} />
                <p>
                  Drag and drop files here, or <button type="button">browse</button>
                </p>
                <span>Support for images, documents, and videos up to 10MB</span>
              </div>

              <div className="create-ticket-file-item">
                <div>
                  <strong>error-screenshot.pdf</strong>
                  <span>2.3 MB</span>
                </div>
                <button type="button" aria-label="Remove file">×</button>
              </div>
            </article>
          </div>

          <aside className="create-ticket-right">
            <article className="create-ticket-card">
              <h2>Ticket Preview</h2>
              <div className="create-ticket-preview-list">
                <div>
                  <span>Ticket ID</span>
                  <strong>#TK-2024-001</strong>
                </div>
                <div>
                  <span>Status</span>
                  <em>New</em>
                </div>
                <div>
                  <span>Created</span>
                  <strong>Today, 2:30 PM</strong>
                </div>
                <div>
                  <span>Estimated Resolution</span>
                  <strong>2 hours</strong>
                </div>
              </div>
            </article>

            <article className="create-ticket-card">
              <h2>Customer Information</h2>
              <div className="create-ticket-customer-head">
                <img src="https://i.pravatar.cc/40?img=15" alt="John Smith" />
                <div>
                  <strong>John Smith</strong>
                  <span>Premium Customer</span>
                </div>
              </div>

              <div className="create-ticket-customer-meta">
                <p><FiMail size={11} /> john.smith@example.com</p>
                <p><FiPhone size={11} /> +1 (555) 123-4597</p>
                <p><FiUser size={11} /> Acme Corporation</p>
                <p><FiCalendar size={11} /> Customer since 2022</p>
              </div>

              <div className="create-ticket-customer-stats">
                <div>
                  <span>Previous Tickets</span>
                  <strong>12</strong>
                </div>
                <div>
                  <span>Satisfaction Score</span>
                  <strong>4.8</strong>
                </div>
              </div>
            </article>

            <article className="create-ticket-card">
              <h2>Quick Actions</h2>
              <ul className="create-ticket-quick-list">
                <li><FiCheckCircle size={11} /> Use Template</li>
                <li><FiPlus size={11} /> Duplicate Ticket</li>
                <li><FiClock size={11} /> Set Reminder</li>
                <li><FiPaperclip size={11} /> Link to Existing</li>
              </ul>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default CreateTicket