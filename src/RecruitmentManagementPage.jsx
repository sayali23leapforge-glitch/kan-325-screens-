import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiPlus,
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiUserPlus,
  FiFilter,
  FiDownload,
  FiFileText,
  FiCheck,
  FiMessageSquare,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './recruitment-management-page.css'

const statsCards = [
  {
    id: 'open',
    title: 'Open Positions',
    value: '24',
    badge: 'Active',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    badgeClass: 'recruit-badge-blue',
    Icon: FiBriefcase,
  },
  {
    id: 'applications',
    title: 'Applications',
    value: '142',
    badge: 'New',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    badgeClass: 'recruit-badge-green',
    Icon: FiUsers,
  },
  {
    id: 'interviews',
    title: 'Interviews',
    value: '8',
    badge: 'Today',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    badgeClass: 'recruit-badge-purple',
    Icon: FiCalendar,
  },
  {
    id: 'hires',
    title: 'New Hires',
    value: '12',
    badge: 'Month',
    iconBg: '#FFEDD5',
    iconColor: '#EA580C',
    badgeClass: 'recruit-badge-orange',
    Icon: FiUserPlus,
  },
]

const pipelineItems = [
  { name: 'Applications', count: 142, bg: '#EFF6FF', iconBg: '#2563EB', icon: FiFileText },
  { name: 'Screening', count: 89, bg: '#F0FDF4', iconBg: '#16A34A', icon: FiCheck },
  { name: 'Interview', count: 34, bg: '#FAF5FF', iconBg: '#9333EA', icon: FiMessageSquare },
  { name: 'Offer', count: 18, bg: '#FFF7ED', iconBg: '#EA580C', icon: FiBriefcase },
]

const recruiters = [
  { name: 'Sarah Johnson', role: 'Senior Recruiter', hires: 23, avatar: 'SJ', avatarColor: '#8B5CF6' },
  { name: 'Mike Davis', role: 'Talent Specialist', hires: 19, avatar: 'MD', avatarColor: '#3B82F6' },
  { name: 'Lisa Wang', role: 'HR Recruiter', hires: 17, avatar: 'LW', avatarColor: '#10B981' },
]

const applications = [
  {
    id: 1,
    name: 'Emily Carter',
    role: 'UI/UX Designer',
    avatar: 'EC',
    avatarColor: '#8B5CF6',
    position: 'Senior Designer',
    department: 'Design',
    applied: '2 days ago',
    status: 'Interview',
    recruiter: 'Sarah Johnson',
    action: 'Review',
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Full Stack Developer',
    avatar: 'JW',
    avatarColor: '#3B82F6',
    position: 'React Developer',
    department: 'Engineering',
    applied: '1 day ago',
    status: 'Screening',
    recruiter: 'Mike Davis',
    action: 'Review',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Marketing Specialist',
    avatar: 'MG',
    avatarColor: '#10B981',
    position: 'Content Manager',
    department: 'Marketing',
    applied: '3 days ago',
    status: 'Applied',
    recruiter: 'Lisa Wang',
    action: 'Review',
  },
]

function RecruitmentManagementPage({ onSwitchModule }) {
  const [activeQuarter, setActiveQuarter] = useState('Q2')
  const navigate = useNavigate()

  const handleOpenApplication = () => {
    navigate('/hrm/recruitment/application')
  }

  const handleOpenScreening = () => {
    navigate('/hrm/recruitment/screening')
  }

  const handleOpenInterview = () => {
    navigate('/hrm/recruitment/interview')
  }

  const handleOpenOffers = () => {
    navigate('/hrm/recruitment/offers')
  }

  return (
    <div className="recruit-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="recruit-main">
        <header className="recruit-header">
          <div className="recruit-header-left">
            <h1 className="recruit-title">Recruitment Management</h1>
            <nav className="recruit-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Recruitment</span>
            </nav>
          </div>

          <div className="recruit-header-right">
            <button className="recruit-bell-btn" title="Notifications">
              <FiBell size={18} />
              <span className="recruit-bell-badge">5</span>
            </button>
            <button
              className="recruit-acceptance-btn"
              type="button"
              onClick={() => navigate('/hrm/recruitment/acceptance')}
            >
              Acceptance
            </button>
            <button
              className="recruit-new-btn"
              type="button"
              onClick={() => navigate('/hrm/recruitment/create')}
            >
              <FiPlus size={14} />
              New Job Post
            </button>
          </div>
        </header>

        <div className="recruit-content">
          <section className="recruit-stats-row">
            {statsCards.map((card) => (
              <article key={card.id} className="recruit-stat-card">
                <div className="recruit-stat-top">
                  <div className="recruit-stat-icon" style={{ backgroundColor: card.iconBg }}>
                    <card.Icon size={15} color={card.iconColor} />
                  </div>
                  <span className={`recruit-stat-badge ${card.badgeClass}`}>{card.badge}</span>
                </div>
                <div className="recruit-stat-value">{card.value}</div>
                <div className="recruit-stat-title">{card.title}</div>
              </article>
            ))}
          </section>

          <section className="recruit-mid-row">
            <div className="recruit-pipeline-card">
              <div className="recruit-card-header">
                <h2 className="recruit-card-title">Recruitment Pipeline</h2>
                <div className="recruit-tabs">
                  {['Q1', 'Q2', 'Q3'].map((q) => (
                    <button
                      key={q}
                      type="button"
                      className={`recruit-tab ${activeQuarter === q ? 'active' : ''}`}
                      onClick={() => setActiveQuarter(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="recruit-pipeline-list">
                {pipelineItems.map((item) => {
                  const isInteractive = item.name === 'Screening' || item.name === 'Interview' || item.name === 'Offer'
                  const onActivate =
                    item.name === 'Screening'
                      ? handleOpenScreening
                      : item.name === 'Interview'
                        ? handleOpenInterview
                        : handleOpenOffers

                  return (
                    <div
                      key={item.name}
                      className={`recruit-pipeline-item ${isInteractive ? 'recruit-pipeline-item-clickable' : ''}`}
                      style={{ backgroundColor: item.bg }}
                      role={isInteractive ? 'button' : undefined}
                      tabIndex={isInteractive ? 0 : undefined}
                      onClick={isInteractive ? onActivate : undefined}
                      onKeyDown={
                        isInteractive
                          ? (event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                onActivate()
                              }
                            }
                          : undefined
                      }
                    >
                      <div className="recruit-pipeline-left">
                        <span className="recruit-pipeline-icon" style={{ backgroundColor: item.iconBg }}>
                          <item.icon size={14} color="#FFFFFF" strokeWidth={2.5} />
                        </span>
                        <span className="recruit-pipeline-name">{item.name}</span>
                      </div>
                      <span className="recruit-pipeline-count">{item.count}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="recruit-top-card">
              <h2 className="recruit-card-title">Top Recruiters</h2>
              <div className="recruit-top-list">
                {recruiters.map((person) => (
                  <div key={person.name} className="recruit-top-item">
                    <span className="recruit-avatar" style={{ backgroundColor: person.avatarColor }}>{person.avatar}</span>
                    <div className="recruit-top-info">
                      <div className="recruit-top-name">{person.name}</div>
                      <div className="recruit-top-role">{person.role}</div>
                    </div>
                    <div className="recruit-top-hires">
                      <div className="recruit-top-count">{person.hires}</div>
                      <div className="recruit-top-label">Hires</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="recruit-table-card">
            <div className="recruit-card-header recruit-table-header">
              <h2 className="recruit-card-title">Recent Applications</h2>
              <div className="recruit-controls">
                <button type="button" className="recruit-control-btn">
                  <FiFilter size={12} />
                  Filter
                </button>
                <button type="button" className="recruit-control-btn">
                  <FiDownload size={12} />
                  Export
                </button>
              </div>
            </div>

            <div className="recruit-table-wrap">
              <table className="recruit-table">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Applied</th>
                    <th>Status</th>
                    <th>Recruiter</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div
                          className="recruit-candidate-cell recruit-candidate-clickable"
                          role="button"
                          tabIndex={0}
                          onClick={handleOpenApplication}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault()
                              handleOpenApplication()
                            }
                          }}
                        >
                          <span className="recruit-avatar" style={{ backgroundColor: row.avatarColor }}>{row.avatar}</span>
                          <div>
                            <div className="recruit-candidate-name">{row.name}</div>
                            <div className="recruit-candidate-role">{row.role}</div>
                          </div>
                        </div>
                      </td>
                      <td>{row.position}</td>
                      <td>
                        <span className={`recruit-chip ${row.department.toLowerCase()}`}>{row.department}</span>
                      </td>
                      <td>{row.applied}</td>
                      <td>
                        <span className={`recruit-status ${row.status.toLowerCase()}`}>{row.status}</span>
                      </td>
                      <td>{row.recruiter}</td>
                      <td>
                        <button className="recruit-action-btn" type="button" onClick={handleOpenApplication}>{row.action}</button>
                      </td>
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

export default RecruitmentManagementPage
