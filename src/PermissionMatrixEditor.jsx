import PermissionSection from './PermissionSection'

function PermissionMatrixEditor({ selectedRole, permissions, onPermissionChange, onReset }) {
  const permissionSections = [
    {
      name: 'USER MANAGEMENT',
      features: ['Users', 'Roles', 'Groups']
    },
    {
      name: 'SYSTEM SETTINGS',
      features: ['Security Policies', 'Audit Logs', 'System Configuration']
    },
    {
      name: 'CONTENT MANAGEMENT',
      features: ['Documents', 'Media Files', 'Templates']
    },
    {
      name: 'ANALYTICS',
      features: ['Reports', 'Dashboards']
    }
  ]

  return (
    <div className="permission-matrix-editor">
      <div className="editor-header">
        <div className="editor-title-section">
          <h2 className="editor-title">Permissions Matrix</h2>
          <p className="editor-subtitle">
            Configure permissions for <span className="role-name-highlight">{selectedRole?.name}</span> role
          </p>
        </div>
        <button className="btn-reset-to-default" onClick={onReset}>
          Reset to Default
        </button>
      </div>

      <div className="editor-table-wrapper">
        <table className="permission-matrix-table">
          <thead>
            <tr className="table-header">
              <th className="col-feature">Feature</th>
              <th className="col-permission">View</th>
              <th className="col-permission">Create</th>
              <th className="col-permission">Update</th>
              <th className="col-permission">Delete</th>
              <th className="col-permission">Admin</th>
            </tr>
          </thead>
          <tbody>
            {permissionSections.map((section, idx) => (
              <PermissionSection
                key={idx}
                section={section.name}
                features={section.features}
                permissions={permissions}
                onPermissionChange={onPermissionChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PermissionMatrixEditor
