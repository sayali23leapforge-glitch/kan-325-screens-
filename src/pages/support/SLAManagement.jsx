import { useState } from 'react'
import {
  FiActivity,
  FiAlertCircle,
  FiArrowUp,
  FiBarChart2,
  FiBell,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import SLAStats from '../../components/support/SLAStats'
import SLAFilters from '../../components/support/SLAFilters'
import SLATable from '../../components/support/SLATable'
import './all-tickets.css'
import './sla-management.css'

function SLAManagement() {
  const [showEscalation, setShowEscalation] = useState(false)
  const [showSLATimer, setShowSLATimer] = useState(false)
  const [showEscalationManagement, setShowEscalationManagement] = useState(false)
  const [showWarningThreshold, setShowWarningThreshold] = useState(false)
  const [showPriorityUpgrade, setShowPriorityUpgrade] = useState(false)
  const [warningThresholdValue, setWarningThresholdValue] = useState(80)

  const warningThresholdPresets = [
    { value: 70, label: 'Conservative' },
    { value: 80, label: 'Balanced' },
    { value: 85, label: 'Moderate' },
    { value: 90, label: 'Aggressive' },
  ]

  const priorityThresholds = [
    { title: 'Critical Priority', subtitle: '1 hour SLA', value: 70, tone: 'critical' },
    { title: 'High Priority', subtitle: '4 hours SLA', value: 75, tone: 'high' },
    { title: 'Medium Priority', subtitle: '8 hours SLA', value: 80, tone: 'medium' },
    { title: 'Low Priority', subtitle: '24 hours SLA', value: 85, tone: 'low' },
  ]

  const warningRules = [
    { label: 'Email Notifications', note: 'Send alerts to supervisors', enabled: true },
    { label: 'SMS Alerts', note: 'Critical warning delivery', enabled: false },
    { label: 'Dashboard Alerts', note: 'Real-time visual notifications', enabled: true },
    { label: 'Slack Integration', note: 'Share warning updates to support ops', enabled: true },
  ]

  const priorityUpgradeRules = [
    {
      title: 'Medium → High',
      time: '6 hours',
      gradientClass: 'support-priority-upgrade-rule-medium',
      iconClass: 'support-priority-upgrade-rule-icon orange',
      toggleClass: 'on purple',
      labels: ['1h', '12h', '24h'],
    },
    {
      title: 'High → Critical',
      time: '3 hours',
      gradientClass: 'support-priority-upgrade-rule-high',
      iconClass: 'support-priority-upgrade-rule-icon red',
      toggleClass: 'on',
      labels: ['1h', '6h', '12h'],
    },
    {
      title: 'Low → Medium',
      time: '16 hours',
      gradientClass: 'support-priority-upgrade-rule-low',
      iconClass: 'support-priority-upgrade-rule-icon blue',
      toggleClass: 'off',
      labels: ['4h', '24h', '48h'],
    },
  ]

  const priorityConditions = [
    { title: 'Customer Follow-ups', description: '3+ messages without response', enabled: true },
    { title: 'SLA Threshold', description: 'Upgrade at 80% SLA consumed', enabled: true },
    { title: 'VIP Customer', description: 'Immediate priority boost', enabled: true },
    { title: 'Negative Sentiment', description: 'Detected frustration', enabled: false },
    { title: 'Reassignment', description: 'After 2+ transfers', enabled: true },
  ]

  const priorityRows = [
    { ticket: '#TK-8472', customer: 'Sarah Chen', from: 'Low', to: 'High', reason: 'SLA Threshold', time: '2h 14m', status: 'Completed' },
    { ticket: '#TK-8473', customer: 'Marcus Lee', from: 'Medium', to: 'High', reason: 'Customer Follow-ups', time: '1h 32m', status: 'Completed' },
    { ticket: '#TK-8474', customer: 'Olivia Smith', from: 'High', to: 'Critical', reason: 'VIP Customer', time: '45m', status: 'Completed' },
    { ticket: '#TK-8475', customer: 'Ava Johnson', from: 'Low', to: 'Medium', reason: 'Negative Sentiment', time: '5h 10m', status: 'Pending' },
  ]

  const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  const greenPoints = '30,28 120,46 210,72 300,118 390,146'
  const orangePoints = '30,92 120,104 210,116 300,133 390,162'
  const redPoints = '30,118 120,130 210,136 300,148 390,176'

  const navigateToEscalationScreen = () => {
    setShowEscalation(true)
    setShowSLATimer(false)
    setShowEscalationManagement(false)
    setShowWarningThreshold(false)
  }

  const navigateToSLATimerScreen = () => {
    setShowSLATimer(true)
    setShowEscalation(false)
    setShowEscalationManagement(false)
    setShowWarningThreshold(false)
  }

  const navigateToEscalationManagementScreen = () => {
    setShowEscalationManagement(true)
    setShowSLATimer(false)
    setShowEscalation(false)
    setShowWarningThreshold(false)
  }

  const navigateToWarningThresholdScreen = () => {
    setShowWarningThreshold(true)
    setShowEscalationManagement(false)
    setShowSLATimer(false)
    setShowEscalation(false)
    setShowPriorityUpgrade(false)
  }

  const navigateToPriorityUpgradeScreen = () => {
    setShowPriorityUpgrade(true)
    setShowWarningThreshold(false)
    setShowEscalationManagement(false)
    setShowSLATimer(false)
    setShowEscalation(false)
  }

  return (
    <div className="support-sla-layout">
      <SupportSidebar />

      <main className="support-sla-main">
        <header className={`support-sla-header ${showEscalationManagement ? 'support-sla-header-management' : ''}`}>
          <div>
            <h1>{showEscalationManagement ? 'Escalation Management' : 'SLA Management'}</h1>
            <nav className={`support-sla-breadcrumb ${showEscalationManagement ? 'support-sla-breadcrumb-management' : ''}`} aria-label="Breadcrumb">
              <span>Home</span>
              <span>{showEscalationManagement ? '/' : '>'}</span>
              <span>Helpdesk</span>
              <span>{showEscalationManagement ? '/' : '>'}</span>
              <span>{showEscalationManagement ? 'Escalations' : 'SLA'}</span>
            </nav>
          </div>

          {showEscalationManagement ? (
            <div className="support-escalation-management-actions">
              <button type="button" className="support-escalation-management-bell" aria-label="Notifications">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                  <path d="M10 17a2 2 0 0 0 4 0" />
                </svg>
                <span>7</span>
              </button>
              <button type="button" className="support-escalation-management-new-ticket">+ New Ticket</button>
            </div>
          ) : (
            <div className="support-sla-actions">
              <button type="button" className="support-sla-bell" aria-label="Notifications">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                  <path d="M10 17a2 2 0 0 0 4 0" />
                </svg>
                <span>5</span>
              </button>

              <button type="button" className="support-sla-primary-btn">+ New SLA</button>

              <button
                type="button"
                className="support-sla-escalation-btn"
                onClick={() => navigateToEscalationScreen()}
              >
                Escalation
              </button>

              <button
                type="button"
                className="support-sla-time-btn"
                onClick={() => navigateToSLATimerScreen()}
              >
                SLA Time
              </button>
            </div>
          )}
        </header>

        {showEscalationManagement ? (
          <section className="support-escalation-management-content">
            <div className="support-escalation-management-alert">
              <div>
                <h3>7 Tickets Require Immediate Escalation</h3>
                <p>Multiple tickets have exceeded SLA thresholds and require supervisor attention.</p>
              </div>
              <div className="support-escalation-management-alert-actions">
                <button type="button" className="review">Review All Escalations</button>
                <button type="button" className="notify">Notify Supervisors</button>
              </div>
            </div>

            <div className="support-escalation-management-stats-grid">
              <article className="support-escalation-management-stat-card">
                <div className="icon blue" />
                <div>
                  <strong>28</strong>
                  <p>Active Timers</p>
                </div>
              </article>
              <article className="support-escalation-management-stat-card">
                <div className="icon yellow" />
                <div>
                  <strong>12</strong>
                  <p>Warning Threshold</p>
                </div>
              </article>
              <article className="support-escalation-management-stat-card">
                <div className="icon orange" />
                <div>
                  <strong>7</strong>
                  <p>Escalation Triggers</p>
                </div>
              </article>
              <article className="support-escalation-management-stat-card">
                <div className="icon red" />
                <div>
                  <strong>5</strong>
                  <p>Supervisor Alerts</p>
                </div>
              </article>
              <article className="support-escalation-management-stat-card">
                <div className="icon purple" />
                <div>
                  <strong>3</strong>
                  <p>Priority Upgrades</p>
                </div>
              </article>
            </div>

            <section className="support-escalation-management-flow-card">
              <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ width: 204.27, height: 21.89, left: 24.19, top: 26.49, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 17.28, fontFamily: 'Inter', fontWeight: '700', lineHeight: '26.88px', wordWrap: 'break-word' }}>Escalation Flow Process</div>

                <div style={{ width: 61.43, height: 61.43, left: 97.7, top: 74.1, position: 'absolute', background: '#DBEAFE', borderRadius: 9599.04, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiClock color="#2563EB" size={25} />
                </div>
                <div style={{ width: 77.19, height: 18.43, left: 89.98, top: 152.05, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '600', lineHeight: '23.04px', wordWrap: 'break-word' }}>SLA Timer</div>
                <div style={{ width: 182.76, height: 54.54, left: 37.13, top: 182.73, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4B5563', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Ticket creation starts SLA<br />countdown based on priority<br />level</div>
                <div style={{ width: 208.45, height: 38.39, left: 24.19, top: 250.73, position: 'absolute', background: '#EFF6FF', borderRadius: 7.68 }}>
                  <div style={{ width: 96.95, height: 13.82, left: 55.92, top: 11.52, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E40AF', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '600', lineHeight: '15.36px', wordWrap: 'break-word' }}>Active: 28 tickets</div>
                </div>

                <div style={{ width: 20.16, height: 23.04, left: 334.82, top: 169.13, position: 'absolute', color: '#9CA3AF', fontSize: 23.04, lineHeight: '23.04px', textAlign: 'center' }}>→</div>

                <button
                  type="button"
                  className="support-escalation-flow-trigger support-escalation-flow-trigger-warning"
                  onClick={() => navigateToWarningThresholdScreen()}
                  aria-label="Open Warning Threshold Configuration"
                >
                  <div style={{ width: 61.43, height: 61.43, left: 73.51, top: 0, position: 'absolute', background: '#FEF9C3', borderRadius: 9599.04, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiAlertCircle color="#CA8A04" size={25} />
                  </div>
                  <div style={{ width: 141.63, height: 18.43, left: 33.56, top: 77.95, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '600', lineHeight: '23.04px', wordWrap: 'break-word' }}>Warning Threshold</div>
                  <div style={{ width: 186.15, height: 35.34, left: 11.24, top: 108.63, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4B5563', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>80% of SLA time elapsed<br />triggers warning notifications</div>
                  <div style={{ width: 208.47, height: 38.39, left: 0, top: 157.42, position: 'absolute', background: '#FEFCE8', borderRadius: 7.68 }}>
                    <div style={{ width: 106, height: 13.82, left: 51.49, top: 11.52, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#854D0E', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '600', lineHeight: '15.36px', wordWrap: 'break-word' }}>Warning: 12 tickets</div>
                  </div>
                </button>

                <div style={{ width: 20.16, height: 23.04, left: 777.82, top: 169.13, position: 'absolute', color: '#9CA3AF', fontSize: 23.04, lineHeight: '23.04px', textAlign: 'center' }}>→</div>

                <div style={{ width: 61.43, height: 61.43, left: 983.68, top: 74.1, position: 'absolute', background: '#FFEDD5', borderRadius: 9599.04, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiArrowUp color="#EA580C" size={25} />
                </div>
                <div style={{ width: 134.71, height: 18.43, left: 947.19, top: 152.05, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '600', lineHeight: '23.04px', wordWrap: 'break-word' }}>Escalation Trigger</div>
                <div style={{ width: 172.54, height: 35.34, left: 928.22, top: 182.73, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4B5563', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>SLA breach automatically<br />triggers escalation process</div>
                <div style={{ width: 208.47, height: 38.39, left: 910.17, top: 231.52, position: 'absolute', background: '#FFF7ED', borderRadius: 7.68 }}>
                  <div style={{ width: 107.85, height: 13.82, left: 50.49, top: 11.52, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#9A3412', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '600', lineHeight: '15.36px', wordWrap: 'break-word' }}>Triggered: 7 tickets</div>
                </div>

                <div style={{ width: 20.16, height: 23.04, left: 113.33, top: 397.56, position: 'absolute', color: '#9CA3AF', fontSize: 23.04, lineHeight: '23.04px', textAlign: 'center' }}>→</div>

                <div style={{ width: 61.43, height: 61.43, left: 319.19, top: 312.16, position: 'absolute', opacity: 0.98, background: '#FEE2E2', borderRadius: 9599.04, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiUser color="#DC2626" size={25} />
                </div>
                <div style={{ width: 121.63, height: 18.43, left: 289.28, top: 390.09, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '600', lineHeight: '23.04px', wordWrap: 'break-word' }}>Supervisor Alert</div>
                <div style={{ width: 189.36, height: 35.33, left: 255.97, top: 420.79, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4B5563', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Immediate notification sent to<br />supervisor and team lead</div>
                <div style={{ width: 208.45, height: 38.39, left: 245.68, top: 469.56, position: 'absolute', background: '#FEF2F2', borderRadius: 7.68 }}>
                  <div style={{ width: 124.02, height: 13.82, left: 42.4, top: 11.52, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#991B1B', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '600', lineHeight: '15.36px', wordWrap: 'break-word' }}>Alerted: 5 supervisors</div>
                </div>

                <div style={{ width: 20.16, height: 23.04, left: 556.33, top: 397.56, position: 'absolute', color: '#9CA3AF', fontSize: 23.04, lineHeight: '23.04px', textAlign: 'center' }}>→</div>

                <button
                  type="button"
                  className="support-escalation-flow-trigger support-escalation-flow-trigger-priority"
                  onClick={() => navigateToPriorityUpgradeScreen()}
                  aria-label="Open Priority Upgrade"
                >
                  <div style={{ width: 61.43, height: 61.43, left: 762.19, top: 312.16, position: 'absolute', background: '#F3E8FF', borderRadius: 9599.04, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiTrendingUp color="#9333EA" size={25} />
                  </div>
                  <div style={{ width: 122.64, height: 18.43, left: 731.77, top: 390.09, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '600', lineHeight: '23.04px', wordWrap: 'break-word' }}>Priority Upgrade</div>
                  <div style={{ width: 190.76, height: 35.33, left: 697.62, top: 420.79, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4B5563', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Ticket priority automatically<br />increased for faster resolution</div>
                  <div style={{ width: 208.45, height: 38.39, left: 688.68, top: 469.56, position: 'absolute', background: '#FAF5FF', borderRadius: 7.68 }}>
                    <div style={{ width: 109.7, height: 13.82, left: 49.64, top: 11.52, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#6B21A8', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '600', lineHeight: '15.36px', wordWrap: 'break-word' }}>Upgraded: 3 tickets</div>
                  </div>
                </button>
              </div>
            </section>

            <div className="support-escalation-management-lower-grid">
              <section className="support-escalation-management-card">
                <div className="card-head">
                  <h3>Critical Escalations</h3>
                </div>

                <article className="critical-ticket red">
                  <div className="meta">
                    <strong>Payment Failure</strong>
                    <span>+45 minutes</span>
                  </div>
                  <p>SLA BREACHED</p>
                  <div className="progress red"><i style={{ width: '100%' }} /></div>
                  <button type="button">Assign Senior Agent</button>
                </article>

                <article className="critical-ticket orange">
                  <div className="meta">
                    <strong>Data Sync Issue</strong>
                    <span>15 min left</span>
                  </div>
                  <p>High</p>
                  <div className="progress orange"><i style={{ width: '85%' }} /></div>
                  <button type="button">Monitor Closely</button>
                </article>

                <article className="critical-ticket yellow">
                  <div className="meta">
                    <strong>Gateway Delay</strong>
                    <span>22 min left</span>
                  </div>
                  <p>Medium</p>
                  <div className="progress yellow"><i style={{ width: '78%' }} /></div>
                  <button type="button">Warning State</button>
                </article>
              </section>

              <section className="support-escalation-management-card">
                <div className="card-head">
                  <h3>SLA Monitoring</h3>
                </div>

                <div className="monitor-row">
                  <span>Critical Priority</span>
                  <div className="monitor-track"><i className="red" style={{ width: '100%' }} /></div>
                </div>
                <div className="monitor-row">
                  <span>High Priority</span>
                  <div className="monitor-track"><i className="orange" style={{ width: '85%' }} /></div>
                </div>
                <div className="monitor-row">
                  <span>Medium Priority</span>
                  <div className="monitor-track"><i className="yellow" style={{ width: '70%' }} /></div>
                </div>
                <div className="monitor-row">
                  <span>Low Priority</span>
                  <div className="monitor-track"><i className="green" style={{ width: '52%' }} /></div>
                </div>

                <div className="overall-box">
                  <p>Overall SLA Performance</p>
                  <strong>87.5%</strong>
                  <div className="monitor-track"><i className="bluegreen" style={{ width: '87.5%' }} /></div>
                </div>
              </section>
            </div>

            <section className="support-escalation-management-card activity">
              <div className="card-head">
                <h3>Recent Escalation Activity</h3>
              </div>
              <ul>
                <li><i className="dot red" /> Ticket TKT-8932 escalated to supervisor</li>
                <li><i className="dot yellow" /> Warning threshold reached for TKT-8940</li>
                <li><i className="dot purple" /> Priority upgraded to high for TKT-8922</li>
                <li><i className="dot green" /> Escalated ticket TKT-8912 resolved</li>
              </ul>
            </section>
          </section>
        ) : showWarningThreshold ? (
          <section className="support-warning-threshold-content">
            <div className="support-warning-threshold-header-card">
              <div>
                <h2>Warning Threshold Configuration</h2>
                <nav className="support-warning-threshold-breadcrumb" aria-label="Breadcrumb">
                  <span>Home</span>
                  <span>/</span>
                  <span>SLA Management</span>
                  <span>/</span>
                  <span>Warning Threshold</span>
                </nav>
              </div>

              <div className="support-warning-threshold-actions">
                <button type="button" className="support-warning-threshold-bell" aria-label="Notifications">
                  <FiBell size={15} />
                  <span>8</span>
                </button>
                <button type="button" className="support-warning-threshold-new-ticket">+ New Ticket</button>
              </div>
            </div>

            <div className="support-warning-threshold-top-cards">
              <article className="support-warning-threshold-top-card primary">
                <div className="support-warning-threshold-top-icon yellow">
                  <FiAlertCircle size={18} />
                </div>
                <div>
                  <p>Current Threshold</p>
                  <strong>{warningThresholdValue}%</strong>
                  <h3>Current Warning Threshold</h3>
                  <span>Triggers when {warningThresholdValue}% SLA consumed</span>
                </div>
              </article>

              <article className="support-warning-threshold-top-card">
                <div className="support-warning-threshold-top-icon orange">
                  <FiClock size={18} />
                </div>
                <div>
                  <p>Tickets in Warning Zone</p>
                  <strong>8</strong>
                  <span>Currently nearing SLA breach</span>
                </div>
              </article>

              <article className="support-warning-threshold-top-card">
                <div className="support-warning-threshold-top-icon blue">
                  <FiBarChart2 size={18} />
                </div>
                <div>
                  <p>Threshold Accuracy</p>
                  <strong>92%</strong>
                  <span>Prevents avoidable escalations</span>
                </div>
              </article>
            </div>

            <div className="support-warning-threshold-main-grid">
              <section className="support-warning-threshold-card config">
                <div className="support-warning-threshold-card-head">
                  <div>
                    <h3>Threshold Configuration</h3>
                    <p>Set warning threshold percentage</p>
                  </div>
                  <span className="support-warning-threshold-chip">{warningThresholdValue}%</span>
                </div>

                <div className="support-warning-threshold-slider-wrap">
                  <div className="support-warning-threshold-slider-track">
                    <div className="support-warning-threshold-slider-fill" style={{ width: `${((warningThresholdValue - 50) / 45) * 100}%` }} />
                    <div className="support-warning-threshold-slider-thumb" style={{ left: `calc(${((warningThresholdValue - 50) / 45) * 100}% - 10px)` }} />
                  </div>
                  <div className="support-warning-threshold-slider-labels">
                    <span>50%</span>
                    <span>60%</span>
                    <span>70%</span>
                    <span>80%</span>
                    <span>90%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div className="support-warning-threshold-info-box">
                  <strong>Recommended: 75-85%</strong>
                  <span>Balanced threshold reduces avoidable escalations while keeping the team proactive.</span>
                </div>

                <div className="support-warning-threshold-preset-grid">
                  {warningThresholdPresets.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      className={`support-warning-threshold-preset ${warningThresholdValue === preset.value ? 'active' : ''}`}
                      onClick={() => setWarningThresholdValue(preset.value)}
                    >
                      <strong>{preset.value}%</strong>
                      <span>{preset.label}</span>
                    </button>
                  ))}
                </div>

                <div className="support-warning-threshold-button-row">
                  <button type="button" className="support-warning-threshold-apply">Apply Changes</button>
                  <button type="button" className="support-warning-threshold-reset" onClick={() => setWarningThresholdValue(80)}>Reset</button>
                </div>
              </section>

              <section className="support-warning-threshold-card priority">
                <div className="support-warning-threshold-card-head">
                  <div>
                    <h3>Priority-Based Thresholds</h3>
                    <p>Customize by ticket urgency</p>
                  </div>
                </div>

                <div className="support-warning-priority-list">
                  {priorityThresholds.map((item) => (
                    <article key={item.title} className={`support-warning-priority-item ${item.tone}`}>
                      <div className="support-warning-priority-item-head">
                        <div>
                          <h4>{item.title}</h4>
                          <span>{item.subtitle}</span>
                        </div>
                        <strong>{item.value}%</strong>
                      </div>
                      <div className="support-warning-priority-track">
                        <i style={{ width: `${item.value}%` }} />
                        <button type="button" aria-label={`${item.title} threshold`} />
                      </div>
                    </article>
                  ))}
                </div>

                <button type="button" className="support-warning-priority-save">Save Priority Thresholds</button>
              </section>
            </div>

            <div className="support-warning-threshold-lower-grid">
              <section className="support-warning-threshold-card chart">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#ffffff',
                    boxShadow: '0px 3.8399999141693115px 5.759999752044678px -3.8399999141693115px rgba(0, 0, 0, 0.10), 0px 9.59999942779541px 14.399999618530273px -2.879999876022339px rgba(0, 0, 0, 0.10)',
                    borderRadius: 11.52,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ width: 284, left: 24, top: 18, position: 'absolute', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: '#6366F1', display: 'grid', placeItems: 'center', flex: 'none' }}>
                      <FiBarChart2 size={18} color="#ffffff" />
                    </div>
                    <div>
                      <div style={{ color: '#111827', fontSize: 15.36, fontFamily: 'Inter', fontWeight: '700', lineHeight: '23.04px' }}>Threshold Impact Analysis</div>
                      <div style={{ color: '#6b7280', fontSize: 13.44, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.2px' }}>Historical performance by threshold level</div>
                    </div>
                  </div>

                  <div style={{ width: '100%', textAlign: 'center', position: 'absolute', top: 84, left: 0, color: '#5f6368', fontSize: 17.28, fontFamily: 'Inter', fontWeight: '500', lineHeight: '26.88px' }}>
                    Threshold Performance Comparison
                  </div>

                  <svg viewBox="0 0 520 240" aria-label="Threshold impact analysis chart" className="support-warning-chart-exact" style={{ position: 'absolute', top: 116, left: 12, width: 'calc(100% - 24px)', height: 200 }}>
                    <defs>
                      <clipPath id="chartAreaClip">
                        <rect x="40" y="18" width="430" height="150" rx="0" />
                      </clipPath>
                    </defs>

                    <g>
                      <line x1="40" y1="18" x2="40" y2="168" className="support-warning-chart-grid-axis" />
                      <line x1="40" y1="168" x2="470" y2="168" className="support-warning-chart-grid-axis" />
                      {[18, 48, 78, 108, 138].map((y) => (
                        <line key={y} x1="40" y1={y} x2="470" y2={y} className="support-warning-chart-grid-line" />
                      ))}
                      {[40, 126, 212, 298, 384, 470].map((x) => (
                        <line key={x} x1={x} y1="18" x2={x} y2="168" className="support-warning-chart-grid-line" />
                      ))}
                    </g>

                    <g clipPath="url(#chartAreaClip)">
                      <polyline points="40,24 126,40 212,58 298,98 341,114 384,128 427,136 470,144" className="support-warning-chart-line green" />
                      <polyline points="40,98 126,112 212,126 298,140 341,146 384,151 427,156 470,160" className="support-warning-chart-line red" />
                      <polyline points="40,130 126,132 212,133 298,145 341,151 384,156 427,161 470,164" className="support-warning-chart-line orange" />

                      {[[40, 24], [126, 40], [212, 58], [298, 98], [341, 114], [384, 128], [427, 136], [470, 144]].map(([cx, cy]) => <circle key={`g-${cx}-${cy}`} cx={cx} cy={cy} r="4.2" className="support-warning-chart-point green" />)}
                      {[[40, 98], [126, 112], [212, 126], [298, 140], [341, 146], [384, 151], [427, 156], [470, 160]].map(([cx, cy]) => <circle key={`r-${cx}-${cy}`} cx={cx} cy={cy} r="4.2" className="support-warning-chart-point red" />)}
                      {[[40, 130], [126, 132], [212, 133], [298, 145], [341, 151], [384, 156], [427, 161], [470, 164]].map(([cx, cy]) => <circle key={`o-${cx}-${cy}`} cx={cx} cy={cy} r="4.2" className="support-warning-chart-point orange" />)}
                    </g>

                    <g>
                      <text x="36" y="172" className="support-warning-chart-axis-label">50</text>
                      <text x="120" y="172" className="support-warning-chart-axis-label">60</text>
                      <text x="206" y="172" className="support-warning-chart-axis-label">70</text>
                      <text x="292" y="172" className="support-warning-chart-axis-label">80</text>
                      <text x="378" y="172" className="support-warning-chart-axis-label">90</text>
                      <text x="458" y="172" className="support-warning-chart-axis-label">95</text>

                      <text x="8" y="164" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">20</text>
                      <text x="8" y="143" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">40</text>
                      <text x="8" y="122" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">60</text>
                      <text x="8" y="101" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">80</text>
                      <text x="4" y="80" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">100</text>
                      <text x="4" y="59" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">120</text>
                      <text x="4" y="38" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">140</text>
                      <text x="4" y="17" className="support-warning-chart-axis-label support-warning-chart-axis-y-label">160</text>
                    </g>
                  </svg>

                  <div style={{ position: 'absolute', left: '50%', bottom: 14, transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 18, color: '#4b5563', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 999, display: 'inline-block', background: '#10B981' }} /> Escalations Prevented</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 999, display: 'inline-block', background: '#F59E0B' }} /> Warning Volume</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 999, display: 'inline-block', background: '#EF4444' }} /> Actual Breaches</span>
                  </div>
                </div>
              </section>

              <section className="support-warning-threshold-card rules">
                <div className="support-warning-threshold-card-head">
                  <div>
                    <h3>Warning Rule Toggles</h3>
                    <p>Configure how warnings are distributed</p>
                  </div>
                </div>

                <div className="support-warning-rules-list">
                  {warningRules.map((rule) => (
                    <div key={rule.label} className="support-warning-rule-item">
                      <div className="support-warning-rule-meta">
                        <span>{rule.label}</span>
                        <small>{rule.note}</small>
                      </div>
                      <button type="button" className={`support-warning-rule-toggle ${rule.enabled ? 'on' : 'off'}`} aria-label={rule.label}>
                        <i />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="support-warning-threshold-card stats">
                <div className="support-warning-threshold-card-head">
                  <div>
                    <h3>Warning Statistics</h3>
                    <p>Current threshold performance metrics</p>
                  </div>
                </div>

                <div className="support-warning-stats-list">
                  <div className="support-warning-stat-row">
                    <div className="support-warning-stat-label">
                      <FiActivity size={15} />
                      <span>Avg Response Time</span>
                    </div>
                    <strong>2.4h</strong>
                  </div>
                  <div className="support-warning-stat-row">
                    <div className="support-warning-stat-label">
                      <FiAlertCircle size={15} />
                      <span>Tickets in Warning Zone</span>
                    </div>
                    <strong>267</strong>
                  </div>
                  <div className="support-warning-stat-row">
                    <div className="support-warning-stat-label">
                      <FiCheckCircle size={15} />
                      <span>Escalations Prevented</span>
                    </div>
                    <strong>223</strong>
                  </div>
                </div>

                <div className="support-warning-success-card">
                  <span>Success Rate</span>
                  <strong>92.3%</strong>
                  <p>Warning alerts resolved before SLA breach</p>
                </div>
              </section>
            </div>
          </section>
        ) : showPriorityUpgrade ? (
          <section className="support-priority-upgrade-content">
            <div className="support-priority-upgrade-header-card">
              <div>
                <h2>Priority Upgrade</h2>
                <nav className="support-priority-upgrade-breadcrumb" aria-label="Breadcrumb">
                  <span>Home</span>
                  <span>/</span>
                  <span>SLA Management</span>
                  <span>/</span>
                  <span>Priority Upgrade</span>
                </nav>
              </div>

              <div className="support-priority-upgrade-actions">
                <button type="button" className="support-priority-upgrade-bell" aria-label="Notifications">
                  <FiBell size={15} />
                  <span>5</span>
                </button>
                <button type="button" className="support-priority-upgrade-new-ticket">+ New SLA</button>
              </div>
            </div>

            <div className="support-priority-upgrade-top-cards">
              <article className="support-priority-upgrade-top-card primary">
                <div className="support-priority-upgrade-top-icon purple">
                  <FiTrendingUp size={18} />
                </div>
                <div>
                  <p>Auto</p>
                  <h3>Priority Upgrade System</h3>
                  <span>Automatically escalates ticket priority</span>
                  <strong className="support-priority-upgrade-badge">ACTIVE</strong>
                </div>
              </article>

              <article className="support-priority-upgrade-top-card">
                <div className="support-priority-upgrade-top-icon blue">
                  <FiActivity size={18} />
                </div>
                <div>
                  <p>Upgraded This Month</p>
                  <strong>34</strong>
                  <span>Automatic priority increases</span>
                </div>
              </article>

              <article className="support-priority-upgrade-top-card">
                <div className="support-priority-upgrade-top-icon green">
                  <FiCheckCircle size={18} />
                </div>
                <div>
                  <p>Success Rate</p>
                  <strong>89%</strong>
                  <span>Resolved after upgrade</span>
                </div>
              </article>
            </div>

            <div className="support-priority-upgrade-main-grid">
              <section className="support-priority-upgrade-card rules">
                <div className="support-priority-upgrade-card-head">
                  <div>
                    <h3>Upgrade Rules</h3>
                    <p>Configure automatic priority escalation</p>
                  </div>
                </div>

                <div className="support-priority-upgrade-rules-list">
                  {priorityUpgradeRules.map((rule) => (
                    <article key={rule.title} className={`support-priority-upgrade-rule ${rule.gradientClass}`}>
                      <div className="support-priority-upgrade-rule-top">
                        <div className={rule.iconClass}>
                          <FiClock size={14} color="#ffffff" />
                        </div>
                        <div className="support-priority-upgrade-rule-copy">
                          <h4>{rule.title}</h4>
                          <span>{rule.time}</span>
                        </div>
                        <button type="button" className={`support-priority-upgrade-toggle ${rule.toggleClass}`} aria-label={rule.title}>
                          <i />
                        </button>
                      </div>

                      <div className="support-priority-upgrade-slider-block">
                        <div className="support-priority-upgrade-slider-track">
                          <span className="support-priority-upgrade-slider-fill" style={{ width: rule.title === 'Medium → High' ? '62%' : rule.title === 'High → Critical' ? '48%' : '34%' }} />
                          <span className="support-priority-upgrade-slider-thumb" style={{ left: rule.title === 'Medium → High' ? '58%' : rule.title === 'High → Critical' ? '44%' : '30%' }} />
                        </div>
                        <div className="support-priority-upgrade-slider-labels">
                          {rule.labels.map((label) => <span key={label}>{label}</span>)}
                        </div>
                      </div>
                    </article>
                  ))}

                  <div className="support-priority-upgrade-rule-actions">
                    <button type="button" className="save">Save Configuration</button>
                    <button type="button" className="reset">Reset</button>
                  </div>
                </div>
              </section>

              <section className="support-priority-upgrade-card conditions">
                <div className="support-priority-upgrade-card-head">
                  <div>
                    <h3>Upgrade Conditions</h3>
                    <p>Additional triggers for priority escalation</p>
                  </div>
                </div>

                <div className="support-priority-upgrade-conditions-list">
                  {priorityConditions.map((condition) => (
                    <div key={condition.title} className="support-priority-upgrade-condition-row">
                      <div>
                        <span>{condition.title}</span>
                        <small>{condition.description}</small>
                      </div>
                      <button type="button" className={`support-warning-rule-toggle ${condition.enabled ? 'on' : 'off'}`} aria-label={condition.title}>
                        <i />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="support-priority-upgrade-smart-box">
                  Multiple conditions can trigger simultaneously
                </div>
              </section>
            </div>

            <section className="support-priority-upgrade-table-card">
              <div className="support-priority-upgrade-card-head">
                <div>
                  <h3>Recent Priority Upgrades</h3>
                  <p>Last 7 days activity</p>
                </div>
              </div>

              <div className="support-priority-upgrade-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Customer</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Reason</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorityRows.map((row) => (
                      <tr key={row.ticket}>
                        <td>{row.ticket}</td>
                        <td>{row.customer}</td>
                        <td>{row.from}</td>
                        <td>{row.to}</td>
                        <td>{row.reason}</td>
                        <td>{row.time}</td>
                        <td><span className={`support-priority-upgrade-status ${row.status.toLowerCase()}`}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        ) : showSLATimer ? (
          <section className="support-sla-timer-content">
            <div className="support-sla-timer-header-card">
              <div>
                <h2>SLA Timer Management</h2>
                <nav className="support-sla-timer-breadcrumb" aria-label="Breadcrumb">
                  <span>Home</span>
                  <span>/</span>
                  <span>Helpdesk</span>
                  <span>/</span>
                  <span>SLA Timers</span>
                </nav>
              </div>

              <button type="button" className="support-sla-timer-new-ticket-btn">+ New Ticket</button>
            </div>

            <div className="support-sla-timer-stats-grid">
              <article className="support-sla-timer-stat-card">
                <div className="support-sla-timer-stat-icon blue" />
                <div className="support-sla-timer-stat-main">
                  <p>Active SLA Timers</p>
                  <strong>45</strong>
                </div>
                <span className="support-sla-timer-badge live">Live</span>
              </article>

              <article className="support-sla-timer-stat-card">
                <div className="support-sla-timer-stat-icon red" />
                <div className="support-sla-timer-stat-main">
                  <p>SLA Breached</p>
                  <strong>3</strong>
                </div>
                <span className="support-sla-timer-badge critical">Critical</span>
              </article>

              <article className="support-sla-timer-stat-card">
                <div className="support-sla-timer-stat-icon yellow" />
                <div className="support-sla-timer-stat-main">
                  <p>Near Deadline</p>
                  <strong>8</strong>
                </div>
                <span className="support-sla-timer-badge warning">Warning</span>
              </article>

              <article className="support-sla-timer-stat-card">
                <div className="support-sla-timer-stat-icon green" />
                <div className="support-sla-timer-stat-main">
                  <p>Within SLA</p>
                  <strong>34</strong>
                </div>
                <span className="support-sla-timer-badge on-track">On Track</span>
              </article>
            </div>

            <div className="support-sla-timer-alert-banner">
              <div>
                <h3>3 Tickets Have Exceeded SLA Deadlines</h3>
                <p>Immediate action required to prevent customer dissatisfaction and service quality impact.</p>
              </div>
              <div className="support-sla-timer-alert-actions">
                <button type="button" className="support-sla-timer-alert-danger">View Breached Tickets</button>
                <button
                  type="button"
                  className="support-sla-timer-alert-outline"
                  onClick={() => navigateToEscalationManagementScreen()}
                >
                  Escalate All
                </button>
              </div>
            </div>

            <section className="support-sla-timer-live-card">
              <div className="support-sla-timer-live-head">
                <div>
                  <h3>Live SLA Timer Dashboard</h3>
                  <p>
                    <span className="support-sla-timer-live-dot" />
                    Auto-refresh: ON
                  </p>
                </div>
                <button type="button" className="support-sla-timer-refresh-btn">Refresh</button>
              </div>

              <div className="support-sla-timer-group group-breached">
                <h4>SLA Breached</h4>
                <div className="support-sla-timer-ticket-list">
                  <article className="support-sla-timer-ticket-item">
                    <div>
                      <p>#TKT-8932 - Payment Gateway Failure</p>
                      <span>John Smith • Tier-1 Billing</span>
                    </div>
                    <div className="support-sla-timer-ticket-right">
                      <strong className="red">+02:47:12</strong>
                      <em>OVERDUE</em>
                      <button type="button" className="danger">Escalate Now</button>
                    </div>
                  </article>

                  <article className="support-sla-timer-ticket-item">
                    <div>
                      <p>#TKT-8940 - Device Issue</p>
                      <span>Mike Brown • Device Support</span>
                    </div>
                    <div className="support-sla-timer-ticket-right">
                      <strong className="red">+01:14:02</strong>
                      <em>OVERDUE</em>
                      <button type="button" className="danger">Escalate Now</button>
                    </div>
                  </article>

                  <article className="support-sla-timer-ticket-item">
                    <div>
                      <p>#TKT-8978 - Database Corruption</p>
                      <span>Sarah Wilson • Core Platform</span>
                    </div>
                    <div className="support-sla-timer-ticket-right">
                      <strong className="red">+00:30:09</strong>
                      <em>OVERDUE</em>
                      <button type="button" className="danger">Escalate Now</button>
                    </div>
                  </article>
                </div>
              </div>

              <div className="support-sla-timer-group group-warning">
                <h4>Warning Zone - 80%+ SLA Used</h4>
                <div className="support-sla-timer-ticket-grid">
                  <article className="support-sla-timer-warning-item">
                    <p>#TKT-8950 - Password Reset Issue</p>
                    <span>8m 55s</span>
                    <div className="warning-progress"><i style={{ width: '87%' }} /></div>
                    <button type="button">Monitor</button>
                  </article>

                  <article className="support-sla-timer-warning-item">
                    <p>#TKT-8943 - API Integration</p>
                    <span>00:33:14</span>
                    <div className="warning-progress"><i style={{ width: '84%' }} /></div>
                    <button type="button">Monitor</button>
                  </article>

                  <article className="support-sla-timer-warning-item">
                    <p>#TKT-8918 - Email Delivery</p>
                    <span>00:23:19</span>
                    <div className="warning-progress"><i style={{ width: '82%' }} /></div>
                    <button type="button">Monitor</button>
                  </article>

                  <article className="support-sla-timer-warning-item">
                    <p>#TKT-8922 - Security Breach</p>
                    <span>00:40:23</span>
                    <div className="warning-progress"><i style={{ width: '81%' }} /></div>
                    <button type="button">Monitor</button>
                  </article>
                </div>
              </div>

              <div className="support-sla-timer-group group-track">
                <h4>On Track - Within SLA (&lt; 80% Used)</h4>
                <div className="support-sla-timer-ticket-grid track-grid">
                  <article className="support-sla-timer-track-item">
                    <p>#TKT-9101 - UI Bug Fix</p>
                    <span>10:22:24</span>
                    <div className="track-progress"><i style={{ width: '35%' }} /></div>
                  </article>
                  <article className="support-sla-timer-track-item">
                    <p>#TKT-9104 - Feature Request</p>
                    <span>05:10:48</span>
                    <div className="track-progress"><i style={{ width: '52%' }} /></div>
                  </article>
                  <article className="support-sla-timer-track-item">
                    <p>#TKT-9110 - Password Reset</p>
                    <span>22:16:11</span>
                    <div className="track-progress"><i style={{ width: '27%' }} /></div>
                  </article>
                </div>
              </div>
            </section>

            <section className="support-sla-timer-performance-card">
              <div
                style={{
                  width: '100%',
                  height: 532,
                  position: 'relative',
                  background: 'white',
                  boxShadow: '0px 0.9599999785423279px 1.9199999570846558px rgba(0, 0, 0, 0.05)',
                  borderRadius: 11.52,
                  outline: '0.96px #E5E7EB solid',
                  outlineOffset: '-0.96px',
                }}
              >
                <div
                  style={{
                    width: 260.99,
                    height: 21.89,
                    left: 24.19,
                    top: 26.49,
                    position: 'absolute',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#111827',
                    fontSize: 17.28,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    lineHeight: 1.55,
                    wordWrap: 'break-word',
                  }}
                >
                  SLA Performance - Last 7 Days
                </div>

                <div style={{ width: 671.99, height: 432, left: 24.19, top: 74.1, position: 'absolute', overflow: 'hidden' }}>
                  <div style={{ width: 68.02, height: 229.82, left: 66.1, top: 100.42, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.03, height: 207.93, left: 151.13, top: 122.31, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.03, height: 246.24, left: 236.16, top: 84.01, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.03, height: 224.35, left: 321.19, top: 105.9, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.03, height: 186.05, left: 406.21, top: 144.2, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.03, height: 153.22, left: 491.24, top: 177.03, position: 'absolute', background: '#10B981' }} />
                  <div style={{ width: 68.02, height: 175.1, left: 576.27, top: 155.14, position: 'absolute', background: '#10B981' }} />

                  <div style={{ width: 68.02, height: 27.36, left: 66.1, top: 73.06, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.03, height: 43.78, left: 151.13, top: 78.53, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.03, height: 32.83, left: 236.16, top: 51.17, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.03, height: 49.25, left: 321.19, top: 56.64, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.03, height: 43.78, left: 406.21, top: 100.42, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.03, height: 21.89, left: 491.24, top: 155.14, position: 'absolute', background: '#EAB308' }} />
                  <div style={{ width: 68.02, height: 32.83, left: 576.27, top: 122.3, position: 'absolute', background: '#EAB308' }} />

                  <div style={{ width: 68.02, height: 10.94, left: 66.1, top: 62.12, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.03, height: 5.47, left: 151.13, top: 73.06, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.03, height: 16.42, left: 236.16, top: 34.76, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.03, height: 10.94, left: 321.19, top: 45.7, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.03, height: 16.42, left: 406.21, top: 84.01, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.03, height: 5.47, left: 491.24, top: 149.67, position: 'absolute', background: '#EF4444' }} />
                  <div style={{ width: 68.02, height: 10.94, left: 576.27, top: 111.37, position: 'absolute', background: '#EF4444' }} />

                  <div style={{ left: 88.12, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Mon</div>
                  <div style={{ left: 175.06, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Tue</div>
                  <div style={{ left: 257.69, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Wed</div>
                  <div style={{ left: 344.64, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Thu</div>
                  <div style={{ left: 433.02, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Fri</div>
                  <div style={{ left: 516.13, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Sat</div>
                  <div style={{ left: 599.72, top: 331.2, position: 'absolute', textAlign: 'center', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Sun</div>

                  <div style={{ left: 48.96, top: 322.76, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>0</div>
                  <div style={{ left: 43.2, top: 268.03, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>10</div>
                  <div style={{ left: 42.24, top: 213.31, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>20</div>
                  <div style={{ left: 41.28, top: 158.59, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>30</div>
                  <div style={{ left: 41.28, top: 103.88, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>40</div>
                  <div style={{ left: 42.24, top: 49.16, position: 'absolute', textAlign: 'right', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>50</div>

                  <div style={{ left: 96, top: 399.34, position: 'absolute', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>SLA Breached</div>
                  <div style={{ width: 11.52, height: 11.52, left: 71.04, top: 400.6, position: 'absolute', background: '#EF4444' }} />

                  <div style={{ left: 219.35, top: 399.34, position: 'absolute', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Warning Zone</div>
                  <div style={{ width: 11.52, height: 11.52, left: 194.39, top: 400.6, position: 'absolute', background: '#EAB308' }} />

                  <div style={{ left: 342.93, top: 399.34, position: 'absolute', color: '#444444', fontSize: 11.52, fontFamily: 'Inter', fontWeight: '400' }}>Within SLA</div>
                  <div style={{ width: 11.52, height: 11.52, left: 317.97, top: 400.6, position: 'absolute', background: '#10B981' }} />
                </div>
              </div>
            </section>
          </section>
        ) : showEscalation ? (
          <section className="support-escalation-content">
            <div className="support-escalation-header-card">
              <div>
                <h2>Escalation Trigger Configuration</h2>
                <nav className="support-escalation-breadcrumb" aria-label="Breadcrumb">
                  <span>Home</span>
                  <span>/</span>
                  <span>SLA Management</span>
                  <span>/</span>
                  <span>Escalation Trigger</span>
                </nav>
              </div>

              <button type="button" className="support-escalation-new-ticket-btn">+ New Ticket</button>
            </div>

            <div className="support-escalation-top-cards">
              <article className="support-escalation-top-card support-escalation-top-card-red">
                <p className="support-escalation-top-title">SLA Breach</p>
                <p className="support-escalation-top-value">100%</p>
                <p className="support-escalation-top-label">SLA Breach Threshold</p>
                <p className="support-escalation-top-subtitle">Automatic escalation when SLA expires</p>
              </article>

              <article className="support-escalation-top-card">
                <p className="support-escalation-top-title">Active Escalations</p>
                <p className="support-escalation-top-value">3</p>
                <p className="support-escalation-top-subtitle">Tickets currently being escalated</p>
              </article>

              <article className="support-escalation-top-card">
                <p className="support-escalation-top-title">Avg Response Time</p>
                <p className="support-escalation-top-value">4.2m</p>
                <p className="support-escalation-top-subtitle">From trigger to escalation</p>
              </article>
            </div>

            <div className="support-escalation-main-grid">
              <article className="support-escalation-card">
                <div className="support-escalation-card-head">
                  <h3>Trigger Conditions</h3>
                </div>

                <div className="support-escalation-trigger-block trigger-red">
                  <div className="support-escalation-trigger-top">
                    <p>SLA Breach Trigger</p>
                    <span className="support-escalation-toggle on red" />
                  </div>
                  <p className="support-escalation-trigger-desc">Automatically escalate when SLA expires</p>
                  <div className="support-escalation-inner-box">
                    <span>Time Remaining Check</span>
                    <strong>Evaluated every 30 seconds</strong>
                  </div>
                </div>

                <div className="support-escalation-trigger-block trigger-orange">
                  <div className="support-escalation-trigger-top">
                    <p>Manual Escalation</p>
                    <span className="support-escalation-toggle on orange" />
                  </div>
                  <div className="support-escalation-stats-mini-grid">
                    <div>
                      <span>24</span>
                      <strong>Manual triggers</strong>
                    </div>
                    <div>
                      <span>2.1m</span>
                      <strong>Avg response</strong>
                    </div>
                  </div>
                </div>

                <div className="support-escalation-trigger-block trigger-purple">
                  <div className="support-escalation-trigger-top">
                    <p>Customer Escalation</p>
                    <span className="support-escalation-toggle on purple" />
                  </div>
                  <p className="support-escalation-trigger-desc">Keywords</p>
                  <div className="support-escalation-keyword-row">
                    <span>escalate</span>
                    <span>supervisor</span>
                    <span>manager</span>
                    <span>complaint</span>
                  </div>
                </div>

                <div className="support-escalation-trigger-block trigger-yellow">
                  <div className="support-escalation-trigger-top">
                    <p>Multiple Contact Attempts</p>
                    <span className="support-escalation-toggle off" />
                  </div>
                  <div className="support-escalation-input-mock">3 attempts</div>
                </div>
              </article>

              <article className="support-escalation-card">
                <div className="support-escalation-card-head">
                  <h3>Escalation Flow</h3>
                </div>

                <div className="support-escalation-flow-list">
                  <div className="support-escalation-flow-item">
                    <span className="support-escalation-flow-step">1</span>
                    <div>
                      <p>Team Lead</p>
                      <strong>Sarah Johnson</strong>
                    </div>
                    <span className="support-escalation-flow-status available">Available</span>
                    <em>SLA: 15 minutes</em>
                  </div>

                  <div className="support-escalation-flow-item">
                    <span className="support-escalation-flow-step">2</span>
                    <div>
                      <p>Department Manager</p>
                      <strong>Michael Chen</strong>
                    </div>
                    <span className="support-escalation-flow-status busy">Busy</span>
                    <em>SLA: 30 minutes</em>
                  </div>

                  <div className="support-escalation-flow-item">
                    <span className="support-escalation-flow-step">3</span>
                    <div>
                      <p>Director</p>
                      <strong>David Rodriguez</strong>
                    </div>
                    <span className="support-escalation-flow-status available">Available</span>
                    <em>SLA: 1 hour</em>
                  </div>
                </div>

                <button type="button" className="support-escalation-modify-btn">
                  Modify Escalation Chain
                </button>
              </article>

              <article className="support-escalation-card">
                <div className="support-escalation-card-head">
                  <h3>Active Escalations</h3>
                </div>

                <div className="support-escalation-active-ticket">
                  <div className="support-escalation-active-top">
                    <span>#001</span>
                    <strong>Payment Processing Error</strong>
                  </div>
                  <p>Customer: John Smith</p>
                  <div className="support-escalation-active-meta">
                    <span>Level: 2</span>
                    <span>12m ago</span>
                  </div>
                  <div className="support-escalation-progress-track">
                    <span className="support-escalation-progress-fill" />
                  </div>
                  <p className="support-escalation-progress-text">18m remaining</p>
                </div>
              </article>

              <article className="support-escalation-card">
                <div className="support-escalation-card-head">
                  <h3>Escalation Statistics</h3>
                </div>

                <div className="support-escalation-stats-panel">
                  <div>
                    <span>Resolution Success</span>
                    <strong>85%</strong>
                  </div>
                  <div>
                    <span>Level 1</span>
                    <strong>56%</strong>
                  </div>
                  <div>
                    <span>Level 2</span>
                    <strong>29%</strong>
                  </div>
                </div>
              </article>
            </div>
          </section>
        ) : (
          <section className="support-sla-content">
            <SLAStats />
            <SLAFilters />
            <SLATable />
          </section>
        )}
      </main>
    </div>
  )
}

export default SLAManagement
