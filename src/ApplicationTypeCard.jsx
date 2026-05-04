import { FiGlobe, FiMonitor, FiSmartphone, FiServer } from 'react-icons/fi'
import './create-application.css'

function ApplicationTypeCard({ type, isSelected, onSelect }) {
  const typeConfig = {
    spa: {
      icon: FiGlobe,
      title: 'SPA',
      subtitle: 'Single Page Applications (React, Vue, Angular)',
      color: '#3B82F6'
    },
    web: {
      icon: FiMonitor,
      title: 'Web',
      subtitle: 'Traditional web applications with server-side rendering',
      color: '#10B981'
    },
    native: {
      icon: FiSmartphone,
      title: 'Native',
      subtitle: 'Mobile and desktop applications',
      color: '#A855F7'
    },
    m2m: {
      icon: FiServer,
      title: 'Machine to Machine',
      subtitle: 'API services and backend applications',
      color: '#F97316'
    }
  }

  const config = typeConfig[type]
  const Icon = config.icon

  const bgColors = {
    spa: '#DBEAFE',
    web: '#D1FAE5',
    native: '#E9D5FF',
    m2m: '#FED7AA'
  }

  return (
    <button
      className={`app-type-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(type)}
      type="button"
      aria-pressed={isSelected}
    >
      <div className="app-type-icon-box" style={{ backgroundColor: bgColors[type] }}>
        <Icon size={24} color={config.color} />
      </div>
      <div className="app-type-content">
        <div className="app-type-title">{config.title}</div>
        <div className="app-type-subtitle">{config.subtitle}</div>
      </div>
    </button>
  )
}

export default ApplicationTypeCard
