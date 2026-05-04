import PermissionCheckbox from './PermissionCheckbox'

function PermissionRow({ feature, permissions, onPermissionChange }) {
  return (
    <tr className="permission-table-row">
      <td className="col-feature">{feature}</td>
      <td className="col-permission">
        <PermissionCheckbox
          checked={permissions.view}
          onChange={(e) => onPermissionChange(feature, 'view', e.target.checked)}
        />
      </td>
      <td className="col-permission">
        <PermissionCheckbox
          checked={permissions.create}
          onChange={(e) => onPermissionChange(feature, 'create', e.target.checked)}
        />
      </td>
      <td className="col-permission">
        <PermissionCheckbox
          checked={permissions.update}
          onChange={(e) => onPermissionChange(feature, 'update', e.target.checked)}
        />
      </td>
      <td className="col-permission">
        <PermissionCheckbox
          checked={permissions.delete}
          onChange={(e) => onPermissionChange(feature, 'delete', e.target.checked)}
        />
      </td>
      <td className="col-permission">
        <PermissionCheckbox
          checked={permissions.admin}
          onChange={(e) => onPermissionChange(feature, 'admin', e.target.checked)}
        />
      </td>
    </tr>
  )
}

export default PermissionRow
