import React, { useState } from 'react';
import './activate-rule.css';
import './automation-builder.css';
import { useNavigate } from 'react-router-dom';
import {
  FiChevronRight,
  FiBell,
  FiSave,
  FiCheck,
  FiAlertTriangle,
  FiArrowLeft,
  FiEdit3,
} from 'react-icons/fi';
import SupportSidebar from '../../components/support/SupportSidebar';

const ActivateRule = () => {
  const navigate = useNavigate();
  const [activateNow, setActivateNow] = useState(true);
  const [scheduleActivation, setScheduleActivation] = useState(false);

  return (
    <div className="automation-builder-layout">
      <SupportSidebar />

      <main className="automation-builder-main">
        <div className="activate-rule-container">
          {/* HEADER */}
          <div className="activate-rule-header">
            <div className="activate-rule-breadcrumb">
              <span className="breadcrumb-link active">Home</span>
              <FiChevronRight size={14} />
              <span className="breadcrumb-link active">Automation</span>
              <FiChevronRight size={14} />
              <span className="breadcrumb-link">Builder</span>
            </div>
            <div className="activate-rule-header-title-row">
              <span className="activate-rule-header-title">Automation Builder</span>
            </div>
            <div className="activate-rule-header-actions">
              <button className="activate-rule-bell" aria-label="Notifications">
                <FiBell size={18} />
                <span className="activate-rule-badge">5</span>
              </button>
              <button className="activate-rule-save-btn">
                <FiSave size={16} /> Save Rule
              </button>
            </div>
          </div>

          {/* STEPPER */}
          <div className="activate-rule-stepper" aria-label="Progress steps">
            <div className="activate-rule-stepper-inner">
              <div className="activate-rule-step-item done">
                <span className="activate-rule-step-circle"><FiCheck size={12} /></span>
                <span className="activate-rule-step-label">Create Rule</span>
              </div>
              <div className="activate-rule-step-connector" />

              <div className="activate-rule-step-item done">
                <span className="activate-rule-step-circle"><FiCheck size={12} /></span>
                <span className="activate-rule-step-label">Select Trigger</span>
              </div>
              <div className="activate-rule-step-connector" />

              <div className="activate-rule-step-item done">
                <span className="activate-rule-step-circle"><FiCheck size={12} /></span>
                <span className="activate-rule-step-label">Add Conditions</span>
              </div>
              <div className="activate-rule-step-connector" />

              <div className="activate-rule-step-item done">
                <span className="activate-rule-step-circle"><FiCheck size={12} /></span>
                <span className="activate-rule-step-label">Define Actions</span>
              </div>
              <div className="activate-rule-step-connector" />

              <div className="activate-rule-step-item done">
                <span className="activate-rule-step-circle"><FiCheck size={12} /></span>
                <span className="activate-rule-step-label">Preview Execution</span>
              </div>
              <div className="activate-rule-step-connector" />

              <div className="activate-rule-step-item active">
                <span className="activate-rule-step-circle">6</span>
                <span className="activate-rule-step-label">Activate Rule</span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="activate-rule-content">
            {/* Activation Settings Card */}
            <div className="activation-settings-card">
              <div className="activation-settings-header">
                <div className="activation-settings-icon">⚙️</div>
                <div>
                  <h2>Activation Settings</h2>
                  <p>Configure when and how this rule will be activated</p>
                </div>
              </div>

              <div className="activation-settings-options">
                {/* Activate Immediately */}
                <div className="activation-option">
                  <label className="activation-checkbox-label">
                    <input
                      type="radio"
                      name="activation"
                      checked={activateNow}
                      onChange={() => {
                        setActivateNow(true);
                        setScheduleActivation(false);
                      }}
                      className="activation-radio"
                    />
                    <span className="activation-checkbox"></span>
                    <div className="activation-option-content">
                      <div className="activation-option-title">Activate Immediately</div>
                      <p className="activation-option-desc">The rule will go live right away and start executing</p>
                    </div>
                  </label>
                </div>

                {/* Schedule Activation */}
                <div className="activation-option">
                  <label className="activation-checkbox-label">
                    <input
                      type="radio"
                      name="activation"
                      checked={scheduleActivation}
                      onChange={() => {
                        setActivateNow(false);
                        setScheduleActivation(true);
                      }}
                      className="activation-radio"
                    />
                    <span className="activation-checkbox"></span>
                    <div className="activation-option-content">
                      <div className="activation-option-title">Schedule Activation</div>
                      <p className="activation-option-desc">Choose a specific date and time to activate</p>
                    </div>
                  </label>
                </div>

                {scheduleActivation && (
                  <div className="schedule-fields">
                    <div className="schedule-field">
                      <label className="field-label">Activation Date</label>
                      <input type="date" className="schedule-input" />
                    </div>
                    <div className="schedule-field">
                      <label className="field-label">Activation Time</label>
                      <input type="time" className="schedule-input" />
                    </div>
                    <div className="schedule-field">
                      <label className="field-label">Timezone</label>
                      <select className="schedule-input">
                        <option>UTC (Coordinated Universal Time)</option>
                        <option>EST (Eastern Standard Time)</option>
                        <option>CST (Central Standard Time)</option>
                        <option>MST (Mountain Standard Time)</option>
                        <option>PST (Pacific Standard Time)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rule Summary Card */}
            <div className="rule-summary-card">
              <div className="rule-summary-header">
                <span className="rule-summary-title">Rule Summary</span>
              </div>
              <div className="rule-summary-content">
                <div className="summary-row">
                  <span className="summary-label">Rule Name:</span>
                  <span className="summary-value">Auto-assign High Priority Tickets</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Trigger:</span>
                  <span className="summary-tag blue">Ticket Created</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Conditions:</span>
                  <div className="summary-tags">
                    <span className="summary-tag yellow">Priority = High</span>
                    <span className="summary-tag green">Category = Technical</span>
                  </div>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Actions:</span>
                  <div className="summary-tags">
                    <span className="summary-tag">Assign to Agent</span>
                    <span className="summary-tag">Send Notification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="performance-section">
              <h3 className="performance-title">Performance Estimation</h3>
              <div className="performance-cards">
                <div className="performance-card blue">
                  <div className="perf-icon">⚡</div>
                  <div className="perf-label">Execution Speed</div>
                  <div className="perf-value">~2.3 seconds</div>
                  <div className="perf-desc">Per rule execution</div>
                </div>
                <div className="performance-card green">
                  <div className="perf-icon">✓</div>
                  <div className="perf-label">Success Rate</div>
                  <div className="perf-value">98.5%</div>
                  <div className="perf-desc">Expected accuracy</div>
                </div>
                <div className="performance-card purple">
                  <div className="perf-icon">⏱</div>
                  <div className="perf-label">Time Saved</div>
                  <div className="perf-value">2.5 hours</div>
                  <div className="perf-desc">Daily estimate</div>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="activate-warning-box">
              <div className="activate-warning-header">
                <FiAlertTriangle size={18} />
                <h4>Important Notice</h4>
              </div>
              <p className="activate-warning-content">
                Once activated, this rule will automatically process matching tickets. Make sure to monitor its
                performance and adjust if needed. You can pause or modify the rule at any time from the Automation
                Builder.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="activate-rule-footer">
              <button className="activate-rule-footer-btn secondary" onClick={() => navigate('/automation-builder/preview')}>
                <FiArrowLeft size={16} />
                Back to Preview
              </button>
              <button className="activate-rule-footer-btn primary">
                <FiCheck size={16} />
                Activate Rule
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivateRule;
