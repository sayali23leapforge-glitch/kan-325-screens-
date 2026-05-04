import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Login from './Login'
import Organization from './Organization'
import Loading from './Loading'
import Products from './Products'
import Dashboard from './Dashboard'
import ApplicationsPage from './ApplicationsPage'
import ProductsApplicationsPage from './ProductsApplicationsPage'
import ProductsAppsPro2Page from './ProductsAppsPro2Page'
import HumanResourceEnableProductPage from './HumanResourceEnableProductPage'
import ImpactWarningPage from './ImpactWarningPage'
import ProductActivatedPage from './ProductActivatedPage'
import SelectProductPage from './SelectProductPage'
import ProductDetailsPage from './ProductDetailsPage'
import ApplicationDetailsPage from './ApplicationDetailsPage'
import CreateApplicationPage from './CreateApplicationPage'
import CreateApplicationConfigurationPage from './CreateApplicationConfigurationPage'
import CreateApplicationReviewPage from './CreateApplicationReviewPage'
import CreateApplicationFinalReviewPage from './CreateApplicationFinalReviewPage'
import UsersManagementPage from './UsersManagementPage'
import CreateUserPage from './CreateUserPage'
import CreateUserFormPage from './CreateUserFormPage'
import UserProfilePage from './UserProfilePage'
import UserManagementPage from './UserManagementPage'
import EditProfilePage from './EditProfilePage'
import RolesPermissionsPage from './RolesPermissionsPage'
import RolesPermissionsEditorPage from './RolesPermissionsEditorPage'
import RoleManagementPage from './RoleManagementPage'
import RoleDetailsPage from './RoleDetailsPage'
import EditSuperAdminRolePage from './EditSuperAdminRolePage'
import EditAdminRolePage from './EditAdminRolePage'
import EditDeveloperRolePage from './EditDeveloperRolePage'
import AdminRoleDetailsPage from './AdminRoleDetailsPage'
import CreateRolePage from './CreateRolePage'
import RoleSaveSuccessPage from './RoleSaveSuccessPage'
import PermissionMatrixPage from './PermissionMatrixPage'
import PermissionMatrixRoleDetailPage from './PermissionMatrixRoleDetailPage'
import SecurityPoliciesPage from './SecurityPoliciesPage'
import SessionsTokensPage from './SessionsTokensPage'
import ViewSessionsPage from './ViewSessionsPage'
import RevokeSessionPage from './RevokeSessionPage'
import AuditLogsPage from './AuditLogsPage'
import AuditLogPage from './AuditLogPage'
import SystemSettingsPage from './SystemSettingsPage'
import NotificationsPage from './NotificationsPage'
import TenantsPage from './TenantsPage'
import TenantDetailsPage from './TenantDetailsPage'
import CreateTenantPage from './CreateTenantPage'
import TenantFormPage from './TenantFormPage'
import AssignSubscriptionPage from './AssignSubscriptionPage'
import AssignTenantAdminPage from './AssignTenantAdminPage'
import ActivateTenantPage from './ActivateTenantPage'

function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={<Login onSignedIn={() => navigate('/organizations')} />}
      />
      <Route
        path="/organizations"
        element={
          <Organization
            onLogout={() => navigate('/login')}
            onSelectOrganization={(organization) =>
              navigate('/loading', { state: { organization } })
            }
          />
        }
      />
      <Route path="/loading" element={<Loading />} />
      <Route path="/products" element={<Products />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/products-applications" element={<ProductsApplicationsPage />} />
      <Route path="/products-applications/pro-2" element={<ProductsAppsPro2Page />} />
      <Route path="/products-applications/select-product" element={<SelectProductPage />} />
      <Route path="/products-applications/select-product/:productId" element={<ProductDetailsPage />} />
      <Route path="/products-applications/pro-2/human-resource-management/enable" element={<HumanResourceEnableProductPage />} />
      <Route path="/products-applications/pro-2/human-resource-management/impact-warning" element={<ImpactWarningPage />} />
      <Route path="/products-applications/pro-2/human-resource-management/product-activated" element={<ProductActivatedPage />} />
      <Route path="/applications/create/final-review" element={<CreateApplicationFinalReviewPage />} />
      <Route path="/applications/create/review" element={<CreateApplicationReviewPage />} />
      <Route path="/applications/create/configuration" element={<CreateApplicationConfigurationPage />} />
      <Route path="/applications/create" element={<CreateApplicationPage />} />
      <Route path="/applications/:id" element={<ApplicationDetailsPage />} />
      <Route path="/tenants/create/form" element={<TenantFormPage />} />
      <Route path="/tenants/create/subscription" element={<AssignSubscriptionPage />} />
      <Route path="/tenants/create/admin" element={<AssignTenantAdminPage />} />
      <Route path="/tenants/create/activate" element={<ActivateTenantPage />} />
      <Route path="/tenants/create" element={<CreateTenantPage />} />
      <Route path="/tenants/:id/audit-log" element={<AuditLogPage />} />
      <Route path="/tenants/:id" element={<TenantDetailsPage />} />
      <Route path="/tenants" element={<TenantsPage />} />
      <Route path="/users/create/form" element={<CreateUserFormPage />} />
      <Route path="/users/create" element={<CreateUserPage />} />
      <Route path="/users/:id/edit" element={<EditProfilePage />} />
      <Route path="/users/:id/manage" element={<UserManagementPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />
      <Route path="/users" element={<UsersManagementPage />} />
      <Route path="/roles-permissions/role-management/create" element={<CreateRolePage />} />
      <Route path="/roles-permissions/role-management/save-confirmation" element={<RoleSaveSuccessPage />} />
      <Route path="/roles-permissions/role-management/super-admin/edit" element={<EditSuperAdminRolePage />} />
      <Route path="/roles-permissions/role-management/admin/edit" element={<EditAdminRolePage />} />
      <Route path="/roles-permissions/role-management/developer/edit" element={<EditDeveloperRolePage />} />
      <Route path="/roles-permissions/role-management/admin" element={<AdminRoleDetailsPage />} />
      <Route path="/roles-permissions/role-management/:role" element={<RoleDetailsPage />} />
      <Route path="/roles-permissions/role-management" element={<RoleManagementPage />} />
      <Route path="/roles-permissions/permission-matrix" element={<PermissionMatrixPage />} />
      <Route path="/roles-permissions/permission-matrix/:role" element={<PermissionMatrixRoleDetailPageWrapper />} />
      <Route path="/roles-permissions" element={<RolesPermissionsPage />} />
      <Route path="/roles-permissions-editor" element={<RolesPermissionsEditorPage />} />
      <Route path="/security-policies" element={<SecurityPoliciesPage />} />
      <Route path="/view-sessions" element={<ViewSessionsPage />} />
      <Route path="/view-sessions/revoke/:sessionId" element={<RevokeSessionPage />} />
      <Route path="/sessions-tokens" element={<SessionsTokensPage />} />
      <Route path="/audit-logs" element={<AuditLogsPage />} />
      <Route path="/system-settings" element={<SystemSettingsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App

// Wrapper to extract :role param
function PermissionMatrixRoleDetailPageWrapper() {
  const { role } = useParams();
  return <PermissionMatrixRoleDetailPage role={role} />;
}
