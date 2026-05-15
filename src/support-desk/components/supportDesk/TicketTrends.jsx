function TicketTrends() {
  return (
    <article className="sd-card sd-ticket-trends">
      <div className="sd-card-head">
        <h2>Ticket Trends</h2>
      </div>

      <div className="sd-line-chart-wrap">
        <svg viewBox="0 0 520 220" preserveAspectRatio="none" aria-label="Ticket trends line chart">
          <polyline
            points="25,170 85,130 145,145 205,112 265,80 325,95 385,130 455,165"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="25,180 85,155 145,160 205,135 265,100 325,112 385,145 455,178"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </article>
  )
}

export default TicketTrends
