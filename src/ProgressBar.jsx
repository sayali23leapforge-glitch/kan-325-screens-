function ProgressBar({ value = 0, color = 'green' }) {
  const colorMap = {
    green: '#16A34A',
    blue: '#2563EB',
    yellow: '#CA8A04'
  }

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{
          width: `${value}%`,
          backgroundColor: colorMap[color] || colorMap.green
        }}
      />
    </div>
  )
}

export default ProgressBar
