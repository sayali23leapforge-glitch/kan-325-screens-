import React from 'react';
import { useNavigate } from 'react-router-dom';
import SupportSidebar from '../../components/support/SupportSidebar';
import './preview-execution.css';
import {
  FiChevronRight,
  FiBell,
  FiSave,
  FiCheck,
  FiPlay,
  FiArrowDown,
  FiZap,
  FiAlertCircle,
  FiCheckCircle,
  FiEdit3,
  FiArrowLeft,
  FiArrowRight,
} from 'react-icons/fi';

function PreviewExecution() {
  const navigate = useNavigate();

  return (
    <div className="automation-builder-layout">
      <SupportSidebar />

      <main className="automation-builder-main">
        <div className="preview-execution-root">
          <header className="preview-execution-header">
            <div className="preview-execution-title-wrap">
              <div className="preview-execution-title">Automation Builder</div>
              <div className="preview-execution-breadcrumb">
                <span>Home</span>
                <FiChevronRight size={12} />
                <span>Automation</span>
                <FiChevronRight size={12} />
                <span>Builder</span>
              </div>
            </div>

            <div className="preview-execution-header-actions">
              <button className="preview-execution-bell" aria-label="Notifications">
                <FiBell size={16} />
                <span className="preview-execution-badge">5</span>
              </button>
              <button className="preview-execution-save-btn">
                <FiSave size={14} /> Save Rule
              </button>
            </div>
          </header>

          <section className="preview-stepper">
            <div className="preview-stepper-inner">
              <div className="preview-step done">
                <span className="preview-step-circle"><FiCheck size={12} /></span>
                <span className="preview-step-label">Create<br />Rule</span>
              </div>
              <div className="preview-step-line" />

              <div className="preview-step done">
                <span className="preview-step-circle"><FiCheck size={12} /></span>
                <span className="preview-step-label">Select<br />Trigger</span>
              </div>
              <div className="preview-step-line" />

              <div className="preview-step done">
                <span className="preview-step-circle"><FiCheck size={12} /></span>
                <span className="preview-step-label">Add<br />Conditions</span>
              </div>
              <div className="preview-step-line" />

              <div className="preview-step done">
                <span className="preview-step-circle"><FiCheck size={12} /></span>
                <span className="preview-step-label">Define<br />Actions</span>
              </div>
              <div className="preview-step-line" />

              <div className="preview-step active">
                <span className="preview-step-circle">5</span>
                <span className="preview-step-label">Preview<br />Execution</span>
              </div>
              <div className="preview-step-line" />

              <div className="preview-step pending">
                <span className="preview-step-circle">6</span>
                <span className="preview-step-label">Activate<br />Rule</span>
              </div>
            </div>
          </section>

          <section className="preview-main-card">
            <div className="preview-main-head">
              <span className="preview-main-icon"><FiPlay size={12} /></span>
              <div>
                <h2>Preview Rule Execution</h2>
                <p>Review how your automation rule will work</p>
              </div>
            </div>

            <div className="preview-rule-summary">
              <div className="preview-rule-summary-title">Rule Summary</div>
              <div className="preview-rule-grid">
                <div>
                  <p className="preview-k">Rule Name</p>
                  <p className="preview-v">Auto-assign High Priority Tickets</p>
                </div>
                <div>
                  <p className="preview-k">Status</p>
                  <span className="preview-status-badge">Draft</span>
                </div>
              </div>
            </div>

            <div className="preview-flow-title">Execution Flow</div>

            <div className="preview-flow-card flow-trigger">
              <span className="flow-dot blue"><FiZap size={10} /></span>
              <div>
                <div className="flow-title">Trigger</div>
                <div className="flow-sub">When a new ticket is created</div>
              </div>
            </div>

            <div className="preview-flow-arrow"><FiArrowDown size={14} /></div>

            <div className="preview-flow-card flow-condition">
              <span className="flow-dot orange"><FiAlertCircle size={10} /></span>
              <div>
                <div className="flow-title">Conditions</div>
                <div className="flow-list">• Priority equals "High"</div>
                <div className="flow-list">• Category equals "Technical Issue"</div>
                <div className="flow-list">• Customer tier equals "Premium"</div>
              </div>
            </div>

            <div className="preview-flow-arrow"><FiArrowDown size={14} /></div>

            <div className="preview-flow-card flow-action">
              <span className="flow-dot green"><FiCheckCircle size={10} /></span>
              <div>
                <div className="flow-title">Actions</div>
                <div className="flow-list">• Assign to Alex Morgan</div>
                <div className="flow-list">• Set priority to "Urgent"</div>
                <div className="flow-list">• Send notification to customer</div>
                <div className="flow-list">• Add tag "auto-assigned"</div>
              </div>
            </div>
          </section>

          <section className="preview-test-card">
            <div className="preview-test-head">
              <div>
                <h3>Test Simulation</h3>
                <p>See how your rule would handle sample tickets</p>
              </div>
              <button className="preview-run-btn"><FiPlay size={11} /> Run Test</button>
            </div>

            <div className="preview-test-grid">
              <div className="preview-test-left">
                <div className="test-block-title">Sample Ticket</div>
                <div className="test-row"><span>ID:</span><span>#TCK-1245</span></div>
                <div className="test-row"><span>Subject:</span><span>Database Connection Error</span></div>
                <div className="test-row"><span>Priority:</span><span className="chip-high">High</span></div>
                <div className="test-row"><span>Category:</span><span>Technical Issue</span></div>
                <div className="test-row"><span>Customer:</span><span>Premium Tier</span></div>
              </div>

              <div className="preview-test-right">
                <div className="test-block-title">Expected Result</div>
                <div className="result-line"><FiCheck size={12} /> Rule will be triggered</div>
                <div className="result-line"><FiCheck size={12} /> Conditions match</div>
                <div className="result-line"><FiCheck size={12} /> Actions will execute</div>
                <div className="result-final">Ticket will be auto-assigned to Alex Morgan with urgent priority</div>
              </div>
            </div>
          </section>

          <section className="preview-metrics-card">
            <h3>Performance Metrics</h3>
            <div className="metrics-grid">
              <article className="metric blue">
                <p className="metric-label">Execution Time</p>
                <p className="metric-value">~2.3s</p>
                <p className="metric-sub">Average processing</p>
              </article>

              <article className="metric green">
                <p className="metric-label">Success Rate</p>
                <p className="metric-value">98.5%</p>
                <p className="metric-sub">Estimated accuracy</p>
              </article>

              <article className="metric orange">
                <p className="metric-label">Triggers/Day</p>
                <p className="metric-value">~15</p>
                <p className="metric-sub">Expected volume</p>
              </article>

              <article className="metric purple">
                <p className="metric-label">Time Saved</p>
                <p className="metric-value">2.5h</p>
                <p className="metric-sub">Daily estimate</p>
              </article>
            </div>
          </section>

          <footer className="preview-footer">
            <button className="preview-btn secondary" onClick={() => navigate('/automation-builder/actions')}>
              <FiArrowLeft size={14} /> Back to Actions
            </button>
            <div className="preview-footer-right">
              <button className="preview-btn secondary"><FiEdit3 size={14} /> Edit Rule</button>
              <button className="preview-btn primary" onClick={() => navigate('/automation-builder/activate')}>Continue to Activation <FiArrowRight size={14} /></button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default PreviewExecution;
