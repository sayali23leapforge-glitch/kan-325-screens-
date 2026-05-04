import PermissionRow from './PermissionRow'

function PermissionSection({ section, features, permissions, onPermissionChange }) {
  return (
    <>
      <tr className="permission-section-header">
        <td colSpan="6" className="section-title">{section}</td>
      </tr>
      {features.map((feature) => (
        <PermissionRow
          key={feature}
          feature={feature}
          permissions={permissions[feature] || { view: false, create: false, update: false, delete: false, admin: false }}
          onPermissionChange={onPermissionChange}
        />
      ))}
    </>
  )
}

export default PermissionSection
