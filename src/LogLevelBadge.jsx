function LogLevelBadge({ level }) {
  const getLevelClass = () => {
    switch (level.toUpperCase()) {
      case 'ERROR':
        return 'level-error'
      case 'WARN':
        return 'level-warn'
      case 'INFO':
        return 'level-info'
      case 'DEBUG':
        return 'level-debug'
      default:
        return 'level-info'
    }
  }

  return (
    <span className={`log-level-badge ${getLevelClass()}`}>
      {level.toUpperCase()}
    </span>
  )
}

export default LogLevelBadge
