import { useNavigate } from 'react-router-dom'
import {
  FiChevronDown,
  FiEye,
  FiEdit2,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiKey,
  FiCpu,
  FiCode,
} from 'react-icons/fi'
import './tokens-management-section.css'

function TokensManagementSection() {
  const navigate = useNavigate()

  const tokenRows = [
    {
      id: 'prod-api-key',
      icon: <FiKey size={14} />,
      iconClass: 'tms-icon-green',
      name: 'Production API Key',
      description: 'Used for production environment access',
      status: 'Active',
      statusClass: 'active',
      created: 'Dec 15, 2024',
      expiry: 'Dec 15, 2025',
      used: '2 hours ago',
      role: 'Admin',
      roleClass: 'admin',
    },
    {
      id: 'service-integration-token',
      icon: <FiCpu size={14} />,
      iconClass: 'tms-icon-blue',
      name: 'Service Integration Token',
      description: 'For automated service-to-service communication',
      status: 'Active',
      statusClass: 'active',
      created: 'Nov 26, 2024',
      expiry: 'Nov 26, 2025',
      used: '15 minutes ago',
      role: 'Service',
      roleClass: 'service',
    },
    {
      id: 'development-token',
      icon: <FiCode size={14} />,
      iconClass: 'tms-icon-gray',
      name: 'Development Token',
      description: 'Used for development environment testing',
      status: 'Expired',
      statusClass: 'expired',
      created: 'Oct 15, 2024',
      expiry: 'Dec 15, 2024',
      used: '3 days ago',
      role: 'User',
      roleClass: 'user',
    },
  ]

  return (
    <section className="tms-shell">
      <div className="tms-card">
        <div className="tms-head">
          <div>
            <h3>API Tokens</h3>
            <p>Manage API access tokens for IAM Security Suite</p>
          </div>
          <button className="tms-generate-btn" type="button">
            <FiPlus size={13} />
            Generate Token
          </button>
        </div>

        <div className="tms-filter-row">
          <label className="tms-search-wrap">
            <FiSearch size={14} />
            <input type="text" value="" readOnly placeholder="Search tokens by name or description..." />
          </label>
          <button className="tms-filter-btn" type="button">
            <span>All Types</span>
            <FiChevronDown size={13} />
          </button>
          <button className="tms-filter-btn" type="button">
            <span>All Status</span>
            <FiChevronDown size={13} />
          </button>
        </div>

        <div className="tms-list">
          {tokenRows.map((token) => (
            <article key={token.name} className="tms-row">
              <div className="tms-left">
                <div className={`tms-icon ${token.iconClass}`}>{token.icon}</div>
                <div>
                  <h4>
                    {token.id === 'prod-api-key' ? (
                      <button
                        className="tms-token-link"
                        type="button"
                        onClick={() => navigate(`/products/tokens/${token.id}`)}
                      >
                        {token.name}
                      </button>
                    ) : (
                      token.name
                    )}
                  </h4>
                  <p>{token.description}</p>
                  <div className="tms-meta">
                    <span className={`tms-status ${token.statusClass}`}>
                      <i />
                      {token.status}
                    </span>
                    <span>Created: {token.created}</span>
                    <span>Expires: {token.expiry}</span>
                    <span>Last used: {token.used}</span>
                  </div>
                </div>
              </div>
              <div className="tms-right">
                <span className={`tms-role-tag ${token.roleClass}`}>{token.role}</span>
                <button className="tms-icon-btn" type="button" aria-label="View token">
                  <FiEye size={13} />
                </button>
                <button className="tms-icon-btn" type="button" aria-label="Edit token">
                  <FiEdit2 size={13} />
                </button>
                <button className="tms-icon-btn tms-delete" type="button" aria-label="Delete token">
                  <FiTrash2 size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TokensManagementSection
