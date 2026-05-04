import { useMemo, useState } from 'react'
import OrganizationCard from './OrganizationCard'
import './organization.css'

const ORGANIZATIONS = [
  {
    id: 'acme',
    initials: 'AC',
    name: 'Acme Corporation',
    domain: 'acme-corp.karnovate.com',
    role: 'Admin',
    lastAccessed: '2 hours ago',
    favorite: true,
    lastUsed: true,
    avatarTone: 'blue',
  },
  {
    id: 'techstart',
    initials: 'TI',
    name: 'TechStart Industries',
    domain: 'techstart.karnovate.com',
    role: 'Manager',
    lastAccessed: '2 days ago',
    favorite: false,
    lastUsed: false,
    avatarTone: 'violet',
  },
  {
    id: 'global',
    initials: 'GI',
    name: 'Global Innovations Ltd',
    domain: 'global-innovations.karnovate.com',
    role: 'Viewer',
    lastAccessed: '7 days ago',
    favorite: true,
    lastUsed: false,
    avatarTone: 'green',
  },
  {
    id: 'enterprise',
    initials: 'ES',
    name: 'Enterprise Solutions Inc',
    domain: 'enterprise-solutions.karnovate.com',
    role: 'Admin',
    lastAccessed: '12 days ago',
    favorite: false,
    lastUsed: false,
    avatarTone: 'orange',
  },
  {
    id: 'digital',
    initials: 'DD',
    name: 'Digital Dynamics',
    domain: 'digital-dynamics.karnovate.com',
    role: 'Manager',
    lastAccessed: '17 days ago',
    favorite: false,
    lastUsed: false,
    avatarTone: 'pink',
  },
]

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.3 9.9 8 11 4.7-1.1 8-5.8 8-11V5l-8-3Zm0 3.2 5 1.9V11c0 3.7-2.2 7.2-5 8.3-2.8-1.1-5-4.6-5-8.3V7.1l5-1.9Z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.3 4.3-1.4 1.4-4.3-4.3A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3h-4a3 3 0 0 0-3 3v2h2V6a1 1 0 0 1 1-1h4V3Zm2.3 5.3-1.4 1.4 1.3 1.3H9v2h7.2l-1.3 1.3 1.4 1.4 3.7-3.7-3.7-3.7ZM7 16v2a3 3 0 0 0 3 3h4v-2h-4a1 1 0 0 1-1-1v-2H7Z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.4 9.6 1.4-1.4L12 11.4l3.2-3.2 1.4 1.4-4.6 4.6-4.6-4.6Z" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 12h-2v-2h2v2Zm0-4h-2V7h2v4Z" />
    </svg>
  )
}

function Organization({ onLogout, onSelectOrganization }) {
  const [selectedId, setSelectedId] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [roleFilter, setRoleFilter] = useState('All roles')

  const filteredOrganizations = useMemo(() => {
    return ORGANIZATIONS.filter((org) => {
      const matchesSearch =
        org.name.toLowerCase().includes(searchText.toLowerCase()) ||
        org.domain.toLowerCase().includes(searchText.toLowerCase())
      const matchesRole = roleFilter === 'All roles' || org.role === roleFilter
      return matchesSearch && matchesRole
    })
  }, [searchText, roleFilter])

  const handleSelect = (organization) => {
    setSelectedId(organization.id)
    onSelectOrganization(organization)
  }

  return (
    <main className="org-page">
      <header className="org-brand" aria-label="Karnovate branding">
        <div className="org-brand-badge">
          <ShieldIcon />
        </div>
        <h1>Karnovate</h1>
        <p>Enterprise Suite</p>
      </header>

      <section className="org-panel" aria-label="Organization Selection Panel">
        <div className="org-header">
          <div>
            <h2>Select Organization</h2>
            <p>Choose an organization to continue</p>
          </div>

          <button type="button" className="logout-btn" onClick={onLogout}>
            <LogoutIcon />
            Logout
          </button>
        </div>

        <div className="search-filter-row">
          <label className="search-box" aria-label="Search organizations">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search organizations"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </label>

          <label className="filter-box" aria-label="Filter organizations by role">
            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
            >
              <option>All roles</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Viewer</option>
            </select>
            <ChevronIcon />
          </label>
        </div>

        <div className="org-list" role="list" aria-label="Organizations">
          {filteredOrganizations.map((org) => (
            <OrganizationCard
              key={org.id}
              org={org}
              isSelected={selectedId === org.id}
              onSelect={handleSelect}
            />
          ))}

          {filteredOrganizations.length === 0 && (
            <p className="empty-state">No organizations match your search.</p>
          )}
        </div>

        <div className="org-footer-row">
          <p>
            <AlertIcon />
            Select an organization to continue
          </p>

          <button
            type="button"
            className="continue-btn"
            disabled={!selectedId}
            onClick={() => {
              const selectedOrganization = ORGANIZATIONS.find(
                (organization) => organization.id === selectedId,
              )

              if (selectedOrganization) {
                onSelectOrganization(selectedOrganization)
              }
            }}
          >
            Continue
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <footer className="org-panel-footer">
          <p className="iam-note">
            <ShieldIcon />
            Protected by enterprise IAM
          </p>
          <p className="copyright">@ 2024 Karnovate. All rights reserved.</p>
        </footer>
      </section>
    </main>
  )
}

export default Organization
