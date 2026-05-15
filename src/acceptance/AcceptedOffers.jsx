import { FiMoreHorizontal } from 'react-icons/fi'

const offers = [
  {
    name: 'Sarah Wilson',
    role: 'Senior Frontend Developer',
    accepted: 'Accepted: Jan 18, 2024',
    start: 'Start Date: Feb 5, 2024',
    salary: '$125,000',
    status: 'Onboarding',
    tone: 'green',
  },
  {
    name: 'David Park',
    role: 'Backend Engineer',
    accepted: 'Accepted: Jan 16, 2024',
    start: 'Start Date: Feb 1, 2024',
    salary: '$118,000',
    status: 'Started',
    tone: 'purple',
  },
  {
    name: 'Mason Johnson',
    role: 'Full Stack Developer',
    accepted: 'Accepted: Jan 14, 2024',
    start: 'Start Date: Feb 12, 2024',
    salary: '$110,000',
    status: 'Onboarding',
    tone: 'green',
  },
]

function AcceptedOffers() {
  return (
    <article className="acc-card">
      <div className="acc-section-head">
        <h3>Accepted Offers</h3>
        <div className="acc-filter-group">
          <button type="button" className="acc-filter-btn">All Positions</button>
          <button type="button" className="acc-filter-btn">All Status</button>
        </div>
      </div>

      <div className="acc-offers-list">
        {offers.map((item) => (
          <div className="acc-offer-row" key={item.name}>
            <div className="acc-offer-left">
              <img className="acc-avatar" src={`https://i.pravatar.cc/46?u=${item.name}`} alt={item.name} />
              <div>
                <div className="acc-offer-name">{item.name}</div>
                <div className="acc-offer-role">{item.role}</div>
                <div className="acc-offer-meta">
                  <span>{item.accepted}</span>
                  <span>{item.start}</span>
                </div>
              </div>
            </div>

            <div className="acc-offer-right">
              <div className="acc-offer-salary">
                <strong>{item.salary}</strong>
                <span>Base Salary</span>
              </div>
              <span className={`acc-status-badge ${item.tone}`}>{item.status}</span>
              <button type="button" className="acc-view-btn">View Profile</button>
              <button type="button" className="acc-more-btn" aria-label="More actions">
                <FiMoreHorizontal size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default AcceptedOffers
