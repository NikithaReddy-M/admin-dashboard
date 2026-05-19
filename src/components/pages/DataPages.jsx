import { useState } from 'react'
import DataTable from '../ui/DataTable.jsx'
import Modal from '../ui/Modal.jsx'
import Badge from '../ui/Badge.jsx'
import Avatar from '../ui/Avatar.jsx'
import { USERS, ORDERS, TASKS } from '../../data/dummyData.js'

export function UsersPage() {
  const [selected, setSelected] = useState(null)
  const columns = [
    {
      key: 'name', label: 'Name',
      render: (v, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name={v} />
          <div>
            <div style={{ fontWeight: 600, color: '#111827' }}>{v}</div>
            <div style={{ fontSize: 12, color: '#9ca3af' }}>{row.email}</div>
          </div>
        </div>
      ),
    },
    { key: 'role',   label: 'Role',   filterable: true },
    { key: 'status', label: 'Status', render: v => <Badge label={v} /> },
    { key: 'joined', label: 'Joined' },
    { key: 'orders', label: 'Orders' },
    { key: 'spend',  label: 'Spend'  },
  ]
  return (
    <>
      <DataTable columns={columns} data={USERS} onView={setSelected} emptyMessage="No users found" />
      <Modal item={selected} type="user" onClose={() => setSelected(null)} />
    </>
  )
}

export function OrdersPage() {
  const [selected, setSelected] = useState(null)
  const columns = [
    { key: 'id',      label: 'Order ID', render: v => <span style={{ fontWeight: 700, color: '#4f46e5' }}>{v}</span> },
    { key: 'user',    label: 'Customer' },
    { key: 'product', label: 'Product'  },
    { key: 'date',    label: 'Date'     },
    { key: 'amount',  label: 'Amount',  render: v => <span style={{ fontWeight: 700 }}>{v}</span> },
    { key: 'status',  label: 'Status',  filterable: true, render: v => <Badge label={v} /> },
  ]
  return (
    <>
      <DataTable columns={columns} data={ORDERS} onView={setSelected} emptyMessage="No orders found" />
      <Modal item={selected} type="order" onClose={() => setSelected(null)} />
    </>
  )
}

export function TasksPage() {
  const [selected, setSelected] = useState(null)
  const columns = [
    { key: 'id',       label: '#' },
    { key: 'title',    label: 'Task',     render: v => <span style={{ fontWeight: 500 }}>{v}</span> },
    { key: 'priority', label: 'Priority', filterable: true, render: v => <Badge label={v} /> },
    { key: 'due',      label: 'Due Date' },
    { key: 'status',   label: 'Status',   render: v => <Badge label={v} /> },
  ]
  return (
    <>
      <DataTable columns={columns} data={TASKS} onView={setSelected} emptyMessage="No tasks found" />
      <Modal item={selected} type="task" onClose={() => setSelected(null)} />
    </>
  )
}
