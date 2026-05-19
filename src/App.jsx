import { useState } from 'react'
import LoginPage from './components/pages/LoginPage.jsx'
import Sidebar from './components/layout/Sidebar.jsx'
import Topbar from './components/layout/Topbar.jsx'
import DashboardPage from './components/pages/DashboardPage.jsx'
import { UsersPage, OrdersPage, TasksPage } from './components/pages/DataPages.jsx'

export default function App() {
  const [loggedIn,    setLoggedIn]    = useState(false)
  const [page,        setPage]        = useState('dashboard')
  const [collapsed,   setCollapsed]   = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />

  const PAGES = {
    dashboard: <DashboardPage setPage={setPage} />,
    users:     <UsersPage />,
    orders:    <OrdersPage />,
    tasks:     <TasksPage />,
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        page={page} setPage={setPage}
        collapsed={collapsed} setCollapsed={setCollapsed}
        mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          page={page} onLogout={() => setLoggedIn(false)}
          setCollapsed={setCollapsed} setMobileOpen={setMobileOpen}
        />
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
          {PAGES[page]}
        </main>
      </div>
    </div>
  )
}
