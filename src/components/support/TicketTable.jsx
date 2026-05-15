import { FiColumns, FiDownload, FiGrid } from 'react-icons/fi'
import TicketRow from './TicketRow'

const ticketRows = [
  {
    ticketId: 'TKT-1245',
    customerName: 'Sarah Williams',
    customerEmail: 'sarah@example.com',
    customerAvatar: 'https://i.pravatar.cc/64?img=32',
    subjectTitle: 'Login Issues',
    subjectDescription: 'Unable to login to account after password reset',
    priority: 'High',
    priorityStyle: 'high',
    status: 'Open',
    statusStyle: 'open',
    assignedName: 'Alex Morgan',
    assignedAvatar: 'https://i.pravatar.cc/64?img=12',
    createdAt: '5 min ago',
  },
  {
    ticketId: 'TKT-1244',
    customerName: 'Mike Johnson',
    customerEmail: 'mike@example.com',
    customerAvatar: 'https://i.pravatar.cc/64?img=15',
    subjectTitle: 'Payment Failed',
    subjectDescription: 'Credit card payment declined multiple times',
    priority: 'Medium',
    priorityStyle: 'medium',
    status: 'In Progress',
    statusStyle: 'progress',
    assignedName: 'James Wilson',
    assignedAvatar: 'https://i.pravatar.cc/64?img=20',
    createdAt: '12 min ago',
  },
  {
    ticketId: 'TKT-1243',
    customerName: 'Emma Davis',
    customerEmail: 'emma@example.com',
    customerAvatar: 'https://i.pravatar.cc/64?img=47',
    subjectTitle: 'Feature Request',
    subjectDescription: 'Request for dark mode in mobile app',
    priority: 'Low',
    priorityStyle: 'low',
    status: 'Resolved',
    statusStyle: 'resolved',
    assignedName: 'Lisa Chen',
    assignedAvatar: 'https://i.pravatar.cc/64?img=5',
    createdAt: '1 hour ago',
  },
  {
    ticketId: 'TKT-1242',
    customerName: 'David Brown',
    customerEmail: 'david@example.com',
    customerAvatar: 'https://i.pravatar.cc/64?img=53',
    subjectTitle: 'Account Suspended',
    subjectDescription: 'Account suspended without notice',
    priority: 'Critical',
    priorityStyle: 'critical',
    status: 'Pending',
    statusStyle: 'pending',
    assignedName: 'Tom Anderson',
    assignedAvatar: 'https://i.pravatar.cc/64?img=28',
    createdAt: '2 hours ago',
  },
  {
    ticketId: 'TKT-1241',
    customerName: 'Robert Wilson',
    customerEmail: 'robert@example.com',
    customerAvatar: 'https://i.pravatar.cc/64?img=65',
    subjectTitle: 'Bug Report',
    subjectDescription: 'Mobile app crashes on startup',
    priority: 'High',
    priorityStyle: 'high',
    status: 'In Progress',
    statusStyle: 'progress',
    assignedName: 'Alex Morgan',
    assignedAvatar: 'https://i.pravatar.cc/64?img=12',
    createdAt: '3 hours ago',
  },
]

function TicketTable() {
  return (
    <section className="support-table-card">
      <div className="support-table-header">
        <h2>Tickets (156)</h2>

        <div className="support-table-controls">
          <button type="button" className="support-export-button">
            <FiDownload size={12} />
            Export
          </button>

          <span className="support-view-label">View:</span>

          <button type="button" className="support-view-icon active" aria-label="List view">
            <FiColumns size={12} />
          </button>

          <button type="button" className="support-view-icon" aria-label="Grid view">
            <FiGrid size={12} />
          </button>
        </div>
      </div>

      <div className="support-table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="Select all tickets" />
              </th>
              <th>TICKET</th>
              <th>CUSTOMER</th>
              <th>SUBJECT</th>
              <th>PRIORITY</th>
              <th>STATUS</th>
              <th>ASSIGNED</th>
              <th>CREATED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {ticketRows.map((row) => (
              <TicketRow key={row.ticketId} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="support-table-footer">
        <p>Showing 1 to 5 of 156 results</p>

        <div className="support-pagination">
          <button type="button" className="support-page-btn">Previous</button>
          <button type="button" className="support-page-btn active">1</button>
          <button type="button" className="support-page-btn">2</button>
          <button type="button" className="support-page-btn">3</button>
          <span>...</span>
          <button type="button" className="support-page-btn">32</button>
          <button type="button" className="support-page-btn">Next</button>
        </div>
      </div>
    </section>
  )
}

export default TicketTable
