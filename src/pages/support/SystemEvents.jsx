import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import {
  FiBell,
  FiZap,
  FiCheckCircle,
  FiAlertTriangle,
  FiCpu,
  FiList,
  FiSend,
  FiFilter,
} from "react-icons/fi";
import SupportSidebar from "../../components/support/SupportSidebar";
import "./system-events.css";

// --- DATA ---
const pieData = [
  { name: "Ticket Created", value: 38, color: "#A855F7" },
  { name: "Agent Assignment", value: 22, color: "#3B82F6" },
  { name: "Status Update", value: 18, color: "#22C55E" },
  { name: "Notification", value: 12, color: "#EAB308" },
  { name: "Other", value: 10, color: "#EF4444" },
];

const trendData = [
  { time: "00:00", events: 12 },
  { time: "02:00", events: 8 },
  { time: "04:00", events: 15 },
  { time: "06:00", events: 22 },
  { time: "08:00", events: 48 },
  { time: "10:00", events: 85 },
  { time: "12:00", events: 72 },
  { time: "14:00", events: 95 },
  { time: "16:00", events: 110 },
  { time: "18:00", events: 88 },
  { time: "20:00", events: 65 },
  { time: "22:00", events: 42 },
];

const liveEvents = [
  {
    id: "#EVT-1234",
    title: "Ticket Created",
    subtitle: "Event ID: EVT-8829-2834",
    detail: "Tenant: Acme Corp.",
    priority: "High",
    priorityColor: "#EF4444",
    status: "Ticket Notification sent",
    borderColor: "#A855F7",
    time: "2 min ago",
    icon: FiZap,
    iconBg: "rgba(168,85,247,0.12)",
    iconColor: "#A855F7",
  },
  {
    id: "#EVT-1235",
    title: "Agent Assignment",
    subtitle: "Event ID: EVT-8831-7291",
    detail: "Agent: John Hodge",
    priority: "Med",
    priorityColor: "#EAB308",
    status: "Status: Notification sent",
    borderColor: "#3B82F6",
    time: "5 min ago",
    icon: FiCpu,
    iconBg: "rgba(59,130,246,0.12)",
    iconColor: "#3B82F6",
  },
  {
    id: "#EVT-1236",
    title: "Ticket Resolved",
    subtitle: "Event ID: EVT-8830-1834",
    detail: "Resolution Time: 2h 34m",
    priority: "Low",
    priorityColor: "#22C55E",
    status: "Status: Compliance",
    borderColor: "#22C55E",
    time: "8 min ago",
    icon: FiCheckCircle,
    iconBg: "rgba(34,197,94,0.12)",
    iconColor: "#22C55E",
  },
];

const PRIORITY_BADGE_STYLE = {
  High: { background: "#FEE2E2", color: "#B91C1C" },
  Med: { background: "#FEF9C3", color: "#A16207" },
  Low: { background: "#DCFCE7", color: "#15803D" },
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 6, padding: "6px 12px" }}>
        <p style={{ color: "#fff", fontSize: 12, margin: 0 }}>{payload[0].name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function SystemEvents() {
  return (
    <div className="se-shell">
      <div className="se-sidebar">
        <SupportSidebar />
      </div>

      <main className="se-main">
        {/* HEADER */}
        <div className="se-header">
          <div className="se-header-left">
            <h1 className="se-title">System Event Monitor</h1>
            <p className="se-subtitle">Real-time event tracking and processing</p>
          </div>
          <div className="se-header-right">
            <div className="se-notif-wrap">
              <button className="se-notif-btn"><FiBell size={18} /></button>
              <span className="se-notif-badge">3</span>
            </div>
            <button className="se-create-btn">
              <FiZap size={14} style={{ marginRight: 6 }} />
              Create Event
            </button>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="se-cards-row">
          <div className="se-stat-card se-card-purple">
            <div className="se-stat-inner">
              <span className="se-stat-label">Events Today</span>
              <span className="se-stat-value">1,247</span>
              <span className="se-stat-sub">156 new events</span>
            </div>
            <div className="se-stat-icon-box">
              <FiZap size={22} color="#fff" />
            </div>
          </div>
          <div className="se-stat-card se-card-blue">
            <div className="se-stat-inner">
              <span className="se-stat-label">Processing</span>
              <span className="se-stat-value">43</span>
              <span className="se-stat-sub">Currently active</span>
            </div>
            <div className="se-stat-icon-box">
              <FiCpu size={22} color="#fff" />
            </div>
          </div>
          <div className="se-stat-card se-card-green">
            <div className="se-stat-inner">
              <span className="se-stat-label">Completed</span>
              <span className="se-stat-value">1,189</span>
              <span className="se-stat-sub">Active accounts</span>
            </div>
            <div className="se-stat-icon-box">
              <FiCheckCircle size={22} color="#fff" />
            </div>
          </div>
          <div className="se-stat-card se-card-red">
            <div className="se-stat-inner">
              <span className="se-stat-label">Failed</span>
              <span className="se-stat-value">15</span>
              <span className="se-stat-sub">Require attention</span>
            </div>
            <div className="se-stat-icon-box">
              <FiAlertTriangle size={22} color="#fff" />
            </div>
          </div>
        </div>

        {/* EVENT PROCESSING FLOW */}
        <div className="se-section-card">
          <div className="se-section-header">
            <span className="se-section-title">Event Processing Flow</span>
            <div className="se-section-links">
              <a href="#" className="se-link se-link-purple">Run Now</a>
              <a href="#" className="se-link se-link-gray">Advanced</a>
            </div>
          </div>
          <div className="se-flow-row">
            {/* Card 1: Event Captured */}
            <div className="se-flow-card se-flow-purple">
              <div className="se-flow-card-top">
                <div className="se-flow-icon-box se-fib-purple"><FiZap size={16} color="#fff" /></div>
                <span className="se-phase-badge se-phase-purple">Phase 1</span>
              </div>
              <div className="se-flow-card-title">Event Captured</div>
              <div className="se-flow-card-sub">Realtime data captured</div>
              <ul className="se-flow-list">
                <li>Company sources detected</li>
                <li>Event schema validated</li>
                <li>Metadata parsed</li>
                <li>Priority assigned</li>
              </ul>
            </div>
            {/* Card 2: Rules Evaluated */}
            <div className="se-flow-card se-flow-blue">
              <div className="se-flow-card-top">
                <div className="se-flow-icon-box se-fib-blue"><FiList size={16} color="#fff" /></div>
                <span className="se-phase-badge se-phase-blue">Phase 2</span>
              </div>
              <div className="se-flow-card-title">Rules Evaluated</div>
              <div className="se-flow-card-sub">Automation rules checked</div>
              <ul className="se-flow-list">
                <li>Automation rules checked</li>
                <li>Conditions validated</li>
                <li>Notification triggered</li>
                <li>Admin logged</li>
              </ul>
            </div>
            {/* Card 3: Recipients Filtered */}
            <div className="se-flow-card se-flow-green">
              <div className="se-flow-card-top">
                <div className="se-flow-icon-box se-fib-green"><FiSend size={16} color="#fff" /></div>
                <span className="se-phase-badge se-phase-green">Phase 3</span>
              </div>
              <div className="se-flow-card-title">Recipients Filtered</div>
              <div className="se-flow-card-sub">Target audience selected</div>
              <ul className="se-flow-list">
                <li>User preferences applied</li>
                <li>Notification settings</li>
                <li>An/another removed</li>
                <li>Delivery checked</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PIPELINE */}
        <div className="se-section-card se-pipeline-card">
          <div className="se-section-header">
            <span className="se-section-title">Event Processing Pipeline</span>
          </div>
          <div className="se-pipeline-row">
            <div className="se-pipeline-block">
              <div className="se-pipeline-block-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div className="se-pip-icon-box se-pip-purple"><FiList size={13} color="#A855F7" /></div>
                  <span className="se-pip-label">Event Queue</span>
                </div>
                <span className="se-pip-pct se-pip-pct-purple">35%</span>
              </div>
              <div className="se-pip-bar-bg">
                <div className="se-pip-bar se-pip-bar-purple" style={{ width: "35%" }} />
              </div>
              <span className="se-pip-sublabel">1,247 events queued</span>
            </div>

            <div className="se-pipeline-arrow">→</div>

            <div className="se-pipeline-block">
              <div className="se-pipeline-block-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div className="se-pip-icon-box se-pip-blue"><FiCpu size={13} color="#3B82F6" /></div>
                  <span className="se-pip-label">Processing Engine</span>
                </div>
                <span className="se-pip-pct se-pip-pct-blue">68%</span>
              </div>
              <div className="se-pip-bar-bg">
                <div className="se-pip-bar se-pip-bar-blue" style={{ width: "68%" }} />
              </div>
              <span className="se-pip-sublabel">High throughput active</span>
            </div>

            <div className="se-pipeline-arrow">→</div>

            <div className="se-pipeline-block">
              <div className="se-pipeline-block-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div className="se-pip-icon-box se-pip-green"><FiCheckCircle size={13} color="#22C55E" /></div>
                  <span className="se-pip-label">Delivery Queue</span>
                </div>
                <span className="se-pip-pct se-pip-pct-green">92%</span>
              </div>
              <div className="se-pip-bar-bg">
                <div className="se-pip-bar se-pip-bar-green" style={{ width: "92%" }} />
              </div>
              <span className="se-pip-sublabel">92% completion rate</span>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="se-charts-row">
          {/* Pie chart */}
          <div className="se-chart-card se-pie-card">
            <div className="se-section-title se-chart-title">Event Types Distribution</div>
            <div className="se-pie-wrap">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={78}
                    innerRadius={0}
                    dataKey="value"
                    paddingAngle={1}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="se-pie-legend">
              {pieData.map((item) => (
                <div key={item.name} className="se-legend-row">
                  <span className="se-legend-dot" style={{ background: item.color }} />
                  <span className="se-legend-label">{item.name}</span>
                  <span className="se-legend-val">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Line / Area chart */}
          <div className="se-chart-card se-line-card">
            <div className="se-section-title se-chart-title">Event Trends (Last 24 Hours)</div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="seLineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1E293B",
                    border: "1px solid #334155",
                    borderRadius: 6,
                    fontSize: 12,
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="events"
                  stroke="#A855F7"
                  strokeWidth={2.5}
                  fill="url(#seLineGrad)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#A855F7" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BOTTOM: LIVE EVENT STREAM + FILTERS */}
        <div className="se-bottom-row">
          {/* Live Event Stream */}
          <div className="se-stream-card">
            <div className="se-stream-header">
              <span className="se-section-title">Live Event Stream</span>
              <span className="se-live-badge">● Live</span>
            </div>
            <div className="se-stream-list">
              {liveEvents.map((ev, i) => {
                const Icon = ev.icon;
                const badgeStyle = PRIORITY_BADGE_STYLE[ev.priority] || {};
                return (
                  <div key={i} className="se-event-card" style={{ borderLeft: `4px solid ${ev.borderColor}` }}>
                    <div className="se-event-icon-box" style={{ background: ev.iconBg }}>
                      <Icon size={16} color={ev.iconColor} />
                    </div>
                    <div className="se-event-body">
                      <div className="se-event-row1">
                        <span className="se-event-title">{ev.title}</span>
                        <span className="se-event-time">{ev.time}</span>
                      </div>
                      <div className="se-event-row2">
                        <span className="se-event-id">{ev.subtitle}</span>
                        <span
                          className="se-priority-badge"
                          style={{ background: badgeStyle.background, color: badgeStyle.color }}
                        >
                          {ev.priority}
                        </span>
                      </div>
                      <div className="se-event-detail">{ev.detail}</div>
                      <div className="se-event-status">{ev.status}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event Filters */}
          <div className="se-filter-card">
            <div className="se-section-title" style={{ marginBottom: 16 }}>Event Filters</div>

            <label className="se-filter-label">Event Type</label>
            <select className="se-filter-select">
              <option>All Types</option>
              <option>Ticket Created</option>
              <option>Agent Assignment</option>
              <option>Status Update</option>
            </select>

            <label className="se-filter-label">Priority</label>
            <select className="se-filter-select">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <label className="se-filter-label">Status</label>
            <select className="se-filter-select">
              <option>All Status</option>
              <option>Processing</option>
              <option>Completed</option>
              <option>Failed</option>
            </select>

            <label className="se-filter-label">Time Range</label>
            <select className="se-filter-select">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>

            <button className="se-apply-btn">Apply Filters</button>
            <button className="se-reset-btn">Reset Filters</button>
          </div>
        </div>
      </main>
    </div>
  );
}
