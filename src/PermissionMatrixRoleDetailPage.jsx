import React from 'react';
import Sidebar from './Sidebar';
import './permission-matrix.css';

const ROLE_META = [
  { key: 'Super Admin', color: '#FEE2E2', icon: '#DC2626', desc: 'Full system access' },
  { key: 'Admin', color: '#DBEAFE', icon: '#2563EB', desc: 'Administrative access' },
  { key: 'Editor', color: '#F3E8FF', icon: '#9333EA', desc: 'Editor access' },
  { key: 'Viewer', color: '#DCFCE7', icon: '#16A34A', desc: 'Read-only access' },
  { key: 'Analyst', color: '#FFEDD5', icon: '#EA580C', desc: 'Analyst access' },
  { key: 'Support', color: '#CCFBF1', icon: '#0D9488', desc: 'Support access' },
];

const stats = [
  { label: 'Active Roles', value: '12', color: '#22C55E' },
  { label: 'Permissions', value: '156', color: '#2563EB' },
  { label: 'Users Assigned', value: '1,247', color: '#9333EA' },
  { label: 'Conflicts', value: '3', color: '#EA580C' },
];

const permissionCategories = [
  'User Management',
  'Tenant Management',
  'Role Management',
  'Security Policies',
  'Audit Logs',
  'Reports',
  'System Config',
  'Actions',
];

const permissions = [
  // Example data for demo
  { role: 'Super Admin', perms: ['full','full','full','full','full','full','full','full'] },
  { role: 'Admin', perms: ['full','full','partial','full','full','full','full','full'] },
  { role: 'User Manager', perms: ['full','none','none','none','partial','partial','none','none'] },
  { role: 'Viewer', perms: ['partial','partial','partial','none','partial','partial','none','none'] },
  { role: 'Basic User', perms: ['none','none','none','none','none','none','none','none'] },
];

const legend = [
  { color: '#22C55E', label: 'Full Access - Create, Read, Update, Delete' },
  { color: '#EAB308', label: 'Read Only - View permissions only' },
  { color: '#EF4444', label: 'No Access - Permission denied' },
];

const recent = [
  { dot: '#3B82F6', title: 'Admin role updated', time: '2 hours ago by Michael Chen' },
  { dot: '#22C55E', title: 'New role created: Content Editor', time: '5 hours ago by Sarah Johnson' },
  { dot: '#F97316', title: 'Permission conflict resolved', time: 'Yesterday by System' },
];

export default function PermissionMatrixRoleDetailPage({ role }) {
  const meta = ROLE_META.find(r => r.key.toLowerCase().replace(/ /g, '-') === role);
  return (
    <div className="permission-matrix-wrapper">
      <Sidebar />
      <div className="pm-header-fixed">
        <div className="pm-header-left">
          <h1 className="pm-page-title">Permission Matrix</h1>
        </div>
        <div className="pm-breadcrumb">
          <a href="#" className="pm-breadcrumb-item">Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <a href="#" className="pm-breadcrumb-item">Roles &amp; Permissions</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Permission Matrix</span>
        </div>
        <div className="pm-header-right">
          <button className="pm-btn-export">Export</button>
          <button className="pm-btn-save">+ New Role</button>
        </div>
      </div>
      <div style={{marginTop:81.75,padding:'30px 24px 0 24px',flex:1}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
          <div>
            <div style={{fontSize:28.8,fontWeight:700,color:'#111827'}}>Permission Matrix</div>
            <div style={{fontSize:15.36,color:'#4B5563',marginTop:8}}>Manage role-based permissions across all system modules</div>
          </div>
          <div style={{display:'flex',gap:16}}>
            <div className="pm-search-box" style={{width:232}}>
              <input type="text" placeholder="Search roles..." className="pm-search-input" />
            </div>
            <button className="pm-filter-btn">All Modules</button>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:24}}>
          {stats.map((s,i)=>(
            <div key={i} className="pm-stat-card">
              <div className="pm-stat-icon" style={{background:'#F9FAFB'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={s.color}/></svg>
              </div>
              <div className="pm-stat-num">{s.value}</div>
              <div className="pm-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{background:'white',borderRadius:12,padding:24,marginBottom:24}}>
          <div style={{fontWeight:700,fontSize:19.2,marginBottom:24}}>Role Permission Matrix</div>
          <table className="pm-matrix-table" style={{width:'100%'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',fontWeight:600,color:'#111827',padding:'16px 12px'}}>Role / Permission</th>
                {permissionCategories.map(cat=>(<th key={cat} style={{fontWeight:600,color:'#111827',padding:'16px 12px'}}>{cat}</th>))}
              </tr>
            </thead>
            <tbody>
              {permissions.map((row,i)=>(
                <tr key={row.role}>
                  <td style={{display:'flex',alignItems:'center',gap:12,padding:'16px 12px'}}>
                    <div style={{width:31,height:31,borderRadius:8,background:ROLE_META[i]?.color,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="8" r="4" fill={ROLE_META[i]?.icon}/><path d="M2 20C2 14.477 6.373 10 10.5 10C14.627 10 19 14.477 19 20" fill={ROLE_META[i]?.icon}/></svg>
                    </div>
                    <div>
                      <div style={{fontWeight:600,color:'#111827',fontSize:15}}>{row.role}</div>
                      <div style={{fontSize:11,color:'#6B7280'}}>{ROLE_META[i]?.desc}</div>
                    </div>
                  </td>
                  {row.perms.map((p,idx)=>(
                    <td key={idx} style={{textAlign:'center',padding:'16px 12px'}}>
                      {p==='full'&&<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#22C55E"/><path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      {p==='partial'&&<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#EAB308"/><path d="M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>}
                      {p==='none'&&<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#EF4444"/><path d="M8 16l8-8M16 16l-8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{display:'flex',gap:24}}>
          <div style={{flex:1,background:'white',borderRadius:12,padding:24}}>
            <div style={{fontWeight:700,fontSize:17,marginBottom:16}}>Permission Legend</div>
            {legend.map((l,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={l.color}/></svg>
                <span style={{fontSize:13,color:'#374151'}}>{l.label}</span>
              </div>
            ))}
          </div>
          <div style={{flex:1,background:'white',borderRadius:12,padding:24}}>
            <div style={{fontWeight:700,fontSize:17,marginBottom:16}}>Recent Changes</div>
            {recent.map((r,i)=>(
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:16,marginBottom:24}}>
                <div style={{width:12,height:12,borderRadius:6,background:r.dot,marginTop:4}}></div>
                <div>
                  <div style={{fontSize:13,fontWeight:500,color:'#111827',marginBottom:4}}>{r.title}</div>
                  <div style={{fontSize:11,color:'#6B7280'}}>{r.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
