import { useState } from 'react'
import EmptyState from './EmptyState.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import { useLoading } from '../../hooks/useLoading.js'

export default function DataTable({ columns, data, onView, emptyMessage = 'No data found' }) {
  const loading = useLoading(600)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filterKey = columns.find(c => c.filterable)?.key
  const filterOptions = filterKey ? ['All', ...new Set(data.map(r => r[filterKey]))] : []

  const filtered = data.filter(row => {
    const matchSearch = columns.some(c =>
      String(row[c.key]).toLowerCase().includes(search.toLowerCase())
    )
    const matchFilter = filter === 'All' || row[filterKey] === filter
    return matchSearch && matchFilter
  })

  if (loading) return <LoadingSpinner />

  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #f3f4f6', overflow: 'hidden' }}>
      {/* Toolbar */}
      <div style={{
        padding: '16px 20px', borderBottom: '1px solid #f3f4f6',
        display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center',
      }}>
        <div style={{ position: 'relative', flex: '1 1 200px' }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: 14 }}>🔍</span>
          <input
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '8px 12px 8px 32px',
              border: '1.5px solid #e5e7eb', borderRadius: 8,
              fontSize: 13, outline: 'none', boxSizing: 'border-box', color: '#111827',
            }}
          />
        </div>
        {filterOptions.length > 0 && (
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{
              padding: '8px 12px', border: '1.5px solid #e5e7eb', borderRadius: 8,
              fontSize: 13, color: '#374151', background: '#fff', cursor: 'pointer', outline: 'none',
            }}
          >
            {filterOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        )}
        <span style={{ fontSize: 13, color: '#9ca3af', marginLeft: 'auto' }}>
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              {columns.map(c => (
                <th key={c.key} style={{
                  padding: '10px 16px', textAlign: 'left',
                  fontSize: 12, fontWeight: 700, color: '#6b7280',
                  textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap',
                }}>{c.label}</th>
              ))}
              <th style={{
                padding: '10px 16px', textAlign: 'right',
                fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase',
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0
              ? (
                <tr>
                  <td colSpan={columns.length + 1}>
                    <EmptyState message={emptyMessage} />
                  </td>
                </tr>
              )
              : filtered.map((row, i) => (
                <tr
                  key={i}
                  style={{ borderTop: '1px solid #f3f4f6', transition: 'background 0.1s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                >
                  {columns.map(c => (
                    <td key={c.key} style={{ padding: '12px 16px', fontSize: 13, color: '#374151', whiteSpace: 'nowrap' }}>
                      {c.render ? c.render(row[c.key], row) : row[c.key]}
                    </td>
                  ))}
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => onView(row)}
                      style={{
                        background: '#f5f3ff', border: 'none', color: '#4f46e5',
                        borderRadius: 6, padding: '5px 12px', cursor: 'pointer',
                        fontSize: 12, fontWeight: 600,
                      }}
                    >View Details</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
