import React, { useState } from 'react'
import { FiBell, FiEdit2, FiMail, FiPhone, FiMapPin, FiMoreVertical } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import DeactivateEmployeeModal from './DeactivateEmployeeModal'
import HRAccessRevokeModal from './HRAccessRevokeModal'
import './employee-deactivate-profile.css'

const employeeData = {
  1: {
    id: 1,
    name: 'John Smith',
    title: 'Senior Software Engineer',
    department: 'Engineering Department',
    email: 'john.smith@karnovate.com',
    phone: '+1 (555) 123-4567',
    mobile: '+1 (555) 123-4568',
    location: 'San Francisco, CA',
    joined: 'Jan 15, 2022',
    status: 'Active',
    avatar: 'https://placehold.co/92x92',
    dob: 'March 15, 1995',
    gender: 'Male',
    maritalStatus: 'Single',
    nationality: 'American',
    bloodGroup: 'O+',
    address: 'San Francisco, CA 94105',
    emergencyContactName: 'Jane Smith',
    emergencyRelationship: 'Sister',
    emergencyPhone: '+1 (555) 123-4569',
    emergencyEmail: 'jane.smith@karnovate.com',
    daysPresent: '245',
    leaveBalance: '12',
    performance: '4.8/5',
    manager: 'David Park',
    managerRole: 'Engineering Manager',
    directReports: [
      { name: 'Lisa Chen', role: 'Software Engineer' },
      { name: 'James Wilson', role: 'Junior Developer' },
      { name: 'Maria Garcia', role: 'QA Engineer' },
    ],
  },
}

function DeactivateHeader({ employee, onDeactivate }) {
  return (
    <header className="employee-deactivate-profile-header">
      <div className="employee-deactivate-header-left">
        <h1>Employee Profile</h1>
        <nav className="employee-deactivate-breadcrumb">
          <span>Home</span> <span>/</span>
          <span>Employee Directory</span> <span>/</span>
          <span>{employee.name}</span>
        </nav>
      </div>
      <div className="employee-deactivate-header-actions">
        <button className="employee-deactivate-notify">
          <FiBell size={18} />
          <span>1</span>
        </button>
        <button className="employee-deactivate-edit-btn">
          <FiEdit2 size={16} />
          Edit Profile
        </button>
        <button className="employee-deactivate-btn" onClick={onDeactivate}>
          Deactivate
        </button>
      </div>
    </header>
  )
}

function DeactivateProfileCard({ employee }) {
  return (
    <section className="employee-deactivate-profile-card">
      <div className="employee-deactivate-profile-left">
        <img src={employee.avatar} alt={employee.name} className="employee-deactivate-avatar" />
        <div>
          <div className="employee-deactivate-name-row">
            <h2>{employee.name}</h2>
            <span className="employee-deactivate-status">{employee.status}</span>
          </div>
          <div className="employee-deactivate-title">{employee.title}</div>
          <div className="employee-deactivate-department">{employee.department}</div>
          <div className="employee-deactivate-meta">
            <span><FiMail size={12} /> {employee.email}</span>
            <span><FiPhone size={12} /> {employee.phone}</span>
            <span><FiMapPin size={12} /> {employee.location}</span>
          </div>
        </div>
      </div>

      <div className="employee-deactivate-profile-right">
        <button className="employee-deactivate-action-btn">
          <FiMail size={16} />
        </button>
        <button className="employee-deactivate-action-btn">
          <FiPhone size={16} />
        </button>
        <button className="employee-deactivate-more-btn">
          <FiMoreVertical size={16} />
        </button>
      </div>
    </section>
  )
}

function DeactivateTabs({ activeTab, setActiveTab }) {
  const tabs = ['Overview', 'Employment', 'Attendance', 'Leave', 'Performance', 'Documents']

  return (
    <div className="employee-deactivate-tabs-wrap">
      <div className="employee-deactivate-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`employee-deactivate-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

function PersonalInfoCard({ employee }) {
  return (
    <div className="employee-deactivate-info-card">
      <h4>Personal Information</h4>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Full Name</div>
          <div className="employee-deactivate-value">{employee.name}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Date of Birth</div>
          <div className="employee-deactivate-value">{employee.dob}</div>
        </div>
      </div>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Gender</div>
          <div className="employee-deactivate-value">{employee.gender}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Marital Status</div>
          <div className="employee-deactivate-value">{employee.maritalStatus}</div>
        </div>
      </div>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Nationality</div>
          <div className="employee-deactivate-value">{employee.nationality}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Blood Group</div>
          <div className="employee-deactivate-value">{employee.bloodGroup}</div>
        </div>
      </div>
    </div>
  )
}

function ContactInfoCard({ employee }) {
  return (
    <div className="employee-deactivate-info-card">
      <h4>Contact Information</h4>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Email</div>
          <div className="employee-deactivate-value">{employee.email}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Phone</div>
          <div className="employee-deactivate-value">{employee.phone}</div>
        </div>
      </div>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Mobile</div>
          <div className="employee-deactivate-value">{employee.mobile}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Address</div>
          <div className="employee-deactivate-value">{employee.address}</div>
        </div>
      </div>
    </div>
  )
}

function EmergencyContactCard({ employee }) {
  return (
    <div className="employee-deactivate-info-card">
      <h4>Emergency Contact</h4>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Contact Name</div>
          <div className="employee-deactivate-value">{employee.emergencyContactName}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Relationship</div>
          <div className="employee-deactivate-value">{employee.emergencyRelationship}</div>
        </div>
      </div>
      <div className="employee-deactivate-info-row">
        <div>
          <div className="employee-deactivate-label">Phone</div>
          <div className="employee-deactivate-value">{employee.emergencyPhone}</div>
        </div>
        <div>
          <div className="employee-deactivate-label">Email</div>
          <div className="employee-deactivate-value">{employee.emergencyEmail}</div>
        </div>
      </div>
    </div>
  )
}

function QuickStats({ employee }) {
  return (
    <div className="employee-deactivate-quick-stats">
      <div className="employee-deactivate-stat blue">
        <div className="employee-deactivate-stat-value">{employee.daysPresent}</div>
        <div className="employee-deactivate-stat-label">Days Present</div>
      </div>
      <div className="employee-deactivate-stat green">
        <div className="employee-deactivate-stat-value">{employee.leaveBalance}</div>
        <div className="employee-deactivate-stat-label">Leave Balance</div>
      </div>
      <div className="employee-deactivate-stat purple">
        <div className="employee-deactivate-stat-value">{employee.performance}</div>
        <div className="employee-deactivate-stat-label">Performance</div>
      </div>
    </div>
  )
}

function ReportingStructure({ employee }) {
  return (
    <div className="employee-deactivate-reporting">
      <h4>Reporting Structure</h4>
      
      <div className="employee-deactivate-manager-section">
        <h5>Reports To</h5>
        <div className="employee-deactivate-manager-card">
          <img src="https://placehold.co/40x40" alt={employee.manager} className="employee-deactivate-manager-avatar" />
          <div>
            <div className="employee-deactivate-manager-name">{employee.manager}</div>
            <div className="employee-deactivate-manager-role">{employee.managerRole}</div>
          </div>
        </div>
      </div>

      <div className="employee-deactivate-reports-section">
        <h5>Direct Reports</h5>
        <div className="employee-deactivate-reports-list">
          {employee.directReports.map((report, idx) => (
            <div key={idx} className="employee-deactivate-report-item">
              <img src="https://placehold.co/32x32" alt={report.name} className="employee-deactivate-report-avatar" />
              <div>
                <div className="employee-deactivate-report-name">{report.name}</div>
                <div className="employee-deactivate-report-role">{report.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EmployeeDeactivateProfile({ onSwitchModule }) {
  const { id } = useParams()
  const employee = employeeData[id] || employeeData[1]
  const [activeTab, setActiveTab] = useState('Overview')
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [showRevokeModal, setShowRevokeModal] = useState(false)

  const handleDeactivate = () => {
    setShowDeactivateModal(true)
  }

  return (
    <div className="employee-deactivate-profile-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />
      
      <main className="employee-deactivate-profile-main">
        <DeactivateHeader employee={employee} onDeactivate={handleDeactivate} />
        <DeactivateProfileCard employee={employee} />
        <DeactivateTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="employee-deactivate-content">
            <div className="employee-deactivate-left-panel">
              <PersonalInfoCard employee={employee} />
              <ContactInfoCard employee={employee} />
              <EmergencyContactCard employee={employee} />
            </div>

            <div className="employee-deactivate-right-panel">
              <QuickStats employee={employee} />
              <ReportingStructure employee={employee} />
            </div>
          </div>
        )}

        {activeTab !== 'Overview' && (
          <div className="employee-deactivate-content">
            <div className="employee-deactivate-placeholder">
              <div className="employee-deactivate-placeholder-text">
                {activeTab} content coming soon
              </div>
            </div>
          </div>
        )}

        <DeactivateEmployeeModal
          isOpen={showDeactivateModal}
          onClose={() => setShowDeactivateModal(false)}
          onConfirmed={() => {
            setShowDeactivateModal(false)
            setShowRevokeModal(true)
          }}
          employee={employee}
        />

        <HRAccessRevokeModal
          isOpen={showRevokeModal}
          onClose={() => setShowRevokeModal(false)}
          employee={employee}
        />
      </main>
    </div>
  )
}

export default EmployeeDeactivateProfile
