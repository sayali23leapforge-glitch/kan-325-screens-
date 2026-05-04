import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import RolesHeader from './RolesHeader'
import RolesListCard from './RolesListCard'
import PermissionMatrixCard from './PermissionMatrixCard'
import './roles-permissions.css'

function RolesPermissionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  // Mock roles data
  const mockRolesData = [
    {
      id: 1,
      name: 'Super Admin',
      type: 'SYSTEM',
      description: 'Full system access',
      userCount: 12,
      permissions: {
        Users: { view: true, create: true, update: true, delete: true, admin: true },
        Roles: { view: true, create: true, update: false, delete: false, admin: false }
      }
    },
    {
      id: 2,
      name: 'Admin',
      type: 'SYSTEM',
      description: 'Administrative access',
      userCount: 34,
      permissions: {
        Users: { view: true, create: true, update: true, delete: false, admin: false },
        Roles: { view: true, create: false, update: false, delete: false, admin: false }
      }
    },
    {
      id: 3,
      name: 'Manager',
      type: 'CUSTOM',
      description: 'Team management',
      userCount: 56,
      permissions: {
        Users: { view: true, create: false, update: true, delete: false, admin: false },
        Roles: { view: true, create: false, update: false, delete: false, admin: false }
      }
    },
    {
      id: 4,
      name: 'User',
      type: 'SYSTEM',
      description: 'Standard user access',
      userCount: 98,
      permissions: {
        Users: { view: true, create: false, update: false, delete: false, admin: false },
        Roles: { view: false, create: false, update: false, delete: false, admin: false }
      }
    },
    {
      id: 5,
      name: 'Viewer',
      type: 'SYSTEM',
      description: 'Read-only access',
      userCount: 47,
      permissions: {
        Users: { view: true, create: false, update: false, delete: false, admin: false },
        Roles: { view: true, create: false, update: false, delete: false, admin: false }
      }
    }
  ]

  // State management
  const [selectedRoleId, setSelectedRoleId] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [roles, setRoles] = useState(mockRolesData)

  // Filtered roles based on search
  const filteredRoles = useMemo(() => {
    return roles.filter(role =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [roles, searchTerm])

  // Get selected role
  const selectedRole = roles.find(r => r.id === selectedRoleId)

  // Get permissions for selected role
  const selectedPermissions = selectedRole?.permissions || {}

  // Handle role selection
  const handleSelectRole = (roleId) => {
    setSelectedRoleId(roleId)
    // Navigate to editor page
    navigate('/roles-permissions-editor')
  }

  // Handle permission change
  const handlePermissionChange = (feature, permission, value) => {
    const updatedRoles = roles.map(role => {
      if (role.id === selectedRoleId) {
        return {
          ...role,
          permissions: {
            ...role.permissions,
            [feature]: {
              ...role.permissions[feature],
              [permission]: value
            }
          }
        }
      }
      return role
    })
    setRoles(updatedRoles)
  }

  // Handle reset to default
  const handleResetToDefault = () => {
    const defaultPermissions = mockRolesData.find(r => r.id === selectedRoleId)?.permissions
    if (defaultPermissions) {
      const updatedRoles = roles.map(role => {
        if (role.id === selectedRoleId) {
          return {
            ...role,
            permissions: defaultPermissions
          }
        }
        return role
      })
      setRoles(updatedRoles)
    }
  }

  // Handle clone role
  const handleCloneRole = (roleId) => {
    const roleToClone = roles.find(r => r.id === roleId)
    if (roleToClone) {
      const newRole = {
        ...roleToClone,
        id: Math.max(...roles.map(r => r.id)) + 1,
        name: `${roleToClone.name} Copy`,
        type: 'CUSTOM'
      }
      setRoles([...roles, newRole])
      setSelectedRoleId(newRole.id)
    }
  }

  // Handle create role
  const handleCreateRole = () => {
    console.log('Create role')
  }

  // Handle view history
  const handleViewHistory = () => {
    console.log('View history')
  }

  // Handle notifications
  const handleNotifications = () => {
    console.log('View notifications')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <RolesHeader
          onCreateRole={handleCreateRole}
          onViewHistory={handleViewHistory}
          onNotifications={handleNotifications}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="roles-content">
          <RolesListCard
            title="Roles"
            roles={roles}
            selectedRoleId={selectedRoleId}
            onSelectRole={handleSelectRole}
            onCloneRole={handleCloneRole}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filteredRoles={filteredRoles}
          />

          <PermissionMatrixCard
            selectedRole={selectedRole}
            permissions={selectedPermissions}
            onPermissionChange={handlePermissionChange}
            onReset={handleResetToDefault}
          />
        </div>
      </section>
    </main>
  )
}

export default RolesPermissionsPage
