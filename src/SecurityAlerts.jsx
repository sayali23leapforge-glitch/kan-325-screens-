import React, { useState } from 'react';
import { FiArrowLeft, FiDownload, FiBell, FiSearch, FiAlertTriangle, FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import './security-alerts.css';

const SecurityAlerts = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [alertsList] = useState([
    {
      id: 1,
      title: 'Multiple Failed Login Attempts Detected',
      severity: 'CRITICAL',
      description: 'Account has been temporarily locked after 5 consecutive failed login attempts from suspicious IP address.',
      affectedUser: 'sarah.johnson@company.com',
      sourceIp: '192.168.1.100',
      timestamp: '2 minutes ago',
      recommendedAction: 'Verify user identity, review login history, and consider implementing MFA for this account.',
      status: 'critical',
      actions: ['Investigate', 'Acknowledge', 'Notify User']
    },
    {
      id: 2,
      title: 'Unauthorized Access Token Usage',
      severity: 'CRITICAL',
      description: 'API access token used from unrecognized location and device. Potential security breach detected.',
      affectedSystem: 'API Gateway - Production',
      location: 'Moscow, Russia',
      timestamp: '8 minutes ago',
      recommendedAction: 'Immediately revoke access token, notify security team, and conduct full security audit of affected systems',
      status: 'critical',
      actions: ['Investigate', 'Acknowledge', 'Revoke Token']
    },

  ]);

  return (
    <div className="security-alerts-wrapper">
      {/* Header */}
      <div className="security-alerts-header">
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
            <span className="breadcrumb-item active">Security Alerts</span>
          </div>
        </div>
        <div className="header-right">
          <button className="btn-export">
            <FiDownload size={14} />
            Export Report
          </button>
          <div className="notification-badge">
            <FiBell size={18} />
            <span className="badge-count">12</span>
          </div>
        </div>
      </div>

      {/* Stats Cards - 4 in one row */}
      <div className="stats-grid-container">
        <div className="stat-card">
          <div className="stat-icon-box" style={{ backgroundColor: '#FEE2E2' }}>
            <FiAlertCircle size={22} color="#DC2626" />
          </div>
          <div className="stat-badge" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>Active</div>
          <div className="stat-number">4</div>
          <div className="stat-label">CRITICAL ALERTS</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-box" style={{ backgroundColor: '#FFEDD5' }}>
            <FiAlertTriangle size={22} color="#EA580C" />
          </div>
          <div className="stat-badge" style={{ backgroundColor: '#FFEDD5', color: '#9A3412' }}>Pending</div>
          <div className="stat-number">6</div>
          <div className="stat-label">WARNING ALERTS</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-box" style={{ backgroundColor: '#DBEAFE' }}>
            <FiInfo size={22} color="#2563EB" />
          </div>
          <div className="stat-badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>Review</div>
          <div className="stat-number">2</div>
          <div className="stat-label">INFO ALERTS</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-box" style={{ backgroundColor: '#DCFCE7' }}>
            <FiCheckCircle size={22} color="#16A34A" />
          </div>
          <div className="stat-badge" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>Today</div>
          <div className="stat-number">18</div>
          <div className="stat-label">RESOLVED</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="filters-container">
        <div className="filter-buttons">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
            All Alerts
          </button>
          <button className={`filter-btn ${activeFilter === 'critical' ? 'active' : ''}`} onClick={() => setActiveFilter('critical')}>
            Critical
          </button>
          <button className={`filter-btn ${activeFilter === 'warning' ? 'active' : ''}`} onClick={() => setActiveFilter('warning')}>
            Warning
          </button>
          <button className={`filter-btn ${activeFilter === 'info' ? 'active' : ''}`} onClick={() => setActiveFilter('info')}>
            Info
          </button>
          <button className={`filter-btn ${activeFilter === 'resolved' ? 'active' : ''}`} onClick={() => setActiveFilter('resolved')}>
            Resolved
          </button>
        </div>
        <div className="search-box">
          <FiSearch size={16} className="search-icon" />
          <input type="text" placeholder="Search alerts..." />
        </div>
        <button className="filter-toggle">
          Filter
        </button>
      </div>

      {/* Critical Alerts Section */}
      <div className="alerts-section">
        <div className="section-header">
          <div className="section-title">
            <FiAlertCircle size={20} color="#DC2626" />
            <span>Critical Alerts</span>
          </div>
          <a href="#" className="view-all-link">View All</a>
        </div>

        {alertsList.filter(alert => alert.status === 'critical').map(alert => (
          <div key={alert.id} className="alert-card alert-critical">
            <div className="alert-header">
              <div className="alert-icon-box" style={{ backgroundColor: '#FEE2E2' }}>
                <FiAlertCircle size={20} color="#DC2626" />
              </div>
              <div className="alert-title-section">
                <h3 className="alert-title">{alert.title}</h3>
                <span className="alert-severity-badge">{alert.severity}</span>
              </div>
            </div>

            <p className="alert-description">{alert.description}</p>

            <div className="alert-details">
              <div className="detail-item">
                <span className="detail-label">Affected User</span>
                <span className="detail-value">{alert.affectedUser || alert.affectedSystem}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Source IP</span>
                <span className="detail-value">{alert.sourceIp || alert.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Timestamp</span>
                <span className="detail-value">{alert.timestamp}</span>
              </div>
            </div>

            <div className="alert-recommendation">
              <div className="recommendation-icon">
                <FiInfo size={14} />
              </div>
              <div className="recommendation-content">
                <span className="recommendation-label">Recommended Action</span>
                <p>{alert.recommendedAction}</p>
              </div>
            </div>

            <div className="alert-actions">
              {alert.actions.map((action, idx) => (
                <button 
                  key={idx}
                  className={`action-btn ${idx === 0 ? 'primary' : idx === alert.actions.length - 1 && alert.status === 'critical' ? 'danger' : 'secondary'}`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SecurityAlerts;
