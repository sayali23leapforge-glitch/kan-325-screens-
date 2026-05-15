import React from "react";
import "./all-channels.css";
import SupportSidebar from "../../components/support/SupportSidebar";
import { FiBell, FiAlertCircle, FiClock, FiHash, FiTag, FiCheckCircle, FiMessageSquare, FiCast, FiBarChart2, FiSettings } from "react-icons/fi";

const AllChannels = () => {
  return (
    <div style={{ display: "flex", background: "#F9FAFB", minHeight: "100vh" }}>
      <div style={{ width: "245.75px", flex: "0 0 245.75px", background: "#1E293B", minHeight: "100vh" }}>
        <SupportSidebar />
      </div>
      <div style={{ flex: 1 }}>
        <div className="all-channels-bg">
      <div className="all-channels-header">
        <div className="all-channels-header-left">
          <div className="all-channels-title">All Channels</div>
          <div className="all-channels-subtitle">Unified view from all communication channels</div>
        </div>
        <div className="all-channels-header-right">
          <button className="all-channels-notification-btn">
            <FiBell size={20} />
          </button>
          <button className="all-channels-manage-btn">Manage Channels</button>
        </div>
      </div>
      <div className="all-channels-cards-row">
        <div className="all-channels-card blue">
          <div className="all-channels-card-title">Text Messages</div>
          <div className="all-channels-card-value">312</div>
          <div className="all-channels-card-desc">Critical</div>
        </div>
        <div className="all-channels-card green">
          <div className="all-channels-card-title">Active Chats</div>
          <div className="all-channels-card-value">45</div>
          <div className="all-channels-card-desc">Ongoing</div>
        </div>
        <div className="all-channels-card purple">
          <div className="all-channels-card-title">Social Mentions</div>
          <div className="all-channels-card-value">33</div>
          <div className="all-channels-card-desc">Engage</div>
        </div>
        <div className="all-channels-card orange">
          <div className="all-channels-card-title">Response Time</div>
          <div className="all-channels-card-value">2.3m</div>
          <div className="all-channels-card-desc">Average</div>
        </div>
      </div>
      <div className="all-channels-content">
        <div className="all-channels-left">
          <div className="all-channels-activity-card">
            <div className="all-channels-activity-header">
              Channel Activity
              <button className="all-channels-activity-btn">All Channels</button>
            </div>
            <div className="all-channels-activity-list">
              {/* Activity rows go here */}
              <div className="all-channels-activity-row high">
                <FiAlertCircle size={20} color="#EF4444" />
                <div className="activity-main">
                  <div className="activity-title">High Priority Email <span className="activity-badge urgent">Urgent</span></div>
                  <div className="activity-desc">Customer request: Service disruption issue – requires immediate attention</div>
                  <div className="activity-footer">
                    <span className="activity-meta">5m ago • Email</span>
                    <button className="activity-action">Convert to Ticket</button>
                  </div>
                </div>
              </div>
              <div className="all-channels-activity-row active">
                <FiClock size={20} color="#22C55E" />
                <div className="activity-main">
                  <div className="activity-title">Active Chat Session <span className="activity-badge ongoing">Ongoing</span></div>
                  <div className="activity-desc">Live chat with customer about issue tracking update.</div>
                  <div className="activity-footer">
                    <span className="activity-meta">12m ago • Chat</span>
                    <button className="activity-action">Convert to Ticket</button>
                  </div>
                </div>
              </div>
              <div className="all-channels-activity-row social">
                <FiHash size={20} color="#6366F1" />
                <div className="activity-main">
                  <div className="activity-title">Social Media Mention <span className="activity-badge engage">Engage</span></div>
                  <div className="activity-desc">@customer: Service issue update question raised on Twitter.</div>
                  <div className="activity-footer">
                    <span className="activity-meta">20m ago • Twitter</span>
                    <button className="activity-action">Convert to Ticket</button>
                  </div>
                </div>
              </div>
              <div className="all-channels-activity-row support">
                <FiTag size={20} color="#2563EB" />
                <div className="activity-main">
                  <div className="activity-title">Support Ticket <span className="activity-badge ticket">Ticket</span></div>
                  <div className="activity-desc">Ticket #12345: SLA response time met. Monitoring ongoing.</div>
                  <div className="activity-footer">
                    <span className="activity-meta">1h ago • Ticket</span>
                    <button className="activity-action">Convert to Ticket</button>
                  </div>
                </div>
              </div>
              <div className="all-channels-activity-row resolved">
                <FiCheckCircle size={20} color="#22D3EE" />
                <div className="activity-main">
                  <div className="activity-title">Issue Resolved <span className="activity-badge archive">Archive</span></div>
                  <div className="activity-desc">Service outage successfully completed for customer.</div>
                  <div className="activity-footer">
                    <span className="activity-meta">2h ago • System</span>
                    <button className="activity-action">Archive</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-channels-right">
          <div className="all-channels-quick-actions">
            <div className="quick-action-card blue">
              <FiMessageSquare size={20} />
              <div>New Message</div>
            </div>
            <div className="quick-action-card green">
              <FiCast size={20} />
              <div>Broadcast</div>
            </div>
            <div className="quick-action-card purple">
              <FiBarChart2 size={20} />
              <div>Analytics</div>
            </div>
            <div className="quick-action-card orange">
              <FiSettings size={20} />
              <div>Settings</div>
            </div>
          </div>
          <div className="all-channels-status-card">
            <div className="status-title">Channel Status</div>
            <div className="status-list">
              <div className="status-row"><span className="status-dot live" />Live Chat</div>
              <div className="status-row"><span className="status-dot" />Voice Call</div>
              <div className="status-row"><span className="status-dot" />Email</div>
              <div className="status-row"><span className="status-dot" />Social</div>
            </div>
          </div>
          <div className="all-channels-team-card">
            <div className="team-title">Team Performance</div>
            <div className="team-list">
              <div className="team-row">
                <span className="team-avatar" />
                <div className="team-info">
                  <div className="team-name">Jane Meyers</div>
                  <div className="team-role">Lead Agent</div>
                </div>
                <span className="team-status good" />
              </div>
              <div className="team-row">
                <span className="team-avatar" />
                <div className="team-info">
                  <div className="team-name">Sarah Wilson</div>
                  <div className="team-role">Senior Agent</div>
                </div>
                <span className="team-status avg" />
              </div>
              <div className="team-row">
                <span className="team-avatar" />
                <div className="team-info">
                  <div className="team-name">Chris Lee</div>
                  <div className="team-role">Agent</div>
                </div>
                <span className="team-status poor" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AllChannels;
