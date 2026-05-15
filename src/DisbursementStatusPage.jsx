import { FiAlertCircle, FiBell, FiCheckCircle, FiChevronRight, FiClock, FiHelpCircle, FiSettings, FiXCircle } from 'react-icons/fi'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './disbursement-status-page.css'

const progressData = [
  { name: 'Dec 1', completed: 58, processing: 42 },
  { name: 'Dec 2', completed: 65, processing: 35 },
  { name: 'Dec 3', completed: 74, processing: 26 },
  { name: 'Dec 4', completed: 82, processing: 18 },
  { name: 'Dec 5', completed: 88, processing: 12 },
  { name: 'Dec 6', completed: 92, processing: 8 },
  { name: 'Dec 7', completed: 96, processing: 4 },
]

const pieData = [
  { name: 'Completed', value: 90, color: '#22C55E' },
  { name: 'Processing', value: 7, color: '#EAB308' },
  { name: 'Failed', value: 3, color: '#EF4444' },
]

const bankRows = [
  { name: 'Chase Bank', employees: 92, percent: 98, color: '#22C55E' },
  { name: 'Wells Fargo', employees: 85, percent: 95, color: '#22C55E' },
  { name: 'Bank of America', employees: 46, percent: 74, color: '#EAB308' },
]

const recentActivityRows = [
  {
    name: 'James Johnson',
    status: 'Completed',
    detail: 'Salary disbursed to SBI account',
    time: '2 minutes ago',
    tone: 'green',
    Icon: FiCheckCircle,
  },
  {
    name: 'Michael Chen',
    status: 'Completed',
    detail: 'Salary disbursed to HDFC account',
    time: '8 minutes ago',
    tone: 'green',
    Icon: FiCheckCircle,
  },
  {
    name: 'David Wilson',
    status: 'Processing',
    detail: 'Transfer in progress',
    time: '12 minutes ago',
    tone: 'yellow',
    Icon: FiClock,
  },
  {
    name: 'Emily Clark',
    status: 'Failed',
    detail: 'Invalid account details',
    time: '15 minutes ago',
    tone: 'red',
    Icon: FiXCircle,
  },
]

const failedRows = [
  { employee: 'Emily Clark', amount: '$5,200', bank: 'SBI', reason: 'Invalid Account Number' },
  { employee: 'John Anderson', amount: '$4,850', bank: 'Axis Bank', reason: 'Insufficient Bank Details' },
]

function PayrollSidebarCompact() {
  return (
    <aside className="ds-sidebar">
      <div className="ds-brand">
        <span className="ds-brand-icon" />
        <div>
          <strong>Karnovate</strong>
          <small>Enterprise Suite</small>
        </div>
      </div>

      <div className="ds-sidebar-user">
        <strong>Payroll Admin</strong>
        <small>Human Resources</small>
      </div>

      <nav className="ds-nav">
        <p className="ds-nav-section">Navigation</p>
        <button type="button" className="ds-nav-item">Dashboard</button>

        <p className="ds-nav-section">Payroll Management</p>
        <button type="button" className="ds-nav-item">Employee Directory</button>
        <button type="button" className="ds-nav-item">Onboarding</button>
        <button type="button" className="ds-nav-item">Attendance</button>
        <button type="button" className="ds-nav-item">Leave Management</button>
        <button type="button" className="ds-nav-item ds-nav-item-active">Payroll</button>
        <button type="button" className="ds-nav-item">Tax Management</button>

        <p className="ds-nav-section">Analytics</p>
        <button type="button" className="ds-nav-item">Reports</button>
        <button type="button" className="ds-nav-item">Settings</button>
      </nav>

      <div className="ds-sidebar-footer">
        <button type="button"><FiHelpCircle size={14} /> Help Center</button>
        <button type="button"><FiSettings size={14} /> Settings</button>
      </div>
    </aside>
  )
}

function DisbursementStatusPage() {
  return (
    <div className="ds-layout">
      <PayrollSidebarCompact />

      <main className="ds-main">
        <header className="ds-header">
          <div>
            <h1>Disbursement Status</h1>
            <div className="ds-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Disbursement</span>
            </div>
          </div>

          <button type="button" className="ds-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        <div className="ds-content">
          <section className="ds-banner">
            <div className="ds-banner-left">
              <span className="ds-banner-icon"><FiCheckCircle size={17} /></span>
              <div>
                <h2>Salary Disbursement Tracking</h2>
                <p>Monitor payroll disbursement status and transaction details</p>
              </div>
            </div>
            <div className="ds-banner-pattern" aria-hidden="true">
              <span />
              <span />
            </div>
          </section>

          <section className="ds-stats-grid">
            <article className="ds-stat-card green">
              <div className="ds-stat-top">
                <span className="ds-stat-icon"><FiCheckCircle size={14} /></span>
                <span className="ds-stat-badge">Ready</span>
              </div>
              <strong>223</strong>
              <p>Successfully Disbursed</p>
            </article>

            <article className="ds-stat-card yellow">
              <div className="ds-stat-top">
                <span className="ds-stat-icon"><FiClock size={14} /></span>
                <span className="ds-stat-badge">Pending</span>
              </div>
              <strong>18</strong>
              <p>In Processing</p>
            </article>

            <article className="ds-stat-card red">
              <div className="ds-stat-top">
                <span className="ds-stat-icon"><FiXCircle size={14} /></span>
                <span className="ds-stat-badge">Alert</span>
              </div>
              <strong>6</strong>
              <p>Failed Transactions</p>
            </article>

            <article className="ds-stat-card blue">
              <div className="ds-stat-top">
                <span className="ds-stat-icon">$</span>
                <span className="ds-stat-badge">Value</span>
              </div>
              <strong>$1.39M</strong>
              <p>Total Disbursed</p>
            </article>
          </section>

          <section className="ds-analytics-grid">
            <article className="ds-card ds-progress-card">
              <div className="ds-card-head">
                <h3>Disbursement Progress</h3>
              </div>
              <div className="ds-card-body">
                <ResponsiveContainer width="100%" height={215}>
                  <BarChart data={progressData} barGap={5} barCategoryGap={18}>
                    <CartesianGrid stroke="#F1F5F9" vertical={false} strokeDasharray="0" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: '#94A3B8', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#94A3B8', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      width={28}
                    />
                    <Tooltip />
                    <Bar dataKey="completed" stackId="a" fill="#22C55E" radius={[3, 3, 0, 0]} maxBarSize={26} />
                    <Bar dataKey="processing" stackId="a" fill="#EAB308" radius={[3, 3, 0, 0]} maxBarSize={26} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="ds-card ds-breakdown-card">
              <div className="ds-card-head">
                <h3>Status Breakdown</h3>
              </div>
              <div className="ds-breakdown-body">
                <ResponsiveContainer width="100%" height={170}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={74}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </article>
          </section>

          <section className="ds-middle-grid">
            <article className="ds-card ds-bank-card">
              <div className="ds-card-head">
                <h3>Bank-wise Disbursement</h3>
              </div>
              <div className="ds-bank-list">
                {bankRows.map((row) => (
                  <div key={row.name} className="ds-bank-item">
                    <div className="ds-bank-top">
                      <div>
                        <strong>{row.name}</strong>
                        <small>{row.employees} employees</small>
                      </div>
                      <span>{row.percent}%</span>
                    </div>
                    <div className="ds-progress-track">
                      <div className="ds-progress-fill" style={{ width: `${row.percent}%`, background: row.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="ds-card ds-activity-card">
              <div className="ds-card-head">
                <h3>Recent Activity</h3>
              </div>
              <div className="ds-activity-list">
                {recentActivityRows.map((item) => (
                  <div key={`${item.name}-${item.time}`} className="ds-activity-item">
                    <span className={`ds-activity-icon ${item.tone}`}><item.Icon size={12} /></span>
                    <div className="ds-activity-copy">
                      <strong>{item.name} - {item.status}</strong>
                      <p>{item.detail}</p>
                      <small>{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="ds-card ds-failed-card">
            <div className="ds-card-head">
              <h3>Failed Transactions</h3>
              <button type="button" className="ds-retry-all-btn">Retry All</button>
            </div>

            <div className="ds-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Amount</th>
                    <th>Bank</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {failedRows.map((row) => (
                    <tr key={row.employee}>
                      <td>{row.employee}</td>
                      <td>{row.amount}</td>
                      <td>{row.bank}</td>
                      <td><span className="ds-failed-badge">{row.reason}</span></td>
                      <td><button type="button" className="ds-retry-btn">Retry</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="ds-card ds-table-card">
            <div className="ds-card-head">
              <h3>All Disbursements</h3>
            </div>
            <div className="ds-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Amount</th>
                    <th>Bank</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sarah Johnson</td>
                    <td>$8,200</td>
                    <td>Chase Bank</td>
                    <td><span className="ds-status success">Completed</span></td>
                    <td>Dec 31, 2024</td>
                  </tr>
                  <tr>
                    <td>Michael Chen</td>
                    <td>$6,250</td>
                    <td>Wells Fargo</td>
                    <td><span className="ds-status success">Completed</span></td>
                    <td>Dec 31, 2024</td>
                  </tr>
                  <tr>
                    <td>David Wilson</td>
                    <td>$7,400</td>
                    <td>Bank of America</td>
                    <td><span className="ds-status pending">Processing</span></td>
                    <td>Dec 31, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DisbursementStatusPage
