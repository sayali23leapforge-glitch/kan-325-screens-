import { useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { day: 'Mon', created: 22, resolved: 18 },
  { day: 'Tue', created: 35, resolved: 26 },
  { day: 'Wed', created: 28, resolved: 22 },
  { day: 'Thu', created: 52, resolved: 41 },
  { day: 'Fri', created: 44, resolved: 34 },
  { day: 'Sat', created: 30, resolved: 24 },
  { day: 'Sun', created: 16, resolved: 12 },
]

function TicketTrendsChart() {
  const [activeTab, setActiveTab] = useState('week')

  return (
    <article className="reports-panel reports-trends-panel">
      <div className="reports-panel-header">
        <h2>Ticket Trends</h2>
        <div className="reports-tabs" role="tablist" aria-label="Ticket trends range">
          {['week', 'month', 'year'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`reports-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="reports-chart-wrap reports-line-chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 18, left: 0, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} width={22} />
            <Tooltip
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
              }}
            />
            <Line type="monotone" dataKey="created" stroke="#3B82F6" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="resolved" stroke="#10B981" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}

export default TicketTrendsChart