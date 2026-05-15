import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Email', value: 30, color: '#3B82F6' },
  { name: 'WhatsApp', value: 27, color: '#10B981' },
  { name: 'Chat', value: 18, color: '#8B5CF6' },
  { name: 'Messenger', value: 15, color: '#F59E0B' },
  { name: 'Phone', value: 10, color: '#EF4444' },
]

const RADIAN = Math.PI / 180

function renderLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="#ffffff" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600">
      {`${value}%`}
    </text>
  )
}

function ChannelPieChart() {
  return (
    <article className="reports-panel reports-pie-panel">
      <div className="reports-panel-header">
        <h2>Channel Distribution</h2>
        <button type="button" className="reports-panel-menu" aria-label="More options">
          ⋮
        </button>
      </div>

      <div className="reports-pie-layout">
        <div className="reports-pie-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={94}
                innerRadius={0}
                label={renderLabel}
                labelLine={false}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="reports-pie-legend">
          {data.map((entry) => (
            <div key={entry.name} className="reports-pie-legend-row">
              <span style={{ backgroundColor: entry.color }} />
              <p>{entry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ChannelPieChart