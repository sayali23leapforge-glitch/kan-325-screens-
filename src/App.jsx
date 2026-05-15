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
import HRMDashboard from './HRMDashboard'
import OnboardingDashboard from './OnboardingDashboard'
import CreateOnboardingTask from './CreateOnboardingTask'
import AssignChecklist from './AssignChecklist'
import EmployeeDirectory from './EmployeeDirectory'
import EmployeePersonalDetailsPage from './EmployeePersonalDetailsPage'
import EmployeeProfile from './EmployeeProfile'
import EmployeeDeactivateProfile from './EmployeeDeactivateProfile'
import DocumentUpload from './DocumentUpload'
import ManagerApproval from './ManagerApproval'
import ManagerApprovalPage from './ManagerApprovalPage'
import ITProvisioning from './ITProvisioning'
import OnboardingComplete from './OnboardingComplete'
import AttendancePage from './AttendancePage'
import RegularizationRequestPage from './RegularizationRequestPage'
import ApplyLeave from './ApplyLeave'
import LeaveManagementPage from './LeaveManagementPage'
import LeaveManagerApproval from './LeaveManagerApproval'
import HRApprovalDashboard from './HRApprovalDashboard'
import LeavePolicySetup from './LeavePolicySetup'
import LeaveTypesManagement from './LeaveTypesManagement'
import LeaveAccrualRules from './LeaveAccrualRules'
import PayrollManagementPage from './PayrollManagementPage'
import SalaryLockManagement from './SalaryLockManagement'
import PayslipGenerationPage from './PayslipGenerationPage'
import DisbursementStatusPage from './DisbursementStatusPage'
import PayrollArchivePage from './PayrollArchivePage'
import GenerateDraftPayroll from './GenerateDraftPayroll'
import PayrollReviewPage from './PayrollReviewPage'
import PayrollApprovedPage from './PayrollApprovedPage'
import FinanceApprovalPage from './FinanceApprovalPage'
import PayrollDashboardPage from './PayrollDashboardPage'
import PerformanceManagementPage from './PerformanceManagementPage'
import GoalsTargetsPage from './GoalsTargetsPage'
import EmployeeSelfReviewPage from './EmployeeSelfReviewPage'
import ManagerReviewPage from './ManagerReviewPage'
import PerformanceCalibrationPage from './PerformanceCalibrationPage'
import FinalRatingPage from './FinalRatingPage'
import RecruitmentManagementPage from './RecruitmentManagementPage'
import CreateJobRequisitionPage from './CreateJobRequisitionPage'
import JobRequisitionApprovalPage from './JobRequisitionApprovalPage'
import CandidateApplicationPage from './CandidateApplicationPage'
import ScreeningPage from './ScreeningPage'
import InterviewPage from './InterviewPage'
import OfferPage from './OfferPage'
import AcceptancePage from './acceptance/AcceptancePage'
import SupportDeskDashboard from './support-desk/SupportDeskDashboard'
import AllTickets from './pages/support/AllTickets'
import CreateTicket from './pages/support/CreateTicket'
import TicketCreatedSuccess from './pages/support/TicketCreatedSuccess'
import SupportQueues from './pages/support/SupportQueues'
import SLAManagement from './pages/support/SLAManagement'
import KnowledgeBase from './pages/support/KnowledgeBase'
import CreateArticle from './pages/support/CreateArticle'
import Automation from './pages/support/Automation'
import AutomationBuilder from './pages/support/AutomationBuilder'
import OmnichannelInbox from './pages/support/OmnichannelInbox'
import UnifiedInbox from './pages/support/UnifiedInbox'
import AllChannels from './pages/support/AllChannels'
import TicketLifecycle from './pages/support/TicketLifecycle'
import SystemEvents from './pages/support/SystemEvents'
import NotificationCenter from './pages/support/NotificationCenter'
import Reports from './pages/support/Reports'
import Settings from './pages/support/Settings'
import SettingsAudit from './pages/support/SettingsAudit'
import SystemRouting from './pages/support/SystemRouting'
import AgentAssignment from './pages/support/AgentAssignment'
import ReportsAnalyticsPage from './ReportsAnalyticsPage'
import SettingsPage from './SettingsPage'
import AuditTrailPage from './AuditTrailPage'
import AuditModulePage from './AuditModulePage'
import DefineActions from './pages/support/DefineActions';
import PreviewExecution from './pages/support/PreviewExecution';
import ActivateRule from './pages/support/ActivateRule';

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
      <Route path="/security-policies/session-policy" element={<SecurityPoliciesPage />} />
      <Route path="/security-policies/mfa-policy" element={<SecurityPoliciesPage />} />
      <Route path="/security-policies/password-policy" element={<SecurityPoliciesPage />} />
      <Route path="/security-policies/password-policy/edit" element={<SecurityPoliciesPage />} />
      <Route path="/security-policies/password-policy/saved" element={<SecurityPoliciesPage />} />
      <Route path="/products/tokens" element={<SecurityPoliciesPage />} />
      <Route path="/products/tokens/:id" element={<SecurityPoliciesPage />} />
      <Route path="/view-sessions" element={<ViewSessionsPage />} />
      <Route path="/view-sessions/revoke/:sessionId" element={<RevokeSessionPage />} />
      <Route path="/sessions-tokens" element={<SessionsTokensPage />} />
      <Route path="/audit-logs" element={<AuditLogsPage />} />
      <Route path="/system-settings" element={<SystemSettingsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/hrm/dashboard" element={<HRMDashboard />} />
      <Route path="/hrm/onboarding-2" element={<OnboardingDashboard />} />
      <Route path="/hrm/onboarding/new-task" element={<CreateOnboardingTask />} />
      <Route path="/hrm/onboarding/assign-checklist" element={<AssignChecklist />} />
      <Route path="/hrm/onboarding/document-upload" element={<DocumentUpload onSwitchModule={() => {}} />} />
      <Route path="/hrm/onboarding/manager-approval" element={<ManagerApproval onSwitchModule={() => {}} />} />
      <Route path="/hrm/onboarding/it-provisioning" element={<ITProvisioning onSwitchModule={() => {}} />} />
      <Route path="/hrm/onboarding/complete" element={<OnboardingComplete onSwitchModule={() => {}} />} />
      <Route path="/hrm/employees" element={<EmployeeDirectory />} />
      <Route path="/hrm/employees/:id" element={<EmployeePersonalDetailsPage />} />
      <Route path="/hrm/employee-profile/deactivate/:id" element={<EmployeeDeactivateProfile onSwitchModule={() => {}} />} />
      <Route path="/hrm/employee-profile/:id" element={<EmployeeProfile />} />
      <Route path="/hrm/attendance" element={<AttendancePage />} />
      <Route path="/manager-approval" element={<ManagerApprovalPage />} />
      <Route path="/regularization-request" element={<RegularizationRequestPage />} />
      <Route path="/leave-management" element={<LeaveManagementPage />} />
      <Route path="/hrm/leaves" element={<LeaveManagementPage />} />
      <Route path="/hrm/leaves/apply" element={<ApplyLeave />} />
      <Route path="/hrm/leave-management/manager-approval" element={<LeaveManagerApproval />} />
      <Route path="/leave/policy-setup" element={<LeavePolicySetup />} />
      <Route path="/leave/types" element={<LeaveTypesManagement />} />
      <Route path="/leave/accrual-rules" element={<LeaveAccrualRules />} />
      <Route path="/hr/approval" element={<HRApprovalDashboard />} />
      <Route path="/hrm/payroll" element={<PayrollManagementPage />} />
      <Route path="/payroll/salary-lock" element={<SalaryLockManagement />} />
      <Route path="/payroll/payslip-generation" element={<PayslipGenerationPage />} />
      <Route path="/payroll/disbursement-status" element={<DisbursementStatusPage />} />
      <Route path="/payroll/archive" element={<PayrollArchivePage />} />
      <Route path="/payroll/generate-draft" element={<GenerateDraftPayroll />} />
      <Route path="/payroll/review" element={<PayrollReviewPage />} />
      <Route path="/payroll/approved" element={<PayrollApprovedPage />} />
      <Route path="/payroll/finance-approval" element={<FinanceApprovalPage />} />
      <Route path="/payroll/dashboard" element={<PayrollDashboardPage />} />
      <Route
        path="/hrm/performance"
        element={
          <PerformanceManagementPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/performance/goals"
        element={
          <GoalsTargetsPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/performance/reviews"
        element={
          <EmployeeSelfReviewPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/performance/reviews/manager"
        element={
          <ManagerReviewPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/performance/calibration"
        element={
          <PerformanceCalibrationPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/performance/final-rating/:id"
        element={
          <FinalRatingPage
            onSwitchModule={() => navigate('/hrm/dashboard')}
          />
        }
      />
      <Route
        path="/hrm/recruitment/create"
        element={<CreateJobRequisitionPage />}
      />
      <Route
        path="/hrm/recruitment/approval"
        element={<JobRequisitionApprovalPage />}
      />
      <Route
        path="/hrm/recruitment/application"
        element={<CandidateApplicationPage />}
      />
      <Route
        path="/hrm/recruitment/screening"
        element={<ScreeningPage />}
      />
      <Route
        path="/hrm/recruitment/interview"
        element={<InterviewPage />}
      />
      <Route
        path="/hrm/recruitment/offers"
        element={<OfferPage />}
      />
      <Route
        path="/hrm/recruitment/acceptance"
        element={<AcceptancePage />}
      />
      <Route path="/support-desk" element={<SupportDeskDashboard />} />
      <Route path="/support-desk/tickets" element={<AllTickets />} />
      <Route path="/support-desk/tickets/create" element={<CreateTicket />} />
      <Route path="/support-desk/tickets/success" element={<TicketCreatedSuccess />} />
      <Route path="/support-desk/queues" element={<SupportQueues />} />
      <Route path="/support-desk/sla-management" element={<SLAManagement />} />
      <Route path="/support-desk/knowledge-base" element={<KnowledgeBase />} />
      <Route path="/create-article" element={<CreateArticle />} />
      <Route path="/support-desk/automation" element={<Automation />} />
      <Route path="/automation-builder" element={<AutomationBuilder />} />
      <Route path="/support-desk/omnichannel-inbox" element={<OmnichannelInbox />} />
      <Route path="/support-desk/reports" element={<Reports />} />
      <Route path="/support-desk/settings" element={<Settings />} />
      <Route path="/support/settings/audit" element={<SettingsAudit />} />
      <Route path="/support-tools/system-routing" element={<SystemRouting />} />
      <Route path="/agent-assignment" element={<AgentAssignment />} />
      <Route path="/hrm/recruitment" element={<RecruitmentManagementPage />} />
      <Route path="/hrm/recruitment/*" element={<RecruitmentManagementPage />} />
      <Route path="/hrm/requirement" element={<RecruitmentManagementPage />} />
      <Route path="/hrm/requirement/*" element={<RecruitmentManagementPage />} />
      <Route path="/hrm/reports" element={<ReportsAnalyticsPage />} />
      <Route path="/hrm/settings" element={<SettingsPage />} />
      <Route path="/audit" element={<AuditTrailPage />} />
      <Route path="/hrm/audit" element={<AuditTrailPage />} />
      <Route path="/hrm/audit/*" element={<AuditTrailPage />} />
      <Route path="/hrm/audit-logs" element={<AuditTrailPage />} />
      <Route path="/hrm/audit-logs/*" element={<AuditTrailPage />} />
      <Route path="/hrm/*" element={<HRMDashboard />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/automation-builder/actions" element={<DefineActions />} />
      <Route path="/automation-builder/preview" element={<PreviewExecution />} />
      <Route path="/automation-builder/activate" element={<ActivateRule />} />
      <Route path="/support-desk/unified-inbox" element={<UnifiedInbox />} />
      <Route path="/support-desk/all-channels" element={<AllChannels />} />
      <Route path="/support-desk/ticket-lifecycle" element={<TicketLifecycle />} />
      <Route path="/support-desk/system-events" element={<SystemEvents />} />
      <Route path="/support-desk/audit-trail" element={<AuditTrailPage />} />
      <Route path="/audit-module" element={<AuditModulePage />} />
      <Route path="/notification-center" element={<NotificationCenter />} />
    </Routes>
  )
}

export default App

// Wrapper to extract :role param
function PermissionMatrixRoleDetailPageWrapper() {
  const { role } = useParams();
  return <PermissionMatrixRoleDetailPage role={role} />;
}
