import { FiBarChart2, FiBell, FiDownload, FiFileText, FiLock, FiSearch, FiShield, FiUsers } from 'react-icons/fi'
import PayrollSidebar from './PayrollSidebar'
import './payroll-archive-page.css'

const statCards = [
  {
    id: 'periods',
    value: '60',
    label: 'Archived Payroll Periods',
    badge: 'PDF',
    tone: 'blue',
    Icon: FiFileText,
  },
  {
    id: 'employees',
    value: '2,847',
    label: 'Total Records Archived',
    badge: 'Active',
    tone: 'green',
    Icon: FiUsers,
  },
  {
    id: 'access',
    value: '312',
    label: 'Authorized Employees',
    badge: 'Audit',
    tone: 'purple',
    Icon: FiShield,
  },
  {
    id: 'storage',
    value: '1.2GB',
    label: 'Storage Consumption',
    badge: 'Secure',
    tone: 'orange',
    Icon: FiLock,
  },
]

const trendBars = [
  { label: 'Aug', value: 64 },
  { label: 'Sep', value: 69 },
  { label: 'Oct', value: 77 },
  { label: 'Nov', value: 85 },
  { label: 'Dec', value: 89 },
]

const quickAccessRows = [
  { period: 'December 2024', meta: '247 employees • $942,000', status: 'Completed' },
  { period: 'November 2024', meta: '244 employees • $918,450', status: 'Completed' },
  { period: 'October 2024', meta: '242 employees • $904,120', status: 'Completed' },
]

const archiveRows = [
  { period: 'December 2024', records: '247', amount: '$942,000', status: 'Completed' },
  { period: 'November 2024', records: '244', amount: '$918,450', status: 'Completed' },
  { period: 'October 2024', records: '242', amount: '$904,120', status: 'Completed' },
  { period: 'September 2024', records: '240', amount: '$896,510', status: 'Completed' },
  { period: 'August 2024', records: '238', amount: '$884,175', status: 'Completed' },
]

function toneClass(tone) {
  if (tone === 'blue') return 'pap-tone-blue'
  if (tone === 'green') return 'pap-tone-green'
  if (tone === 'purple') return 'pap-tone-purple'
  return 'pap-tone-orange'
}

function PayrollArchivePage() {
  return (
    <div className="pap-layout">
      <PayrollSidebar />

      <main className="pap-main">
        <header className="pap-header">
          <div>
            <h1>Payroll Archive</h1>
            <div className="pap-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Archive</span>
            </div>
          </div>

          <button type="button" className="pap-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>2</span>
          </button>
        </header>

        <div className="pap-content">
          <section className="pap-hero">
            <div className="pap-hero-left">
              <span className="pap-hero-icon"><FiBarChart2 size={16} /></span>
              <div>
                <h2>Historical Payroll Records</h2>
                <p>Access complete payroll data archives and documents of all periods</p>
                <div className="pap-hero-meta">
                  <span>Total Records: 2,847 Employees</span>
                  <span>Archive Size: 1.2GB</span>
                  <span>Status: 247 Files</span>
                </div>
              </div>
            </div>
            <div className="pap-hero-pattern" aria-hidden="true">
              <span />
              <span />
            </div>
          </section>

          <section className="pap-stats-grid">
            {statCards.map((card) => (
              <article key={card.id} className="pap-stat-card">
                <div className="pap-stat-top">
                  <span className={`pap-stat-icon ${toneClass(card.tone)}`}><card.Icon size={14} /></span>
                  <span className={`pap-stat-badge ${toneClass(card.tone)}`}>{card.badge}</span>
                </div>
                <strong>{card.value}</strong>
                <p>{card.label}</p>
              </article>
            ))}
          </section>

          <section className="pap-analytics-grid">
            <article className="pap-card pap-trends-card">
              <div className="pap-card-head">
                <h3>Yearly Payroll Trends</h3>
                <span>YTD View</span>
              </div>

              <div className="pap-bars-wrap">
                <div className="pap-y-axis">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                </div>
                <div className="pap-bars-grid">
                  {trendBars.map((bar) => (
                    <div key={bar.label} className="pap-bar-col">
                      <div className="pap-bar-track">
                        <div className="pap-bar-fill" style={{ height: `${bar.value}%` }} />
                      </div>
                      <span>{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="pap-card pap-quick-card">
              <div className="pap-card-head">
                <h3>Quick Access</h3>
                <span>Recent Periods</span>
              </div>
              <div className="pap-quick-list">
                {quickAccessRows.map((row) => (
                  <div key={row.period} className="pap-quick-item">
                    <div>
                      <strong>{row.period}</strong>
                      <p>{row.meta}</p>
                    </div>
                    <span>{row.status}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="pap-card pap-search-card">
            <div className="pap-card-head">
              <h3>Search Archives</h3>
              <span>Find payroll records by period and criteria</span>
            </div>

            <div className="pap-search-grid">
              <select defaultValue="All Years">
                <option>All Years</option>
                <option>2024</option>
                <option>2023</option>
              </select>
              <select defaultValue="All Months">
                <option>All Months</option>
                <option>December</option>
                <option>November</option>
              </select>
              <select defaultValue="All Departments">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>HR</option>
              </select>
              <div className="pap-search-input">
                <FiSearch size={14} />
                <input type="text" placeholder="Search employees..." />
              </div>
            </div>

            <div className="pap-search-actions">
              <button type="button" className="pap-btn blue">Search</button>
              <button type="button" className="pap-btn gray">Reset</button>
              <button type="button" className="pap-btn white"><FiDownload size={13} /> Export Records</button>
            </div>
          </section>

          <section className="pap-card pap-table-card">
            <div className="pap-table-head">
              <h3>Payroll Archive</h3>
              <div>
                <button type="button" className="pap-btn green"><FiDownload size={13} /> Export to Excel</button>
                <button type="button" className="pap-btn red">Generate Report</button>
              </div>
            </div>

            <div className="pap-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Records</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {archiveRows.map((row) => (
                    <tr key={row.period}>
                      <td>{row.period}</td>
                      <td>{row.records}</td>
                      <td>{row.amount}</td>
                      <td><span className="pap-completed">{row.status}</span></td>
                      <td className="pap-action-links"><button type="button">View</button><button type="button">Download</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pap-pagination">
              <span>Showing 1-5 of 60 archive entries</span>
              <div>
                <button type="button">Previous</button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">Next</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PayrollArchivePage
