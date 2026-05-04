import TokenCard from './TokenCard'

function ApiTokensCard({ tokens = [], onRevokeToken = () => {} }) {
  return (
    <div className="api-tokens-card">
      <div className="card-header">
        <div className="card-title-section">
          <h2 className="card-title">API Tokens</h2>
          <p className="card-subtitle">Manage OAuth tokens and API access credentials</p>
        </div>
      </div>

      <div className="tokens-list">
        {tokens.map((token, idx) => (
          <TokenCard
            key={idx}
            {...token}
            onRevoke={() => onRevokeToken(token.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ApiTokensCard
