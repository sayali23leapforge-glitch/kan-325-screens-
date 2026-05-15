const tickets = [
  {
    id: '#TKT-2847',
    customer: 'John Smith',
    subject: 'Payment processing',
    channel: 'Email',
    agent: 'Alex Morgan',
    status: 'Resolved',
    priority: 'Low',
    created: '2 hours ago',
  },
  {
    id: '#TKT-2848',
    customer: 'Lisa Anderson',
    subject: 'Account access issue',
    channel: 'WhatsApp',
    agent: 'Sarah Wilson',
    status: 'Open',
    priority: 'High',
    created: '4 hours ago',
  },
  {
    id: '#TKT-2849',
    customer: 'Robert Brown',
    subject: 'Billing question',
    channel: 'Chat',
    agent: 'Mike Thompson',
    status: 'Pending',
    priority: 'Medium',
    created: '6 hours ago',
  },
  {
    id: '#TKT-2850',
    customer: 'Emma Wilson',
    subject: 'Refund request',
    channel: 'Messenger',
    agent: 'Emma Johnson',
    status: 'Resolved',
    priority: 'Low',
    created: '7 hours ago',
  },
]

function TicketsTable() {
  return (
    <article className="reports-panel reports-table-panel">
      <div className="reports-panel-header reports-table-header">
        <h2>Recent Tickets</h2>
        <div className="reports-table-search">
          <input type="text" placeholder="Search tickets..." aria-label="Search tickets" />
          <button type="button" aria-label="Filter tickets">
            ⌄
          </button>
        </div>
      </div>

      <div className="reports-table-wrap">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Customer</th>
              <th>Subject</th>
              <th>Channel</th>
              <th>Agent</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.customer}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.channel}</td>
                <td>{ticket.agent}</td>
                <td>
                  <span className={`reports-status-pill ${ticket.status.toLowerCase()}`}>{ticket.status}</span>
                </td>
                <td>{ticket.priority}</td>
                <td>{ticket.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default TicketsTable