function RoleBadge({ role }) {
  const getRoleClass = (role) => {
    switch (role) {
      case 'Admin':
        return 'role-badge-admin'
      case 'Super Admin':
        return 'role-badge-super-admin'
      case 'Manager':
        return 'role-badge-manager'
      case 'User':
        return 'role-badge-user'
      case 'Viewer':
        return 'role-badge-viewer'
      default:
        return 'role-badge-user'
    }
  }

  return (
    <span className={`role-badge ${getRoleClass(role)}`}>
      {role}
    </span>
  )
}

export default RoleBadge
