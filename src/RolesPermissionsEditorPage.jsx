import { useState, useMemo } from 'react'
import Sidebar from './Sidebar'
import RolesHeader from './RolesHeader'
import RolesSidebar from './RolesSidebar'
import PermissionMatrixEditor from './PermissionMatrixEditor'
import PermissionsFooterBar from './PermissionsFooterBar'
import './roles-permissions-editor.css'

function RolesPermissionsEditorPage() {
  // Mock roles data
  const mockRolesData = [
    {
      id: 1,
      name: 'Super Admin',
      type: 'System',
      description: 'Full system access and control',
      userCount: 2
    },
    {
      id: 2,
      name: 'Admin',
      type: 'System',
      description: 'Administrative access with limitations',
      userCount: 15
    },
    {
      id: 3,
      name: 'Manager',
      type: 'Custom',
      description: 'Team and project management',
      userCount: 45
    },
    {
      id: 4,
      name: 'Editor',
      type: 'Custom',
      description: 'Content creation and editing',
      userCount: 78
    },
    {
      id: 5,
      name: 'Viewer',
      type: 'Custom',
      description: 'Read-only access',
      userCount: 107
    }
  ]

  // Mock permission matrix data
  const mockPermissionsData = {
    1: {
      'Users': { view: true, create: true, update: true, delete: true, admin: true },
      'Roles': { view: true, create: true, update: true, delete: true, admin: true },
      'Groups': { view: true, create: true, update: true, delete: true, admin: true },
      'Security Policies': { view: true, create: true, update: true, delete: true, admin: true },
      'Audit Logs': { view: true, create: false, update: false, delete: false, admin: true },
      'System Configuration': { view: true, create: false, update: true, delete: false, admin: true },
      'Documents': { view: true, create: true, update: true, delete: true, admin: false },
      'Media Files': { view: true, create: true, update: true, delete: false, admin: false },
      'Templates': { view: true, create: false, update: true, delete: false, admin: false },
      'Reports': { view: true, create: true, update: false, delete: false, admin: true },
      'Dashboards': { view: true, create: false, update: false, delete: false, admin: false }
    }
  }

  // State management
  const [selectedRoleId, setSelectedRoleId] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [permissions, setPermissions] = useState(mockPermissionsData)
  const [originalPermissions] = useState(JSON.parse(JSON.stringify(mockPermissionsData)))
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Filter roles by search term
  const filteredRoles = useMemo(() => {
    return mockRolesData.filter(role =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // Separate system and custom roles
  const systemRoles = filteredRoles.filter(r => r.type === 'System')
  const customRoles = filteredRoles.filter(r => r.type === 'Custom')

  // Get selected role
  const selectedRole = mockRolesData.find(r => r.id === selectedRoleId)

  // Get permissions for selected role
  const selectedPermissions = permissions[selectedRoleId] || {}

  // Calculate changed permissions count
  const changedCount = useMemo(() => {
    if (!permissions[selectedRoleId] || !originalPermissions[selectedRoleId]) return 0
    
    let count = 0
    const features = Object.keys(permissions[selectedRoleId])
    
    features.forEach(feature => {
      const permTypes = ['view', 'create', 'update', 'delete', 'admin']
      permTypes.forEach(type => {
        if (permissions[selectedRoleId][feature]?.[type] !== originalPermissions[selectedRoleId]?.[feature]?.[type]) {
          count++
        }
      })
    })
    
    return count
  }, [permissions, originalPermissions, selectedRoleId])

  // Handle permission change
  const handlePermissionChange = (feature, permType, value) => {
    setPermissions(prev => ({
      ...prev,
      [selectedRoleId]: {
        ...prev[selectedRoleId],
        [feature]: {
          ...prev[selectedRoleId]?.[feature],
          [permType]: value
        }
      }
    }))
  }

  // Handle reset to default
  const handleReset = () => {
    setPermissions(prev => ({
      ...prev,
      [selectedRoleId]: JSON.parse(JSON.stringify(originalPermissions[selectedRoleId]))
    }))
  }

  // Handle cancel
  const handleCancel = () => {
    setPermissions(JSON.parse(JSON.stringify(originalPermissions)))
  }

  // Handle preview changes
  const handlePreview = () => {
    console.log('Preview changes for role:', selectedRole?.name)
    console.log('Changed permissions:', changedCount)
  }

  // Handle save changes
  const handleSave = () => {
    console.log('Save changes for role:', selectedRole?.name)
    console.log('New permissions:', permissions[selectedRoleId])
  }

  // Handle role actions
  const handleRoleAction = (roleId) => {
    console.log('Role action for:', roleId)
  }

  // Handle create role
  const handleCreateRole = () => {
    console.log('Create role')
  }

  // Handle export
  const handleExport = () => {
    console.log('Export roles')
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
      <section className="dashboard-main editor-main">
        <RolesHeader
          onCreateRole={handleCreateRole}
          onExport={handleExport}
          onViewHistory={handleViewHistory}
          onNotifications={handleNotifications}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          showExport={true}
        />

        <div className="editor-content">
          <RolesSidebar
            roles={mockRolesData}
            selectedRoleId={selectedRoleId}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSelectRole={setSelectedRoleId}
            onRoleAction={handleRoleAction}
            systemRoles={systemRoles}
            customRoles={customRoles}
          />

          <PermissionMatrixEditor
            selectedRole={selectedRole}
            permissions={selectedPermissions}
            onPermissionChange={handlePermissionChange}
            onReset={handleReset}
          />
        </div>

        <PermissionsFooterBar
          changedCount={changedCount}
          onCancel={handleCancel}
          onPreview={handlePreview}
          onSave={handleSave}
        />
      </section>
    </main>
  )
}

export default RolesPermissionsEditorPage
