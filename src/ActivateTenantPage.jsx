import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import Sidebar from './Sidebar';
import './activate-tenant.css';

const ActivateTenantPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tenantData = {
    name: 'Acme Corporation',
    domain: 'acme-corp.karnovate.com',
    email: 'admin@acme-corp.com',
    region: 'US East (Virginia)',
    environment: 'Production',
    createdDate: 'Dec 15, 2024',
    status: 'Pending Activation'
  };

  const subscriptionData = {
    plan: 'Professional',
    billingCycle: 'Monthly',
    contract: '12 months',
    monthlyCost: '$1,341',
    startDate: 'Dec 20, 2024'
  };

  const checklist = [
    {
      title: 'Domain Configuration',
      description: 'DNS records verified',
      completed: true
    },
    {
      title: 'SSL Certificate',
      description: 'Certificate provisioned',
      completed: true
    },
    {
      title: 'Database Setup',
      description: 'Schema initialized',
      completed: true
    },
    {
      title: 'Admin Account',
      description: 'Credentials prepared',
      completed: true
    },
    {
      title: 'Security Policies',
      description: 'Default policies applied',
      completed: true
    },
    {
      title: 'Billing Integration',
      description: 'Payment method verified',
      completed: true
    },
    {
      title: 'Monitoring Setup',
      description: 'Health checks enabled',
      completed: true
    },
    {
      title: 'Backup Configuration',
      description: 'Automated backups scheduled',
      completed: true
    }
  ];

  const nextSteps = [
    {
      number: '1',
      title: 'Tenant Activation',
      description: 'System will provision all resources and\nmake the tenant live'
    },
    {
      number: '2',
      title: 'Admin Notification',
      description: 'Welcome email with login credentials\nsent to admin'
    },
    {
      number: '3',
      title: 'Ready to Use',
      description: 'Tenant becomes accessible at the\nconfigured domain'
    }
  ];

  const importantNotes = [
    'This action cannot be undone. The tenant will become immediately active.',
    'Billing will start from the activation date (Dec 20, 2024).',
    'Admin credentials will be sent to admin@acme-corp.com.',
    'The tenant will be accessible at acme-corp.karnovate.com within 5-10 minutes.'
  ];

  const handleActivate = () => {
    console.log('Activating tenant:', tenantData.name);
    navigate('/tenants');
  };

  const handleBack = () => {
    navigate('/tenants/create/admin');
  };

  return (
    <div className="activate-tenant-container">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="activate-tenant-content">
        {/* Header */}
        <div className="activate-tenant-header">
          <div className="header-left">
            <h1>Activate Tenant</h1>
          </div>
          
          <div className="header-breadcrumb">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item">IAM</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item">Tenants</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item">Create</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item-current">Activate</span>
          </div>

          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>

        {/* Main Content */}
        <div className="activate-tenant-main">
          {/* Tenant Card */}
          <div className="tenant-card-activate">
            <div className="tenant-icon-activate">
              <span>A</span>
            </div>
            <div className="tenant-info-activate">
              <h2>{tenantData.name}</h2>
              <p>{tenantData.domain}</p>
              <span className="status-badge pending-activation">
                <span className="status-dot"></span>
                Pending Activation
              </span>
            </div>
            <div className="created-date">{tenantData.createdDate}</div>
          </div>

          {/* Success Message */}
          <div className="success-message">
            <div className="success-icon">
              <FiCheck size={20} />
            </div>
            <div className="success-content">
              <h3>Tenant Setup Complete!</h3>
              <p>All configurations have been validated and the tenant is ready for activation.</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="details-grid">
            {/* Tenant Details */}
            <div className="detail-card">
              <div className="card-header">
                <div className="card-icon-header">📋</div>
                <h3>Tenant Details</h3>
              </div>
              <div className="detail-row">
                <span className="detail-label">Organization:</span>
                <span className="detail-value">{tenantData.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Domain:</span>
                <span className="detail-value">{tenantData.domain}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Admin Email:</span>
                <span className="detail-value">{tenantData.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Region:</span>
                <span className="detail-value">{tenantData.region}</span>
              </div>
              <div className="detail-row last">
                <span className="detail-label">Environment:</span>
                <span className="environment-badge">{tenantData.environment}</span>
              </div>
            </div>

            {/* Subscription Plan */}
            <div className="detail-card">
              <div className="card-header">
                <div className="card-icon-header">💜</div>
                <h3>Subscription Plan</h3>
              </div>
              <div className="detail-row">
                <span className="detail-label">Plan:</span>
                <span className="detail-value">{subscriptionData.plan}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Billing Cycle:</span>
                <span className="detail-value">{subscriptionData.billingCycle}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Contract:</span>
                <span className="detail-value">{subscriptionData.contract}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Monthly Cost:</span>
                <span className="detail-value cost">{subscriptionData.monthlyCost}</span>
              </div>
              <div className="detail-row last">
                <span className="detail-label">Start Date:</span>
                <span className="detail-value">{subscriptionData.startDate}</span>
              </div>
            </div>
          </div>

          {/* Pre-Activation Checklist */}
          <div className="checklist-card">
            <div className="checklist-header">
              <div className="checklist-icon-header">✓</div>
              <h3>Pre-Activation Checklist</h3>
            </div>
            <div className="checklist-grid">
              {checklist.map((item, index) => (
                <div key={index} className="checklist-item">
                  <div className="checklist-check">
                    <FiCheck size={16} />
                  </div>
                  <div className="checklist-content">
                    <div className="checklist-title">{item.title}</div>
                    <div className="checklist-description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Happens Next */}
          <div className="next-steps-card">
            <div className="next-steps-header">
              <div className="next-steps-icon">ℹ️</div>
              <h3>What Happens Next?</h3>
            </div>
            <div className="next-steps-grid">
              {nextSteps.map((step, index) => (
                <div key={index} className="next-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-description">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="important-notice">
            <div className="notice-header">
              <FiAlertTriangle size={18} />
              <h3>Important Notice</h3>
            </div>
            <div className="notice-content">
              {importantNotes.map((note, index) => (
                <div key={index} className="notice-item">• {note}</div>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="activate-footer">
            <button className="btn btn-secondary" onClick={() => navigate('/tenants')}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleActivate}>
              <FiCheck size={16} />
              Activate Tenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateTenantPage;
