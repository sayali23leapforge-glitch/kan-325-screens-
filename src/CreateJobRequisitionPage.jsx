import { useNavigate } from 'react-router-dom'
import { FiBell } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './create-job-requisition-page.css'

function CreateJobRequisitionPage() {
  const navigate = useNavigate()

  return (
    <div className="cjr-layout">
      <HRMSidebar />

      <main className="cjr-main">
        <header className="cjr-header">
          <div className="cjr-header-left">
            <h1 className="cjr-title">Create Job Requisition</h1>
            <nav className="cjr-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm/recruitment">Recruitment</a>
              <span>/</span>
              <span>Create Job Requisition</span>
            </nav>
          </div>

          <div className="cjr-header-right">
            <button className="cjr-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={16} />
              <span className="cjr-bell-badge">2</span>
            </button>
            <button className="cjr-save-draft-link" type="button">Save as draft</button>
          </div>
        </header>

        <section className="cjr-content-wrap">
          <article className="cjr-form-card">
            <section className="cjr-section">
              <h2 className="cjr-section-title">Basic Information</h2>
              <div className="cjr-grid-two">
                <label className="cjr-field">
                  <span>Job Title *</span>
                  <input type="text" placeholder="Enter job title" />
                </label>
                <label className="cjr-field">
                  <span>Department *</span>
                  <input type="text" placeholder="Select department" />
                </label>

                <label className="cjr-field">
                  <span>Employment Type *</span>
                  <input type="text" placeholder="Select type" />
                </label>
                <label className="cjr-field">
                  <span>Location *</span>
                  <input type="text" placeholder="Enter location" />
                </label>

                <label className="cjr-field">
                  <span>Experience Level *</span>
                  <input type="text" placeholder="Select level" />
                </label>
                <label className="cjr-field">
                  <span>Reporting Manager *</span>
                  <input type="text" placeholder="Select manager" />
                </label>
              </div>
            </section>

            <section className="cjr-section">
              <h2 className="cjr-section-title">Job Description</h2>
              <div className="cjr-stack-fields">
                <label className="cjr-field cjr-full">
                  <span>Role Summary *</span>
                  <textarea rows={4} placeholder="Describe role summary and core responsibilities" />
                </label>

                <label className="cjr-field cjr-full">
                  <span>Key Responsibilities *</span>
                  <textarea rows={4} placeholder="List day-to-day responsibilities" />
                </label>

                <label className="cjr-field cjr-full">
                  <span>Required Qualifications *</span>
                  <textarea rows={4} placeholder="Mention required qualifications and skills" />
                </label>

                <label className="cjr-field cjr-full">
                  <span>Preferred Skills *</span>
                  <textarea rows={4} placeholder="Add preferred skills and optional requirements" />
                </label>
              </div>
            </section>

            <section className="cjr-section">
              <h2 className="cjr-section-title">Compensation &amp; Benefits</h2>
              <div className="cjr-grid-two cjr-salary-row">
                <label className="cjr-field">
                  <span>Salary Range (Min)</span>
                  <input type="text" placeholder="Min amount" />
                </label>
                <label className="cjr-field">
                  <span>Salary Range (Max)</span>
                  <input type="text" placeholder="Max amount" />
                </label>
              </div>

              <div className="cjr-check-grid">
                <label><input type="checkbox" /> Health Insurance</label>
                <label><input type="checkbox" /> Paid Time Off</label>
                <label><input type="checkbox" /> Provident Fund</label>
                <label><input type="checkbox" /> Learning Benefits</label>
                <label><input type="checkbox" /> Remote Work</label>
                <label><input type="checkbox" /> Performance Bonus</label>
              </div>
            </section>

            <section className="cjr-section">
              <h2 className="cjr-section-title">Hiring Process</h2>
              <div className="cjr-grid-two">
                <label className="cjr-field">
                  <span>Hiring Manager *</span>
                  <input type="text" placeholder="Select manager" />
                </label>
                <label className="cjr-field">
                  <span>Recruiter *</span>
                  <input type="text" placeholder="Select recruiter" />
                </label>

                <label className="cjr-field">
                  <span>Expected Start Date</span>
                  <input type="text" placeholder="DD/MM/YYYY" />
                </label>
                <label className="cjr-field">
                  <span>Application Deadline</span>
                  <input type="text" placeholder="DD/MM/YYYY" />
                </label>
              </div>

              <div className="cjr-process-list">
                <label><input type="checkbox" defaultChecked /> Resume Screening</label>
                <label><input type="checkbox" defaultChecked /> Technical Assessment</label>
                <label><input type="checkbox" defaultChecked /> Manager Interview</label>
                <label><input type="checkbox" /> HR Interview</label>
                <label><input type="checkbox" /> Final Round</label>
              </div>
            </section>

            <section className="cjr-section cjr-section-last">
              <h2 className="cjr-section-title">Additional Information</h2>
              <div className="cjr-stack-fields">
                <label className="cjr-field cjr-full">
                  <span>Notes for Interview Panel</span>
                  <textarea rows={3} placeholder="Add specific notes for interview panel" />
                </label>

                <label className="cjr-field cjr-full">
                  <span>Special Requirements</span>
                  <textarea rows={3} placeholder="Mention any special requirements" />
                </label>
              </div>

              <div className="cjr-check-stack">
                <label><input type="checkbox" /> This role requires portfolio submission</label>
                <label><input type="checkbox" /> This role is open to hybrid/remote work</label>
                <label><input type="checkbox" /> Background verification required</label>
              </div>
            </section>

            <footer className="cjr-footer-actions">
              <button type="button" className="cjr-btn cjr-btn-cancel">Cancel</button>
              <button type="button" className="cjr-btn cjr-btn-draft">Save Draft</button>
              <button
                type="button"
                className="cjr-btn cjr-btn-submit"
                onClick={() => navigate('/hrm/recruitment/approval')}
              >
                Submit Requisition
              </button>
            </footer>
          </article>
        </section>
      </main>
    </div>
  )
}

export default CreateJobRequisitionPage
