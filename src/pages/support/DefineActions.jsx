
import React from 'react';
import './define-actions.css';
import './automation-builder.css';
import { useNavigate } from 'react-router-dom';
import {
  FiChevronRight,
  FiBell,
  FiSave,
  FiTrash2,
  FiPlus,
  FiCheck,
  FiAlertTriangle,
  FiStar,
  FiFileText,
  FiRefreshCw,
  FiTag,
  FiClock,
} from 'react-icons/fi';
import SupportSidebar from '../../components/support/SupportSidebar';

const DefineActions = () => {
  const navigate = useNavigate();
  return (
    <div className="automation-builder-layout">
      <SupportSidebar />

      <main className="automation-builder-main">
        <div className="define-actions-figma-bg">
          {/* HEADER */}
          <div className="define-actions-header-figma">
        <div className="define-actions-breadcrumb-figma">
          <span className="breadcrumb-link active">Home</span>
          <FiChevronRight size={14} />
          <span className="breadcrumb-link active">Automation</span>
          <FiChevronRight size={14} />
          <span className="breadcrumb-link">Builder</span>
        </div>
        <div className="define-actions-header-title-row">
          <span className="define-actions-header-title">Automation Builder</span>
        </div>
        <div className="define-actions-header-actions-figma">
          <button className="define-actions-bell-figma" aria-label="Notifications">
            <FiBell size={18} />
            <span className="define-actions-badge-figma">5</span>
          </button>
          <button className="define-actions-save-btn-figma">
            <FiSave size={16} /> Save Rule
          </button>
        </div>
          </div>

      {/* STEPPER */}
          <div className="define-actions-stepper-figma" aria-label="Progress steps">
            <div className="define-actions-stepper-inner">
              <div className="define-actions-step-item done">
                <span className="define-actions-step-circle"><FiCheck size={12} /></span>
                <span className="define-actions-step-label">Create Rule</span>
              </div>
              <div className="define-actions-step-connector" />

              <div className="define-actions-step-item done">
                <span className="define-actions-step-circle"><FiCheck size={12} /></span>
                <span className="define-actions-step-label">Select Trigger</span>
              </div>
              <div className="define-actions-step-connector" />

              <div className="define-actions-step-item done">
                <span className="define-actions-step-circle"><FiCheck size={12} /></span>
                <span className="define-actions-step-label">Add Conditions</span>
              </div>
              <div className="define-actions-step-connector" />

              <div className="define-actions-step-item active">
                <span className="define-actions-step-circle">4</span>
                <span className="define-actions-step-label">Define Actions</span>
              </div>
              <div className="define-actions-step-connector" />

              <div className="define-actions-step-item pending">
                <span className="define-actions-step-circle">5</span>
                <span className="define-actions-step-label">Preview Execution</span>
              </div>
              <div className="define-actions-step-connector" />

              <div className="define-actions-step-item pending">
                <span className="define-actions-step-circle">6</span>
                <span className="define-actions-step-label">Activate Rule</span>
              </div>
            </div>
          </div>

      {/* RULE SUMMARY CARD */}
          <div className="define-actions-rule-summary-figma">
        <div className="define-actions-rule-summary-header-figma">
          <span className="define-actions-rule-summary-title">Rule Summary</span>
          <button className="define-actions-review-btn-figma">Review</button>
        </div>
        <div className="define-actions-rule-summary-sub">Trigger: Ticket Created | Conditions: 2 added</div>
        <div className="define-actions-rule-summary-box">
          <span className="define-actions-rule-summary-if">IF</span>
          <span className="define-actions-rule-summary-chip">Ticket Created</span>
          <span className="define-actions-rule-summary-and">AND Customer Type is VIP</span>
          <span className="define-actions-rule-summary-and">AND Priority is High</span>
        </div>
          </div>

      {/* DEFINE ACTIONS CARD */}
          <div className="define-actions-main-card-figma">
        <div className="define-actions-main-card-header">
          <div className="define-actions-main-card-icon-bg">
            <div className="define-actions-main-card-icon" />
          </div>
          <div>
            <div className="define-actions-main-card-title">Define Actions</div>
            <div className="define-actions-main-card-sub">Set what happens when the conditions are met</div>
          </div>
        </div>
        <div className="define-actions-blocks">
          {/* Action 1 */}
          <div className="define-actions-action-row">
            <div className="define-actions-action-label">Action 1</div>
            <button className="define-actions-action-delete"><FiTrash2 size={16} /></button>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Action Type</div>
              <input className="define-actions-action-field" placeholder="Select action..." />
            </div>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Value</div>
              <input className="define-actions-action-field" placeholder="Enter value..." />
            </div>
          </div>
          {/* Action 2 */}
          <div className="define-actions-action-row">
            <div className="define-actions-action-label">Action 2</div>
            <button className="define-actions-action-delete"><FiTrash2 size={16} /></button>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Action Type</div>
              <input className="define-actions-action-field" value="Assign Agent" disabled />
            </div>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Value</div>
              <input className="define-actions-action-field" value="Senior Support Agent" disabled />
            </div>
          </div>
          {/* Action 3 */}
          <div className="define-actions-action-row">
            <div className="define-actions-action-label">Action 3</div>
            <button className="define-actions-action-delete"><FiTrash2 size={16} /></button>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Action Type</div>
              <input className="define-actions-action-field" value="Send Email" disabled />
            </div>
            <div className="define-actions-action-field-group">
              <div className="define-actions-action-field-label">Value</div>
              <input className="define-actions-action-field" value="VIP Customer Notification" disabled />
            </div>
          </div>
        </div>
        <button className="define-actions-add-action-btn"><FiPlus size={18} /> Add Another Action</button>
          </div>

      {/* QUICK ACTION TEMPLATES */}
          <div className="define-actions-quick-templates-figma">
        <div className="define-actions-quick-templates-title">Quick Action Templates</div>
        <div className="define-actions-quick-templates-grid">
          <div className="define-actions-quick-template-card red">
            <div className="define-actions-quick-template-icon">
              <FiAlertTriangle size={10} />
            </div>
            <div className="define-actions-quick-template-title">Escalate High Priority</div>
            <div className="define-actions-quick-template-desc">Set priority to urgent, assign to team lead, notify manager</div>
          </div>
          <div className="define-actions-quick-template-card purple">
            <div className="define-actions-quick-template-icon">
              <FiStar size={10} />
            </div>
            <div className="define-actions-quick-template-title">VIP Treatment</div>
            <div className="define-actions-quick-template-desc">Assign to senior agent, add VIP tag, send priority email</div>
          </div>
          <div className="define-actions-quick-template-card blue">
            <div className="define-actions-quick-template-icon">
              <FiFileText size={10} />
            </div>
            <div className="define-actions-quick-template-title">Auto Acknowledge</div>
            <div className="define-actions-quick-template-desc">Send confirmation email, set status to in progress</div>
          </div>
          <div className="define-actions-quick-template-card green">
            <div className="define-actions-quick-template-icon">
              <FiRefreshCw size={10} />
            </div>
            <div className="define-actions-quick-template-title">Round Robin Assign</div>
            <div className="define-actions-quick-template-desc">Assign to next available agent using round robin</div>
          </div>
          <div className="define-actions-quick-template-card orange">
            <div className="define-actions-quick-template-icon">
              <FiTag size={10} />
            </div>
            <div className="define-actions-quick-template-title">Categorize & Tag</div>
            <div className="define-actions-quick-template-desc">Set department, add relevant tags, assign category</div>
          </div>
          <div className="define-actions-quick-template-card yellow">
            <div className="define-actions-quick-template-icon">
              <FiClock size={10} />
            </div>
            <div className="define-actions-quick-template-title">After Hours</div>
            <div className="define-actions-quick-template-desc">Set low priority, send auto-response, queue for morning</div>
          </div>
        </div>
          </div>

      {/* ACTION PREVIEW */}
          <div className="define-actions-preview-figma">
        <div className="define-actions-preview-title">Action Preview</div>
        <div className="define-actions-preview-box">
          <div className="define-actions-preview-label">THEN perform these actions:</div>
          <div className="define-actions-preview-item"><b>Assign Agent</b> to <b>Senior Support Agent</b></div>
          <div className="define-actions-preview-item"><b>Send Email</b> to <b>VIP Customer Notification</b></div>
          <div className="define-actions-preview-empty">Add actions above to see what will happen when the rule triggers</div>
        </div>
          </div>

      {/* FOOTER BUTTONS */}
          <div className="define-actions-footer-figma">
        <button className="define-actions-footer-btn outline">Back to Conditions</button>
        <button className="define-actions-footer-btn outline">Save Draft</button>
        <button className="define-actions-footer-btn primary" onClick={() => navigate('/automation-builder/preview')}>Continue to Preview</button>
          </div>
        </div>
      </main>
      </div>
  );
};

export default DefineActions;