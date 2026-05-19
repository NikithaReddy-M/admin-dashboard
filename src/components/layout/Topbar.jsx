import Avatar from '../ui/Avatar.jsx'

const TITLES = { dashboard: 'Dashboard', users: 'Users', orders: 'Orders', tasks: 'Tasks' }

export default function Topbar({ page, onLogout, setCollapsed, setMobileOpen }) {
  return (
    <header style={{
      background: '#fff', borderBottom: '1px solid #f3f4f6',
      padding: '0 20px', height: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexShrink: 0, gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Desktop: collapse toggle */}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="desktop-only"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, padding: 4, color: '#6b7280' }}
        >☰</button>
        {/* Mobile: open drawer */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="mobile-only"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, padding: 4, color: '#6b7280' }}
        >☰</button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>{TITLES[page]}</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ textAlign: 'right' }} className="hide-mobile">
          <div style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Admin User</div>
          <div style={{ fontSize: 11, color: '#9ca3af' }}>admin@nexatech.io</div>
        </div>
        <Avatar name="Admin User" />
        <button
          onClick={onLogout}
          style={{
            background: '#fef2f2', border: 'none', color: '#b91c1c',
            borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 13, fontWeight: 600,
          }}
        >Logout</button>
      </div>
    </header>
  )
}
