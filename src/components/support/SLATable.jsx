const rows = [
  {
    name: 'Critical Issues',
    desc: 'System outages & critical bugs',
    iconTone: 'critical',
    iconGlyph: '!',
    priority: 'Critical',
    priorityTone: 'critical',
    response: '15 minutes',
    resolution: '2 hours',
    compliance: '98%',
    complianceWidth: '98%',
    complianceTone: 'green',
    complianceTextTone: 'green',
    status: 'Active',
    statusTone: 'active',
  },
  {
    name: 'High Priority',
    desc: 'Important functionality issues',
    iconTone: 'high',
    iconGlyph: '↑',
    priority: 'High',
    priorityTone: 'high',
    response: '1 hour',
    resolution: '8 hours',
    compliance: '92%',
    complianceWidth: '92%',
    complianceTone: 'green',
    complianceTextTone: 'green',
    status: 'Active',
    statusTone: 'active',
  },
  {
    name: 'Medium Priority',
    desc: 'General support requests',
    iconTone: 'medium',
    iconGlyph: '−',
    priority: 'Medium',
    priorityTone: 'medium',
    response: '4 hours',
    resolution: '24 hours',
    compliance: '87%',
    complianceWidth: '87%',
    complianceTone: 'yellow',
    complianceTextTone: 'yellow',
    status: 'Active',
    statusTone: 'active',
  },
  {
    name: 'Low Priority',
    desc: 'Feature requests & questions',
    iconTone: 'low',
    iconGlyph: '↓',
    priority: 'Low',
    priorityTone: 'low',
    response: '8 hours',
    resolution: '72 hours',
    compliance: '95%',
    complianceWidth: '95%',
    complianceTone: 'green',
    complianceTextTone: 'green',
    status: 'Active',
    statusTone: 'active',
  },
  {
    name: 'VIP Customer',
    desc: 'Premium customer support',
    iconTone: 'vip',
    iconGlyph: '✦',
    priority: 'VIP',
    priorityTone: 'vip',
    response: '5 minutes',
    resolution: '1 hour',
    compliance: '100%',
    complianceWidth: '100%',
    complianceTone: 'green',
    complianceTextTone: 'green',
    status: 'Active',
    statusTone: 'active',
  },
  {
    name: 'Legacy Support',
    desc: 'Discontinued product support',
    iconTone: 'legacy',
    iconGlyph: '‖',
    priority: 'Low',
    priorityTone: 'low',
    response: '24 hours',
    resolution: '7 days',
    compliance: '65%',
    complianceWidth: '65%',
    complianceTone: 'red',
    complianceTextTone: 'red',
    status: 'Inactive',
    statusTone: 'inactive',
  },
]

function SLATable() {
  return (
    <section className="support-sla-table-card">
      <div className="support-sla-table-head">
        <h2>SLA Policies</h2>
      </div>

      <div className="support-sla-table-wrap">
        <table>
          <thead>
            <tr>
              <th>SLA NAME</th>
              <th>PRIORITY</th>
              <th>RESPONSE TIME</th>
              <th>RESOLUTION TIME</th>
              <th>COMPLIANCE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <div className="support-sla-name-cell">
                    <span className={`support-sla-name-icon ${row.iconTone}`}>{row.iconGlyph}</span>
                    <div>
                      <p>{row.name}</p>
                      <small>{row.desc}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`support-sla-badge priority ${row.priorityTone}`}>{row.priority}</span>
                </td>
                <td>{row.response}</td>
                <td>{row.resolution}</td>
                <td>
                  <div className="support-sla-compliance-cell">
                    <div className="support-sla-progress-track">
                      <div className={`support-sla-progress-fill ${row.complianceTone}`} style={{ width: row.complianceWidth }} />
                    </div>
                    <span className={row.complianceTextTone}>{row.compliance}</span>
                  </div>
                </td>
                <td>
                  <span className={`support-sla-badge status ${row.statusTone}`}>{row.status}</span>
                </td>
                <td>
                  <button type="button" className="support-sla-action edit">Edit</button>
                  <button type="button" className="support-sla-action delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SLATable
