import { FiClock } from 'react-icons/fi'

function BusinessHoursCard() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <article className="settings-panel">
      <div className="settings-panel-header">
        <div className="settings-panel-icon green">
          <FiClock size={16} />
        </div>
        <div>
          <h2>Business Hours</h2>
          <p>Set your support team availability</p>
        </div>
      </div>

      <div className="settings-form-grid two-col narrow-gap">
        <label className="settings-field full-width">
          <span>Timezone</span>
          <input defaultValue="UTC-05:00 (Eastern Time)" />
        </label>
        <div className="settings-field full-width">
          <span>Working Days</span>
          <div className="settings-days-row">
            {days.map((day, index) => (
              <button
                key={day}
                type="button"
                className={`settings-day-pill ${index < 5 ? 'active' : 'disabled'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <label className="settings-field">
          <span>Start Time</span>
          <input defaultValue="09:00" />
        </label>
        <label className="settings-field">
          <span>End Time</span>
          <input defaultValue="18:00" />
        </label>
      </div>
    </article>
  )
}

export default BusinessHoursCard