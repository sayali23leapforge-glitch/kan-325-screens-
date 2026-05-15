import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiDollarSign,
  FiUsers,
  FiBarChart2,
  FiClock,
  FiBriefcase,
  FiFilter,
  FiDownload,
  FiMoreVertical,
} from 'react-icons/fi'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import HRMSidebar from './HRMSidebar'
import './payroll-management-page.css'

const payrollTrendByRange = {
  '3M': [
    { month: 'Jan', payroll: 760 },
    { month: 'Feb', payroll: 790 },
    { month: 'Mar', payroll: 815 },
    { month: 'Apr', payroll: 805 },
    { month: 'May', payroll: 820 },
    { month: 'Jun', payroll: 830 },
  ],
  '6M': [
    { month: 'Jan', payroll: 760 },
    { month: 'Feb', payroll: 800 },
    { month: 'Mar', payroll: 825 },
    { month: 'Apr', payroll: 815 },
    { month: 'May', payroll: 835 },
    { month: 'Jun', payroll: 845 },
  ],
  '1Y': [
    { month: 'Jan', payroll: 720 },
    { month: 'Feb', payroll: 765 },
    { month: 'Mar', payroll: 790 },
    { month: 'Apr', payroll: 805 },
    { month: 'May', payroll: 825 },
    { month: 'Jun', payroll: 845 },
  ],
}

const statCards = [
  {
    id: 'total',
    title: 'Total Payroll',
    value: '$847K',
    badge: 'This Month',
    badgeClass: 'payroll-badge-green',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    Icon: FiDollarSign,
  },
  {
    id: 'paid',
    title: 'Employees Paid',
    value: '247',
    badge: 'Active',
    badgeClass: 'payroll-badge-blue',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    Icon: FiUsers,
  },
  {
    id: 'avg',
    title: 'Average Salary',
    value: '$3,431',
    badge: 'Avg',
    badgeClass: 'payroll-badge-purple',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    Icon: FiBarChart2,
  },
  {
    id: 'pending',
    title: 'Pending Approvals',
    value: '5',
    badge: 'Pending',
    badgeClass: 'payroll-badge-yellow',
    iconBg: '#FEF9C3',
    iconColor: '#CA8A04',
    Icon: FiClock,
  },
]

const deptBreakdown = [
  {
    name: 'Engineering',
    employees: '89 employees',
    amount: '$312K',
    share: '37%',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    iconBg: '#3B82F6',
  },
  {
    name: 'Sales',
    employees: '62 employees',
    amount: '$185K',
    share: '22%',
    bg: '#FAF5FF',
    border: '#E9D5FF',
    iconBg: '#A855F7',
  },
  {
    name: 'Marketing',
    employees: '39 employees',
    amount: '$142K',
    share: '17%',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    iconBg: '#22C55E',
  },
  {
    name: 'Design',
    employees: '28 employees',
    amount: '$98K',
    share: '12%',
    bg: '#FFF7ED',
    border: '#FED7AA',
    iconBg: '#F97316',
  },
  {
    name: 'HR & Admin',
    employees: '14 employees',
    amount: '$110K',
    share: '13%',
    bg: '#FEF2F2',
    border: '#FECACA',
    iconBg: '#EF4444',
  },
]

const payrollRows = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    code: 'ID: EMP001',
    avatar: 'SM',
    avatarColor: '#8B5CF6',
    department: 'Design',
    departmentClass: 'design',
    baseSalary: '$4,200',
    overtime: '$320',
    deductions: '$840',
    netPay: '$3,680',
    status: 'Paid',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    code: 'ID: EMP002',
    avatar: 'JR',
    avatarColor: '#3B82F6',
    department: 'Engineering',
    departmentClass: 'engineering',
    baseSalary: '$5,800',
    overtime: '$450',
    deductions: '$1,250',
    netPay: '$5,000',
    status: 'Paid',
  },
  {
    id: 3,
    name: 'Anna Thompson',
    code: 'ID: EMP003',
    avatar: 'AT',
    avatarColor: '#10B981',
    department: 'Marketing',
    departmentClass: 'marketing',
    baseSalary: '$3,900',
    overtime: '$180',
    deductions: '$816',
    netPay: '$3,264',
    status: 'Processing',
  },
  {
    id: 4,
    name: 'David Park',
    code: 'ID: EMP004',
    avatar: 'DP',
    avatarColor: '#F59E0B',
    department: 'Sales',
    departmentClass: 'sales',
    baseSalary: '$4,200',
    overtime: '$240',
    deductions: '$648',
    netPay: '$3,792',
    status: 'Paid',
  },
  {
    id: 5,
    name: 'Emily Watson',
    code: 'ID: EMP005',
    avatar: 'EW',
    avatarColor: '#EF4444',
    department: 'HR & Admin',
    departmentClass: 'hr',
    baseSalary: '$3,500',
    overtime: '$150',
    deductions: '$730',
    netPay: '$2,920',
    status: 'Pending',
  },
]

function PayrollManagementPage({ onSwitchModule }) {
  const [activeRange, setActiveRange] = useState('6M')
  const navigate = useNavigate()
  const chartData = payrollTrendByRange[activeRange]

  return (
    <div className="payroll-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="payroll-main">
        <header className="payroll-header">
          <div className="payroll-header-left">
            <h1 className="payroll-title">Payroll Management</h1>
            <nav className="payroll-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Payroll Management</span>
            </nav>
          </div>

          <div className="payroll-header-right">
            <button className="payroll-bell-btn" title="Notifications">
              <FiBell size={18} />
              <span className="payroll-bell-badge">3</span>
            </button>
            <button
              className="payroll-process-btn"
              type="button"
              onClick={() => navigate('/payroll/salary-lock')}
            >
              <FiBriefcase size={14} />
              Process Payroll
            </button>
          </div>
        </header>

        <div className="payroll-content">
          <section className="payroll-stats-row">
            {statCards.map((card) => (
              <article key={card.id} className="payroll-stat-card">
                <div className="payroll-stat-top">
                  <div className="payroll-stat-icon" style={{ backgroundColor: card.iconBg }}>
                    <card.Icon size={16} color={card.iconColor} />
                  </div>
                  <span className={`payroll-stat-badge ${card.badgeClass}`}>{card.badge}</span>
                </div>
                <div className="payroll-stat-value">{card.value}</div>
                <div className="payroll-stat-title">{card.title}</div>
              </article>
            ))}
          </section>

          <section className="payroll-mid-row">
            <div className="payroll-chart-card">
              <div className="payroll-card-header">
                <h2 className="payroll-card-title">Payroll Trends</h2>
                <div className="payroll-chart-tabs">
                  {['3M', '6M', '1Y'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      className={`payroll-chart-tab ${activeRange === range ? 'active' : ''}`}
                      onClick={() => setActiveRange(range)}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={210}>
                <AreaChart data={chartData} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="payrollFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#F1F5F9" strokeDasharray="2 2" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 10, fill: '#6B7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    ticks={[0, 200, 400, 600, 800]}
                    tick={{ fontSize: 10, fill: '#6B7280' }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 850]}
                  />
                  <Tooltip
                    formatter={(value) => [`$${value}K`, 'Payroll']}
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Area type="monotone" dataKey="payroll" fill="url(#payrollFill)" stroke="none" />
                  <Line type="monotone" dataKey="payroll" stroke="#3B82F6" strokeWidth={1.8} dot={false} />
                  <Legend
                    iconType="line"
                    wrapperStyle={{ display: 'none' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="payroll-dept-card">
              <h2 className="payroll-card-title">Department Breakdown</h2>
              <div className="payroll-dept-list">
                {deptBreakdown.map((dept) => (
                  <div
                    key={dept.name}
                    className="payroll-dept-item"
                    style={{ backgroundColor: dept.bg, borderColor: dept.border }}
                  >
                    <div className="payroll-dept-icon" style={{ backgroundColor: dept.iconBg }}>
                      <FiUsers size={12} color="#FFFFFF" />
                    </div>
                    <div className="payroll-dept-info">
                      <div className="payroll-dept-name">{dept.name}</div>
                      <div className="payroll-dept-sub">{dept.employees}</div>
                    </div>
                    <div className="payroll-dept-metrics">
                      <div className="payroll-dept-amount">{dept.amount}</div>
                      <div className="payroll-dept-share">{dept.share}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="payroll-table-card">
            <div className="payroll-card-header payroll-table-head">
              <h2 className="payroll-card-title">Payroll Records</h2>
              <div className="payroll-table-controls">
                <button className="payroll-control-btn" type="button">
                  <FiFilter size={12} />
                  Filter
                </button>
                <button className="payroll-control-btn" type="button">
                  <FiDownload size={12} />
                  Export
                </button>
              </div>
            </div>

            <div className="payroll-table-wrap">
              <table className="payroll-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Base Salary</th>
                    <th>Overtime</th>
                    <th>Deductions</th>
                    <th>Net Pay</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollRows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div className="payroll-employee-cell">
                          <span className="payroll-avatar" style={{ backgroundColor: row.avatarColor }}>
                            {row.avatar}
                          </span>
                          <div>
                            <div className="payroll-employee-name">{row.name}</div>
                            <div className="payroll-employee-code">{row.code}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`payroll-dept-chip ${row.departmentClass}`}>{row.department}</span>
                      </td>
                      <td>{row.baseSalary}</td>
                      <td>{row.overtime}</td>
                      <td>{row.deductions}</td>
                      <td className="payroll-net-pay">{row.netPay}</td>
                      <td>
                        <span className={`payroll-status ${row.status.toLowerCase()}`}>{row.status}</span>
                      </td>
                      <td>
                        <button type="button" className="payroll-row-action-btn" title="More">
                          <FiMoreVertical size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="payroll-pagination">
              <span className="payroll-pagination-text">Showing 1 to 5 of 247 entries</span>
              <div className="payroll-pagination-btns">
                <button type="button" className="payroll-page-btn">Previous</button>
                <button type="button" className="payroll-page-btn active">1</button>
                <button type="button" className="payroll-page-btn">2</button>
                <button type="button" className="payroll-page-btn">3</button>
                <button type="button" className="payroll-page-btn">Next</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PayrollManagementPage
