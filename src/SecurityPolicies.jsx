import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import './security-policies.css';

const SecurityPolicies = ({ setDashboardView }) => {
  return (
    <div className="security-policies-sp1-container">
      <div className="sp1-header-section">
        <div className="sp1-title-row">
          <h1 className="sp1-title">Security Policies</h1>
          <button 
            className="sp1-button"
            onClick={() => setDashboardView('security-policies-sp1')}
          >
            <FiSettings size={16} />
            SP1
          </button>
        </div>
        <p className="sp1-subtitle">
          Manage and configure security policies for your organization
        </p>
      </div>
    </div>
  );
};

export default SecurityPolicies;
