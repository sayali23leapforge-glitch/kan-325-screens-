const legendItems = [
  { label: 'Critical', color: '#EF4444' },
  { label: 'High', color: '#F59E0B' },
  { label: 'Medium', color: '#10B981' },
  { label: 'Low', color: '#8B5CF6' },
]

function PriorityChart() {
  return (
    <article className="sd-card sd-priority-chart">
      <div className="sd-card-head">
        <h2>Priority Distribution</h2>
      </div>

      <div className="sd-priority-chart-body">
        <div className="sd-donut-chart" />

        <div className="sd-priority-legend">
          {legendItems.map((item) => (
            <div key={item.label} className="sd-priority-legend-row">
              <span style={{ backgroundColor: item.color }} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default PriorityChart
