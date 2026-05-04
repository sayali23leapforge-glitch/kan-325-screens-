import PermissionTable from './PermissionTable'

function PermissionMatrixCard({ selectedRole, permissions, onPermissionChange, onReset }) {
  return (
    <div className="permission-matrix-card">
      <div className="matrix-card-header">
        <div className="matrix-header-left">
          <h3 className="card-title">Permission Matrix</h3>
          <p className="matrix-subtitle">{selectedRole?.name} Role</p>
        </div>
        <button className="btn-reset-default" onClick={onReset}>
          Reset to Default
        </button>
      </div>

      <PermissionTable
        permissions={permissions}
        onPermissionChange={onPermissionChange}
      />
    </div>
  )
}

export default PermissionMatrixCard
