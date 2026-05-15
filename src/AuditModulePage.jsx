import React from 'react'
import { FiBell, FiDownload, FiFilter, FiSearch, FiChevronLeft, FiEye, FiShield, FiUser } from 'react-icons/fi'
import SupportSidebar from './components/support/SupportSidebar'
import './pages/support/all-tickets.css'

function AuditModulePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#F3F4F6', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '1460px', margin: '16px auto', position: 'relative', background: '#F9FAFB', minHeight: '1120px', borderRadius: '8px' }}>
        <div style={{ position: 'absolute', left: '0px', top: '0px', width: '256px', height: '100%', background: '#1E293B', zIndex: 2 }}>
          <SupportSidebar />
        </div>

        <div style={{ position: 'absolute', left: '256px', top: '0px', width: '1204px', minHeight: '1120px', background: '#F9FAFB', zIndex: 1 }}>
          <div style={{ position: 'absolute', left: '0px', top: '0px', width: '1204px', height: '109.38px', borderBottom: '1px solid #E5E7EB', background: '#F9FAFB' }}>
            <div style={{ position: 'absolute', left: '23.04px', top: '23.04px', display: 'inline-flex', alignItems: 'center', gap: '9px', color: '#111827' }}>
              <FiChevronLeft size={16} />
              <span style={{ fontSize: '30px', lineHeight: '1.1', fontWeight: 700 }}>Audit Module</span>
            </div>
            <div style={{ position: 'absolute', left: '23.04px', top: '68.16px', fontSize: '13.44px', color: '#6B7280' }}>
              Complete audit trail and security event logs
            </div>

            <div style={{ position: 'absolute', right: '23.04px', top: '30.51px', display: 'inline-flex', alignItems: 'center', gap: '11.52px' }}>
              <button type="button" style={{ width: '28px', height: '28px', border: 0, background: 'transparent', color: '#64748B', position: 'relative' }}>
                <FiBell size={16} />
                <span style={{ position: 'absolute', right: '1px', top: '2px', width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
              </button>
              <button type="button" style={{ width: '137.15px', height: '38.36px', borderRadius: '7.68px', border: 0, background: '#2563EB', color: '#FFFFFF', fontSize: '13.44px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                <FiDownload size={14} />
                Export Log
              </button>
            </div>
          </div>

          <div style={{ position: 'absolute', left: '23.04px', top: '126.72px', width: '1158.17px', height: '64px', border: '0.96px solid #E5E7EB', borderRadius: '7.68px', background: '#FFFFFF' }}>
            <div style={{ position: 'absolute', left: '15.36px', top: '13.44px', width: '320.52px', height: '36.48px', border: '0.96px solid #E5E7EB', borderRadius: '7.68px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 11.52px', color: '#9CA3AF', boxSizing: 'border-box' }}>
              <FiSearch size={14} />
              <span style={{ fontSize: '11.52px' }}>Search audit entries...</span>
            </div>

            <div style={{ position: 'absolute', left: '348.48px', top: '13.44px', width: '145.92px', height: '36.48px', border: '0.96px solid #D1D5DB', borderRadius: '7.68px', background: '#F9FAFB', fontSize: '11.52px', color: '#374151', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              All Actions
            </div>

            <div style={{ position: 'absolute', right: '180.48px', top: '13.44px', width: '149.76px', height: '36.48px', border: '0.96px solid #D1D5DB', borderRadius: '7.68px', background: '#F9FAFB', fontSize: '11.52px', color: '#374151', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Last 24 hours
            </div>

            <div style={{ position: 'absolute', right: '15.36px', top: '13.44px', width: '80.64px', height: '36.48px', border: '0.96px solid #D1D5DB', borderRadius: '7.68px', background: '#F3F4F6', fontSize: '11.52px', color: '#6B7280', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <FiFilter size={13} />
              Filters
            </div>
          </div>

          <div style={{ position: 'absolute', left: '23.04px', top: '205.44px', width: '1158.17px', height: '603.84px', border: '0.96px solid #E5E7EB', borderRadius: '7.68px', background: '#FFFFFF' }}>
            <div style={{ position: 'absolute', left: '15.36px', top: '15.36px', fontSize: '19.20px', fontWeight: 700, color: '#111827' }}>Audit Log Entries</div>
            <div style={{ position: 'absolute', left: '15.36px', top: '43.20px', fontSize: '11.52px', color: '#6B7280' }}>187 total entries found</div>

            <div style={{ position: 'absolute', left: '0', top: '71.04px', width: '1145.50px', marginLeft: '6.34px', borderTop: '0.96px solid #E5E7EB' }} />

            <div style={{ position: 'absolute', left: '15.36px', top: '86.40px', width: '1127.62px', height: '24px', fontSize: '11.52px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 600 }}>
              <span style={{ position: 'absolute', left: '0px' }}>Entry ID</span>
              <span style={{ position: 'absolute', left: '160px' }}>Action</span>
              <span style={{ position: 'absolute', left: '420px' }}>User</span>
              <span style={{ position: 'absolute', left: '650px' }}>Timestamp</span>
              <span style={{ position: 'absolute', left: '820px' }}>Risk</span>
              <span style={{ position: 'absolute', left: '930px' }}>Status</span>
              <span style={{ position: 'absolute', left: '1060px' }}>Actions</span>
            </div>

            {[
              { id: 'AUD-2024-00187', action: 'User Deletion', sub: 'john.smith@company.com', user: 'Admin User', userSub: 'admin@company.com', time: 'Mar 7, 2024 14:32:15 UTC', risk: 'High', status: 'Completed', riskBg: '#FEE2E2', riskColor: '#DC2626', statusBg: '#DCFCE7', statusColor: '#16A34A' },
              { id: 'AUD-2024-00186', action: 'Permission Change', sub: 'Support Team Role', user: 'Sarah Wilson', userSub: 'sarah@company.com', time: 'Mar 7, 2024 14:17:32 UTC', risk: 'Medium', status: 'Completed', riskBg: '#FEF3C7', riskColor: '#D97706', statusBg: '#DCFCE7', statusColor: '#16A34A' },
              { id: 'AUD-2024-00185', action: 'Data Export', sub: 'Customer Database', user: 'Mike Johnson', userSub: 'mike@company.com', time: 'Mar 7, 2024 13:45:18 UTC', risk: 'High', status: 'Completed', riskBg: '#FEE2E2', riskColor: '#DC2626', statusBg: '#DCFCE7', statusColor: '#16A34A' },
              { id: 'AUD-2024-00184', action: 'Role Assignment', sub: 'Admin Privileges', user: 'David Chen', userSub: 'david@company.com', time: 'Mar 7, 2024 12:22:45 UTC', risk: 'Critical', status: 'Pending', riskBg: '#FEE2E2', riskColor: '#DC2626', statusBg: '#FEF3C7', statusColor: '#D97706' },
              { id: 'AUD-2024-00183', action: 'User Creation', sub: 'New Employee', user: 'Lisa Martinez', userSub: 'lisa@company.com', time: 'Mar 7, 2024 11:53:13 UTC', risk: 'Low', status: 'Completed', riskBg: '#DCFCE7', riskColor: '#16A34A', statusBg: '#DCFCE7', statusColor: '#16A34A' },
            ].map((row, idx) => {
              const top = 121.92 + idx * 68
              return (
                <div key={row.id} style={{ position: 'absolute', left: '6.34px', top: `${top}px`, width: '1145.50px', height: '68px', borderTop: '0.96px solid #E5E7EB', boxSizing: 'border-box' }}>
                  <div style={{ position: 'absolute', left: '9.02px', top: '16px', fontSize: '11.52px', color: '#374151', fontWeight: 600 }}>{row.id}</div>
                  <div style={{ position: 'absolute', left: '170px', top: '10px' }}>
                    <div style={{ fontSize: '13.44px', color: '#111827', fontWeight: 600 }}>{row.action}</div>
                    <div style={{ fontSize: '11.52px', color: '#9CA3AF' }}>{row.sub}</div>
                  </div>
                  <div style={{ position: 'absolute', left: '430px', top: '10px' }}>
                    <div style={{ fontSize: '13.44px', color: '#111827', fontWeight: 600 }}>{row.user}</div>
                    <div style={{ fontSize: '11.52px', color: '#9CA3AF' }}>{row.userSub}</div>
                  </div>
                  <div style={{ position: 'absolute', left: '660px', top: '10px' }}>
                    <div style={{ fontSize: '11.52px', color: '#4B5563' }}>{row.time.split(' ')[0]} {row.time.split(' ')[1]} {row.time.split(' ')[2]}</div>
                    <div style={{ fontSize: '11.52px', color: '#9CA3AF' }}>{row.time.split(' ').slice(3).join(' ')}</div>
                  </div>
                  <div style={{ position: 'absolute', left: '830px', top: '20px', width: '64px', height: '23px', borderRadius: '999px', background: row.riskBg, color: row.riskColor, fontSize: '11.52px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{row.risk}</div>
                  <div style={{ position: 'absolute', left: '925px', top: '20px', width: '96px', height: '23px', borderRadius: '999px', background: row.statusBg, color: row.statusColor, fontSize: '11.52px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{row.status}</div>
                  <div style={{ position: 'absolute', left: '1060px', top: '22px', display: 'inline-flex', alignItems: 'center', gap: '9px', color: '#64748B' }}>
                    <FiEye size={12} />
                    <FiDownload size={12} />
                  </div>
                </div>
              )
            })}

            <div style={{ position: 'absolute', left: '15.36px', bottom: '56px', fontSize: '11.52px', color: '#6B7280' }}>Showing 1 to 6 of 187 entries</div>

            <div style={{ position: 'absolute', right: '15.36px', bottom: '46px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <button type="button" style={{ width: '60px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#F9FAFB', color: '#9CA3AF', fontSize: '11.52px' }}>Previous</button>
              <button type="button" style={{ width: '28px', height: '28px', border: 0, borderRadius: '6px', background: '#2563EB', color: '#fff', fontSize: '11.52px' }}>1</button>
              <button type="button" style={{ width: '28px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#fff', color: '#6B7280', fontSize: '11.52px' }}>2</button>
              <button type="button" style={{ width: '28px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#fff', color: '#6B7280', fontSize: '11.52px' }}>3</button>
              <button type="button" style={{ width: '32px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#fff', color: '#6B7280', fontSize: '11.52px' }}>...</button>
              <button type="button" style={{ width: '32px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#fff', color: '#6B7280', fontSize: '11.52px' }}>32</button>
              <button type="button" style={{ width: '48px', height: '28px', border: '0.96px solid #E5E7EB', borderRadius: '6px', background: '#fff', color: '#6B7280', fontSize: '11.52px' }}>Next</button>
            </div>

            <div style={{ position: 'absolute', left: '15.36px', bottom: '12px', width: '560px', height: '42px', border: '0.96px solid #E5E7EB', borderRadius: '7.68px', background: '#F9FAFB', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 12px', boxSizing: 'border-box', color: '#1E3A8A' }}>
              <FiShield size={14} />
              <span style={{ fontSize: '13.44px', fontWeight: 600 }}>Risk Distribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditModulePage
