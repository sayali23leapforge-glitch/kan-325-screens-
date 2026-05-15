import { useMemo, useState } from 'react'
import { FiAlertTriangle, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import './deactivate-employee-modal.css'

function DeactivateEmployeeModal({ isOpen, onClose, onConfirmed, employee }) {
  const [reason, setReason] = useState('')
  const [effectiveDate, setEffectiveDate] = useState('')
  const [notes, setNotes] = useState('')
  const [acknowledged, setAcknowledged] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const isFormValid = useMemo(() => {
    return reason.trim() !== '' && effectiveDate.trim() !== '' && acknowledged
  }, [reason, effectiveDate, acknowledged])

  if (!isOpen) return null

  const deactivateEmployeeApi = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
  }

  const handleConfirm = async () => {
    if (!isFormValid) {
      setShowErrors(true)
      return
    }

    setIsSubmitting(true)
    try {
      await deactivateEmployeeApi({ reason, effectiveDate, notes, employeeId: employee?.id })
      onConfirmed()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="deactivate-modal-overlay" onClick={onClose} role="presentation">
      <div className="deactivate-modal-container" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Deactivate Employee">
        <div className="deactivate-modal-icon-wrap">
          <span className="deactivate-modal-icon">
            <FiAlertTriangle size={16} />
          </span>
        </div>

        <h3 className="deactivate-modal-title">Deactivate Employee</h3>
        <p className="deactivate-modal-subtitle">Are you sure you want to deactivate this employee account?</p>

        <div className="deactivate-modal-employee-card">
          <img src={employee?.avatar || 'https://placehold.co/40x40'} alt={employee?.name || 'Employee'} />
          <div>
            <div className="deactivate-modal-employee-name">{employee?.name || 'John Smith'}</div>
            <div className="deactivate-modal-employee-role">{employee?.title || 'Senior Software Engineer'}</div>
            <div className="deactivate-modal-employee-id">ID: EMP-2024-001</div>
          </div>
        </div>

        <div className="deactivate-modal-warning-box">
          <div className="deactivate-modal-warning-title">This action will:</div>
          <ul>
            <li>Revoke system access immediately</li>
            <li>Disable email and communication tools</li>
            <li>Archive employee records</li>
            <li>Notify relevant departments</li>
          </ul>
        </div>

        <div className="deactivate-modal-field-group">
          <label htmlFor="deactivate-reason">Reason for Deactivation *</label>
          <select
            id="deactivate-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={showErrors && !reason ? 'error' : ''}
          >
            <option value="">Select a reason...</option>
            <option value="resignation">Resignation</option>
            <option value="termination">Termination</option>
            <option value="contract_end">Contract End</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="deactivate-modal-field-group">
          <label htmlFor="deactivate-date">Effective Date *</label>
          <div className="deactivate-modal-date-wrap">
            <input
              id="deactivate-date"
              type="text"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              placeholder="dd-mm-yyyy"
              className={showErrors && !effectiveDate ? 'error' : ''}
            />
            <FiCalendar size={14} />
          </div>
        </div>

        <div className="deactivate-modal-field-group">
          <label htmlFor="deactivate-notes">Additional Notes</label>
          <textarea
            id="deactivate-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional information..."
            rows={3}
          />
        </div>

        <label className="deactivate-modal-checkbox-wrap" htmlFor="deactivate-acknowledge">
          <input
            id="deactivate-acknowledge"
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
          />
          <span>
            I understand that this action will immediately deactivate the employee's access and cannot be easily reversed.
          </span>
        </label>

        <div className="deactivate-modal-actions">
          <button type="button" className="deactivate-modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="deactivate-modal-confirm-btn"
            onClick={handleConfirm}
            disabled={!isFormValid || isSubmitting}
          >
            <FiCheckCircle size={13} />
            <span>Confirm<br />Deactivation</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeactivateEmployeeModal
