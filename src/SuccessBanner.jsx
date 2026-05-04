import './create-application-final-review.css'

function SuccessBanner() {
  return (
    <div className="success-banner">
      <div className="success-banner-icon">✓</div>
      <div className="success-banner-content">
        <h3 className="success-banner-title">Ready to Create</h3>
        <p className="success-banner-description">
          Your application is configured and ready to be created. Once created, you'll be redirected to the application details page where you can download configuration files and view integration guides.
        </p>
      </div>
    </div>
  )
}

export default SuccessBanner
