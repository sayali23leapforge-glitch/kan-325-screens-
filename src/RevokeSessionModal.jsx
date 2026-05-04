import { useState, useEffect, useRef } from 'react'
import './revoke-session-modal.css'

function RevokeSessionModal({ session, onClose, onConfirm }) {
  const [revocationOption, setRevocationOption] = useState('this-session')
  const [reason, setReason] = useState('Security breach suspected')
  const [notes, setNotes] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const contentRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const scrollToTop = () => {
      if (contentRef.current) {
        contentRef.current.scrollTop = 0
      }
    }
    
    scrollToTop()
    setTimeout(scrollToTop, 0)
    setTimeout(scrollToTop, 50)
  }, [session])

  if (!session) {
    return null
  }

  const handleRevoke = () => {
    if (confirmed) {
      onConfirm(session.id, revocationOption, reason, notes)
      onClose()
    }
  }

  return (
    <div 
      className="revoke-session-backdrop" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px'
      }}
    >
      <div 
        ref={containerRef}
        className="revoke-session-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0px 20px 48px rgba(0, 0, 0, 0.15)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: 0, lineHeight: '32px' }}>Revoke Session</h1>
          <button 
            className="btn-close-modal" 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer', padding: '8px', fontSize: '20px', transition: 'color 0.2s' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Alert Banner */}
          <div style={{ background: '#FEF2F2', padding: '20px 24px', borderRadius: '12px', border: '1px solid #FECACA', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', flexShrink: 0, fontSize: '24px' }}>⚠</div>
            <div>
              <h3 style={{ color: '#991B1B', margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>Session Revocation Confirmation</h3>
              <p style={{ color: '#DC2626', margin: 0, fontSize: '15px' }}>You are about to revoke an active user session. This action cannot be undone.</p>
            </div>
          </div>

          {/* Session Details */}
          <div style={{ background: '#F9FAFB', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, color: '#111827' }}>Session Details</h3>
            <div style={{ background: 'white', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #E5E7EB' }}>
                <img src="https://placehold.co/60x60" alt="user" style={{ width: '60px', height: '60px', borderRadius: '50%', flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 600, color: '#111827' }}>{session.user}</h4>
                  <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>{session.email}</p>
                  <span style={{ display: 'inline-block', fontSize: '13px', color: '#DC2626', fontWeight: 500, background: 'rgba(220, 38, 38, 0.05)', padding: '2px 8px', borderRadius: '4px' }}>Flagged as Suspicious</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#4B5563', fontWeight: 500 }}>Session ID:</span>
                  <span style={{ color: '#111827' }}>sess_7x9k2m4p1q8w</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#4B5563', fontWeight: 500 }}>Started:</span>
                  <span style={{ color: '#111827' }}>{session.loginTime}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#4B5563', fontWeight: 500 }}>Duration:</span>
                  <span style={{ color: '#111827' }}>{session.duration}</span>
                </div>
              </div>
            </div>

            {/* Device Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <div style={{ background: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: '#DBEAFE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>💻</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{session.device}</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>{session.deviceType}</div>
              </div>
              <div style={{ background: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>📍</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{session.location}</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>{session.ipAddress}</div>
              </div>
              <div style={{ background: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: '#FFEDD5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>⚠️</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#DC2626' }}>High Risk</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Multiple alerts</div>
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div style={{ background: '#FEF2F2', padding: '20px', borderRadius: '8px', border: '1px solid #FECACA' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, color: '#991B1B', display: 'flex', alignItems: 'center', gap: '8px' }}>🔴 Security Alerts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Unusual Geographic Location', desc: 'Login from Russia - outside normal user pattern', severity: 'High', icon: '🔴' },
                { title: 'Unusual Login Time', desc: 'Session started at 3:42 AM - outside normal hours', severity: 'Medium', icon: '🟠' },
                { title: 'Anonymous Network', desc: 'Connection through VPN/Tor network detected', severity: 'High', icon: '🔴' }
              ].map((alert, i) => (
                <div key={i} style={{ background: 'white', padding: '12px', borderRadius: '8px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '20px', marginTop: '2px' }}>{alert.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 500, color: '#111827' }}>{alert.title}</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: '#4B5563' }}>{alert.desc}</p>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 500, background: alert.severity === 'High' ? '#FEE2E2' : '#FFEDD5', color: alert.severity === 'High' ? '#991B1B' : '#9A3412', padding: '4px 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>{alert.severity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revocation Options */}
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600, color: '#111827' }}>Revocation Options</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { value: 'this-session', title: 'Revoke This Session Only', desc: 'Terminate only this specific session. User can log in again.' },
                { value: 'all-sessions', title: 'Revoke All User Sessions', desc: 'Terminate all active sessions for this user account.' },
                { value: 'block-account', title: 'Block User Account', desc: 'Revoke all sessions and prevent future logins.' }
              ].map((option) => (
                <label key={option.value} style={{ background: option.value === 'block-account' ? '#FEF2F2' : 'white', border: option.value === 'block-account' ? '1px solid #FECACA' : '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', gap: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <input
                    type="radio"
                    name="revocation"
                    value={option.value}
                    checked={revocationOption === option.value}
                    onChange={(e) => setRevocationOption(e.target.value)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer', marginTop: '2px', accentColor: '#2563EB' }}
                  />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: option.value === 'block-account' ? '#991B1B' : '#111827' }}>{option.title}</div>
                    <div style={{ fontSize: '13px', color: option.value === 'block-account' ? '#DC2626' : '#4B5563', marginTop: '4px' }}>{option.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Reason for Revocation */}
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#111827' }}>Reason for Revocation</h3>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px', fontFamily: 'inherit' }}
            />
          </div>

          {/* Additional Notes */}
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#111827' }}>Additional Notes (Optional)</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional context or notes about this revocation..."
              style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', minHeight: '100px' }}
            />
          </div>

          {/* Confirmation Warning */}
          <div style={{ background: '#FEFCE8', padding: '16px', borderRadius: '8px', border: '1px solid #FEF08A' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '24px' }}>⚠️</span>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 600, color: '#854D0E' }}>Please Confirm</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#A16207', lineHeight: '20px' }}>This action will immediately terminate the selected session(s). The user will be logged out and may lose any unsaved work.</p>
              </div>
            </div>
            <label style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #FEF08A' }}>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                style={{ width: '16px', height: '16px', cursor: 'pointer', marginTop: '4px', accentColor: '#854D0E' }}
              />
              <span style={{ fontSize: '14px', color: '#854D0E', cursor: 'pointer' }}>I understand the consequences and want to proceed</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleRevoke}
              disabled={!confirmed}
              style={{
                flex: 1,
                padding: '12px 24px',
                background: confirmed ? '#DC2626' : '#D1D5DB',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                cursor: confirmed ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s'
              }}
            >
              🔒 Revoke Session
            </button>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px 24px',
                background: '#E5E7EB',
                color: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ← Cancel & Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevokeSessionModal
