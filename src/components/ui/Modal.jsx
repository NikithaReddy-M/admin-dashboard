import Badge from './Badge.jsx'
import Avatar from './Avatar.jsx'

export default function Modal({ item, type, onClose }) {
  if (!item) return null

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 16,
    }}>
      <div onClick={e => e.stopPropagation()} className="fade-in" style={{
        background: '#fff', borderRadius: 16, padding: 28,
        width: '100%', maxWidth: 480,
        boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>
            {type === 'user' ? 'User Details' : type === 'order' ? 'Order Details' : 'Task Details'}
          </h2>
          <button onClick={onClose} style={{
            background: '#f3f4f6', border: 'none', borderRadius: 8,
            width: 32, height: 32, cursor: 'pointer', fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280',
          }}>✕</button>
        </div>

        {type === 'user' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, padding: 16, background: '#f9fafb', borderRadius: 12 }}>
              <Avatar name={item.name} size={44} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{item.name}</div>
                <div style={{ color: '#6b7280', fontSize: 13 }}>{item.email}</div>
              </div>
              <Badge label={item.status} />
            </div>
            {[['Role', item.role], ['Joined', item.joined], ['Total Orders', item.orders], ['Total Spend', item.spend]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{k}</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {type === 'order' && (
          <div>
            <div style={{ padding: 16, background: '#f9fafb', borderRadius: 12, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#111827' }}>{item.id}</div>
              <div style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>{item.product}</div>
            </div>
            {[['Customer', item.user], ['Date', item.date], ['Amount', item.amount], ['Status', <Badge key="s" label={item.status} />]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{k}</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {type === 'task' && (
          <div>
            <div style={{ padding: 16, background: '#f9fafb', borderRadius: 12, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{item.title}</div>
            </div>
            {[['Priority', <Badge key="p" label={item.priority} />], ['Due Date', item.due], ['Status', <Badge key="s" label={item.status} />]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{k}</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
