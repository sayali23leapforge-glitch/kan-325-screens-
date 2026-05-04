import React, { useState } from 'react';
import {
  FiArrowLeft,
  FiBell,
  FiFilter,
  FiDownload,
  FiMoreVertical,
  FiChevronRight,
  FiCheckCircle,
  FiAlertCircle,
  FiPlusCircle,
  FiShield,
  FiLock,
  FiSmartphone,
  FiClock,
} from 'react-icons/fi';
import AdditionalPolicyControls from './AdditionalPolicyControls';
import './security-policies-sp1.css';

const SecurityPoliciesSP1Page = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const recentChanges = [
    {
      id: 1,
      title: 'Password complexity updated',
      subtitle: 'Minimum length increased to 12 characters',
      timestamp: '2 hours ago',
      icon: 'password',
      color: '#9333EA',
    },
    {
      id: 2,
      title: 'MFA grace period reduced',
      subtitle: 'Changed from 14 days to 7 days',
      timestamp: '1 day ago',
      icon: 'mfa',
      color: '#2563EB',
    },
    {
      id: 3,
      title: 'Session timeout adjusted',
      subtitle: 'Idle timeout set to 30 minutes',
      timestamp: '3 days ago',
      icon: 'session',
      color: '#16A34A',
    },
  ];

  return (
    <div className="security-policies-sp1-wrapper">
      {/* Header */}
      <div className="sp1-header">
        <div className="header-left">
          <button className="back-button" onClick={onBack}>
            <FiArrowLeft size={16} />
            <span>Back</span>
          </button>
          <div className="breadcrumb">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item">IAM</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Security Policies</span>
          </div>
        </div>
        <div className="header-right">
          <div className="notification-badge">
            <FiBell size={18} color="#374151" />
            <span className="badge-count">12</span>
          </div>
          <button className="btn-new-policy">
            <FiPlusCircle size={16} />
            New Policy
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Security Compliance Overview</h2>
            <p className="hero-subtitle">
              Monitor and manage your organization's security policy compliance
            </p>
          </div>
          <div className="hero-icon">
            <FiShield size={56} color="#FFFFFF" />
          </div>
        </div>
        <div className="hero-metrics">
          <div className="metric-card">
            <div className="metric-value">94%</div>
            <div className="metric-label">Compliance Score</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">12</div>
            <div className="metric-label">Active Policies</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">3</div>
            <div className="metric-label">Violations</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">2h</div>
            <div className="metric-label">Last Updated</div>
          </div>
        </div>
      </div>

      {/* Policy Categories Header */}
      <div className="section-header">
        <h3 className="section-title">Policy Categories</h3>
        <div className="section-actions">
          <button className="action-btn secondary">
            <FiFilter size={14} />
            Filter
          </button>
          <button className="action-btn secondary">
            <FiDownload size={14} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Policy Cards */}
      <div className="policy-cards-grid">
        {/* Password Policy */}
        <div className="policy-card">
          <div className="card-header password-header">
            <div className="card-header-icon password-icon">
              <FiLock size={28} color="#9333EA" />
            </div>
            <div className="status-badge compliant">
              <span className="badge-dot"></span>
              COMPLIANT
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Password Policy</h3>
            <p className="card-subtitle">
              Enforce strong password requirements and rotation schedules
            </p>
            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">Minimum Length</span>
                <span className="detail-value">12 characters</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Rotation Period</span>
                <span className="detail-value">90 days</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">History Check</span>
                <span className="detail-value">Last 5</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Complexity</span>
                <span className="detail-value">High</span>
              </div>
            </div>
            <div className="compliance-section">
              <div className="compliance-label">Compliance Rate</div>
              <div className="compliance-rate">
                <div className="rate-value">98%</div>
                <div className="progress-bar">
                  <div className="progress-fill password-progress" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="configure-btn">Configure</button>
            <button className="more-btn">
              <FiMoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Multi-Factor Authentication */}
        <div className="policy-card">
          <div className="card-header mfa-header">
            <div className="card-header-icon mfa-icon">
              <FiSmartphone size={28} color="#2563EB" />
            </div>
            <div className="status-badge partial">
              <span className="badge-dot"></span>
              PARTIAL
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Multi-Factor Authentication</h3>
            <p className="card-subtitle">
              Require additional verification for secure access
            </p>
            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">Enforcement</span>
                <span className="detail-value">Required</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Enrolled Users</span>
                <span className="detail-value">189 / 247</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Allowed Methods</span>
                <span className="detail-value">4 types</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Grace Period</span>
                <span className="detail-value">7 days</span>
              </div>
            </div>
            <div className="compliance-section">
              <div className="compliance-label">Compliance Rate</div>
              <div className="compliance-rate">
                <div className="rate-value">76%</div>
                <div className="progress-bar">
                  <div className="progress-fill mfa-progress" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="configure-btn">Configure</button>
            <button className="more-btn">
              <FiMoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Session Management */}
        <div className="policy-card">
          <div className="card-header session-header">
            <div className="card-header-icon session-icon">
              <FiClock size={28} color="#16A34A" />
            </div>
            <div className="status-badge compliant">
              <span className="badge-dot"></span>
              COMPLIANT
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Session Management</h3>
            <p className="card-subtitle">
              Control session timeout and concurrent login policies
            </p>
            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">Idle Timeout</span>
                <span className="detail-value">30 minutes</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Max Duration</span>
                <span className="detail-value">8 hours</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Concurrent Sessions</span>
                <span className="detail-value">3 devices</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Auto Logout</span>
                <span className="detail-value">Enabled</span>
              </div>
            </div>
            <div className="compliance-section">
              <div className="compliance-label">Compliance Rate</div>
              <div className="compliance-rate">
                <div className="rate-value">100%</div>
                <div className="progress-bar">
                  <div className="progress-fill session-progress" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="configure-btn">Configure</button>
            <button className="more-btn">
              <FiMoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Security Cards */}
      <div className="additional-cards">
        <div className="additional-card">
          <div className="card-icon-block ip-icon">
            <FiAlertCircle size={24} color="#DC2626" />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <h4 className="card-subtitle-alt">IP Allowlist Policy</h4>
              <div className="status-badge active">
                <span className="badge-dot"></span>
                ACTIVE
              </div>
            </div>
            <p className="card-description">
              Restrict access to approved IP addresses and ranges
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <span className="stat-label">Allowed IPs</span>
                <span className="stat-value">24 ranges</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Blocked Today</span>
                <span className="stat-value">7 attempts</span>
              </div>
            </div>
          </div>
          <div className="card-action">
            <FiChevronRight size={18} color="#6B7280" />
          </div>
        </div>

        <div className="additional-card">
          <div className="card-icon-block lockout-icon">
            <FiAlertCircle size={24} color="#F59E0B" />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <h4 className="card-subtitle-alt">Account Lockout Policy</h4>
              <div className="status-badge active">
                <span className="badge-dot"></span>
                ACTIVE
              </div>
            </div>
            <p className="card-description">
              Automatically lock accounts after failed login attempts
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <span className="stat-label">Failed Attempts</span>
                <span className="stat-value">5 tries</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Lockout Duration</span>
                <span className="stat-value">15 minutes</span>
              </div>
            </div>
          </div>
          <div className="card-action">
            <FiChevronRight size={18} color="#6B7280" />
          </div>
        </div>
      </div>

      {/* Additional Policy Controls */}
      <AdditionalPolicyControls />

      {/* Recent Policy Changes */}
      <div className="recent-changes-section">
        <div className="section-header">
          <h3 className="section-title">Recent Policy Changes</h3>
          <a href="#" className="view-all-link">View All</a>
        </div>
        <div className="changes-list">
          {recentChanges.map((change, idx) => (
            <div key={change.id} className="change-item">
              <div className="change-icon" style={{ backgroundColor: change.color + '20', borderLeft: `3px solid ${change.color}` }}>
                <FiCheckCircle size={16} color={change.color} />
              </div>
              <div className="change-content">
                <h4 className="change-title">{change.title}</h4>
                <p className="change-subtitle">{change.subtitle}</p>
              </div>
              <span className="change-timestamp">{change.timestamp}</span>
              {idx < recentChanges.length - 1 && <div className="change-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityPoliciesSP1Page;
