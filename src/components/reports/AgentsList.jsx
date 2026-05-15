const agents = [
  { name: 'Alex Morgan', role: 'Support Lead', value: 95, avatar: 'AM' },
  { name: 'Sarah Wilson', role: 'Customer Care', value: 89, avatar: 'SW' },
  { name: 'Mike Thompson', role: 'Support Agent', value: 87, avatar: 'MT' },
  { name: 'Emma Johnson', role: 'Billing Specialist', value: 82, avatar: 'EJ' },
  { name: 'James Taylor', role: 'Product Expert', value: 76, avatar: 'JT' },
]

function AgentsList() {
  return (
    <article className="reports-panel reports-agents-panel">
      <div className="reports-panel-header">
        <h2>Top Agents</h2>
      </div>

      <div className="reports-agents-list">
        {agents.map((agent, index) => (
          <div key={agent.name} className="reports-agent-row">
            <span className={`reports-agent-rank rank-${index + 1}`}>{index + 1}</span>
            <img src={`https://i.pravatar.cc/40?u=${agent.name}`} alt={agent.name} />
            <div className="reports-agent-copy">
              <strong>{agent.name}</strong>
              <span>{agent.role}</span>
            </div>
            <em>{agent.value}%</em>
          </div>
        ))}
      </div>
    </article>
  )
}

export default AgentsList