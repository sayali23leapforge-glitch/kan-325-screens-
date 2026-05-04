function StarIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={active ? 'active' : ''}>
      <path d="m12 3.7 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3.7Z" />
    </svg>
  )
}

function OrganizationCard({ org, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`org-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(org)}
      aria-pressed={isSelected}
    >
      <div className={`org-avatar ${org.avatarTone}`}>{org.initials}</div>

      <div className="org-content">
        <div className="org-title-row">
          <h3>{org.name}</h3>
          {org.lastUsed && <span className="last-used">LAST USED</span>}
        </div>

        <p className="org-domain">{org.domain}</p>

        <div className="org-meta-row">
          <span className={`role-badge ${org.role.toLowerCase()}`}>{org.role}</span>
          <span className="dot">•</span>
          <span className="last-accessed">Last accessed {org.lastAccessed}</span>
        </div>
      </div>

      <span className="org-favorite" aria-label={org.favorite ? 'Favorite organization' : 'Not favorite'}>
        <StarIcon active={org.favorite} />
      </span>
    </button>
  )
}

export default OrganizationCard
