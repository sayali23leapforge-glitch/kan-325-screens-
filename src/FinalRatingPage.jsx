import { useNavigate, useParams } from 'react-router-dom'
import {
  FiBell,
  FiDownload,
  FiCheckCircle,
  FiUser,
  FiStar,
  FiTrendingUp,
  FiTarget,
  FiZap,
} from 'react-icons/fi'
import PerformanceSidebar from './PerformanceSidebar'
import './final-rating.css'

const employeeData = {
  1: {
    name: 'John Smith',
    role: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/80?img=12',
    team: 'Frontend Team',
    manager: 'Manager: Sarah Johnson',
    quarter: 'Q1 2024',
    finalRating: 4.0,
    selfRating: 4.0,
    managerRating: 3.5,
    calibratedRating: 4.0,
  },
  2: {
    name: 'Emily Chen',
    role: 'Backend Engineer',
    avatar: 'https://i.pravatar.cc/80?img=32',
    team: 'API Team',
    manager: 'Manager: David Park',
    quarter: 'Q1 2024',
    finalRating: 4.0,
    selfRating: 3.0,
    managerRating: 4.0,
    calibratedRating: 4.0,
  },
}

const competencies = [
  {
    title: 'Technical Skills',
    score: 4.5,
    description:
      'Excellent expertise in React, TypeScript, and modern frameworks. Delivered complex features ahead of schedule.',
  },
  {
    title: 'Collaboration & Teamwork',
    score: 4.0,
    description:
      'Strong team player on cross-functional projects; helped 2+ developers troubleshoot complex problems.',
  },
  {
    title: 'Problem Solving',
    score: 4.0,
    description:
      'Consistently finds creative solutions and implementations for complex problems. Reduced build time by 35%.',
  },
  {
    title: 'Communication',
    score: 3.5,
    description:
      'Good written, but room for improvement in verbal communication. Improving with each stakeholder meeting.',
  },
  {
    title: 'Initiative & Innovation',
    score: 4.0,
    description:
      'Proactively implemented performance optimizations that improved page load time by nearly 40%.',
  },
]

const achievements = [
  {
    emoji: '🚀',
    bg: '#EFF6FF',
    color: '#1D4ED8',
    title: 'Product Launch Excellence',
    desc: 'Led frontend development for our most complex product launch; delivered 2 weeks ahead of schedule with zero bugs.',
  },
  {
    emoji: '⚡',
    bg: '#FFFBEB',
    color: '#B45309',
    title: 'Performance Optimization',
    desc: 'Implemented caching and code splitting, which improved overall performance by 40%, resulting in Core Web Vitals improvements.',
  },
  {
    emoji: '👥',
    bg: '#F5F3FF',
    color: '#6D28D9',
    title: 'Mentorship Impact',
    desc: 'Mentored 3 junior developers, conducted bi-weekly coaching sessions, and improved team productivity by 25%.',
  },
  {
    emoji: '💡',
    bg: '#FFFBEB',
    color: '#B45309',
    title: 'Technical Innovation',
    desc: 'Introduced automated testing framework that has increased code coverage from 45% to 87%.',
  },
]

const opportunities = [
  {
    icon: <FiTrendingUp size={15} />,
    bg: '#EFF6FF',
    color: '#1D4ED8',
    title: 'Leadership Development',
    desc: 'Enroll in the Tech Lead program to build team management and decision-making skills.',
  },
  {
    icon: <FiTarget size={15} />,
    bg: '#F5F3FF',
    color: '#6D28D9',
    title: 'System Architecture',
    desc: 'Gain exposure to large-scale system design through shadowing and architecture reviews.',
  },
  {
    icon: <FiZap size={15} />,
    bg: '#FFFBEB',
    color: '#B45309',
    title: 'Public Speaking',
    desc: 'Participate in internal tech talks to improve verbal communication and presentation confidence.',
  },
]

function getBarGradient(score) {
  if (score >= 4.3) return 'linear-gradient(90deg, #3B82F6 0%, #6366F1 100%)'
  if (score >= 3.8) return 'linear-gradient(90deg, #22C55E 0%, #16A34A 100%)'
  if (score >= 3.3) return 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
  return 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)'
}

function FinalRatingPage({ onSwitchModule }) {
  const { id } = useParams()
  const emp = employeeData[id] || employeeData[1]

  return (
    <div className="fr-layout">
      <PerformanceSidebar onSwitchModule={onSwitchModule} />

      <main className="fr-main">
        {/* ── Header ── */}
        <header className="fr-header">
          <div className="fr-header-left">
            <h1 className="fr-page-title">Final Performance Rating</h1>
            <nav className="fr-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="fr-bc-sep">/</span>
              <a href="/hrm/performance">Performance</a>
              <span className="fr-bc-sep">/</span>
              <span className="fr-bc-current">Final Rating</span>
            </nav>
          </div>
          <div className="fr-header-right">
            <button className="fr-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={16} />
              <span className="fr-bell-badge">3</span>
            </button>
            <button className="fr-export-btn" type="button">
              <FiDownload size={13} />
              Export Report
            </button>
          </div>
        </header>

        <div className="fr-scroll">
          {/* ── Employee Card ── */}
          <article className="fr-employee-card">
            <div className="fr-emp-left">
              <img className="fr-avatar" src={emp.avatar} alt={emp.name} />
              <div className="fr-emp-info">
                <h2 className="fr-emp-name">{emp.name}</h2>
                <p className="fr-emp-role">{emp.role}</p>
                <div className="fr-emp-tags">
                  <span className="fr-tag fr-tag-blue">
                    <span className="fr-tag-dot" style={{ background: '#3B82F6' }} />
                    {emp.team}
                  </span>
                  <span className="fr-tag fr-tag-purple">
                    <span className="fr-tag-dot" style={{ background: '#8B5CF6' }} />
                    {emp.manager}
                  </span>
                  <span className="fr-tag fr-tag-green">
                    <span className="fr-tag-dot" style={{ background: '#22C55E' }} />
                    {emp.quarter}
                  </span>
                </div>
              </div>
            </div>
            <div className="fr-rating-badge">
              <span className="fr-rb-label-top">Final Rating</span>
              <span className="fr-rb-value">{emp.finalRating.toFixed(1)}</span>
              <span className="fr-rb-label-bot">Exceeds Expectations</span>
            </div>
          </article>

          {/* ── Rating Breakdown ── */}
          <article className="fr-card">
            <h3 className="fr-card-title">Rating Breakdown</h3>
            <div className="fr-breakdown-grid">
              <div className="fr-bd-col fr-bd-blue">
                <div className="fr-bd-icon-wrap fr-bd-icon-blue">
                  <FiUser size={20} />
                </div>
                <span className="fr-bd-score">{emp.selfRating.toFixed(1)}</span>
                <span className="fr-bd-name">Self Assessment</span>
                <span className="fr-bd-sub">Carefully Evaluated In</span>
              </div>
              <div className="fr-bd-col fr-bd-purple">
                <div className="fr-bd-icon-wrap fr-bd-icon-purple">
                  <FiStar size={20} />
                </div>
                <span className="fr-bd-score">{emp.managerRating.toFixed(1)}</span>
                <span className="fr-bd-name">Manager Review</span>
                <span className="fr-bd-sub">Mildly Expectations</span>
              </div>
              <div className="fr-bd-col fr-bd-green">
                <div className="fr-bd-icon-wrap fr-bd-icon-green">
                  <FiCheckCircle size={20} />
                </div>
                <span className="fr-bd-score">{emp.calibratedRating.toFixed(1)}</span>
                <span className="fr-bd-name">Calibrated Rating</span>
                <span className="fr-bd-sub">Calibrated Evaluation</span>
              </div>
            </div>
          </article>

          {/* ── Calibration Decision ── */}
          <div className="fr-decision">
            <FiCheckCircle size={15} className="fr-decision-icon" />
            <p className="fr-decision-text">
              After careful evaluation, this rating was set at{' '}
              <strong>4.0 – Exceeds Expectations</strong>, based on consistent high performance,
              cross-functional collaboration, and technical leadership in Q1 2024.
            </p>
          </div>

          {/* ── Performance by Competency ── */}
          <article className="fr-card">
            <h3 className="fr-card-title">Performance by Competency</h3>
            <div className="fr-competency-list">
              {competencies.map((c) => (
                <div key={c.title} className="fr-comp-row">
                  <div className="fr-comp-top">
                    <span className="fr-comp-title">{c.title}</span>
                    <span className="fr-comp-score">{c.score.toFixed(1)}</span>
                  </div>
                  <p className="fr-comp-desc">{c.description}</p>
                  <div className="fr-bar-track">
                    <div
                      className="fr-bar-fill"
                      style={{
                        width: `${(c.score / 5) * 100}%`,
                        background: getBarGradient(c.score),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* ── Bottom 2-col ── */}
          <div className="fr-bottom-grid">
            {/* Key Achievements */}
            <article className="fr-card">
              <h3 className="fr-card-title">Key Achievements</h3>
              <div className="fr-list">
                {achievements.map((a) => (
                  <div key={a.title} className="fr-list-item">
                    <span
                      className="fr-list-icon"
                      style={{ background: a.bg, color: a.color }}
                    >
                      {a.emoji}
                    </span>
                    <div className="fr-list-body">
                      <p className="fr-list-title">{a.title}</p>
                      <p className="fr-list-desc">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Development Opportunities */}
            <article className="fr-card">
              <h3 className="fr-card-title">Development Opportunities</h3>
              <div className="fr-list">
                {opportunities.map((o) => (
                  <div key={o.title} className="fr-list-item">
                    <span
                      className="fr-list-icon"
                      style={{ background: o.bg, color: o.color }}
                    >
                      {o.icon}
                    </span>
                    <div className="fr-list-body">
                      <p className="fr-list-title">{o.title}</p>
                      <p className="fr-list-desc">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FinalRatingPage
