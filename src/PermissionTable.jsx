import React from 'react'

function PermissionTable({ permissions, onPermissionChange }) {
  const featureGroups = [
    {
      name: 'User Management',
      features: ['Users', 'Roles']
    }
  ]

  return (
    <div className="permission-table-wrapper">
      <table className="permission-table">
        <thead>
          <tr className="table-header-row">
            <th className="col-feature">Feature</th>
            <th className="col-permission">View</th>
            <th className="col-permission">Create</th>
            <th className="col-permission">Update</th>
            <th className="col-permission">Delete</th>
            <th className="col-permission">Admin</th>
          </tr>
        </thead>
        <tbody>
          {featureGroups.map((group, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <tr className="table-group-row">
                <td colSpan="6" className="group-name">{group.name}</td>
              </tr>
              {group.features.map((feature) => (
                <tr key={feature} className="table-feature-row">
                  <td className="col-feature">{feature}</td>
                  {['view', 'create', 'update', 'delete', 'admin'].map((permission) => (
                    <td key={permission} className="col-permission">
                      <input
                        type="checkbox"
                        className="permission-checkbox"
                        checked={permissions[feature]?.[permission] || false}
                        onChange={(e) => onPermissionChange(feature, permission, e.target.checked)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PermissionTable
