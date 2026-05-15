import {
  FiBell,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiEye,
  FiFilter,
  FiPlus,
  FiSearch,
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './leave-management-page.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const stats = [
  { title: 'Pending Approvals', value: '23', badge: 'Pending', tone: 'orange', icon: FiClock },
  { title: 'Approved This Month', value: '156', badge: '+12%', tone: 'green', icon: FiCheckCircle },
  { title: 'Employees On Leave', value: '34', badge: 'Today', tone: 'blue', icon: FiUsers },
  { title: 'Days Per Employee', value: '18.5', badge: 'Avg', tone: 'purple', icon: FiTrendingUp },
]

const chartData = {
  labels: ['Annual Leave', 'Sick Leave', 'Casual Leave', 'Maternity', 'Unpaid Leave'],
  datasets: [
    {
      data: [1847, 892, 1234, 456, 178],
      backgroundColor: ['#3B82F6', '#EF4444', '#10B981', '#A855F7', '#F97316'],
      borderWidth: 0,
      borderRadius: {
        topLeft: 6,
        topRight: 6,
        bottomLeft: 0,
        bottomRight: 0,
      },
      borderSkipped: 'bottom',
      barThickness: 60,
      barPercentage: 0.6,
      categoryPercentage: 0.5,
    },
  ],
}

const chartOptions = {
  responsive: false,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        drawTicks: false,
      },
      border: {
        display: true,
        color: '#E5E7EB',
        width: 1,
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
        },
        minRotation: 45,
        maxRotation: 45,
        align: 'end',
        padding: 14,
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 1800,
      ticks: {
        stepSize: 200,
        color: '#6B7280',
        font: {
          size: 12,
        },
        padding: 8,
      },
      grid: {
        color: '#E5E7EB',
        lineWidth: 1,
        drawBorder: false,
      },
      border: {
        display: true,
        color: '#E5E7EB',
        width: 1,
      },
    },
  },
}

const balanceRows = [
  { label: 'Annual Leave', value: '1,847 days', color: 'blue', width: '68%' },
  { label: 'Sick Leave', value: '892 days', color: 'red', width: '45%' },
  { label: 'Casual Leave', value: '1,234 days', color: 'green', width: '58%' },
  { label: 'Maternity', value: '456 days', color: 'purple', width: '32%' },
  { label: 'Unpaid Leave', value: '178 days', color: 'orange', width: '15%' },
]

const requests = [
  {
    id: 1,
    initials: 'SJ',
    employee: 'Sarah Johnson',
    role: 'Marketing Manager',
    leaveType: 'Annual Leave',
    typeClass: 'annual',
    startDate: 'Dec 20, 2024',
    endDate: 'Dec 27, 2024',
    days: '7',
    status: 'Pending',
    statusClass: 'pending',
  },
  {
    id: 2,
    initials: 'DL',
    employee: 'David Lee',
    role: 'Software Engineer',
    leaveType: 'Sick Leave',
    typeClass: 'sick',
    startDate: 'Dec 18, 2024',
    endDate: 'Dec 19, 2024',
    days: '2',
    status: 'Approved',
    statusClass: 'approved',
  },
  {
    id: 3,
    initials: 'EW',
    employee: 'Emma Wilson',
    role: 'Product Designer',
    leaveType: 'Casual Leave',
    typeClass: 'casual',
    startDate: 'Dec 22, 2024',
    endDate: 'Dec 22, 2024',
    days: '1',
    status: 'Pending',
    statusClass: 'pending',
  },
  {
    id: 4,
    initials: 'JB',
    employee: 'James Brown',
    role: 'Sales Executive',
    leaveType: 'Annual Leave',
    typeClass: 'annual',
    startDate: 'Dec 15, 2024',
    endDate: 'Dec 17, 2024',
    days: '3',
    status: 'Approved',
    statusClass: 'approved',
  },
  {
    id: 5,
    initials: 'LM',
    employee: 'Lisa Martinez',
    role: 'HR Specialist',
    leaveType: 'Maternity',
    typeClass: 'maternity',
    startDate: 'Jan 05, 2025',
    endDate: 'Apr 05, 2025',
    days: '90',
    status: 'Pending',
    statusClass: 'pending',
  },
]

function LeaveManagementPage({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="leave-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="leave-main">
        <header className="leave-header">
          <div>
            <h1 className="leave-title">Leave Management</h1>
            <div className="leave-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>HRM</span>
              <span>&gt;</span>
              <span>Leave Dashboard</span>
            </div>
          </div>

          <div className="leave-header-right">
            <button type="button" className="leave-bell-btn" aria-label="Notifications">
              <FiBell size={16} />
              <span className="leave-bell-badge">7</span>
            </button>
            <button
              type="button"
              className="leave-settings-btn"
              aria-label="Leave Policy Setup"
              onClick={() => navigate('/leave/policy-setup')}
            >
              <FiSettings size={20} />
            </button>
            <button
              type="button"
              className="leave-review-btn"
              onClick={() => navigate('/hr/approval')}
            >
              <FiEye size={14} />
              Review Request
            </button>
            <button
              type="button"
              className="leave-request-btn"
              onClick={() => navigate('/hrm/leaves/apply')}
            >
              <FiPlus size={14} />
              New Request
            </button>
          </div>
        </header>

        <section className="leave-content">
          <div className="leave-stats-grid">
            {stats.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className="leave-stat-card"
                  onClick={card.title === 'Pending Approvals' ? () => navigate('/hrm/leave-management/manager-approval') : undefined}
                >
                  <div className="leave-stat-top">
                    <span className={`leave-stat-icon ${card.tone}`}>
                      <Icon size={13} />
                    </span>
                    <span className={`leave-stat-badge ${card.tone}`}>{card.badge}</span>
                  </div>
                  <div className="leave-stat-value">{card.value}</div>
                  <div className="leave-stat-label">{card.title}</div>
                </article>
              )
            })}
          </div>

          <div className="leave-middle-grid">
            <section className="leave-chart-card">
              <div className="leave-card-header">
                <h2>Leave Distribution by Type</h2>
                <button type="button" className="leave-select-btn">This Month</button>
              </div>

              <div className="leave-chart-wrap">
                <div className="leave-chart-canvas-wrap">
                  <Bar data={chartData} options={chartOptions} width={700} height={330} />
                </div>
              </div>
            </section>

            <section className="leave-balance-card">
              <h2>Company Leave Balance</h2>
              <div className="leave-balance-list">
                {balanceRows.map((item) => (
                  <div key={item.label} className="leave-balance-item">
                    <div className="leave-balance-row">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <div className="leave-track">
                      <div className={`leave-progress ${item.color}`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="leave-toolbar">
            <div className="leave-date">
              <FiCalendar size={13} />
              <span>December 18, 2024</span>
            </div>

            <div className="leave-toolbar-right">
              <div className="leave-tabs">
                <button type="button" className="active">All</button>
                <button type="button">Pending</button>
                <button type="button">Approved</button>
                <button type="button">Rejected</button>
              </div>

              <div className="leave-toolbar-actions">
                <button type="button" className="leave-control-btn"><FiFilter size={13} />Filter</button>
                <button type="button" className="leave-control-btn"><FiSearch size={13} />Search</button>
              </div>
            </div>
          </div>

          <section className="leave-table-card">
            <div className="leave-table-header">
              <h2>Recent Leave Requests</h2>
            </div>

            <div className="leave-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Days</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div className="leave-employee-cell">
                          <span className="leave-avatar">{row.initials}</span>
                          <div>
                            <div className="leave-employee-name">{row.employee}</div>
                            <div className="leave-employee-role">{row.role}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`leave-type-pill ${row.typeClass}`}>{row.leaveType}</span>
                      </td>
                      <td>{row.startDate}</td>
                      <td>{row.endDate}</td>
                      <td className="leave-days">{row.days}</td>
                      <td>
                        <span className={`leave-status-pill ${row.statusClass}`}>{row.status}</span>
                      </td>
                      <td>
                        {row.status === 'Pending' ? (
                          <div className="leave-actions">
                            <button type="button" className="approve" aria-label="Approve"><FiCheck size={12} /></button>
                            <button type="button" className="reject" aria-label="Reject"><FiX size={12} /></button>
                            <button type="button" className="view" aria-label="View"><FiEye size={12} /></button>
                          </div>
                        ) : (
                          <button type="button" className="view single" aria-label="View"><FiEye size={12} /></button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="leave-table-footer">
              <span>Showing 1 to 5 of 23 entries</span>
              <div className="leave-pagination">
                <button type="button">Previous</button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">Next</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default LeaveManagementPage
