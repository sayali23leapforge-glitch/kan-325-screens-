import { FiEdit2 } from 'react-icons/fi'

const pendingOffers = [
  {
    name: 'Alex Rodriguez',
    role: 'Senior Frontend Developer',
    sent: 'Sent: Jan 17, 2024',
    expiry: '',
    salary: '$120,000',
    status: 'Pending',
    tone: 'blue',
  },
  {
    name: 'Emma Thompson',
    role: 'Product Manager',
    sent: 'Sent: Jan 12, 2024',
    expiry: 'Expires: Jan 26, 2024',
    salary: '$135,000',
    status: 'Negotiating',
    tone: 'yellow',
  },
  {
    name: 'Michael Chen',
    role: 'Backend Engineer',
    sent: 'Sent: Jan 10, 2024',
    expiry: 'Expires: Jan 22, 2024',
    salary: '$115,000',
    status: 'Pending',
    tone: 'blue',
  },
]

function PendingOffersList() {
  return (
    <article className="offer-card">
      <div className="offer-section-head">
        <h3>Pending Offers</h3>
        <div className="offer-filter-group">
          <button type="button" className="offer-filter-btn">All Positions</button>
          <button type="button" className="offer-filter-btn">All Departments</button>
        </div>
      </div>

      <div className="offer-list">
        {pendingOffers.map((item) => (
          <div className="offer-row" key={item.name}>
            <div className="offer-row-left">
              <img className="offer-avatar" src={`https://i.pravatar.cc/46?u=${item.name}`} alt={item.name} />
              <div>
                <div className="offer-row-name">{item.name}</div>
                <div className="offer-row-role">{item.role}</div>
                <div className="offer-row-meta">
                  <span>{item.sent}</span>
                  {item.expiry && <span className="offer-expiry">{item.expiry}</span>}
                </div>
              </div>
            </div>

            <div className="offer-row-salary">
              <strong>{item.salary}</strong>
              <span>Base Salary</span>
            </div>

            <div className="offer-row-actions">
              <span className={`offer-status-badge ${item.tone}`}>{item.status}</span>
              <button type="button" className="offer-view-btn">View Details</button>
              <button type="button" className="offer-edit-btn" aria-label="Edit offer">
                <FiEdit2 size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default PendingOffersList
