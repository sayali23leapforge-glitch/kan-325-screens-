const agentRows = [
  { name: 'Sarah Wilson', resolved: 24, percentage: 95 },
  { name: 'Mike Thompson', resolved: 21, percentage: 87 },
  { name: 'Emma Johnson', resolved: 19, percentage: 82 },
]

function TopAgents() {
  return (
    <article className="sd-card sd-top-agents">
      <div className="sd-card-head with-action">
        <h2>Top Agents</h2>
        <button type="button">View All</button>
      </div>

      <div className="sd-list-wrap">
        {agentRows.map((agent) => (
          <div key={agent.name} className="sd-agent-row">
            <img src={`https://i.pravatar.cc/32?u=${agent.name}`} alt={agent.name} />
            <div className="sd-agent-copy">
              <p>{agent.name}</p>
              <span>{agent.resolved} tickets resolved</span>
              <div className="sd-agent-progress-track">
                <div className="sd-agent-progress-fill" style={{ width: `${agent.percentage}%` }} />
              </div>
            </div>
            <strong>{agent.percentage}%</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

export default TopAgents
