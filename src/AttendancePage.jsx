import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiDownload, FiFilter, FiSearch, FiMoreVertical, FiUsers, FiUserX, FiClock, FiPercent } from 'react-icons/fi'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import HRMSidebar from './HRMSidebar'
import './attendance-page.css'

const dailyData = [
  { label: 'Mon', present: 234, absent: 5, late: 2 },
  { label: 'Tue', present: 239, absent: 3, late: 1 },
  { label: 'Wed', present: 236, absent: 6, late: 3 },
  { label: 'Thu', present: 241, absent: 2, late: 2 },
  { label: 'Fri', present: 232, absent: 8, late: 5 },
  { label: 'Sat', present: 198, absent: 35, late: 12 },
  { label: 'Sun', present: 185, absent: 45, late: 15 },
]

const weeklyData = [
  { label: 'Week 1', present: 230, absent: 10, late: 5 },
  { label: 'Week 2', present: 220, absent: 14, late: 8 },
  { label: 'Week 3', present: 235, absent: 9, late: 6 },
  { label: 'Week 4', present: 234, absent: 13, late: 7 },
]

const monthlyData = [
  { label: 'Jan', present: 215, absent: 25, late: 15 },
  { label: 'Feb', present: 222, absent: 22, late: 13 },
  { label: 'Mar', present: 228, absent: 19, late: 11 },
  { label: 'Apr', present: 234, absent: 15, late: 8 },
  { label: 'May', present: 240, absent: 12, late: 6 },
  { label: 'Jun', present: 235, absent: 18, late: 10 },
  { label: 'Jul', present: 225, absent: 28, late: 14 },
  { label: 'Aug', present: 232, absent: 20, late: 11 },
  { label: 'Sep', present: 238, absent: 16, late: 9 },
  { label: 'Oct', present: 241, absent: 13, late: 7 },
  { label: 'Nov', present: 236, absent: 17, late: 10 },
  { label: 'Dec', present: 229, absent: 21, late: 12 },
]

const statsCards = [
  {
    id: 1,
    label: 'Present Today',
    value: '234',
    badge: 'Today',
    badgeType: 'today',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    Icon: FiUsers,
  },
  {
    id: 2,
    label: 'Absent Today',
    value: '13',
    badge: '-3',
    badgeType: 'negative',
    iconBg: '#FEE2E2',
    iconColor: '#DC2626',
    Icon: FiUserX,
  },
  {
    id: 3,
    label: 'Late Arrivals',
    value: '8',
    badge: '+2',
    badgeType: 'warning',
    iconBg: '#FFEDD5',
    iconColor: '#EA580C',
    Icon: FiClock,
  },
  {
    id: 4,
    label: 'Attendance Rate',
    value: '94.7%',
    badge: '+1.2%',
    badgeType: 'positive',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    Icon: FiPercent,
  },
]

const departments = [
  { name: 'Engineering', present: 58, total: 62, rate: 93.5, bg: '#F0FDF4', border: '#BBF7D0', iconBg: '#22C55E', iconText: 'EN' },
  { name: 'Design',      present: 24, total: 25, rate: 96,   bg: '#EFF6FF', border: '#BFDBFE', iconBg: '#3B82F6', iconText: 'DS' },
  { name: 'Marketing',   present: 31, total: 34, rate: 91.2, bg: '#FAF5FF', border: '#E9D5FF', iconBg: '#A855F7', iconText: 'MK' },
  { name: 'Sales',       present: 42, total: 45, rate: 93.3, bg: '#FFF7ED', border: '#FED7AA', iconBg: '#F97316', iconText: 'SL' },
  { name: 'Operations',  present: 79, total: 81, rate: 97.5, bg: '#F9FAFB', border: '#E5E7EB', iconBg: '#6B7280', iconText: 'OP' },
]

const attendanceLog = [
  { id: 1, name: 'Sarah Mitchell',    avatar: 'SM', avatarColor: '#8B5CF6', department: 'Design',       checkIn: '08:45 AM', checkOut: '05:30 PM', hours: '8h 45m', status: 'On Time' },
  { id: 2, name: 'James Rodriguez',   avatar: 'JR', avatarColor: '#3B82F6', department: 'Engineering',  checkIn: '09:15 AM', checkOut: '06:00 PM', hours: '8h 45m', status: 'Late' },
  { id: 3, name: 'Anna Thompson',     avatar: 'AT', avatarColor: '#10B981', department: 'Product',      checkIn: '08:30 AM', checkOut: '05:15 PM', hours: '8h 45m', status: 'On Time' },
  { id: 4, name: 'David Park',        avatar: 'DP', avatarColor: '#F59E0B', department: 'Marketing',    checkIn: '—',        checkOut: '—',         hours: '0h',     status: 'Absent' },
  { id: 5, name: 'Michael Brown',     avatar: 'MB', avatarColor: '#EF4444', department: 'Sales',        checkIn: '08:50 AM', checkOut: '—',         hours: '—',      status: 'In Progress' },
]

const dailyAttendanceRows = [
  { id: 1, name: 'Sarah Mitchell', avatar: 'SM', avatarColor: '#8B5CF6', shift: '09:00 - 17:30', checkIn: '08:45 AM', checkOut: '05:30 PM', breakTime: '00:45', workedHours: '08:00', status: 'Present' },
  { id: 2, name: 'James Rodriguez', avatar: 'JR', avatarColor: '#3B82F6', shift: '09:00 - 18:00', checkIn: '09:15 AM', checkOut: '06:00 PM', breakTime: '00:45', workedHours: '08:00', status: 'Late' },
  { id: 3, name: 'Anna Thompson', avatar: 'AT', avatarColor: '#10B981', shift: '08:30 - 17:15', checkIn: '08:30 AM', checkOut: '05:15 PM', breakTime: '00:30', workedHours: '08:15', status: 'Present' },
  { id: 4, name: 'David Park', avatar: 'DP', avatarColor: '#F59E0B', shift: '09:00 - 17:30', checkIn: '—', checkOut: '—', breakTime: '—', workedHours: '00:00', status: 'Absent' },
  { id: 5, name: 'Michael Brown', avatar: 'MB', avatarColor: '#EF4444', shift: '09:00 - 18:00', checkIn: '08:50 AM', checkOut: '—', breakTime: '00:30', workedHours: '07:10', status: 'In Progress' },
]

const dailySummary = [
  { label: 'On Time', count: 214, percentage: 86, className: 'on-time' },
  { label: 'Late Arrival', count: 15, percentage: 6, className: 'late' },
  { label: 'Absent', count: 13, percentage: 5, className: 'absent' },
  { label: 'Remote Check-In', count: 8, percentage: 3, className: 'remote' },
]

const dailyActivity = [
  { id: 1, text: 'James Rodriguez checked in late by 15 minutes', time: '09:15 AM' },
  { id: 2, text: 'David Park marked absent for today', time: '09:02 AM' },
  { id: 3, text: 'Finance team reached 100% attendance', time: '08:55 AM' },
  { id: 4, text: 'Michael Brown is currently in progress', time: '08:50 AM' },
]

const monthlyStatsCards = [
  { id: 1, label: 'Avg Attendance', value: '87.5%', badge: '+4%', badgeType: 'positive', iconBg: '#DCFCE7', iconColor: '#16A34A', Icon: FiUsers },
  { id: 2, label: 'Working Days', value: '22', badge: '22 Days', badgeType: 'today', iconBg: '#DBEAFE', iconColor: '#2563EB', Icon: FiClock },
  { id: 3, label: 'Late Arrivals', value: '5.2%', badge: '5.2%', badgeType: 'warning', iconBg: '#FEF3C7', iconColor: '#D97706', Icon: FiUserX },
  { id: 4, label: 'Avg Hours', value: '8.1h', badge: '8.1h', badgeType: 'today', iconBg: '#EDE9FE', iconColor: '#7C3AED', Icon: FiPercent },
]

const monthlyDepartmentSummary = [
  { name: 'Engineering', value: '89.2%', className: 'engineering' },
  { name: 'Marketing', value: '86.8%', className: 'marketing' },
  { name: 'Sales', value: '91.5%', className: 'sales' },
  { name: 'HR', value: '88.3%', className: 'hr' },
  { name: 'Operations', value: '84.7%', className: 'operations' },
]

const monthlyTrendData = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1
  const present = 84 + ((day * 7) % 11)
  const absent = 3 + ((day * 5) % 5)
  const late = 2 + ((day * 3) % 4)
  return { label: `Dec ${day}`, present, absent, late }
})

const monthlyCalendarDays = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1

  if (day === 19) return { day, status: 'today' }
  if ([4, 13, 16, 23].includes(day)) return { day, status: 'late' }
  if ([10, 17].includes(day)) return { day, status: 'absent' }
  return { day, status: 'present' }
})

function getStatusClass(status) {
  switch (status) {
    case 'On Time':     return 'att-status-ontime'
    case 'Late':        return 'att-status-late'
    case 'Absent':      return 'att-status-absent'
    case 'In Progress': return 'att-status-inprogress'
    default:            return ''
  }
}

function getDailyStatusClass(status) {
  switch (status) {
    case 'Present':
      return 'att-daily-status-present'
    case 'Late':
      return 'att-daily-status-late'
    case 'Absent':
      return 'att-daily-status-absent'
    case 'In Progress':
      return 'att-daily-status-inprogress'
    default:
      return ''
  }
}

function getBadgeClass(type) {
  switch (type) {
    case 'today':    return 'att-badge-today'
    case 'negative': return 'att-badge-negative'
    case 'warning':  return 'att-badge-warning'
    case 'positive': return 'att-badge-positive'
    default:         return ''
  }
}

function DailyAttendance({ viewType, setViewType }) {
  return (
    <>
      <section className="att-stats-row">
        {statsCards.map((card) => (
          <div key={card.id} className="att-stat-card">
            <div className="att-stat-top">
              <div className="att-stat-icon-box" style={{ backgroundColor: card.iconBg }}>
                <card.Icon size={20} color={card.iconColor} />
              </div>
              <span className={`att-stat-badge ${getBadgeClass(card.badgeType)}`}>{card.badge}</span>
            </div>
            <div className="att-stat-value">{card.value}</div>
            <div className="att-stat-label">{card.label}</div>
          </div>
        ))}
      </section>

      <section className="att-daily-topbar">
        <div className="att-daily-date">Wednesday, March 20, 2024</div>
        <div className="att-daily-controls">
          <div className="att-chart-tabs">
            {['daily', 'weekly', 'monthly'].map((type) => (
              <button
                key={type}
                className={`att-chart-tab ${viewType === type ? 'active' : ''}`}
                onClick={() => setViewType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <button className="att-table-btn"><FiFilter size={14} /> Department</button>
          <button className="att-table-btn"><FiSearch size={14} /> Search</button>
        </div>
      </section>

      <section className="att-daily-table-section">
        <div className="att-table-header">
          <span className="att-table-title">Daily Attendance Dashboard</span>
          <div className="att-table-actions">
            <button className="att-table-btn"><FiDownload size={14} /> Export</button>
          </div>
        </div>

        <div className="att-table-wrapper">
          <table className="att-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Shift</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Break</th>
                <th>Worked Hours</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dailyAttendanceRows.map((row) => (
                <tr key={row.id} className="att-table-row">
                  <td className="att-emp-cell">
                    <div className="att-avatar" style={{ backgroundColor: row.avatarColor }}>{row.avatar}</div>
                    <span className="att-emp-name">{row.name}</span>
                  </td>
                  <td>{row.shift}</td>
                  <td>{row.checkIn}</td>
                  <td>{row.checkOut}</td>
                  <td>{row.breakTime}</td>
                  <td>{row.workedHours}</td>
                  <td>
                    <span className={`att-status-badge ${getDailyStatusClass(row.status)}`}>{row.status}</span>
                  </td>
                  <td>
                    <button className="att-row-action-btn"><FiMoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="att-daily-bottom-row">
        <div className="att-daily-card">
          <div className="att-daily-card-title">Daily Summary</div>
          <div className="att-daily-summary-list">
            {dailySummary.map((item) => (
              <div key={item.label} className="att-daily-summary-item">
                <div className="att-daily-summary-meta">
                  <span className="att-daily-summary-label">{item.label}</span>
                  <span className="att-daily-summary-value">{item.count}</span>
                </div>
                <div className="att-daily-progress-track">
                  <div
                    className={`att-daily-progress-fill ${item.className}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="att-daily-card">
          <div className="att-daily-card-title">Recent Activity</div>
          <div className="att-daily-activity-list">
            {dailyActivity.map((item) => (
              <div key={item.id} className="att-daily-activity-item">
                <span className="att-daily-activity-dot" />
                <div className="att-daily-activity-text-wrap">
                  <div className="att-daily-activity-text">{item.text}</div>
                  <div className="att-daily-activity-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function WeeklyAttendance({ viewType, setViewType, chartData }) {
  return (
    <>
      <section className="att-stats-row">
        {statsCards.map((card) => (
          <div key={card.id} className="att-stat-card">
            <div className="att-stat-top">
              <div className="att-stat-icon-box" style={{ backgroundColor: card.iconBg }}>
                <card.Icon size={20} color={card.iconColor} />
              </div>
              <span className={`att-stat-badge ${getBadgeClass(card.badgeType)}`}>{card.badge}</span>
            </div>
            <div className="att-stat-value">{card.value}</div>
            <div className="att-stat-label">{card.label}</div>
          </div>
        ))}
      </section>

      <section className="att-mid-row">
        <div className="att-chart-card">
          <div className="att-chart-header">
            <span className="att-chart-title">Attendance Trend</span>
            <div className="att-chart-tabs">
              {['daily', 'weekly', 'monthly'].map((type) => (
                <button
                  key={type}
                  className={`att-chart-tab ${viewType === type ? 'active' : ''}`}
                  onClick={() => setViewType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradPresent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#10B981" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 250]} ticks={[0, 50, 100, 150, 200]} tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 12 }}
              />
              <Area type="monotone" dataKey="present" stroke="#10B981" strokeWidth={2} fill="url(#gradPresent)" dot={false} name="Present" />
              <Line type="monotone" dataKey="absent"  stroke="#EF4444" strokeWidth={1.5} dot={false} name="Absent" />
              <Line type="monotone" dataKey="late"    stroke="#F59E0B" strokeWidth={1.5} dot={false} name="Late" />
              <Legend
                iconType="plainline"
                iconSize={16}
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                formatter={(value) => <span style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif' }}>{value}</span>}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="att-dept-card">
          <div className="att-dept-title">Department Status</div>
          <div className="att-dept-list">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="att-dept-item"
                style={{ backgroundColor: dept.bg, borderColor: dept.border }}
              >
                <div className="att-dept-icon" style={{ backgroundColor: dept.iconBg }}>
                  <span>{dept.iconText}</span>
                </div>
                <div className="att-dept-info">
                  <div className="att-dept-name">{dept.name}</div>
                  <div className="att-dept-count">{dept.present}/{dept.total} Present</div>
                </div>
                <div className="att-dept-rate">{dept.rate}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="att-table-section">
        <div className="att-table-header">
          <span className="att-table-title">Today's Attendance Log</span>
          <div className="att-table-actions">
            <button className="att-table-btn"><FiFilter size={14} /> Filter</button>
            <button className="att-table-btn"><FiSearch size={14} /> Search</button>
          </div>
        </div>

        <div className="att-table-wrapper">
          <table className="att-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Hours</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendanceLog.map((row) => (
                <tr key={row.id} className="att-table-row">
                  <td className="att-emp-cell">
                    <div className="att-avatar" style={{ backgroundColor: row.avatarColor }}>{row.avatar}</div>
                    <span className="att-emp-name">{row.name}</span>
                  </td>
                  <td>{row.department}</td>
                  <td>{row.checkIn}</td>
                  <td>{row.checkOut}</td>
                  <td>{row.hours}</td>
                  <td>
                    <span className={`att-status-badge ${getStatusClass(row.status)}`}>{row.status}</span>
                  </td>
                  <td>
                    <button className="att-row-action-btn"><FiMoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="att-pagination">
          <span className="att-pagination-info">Showing 1–5 of 247 employees</span>
          <div className="att-pagination-btns">
            <button className="att-page-btn">Previous</button>
            <button className="att-page-btn active">1</button>
            <button className="att-page-btn">2</button>
            <button className="att-page-btn">3</button>
            <button className="att-page-btn">Next</button>
          </div>
        </div>
      </section>
    </>
  )
}

function MonthlyAttendance({ viewType, setViewType }) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const trailingEmptyDays = Array.from({ length: 4 }, (_, index) => ({ id: `empty-${index}` }))

  return (
    <>
      <section className="att-stats-row">
        {monthlyStatsCards.map((card) => (
          <div key={card.id} className="att-stat-card">
            <div className="att-stat-top">
              <div className="att-stat-icon-box" style={{ backgroundColor: card.iconBg }}>
                <card.Icon size={20} color={card.iconColor} />
              </div>
              <span className={`att-stat-badge ${getBadgeClass(card.badgeType)}`}>{card.badge}</span>
            </div>
            <div className="att-stat-value">{card.value}</div>
            <div className="att-stat-label">{card.label}</div>
          </div>
        ))}
      </section>

      <section className="att-monthly-filter-row">
        <div className="att-monthly-left-controls">
          <span className="att-monthly-date">December 2024</span>
          <div className="att-chart-tabs">
            <button className={`att-chart-tab ${viewType === 'daily' ? 'active' : ''}`} onClick={() => setViewType('daily')}>Daily</button>
            <button className={`att-chart-tab ${viewType === 'weekly' ? 'active' : ''}`} onClick={() => setViewType('weekly')}>Weekly</button>
            <button className={`att-chart-tab ${viewType === 'monthly' ? 'active' : ''}`} onClick={() => setViewType('monthly')}>Monthly</button>
          </div>
        </div>
        <div className="att-table-actions">
          <button className="att-table-btn"><FiFilter size={14} /> Filter</button>
          <button className="att-table-btn"><FiSearch size={14} /> Search</button>
        </div>
      </section>

      <section className="att-monthly-chart-card">
        <div className="att-chart-title">Monthly Attendance Trends</div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyTrendData} margin={{ top: 12, right: 8, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="gradMonthlyPresent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="label" interval={2} tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="present" stroke="#10B981" strokeWidth={2} fill="url(#gradMonthlyPresent)" dot={false} name="Present" />
            <Line type="monotone" dataKey="absent" stroke="#EF4444" strokeWidth={1.5} dot={false} name="Absent" />
            <Line type="monotone" dataKey="late" stroke="#F59E0B" strokeWidth={1.5} dot={false} name="Late" />
            <Legend
              iconType="plainline"
              iconSize={16}
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              formatter={(value) => <span style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif' }}>{value}</span>}
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      <section className="att-monthly-bottom-row">
        <div className="att-monthly-calendar-card">
          <div className="att-chart-title">December 2024</div>

          <div className="att-monthly-week-grid">
            {weekDays.map((day) => (
              <div key={day} className="att-monthly-weekday">{day}</div>
            ))}

            {monthlyCalendarDays.map((dayItem) => (
              <div key={dayItem.day} className={`att-monthly-day att-monthly-day-${dayItem.status}`}>
                {dayItem.day}
              </div>
            ))}

            {trailingEmptyDays.map((item) => (
              <div key={item.id} className="att-monthly-day att-monthly-day-empty" />
            ))}
          </div>

          <div className="att-monthly-legend">
            <span><i className="att-monthly-dot present" />Present</span>
            <span><i className="att-monthly-dot late" />Late</span>
            <span><i className="att-monthly-dot absent" />Absent</span>
            <span><i className="att-monthly-dot today" />Today</span>
          </div>
        </div>

        <div className="att-monthly-summary-card">
          <div className="att-chart-title">Monthly Summary</div>

          <div className="att-monthly-summary-list">
            {monthlyDepartmentSummary.map((item) => (
              <div key={item.name} className="att-monthly-summary-item">
                <div className="att-monthly-summary-left">
                  <span className={`att-monthly-summary-dot ${item.className}`} />
                  <span>{item.name}</span>
                </div>
                <span className="att-monthly-summary-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="att-monthly-subsection">
            <div className="att-monthly-subtitle">Best Performing Days</div>
            <div className="att-monthly-subline"><span>Monday</span><strong>92.5%</strong></div>
            <div className="att-monthly-subline"><span>Wednesday</span><strong>90.8%</strong></div>
            <div className="att-monthly-subline"><span>Friday</span><strong>89.1%</strong></div>
          </div>

          <div className="att-monthly-subsection">
            <div className="att-monthly-subtitle">Needs Attention</div>
            <div className="att-monthly-subline"><span>Late Arrivals</span><strong className="warn">5.2%</strong></div>
            <div className="att-monthly-subline"><span>Absent Rate</span><strong className="warn">8.4%</strong></div>
          </div>
        </div>
      </section>
    </>
  )
}

function AttendancePage({ onSwitchModule }) {
  const navigate = useNavigate()
  const [viewType, setViewType] = useState('weekly')

  const getChartData = () => {
    switch (viewType) {
      case 'daily':
        return dailyData
      case 'weekly':
        return weeklyData
      case 'monthly':
        return monthlyData
      default:
        return weeklyData
    }
  }

  const chartData = getChartData()

  return (
    <div className="att-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="att-main">
        {/* Header */}
        <header className="att-header">
          <div className="att-header-left">
            <h1 className="att-title">Attendance</h1>
            <nav className="att-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Attendance</span>
            </nav>
          </div>
          <div className="att-header-right">
            <button className="att-bell-btn" title="Notifications">
              <FiBell size={20} />
              <span className="att-bell-badge">3</span>
            </button>
            <button className="att-request-btn" onClick={() => navigate('/regularization-request')}>
              Request Correction
            </button>
            <button className="att-export-btn">
              <FiDownload size={15} />
              Export Report
            </button>
          </div>
        </header>

        <div className="att-content">
          {viewType === 'daily' && <DailyAttendance viewType={viewType} setViewType={setViewType} />}
          {viewType === 'weekly' && <WeeklyAttendance viewType={viewType} setViewType={setViewType} chartData={chartData} />}
          {viewType === 'monthly' && <MonthlyAttendance viewType={viewType} setViewType={setViewType} />}
        </div>
      </main>
    </div>
  )
}

export default AttendancePage
