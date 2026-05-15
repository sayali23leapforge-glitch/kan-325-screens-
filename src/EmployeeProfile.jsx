import { FiBell, FiEdit2, FiMail, FiPhone, FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './employee-profile.css'

const employeeData = {
  1: {
    id: 1,
    name: 'John Smith',
    title: 'Senior Software Engineer',
    department: 'Engineering Department',
    email: 'john.smith@karnovate.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joined: 'Jan 15, 2022',
    status: 'Active',
    avatar: 'https://placehold.co/92x92',
  },
}

function ProfileHeader({ employee }) {
  return (
    <section className="employee-profile-card">
      <div className="employee-profile-left">
        <img src={employee.avatar} alt={employee.name} className="employee-profile-avatar" />
        <div>
          <div className="employee-profile-name-row">
            <h2>{employee.name}</h2>
            <span className="employee-profile-status">{employee.status}</span>
          </div>
          <div className="employee-profile-title-text">{employee.title}</div>
          <div className="employee-profile-department">{employee.department}</div>
          <div className="employee-profile-meta-row">
            <span><FiMail size={12} /> {employee.email}</span>
            <span><FiPhone size={12} /> {employee.phone}</span>
            <span><FiMapPin size={12} /> {employee.location}</span>
            <span><FiCalendar size={12} /> Joined: {employee.joined}</span>
          </div>
        </div>
      </div>

      <div className="employee-profile-right-actions">
        <button className="employee-profile-activate-btn">Activate</button>
        <button className="employee-profile-more-btn">More</button>
      </div>
    </section>
  )
}

function ProfileStats() {
  return (
    <div className="employee-profile-stats-grid">
      <div className="employee-profile-stat blue">
        <strong>2.5</strong>
        <span>Years</span>
      </div>
      <div className="employee-profile-stat green">
        <strong>15</strong>
        <span>Projects</span>
      </div>
      <div className="employee-profile-stat purple">
        <strong>4.8</strong>
        <span>Rating</span>
      </div>
      <div className="employee-profile-stat orange">
        <strong>5</strong>
        <span>Team Size</span>
      </div>
    </div>
  )
}

function RecentActivity() {
  const items = [
    { text: 'Completed quarterly review', time: '2 hours ago', color: 'green' },
    { text: 'Submitted expense report', time: '1 day ago', color: 'blue' },
    { text: 'Requested time off for vacation', time: '3 days ago', color: 'purple' },
  ]

  return (
    <div className="employee-profile-panel">
      <h4>Recent Activity</h4>
      <div className="employee-activity-list">
        {items.map((item) => (
          <div key={item.text} className="employee-activity-item">
            <span className={`employee-activity-icon ${item.color}`}><FiCheck size={11} /></span>
            <div>
              <div className="employee-activity-text">{item.text}</div>
              <div className="employee-activity-time">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsTo() {
  return (
    <div className="employee-profile-side-panel">
      <h4>Reports To</h4>
      <div className="employee-manager-row">
        <img src="https://placehold.co/38x38" alt="David Park" />
        <div>
          <div className="employee-manager-name">David Park</div>
          <div className="employee-manager-role">Engineering Manager</div>
        </div>
      </div>
    </div>
  )
}

function TeamMembers() {
  const members = [
    { name: 'Lisa Chen', role: 'Frontend Developer' },
    { name: 'James Wilson', role: 'Backend Developer' },
    { name: 'Maria Garcia', role: 'UX Designer' },
  ]

  return (
    <div className="employee-profile-side-panel">
      <h4>Team Members</h4>
      <div className="employee-team-list">
        {members.map((member) => (
          <div key={member.name} className="employee-team-row">
            <img src="https://placehold.co/30x30" alt={member.name} />
            <div>
              <div className="employee-team-name">{member.name}</div>
              <div className="employee-team-role">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillsPanel() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker']

  return (
    <div className="employee-profile-side-panel">
      <h4>Skills</h4>
      <div className="employee-skills-wrap">
        {skills.map((skill) => (
          <span key={skill} className="employee-skill-chip">{skill}</span>
        ))}
      </div>
    </div>
  )
}

function EmployeeProfile({ onSwitchModule }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const employee = employeeData[id] || employeeData[1]

  return (
    <div className="employee-profile-page-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="employee-profile-page-main">
        <header className="employee-profile-page-header">
          <div>
            <h1>Employee Profile</h1>
            <nav>
              <button type="button" onClick={() => navigate('/')}>Home</button>
              <span>&gt;</span>
              <button type="button" onClick={() => navigate('/hrm/employees')}>Employee Directory</button>
              <span>&gt;</span>
              <span>{employee.name}</span>
            </nav>
          </div>

          <div className="employee-profile-page-header-actions">
            <button className="employee-profile-page-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>3</span>
            </button>
            <button className="employee-profile-page-edit-btn">
              <FiEdit2 size={14} />
              Edit Profile
            </button>
            <button
              className="employee-profile-page-deactivate-btn"
              onClick={() => navigate(`/hrm/employee-profile/deactivate/${id}`)}
            >
              Deactivate
            </button>
          </div>
        </header>

        <ProfileHeader employee={employee} />

        <section className="employee-profile-tabs-wrap">
          <div className="employee-profile-tabs">
            <button className="active">Overview</button>
            <button>Personal Info</button>
            <button>Employment</button>
            <button>Performance</button>
            <button>Documents</button>
            <button>Activity Log</button>
          </div>

          <div className="employee-profile-overview-grid">
            <div className="employee-profile-overview-left">
              <ProfileStats />
              <RecentActivity />
            </div>

            <div className="employee-profile-overview-right">
              <ReportsTo />
              <TeamMembers />
              <SkillsPanel />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default EmployeeProfile
