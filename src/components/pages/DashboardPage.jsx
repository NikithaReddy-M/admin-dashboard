import Badge from '../ui/Badge.jsx'
import LoadingSpinner from '../ui/LoadingSpinner.jsx'
import { useLoading } from '../../hooks/useLoading.js'
import { STATS, ORDERS, TASKS } from '../../data/dummyData.js'

export default function DashboardPage({ setPage }) {
  const loading = useLoading(800)
  if (loading) return <LoadingSpinner />

  return (
    <div className="fade-in">
      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
        {STATS.map(s => (
          <div key={s.label} style={{
            background: '#fff', borderRadius: 14, padding: 20,
            border: '1px solid #f3f4f6', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ margin: '0 0 6px', fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{s.label}</p>
                <p style={{ margin: '0 0 8px', fontSize: 26, fontWeight: 800, color: '#111827' }}>{s.value}</p>
                <span style={{
                  fontSize: 12, fontWeight: 600,
                  color: s.trend === 'up' ? '#15803d' : '#b91c1c',
                  background: s.trend === 'up' ? '#dcfce7' : '#fee2e2',
                  padding: '2px 8px', borderRadius: 20,
                }}>{s.change} vs last month</span>
              </div>
              <span style={{ fontSize: 28 }}>{s.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        {/* Recent Orders */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 20, border: '1px solid #f3f4f6' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#111827' }}>Recent Orders</h3>
          {ORDERS.slice(0, 5).map(o => (
            <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f9fafb' }}>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111827' }}>{o.id}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{o.user}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, color: '#111827' }}>{o.amount}</p>
                <Badge label={o.status} />
              </div>
            </div>
          ))}
          <button
            onClick={() => setPage('orders')}
            style={{ marginTop: 14, width: '100%', padding: 8, background: '#f5f3ff', border: 'none', color: '#4f46e5', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}
          >View All Orders →</button>
        </div>

        {/* Pending Tasks */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 20, border: '1px solid #f3f4f6' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#111827' }}>Pending Tasks</h3>
          {TASKS.filter(t => t.status === 'Pending').map(t => (
            <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f9fafb' }}>
              <div style={{ flex: 1, marginRight: 12 }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111827' }}>{t.title}</p>
                <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9ca3af' }}>Due {t.due}</p>
              </div>
              <Badge label={t.priority} />
            </div>
          ))}
          <button
            onClick={() => setPage('tasks')}
            style={{ marginTop: 14, width: '100%', padding: 8, background: '#f5f3ff', border: 'none', color: '#4f46e5', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}
          >View All Tasks →</button>
        </div>
      </div>
    </div>
  )
}
