const departments = [
  { label: 'Engineering', value: 90, color: '#16A34A' },
  { label: 'Product', value: 85, color: '#2563EB' },
  { label: 'Design', value: 80, color: '#9333EA' },
  { label: 'Marketing', value: 75, color: '#EAB308' },
]

function AcceptanceAnalytics() {
  return (
    <article className="acc-card">
      <div className="acc-section-head">
        <h3>Acceptance Analytics</h3>
      </div>

      <div className="acc-analytics-grid">
        <div className="acc-analytics-left">
          <h4>Acceptance Rate by Department</h4>
          <div className="acc-rate-list">
            {departments.map((item) => (
              <div key={item.label} className="acc-rate-row">
                <span>{item.label}</span>
                <div className="acc-rate-track">
                  <div className="acc-rate-fill" style={{ width: `${item.value}%`, background: item.color }} />
                </div>
                <strong>{item.value}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="acc-analytics-right">
          <h4>Time to Start</h4>
          <div className="acc-time-value">14</div>
          <div className="acc-time-label">Average Days</div>
          <div className="acc-time-grid">
            <div className="acc-time-box blue">
              <strong>12</strong>
              <span>Fastest</span>
            </div>
            <div className="acc-time-box red">
              <strong>18</strong>
              <span>Longest</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AcceptanceAnalytics
