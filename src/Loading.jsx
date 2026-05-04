import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './loading.css'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.3 9.9 8 11 4.7-1.1 8-5.8 8-11V5l-8-3Zm0 3.2 5 1.9V11c0 3.7-2.2 7.2-5 8.3-2.8-1.1-5-4.6-5-8.3V7.1l5-1.9Z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10V8a5 5 0 1 1 10 0v2h.8A2.2 2.2 0 0 1 20 12.2v7.6a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 19.8v-7.6A2.2 2.2 0 0 1 6.2 10H7Zm2 0h6V8a3 3 0 0 0-6 0v2Z" />
    </svg>
  )
}

function Loading() {
  const navigate = useNavigate()
  const location = useLocation()
  const organization = location.state?.organization

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/products', {
        replace: true,
        state: { organization },
      })
    }, 2500)

    return () => window.clearTimeout(timer)
  }, [navigate, organization])

  return (
    <main className="loading-page">
      <div className="loading-topbar" aria-hidden="true" />

      <header className="loading-nav">
        <div className="loading-brand">
          <div className="loading-brand-mark">
            <ShieldIcon />
          </div>
          <span>Karnovate</span>
        </div>
      </header>

      <section className="loading-shell" aria-label="Access permissions loading">
        <div className="loading-hero" aria-hidden="true">
          <div className="loading-logo-wrap">
            <div className="loading-logo">
              <ShieldIcon />
            </div>
            <span className="loading-check">✓</span>
          </div>
        </div>

        <div className="loading-copy">
          <h1>Loading Your Access Permissions</h1>
          <div className="loading-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="loading-subtitle">Fetching access policies...</p>
        </div>

        <div className="loading-skeletons" aria-hidden="true">
          {[1, 2, 3, 4].map((item) => (
            <div className="skeleton-card" key={item}>
              <span className="skeleton-avatar shimmer" />
              <div className="skeleton-lines">
                <span className="skeleton-line long shimmer" />
                <span className="skeleton-line short shimmer" />
              </div>
            </div>
          ))}
        </div>

        <div className="loading-session">
          <LockIcon />
          <span>Establishing secure session...</span>
        </div>

        <div className="warning-box" role="alert">
          <div className="warning-icon">!</div>
          <div className="warning-copy">
            <h2>Taking longer than expected</h2>
            <p>We&apos;re still loading your permissions. This may take a moment.</p>
            <a href="#" onClick={(event) => event.preventDefault()}>
              Contact Support →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Loading