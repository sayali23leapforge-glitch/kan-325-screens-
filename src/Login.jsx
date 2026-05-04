import { useState } from 'react'
import './login.css'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.3 9.9 8 11 4.7-1.1 8-5.8 8-11V5l-8-3Zm0 3.2 5 1.9V11c0 3.7-2.2 7.2-5 8.3-2.8-1.1-5-4.6-5-8.3V7.1l5-1.9Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.8A2.8 2.8 0 0 1 5.8 4h12.4A2.8 2.8 0 0 1 21 6.8v10.4a2.8 2.8 0 0 1-2.8 2.8H5.8A2.8 2.8 0 0 1 3 17.2V6.8Zm2 0v.4l7 4.8 7-4.8v-.4c0-.4-.4-.8-.8-.8H5.8c-.4 0-.8.4-.8.8Zm14 2.8-6.4 4.4a1 1 0 0 1-1.2 0L5 9.6v7.6c0 .4.4.8.8.8h12.4c.4 0 .8-.4.8-.8V9.6Z" />
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

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5c5.7 0 9.2 5.6 9.3 5.9a2 2 0 0 1 0 2.2c-.1.3-3.6 5.9-9.3 5.9s-9.2-5.6-9.3-5.9a2 2 0 0 1 0-2.2C2.8 10.6 6.3 5 12 5Zm0 2c-4.3 0-7.2 4.4-7.4 4.8a.2.2 0 0 0 0 .2c.2.4 3.1 4.8 7.4 4.8s7.2-4.4 7.4-4.8a.2.2 0 0 0 0-.2C19.2 11.4 16.3 7 12 7Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z" fill="#4285F4" />
      <path d="M12 22c2.7 0 4.9-.9 6.6-2.5l-3.2-2.5c-.9.6-2.1 1-3.4 1-2.6 0-4.9-1.8-5.7-4.2H3v2.6A10 10 0 0 0 12 22Z" fill="#34A853" />
      <path d="M6.3 13.8a6 6 0 0 1 0-3.6V7.6H3a10 10 0 0 0 0 8.8l3.3-2.6Z" fill="#FBBC05" />
      <path d="M12 6a5.5 5.5 0 0 1 3.9 1.5l2.9-2.9A10 10 0 0 0 3 7.6l3.3 2.6C7.1 7.8 9.4 6 12 6Z" fill="#EA4335" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#f25022" d="M2 2h9v9H2z" />
      <path fill="#7fba00" d="M13 2h9v9h-9z" />
      <path fill="#00a4ef" d="M2 13h9v9H2z" />
      <path fill="#ffb900" d="M13 13h9v9h-9z" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.8 10.8a4.8 4.8 0 1 1 4.1 4.1l-1.4 1.4h-1.8v1.8H7.9V20H6v-2l2.8-2.8ZM13.6 9a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  )
}

function Login({ onSignedIn }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Password is required.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      onSignedIn()
    }
  }

  return (
    <main className="login-page">
      <header className="brand" aria-label="Karnovate branding">
        <div className="brand-badge">
          <ShieldIcon />
        </div>
        <h1>Karnovate</h1>
        <p>Enterprise Suite</p>
      </header>

      <section className="login-card" aria-labelledby="welcome-title">
        <div className="card-head">
          <h2 id="welcome-title">Welcome back</h2>
          <p>Sign in to access your enterprise dashboard</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email Address</label>
          <div className="input-row">
            <span className="input-icon" aria-hidden="true">
              <MailIcon />
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <div className="input-row">
            <span className="input-icon" aria-hidden="true">
              <LockIcon />
            </span>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="icon-button"
              aria-label="Show password"
            >
              <EyeIcon />
            </button>
          </div>
          {errors.password && <p className="field-error">{errors.password}</p>}

          <div className="row-between">
            <label className="remember-wrap">
              <input
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <a href="#" onClick={(event) => event.preventDefault()}>
              Forgot password?
            </a>
          </div>

          <button className="primary-btn" type="submit">
            Sign in to your account &rarr;
          </button>
        </form>

        <div className="divider" role="separator" aria-label="Social login separator">
          <span>Or continue with</span>
        </div>

        <div className="social-actions" aria-label="Social sign in options">
          <button type="button" className="social-btn">
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>
          <button type="button" className="social-btn">
            <MicrosoftIcon />
            <span>Sign in with Microsoft</span>
          </button>
          <button type="button" className="social-btn">
            <KeyIcon />
            <span>Sign in with SAML SSO</span>
          </button>
        </div>

        <p className="card-note">
          <ShieldIcon />
          Protected by enterprise IAM
        </p>
      </section>

      <footer className="page-footer">
        <p>
          Don&apos;t have an account?{' '}
          <a href="#" onClick={(event) => event.preventDefault()}>
            Contact your administrator
          </a>
        </p>
        <nav aria-label="Legal links">
          <a href="#" onClick={(event) => event.preventDefault()}>
            Privacy Policy
          </a>
          <span>&bull;</span>
          <a href="#" onClick={(event) => event.preventDefault()}>
            Terms of Service
          </a>
          <span>&bull;</span>
          <a href="#" onClick={(event) => event.preventDefault()}>
            Support
          </a>
        </nav>
        <p className="copyright">@ 2024 Karnovate. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default Login
