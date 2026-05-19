export default function LoadingSpinner({ height = 200 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        border: '3px solid #e5e7eb', borderTopColor: '#4f46e5',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  )
}
