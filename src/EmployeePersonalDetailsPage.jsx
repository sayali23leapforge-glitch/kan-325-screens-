import { useState } from 'react'
import { FiPrinter, FiEdit2, FiMail, FiCalendar, FiFileText, FiPhoneCall, FiMapPin, FiUsers, FiClock, FiUpload, FiUploadCloud, FiTrash2, FiDownload, FiMoreVertical } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './employee-personal-details-page.css'

function EmployeePersonalDetailsPage({ onSwitchModule }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeSection, setActiveSection] = useState('personal-details')

  const employee = {
    id: id || '1',
    name: 'John Smith',
    role: 'Senior Software Engineer',
    employeeId: 'EMP-2024-001',
    department: 'Engineering',
    joiningDate: 'January 15, 2022',
    status: 'Active',
    experience: '4 Years',
    avatar: 'JS',
    managerName: 'Michael Brown',
    managerRole: 'Engineering Director',
  }

  const documentProfiles = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Senior Software Engineer',
      dept: 'Engineering',
      email: 'john.smith@karnovate.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      avatar: 'https://placehold.co/40x40',
    },
    {
      id: 2,
      name: 'Lisa Chen',
      role: 'Marketing Manager',
      dept: 'Marketing',
      email: 'lisa.chen@karnovate.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
      avatar: 'https://placehold.co/40x40',
    },
    {
      id: 3,
      name: 'David Park',
      role: 'Sales Director',
      dept: 'Sales',
      email: 'david.park@karnovate.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, IL',
      avatar: 'https://placehold.co/40x40',
    },
    {
      id: 4,
      name: 'Maria Garcia',
      role: 'Product Designer',
      dept: 'Design',
      email: 'maria.garcia@karnovate.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      avatar: 'https://placehold.co/40x40',
    },
  ]

  return (
    <div className="employee-profile-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="employee-profile-main">
        <header className="employee-profile-header">
          <div className="employee-profile-header-content">
            <h1 className="employee-profile-title">John Smith - Personal Details</h1>
            <nav className="employee-profile-breadcrumb">
              <button type="button" onClick={() => navigate('/')} className="employee-profile-link">Home</button>
              <span>&gt;</span>
              <button type="button" onClick={() => navigate('/hrm/employees')} className="employee-profile-link">Employee Directory</button>
              <span>&gt;</span>
              <span>Personal Details</span>
            </nav>
          </div>

          <div className="employee-profile-header-actions">
            <button className="employee-profile-btn secondary">
              <FiPrinter size={16} />
              Print Profile
            </button>
            <button className="employee-profile-btn primary">
              <FiEdit2 size={16} />
              Edit Profile
            </button>
          </div>
        </header>

        <section className="employee-summary-card">
          <div className="employee-summary-left">
            <div className="employee-summary-avatar">{employee.avatar}</div>
            <div>
              <h2>{employee.name}</h2>
              <p className="employee-summary-role">{employee.role}</p>
              <div className="employee-summary-meta">
                <span>Employee ID: {employee.employeeId}</span>
                <span>Department: {employee.department}</span>
                <span>Joining Date: {employee.joiningDate}</span>
              </div>
            </div>
          </div>

          <div className="employee-summary-right">
            <div className="employee-kpi-card status">
              <span className="employee-kpi-label">Status</span>
              <strong>Active</strong>
            </div>
            <div className="employee-kpi-card experience">
              <span className="employee-kpi-label">Experience</span>
              <strong>4 Years</strong>
            </div>
          </div>
        </section>

        <section className="employee-details-grid">
          <aside className="employee-left-panel">
            <div className="employee-panel-card">
              <h3>Employee Information</h3>
              <div className="employee-menu-list">
                <button className={`employee-menu-item ${activeSection === 'personal-details' ? 'active' : ''}`} onClick={() => setActiveSection('personal-details')}>Personal Details</button>
                <button className={`employee-menu-item ${activeSection === 'employment-info' ? 'active' : ''}`} onClick={() => setActiveSection('employment-info')}>Employment Info</button>
                <button className={`employee-menu-item ${activeSection === 'contact-details' ? 'active' : ''}`} onClick={() => setActiveSection('contact-details')}>Contact Details</button>
                <button className={`employee-menu-item ${activeSection === 'emergency-contact' ? 'active' : ''}`} onClick={() => setActiveSection('emergency-contact')}>Emergency Contact</button>
                <button className={`employee-menu-item ${activeSection === 'documents' ? 'active' : ''}`} onClick={() => setActiveSection('documents')}>Documents</button>
                <button className={`employee-menu-item ${activeSection === 'performance' ? 'active' : ''}`} onClick={() => setActiveSection('performance')}>Performance</button>
              </div>
            </div>

            <div className="employee-panel-card">
              <h3>Quick Actions</h3>
              <div className="employee-quick-actions">
                <button><FiMail size={14} />Send Email</button>
                <button><FiCalendar size={14} />Schedule Meeting</button>
                <button><FiFileText size={14} />Generate Report</button>
              </div>
            </div>
          </aside>

          <div className="employee-right-panel">
            {activeSection === 'documents' ? (
              <div className="employee-panel-card employee-docs-card">
                <div className="employee-docs-header">
                  <div>
                    <h3>Document Upload</h3>
                    <p>Upload employee documents and files</p>
                  </div>
                  <button className="employee-docs-upload-btn">
                    <FiUpload size={14} />
                    Upload Files
                  </button>
                </div>

                <div className="employee-docs-dropzone">
                  <div className="employee-docs-dropzone-icon">
                    <FiUploadCloud size={20} />
                  </div>
                  <strong>Drop files here or click to upload</strong>
                  <span>Supports PDF, DOC, DOCX, XLS, XLSX files up to 10MB</span>
                  <button className="employee-docs-choose-btn">Choose Files</button>
                </div>

                <div className="employee-docs-recent">
                  <h4>Recent Uploads</h4>

                  <div className="employee-docs-row">
                    <div className="employee-docs-file-icon pdf"><FiFileText size={14} /></div>
                    <div className="employee-docs-file-meta">
                      <strong>Employee_Handbook_2024.pdf</strong>
                      <span>Uploaded 2 hours ago • 2.4 MB</span>
                    </div>
                    <div className="employee-docs-row-actions">
                      <button aria-label="Download handbook"><FiDownload size={13} /></button>
                      <button aria-label="Delete handbook"><FiTrash2 size={13} /></button>
                    </div>
                  </div>

                  <div className="employee-docs-row">
                    <div className="employee-docs-file-icon doc"><FiFileText size={14} /></div>
                    <div className="employee-docs-file-meta">
                      <strong>Job_Description_Template.docx</strong>
                      <span>Uploaded 1 day ago • 1.2 MB</span>
                    </div>
                    <div className="employee-docs-row-actions">
                      <button aria-label="Download job description"><FiDownload size={13} /></button>
                      <button aria-label="Delete job description"><FiTrash2 size={13} /></button>
                    </div>
                  </div>

                  <div className="employee-docs-row">
                    <div className="employee-docs-file-icon xls"><FiFileText size={14} /></div>
                    <div className="employee-docs-file-meta">
                      <strong>Payroll_Report_Q1.xlsx</strong>
                      <span>Uploaded 3 days ago • 896 KB</span>
                    </div>
                    <div className="employee-docs-row-actions">
                      <button aria-label="Download payroll report"><FiDownload size={13} /></button>
                      <button aria-label="Delete payroll report"><FiTrash2 size={13} /></button>
                    </div>
                  </div>

                  <div className="employee-docs-profiles-grid">
                    {documentProfiles.map((profile) => (
                      <div key={profile.id} className="employee-docs-profile-card">
                        <img className="employee-docs-profile-avatar" src={profile.avatar} alt={profile.name} />
                        <div className="employee-docs-profile-name">{profile.name}</div>
                        <div className="employee-docs-profile-role">{profile.role}</div>
                        <div className="employee-docs-profile-dept">{profile.dept}</div>

                        <div className="employee-docs-profile-contact">
                          <div><FiMail size={11} /><span>{profile.email}</span></div>
                          <div><FiPhoneCall size={11} /><span>{profile.phone}</span></div>
                          <div><FiMapPin size={11} /><span>{profile.location}</span></div>
                        </div>

                        <div className="employee-docs-profile-actions">
                          <button className="employee-docs-profile-view-btn" onClick={() => navigate(`/hrm/employees/${profile.id}`)}>
                            View Profile
                          </button>
                          <button className="employee-docs-profile-more-btn" aria-label={`More actions for ${profile.name}`}>
                            <FiMoreVertical size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="employee-docs-profiles-pagination">
                    <button className="employee-docs-pg-btn">&#8249;</button>
                    <button className="employee-docs-pg-btn active">1</button>
                    <button className="employee-docs-pg-btn">2</button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="employee-panel-card">
                  <h3>Employment Information</h3>
                  <div className="employee-info-grid">
                    <div className="employee-info-item"><span>Employee ID</span><strong>EMP-2024-001</strong></div>
                    <div className="employee-info-item"><span>Job Title</span><strong>Senior Software Engineer</strong></div>
                    <div className="employee-info-item"><span>Department</span><strong>Engineering</strong></div>
                    <div className="employee-info-item">
                      <span>Direct Manager</span>
                      <div className="manager-inline">
                        <div className="manager-avatar">MB</div>
                        <div>
                          <strong>{employee.managerName}</strong>
                          <small>{employee.managerRole}</small>
                        </div>
                      </div>
                    </div>
                    <div className="employee-info-item"><span>Employment Type</span><strong>Full Time</strong></div>
                    <div className="employee-info-item"><span>Work Location</span><strong>San Francisco Office</strong></div>
                    <div className="employee-info-item"><span>Start Date</span><strong>January 15, 2022</strong></div>
                    <div className="employee-info-item"><span>Status</span><strong className="status-pill">Active</strong></div>
                    <div className="employee-info-item"><span>Office Location</span><strong>Building A, Floor 4</strong></div>
                    <div className="employee-info-item"><span>Team</span><strong>Platform Team</strong></div>
                    <div className="employee-info-item"><span>Work Schedule</span><strong>Mon-Fri, 9:00 AM - 6:00 PM</strong></div>
                    <div className="employee-info-item"><span>Probation Period</span><strong>Completed</strong></div>
                  </div>
                </div>

                <div className="employee-panel-card">
                  <h3>Compensation & Benefits</h3>
                  <div className="employee-benefits-grid">
                    <div className="employee-benefit blue"><span>Base Salary</span><strong>$145,000 / year</strong></div>
                    <div className="employee-benefit"><span>Bonus Structure</span><strong>Up to 15% annual</strong></div>
                    <div className="employee-benefit green"><span>Health Insurance</span><strong>Premium Plan (Family)</strong></div>
                    <div className="employee-benefit"><span>Retirement Plan</span><strong>401(k) with 6% match</strong></div>
                    <div className="employee-benefit purple"><span>Stock Options</span><strong>1,200 vested shares</strong></div>
                  </div>
                </div>

                <div className="employee-panel-card">
                  <h3>Contact Information</h3>
                  <div className="employee-contact-list">
                    <div><FiMail size={14} /><span>john.smith@karnovate.com</span></div>
                    <div><FiPhoneCall size={14} /><span>+1 (555) 123-4567</span></div>
                    <div><FiMapPin size={14} /><span>San Francisco, CA</span></div>
                    <div><FiUsers size={14} /><span>Platform Engineering</span></div>
                    <div><FiClock size={14} /><span>UTC -08:00 (Pacific Time)</span></div>
                  </div>
                </div>

                <div className="employee-panel-card employee-history-card">
                  <h3>Employment History</h3>

                  <div className="employee-history-item current">
                    <div className="employee-history-head">
                      <h4>Senior Software Engineer</h4>
                      <span className="employee-history-badge">Current Position</span>
                    </div>
                    <p className="employee-history-department">Engineering Department</p>
                    <p className="employee-history-date">March 2022 - Present</p>
                    <p className="employee-history-description">
                      Promoted to senior role with increased responsibilities in system architecture and team leadership.
                    </p>
                  </div>

                  <div className="employee-history-item previous">
                    <div className="employee-history-head">
                      <h4>Software Engineer</h4>
                      <span className="employee-history-label">Previous Position</span>
                    </div>
                    <p className="employee-history-department">Engineering Department</p>
                    <p className="employee-history-date">January 2020 - March 2022</p>
                    <p className="employee-history-description">
                      Initial position focusing on backend development and API design.
                    </p>
                  </div>
                </div>

                <div className="employee-panel-card employee-reporting-card">
                  <h3>Reporting Structure</h3>

                  <div className="employee-reporting-grid">
                    <div>
                      <h4>Reports To</h4>
                      <div className="employee-reporting-manager-box">
                        <img className="employee-reporting-manager-avatar" src="https://placehold.co/46x46" alt="Sarah Johnson" />
                        <div>
                          <div className="employee-reporting-name">Sarah Johnson</div>
                          <div className="employee-reporting-role">Engineering Manager</div>
                          <div className="employee-reporting-email">sarah.johnson@karnovate.com</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4>Direct Reports</h4>
                      <div className="employee-reporting-direct-box">
                        <div className="employee-reporting-person-row">
                          <img className="employee-reporting-person-avatar" src="https://placehold.co/38x38" alt="Emily Davis" />
                          <div>
                            <div className="employee-reporting-person-name">Emily Davis</div>
                            <div className="employee-reporting-person-role">Junior Developer</div>
                          </div>
                        </div>

                        <div className="employee-reporting-person-row">
                          <img className="employee-reporting-person-avatar" src="https://placehold.co/38x38" alt="Robert Martinez" />
                          <div>
                            <div className="employee-reporting-person-name">Robert Martinez</div>
                            <div className="employee-reporting-person-role">Junior Developer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default EmployeePersonalDetailsPage
