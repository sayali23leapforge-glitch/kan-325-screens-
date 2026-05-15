import { useState } from 'react'
import { FiX, FiClipboard } from 'react-icons/fi'
import './create-review-cycle-modal.css'

function CreateReviewCycleModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    cycleNameL: '',
    cycleNameR: '',
    startDate: '',
    reviewType: '',
    endDate: '',
    description: '',
    selfAssessmentRequired: 'yes',
    peerReviewRequired: 'yes',
    departments: {
      engineering: false,
      sales: false,
      marketing: false,
      operations: false,
    },
    selfAssessmentDue: '',
    managerReviewDue: '',
    finalReviewDue: '',
    reviewTemplate: 'Standard Performance Review',
    agreeToVisibility: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    if (name === 'agreeToVisibility') {
      setFormData((prev) => ({
        ...prev,
        agreeToVisibility: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        departments: {
          ...prev.departments,
          [name]: checked,
        },
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Create Review Cycle:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="crcm-overlay" onClick={onClose} />
      <div className="crcm-container">
        <div className="crcm-modal">
          {/* Header Section */}
          <div className="crcm-header">
            <div className="crcm-header-left">
              <div className="crcm-header-icon">
                <FiClipboard size={24} />
              </div>
              <div className="crcm-header-text">
                <h2 className="crcm-title">Create Review Cycle</h2>
                <p className="crcm-subtitle">Create a new performance review cycle</p>
              </div>
            </div>
            <button type="button" className="crcm-close" onClick={onClose} aria-label="Close">
              <FiX size={20} />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="crcm-form">
            {/* Form Grid - 2 Columns */}
            <div className="crcm-form-grid">
              {/* Left Column */}
              <div className="crcm-form-col">
                {/* Review Cycle Name */}
                <div className="crcm-form-group">
                  <label htmlFor="cycleNameL" className="crcm-label">Review Cycle Name *</label>
                  <input
                    type="text"
                    id="cycleNameL"
                    name="cycleNameL"
                    value={formData.cycleNameL}
                    onChange={handleInputChange}
                    placeholder="e.g., Q1 2024 Performance Review"
                    className="crcm-input"
                  />
                </div>

                {/* Start Date */}
                <div className="crcm-form-group">
                  <label htmlFor="startDate" className="crcm-label">Start Date *</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="crcm-input"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="crcm-form-col">
                {/* Review Type */}
                <div className="crcm-form-group">
                  <label htmlFor="reviewType" className="crcm-label">Review Type *</label>
                  <select
                    id="reviewType"
                    name="reviewType"
                    value={formData.reviewType}
                    onChange={handleInputChange}
                    className="crcm-input"
                  >
                    <option value="">Select review type</option>
                    <option value="standard">Standard Review</option>
                    <option value="mid-year">Mid-year Review</option>
                    <option value="annual">Annual Review</option>
                  </select>
                </div>

                {/* End Date */}
                <div className="crcm-form-group">
                  <label htmlFor="endDate" className="crcm-label">End Date *</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="crcm-input"
                  />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="crcm-form-group crcm-full-width">
              <label htmlFor="description" className="crcm-label">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the purpose and goals of this review cycle..."
                className="crcm-textarea"
              />
            </div>

            {/* Review Settings Section */}
            <section className="crcm-section crcm-settings-section">
              <h3 className="crcm-section-title">Review Settings</h3>
              
              <div className="crcm-settings-grid">
                {/* Self Assessment Required */}
                <div className="crcm-setting-group">
                  <label className="crcm-setting-label">Self Assessment Required</label>
                  <div className="crcm-radio-group">
                    <label className="crcm-radio-label">
                      <input
                        type="radio"
                        name="selfAssessmentRequired"
                        value="yes"
                        checked={formData.selfAssessmentRequired === 'yes'}
                        onChange={(e) => handleRadioChange('selfAssessmentRequired', e.target.value)}
                        className="crcm-radio"
                      />
                      <span className="crcm-radio-text">Yes</span>
                    </label>
                    <label className="crcm-radio-label">
                      <input
                        type="radio"
                        name="selfAssessmentRequired"
                        value="no"
                        checked={formData.selfAssessmentRequired === 'no'}
                        onChange={(e) => handleRadioChange('selfAssessmentRequired', e.target.value)}
                        className="crcm-radio"
                      />
                      <span className="crcm-radio-text">No</span>
                    </label>
                  </div>
                </div>

                {/* Peer Review Required */}
                <div className="crcm-setting-group">
                  <label className="crcm-setting-label">Peer Review Required</label>
                  <div className="crcm-radio-group">
                    <label className="crcm-radio-label">
                      <input
                        type="radio"
                        name="peerReviewRequired"
                        value="yes"
                        checked={formData.peerReviewRequired === 'yes'}
                        onChange={(e) => handleRadioChange('peerReviewRequired', e.target.value)}
                        className="crcm-radio"
                      />
                      <span className="crcm-radio-text">Yes</span>
                    </label>
                    <label className="crcm-radio-label">
                      <input
                        type="radio"
                        name="peerReviewRequired"
                        value="no"
                        checked={formData.peerReviewRequired === 'no'}
                        onChange={(e) => handleRadioChange('peerReviewRequired', e.target.value)}
                        className="crcm-radio"
                      />
                      <span className="crcm-radio-text">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Participants Section */}
            <section className="crcm-section crcm-participants-section">
              <h3 className="crcm-section-title">Participants</h3>
              <div className="crcm-checkboxes-group">
                <label className="crcm-checkbox-label">
                  <input
                    type="checkbox"
                    name="engineering"
                    checked={formData.departments.engineering}
                    onChange={handleCheckboxChange}
                    className="crcm-checkbox"
                  />
                  <span>Engineering</span>
                </label>
                <label className="crcm-checkbox-label">
                  <input
                    type="checkbox"
                    name="sales"
                    checked={formData.departments.sales}
                    onChange={handleCheckboxChange}
                    className="crcm-checkbox"
                  />
                  <span>Sales</span>
                </label>
                <label className="crcm-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={formData.departments.marketing}
                    onChange={handleCheckboxChange}
                    className="crcm-checkbox"
                  />
                  <span>Marketing</span>
                </label>
                <label className="crcm-checkbox-label">
                  <input
                    type="checkbox"
                    name="operations"
                    checked={formData.departments.operations}
                    onChange={handleCheckboxChange}
                    className="crcm-checkbox"
                  />
                  <span>Operations</span>
                </label>
              </div>
            </section>

            {/* Review Timeline Section */}
            <section className="crcm-section crcm-timeline-section">
              <h3 className="crcm-section-title">Review Timeline</h3>
              
              <div className="crcm-timeline-grid">
                <div className="crcm-form-group">
                  <label htmlFor="selfAssessmentDue" className="crcm-label">Self Assessment Due</label>
                  <input
                    type="date"
                    id="selfAssessmentDue"
                    name="selfAssessmentDue"
                    value={formData.selfAssessmentDue}
                    onChange={handleInputChange}
                    className="crcm-input"
                  />
                </div>
                <div className="crcm-form-group">
                  <label htmlFor="managerReviewDue" className="crcm-label">Manager Review Due</label>
                  <input
                    type="date"
                    id="managerReviewDue"
                    name="managerReviewDue"
                    value={formData.managerReviewDue}
                    onChange={handleInputChange}
                    className="crcm-input"
                  />
                </div>
                <div className="crcm-form-group">
                  <label htmlFor="finalReviewDue" className="crcm-label">Final Review Due</label>
                  <input
                    type="date"
                    id="finalReviewDue"
                    name="finalReviewDue"
                    value={formData.finalReviewDue}
                    onChange={handleInputChange}
                    className="crcm-input"
                  />
                </div>
              </div>
            </section>

            {/* Review Template Section */}
            <section className="crcm-section crcm-template-section">
              <h3 className="crcm-section-title">Review Template</h3>
              <div className="crcm-form-group">
                <select
                  name="reviewTemplate"
                  value={formData.reviewTemplate}
                  onChange={handleInputChange}
                  className="crcm-input"
                >
                  <option value="Standard Performance Review">Standard Performance Review</option>
                  <option value="Technical Review">Technical Review</option>
                  <option value="Leadership Review">Leadership Review</option>
                </select>
              </div>
            </section>

            {/* Footer */}
            <div className="crcm-footer">
              <label className="crcm-footer-checkbox">
                <input
                  type="checkbox"
                  name="agreeToVisibility"
                  checked={formData.agreeToVisibility}
                  onChange={handleCheckboxChange}
                  className="crcm-checkbox"
                />
                <span className="crcm-footer-text">Review cycle will be visible to all participants once created</span>
              </label>

              <div className="crcm-footer-buttons">
                <button type="button" className="crcm-cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="crcm-create-btn">
                  Create Review Cycle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateReviewCycleModal
