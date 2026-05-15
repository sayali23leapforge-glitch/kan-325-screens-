import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiBell, FiPlus, FiCheck, FiX, FiUsers, FiClock, FiBriefcase, FiAlertCircle } from 'react-icons/fi'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import HRMSidebar from './HRMSidebar'
import './hrm-dashboard.css'

const employeeGrowthData = [
  { month: 'Jan', employees: 200 },
  { month: 'Feb', employees: 210 },
  { month: 'Mar', employees: 225 },
  { month: 'Apr', employees: 235 },
  { month: 'May', employees: 240 },
  { month: 'Jun', employees: 245 },
  { month: 'Jul', employees: 250 },
  { month: 'Aug', employees: 248 },
  { month: 'Sep', employees: 252 },
  { month: 'Oct', employees: 255 },
  { month: 'Nov', employees: 258 },
  { month: 'Dec', employees: 247 },
]

const departmentData = [
  { name: 'Engineering', value: 32.4, color: '#3B82F6' },
  { name: 'Sales', value: 19.8, color: '#F59E0B' },
  { name: 'Marketing', value: 17.2, color: '#10B981' },
  { name: 'Product', value: 14.5, color: '#8B5CF6' },
  { name: 'Design', value: 10.3, color: '#EF4444' },
  { name: 'HR', value: 5.73, color: '#06B6D4' },
]

const recentHires = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Engineer',
    department: 'Engineering',
    status: 'Active',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Emily Davis',
    role: 'Marketing Manager',
    department: 'Marketing',
    status: 'Onboarding',
    avatar: 'ED',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Sales Executive',
    department: 'Sales',
    status: 'Active',
    avatar: 'MB',
  },
]

const pendingLeaves = [
  {
    id: 1,
    name: 'John Smith',
    type: 'Vacation',
    dateRange: 'Dec 15 - Dec 22, 2024',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Lisa Anderson',
    type: 'Sick Leave',
    dateRange: 'Dec 18 - Dec 19, 2024',
    status: 'pending',
  },
  {
    id: 3,
    name: 'David Wilson',
    type: 'Personal',
    dateRange: 'Dec 20 - Dec 20, 2024',
    status: 'pending',
  },
]

const recentActivities = [
  {
    id: 1,
    icon: 'user-check',
    iconComponent: FiCheck,
    bgColor: '#DCFCE7',
    iconColor: '#16A34A',
    title: 'New employee onboarded',
    description: 'Sarah Johnson joined as Senior Developer in Engineering',
    time: '2 minutes ago',
  },
  {
    id: 2,
    icon: 'alert',
    iconComponent: FiAlertCircle,
    bgColor: '#FEF9C3',
    iconColor: '#CA8A04',
    title: 'Leave request approved',
    description: "John Smith's vacation leave for Dec 20-27 has been approved",
    time: '15 minutes ago',
  },
  {
    id: 3,
    icon: 'check',
    iconComponent: FiCheck,
    bgColor: '#DBEAFE',
    iconColor: '#2563EB',
    title: 'Performance review completed',
    description: 'Q4 performance reviews completed for Marketing team',
    time: '1 hour ago',
  },
  {
    id: 4,
    icon: 'briefcase',
    iconComponent: FiBriefcase,
    bgColor: '#F3E8FF',
    iconColor: '#9333EA',
    title: 'New job posting published',
    description: 'Senior Product Manager position opened in Product team',
    time: '2 hours ago',
  },
]

function HRMDashboard({ onSwitchModule }) {
  const [activeLeaveActions, setActiveLeaveActions] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const isOnboardingRoute = location.pathname === '/hrm/onboarding'

  const handleLeaveAction = (leaveId, action) => {
    setActiveLeaveActions((prev) => ({
      ...prev,
      [leaveId]: action,
    }))
  }

  return (
    <div className="hrm-dashboard-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />
      
      <main className="hrm-dashboard-main">
        {/* Header */}
        <header className="hrm-dashboard-header">
          <div className="hrm-header-content">
            <h1 className="hrm-dashboard-title">HRM Dashboard</h1>
            <nav className="hrm-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Dashboard</span>
            </nav>
          </div>
          <div className="hrm-header-actions">
            <button className="hrm-notification-btn" title="Notifications">
              <FiBell size={20} />
              <span className="hrm-notification-badge">3</span>
            </button>
            {isOnboardingRoute && (
              <button className="hrm-on-2-btn" onClick={() => navigate('/hrm/onboarding-2')}>
                On 2
              </button>
            )}
            <button className="hrm-new-employee-btn">
              <FiPlus size={16} />
              <span>New Employee</span>
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="hrm-stats-section">
          <div className="hrm-stat-card">
            <div className="hrm-stat-icon hrm-stat-icon-blue">
              <FiUsers size={24} />
            </div>
            <div className="hrm-stat-content">
              <div className="hrm-stat-label">Total Employees</div>
              <div className="hrm-stat-value">247</div>
              <div className="hrm-stat-change">+12% from last month</div>
            </div>
          </div>

          <div className="hrm-stat-card">
            <div className="hrm-stat-icon hrm-stat-icon-green">
              <FiPlus size={24} />
            </div>
            <div className="hrm-stat-content">
              <div className="hrm-stat-label">New Hires</div>
              <div className="hrm-stat-value">5</div>
              <div className="hrm-stat-change">+8% from last month</div>
            </div>
          </div>

          <div className="hrm-stat-card">
            <div className="hrm-stat-icon hrm-stat-icon-yellow">
              <FiClock size={24} />
            </div>
            <div className="hrm-stat-content">
              <div className="hrm-stat-label">Leave Requests</div>
              <div className="hrm-stat-value">12</div>
              <div className="hrm-stat-change">3 pending approval</div>
            </div>
          </div>

          <div className="hrm-stat-card">
            <div className="hrm-stat-icon hrm-stat-icon-purple">
              <FiBriefcase size={24} />
            </div>
            <div className="hrm-stat-content">
              <div className="hrm-stat-label">Open Positions</div>
              <div className="hrm-stat-value">18</div>
              <div className="hrm-stat-change">5 under review</div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="hrm-charts-section">
          {/* Employee Growth Chart */}
          <div className="hrm-chart-card">
            <h3 className="hrm-chart-title">Employee Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={employeeGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="employees"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department Distribution Chart */}
          <div className="hrm-chart-card">
            <h3 className="hrm-chart-title">Department Distribution</h3>
            <div className="hrm-pie-container">
              <ResponsiveContainer width={250} height={200}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx={120}
                    cy={100}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="hrm-pie-legend">
                {departmentData.map((dept) => (
                  <div key={dept.name} className="hrm-legend-item">
                    <span
                      className="hrm-legend-color"
                      style={{ backgroundColor: dept.color }}
                    />
                    <span className="hrm-legend-label">{dept.name}</span>
                    <span className="hrm-legend-value">{dept.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Hires Section */}
        <section className="hrm-recent-hires-section">
          <h3 className="hrm-section-title">Recent Hires</h3>
          <div className="hrm-hires-grid">
            {recentHires.map((hire) => (
              <div key={hire.id} className="hrm-hire-card">
                <div className="hrm-hire-avatar">{hire.avatar}</div>
                <div className="hrm-hire-content">
                  <div className="hrm-hire-name">{hire.name}</div>
                  <div className="hrm-hire-role">{hire.role}</div>
                  <div className="hrm-hire-department">{hire.department}</div>
                </div>
                <span
                  className={`hrm-hire-status ${hire.status === 'Active' ? 'active' : 'onboarding'}`}
                >
                  {hire.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pending Leaves Section */}
        <section className="hrm-pending-leaves-section">
          <h3 className="hrm-section-title">Pending Leave Requests</h3>
          <div className="hrm-leaves-list">
            {pendingLeaves.map((leave) => (
              <div key={leave.id} className="hrm-leave-item">
                <div className="hrm-leave-info">
                  <div className="hrm-leave-name">{leave.name}</div>
                  <div className="hrm-leave-type">{leave.type}</div>
                  <div className="hrm-leave-dates">{leave.dateRange}</div>
                </div>
                <div className="hrm-leave-actions">
                  <button
                    className={`hrm-leave-btn approve ${
                      activeLeaveActions[leave.id] === 'approved' ? 'active' : ''
                    }`}
                    onClick={() => handleLeaveAction(leave.id, 'approved')}
                  >
                    <FiCheck size={16} />
                    Approve
                  </button>
                  <button
                    className={`hrm-leave-btn reject ${
                      activeLeaveActions[leave.id] === 'rejected' ? 'active' : ''
                    }`}
                    onClick={() => handleLeaveAction(leave.id, 'rejected')}
                  >
                    <FiX size={16} />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pending Approvals Section */}
        <section className="hrm-pending-approvals-section">
          <h3 className="hrm-section-title">Pending Approvals</h3>
          <div className="hrm-approvals-card" onClick={() => navigate('/manager-approval')}>
            <div className="hrm-approvals-count">12</div>
            <div className="hrm-approvals-label">Pending Approvals</div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="hrm-recent-activity-section">
          <h3 className="hrm-section-title">Recent Activity</h3>
          <div className="hrm-activity-timeline">
            {recentActivities.map((activity) => {
              const IconComponent = activity.iconComponent
              return (
                <div key={activity.id} className="hrm-activity-item">
                  <div 
                    className="hrm-activity-icon"
                    style={{ backgroundColor: activity.bgColor }}
                  >
                    <IconComponent size={18} color={activity.iconColor} />
                  </div>
                  <div className="hrm-activity-content">
                    <div className="hrm-activity-title">{activity.title}</div>
                    <div className="hrm-activity-desc">{activity.description}</div>
                    <div className="hrm-activity-time">{activity.time}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HRMDashboard
