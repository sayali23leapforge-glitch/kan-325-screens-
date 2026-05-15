import {
  FiAlertCircle,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiEdit,
  FiLink,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiShare2,
  FiUser,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './ticket-created-success.css'

const nextSteps = [
  {
    title: 'Automatic Assignment',
    desc: 'Ticket is assigned to the best available support specialist.',
    active: true,
  },
  {
    title: 'Initial Response',
    desc: 'Customer receives acknowledgement and first response shortly.',
    active: true,
  },
  {
    title: 'Investigation & Resolution',
    desc: 'Assigned team diagnoses and resolves the issue with updates.',
    active: false,
  },
  {
    title: 'Closure & Feedback',
    desc: 'Ticket closes after confirmation and satisfaction feedback.',
    active: false,
  },
]

function TicketCreatedSuccess() {
  const navigate = useNavigate()

  return (
    <div className="support-tickets-layout">
      <SupportSidebar />

      <main className="ticket-success-main">
        <header className="ticket-success-header">
          <div>
            <h1>Ticket Created Successfully</h1>
            <nav className="ticket-success-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Tickets</span>
              <span>&gt;</span>
              <span>Ticket Created</span>
            </nav>
          </div>

          <div className="ticket-success-actions">
            <button
              type="button"
              className="ticket-success-btn-outline"
              onClick={() => navigate('/support-desk/tickets')}
            >
              View All Tickets
            </button>
            <button
              type="button"
              className="ticket-success-btn-primary"
              onClick={() => navigate('/support-desk/tickets/create')}
            >
              Create Another
            </button>
          </div>
        </header>

        <section className="ticket-success-content">
          <article className="ticket-success-hero">
            <span className="ticket-success-check">
              <FiCheck size={18} />
            </span>
            <h2>Ticket Created Successfully!</h2>
            <p>Your support ticket has been created and assigned to our team.</p>
            <div className="ticket-success-id-box">
              <span>Ticket ID</span>
              <strong>#TK-2024-001</strong>
              <button type="button" aria-label="Copy ticket id">
                <FiCopy size={11} />
              </button>
            </div>
          </article>

          <div className="ticket-success-grid">
            <div className="ticket-success-left">
              <article className="ticket-success-card">
                <h3>Ticket Details</h3>
                <div className="ticket-success-details-grid">
                  <div>
                    <span>Customer</span>
                    <p className="with-avatar">
                      <img src="https://i.pravatar.cc/24?img=15" alt="John Smith" />
                      John Smith
                    </p>
                  </div>
                  <div>
                    <span>Priority</span>
                    <p><em className="pill red">High</em></p>
                  </div>
                  <div>
                    <span>Category</span>
                    <p>Technical Support</p>
                  </div>
                  <div>
                    <span>Assigned To</span>
                    <p className="with-avatar">
                      <img src="https://i.pravatar.cc/24?img=12" alt="Alex Morgan" />
                      Alex Morgan
                    </p>
                  </div>
                  <div className="full">
                    <span>Subject</span>
                    <p>Unable to access account after password reset</p>
                  </div>
                  <div className="full">
                    <span>Description</span>
                    <p>
                      Customer is experiencing login issues after using password reset flow. The new password appears
                      to be accepted but login still fails with authentication error.
                    </p>
                  </div>
                  <div className="full">
                    <span>Tags</span>
                    <div className="ticket-success-tags">
                      <em className="pill blue">login issue</em>
                      <em className="pill blue">password reset</em>
                      <em className="pill blue">urgent</em>
                    </div>
                  </div>
                </div>
              </article>

              <article className="ticket-success-card">
                <h3>What Happens Next?</h3>
                <div className="ticket-success-steps">
                  {nextSteps.map((step) => (
                    <div key={step.title} className="ticket-success-step-row">
                      <span className={`ticket-success-step-dot ${step.active ? 'active' : ''}`}>
                        {step.active ? <FiCheck size={10} /> : null}
                      </span>
                      <div>
                        <strong>{step.title}</strong>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="ticket-success-right">
              <article className="ticket-success-card">
                <h3>Current Status</h3>
                <div className="ticket-success-status-list">
                  <div>
                    <span>Status</span>
                    <em className="pill blue">Open</em>
                  </div>
                  <div>
                    <span>Created</span>
                    <p>Today, 2:30 PM</p>
                  </div>
                  <div>
                    <span>Last Updated</span>
                    <p>Just now</p>
                  </div>
                  <div>
                    <span>Expected Resolution</span>
                    <p>2 hours</p>
                  </div>
                </div>
              </article>

              <article className="ticket-success-card">
                <h3>Customer Information</h3>
                <div className="ticket-success-customer-head">
                  <img src="https://i.pravatar.cc/40?img=15" alt="John Smith" />
                  <strong>John Smith</strong>
                </div>
                <div className="ticket-success-customer-list">
                  <p><FiMail size={11} /> john.smith@example.com</p>
                  <p><FiPhone size={11} /> +1 (555) 123-4597</p>
                  <p><FiUser size={11} /> Acme Corporation</p>
                </div>
              </article>

              <article className="ticket-success-card">
                <h3>Ticket Actions</h3>
                <div className="ticket-success-action-list">
                  <button type="button"><FiLink size={11} /> View Ticket</button>
                  <button type="button"><FiEdit size={11} /> Edit Ticket</button>
                  <button type="button"><FiMessageCircle size={11} /> Add Comment</button>
                  <button type="button"><FiShare2 size={11} /> Share Ticket</button>
                </div>
              </article>

              <article className="ticket-success-card">
                <h3>Notifications</h3>
                <div className="ticket-success-toggle-list">
                  <div>
                    <span>Email updates</span>
                    <button type="button" className="ticket-toggle on" aria-pressed="true"><i /></button>
                  </div>
                  <div>
                    <span>SMS notifications</span>
                    <button type="button" className="ticket-toggle off" aria-pressed="false"><i /></button>
                  </div>
                  <div>
                    <span>Push notifications</span>
                    <button type="button" className="ticket-toggle on" aria-pressed="true"><i /></button>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TicketCreatedSuccess