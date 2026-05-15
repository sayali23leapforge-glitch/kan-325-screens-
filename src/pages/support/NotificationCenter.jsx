import React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  FiAlertTriangle,
  FiBell,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiSend,
  FiSettings,
  FiZap,
} from "react-icons/fi"
import SupportSidebar from "../../components/support/SupportSidebar"
import "./notification-center.css"

const pieData = [
  { name: "Email", value: 30, color: "#3B82F6" },
  { name: "SMS", value: 22, color: "#22C55E" },
  { name: "Push", value: 18, color: "#EAB308" },
  { name: "In-App", value: 20, color: "#A855F7" },
  { name: "Webhook", value: 10, color: "#EF4444" },
]

const timelineData = [
  { t: "00:00", v: 14 },
  { t: "02:00", v: 10 },
  { t: "04:00", v: 16 },
  { t: "06:00", v: 30 },
  { t: "08:00", v: 58 },
  { t: "10:00", v: 90 },
  { t: "12:00", v: 76 },
  { t: "14:00", v: 64 },
  { t: "16:00", v: 52 },
  { t: "18:00", v: 72 },
  { t: "20:00", v: 48 },
  { t: "22:00", v: 28 },
]

const recentNotifications = [
  {
    title: "New Ticket Assignment",
    id: "Notification ID: NOT-2026-00076",
    type: "Type: Email",
    status: "Status: Delivered",
    time: "2 min ago",
    tone: "blue",
    icon: FiMail,
  },
  {
    title: "Ticket Resolution Alert",
    id: "Notification ID: NOT-2026-00074",
    type: "Type: Push",
    status: "Status: Delivered",
    time: "5 min ago",
    tone: "green",
    icon: FiCheckCircle,
  },
  {
    title: "SLA Reminder",
    id: "Notification ID: NOT-2026-00073",
    type: "Type: In-App",
    status: "Status: Read",
    time: "7 min ago",
    tone: "yellow",
    icon: FiClock,
  },
  {
    title: "Escalation Notice",
    id: "Notification ID: NOT-2026-00072",
    type: "Type: In-App",
    status: "Status: Opened",
    time: "9 min ago",
    tone: "purple",
    icon: FiBell,
  },
  {
    title: "Delivery Failure Alert",
    id: "Notification ID: NOT-2026-00071",
    type: "Type: Email",
    status: "Status: Failed",
    time: "12 min ago",
    tone: "red",
    icon: FiAlertTriangle,
  },
]

function PieTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className="nc-tooltip">{payload[0].name}: {payload[0].value}%</div>
  )
}

export default function NotificationCenter() {
  return (
    <div className="nc-shell">
      <div className="nc-sidebar">
        <SupportSidebar />
      </div>

      <main className="nc-main">
        <header className="nc-header">
          <div>
            <h1 className="nc-title">Notification Center</h1>
            <p className="nc-subtitle">Manage and monitor all notification activities</p>
          </div>
          <div className="nc-header-right">
            <div className="nc-bell-wrap">
              <button type="button" className="nc-bell-btn" aria-label="Notifications">
                <FiBell size={16} />
              </button>
              <span className="nc-bell-badge">12</span>
            </div>
            <button type="button" className="nc-new-btn">
              <FiZap size={13} />
              <span>New Notification</span>
            </button>
          </div>
        </header>

        <section className="nc-cards-row">
          <article className="nc-stat-card nc-card-blue">
            <div>
              <p className="nc-stat-label">Total Sent</p>
              <p className="nc-stat-value">8,947</p>
              <p className="nc-stat-sub">+325 from last week</p>
            </div>
            <div className="nc-stat-icon"><FiSend size={18} /></div>
          </article>

          <article className="nc-stat-card nc-card-green">
            <div>
              <p className="nc-stat-label">Delivered</p>
              <p className="nc-stat-value">8,523</p>
              <p className="nc-stat-sub">95.2% success rate</p>
            </div>
            <div className="nc-stat-icon"><FiCheckCircle size={18} /></div>
          </article>

          <article className="nc-stat-card nc-card-yellow">
            <div>
              <p className="nc-stat-label">Pending</p>
              <p className="nc-stat-value">287</p>
              <p className="nc-stat-sub">In queue now</p>
            </div>
            <div className="nc-stat-icon"><FiClock size={18} /></div>
          </article>

          <article className="nc-stat-card nc-card-red">
            <div>
              <p className="nc-stat-label">Failed</p>
              <p className="nc-stat-value">137</p>
              <p className="nc-stat-sub">Requires attention</p>
            </div>
            <div className="nc-stat-icon"><FiAlertTriangle size={18} /></div>
          </article>
        </section>

        <section className="nc-panel nc-flow-panel">
          <div className="nc-panel-head">
            <div>
              <p className="nc-panel-title">Notification Flow</p>
              <p className="nc-panel-sub">How notifications are processed and delivered</p>
            </div>
            <div className="nc-panel-tags">
              <span className="nc-tag nc-tag-blue">Active</span>
              <span className="nc-tag nc-tag-green">Real-time</span>
            </div>
          </div>

          <div className="nc-flow-grid">
            <article className="nc-flow-card flow-purple">
              <div className="nc-flow-top">
                <span className="nc-step-badge step-purple">Step 1</span>
              </div>
              <div className="nc-flow-title-row">
                <div className="nc-flow-icon fib-purple"><FiZap size={14} /></div>
                <h3>Event Trigger</h3>
              </div>
              <p>Source event captured</p>
              <ul>
                <li>Rule matched</li>
                <li>Priority assigned</li>
              </ul>
            </article>

            <article className="nc-flow-card flow-blue">
              <div className="nc-flow-top">
                <span className="nc-step-badge step-blue">Step 2</span>
              </div>
              <div className="nc-flow-title-row">
                <div className="nc-flow-icon fib-blue"><FiSettings size={14} /></div>
                <h3>Center Processing</h3>
              </div>
              <p>Notification prepared</p>
              <ul>
                <li>Template selected</li>
                <li>Recipients filtered</li>
              </ul>
            </article>

            <article className="nc-flow-card flow-green">
              <div className="nc-flow-top">
                <span className="nc-step-badge step-green">Step 3</span>
              </div>
              <div className="nc-flow-title-row">
                <div className="nc-flow-icon fib-green"><FiMail size={14} /></div>
                <h3>Email Delivery</h3>
              </div>
              <p>Email notifications sent</p>
              <ul>
                <li>SMTP validated</li>
                <li>Delivery queued</li>
              </ul>
            </article>

            <article className="nc-flow-card flow-orange">
              <div className="nc-flow-top">
                <span className="nc-step-badge step-orange">Step 4</span>
              </div>
              <div className="nc-flow-title-row">
                <div className="nc-flow-icon fib-orange"><FiBell size={14} /></div>
                <h3>In-App Alert</h3>
              </div>
              <p>Push notification sent</p>
              <ul>
                <li>User receives alert</li>
                <li>Status updated</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="nc-charts-row">
          <article className="nc-panel nc-chart-panel nc-pie-panel">
            <p className="nc-panel-title">Event Types Distribution</p>
            <div className="nc-pie-wrap">
              <ResponsiveContainer width="100%" height={185}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={74} paddingAngle={1}>
                    {pieData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="nc-legend">
              {pieData.map((item) => (
                <div key={item.name} className="nc-legend-row">
                  <span className="nc-dot" style={{ background: item.color }} />
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="nc-panel nc-chart-panel nc-line-panel">
            <p className="nc-panel-title">Event Timeline (Last 24 Hours)</p>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={timelineData} margin={{ top: 12, right: 10, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="ncArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 6, border: "1px solid #CBD5E1", fontSize: 12 }} />
                <Area type="monotone" dataKey="v" stroke="#A855F7" strokeWidth={2.2} fill="url(#ncArea)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </article>
        </section>

        <section className="nc-bottom-row">
          <article className="nc-panel nc-recent-panel">
            <div className="nc-panel-head">
              <p className="nc-panel-title">Recent Notifications</p>
              <span className="nc-live-updates">Live Updates</span>
            </div>

            <div className="nc-recent-list">
              {recentNotifications.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className={`nc-recent-card tone-${item.tone}`}>
                    <div className="nc-recent-icon">
                      <Icon size={14} />
                    </div>
                    <div className="nc-recent-content">
                      <div className="nc-recent-top">
                        <h4>{item.title}</h4>
                        <span>{item.time}</span>
                      </div>
                      <p>{item.id}</p>
                      <p>{item.type}</p>
                      <p>{item.status}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </article>

          <article className="nc-panel nc-settings-panel">
            <p className="nc-panel-title">Notification Settings</p>

            <div className="nc-setting-group">
              <p className="nc-label">Delivery Preferences</p>
              <label><input type="checkbox" defaultChecked /> Email notifications</label>
              <label><input type="checkbox" defaultChecked /> In-app alerts</label>
              <label><input type="checkbox" defaultChecked /> SMS notifications</label>
              <label><input type="checkbox" /> Push notifications</label>
            </div>

            <div className="nc-setting-group">
              <p className="nc-label">Priority Levels</p>
              <div className="nc-priority-row"><span>Critical</span><em className="pill red">High</em></div>
              <div className="nc-priority-row"><span>Warning</span><em className="pill yellow">Medium</em></div>
              <div className="nc-priority-row"><span>Info</span><em className="pill blue">Normal</em></div>
            </div>

            <div className="nc-setting-group">
              <p className="nc-label">Quiet Hours</p>
              <div className="nc-time-row">
                <input type="time" defaultValue="22:00" />
                <span>to</span>
                <input type="time" defaultValue="06:00" />
              </div>
            </div>

            <label className="nc-checkbox-row"><input type="checkbox" defaultChecked /> Enable quiet hours</label>

            <button type="button" className="nc-save-btn">Save Settings</button>
          </article>
        </section>
      </main>
    </div>
  )
}
