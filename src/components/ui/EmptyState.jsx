export default function EmptyState({ message = 'No results found' }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', color: '#9ca3af' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: '#6b7280' }}>{message}</div>
      <div style={{ fontSize: 13, marginTop: 4 }}>Try adjusting your search or filters</div>
    </div>
  )
}
