import BrandingUploadCard from './BrandingUploadCard'
import ColorSchemeCard from './ColorSchemeCard'
import TypographyCard from './TypographyCard'
import LoginCustomizationCard from './LoginCustomizationCard'
import EmailTemplatesCard from './EmailTemplatesCard'
import LivePreviewCard from './LivePreviewCard'
import BrandingTipsCard from './BrandingTipsCard'
import './application-branding.css'

function ApplicationBrandingPage() {
  const handleResetToDefault = () => {
    if (confirm('Are you sure you want to reset all branding to default?')) {
      console.log('Reset to default')
    }
  }

  const handleSaveDraft = () => {
    console.log('Save as draft')
  }

  const handleSaveChanges = () => {
    console.log('Save changes')
  }

  return (
    <div className="branding-content">
      <div className="branding-grid">
        {/* Left Column */}
        <div className="branding-left-column">
          <BrandingUploadCard
            title="Logo & Icon"
            labels={[
              {
                id: 'logo',
                name: 'Application Logo',
                helper: 'PNG or SVG, max 2MB',
                buttonText: 'Upload Logo',
                class: 'logo-placeholder'
              },
              {
                id: 'favicon',
                name: 'Favicon',
                helper: 'ICO or PNG, 32×32px',
                buttonText: 'Upload Icon',
                class: 'favicon-placeholder'
              }
            ]}
            maxSize={2 * 1024 * 1024}
            formats={['.png', '.svg', '.ico']}
          />

          <ColorSchemeCard />

          <TypographyCard />

          <LoginCustomizationCard />

          <EmailTemplatesCard />
        </div>

        {/* Right Column */}
        <div className="branding-right-column">
          <LivePreviewCard />
          <BrandingTipsCard />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="branding-footer">
        <button className="btn-reset" onClick={handleResetToDefault}>
          Reset to Default
        </button>
        <button className="btn-draft" onClick={handleSaveDraft}>
          Save as Draft
        </button>
        <button className="btn-save" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default ApplicationBrandingPage
