import {
  FiBell,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiEdit3,
  FiMail,
  FiPlus,
  FiSave,
  FiStar,
  FiTrash2,
  FiUser,
  FiZap,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './automation-builder.css'
import { useNavigate } from 'react-router-dom';

const stepItems = [
  { label: 'Create Rule', state: 'done' },
  { label: 'Select Trigger', state: 'done' },
  { label: 'Add Conditions', state: 'active' },
  { label: 'Define Actions', state: 'pending' },
  { label: 'Preview Execution', state: 'pending' },
  { label: 'Activate Rule', state: 'pending' },
]

const templateItems = [
  {
    title: 'High Priority',
    description: 'Priority is "High" or "Urgent"',
    tone: 'red',
    icon: FiStar,
  },
  {
    title: 'VIP Customer',
    description: 'Customer type is "VIP" or "Premium"',
    tone: 'purple',
    icon: FiUser,
  },
  {
    title: 'Billing Issues',
    description: 'Category contains "Billing" or "Payment"',
    tone: 'blue',
    icon: FiZap,
  },
  {
    title: 'Unassigned',
    description: 'Assigned agent is empty',
    tone: 'green',
    icon: FiUser,
  },
  {
    title: 'Weekend Tickets',
    description: 'Created on Saturday or Sunday',
    tone: 'orange',
    icon: FiClock,
  },
  {
    title: 'Email Tickets',
    description: 'Source is "Email"',
    tone: 'yellow',
    icon: FiMail,
  },
]

function AutomationBuilder() {
  const navigate = useNavigate();

  return (
    <div className="automation-builder-layout">
      <SupportSidebar />

      <main className="automation-builder-main">
        <header className="automation-builder-header">
          <div>
            <h1>Automation Builder</h1>
            <nav className="automation-builder-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Automation</span>
              <span>&gt;</span>
              <span>Builder</span>
            </nav>
          </div>

          <div className="automation-builder-header-actions">
            <button type="button" className="automation-builder-bell" aria-label="Notifications">
              <FiBell size={14} />
              <span>5</span>
            </button>

            <button type="button" className="automation-builder-save-btn">
              <FiSave size={13} />
              Save Rule
            </button>
          </div>
        </header>

        <section className="automation-builder-content">
          <section className="automation-builder-stepper" aria-label="Progress steps">
            {stepItems.map((step, index) => (
              <div key={step.label} className={`automation-builder-step ${step.state}`}>
                <span>{step.state === 'done' ? <FiCheck size={10} /> : index + 1}</span>
                <p>{step.label}</p>
              </div>
            ))}
          </section>

          <section className="automation-builder-trigger-card">
            <div>
              <h2>Selected Trigger: Ticket Created</h2>
              <p>This rule will run when a new ticket is submitted</p>
            </div>
            <button type="button">Change</button>
          </section>

          <section className="automation-builder-conditions-card">
            <div className="automation-builder-conditions-head">
              <span>
                <FiEdit3 size={12} />
              </span>
              <div>
                <h3>Add Conditions</h3>
                <p>Define when this automation rule should run</p>
              </div>
            </div>

            <div className="automation-builder-logic-row">
              <strong>Condition Logic</strong>
              <label>
                <input type="radio" name="condition-logic" defaultChecked />
                ALL conditions must be met
              </label>
              <label>
                <input type="radio" name="condition-logic" />
                ANY condition can be met
              </label>
            </div>

            <div className="automation-builder-condition-item">
              <div className="automation-builder-condition-item-head">
                <p>Condition 1</p>
                <button type="button" aria-label="Delete condition">
                  <FiTrash2 size={12} />
                </button>
              </div>

              <div className="automation-builder-condition-input-labels">
                <span>Field</span>
                <span>Operator</span>
                <span>Value</span>
              </div>

              <div className="automation-builder-condition-inputs">
                <button type="button" className="automation-builder-input-button">
                  Select field...
                  <FiChevronDown size={12} />
                </button>
                <button type="button" className="automation-builder-input-button">
                  Select operator...
                  <FiChevronDown size={12} />
                </button>
                <input type="text" placeholder="Enter value..." />
              </div>
            </div>

            <div className="automation-builder-condition-item">
              <div className="automation-builder-condition-item-head">
                <p>Condition 2</p>
                <button type="button" aria-label="Delete condition">
                  <FiTrash2 size={12} />
                </button>
              </div>

              <div className="automation-builder-condition-inputs">
                <button type="button" className="automation-builder-input-button">
                  Customer Type
                  <FiChevronDown size={12} />
                </button>
                <button type="button" className="automation-builder-input-button">
                  is
                  <FiChevronDown size={12} />
                </button>
                <input type="text" defaultValue="VIP" />
              </div>
            </div>

            <button type="button" className="automation-builder-add-condition-btn">
              <FiPlus size={12} />
              Add Another Condition
            </button>
          </section>

          <section className="automation-builder-templates-card">
            <h3>Quick Condition Templates</h3>

            <div className="automation-builder-template-grid">
              {templateItems.map((template) => {
                const Icon = template.icon
                return (
                  <article key={template.title} className="automation-builder-template-item">
                    <div className="automation-builder-template-title-row">
                      <span className={`automation-builder-template-icon ${template.tone}`}>
                        <Icon size={11} />
                      </span>
                      <h4>{template.title}</h4>
                    </div>
                    <p>{template.description}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="automation-builder-preview-card">
            <h3>Condition Preview</h3>
            <div>
              <p>
                IF <span>Ticket Created</span> AND ALL of the following conditions are met:
              </p>
              <p>
                <span>No conditions added yet</span>
              </p>
              <small>Add conditions above to see the complete rule logic</small>
            </div>
          </section>

          <footer className="automation-builder-footer-actions">
            <button type="button" className="automation-builder-back-btn">Back to Select Trigger</button>

            <div>
              <button type="button" className="automation-builder-draft-btn">Save Draft</button>
              <button type="button" className="automation-builder-continue-btn" onClick={() => navigate('/automation-builder/actions')}>
                Continue to Actions
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default AutomationBuilder
