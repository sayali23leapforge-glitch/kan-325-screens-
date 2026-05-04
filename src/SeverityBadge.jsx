function SeverityBadge({ severity }) {
  const severityConfig = {
    Info: {
      bgColor: '#DBEAFE',
      textColor: '#1E40AF'
    },
    Warning: {
      bgColor: '#FEF3C7',
      textColor: '#92400E'
    },
    Critical: {
      bgColor: '#FECACA',
      textColor: '#9F1239'
    }
  }

  const config = severityConfig[severity] || severityConfig.Info

  return (
    <span 
      className="severity-badge"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor
      }}
    >
      {severity}
    </span>
  )
}

export default SeverityBadge
