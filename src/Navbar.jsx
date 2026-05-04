function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a5 5 0 0 0-5 5v2.3c0 .9-.3 1.7-.8 2.4L5 14.9V16h14v-1.1l-1.2-1.2c-.5-.7-.8-1.5-.8-2.4V8a5 5 0 0 0-5-5Zm0 18a2.5 2.5 0 0 0 2.4-1.8H9.6A2.5 2.5 0 0 0 12 21Z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.4 9.6 1.4-1.4L12 11.4l3.2-3.2 1.4 1.4-4.6 4.6-4.6-4.6Z" />
    </svg>
  )
}

function Navbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Product Selection</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="#" onClick={(event) => event.preventDefault()}>Home</a>
          <ChevronIcon />
          <span>Products</span>
        </nav>
      </div>

      <div className="topbar-actions">
        <button type="button" className="notification-btn" aria-label="Notifications">
          <BellIcon />
          <span className="notification-badge">3</span>
        </button>
        <button type="button" className="request-btn">
          + Request Access
        </button>
      </div>
    </header>
  )
}

export default Navbar
