const STATUS_COLORS = {
  Active:       { bg: '#dcfce7', color: '#15803d' },
  Inactive:     { bg: '#f3f4f6', color: '#6b7280' },
  Suspended:    { bg: '#fee2e2', color: '#b91c1c' },
  Completed:    { bg: '#dcfce7', color: '#15803d' },
  Pending:      { bg: '#fef9c3', color: '#a16207' },
  Processing:   { bg: '#dbeafe', color: '#1d4ed8' },
  Refunded:     { bg: '#fce7f3', color: '#be185d' },
  High:         { bg: '#fee2e2', color: '#b91c1c' },
  Medium:       { bg: '#fef9c3', color: '#a16207' },
  Low:          { bg: '#dcfce7', color: '#15803d' },
  'In Progress':{ bg: '#dbeafe', color: '#1d4ed8' },
}

export default function Badge({ label }) {
  const s = STATUS_COLORS[label] || { bg: '#f3f4f6', color: '#374151' }
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: 11, fontWeight: 600,
      padding: '2px 8px', borderRadius: 20,
      whiteSpace: 'nowrap', display: 'inline-block',
    }}>
      {label}
    </span>
  )
}
