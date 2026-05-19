const COLORS = ['#4f46e5','#0891b2','#059669','#d97706','#db2777','#7c3aed']

export default function Avatar({ name, size = 32 }) {
  const initials = name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
  const bg = COLORS[name.charCodeAt(0) % COLORS.length]
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: size * 0.375, fontWeight: 700, flexShrink: 0,
    }}>
      {initials}
    </div>
  )
}
