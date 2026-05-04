import UserRow from './UserRow'

function UsersTable({ users, selectedUsers, onSelectUser, onSelectAll, onAction, onExport, onMoreFilters }) {
  const allSelected = selectedUsers.size === users.length && users.length > 0
  const someSelected = selectedUsers.size > 0 && selectedUsers.size < users.length

  const handleSelectAll = () => {
    if (allSelected) {
      onSelectAll([])
    } else {
      onSelectAll(users.map(u => u.id))
    }
  }

  return (
    <div className="users-table-card">
      <div className="table-card-header">
        <div className="table-header-left">
          <h3 className="table-title">All Users</h3>
          <span className="table-badge">{users.length} total</span>
        </div>
        <div className="table-header-right">
          <button className="btn-table-action" onClick={onExport}>
            Export
          </button>
          <button className="btn-table-action" onClick={onMoreFilters}>
            More Filters
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr className="table-header-row">
              <th className="col-checkbox">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="header-checkbox"
                  title={someSelected ? 'Some selected' : ''}
                />
              </th>
              <th className="col-name">Name</th>
              <th className="col-email">Email</th>
              <th className="col-role">Role</th>
              <th className="col-status">Status</th>
              <th className="col-mfa">MFA</th>
              <th className="col-last-login">Last Login</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                isSelected={selectedUsers.has(user.id)}
                onSelect={onSelectUser}
                onAction={onAction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
