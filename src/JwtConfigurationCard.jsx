import CopyButton from './CopyButton'

function JwtConfigurationCard() {
  const signingAlgorithm = 'RS256 (RSA Signature with SHA-256)'
  const publicKeyJwk = `{
  "kty": "RSA",
  "use": "sig",
  "alg": "RS256",
  "n": "xjlCRBqkQjn...",
  "e": "AQAB"
}`
  const jwksUri = 'https://auth.karnovate.com/.well-known/jwks.json'

  return (
    <div className="credentials-card">
      <h3 className="credentials-card-title">JWT Configuration</h3>

      <div className="credentials-card-content">
        {/* Signing Algorithm */}
        <div className="jwt-field">
          <label className="jwt-label">Signing Algorithm</label>
          <input
            type="text"
            className="jwt-input"
            value={signingAlgorithm}
            readOnly
          />
        </div>

        {/* Public Key JWK */}
        <div className="jwt-field">
          <label className="jwt-label">Public Key (JWK)</label>
          <div className="jwt-code-wrapper">
            <pre className="jwt-code">{publicKeyJwk}</pre>
            <CopyButton value={publicKeyJwk} label="Copy" />
          </div>
        </div>

        {/* JWKS URI */}
        <div className="jwt-field">
          <label className="jwt-label">JWKS URI</label>
          <div className="jwt-input-group">
            <input
              type="text"
              className="jwt-input"
              value={jwksUri}
              readOnly
            />
            <CopyButton value={jwksUri} label="Copy" />
          </div>
        </div>

        {/* Token Lifetimes */}
        <div className="jwt-lifetimes">
          <div className="jwt-lifetime-item">
            <label className="jwt-label">Access Token Lifetime</label>
            <input
              type="text"
              className="jwt-input"
              value="1 hour"
              readOnly
            />
          </div>
          <div className="jwt-lifetime-item">
            <label className="jwt-label">Refresh Token Lifetime</label>
            <input
              type="text"
              className="jwt-input"
              value="30 days"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JwtConfigurationCard
