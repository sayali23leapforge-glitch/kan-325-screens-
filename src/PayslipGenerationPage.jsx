import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiBriefcase, FiCheck, FiChevronDown, FiChevronRight, FiFileText, FiGrid, FiHelpCircle, FiSearch, FiSettings, FiShield, FiUsers } from 'react-icons/fi'
import './payslip-generation-page.css'

const generationTypeOptions = [
  { label: 'All Employees', desc: 'Generate for entire workforce', selected: true },
  { label: 'By Department', desc: 'Generate by specific department', selected: false },
  { label: 'Individual', desc: 'Generate single employee payslip', selected: false },
]

const outputFormatOptions = [
  { label: 'PDF Format', desc: 'Standard printable format', selected: true },
  { label: 'Email Delivery', desc: 'Send directly to employee inboxes', selected: false },
]

const recentGenerations = [
  { title: 'November 2024', meta: '247 payslips • Nov 30', highlighted: true },
  { title: 'October 2024', meta: '244 payslips • Oct 31', highlighted: false },
  { title: 'September 2024', meta: '242 payslips • Sep 30', highlighted: false },
]

const employeeRows = [
  { name: 'Sarah Johnson', initials: 'SJ', department: 'Engineering', salary: '$8,200', status: 'Ready' },
  { name: 'Michael Chen', initials: 'MC', department: 'Marketing', salary: '$6,250', status: 'Ready' },
  { name: 'David Wilson', initials: 'DW', department: 'Sales', salary: '$7,400', status: 'Ready' },
  { name: 'Emily Davis', initials: 'ED', department: 'HR', salary: '$5,900', status: 'Ready' },
  { name: 'James Martinez', initials: 'JM', department: 'Engineering', salary: '$9,200', status: 'Ready' },
]

function SidebarItem({ label, active = false, badge }) {
  return (
    <button type="button" className={`pg-nav-item ${active ? 'pg-nav-item-active' : ''}`}>
      <span>{label}</span>
      {badge ? <span className="pg-nav-badge">{badge}</span> : null}
    </button>
  )
}

function SelectCard({ option }) {
  return (
    <button type="button" className={`pg-select-card ${option.selected ? 'selected' : ''}`}>
      <span className={`pg-radio ${option.selected ? 'checked' : ''}`}>
        <span />
      </span>
      <span className="pg-select-copy">
        <strong>{option.label}</strong>
        <small>{option.desc}</small>
      </span>
    </button>
  )
}

function CheckboxRow({ label, checked = false }) {
  return (
    <label className="pg-checkbox-row">
      <input type="checkbox" defaultChecked={checked} />
      <span>{label}</span>
    </label>
  )
}

function PayslipGenerationPage() {
  const navigate = useNavigate()
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateAllPayslips = () => {
    if (isGenerating) {
      return
    }

    setIsGenerating(true)
    window.setTimeout(() => {
      navigate('/payroll/disbursement-status')
    }, 800)
  }

  return (
    <div className="pg-layout">
      <aside className="pg-sidebar">
        <div className="pg-brand">
          <span className="pg-brand-icon" />
          <div>
            <strong>Karnovate</strong>
            <small>Enterprise Suite</small>
          </div>
        </div>

        <div className="pg-sidebar-user">
          <strong>Payroll Admin</strong>
          <small>Human Resources</small>
        </div>

        <nav className="pg-nav">
          <p className="pg-nav-section">Navigation</p>
          <SidebarItem label="Dashboard" badge="9" />

          <p className="pg-nav-section">Payroll Management</p>
          <SidebarItem label="Employee Directory" />
          <SidebarItem label="Onboarding" />
          <SidebarItem label="Attendance" />
          <SidebarItem label="Leave Management" />
          <SidebarItem label="Payroll" active />
          <SidebarItem label="Tax Management" />

          <p className="pg-nav-section">Analytics</p>
          <SidebarItem label="Reports" />
          <SidebarItem label="Settings" />
        </nav>

        <div className="pg-sidebar-footer">
          <button type="button"><FiHelpCircle size={14} /> Help Center</button>
          <button type="button"><FiSettings size={14} /> Settings</button>
        </div>
      </aside>

      <main className="pg-main">
        <header className="pg-header">
          <div>
            <h1>Payslip Generation</h1>
            <div className="pg-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Payslip Generation</span>
            </div>
          </div>

          <button type="button" className="pg-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        <div className="pg-content">
          <section className="pg-hero">
            <div className="pg-hero-left">
              <span className="pg-hero-icon">
                <FiFileText size={18} />
              </span>
              <div>
                <h2>Generate Employee Payslips</h2>
                <p>Create and distribute payslips for December 2024 payroll</p>
                <div className="pg-hero-meta">
                  <span>Pay Period: Dec 1-31, 2024</span>
                  <span>Total Employees: 247 Active</span>
                  <span>Status: Ready for Generation</span>
                </div>
              </div>
            </div>
            <div className="pg-hero-circles" aria-hidden="true">
              <span />
              <span />
            </div>
          </section>

          <section className="pg-grid">
            <article className="pg-card pg-options-card">
              <h3>Payslip Generation Options</h3>

              <div className="pg-section">
                <h4>Generation Type</h4>
                <div className="pg-choices three-col">
                  {generationTypeOptions.map((option) => (
                    <SelectCard key={option.label} option={option} />
                  ))}
                </div>
              </div>

              <div className="pg-section">
                <h4>Output Format</h4>
                <div className="pg-choices two-col">
                  {outputFormatOptions.map((option) => (
                    <SelectCard key={option.label} option={option} />
                  ))}
                </div>
              </div>

              <div className="pg-section">
                <h4>Additional Options</h4>
                <div className="pg-checkbox-grid">
                  <CheckboxRow label="Include year-to-date summary" checked />
                  <CheckboxRow label="Show detailed deductions breakdown" checked />
                  <CheckboxRow label="Include company logo" />
                  <CheckboxRow label="Password protect PDF" />
                </div>
              </div>

              <div className="pg-section">
                <h4>Payslip Template</h4>
                <div className="pg-template-card">
                  <div>
                    <strong>Standard Template</strong>
                    <small>Includes earnings, taxes, benefits, and net pay</small>
                  </div>
                  <button type="button">Preview</button>
                </div>
              </div>
            </article>

            <div className="pg-right-col">
              <article className="pg-card pg-summary-card">
                <h3>Generation Summary</h3>
                <div className="pg-summary-list">
                  <div><span>Total Employees</span><strong>247</strong></div>
                  <div><span>Payslips</span><strong>247</strong></div>
                  <div><span>Format</span><strong>PDF</strong></div>
                  <div><span>Estimated Size</span><strong>~24.7 MB</strong></div>
                </div>
                <div className="pg-processing-time">
                  <span>Total Processing Time</span>
                  <strong>~3-5 minutes</strong>
                </div>
              </article>

              <article className="pg-card pg-recent-card">
                <h3>Recent Generations</h3>
                <div className="pg-recent-list">
                  {recentGenerations.map((item) => (
                    <div key={item.title} className={`pg-recent-item ${item.highlighted ? 'highlighted' : ''}`}>
                      <span className="pg-recent-icon"><FiCheck size={12} /></span>
                      <div>
                        <strong>{item.title}</strong>
                        <small>{item.meta}</small>
                      </div>
                      <FiChevronRight size={14} />
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="pg-card pg-actions-card">
            <div className="pg-alert">
              <span className="pg-alert-icon"><FiShield size={14} /></span>
              <div>
                <strong>Ready for Generation</strong>
                <small>All inputs are validated and you can proceed to generate payslips for all employees.</small>
              </div>
            </div>
            <div className="pg-action-row">
              <button type="button" className="pg-btn blue" onClick={handleGenerateAllPayslips}>
                <FiUsers size={14} />
                {isGenerating ? 'Generating...' : 'Generate All Payslips'}
              </button>
              <button type="button" className="pg-btn green"><FiGrid size={14} /> Preview Sample</button>
              <button type="button" className="pg-btn gray"><FiSettings size={14} /> Settings</button>
            </div>
          </section>

          <section className="pg-card pg-table-card">
            <div className="pg-table-head">
              <h3>Employee List</h3>
              <div className="pg-table-controls">
                <label className="pg-search">
                  <FiSearch size={14} />
                  <input type="text" placeholder="Search employees..." />
                </label>
                <button type="button" className="pg-filter-btn">
                  All Departments
                  <FiChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="pg-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" defaultChecked /></th>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeRows.map((row) => (
                    <tr key={row.name}>
                      <td><input type="checkbox" defaultChecked /></td>
                      <td>
                        <div className="pg-employee">
                          <span className="pg-avatar">{row.initials}</span>
                          <strong>{row.name}</strong>
                        </div>
                      </td>
                      <td>{row.department}</td>
                      <td>{row.salary}</td>
                      <td><span className="pg-status-ready">{row.status}</span></td>
                      <td><button type="button" className="pg-action-link">Preview</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PayslipGenerationPage
