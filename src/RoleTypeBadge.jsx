function RoleTypeBadge({ type }) {
  const getClassName = (type) => {
    switch (type) {
      case 'SYSTEM':
        return 'role-type-badge-system'
      case 'CUSTOM':
        return 'role-type-badge-custom'
      default:
        return 'role-type-badge-system'
    }
  }

  return (
    <span className={`role-type-badge ${getClassName(type)}`}>
      {type}
    </span>
  )
}

export default RoleTypeBadge
