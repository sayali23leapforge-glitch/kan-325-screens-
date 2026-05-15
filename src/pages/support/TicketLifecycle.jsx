import React from "react";
import SupportSidebar from "../../components/support/SupportSidebar";
import "./ticket-lifecycle.css";
import { FiBell, FiFilter } from "react-icons/fi";

const newTickets = [
  { id: "#TK-021", priority: "High", title: "Login issue with mobile app", customer: "Jane Smith", time: "1hr ago" },
  { id: "#TK-022", priority: "Med", title: "Feature request for dashboard", customer: "Alex Miller", time: "3hr ago" },
  { id: "#TK-023", priority: "Low", title: "Update contact information", customer: "Mike Chan", time: "4hr ago" },
];

const inProgressTickets = [
  { id: "#TK-031", priority: "Med", title: "Database connection error", customer: "Sarah Kim", time: "10h ago" },
  { id: "#TK-032", priority: "Low", title: "API help test questions", customer: "Tech Team", time: "22m ago" },
];

const pendingTickets = [
  { id: "#TK-041", priority: "Med", title: "Waiting for customer response", customer: "Sara Williams", time: "8 ago" },
  { id: "#TK-042", priority: "Low", title: "Billing inquiry pending review", customer: "Robert Kim", time: "2h ago" },
];

const resolvedTickets = [
  { id: "#TK-051", status: "Closed", title: "Password reset completed", customer: "Amy Foster", time: "20m ago" },
  { id: "#TK-052", status: "Closed", title: "Account access restored", customer: "David Park", time: "1h ago" },
];

const priorityBadge = (priority) => {
  if (priority === "High") return { bg: "#FEE2E2", color: "#B91C1C" };
  if (priority === "Med") return { bg: "#FEF9C3", color: "#A16207" };
  return { bg: "#DCFCE7", color: "#15803D" };
};

const TicketLifecycle = () => {
  return (
    <div className="tl-shell">
      <div className="tl-sidebar">
        <SupportSidebar />
      </div>
      <div className="tl-main">
        {/* HEADER */}
        <div className="tl-header">
          <div className="tl-header-left">
            <h1 className="tl-title">Ticket Lifecycle</h1>
            <p className="tl-subtitle">Track and manage ticket progression</p>
          </div>
          <div className="tl-header-right">
            <div className="tl-notif-wrap">
              <button className="tl-notif-btn"><FiBell size={18} /></button>
              <span className="tl-notif-badge">3</span>
            </div>
            <button className="tl-new-btn">+ New Ticket</button>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="tl-cards-row">
          <div className="tl-stat-card blue">
            <div className="tl-stat-inner">
              <div className="tl-stat-label">Open Tickets</div>
              <div className="tl-stat-value">87</div>
              <div className="tl-stat-sub">12 critical</div>
            </div>
            <div className="tl-stat-icon-box">
              <svg width="22" height="22" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
          </div>
          <div className="tl-stat-card green">
            <div className="tl-stat-inner">
              <div className="tl-stat-label">Resolved</div>
              <div className="tl-stat-value">234</div>
              <div className="tl-stat-sub">+12 today</div>
            </div>
            <div className="tl-stat-icon-box">
              <svg width="22" height="22" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>
          <div className="tl-stat-card yellow">
            <div className="tl-stat-inner">
              <div className="tl-stat-label">Pending</div>
              <div className="tl-stat-value">43</div>
              <div className="tl-stat-sub">5 urgent</div>
            </div>
            <div className="tl-stat-icon-box">
              <svg width="22" height="22" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            </div>
          </div>
          <div className="tl-stat-card purple">
            <div className="tl-stat-inner">
              <div className="tl-stat-label">Avg Resolution</div>
              <div className="tl-stat-value">4.2h</div>
              <div className="tl-stat-sub">-0.8 avg</div>
            </div>
            <div className="tl-stat-icon-box">
              <svg width="22" height="22" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="tl-content">
          {/* TICKET FLOW */}
          <div className="tl-flow-card">
            <div className="tl-flow-header">
              <span className="tl-flow-title">Ticket Flow</span>
              <div className="tl-flow-header-right">
                <div className="tl-priority-select">
                  <select>
                    <option>All Priorities</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <button className="tl-filter-btn"><FiFilter size={14} /></button>
              </div>
            </div>
            <div className="tl-kanban">
              {/* NEW */}
              <div className="tl-col col-new">
                <div className="tl-col-header">
                  <span className="tl-col-title">New</span>
                  <span className="tl-col-badge new-badge">3k</span>
                </div>
                {newTickets.map(t => (
                  <div key={t.id} className="tl-ticket-card card-new">
                    <div className="tl-ticket-top">
                      <span className="tl-ticket-id">{t.id}</span>
                      <span className="tl-priority-badge" style={{ background: priorityBadge(t.priority).bg, color: priorityBadge(t.priority).color }}>{t.priority}</span>
                    </div>
                    <div className="tl-ticket-title">{t.title}</div>
                    <div className="tl-ticket-footer">
                      <span className="tl-ticket-customer">{t.customer}</span>
                      <span className="tl-ticket-time">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* IN PROGRESS */}
              <div className="tl-col col-inprogress">
                <div className="tl-col-header">
                  <span className="tl-col-title">In Progress</span>
                  <span className="tl-col-badge inprogress-badge">16</span>
                </div>
                {inProgressTickets.map(t => (
                  <div key={t.id} className="tl-ticket-card card-inprogress">
                    <div className="tl-ticket-top">
                      <span className="tl-ticket-id">{t.id}</span>
                      <span className="tl-priority-badge" style={{ background: priorityBadge(t.priority).bg, color: priorityBadge(t.priority).color }}>{t.priority}</span>
                    </div>
                    <div className="tl-ticket-title">{t.title}</div>
                    <div className="tl-ticket-footer">
                      <span className="tl-ticket-customer">{t.customer}</span>
                      <span className="tl-ticket-time">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* PENDING */}
              <div className="tl-col col-pending">
                <div className="tl-col-header">
                  <span className="tl-col-title">Pending</span>
                  <span className="tl-col-badge pending-badge">52</span>
                </div>
                {pendingTickets.map(t => (
                  <div key={t.id} className="tl-ticket-card card-pending">
                    <div className="tl-ticket-top">
                      <span className="tl-ticket-id">{t.id}</span>
                      <span className="tl-priority-badge" style={{ background: priorityBadge(t.priority).bg, color: priorityBadge(t.priority).color }}>{t.priority}</span>
                    </div>
                    <div className="tl-ticket-title">{t.title}</div>
                    <div className="tl-ticket-footer">
                      <span className="tl-ticket-customer">{t.customer}</span>
                      <span className="tl-ticket-time">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* RESOLVED */}
              <div className="tl-col col-resolved">
                <div className="tl-col-header">
                  <span className="tl-col-title">Resolved</span>
                  <span className="tl-col-badge resolved-badge">21</span>
                </div>
                {resolvedTickets.map(t => (
                  <div key={t.id} className="tl-ticket-card card-resolved">
                    <div className="tl-ticket-top">
                      <span className="tl-ticket-id">{t.id}</span>
                      <span className="tl-status-badge closed">Closed</span>
                    </div>
                    <div className="tl-ticket-title">{t.title}</div>
                    <div className="tl-ticket-footer">
                      <span className="tl-ticket-customer">{t.customer}</span>
                      <span className="tl-ticket-time">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT WIDGETS */}
          <div className="tl-right">
            {/* Priority Breakdown */}
            <div className="tl-widget-card">
              <div className="tl-widget-title">Priority Breakdown</div>
              <div className="tl-priority-row">
                <span className="tl-dot red" />
                <span className="tl-priority-label">High Priority</span>
                <span className="tl-priority-num">23</span>
              </div>
              <div className="tl-priority-bar-bg"><div className="tl-priority-bar" style={{ width: "40%", background: "#EF4444" }} /></div>
              <div className="tl-priority-row">
                <span className="tl-dot yellow" />
                <span className="tl-priority-label">Medium Priority</span>
                <span className="tl-priority-num">41</span>
              </div>
              <div className="tl-priority-bar-bg"><div className="tl-priority-bar" style={{ width: "72%", background: "#EAB308" }} /></div>
              <div className="tl-priority-row">
                <span className="tl-dot green" />
                <span className="tl-priority-label">Low Priority</span>
                <span className="tl-priority-num">23</span>
              </div>
              <div className="tl-priority-bar-bg"><div className="tl-priority-bar" style={{ width: "40%", background: "#22C55E" }} /></div>
            </div>

            {/* Recent Activity */}
            <div className="tl-widget-card">
              <div className="tl-widget-title">Recent Activity</div>
              <div className="tl-activity-list">
                <div className="tl-activity-row">
                  <span className="tl-activity-dot green" />
                  <div className="tl-activity-text">
                    <span className="tl-activity-bold">Ticket #TK-028 resolved</span>
                    <span className="tl-activity-meta">5 min ago</span>
                  </div>
                </div>
                <div className="tl-activity-row">
                  <span className="tl-activity-dot blue" />
                  <div className="tl-activity-text">
                    <span className="tl-activity-bold">New Ticket #TK-031 created</span>
                    <span className="tl-activity-meta">12 min ago</span>
                  </div>
                </div>
                <div className="tl-activity-row">
                  <span className="tl-activity-dot red" />
                  <div className="tl-activity-text">
                    <span className="tl-activity-bold">Ticket #TK-004 escalated</span>
                    <span className="tl-activity-meta">18 min ago</span>
                  </div>
                </div>
                <div className="tl-activity-row">
                  <span className="tl-activity-dot yellow" />
                  <div className="tl-activity-text">
                    <span className="tl-activity-bold">Agent assigned to #TK-011</span>
                    <span className="tl-activity-meta">32 min ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Status */}
            <div className="tl-widget-card">
              <div className="tl-widget-title">SLA Status</div>
              <div className="tl-sla-row">
                <span className="tl-sla-label">On-Time</span>
                <div className="tl-sla-bar-bg"><div className="tl-sla-bar" style={{ width: "80%", background: "#22C55E" }} /></div>
                <span className="tl-sla-pct">80%</span>
              </div>
              <div className="tl-sla-row">
                <span className="tl-sla-label">At Risk</span>
                <div className="tl-sla-bar-bg"><div className="tl-sla-bar" style={{ width: "72%", background: "#EAB308" }} /></div>
                <span className="tl-sla-pct">72%</span>
              </div>
              <div className="tl-sla-row">
                <span className="tl-sla-label">Breached</span>
                <div className="tl-sla-bar-bg"><div className="tl-sla-bar" style={{ width: "48%", background: "#EF4444" }} /></div>
                <span className="tl-sla-pct">48%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketLifecycle;
