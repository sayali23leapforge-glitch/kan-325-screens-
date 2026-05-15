import { useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiCheck,
  FiAlertCircle,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiPlus,
} from 'react-icons/fi'
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
  ResponsiveContainer,
} from 'recharts'
import PayrollSidebar from './PayrollSidebar'
import './payroll-dashboard-page.css'

/* ── Chart data ──────────────────────────────────── */
const payrollTrendData = [
  { month: 'Jan', amount: 782 },
  { month: 'Feb', amount: 786 },
  { month: 'Mar', amount: 791 },
  { month: 'Apr', amount: 796 },
  { month: 'May', amount: 803 },
  { month: 'Jun', amount: 812 },
  { month: 'Jul', amount: 808 },
  { month: 'Aug', amount: 818 },
  { month: 'Sep', amount: 826 },
  { month: 'Oct', amount: 836 },
  { month: 'Nov', amount: 842 },
  { month: 'Dec', amount: 847 },
]

const departmentData = [
  { name: 'Engineering', value: 37.8, color: '#3B82F6' },
  { name: 'Sales',       value: 21.8, color: '#10B981' },
  { name: 'Marketing',   value: 14.8, color: '#F59E0B' },
  { name: 'HR',          value: 11.2, color: '#EF4444' },
  { name: 'Finance',     value: 10.3, color: '#8B5CF6' },
  { name: 'Operations',  value: 4.1,  color: '#06B6D4' },
]

/* ── Stats ───────────────────────────────────────── */
const statsCards = [
  {
    id: 'total',
    value: '$847,250',
    label: 'Total Payroll (This Month)',
    badge: '+5.2%',
    badgeTone: 'green',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    Icon: FiDollarSign,
  },
  {
    id: 'employees',
    value: '247',
    label: 'Active Employees',
    badge: '+2',
    badgeTone: 'green',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    Icon: FiUsers,
  },
  {
    id: 'hours',
    value: '2,847',
    label: 'Hours Worked',
    badge: '15',
    badgeTone: 'orange',
    iconBg: '#FFEDD5',
    iconColor: '#EA580C',
    Icon: FiClock,
  },
  {
    id: 'pending',
    value: '7',
    label: 'Pending Approvals',
    badge: '2',
    badgeTone: 'red',
    iconBg: '#FEE2E2',
    iconColor: '#DC2626',
    Icon: FiAlertCircle,
  },
]

/* ── Activity ────────────────────────────────────── */
const recentActivity = [
  {
    id: 1,
    Icon: FiCheck,
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    title: 'Payroll processed successfully',
    desc: 'Monthly payroll for December 2024 completed for all employees',
    time: '5 minutes ago',
  },
  {
    id: 2,
    Icon: FiUsers,
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    title: 'New employee added',
    desc: 'John Martinez joined the Engineering department',
    time: '2 hours ago',
  },
  {
    id: 3,
    Icon: FiClock,
    iconBg: '#FFEDD5',
    iconColor: '#EA580C',
    title: 'Overtime hours submitted',
    desc: '15 employees submitted overtime for approval',
    time: '4 hours ago',
  },
  {
    id: 4,
    Icon: FiAlertCircle,
    iconBg: '#FEE2E2',
    iconColor: '#DC2626',
    title: 'Tax compliance alert',
    desc: 'Q4 tax filing deadline approaching in 7 days',
    time: '1 day ago',
  },
]

/* ── Pie custom label ────────────────────────────── */
const RADIAN = Math.PI / 180
function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }) {
  if (value < 5) return null
  const r = innerRadius + (outerRadius - innerRadius) * 0.58
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={10}
      fontFamily="Inter"
      fontWeight={400}
    >
      {`${value}%`}
    </text>
  )
}

/* ── Tooltip ─────────────────────────────────────── */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="pdb-tooltip">
      <p className="pdb-tooltip-label">{label}</p>
      <p className="pdb-tooltip-value">${payload[0].value}k</p>
    </div>
  )
}

function PayrollDashboardPage({ onSwitchModule }) {
  const navigate = useNavigate()

  return (
    <div className="pdb-layout">
      <PayrollSidebar />

      <main className="pdb-main">
        {/* Header */}
        <header className="pdb-header">
          <div className="pdb-header-left">
            <h1>Payroll Dashboard</h1>
            <nav className="pdb-breadcrumb">
              <span className="pdb-bc-link">Home</span>
              <span className="pdb-bc-sep">&gt;</span>
              <span className="pdb-bc-link">Payroll</span>
              <span className="pdb-bc-sep">&gt;</span>
              <span className="pdb-bc-current">Dashboard</span>
            </nav>
          </div>
          <div className="pdb-header-right">
            <button type="button" className="pdb-bell" aria-label="Notifications">
              <FiBell size={16} />
              <span className="pdb-bell-badge">3</span>
            </button>
            <button
              type="button"
              className="pdb-run-payroll-btn"
              onClick={() => navigate('/payroll/payslip-generation')}
            >
              <FiPlus size={13} />
              Run Payroll
            </button>
          </div>
        </header>

        <div className="pdb-content">
          {/* Stats */}
          <section className="pdb-stats-grid">
            {statsCards.map((card) => (
              <article key={card.id} className="pdb-stat-card">
                <div className="pdb-stat-top">
                  <div
                    className="pdb-stat-icon"
                    style={{ background: card.iconBg, color: card.iconColor }}
                  >
                    <card.Icon size={20} />
                  </div>
                  <span className={`pdb-stat-badge pdb-badge-${card.badgeTone}`}>
                    {card.badge}
                  </span>
                </div>
                <strong className="pdb-stat-value">{card.value}</strong>
                <p className="pdb-stat-label">{card.label}</p>
              </article>
            ))}
          </section>

          {/* Charts row */}
          <div className="pdb-charts-row">
            {/* Payroll Trends */}
            <section className="pdb-chart-card pdb-trends-card">
              <div className="pdb-chart-header">
                <h2>Payroll Trends</h2>
              </div>
              <div className="pdb-chart-body">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart
                    data={payrollTrendData}
                    margin={{ top: 10, right: 16, left: 4, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: '#444' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[780, 850]}
                      tickCount={8}
                      tickFormatter={(v) => `${v}k`}
                      tick={{ fontSize: 11, fill: '#444' }}
                      axisLine={false}
                      tickLine={false}
                      width={38}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#F0A83C"
                      strokeWidth={2.5}
                      dot={{ fill: '#F0A83C', r: 3.5, strokeWidth: 0 }}
                      activeDot={{ r: 5, fill: '#F0A83C' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Department Costs */}
            <section className="pdb-chart-card pdb-dept-card">
              <div className="pdb-chart-header">
                <h2>Department Costs</h2>
              </div>
              <div className="pdb-dept-body">
                <ResponsiveContainer width="100%" height={210}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      paddingAngle={0}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      labelLine={false}
                      label={PieLabel}
                    >
                      {departmentData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v, name) => [`${v}%`, name]}
                      contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #E5E7EB' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <ul className="pdb-dept-legend">
                  {departmentData.map((d) => (
                    <li key={d.name}>
                      <span className="pdb-legend-dot" style={{ background: d.color }} />
                      <span className="pdb-legend-name">{d.name}</span>
                      <span className="pdb-legend-pct">{d.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Recent Payroll Activity */}
          <section className="pdb-activity-card">
            <div className="pdb-activity-header">
              <h2>Recent Payroll Activity</h2>
            </div>
            <div className="pdb-activity-list">
              {recentActivity.map((item) => (
                <div key={item.id} className="pdb-activity-item">
                  <span
                    className="pdb-activity-icon"
                    style={{ background: item.iconBg, color: item.iconColor }}
                  >
                    <item.Icon size={14} />
                  </span>
                  <div className="pdb-activity-text">
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                    <small>{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PayrollDashboardPage
