import { FiEdit2, FiEye } from 'react-icons/fi'

function TicketRow({ row }) {
  return (
    <tr>
      <td>
        <input type="checkbox" aria-label={`Select ${row.ticketId}`} />
      </td>
      <td>
        <button type="button" className="support-ticket-link">#{row.ticketId}</button>
      </td>
      <td>
        <div className="support-person-cell">
          <img src={row.customerAvatar} alt={row.customerName} />
          <div>
            <p>{row.customerName}</p>
            <span>{row.customerEmail}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="support-subject-cell">
          <p>{row.subjectTitle}</p>
          <span>{row.subjectDescription}</span>
        </div>
      </td>
      <td>
        <span className={`support-badge priority ${row.priorityStyle}`}>{row.priority}</span>
      </td>
      <td>
        <span className={`support-badge status ${row.statusStyle}`}>{row.status}</span>
      </td>
      <td>
        <div className="support-assignee-cell">
          <img src={row.assignedAvatar} alt={row.assignedName} />
          <span>{row.assignedName}</span>
        </div>
      </td>
      <td>
        <span className="support-created-text">{row.createdAt}</span>
      </td>
      <td>
        <div className="support-actions-cell">
          <button type="button" className="support-action view" aria-label={`View ${row.ticketId}`}>
            <FiEye size={12} />
          </button>
          <button type="button" className="support-action edit" aria-label={`Edit ${row.ticketId}`}>
            <FiEdit2 size={11} />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TicketRow
