import { useEffect, useMemo, useState } from 'react'
import {
  FiBell,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiDownload,
  FiEye,
  FiFileText,
  FiRotateCcw,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HRMSidebar from './HRMSidebar'
import './generate-draft-payroll.css'

const previewRows = [
  { name: 'Sarah Johnson', role: 'Senior Developer', pay: '$8,200', avatar: 'SJ' },
  { name: 'James Anderson', role: 'Product Manager', pay: '$6,250', avatar: 'JA' },
  { name: 'David Martinez', role: 'Sales Lead', pay: '$7,400', avatar: 'DM' },
  { name: 'Emily Wilson', role: 'HR Specialist', pay: '$5,910', avatar: 'EW' },
  { name: 'Robert Chen', role: 'Finance Analyst', pay: '$6,780', avatar: 'RC' },
]

const recentDraftRows = [
  {
    draftId: 'DRF-2024-12-001',
    period: 'Dec 2024',
    generated: 'Dec 28, 2024',
    status: 'Approved',
    amount: '$915,450',
  },
  {
    draftId: 'DRF-2024-11-001',
    period: 'Nov 2024',
    generated: 'Nov 27, 2024',
    status: 'Processed',
    amount: '$908,200',
  },
  {
    draftId: 'DRF-2024-10-001',
    period: 'Oct 2024',
    generated: 'Oct 29, 2024',
    status: 'Processed',
    amount: '$902,850',
  },
]

function GenerateDraftPayroll({ onSwitchModule }) {
  const navigate = useNavigate()
  const [isGenerating, setIsGenerating] = useState(false)
  const [stepIndex, setStepIndex] = useState(1)
  const [hasGeneratedDraft, setHasGeneratedDraft] = useState(
    sessionStorage.getItem('payrollDraftGenerated') === 'true',
  )

  useEffect(() => {
    const isLocked = sessionStorage.getItem('payrollPeriodLocked') === 'true'

    if (!isLocked) {
      window.alert('Please lock the payroll period before generating a draft payroll.')
      navigate('/payroll/salary-lock', { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    if (!isGenerating) {
      return undefined
    }

    const timers = [
      setTimeout(() => setStepIndex(2), 900),
      setTimeout(() => setStepIndex(3), 1800),
      setTimeout(() => setStepIndex(4), 2700),
      setTimeout(() => {
        setIsGenerating(false)
        setHasGeneratedDraft(true)
        sessionStorage.setItem('payrollDraftGenerated', 'true')
        sessionStorage.setItem('payrollDraftId', 'DRF-2024-12-002')
        sessionStorage.setItem('payrollDraftGeneratedDate', 'Dec 29, 2024')
        navigate('/payroll/review')
      }, 3400),
    ]

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [isGenerating])

  const steps = useMemo(
    () => [
      'Employee Data Validation',
      'Attendance Processing',
      'Salary Calculations',
      'Tax Calculations',
      'Final Review',
    ],
    [],
  )

  const getStepClass = (index) => {
    if (index < stepIndex) {
      return 'completed'
    }
    if (index === stepIndex) {
      return 'progress'
    }
    return 'pending'
  }

  return (
    <div className="gdp-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="gdp-main">
        <header className="gdp-header">
          <div>
            <h1>Generate Draft Payroll</h1>
            <div className="gdp-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Payroll</span>
              <span>&gt;</span>
              <span>Generate Draft</span>
            </div>
          </div>
          <button type="button" className="gdp-bell" aria-label="Notifications">
            <FiBell size={16} />
            <span>3</span>
          </button>
        </header>

        <section className="gdp-hero">
          <div className="gdp-hero-left">
            <span className="gdp-hero-icon"><FiFileText size={18} /></span>
            <div>
              <h2>Generate Draft Payroll</h2>
              <p>Review and validate payroll calculations before final processing</p>
            </div>
          </div>
          <div className="gdp-hero-actions">
            <button
              type="button"
              className="generate-btn"
              onClick={() => {
                if (isGenerating) {
                  return
                }
                setHasGeneratedDraft(false)
                sessionStorage.setItem('payrollDraftGenerated', 'false')
                sessionStorage.setItem('payrollApproved', 'false')
                setStepIndex(1)
                setIsGenerating(true)
              }}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button type="button" className="history-btn" onClick={() => navigate('/payroll/archive')}>View History</button>
          </div>
        </section>

        <section className="gdp-card gdp-config-card">
          <h3>Payroll Configuration</h3>
          <p>Configure payroll parameters for draft generation</p>

          <div className="gdp-grid two-col">
            <label className="gdp-field">
              <span>Pay Period</span>
              <div className="gdp-input read-only">
                <input type="text" value="December 2024 (Dec 1 - Dec 31)" readOnly />
                <FiChevronDown size={14} />
              </div>
            </label>
            <label className="gdp-field">
              <span>Payroll Type</span>
              <input type="text" value="Monthly Salary" readOnly />
            </label>
            <label className="gdp-field">
              <span>Department Filter</span>
              <input type="text" value="All Departments" readOnly />
            </label>
            <label className="gdp-field">
              <span>Employee Status</span>
              <input type="text" value="Active Employees Only" readOnly />
            </label>
          </div>

          <h4>Calculation Options</h4>
          <div className="gdp-options-grid">
            <label><input type="checkbox" defaultChecked /> Include Overtime</label>
            <label><input type="checkbox" defaultChecked /> Include Bonuses</label>
            <label><input type="checkbox" defaultChecked /> Apply Deductions</label>
            <label><input type="checkbox" defaultChecked /> Tax Calculations</label>
            <label><input type="checkbox" defaultChecked /> Benefits Deduction</label>
            <label><input type="checkbox" /> Include Commissions</label>
          </div>
        </section>

        <section className="gdp-summary-grid">
          <article className="gdp-summary-card">
            <span className="icon blue"><FiUsers size={14} /></span>
            <strong>247</strong>
            <p>Eligible Employees</p>
          </article>
          <article className="gdp-summary-card">
            <span className="icon green"><FiDollarSign size={14} /></span>
            <strong>$1.2M</strong>
            <p>Total Gross Pay</p>
          </article>
          <article className="gdp-summary-card">
            <span className="icon orange"><FiSettings size={14} /></span>
            <strong>$285K</strong>
            <p>Total Deductions</p>
          </article>
          <article className="gdp-summary-card">
            <span className="icon purple"><FiClock size={14} /></span>
            <strong>$915K</strong>
            <p>Net Payroll</p>
          </article>
        </section>

        <section className="gdp-bottom-grid">
          <article className="gdp-card gdp-preview-card">
            <h3>Draft Preview</h3>
            <p>Sample employee payroll calculations</p>
            <div className="gdp-preview-list">
              {previewRows.map((row) => (
                <div key={row.name} className="gdp-preview-row">
                  <span className="avatar">{row.avatar}</span>
                  <div className="copy">
                    <strong>{row.name}</strong>
                    <span>{row.role}</span>
                  </div>
                  <strong className="pay">{row.pay}</strong>
                </div>
              ))}
            </div>
            <button type="button" className="full-preview-btn">
              <span className="full-preview-btn-icon" aria-hidden="true">
                <FiEye size={15} />
              </span>
              <span>View Full Preview</span>
            </button>
          </article>

          <article className="gdp-card gdp-status-card">
            <h3>Generation Status</h3>
            <div className="gdp-step-list">
              {steps.map((step, index) => (
                <div key={step} className={`gdp-step ${getStepClass(index)}`}>
                  <span className="dot">
                    {index < stepIndex ? <FiCheck size={10} /> : index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div className="gdp-processing-card">
              <strong>Processing Time</strong>
              <p>Estimated completion: 3-5 minutes</p>
            </div>
            {hasGeneratedDraft && !isGenerating ? (
              <button
                type="button"
                className="gdp-review-payroll-btn"
                onClick={() => navigate('/payroll/review')}
              >
                Review Payroll
              </button>
            ) : null}
          </article>
        </section>

        <section className="gdp-card gdp-history-card">
          <div className="gdp-history-header">
            <div>
              <h3>Recent Draft History</h3>
              <p>Previously generated payroll drafts</p>
            </div>
            <button type="button" className="gdp-history-view-all">
              <FiRotateCcw size={13} />
              <span>View All</span>
            </button>
          </div>

          <div className="gdp-history-table-wrap">
            <table className="gdp-history-table">
              <thead>
                <tr>
                  <th>Draft ID</th>
                  <th>Period</th>
                  <th>Generated</th>
                  <th>Status</th>
                  <th>Total Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentDraftRows.map((row) => (
                  <tr key={row.draftId}>
                    <td className="gdp-history-draft-id">{row.draftId}</td>
                    <td>{row.period}</td>
                    <td className="gdp-history-generated">{row.generated}</td>
                    <td>
                      <span className={`gdp-history-status ${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="gdp-history-amount">{row.amount}</td>
                    <td>
                      <div className="gdp-history-actions">
                        <button type="button" aria-label={`View ${row.draftId}`}>
                          <FiEye size={14} />
                        </button>
                        <button type="button" aria-label={`Download ${row.draftId}`}>
                          <FiDownload size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default GenerateDraftPayroll
