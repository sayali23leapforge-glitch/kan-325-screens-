import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiMenu, FiCheck } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './assign-subscription.css'

const AssignSubscriptionPage = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [billingData, setBillingData] = useState({
    billingCycle: 'Monthly billing',
    startDate: '20-12-2024',
    contractDuration: '12 months (10% discount)',
    setupMigration: true,
    trainingPackage: false,
    extendedSupport: true
  })

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Basic',
      price: 190,
      description: 'Perfect for small teams getting started with enterprise features.',
      features: [
        'Up to 50 users',
        'Basic SSO integration',
        'Standard support',
        '5GB storage',
        'Advanced analytics'
      ],
      featureStatus: [true, true, true, true, false]
    },
    {
      id: 'professional',
      name: 'Professional',
      badge: 'Popular',
      price: 1290,
      description: 'Comprehensive solution for growing businesses with advanced needs.',
      features: [
        'Up to 250 users',
        'Advanced SSO & MFA',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Custom branding'
      ],
      featureStatus: [true, true, true, true, true, true],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Premium',
      price: 2990,
      description: 'Full-featured solution for large organizations with complex requirements.',
      features: [
        'Unlimited users',
        'Enterprise SSO & MFA',
        '24/7 dedicated support',
        '500GB storage',
        'Advanced analytics & reporting',
        'White-label solution',
        'API access & integrations'
      ],
      featureStatus: [true, true, true, true, true, true, true]
    }
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
  }

  const handleBillingChange = (field, value) => {
    setBillingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleServiceToggle = (service) => {
    setBillingData(prev => ({
      ...prev,
      [service]: !prev[service]
    }))
  }

  const calculateCosts = () => {
    const currentPlan = plans.find(p => p.id === selectedPlan)
    const monthlyPlan = currentPlan.price
    const extendedSupport = billingData.extendedSupport ? 200 : 0
    const monthlyTotal = monthlyPlan + extendedSupport
    const discountWithContract = -149
    const setupMigration = billingData.setupMigration ? 500 : 0
    const annualSavings = 1788

    return {
      plan: monthlyPlan,
      extendedSupport,
      monthlyTotal: monthlyTotal + discountWithContract,
      setupMigration,
      firstMonthBilling: monthlyTotal + discountWithContract,
      totalDueToday: monthlyTotal + discountWithContract + setupMigration,
      annualSavings
    }
  }

  const costs = calculateCosts()

  const handleAssignSubscription = () => {
    console.log('Assigning subscription:', { selectedPlan, billingData })
    navigate('/tenants/create/admin')
  }

  const handleBackClick = () => {
    navigate('/tenants/create/form')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main assign-subscription-main">
        {/* Header */}
        <div className="subscription-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FiMenu size={20} />
          </button>
          <div className="header-left">
            <h1 className="subscription-title">Assign Subscription</h1>
            <div className="subscription-breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">IAM</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">Tenants</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">Create</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item current">Subscription</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn notifications">
              <span style={{ fontSize: '18px' }}>...</span>
              <span className="notification-badge">3</span>
            </button>
            <button className="btn btn-back" onClick={handleBackClick}>
              <span style={{ fontSize: '14px', marginRight: '8px' }}>←</span>
              Back
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="subscription-content">
          {/* Tenant Card */}
          <div className="tenant-card">
            <div className="tenant-icon">
              <div className="icon-letter">A</div>
            </div>
            <div className="tenant-info">
              <h3 className="tenant-name">Acme Corporation</h3>
              <p className="tenant-domain">acme-corp.karnovate.com</p>
            </div>
            <div className="tenant-status">
              <div className="status-dot"></div>
              <span className="status-text">Active Setup</span>
            </div>
            <div className="tenant-date">Created: Dec 15, 2024</div>
          </div>

          {/* Choose Subscription Plan */}
          <div className="subscription-card">
            <h2 className="section-title">Choose Subscription Plan</h2>
            <p className="section-subtitle">Select the most suitable plan for Acme Corporation's needs.</p>

            <div className="plans-grid">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.recommended ? 'recommended' : ''}`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.recommended && <div className="recommended-badge">RECOMMENDED</div>}
                  
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <span className={`plan-badge ${plan.badge.toLowerCase()}`}>{plan.badge}</span>
                  </div>

                  <div className="plan-price">
                    <span className="price">${plan.price}</span>
                    <span className="period">/month</span>
                  </div>

                  <p className="plan-description">{plan.description}</p>

                  <div className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature">
                        <div className={`feature-icon ${plan.featureStatus[idx] ? 'enabled' : 'disabled'}`}>
                          {plan.featureStatus[idx] ? '✓' : '○'}
                        </div>
                        <span className={`feature-text ${!plan.featureStatus[idx] ? 'disabled' : ''}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={`plan-select-btn ${selectedPlan === plan.id ? 'active' : ''}`}>
                    Select Plan
                  </button>
                </div>
              ))}
            </div>

            {/* Billing Configuration */}
            <div className="billing-section">
              <h3 className="section-title">Billing Configuration</h3>
              
              <div className="billing-grid">
                <div className="billing-group">
                  <label className="field-label">Billing Cycle</label>
                  <select
                    value={billingData.billingCycle}
                    onChange={(e) => handleBillingChange('billingCycle', e.target.value)}
                    className="form-select"
                  >
                    <option value="Monthly billing">Monthly billing</option>
                    <option value="Annual billing">Annual billing</option>
                  </select>
                </div>

                <div className="billing-group">
                  <label className="field-label">Start Date</label>
                  <input
                    type="date"
                    value="2024-12-20"
                    className="form-input date-input"
                  />
                </div>

                <div className="billing-group">
                  <label className="field-label">Contract Duration</label>
                  <select
                    value={billingData.contractDuration}
                    onChange={(e) => handleBillingChange('contractDuration', e.target.value)}
                    className="form-select"
                  >
                    <option value="12 months (10% discount)">12 months (10% discount)</option>
                    <option value="6 months (5% discount)">6 months (5% discount)</option>
                    <option value="monthly">Month to month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="additional-services-section">
              <h3 className="section-title">Additional Services</h3>

              <div className="service-item">
                <label className="service-checkbox">
                  <input
                    type="checkbox"
                    checked={billingData.setupMigration}
                    onChange={() => handleServiceToggle('setupMigration')}
                  />
                  <span className="checkbox-custom"></span>
                </label>
                <div className="service-info">
                  <div className="service-title">Setup & Migration Service</div>
                  <div className="service-description">Professional onboarding and data migration assistance</div>
                  <div className="service-price">+$500 (one-time)</div>
                </div>
              </div>

              <div className="service-item">
                <label className="service-checkbox">
                  <input
                    type="checkbox"
                    checked={billingData.trainingPackage}
                    onChange={() => handleServiceToggle('trainingPackage')}
                  />
                  <span className="checkbox-custom"></span>
                </label>
                <div className="service-info">
                  <div className="service-title">Training Package</div>
                  <div className="service-description">Comprehensive admin and user training sessions</div>
                  <div className="service-price">+$750 (one-time)</div>
                </div>
              </div>

              <div className="service-item">
                <label className="service-checkbox">
                  <input
                    type="checkbox"
                    checked={billingData.extendedSupport}
                    onChange={() => handleServiceToggle('extendedSupport')}
                  />
                  <span className="checkbox-custom"></span>
                </label>
                <div className="service-info">
                  <div className="service-title">Extended Support</div>
                  <div className="service-description">24/7 support with 1-hour response time</div>
                  <div className="service-price">+$200/month</div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="cost-summary">
              <div className="summary-icon">ℹ️</div>
              <h3 className="summary-title">Cost Summary</h3>

              <div className="summary-grid">
                <div className="summary-left">
                  <div className="summary-row">
                    <span className="label">Professional Plan:</span>
                    <span className="value">${costs.plan}/month</span>
                  </div>
                  <div className="summary-row">
                    <span className="label">Extended Support:</span>
                    <span className="value">${costs.extendedSupport}/month</span>
                  </div>
                  <div className="summary-row">
                    <span className="label">12-month discount (10%):</span>
                    <span className="value discount">-$149/month</span>
                  </div>
                  <div className="summary-row total">
                    <span className="label">Monthly Total:</span>
                    <span className="value">${costs.monthlyTotal}</span>
                  </div>
                </div>

                <div className="summary-right">
                  <div className="summary-row">
                    <span className="label">Setup & Migration:</span>
                    <span className="value">${costs.setupMigration}</span>
                  </div>
                  <div className="summary-row">
                    <span className="label">First Month Billing:</span>
                    <span className="value">${costs.firstMonthBilling}</span>
                  </div>
                  <div className="summary-row total">
                    <span className="label">Total Due Today:</span>
                    <span className="value">${costs.totalDueToday}</span>
                  </div>
                </div>
              </div>

              <div className="summary-footer">
                <span className="savings-icon">✓</span>
                <span className="savings-text">Annual savings with 12-month commitment: <strong>${costs.annualSavings}</strong></span>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="subscription-footer">
            <button className="btn btn-secondary">Save & Continue Later</button>
            <button className="btn btn-primary" onClick={handleAssignSubscription}>
              <span>Assign Subscription</span>
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AssignSubscriptionPage
