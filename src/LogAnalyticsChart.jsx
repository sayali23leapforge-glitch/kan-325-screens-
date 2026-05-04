import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'

function LogAnalyticsChart({ data }) {
  return (
    <div className="analytics-card">
      <h3 className="analytics-title">Log Events Over Time (Last 24 Hours)</h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorInfo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorWarning" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CA8A04" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#CA8A04" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="time" stroke="#6B7280" style={{ fontSize: '12px' }} />
          <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="info"
            stroke="#16A34A"
            fillOpacity={1}
            fill="url(#colorInfo)"
            name="Info"
          />
          <Area
            type="monotone"
            dataKey="warning"
            stroke="#CA8A04"
            fillOpacity={1}
            fill="url(#colorWarning)"
            name="Warning"
          />
          <Area
            type="monotone"
            dataKey="error"
            stroke="#DC2626"
            fillOpacity={1}
            fill="url(#colorError)"
            name="Error"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LogAnalyticsChart
