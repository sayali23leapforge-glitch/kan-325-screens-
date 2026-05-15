import { FiBell, FiGrid, FiUploadCloud, FiMail, FiMonitor, FiUsers } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './create-onboarding-task.css'

function FormInput({ label, placeholder, required = false }) {
  return (
    <div className="cot-field">
      <label>{label}{required ? ' *' : ''}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

function Dropdown({ label, options, defaultValue }) {
  return (
    <div className="cot-field">
      <label>{label}</label>
      <select defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

function UploadBox() {
  return (
    <div className="cot-upload-box">
      <FiUploadCloud size={18} />
      <p>
        Drag and drop files here or <span>browse</span>
      </p>
      <small>PDF, DOC, PPT up to 10MB</small>
    </div>
  )
}

function CheckboxGroup() {
  return (
    <div className="cot-checkbox-group">
      <label><input type="checkbox" defaultChecked /> Send email notification to assignee</label>
      <label><input type="checkbox" /> Send reminder 1 day before due date</label>
      <label><input type="checkbox" defaultChecked /> Notify manager on task completion</label>
    </div>
  )
}

function TemplateCard({ icon: Icon, title, subtitle, tone }) {
  return (
    <div className={`cot-template-card ${tone}`}>
      <div className="cot-template-icon"><Icon size={13} /></div>
      <div>
        <div className="cot-template-title">{title}</div>
        <div className="cot-template-subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

function CreateOnboardingTask({ onSwitchModule }) {
  return (
    <div className="cot-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="cot-main">
        <div className="cot-content">
          <header className="cot-header">
            <div>
              <h1>Create Onboarding Task</h1>
              <nav>
                <a href="/">Home</a>
                <span>&gt;</span>
                <a href="/hrm/onboarding-2">Onboarding</a>
                <span>&gt;</span>
                <span>New Task</span>
              </nav>
            </div>
            <button className="cot-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>2</span>
            </button>
          </header>

          <section className="cot-top-card">
            <span className="cot-top-icon"><FiGrid size={14} /></span>
            <div>
              <h3>New Onboarding Task</h3>
              <p>Create a new task for the onboarding process</p>
            </div>
          </section>

          <section className="cot-card">
            <h2>Task Details</h2>

          <div className="cot-grid two">
            <FormInput label="Task Name" required placeholder="Enter task name" />
            <Dropdown label="Category *" defaultValue="Select category" options={['Select category', 'Communication', 'IT', 'HR', 'Training']} />
          </div>

          <div className="cot-field">
            <label>Description</label>
            <textarea rows={4} placeholder="Describe the task requirements and objectives..." />
          </div>

          <div className="cot-grid three">
            <Dropdown label="Priority Level" defaultValue="Medium" options={['Low', 'Medium', 'High']} />
            <Dropdown label="Estimated Duration" defaultValue="30 minutes" options={['15 minutes', '30 minutes', '45 minutes', '60 minutes']} />
            <Dropdown label="Task Type" defaultValue="Manual" options={['Manual', 'Automated']} />
          </div>

          <div className="cot-grid two">
            <Dropdown label="Assigned To" defaultValue="Select assignee" options={['Select assignee', 'HR Team', 'IT Team', 'Manager']} />
            <Dropdown label="Department" defaultValue="All Departments" options={['All Departments', 'Engineering', 'Product', 'Design', 'Sales']} />
          </div>

          <div className="cot-grid two">
            <Dropdown label="Trigger Timing" defaultValue="Day 1 (First Day)" options={['Day 1 (First Day)', 'Day 2', 'Day 3', 'Week 1']} />
            <Dropdown label="Depends On" defaultValue="No Dependencies" options={['No Dependencies', 'Welcome Email', 'IT Setup', 'HR Documentation']} />
          </div>

          <FormInput label="Resources & Links" placeholder="Resource URL (optional)" />

          <UploadBox />

          <h4>Notification Settings</h4>
          <CheckboxGroup />

            <div className="cot-actions">
              <button className="cot-btn create">Create Task</button>
              <button className="cot-btn save">Save & Add Another</button>
              <button className="cot-btn cancel">Cancel</button>
            </div>
          </section>

          <section className="cot-card">
            <h2>Quick Templates</h2>
            <p className="cot-subtext">Use these pre-built templates to create common onboarding tasks</p>

            <div className="cot-template-grid">
              <TemplateCard icon={FiMail} title="Welcome Email" subtitle="Automated welcome email with company information" tone="blue" />
              <TemplateCard icon={FiMonitor} title="IT Setup" subtitle="Hardware allocation and system access setup" tone="green" />
              <TemplateCard icon={FiUsers} title="Team Meet" subtitle="Introduction meeting with team members" tone="purple" />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default CreateOnboardingTask
