import { useEffect } from 'react'

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'users',     label: 'Users',     icon: '👥' },
  { id: 'orders',    label: 'Orders',    icon: '📦' },
  { id: 'tasks',     label: 'Tasks',     icon: '📋' },
]

export default function Sidebar({ page, setPage, collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  // close mobile drawer on page change
  useEffect(() => { setMobileOpen(false) }, [page])

  const SidebarContent = (
    <aside style={{
      width: 220, background: '#1e1b4b',
      display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      <div style={{
        padding: '20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 32, height: 32, background: '#4f46e5', borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, flexShrink: 0,
        }}>⚡</div>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>NexaAdmin</span>
      </div>

      <nav style={{ flex: 1, padding: '12px 8px' }}>
        {NAV.map(item => (
          <button key={item.id} onClick={() => setPage(item.id)} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 12px', borderRadius: 10,
            background: page === item.id ? 'rgba(79,70,229,0.35)' : 'transparent',
            border: 'none', cursor: 'pointer', marginBottom: 4,
            color: page === item.id ? '#a5b4fc' : 'rgba(255,255,255,0.6)',
            fontWeight: page === item.id ? 700 : 400, fontSize: 14,
            transition: 'all 0.15s', textAlign: 'left',
          }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: '12px 8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button onClick={() => setCollapsed(c => !c)} style={{
          width: '100%', padding: '10px 12px', background: 'transparent',
          border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)',
          display: 'flex', alignItems: 'center', gap: 10, borderRadius: 10, fontSize: 14,
        }}>
          <span style={{ fontSize: 18 }}>←</span>
          Collapse
        </button>
      </div>
    </aside>
  )

  return (
    <>
      {/* Desktop: collapsible sidebar */}
      <div className="desktop-sidebar" style={{
        width: collapsed ? 64 : 220, flexShrink: 0,
        transition: 'width 0.25s', overflow: 'hidden',
        background: '#1e1b4b',
      }}>
        {collapsed
          ? (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1e1b4b' }}>
              <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 32, height: 32, background: '#4f46e5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>⚡</div>
              </div>
              <nav style={{ flex: 1, padding: '12px 8px' }}>
                {NAV.map(item => (
                  <button key={item.id} onClick={() => setPage(item.id)} style={{
                    width: '100%', padding: '10px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', marginBottom: 4,
                    background: page === item.id ? 'rgba(79,70,229,0.35)' : 'transparent',
                    display: 'flex', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                  </button>
                ))}
              </nav>
              <div style={{ padding: '12px 8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button onClick={() => setCollapsed(false)} style={{ width: '100%', padding: '10px 16px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>→</button>
              </div>
            </div>
          )
          : SidebarContent
        }
      </div>

      {/* Mobile: overlay drawer */}
      {mobileOpen && (
        <div className="mobile-sidebar">
          {/* Backdrop */}
          <div onClick={() => setMobileOpen(false)} style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200,
          }} />
          {/* Drawer */}
          <div style={{
            position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 201, width: 220,
          }}>
            {SidebarContent}
          </div>
        </div>
      )}
    </>
  )
}
