import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiCheckSquare, FiSearch, FiCalendar, FiChevronRight } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './assign-checklist.css'

const employees = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    department: 'Engineering',
    startDate: 'January 15',
    status: 'New Hire',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    role: 'Product Manager',
    department: 'Product',
    startDate: 'January 22',
    status: 'Pending',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'UX Designer',
    department: 'Design',
    startDate: 'January 18',
    status: 'In Progress',
    avatar: 'https://placehold.co/36x36',
  },
]

const checklistGroups = [
  {
    title: 'Week 1 (7 tasks)',
    color: 'blue',
    items: [
      { text: 'Complete HR documentation', day: 'Day 1' },
      { text: 'IT setup and equipment allocation', day: 'Day 1' },
      { text: 'Team introduction meeting', day: 'Day 2' },
      { text: 'Engineering tools and access setup', day: 'Day 3' },
    ],
  },
  {
    title: 'Week 2 (5 tasks)',
    color: 'green',
    items: [
      { text: 'Complete security training', day: 'Day 8' },
      { text: 'First code review session', day: 'Day 10' },
    ],
  },
  {
    title: 'Month 1 (3 tasks)',
    color: 'purple',
    items: [
      { text: '30-day check-in with manager', day: 'Day 30' },
      { text: 'Complete onboarding feedback survey', day: 'Day 30' },
    ],
  },
]

function AssignChecklist({ onSwitchModule }) {
  const navigate = useNavigate()
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const selectedEmployee = useMemo(
    () => employees.find((item) => item.id === selectedEmployeeId) || null,
    [selectedEmployeeId],
  )

  return (
    <div className="ac-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="ac-main">
        <div className="ac-content">
          <header className="ac-header">
            <div>
              <h1>Assign Checklist</h1>
              <nav>
                <a href="/">Home</a>
                <FiChevronRight size={11} />
                <a href="/hrm/onboarding-2">Onboarding</a>
                <FiChevronRight size={11} />
                <span>Assign Checklist</span>
              </nav>
            </div>

            <button className="ac-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>2</span>
            </button>
          </header>

          <section className="ac-top-card">
            <span className="ac-top-icon"><FiCheckSquare size={14} /></span>
            <div>
              <h3>Assign Onboarding Checklist</h3>
              <p>Assign custom checklists to new employees based on their role and department</p>
            </div>
          </section>

          <section className="ac-panels">
            <aside className="ac-panel-left">
              <h4>Select Employee</h4>
              <p>Select the new employee to assign checklist</p>

              <div className="ac-search-box">
                <FiSearch size={14} />
                <input type="text" placeholder="Search employees..." />
              </div>

              <select className="ac-filter">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Product</option>
                <option>Design</option>
              </select>

              <div className="ac-employee-list">
                {employees.map((employee) => (
                  <label
                    key={employee.id}
                    className={`ac-employee-item ${selectedEmployeeId === employee.id ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedEmployeeId === employee.id}
                      onChange={() => setSelectedEmployeeId(employee.id)}
                    />
                    <img src={employee.avatar} alt={employee.name} />
                    <div>
                      <div className="ac-employee-name">{employee.name}</div>
                      <div className="ac-employee-role">{employee.role}</div>
                      <div className="ac-employee-meta">{employee.department} · Start: {employee.startDate}</div>
                    </div>
                    <span className={`ac-employee-status ${employee.status.toLowerCase().replace(' ', '-')}`}>{employee.status}</span>
                  </label>
                ))}
              </div>
            </aside>

            <section className="ac-panel-right">
              <h4>Checklist Assignment</h4>
              <p>Configure and assign onboarding checklist</p>

              <div className="ac-grid two">
                <div className="ac-field">
                  <label>Checklist Template</label>
                  <select>
                    <option>Engineering Onboarding</option>
                    <option>Product Onboarding</option>
                    <option>Design Onboarding</option>
                  </select>
                </div>
                <div className="ac-field">
                  <label>Start Date</label>
                  <div className="ac-date-wrap">
                    <input type="text" defaultValue="15-01-2024" />
                    <FiCalendar size={14} />
                  </div>
                </div>
              </div>

              <div className="ac-preview-box">
                <h5>Checklist Preview: Engineering Onboarding</h5>

                {checklistGroups.map((group) => (
                  <div key={group.title} className="ac-group">
                    <div className="ac-group-heading">
                      <span className={`ac-group-dot ${group.color}`} />
                      <div className={`ac-group-title ${group.color}`}>{group.title}</div>
                    </div>
                    {group.items.map((item) => (
                      <label key={`${group.title}-${item.text}`} className="ac-group-item">
                        <input type="checkbox" />
                        <span>{item.text}</span>
                        <em>{item.day}</em>
                      </label>
                    ))}
                  </div>
                ))}
              </div>

              <div className="ac-grid two">
                <div className="ac-field">
                  <label>Primary Assignee</label>
                  <select>
                    <option>Direct Manager</option>
                    <option>HR Manager</option>
                  </select>
                </div>
                <div className="ac-field">
                  <label>Due Date Override</label>
                  <div className="ac-date-wrap">
                    <input type="text" placeholder="dd-mm-yyyy" />
                    <FiCalendar size={14} />
                  </div>
                </div>
              </div>

              <div className="ac-notification-settings">
                <h5>Notification Settings</h5>
                <div className="ac-checkbox-grid">
                  <label><input type="checkbox" defaultChecked /> Notify employee on assignment</label>
                  <label><input type="checkbox" defaultChecked /> Daily progress reminders</label>
                  <label><input type="checkbox" /> Notify manager on completion</label>
                  <label><input type="checkbox" /> Weekly status reports</label>
                </div>
              </div>

              <div className="ac-actions">
                <button 
                  className="ac-btn primary" 
                  onClick={() => navigate('/hrm/onboarding/manager-approval')}
                >
                  Assign Checklist
                </button>
                <button className="ac-btn">Preview</button>
                <button className="ac-btn">Cancel</button>
                <button 
                  className="ac-btn primary" 
                  onClick={() => navigate('/hrm/onboarding/document-upload')}
                  style={{ marginLeft: '8px' }}
                >
                  Upload Documents
                </button>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AssignChecklist
