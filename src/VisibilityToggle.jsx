import { FiEye, FiEyeOff } from 'react-icons/fi'

function VisibilityToggle({ isVisible, onToggle }) {
  return (
    <button
      className="visibility-toggle"
      onClick={onToggle}
      title={isVisible ? 'Hide' : 'Show'}
      aria-label={isVisible ? 'Hide value' : 'Show value'}
    >
      {isVisible ? <FiEyeOff size={14} /> : <FiEye size={14} />}
    </button>
  )
}

export default VisibilityToggle
