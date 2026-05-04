import { FiPlus, FiKey } from 'react-icons/fi'
import ApiKeyItem from './ApiKeyItem'
import { useState } from 'react'

function ApiKeysCard() {
  const [apiKeys, setApiKeys] = useState([
    {
      id: '1',
      title: 'Production API Key',
      createdMeta: 'Created on March 1, 2024 • Last used 2 hours ago',
      key: 'pk_prod_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
      permissions: ['read:products', 'write:orders', 'read:customers']
    },
    {
      id: '2',
      title: 'Analytics API Key',
      createdMeta: 'Created on February 15, 2024 • Last used 1 day ago',
      key: 'ak_prod_7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w',
      permissions: ['read:analytics', 'read:reports']
    }
  ])

  const handleGenerateKey = () => {
    const newKey = {
      id: Date.now().toString(),
      title: `New API Key ${apiKeys.length + 1}`,
      createdMeta: `Created on ${new Date().toLocaleDateString()} • Just now`,
      key: 'pk_new_' + Math.random().toString(36).substr(2, 28),
      permissions: ['read:products', 'read:customers']
    }
    setApiKeys([...apiKeys, newKey])
  }

  const handleDeleteKey = (id) => {
    setApiKeys(apiKeys.filter(key => key.id !== id))
  }

  return (
    <div className="credentials-card">
      <div className="credentials-card-header">
        <h3 className="credentials-card-title">API Keys</h3>
        <button className="btn-generate-key" onClick={handleGenerateKey}>
          <FiPlus size={14} />
          <span>Generate Key</span>
        </button>
      </div>

      <div className="credentials-card-content">
        {apiKeys.length > 0 ? (
          <div className="api-keys-list">
            {apiKeys.map(apiKey => (
              <ApiKeyItem
                key={apiKey.id}
                id={apiKey.id}
                title={apiKey.title}
                createdMeta={apiKey.createdMeta}
                keyValue={apiKey.key}
                permissions={apiKey.permissions}
              />
            ))}
          </div>
        ) : (
          <div className="api-keys-empty">
            <FiKey size={40} />
            <p className="empty-title">No more API keys</p>
            <p className="empty-subtitle">
              Create additional API keys for different services or environments
            </p>
            <button className="btn-generate-new-key" onClick={handleGenerateKey}>
              Generate New Key
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApiKeysCard
