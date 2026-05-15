import { useState } from 'react'
import { FiX, FiTarget, FiSearch, FiPlus, FiUploadCloud } from 'react-icons/fi'
import './assign-goals-modal.css'

const EMPLOYEES = [
  { id: 1, name: 'John Garcia',    role: 'Senior Designer',      initials: 'JG', color: '#8B5CF6' },
  { id: 2, name: 'Daniel Wilson',  role: 'Engineering Lead',     initials: 'DW', color: '#10B981' },
  { id: 3, name: 'Mike Johnson',   role: 'Product Manager',      initials: 'MJ', color: '#3B82F6' },
  { id: 4, name: 'Lisa Chen',      role: 'Marketing Specialist', initials: 'LC', color: '#F59E0B' },
  { id: 5, name: 'Sarah Mitchell', role: 'QA Engineer',          initials: 'SM', color: '#EF4444' },
]

function AssignGoalsModal({ isOpen, onClose }) {
  const [selectedIds, setSelectedIds] = useState([1, 2, 3])
  const [search, setSearch] = useState('')
  const [goalTitle, setGoalTitle] = useState('')
  const [goalCategory, setGoalCategory] = useState('Performance')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('2024-01-01')
  const [targetDate, setTargetDate] = useState('2024-12-31')
  const [priority, setPriority] = useState('High')
  const [measureType, setMeasureType] = useState('Percentage')
  const [targetValue, setTargetValue] = useState('')
  const [successCriteria, setSuccessCriteria] = useState('')
  const [reviewFrequency, setReviewFrequency] = useState('Weekly')
  const [progressUpdates, setProgressUpdates] = useState('both')
  const [milestones, setMilestones] = useState([
    { id: 1, date: '2024-03-01', desc: 'Milestone description' },
  ])
  const [visibility, setVisibility] = useState('private')
  const [weight, setWeight] = useState('25')
  const [selfGoal, setSelfGoal] = useState(true)
  const [cascadeTeam, setCascadeTeam] = useState(false)
  const [releaseReview, setReleaseReview] = useState(false)

  if (!isOpen) return null

  const filtered = EMPLOYEES.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase())
  )

  const toggleEmployee = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const selectAll = () => {
    setSelectedIds(filtered.map(e => e.id))
  }

  const addMilestone = () => {
    setMilestones(prev => [...prev, { id: Date.now(), date: '', desc: '' }])
  }

  const removeMilestone = (id) => {
    setMilestones(prev => prev.filter(m => m.id !== id))
  }

  const updateMilestone = (id, field, value) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m))
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="agm-overlay" onClick={handleOverlayClick}>
      <div className="agm-container" role="dialog" aria-modal="true" aria-label="Assign Goals">

        {/* HEADER */}
        <div className="agm-header">
          <div className="agm-header-icon">
            <FiTarget size={20} />
          </div>
          <div className="agm-header-text">
            <p className="agm-header-breadcrumb">
              Home / <span>Performance</span> / <span>Assign Goals</span>
            </p>
            <h2 className="agm-header-title">Assign Goals</h2>
            <p className="agm-header-subtitle">Set the Smartrics goals for team members.</p>
          </div>
          <button className="agm-close-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* BODY */}
        <div className="agm-body">

          {/* LEFT — Employee Selection */}
          <div className="agm-left">
            <div className="agm-left-header">
              <p className="agm-left-title">Select Employees</p>
              <div className="agm-search-box">
                <FiSearch size={13} className="agm-search-icon" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="agm-employee-list">
              {filtered.map(emp => {
                const isSelected = selectedIds.includes(emp.id)
                return (
                  <div
                    key={emp.id}
                    className={`agm-emp-row${isSelected ? ' selected' : ''}`}
                    onClick={() => toggleEmployee(emp.id)}
                  >
                    <div className={`agm-checkbox${isSelected ? ' checked' : ''}`} />
                    <div className="agm-avatar" style={{ background: emp.color }}>
                      {emp.initials}
                    </div>
                    <div className="agm-emp-info">
                      <div className="agm-emp-name">{emp.name}</div>
                      <div className="agm-emp-role">{emp.role}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="agm-left-footer">
              <p className="agm-selected-count">
                {selectedIds.length} of {EMPLOYEES.length} employees selected
              </p>
              <button className="agm-select-all-link" onClick={selectAll}>
                Select All in Department
              </button>
            </div>
          </div>

          {/* RIGHT — Goal Form */}
          <div className="agm-right">

            {/* Goal Information */}
            <div className="agm-section agm-section-goal">
              <p className="agm-section-title">Goal Information</p>

              <div className="agm-form-row cols-2">
                <div className="agm-form-field">
                  <label className="agm-label">Goal Title<span>*</span></label>
                  <input
                    className="agm-input"
                    type="text"
                    placeholder="e.g., Improve Customer Satisfaction Score by Q4"
                    value={goalTitle}
                    onChange={e => setGoalTitle(e.target.value)}
                  />
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Goal Category<span>*</span></label>
                  <select
                    className="agm-select"
                    value={goalCategory}
                    onChange={e => setGoalCategory(e.target.value)}
                  >
                    <option>Performance</option>
                    <option>Development</option>
                    <option>Leadership</option>
                    <option>Technical</option>
                    <option>Operational</option>
                  </select>
                </div>
              </div>

              <div className="agm-form-row cols-1">
                <div className="agm-form-field">
                  <label className="agm-label">Description</label>
                  <textarea
                    className="agm-textarea"
                    placeholder="Describe the goal, success criteria, and expected outcomes..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Timeline & Priority */}
            <div className="agm-section agm-section-timeline">
              <p className="agm-section-title">Timeline &amp; Priority</p>
              <div className="agm-form-row cols-3">
                <div className="agm-form-field">
                  <label className="agm-label">Start Date</label>
                  <input
                    className="agm-input"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Target Date</label>
                  <input
                    className="agm-input"
                    type="date"
                    value={targetDate}
                    onChange={e => setTargetDate(e.target.value)}
                  />
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Priority Level</label>
                  <select
                    className="agm-select"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Measurement & KPIs */}
            <div className="agm-section agm-section-kpi">
              <p className="agm-section-title">Measurement &amp; KPIs</p>
              <div className="agm-form-row cols-2">
                <div className="agm-form-field">
                  <label className="agm-label">Measurement Type</label>
                  <select
                    className="agm-select"
                    value={measureType}
                    onChange={e => setMeasureType(e.target.value)}
                  >
                    <option>Percentage</option>
                    <option>Numeric</option>
                    <option>Boolean</option>
                    <option>Rating</option>
                    <option>Currency</option>
                  </select>
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Target Value</label>
                  <input
                    className="agm-input"
                    type="text"
                    placeholder="e.g., 85%, 100, $50,000"
                    value={targetValue}
                    onChange={e => setTargetValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="agm-form-row cols-1">
                <div className="agm-form-field">
                  <label className="agm-label">Success Criteria</label>
                  <textarea
                    className="agm-textarea"
                    placeholder="Add as what success looks like for this goal..."
                    value={successCriteria}
                    onChange={e => setSuccessCriteria(e.target.value)}
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Milestones & Check-ins */}
            <div className="agm-section agm-section-milestone">
              <p className="agm-section-title">Milestones &amp; Check-ins</p>
              <div className="agm-form-row cols-2">
                <div className="agm-form-field">
                  <label className="agm-label">Review Frequency</label>
                  <select
                    className="agm-select"
                    value={reviewFrequency}
                    onChange={e => setReviewFrequency(e.target.value)}
                  >
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Progress Updates</label>
                  <div className="agm-radio-group" style={{ paddingTop: 8 }}>
                    <label className="agm-radio-label">
                      <input
                        type="radio"
                        name="progressUpdates"
                        value="employees"
                        checked={progressUpdates === 'employees'}
                        onChange={() => setProgressUpdates('employees')}
                      />
                      Employees only
                    </label>
                    <label className="agm-radio-label">
                      <input
                        type="radio"
                        name="progressUpdates"
                        value="managers"
                        checked={progressUpdates === 'managers'}
                        onChange={() => setProgressUpdates('managers')}
                      />
                      Managers only
                    </label>
                    <label className="agm-radio-label">
                      <input
                        type="radio"
                        name="progressUpdates"
                        value="both"
                        checked={progressUpdates === 'both'}
                        onChange={() => setProgressUpdates('both')}
                      />
                      Both
                    </label>
                  </div>
                </div>
              </div>

              <div className="agm-form-field" style={{ marginTop: 4 }}>
                <label className="agm-label">Key Milestones</label>
                <div style={{ marginTop: 6 }}>
                  {milestones.map(m => (
                    <div key={m.id} className="agm-milestone-row">
                      <input
                        type="date"
                        className="agm-milestone-date"
                        value={m.date}
                        onChange={e => updateMilestone(m.id, 'date', e.target.value)}
                      />
                      <input
                        type="text"
                        className="agm-milestone-desc"
                        placeholder="Milestone description..."
                        value={m.desc}
                        onChange={e => updateMilestone(m.id, 'desc', e.target.value)}
                      />
                      <button
                        className="agm-milestone-remove"
                        onClick={() => removeMilestone(m.id)}
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button className="agm-add-milestone-btn" onClick={addMilestone}>
                    <FiPlus size={13} /> Add Milestone
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="agm-section agm-section-settings">
              <p className="agm-section-title">Additional Settings</p>
              <div className="agm-settings-top">
                <div className="agm-visibility-group">
                  <label className="agm-label">Visibility</label>
                  <div className="agm-radio-group" style={{ paddingTop: 4 }}>
                    <label className="agm-radio-label">
                      <input
                        type="radio"
                        name="visibility"
                        value="private"
                        checked={visibility === 'private'}
                        onChange={() => setVisibility('private')}
                      />
                      Private (Employee &amp; Manager only)
                    </label>
                    <label className="agm-radio-label">
                      <input
                        type="radio"
                        name="visibility"
                        value="team"
                        checked={visibility === 'team'}
                        onChange={() => setVisibility('team')}
                      />
                      Team visible
                    </label>
                  </div>
                </div>
                <div className="agm-form-field">
                  <label className="agm-label">Weight (%)</label>
                  <input
                    className="agm-input"
                    type="number"
                    min="0"
                    max="100"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                  />
                </div>
              </div>

              <label className="agm-check-label">
                <input
                  type="checkbox"
                  checked={selfGoal}
                  onChange={e => setSelfGoal(e.target.checked)}
                />
                Allow employees to self-goal
              </label>
              <label className="agm-check-label">
                <input
                  type="checkbox"
                  checked={cascadeTeam}
                  onChange={e => setCascadeTeam(e.target.checked)}
                />
                Cascade to team members
              </label>
              <label className="agm-check-label">
                <input
                  type="checkbox"
                  checked={releaseReview}
                  onChange={e => setReleaseReview(e.target.checked)}
                />
                Release to give full performance review
              </label>

              <div className="agm-form-field" style={{ marginTop: 10 }}>
                <label className="agm-label">Attach Resources</label>
                <div className="agm-upload-area">
                  <FiUploadCloud size={28} className="agm-upload-icon" />
                  <p className="agm-upload-text">Drop files here, or click to browse</p>
                  <p className="agm-upload-hint">PDF, DOC, PPT, XLS up to 10MB each</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="agm-footer">
          <div className="agm-footer-left">
            <button className="agm-btn-template">Save as Template</button>
          </div>
          <div className="agm-footer-right">
            <button className="agm-btn-cancel" onClick={onClose}>Cancel</button>
            <button className="agm-btn-assign">
              ✓ Assign Goals to {selectedIds.length} Employee{selectedIds.length !== 1 ? 's' : ''}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AssignGoalsModal
