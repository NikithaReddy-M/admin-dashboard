import { useState } from 'react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)
  const [showPw, setShowPw]     = useState(false)

  const validate = () => {
    const e = {}
    if (!email)                        e.email    = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email'
    if (!password)                     e.password = 'Password is required'
    else if (password.length < 6)      e.password = 'Minimum 6 characters'
    return e
  }

  const handleSubmit = async () => {
    const errs = validate()
    if (Object.keys(errs).length) return setErrors(errs)
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    onLogin()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 56, height: 56, background: 'rgba(255,255,255,0.15)', borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, margin: '0 auto 16px',
          }}>⚡</div>
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 6px' }}>Admin</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, margin: 0 }}>Sign in to your dashboard</p>
        </div>

        {/* Card */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: '32px 28px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        }}>
          {/* Email */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
              Email address
            </label>
            <input
              type="email" placeholder="admin@enesttech.io"
              value={email}
              onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })) }}
              style={{
                width: '100%', padding: '10px 14px',
                border: `1.5px solid ${errors.email ? '#ef4444' : '#e5e7eb'}`,
                borderRadius: 10, fontSize: 14, outline: 'none',
                boxSizing: 'border-box', color: '#111827',
              }}
            />
            {errors.email && <p style={{ color: '#ef4444', fontSize: 12, margin: '4px 0 0' }}>{errors.email}</p>}
          </div>

          {/* Password */}
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPw ? 'text' : 'password'} placeholder="Enter password"
                value={password}
                onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })) }}
                style={{
                  width: '100%', padding: '10px 40px 10px 14px',
                  border: `1.5px solid ${errors.password ? '#ef4444' : '#e5e7eb'}`,
                  borderRadius: 10, fontSize: 14, outline: 'none',
                  boxSizing: 'border-box', color: '#111827',
                }}
              />
              <button
                onClick={() => setShowPw(v => !v)}
                style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: '#9ca3af',
                }}
              >{showPw ? '🙈' : '👁️'}</button>
            </div>
            {errors.password && <p style={{ color: '#ef4444', fontSize: 12, margin: '4px 0 0' }}>{errors.password}</p>}
          </div>

          <p style={{ fontSize: 12, color: '#9ca3af', margin: '0 0 20px' }}>
            Demo: use any email &amp; password (6+ chars)
          </p>

          <button
            onClick={handleSubmit} disabled={loading}
            style={{
              width: '100%', padding: 12,
              background: loading ? '#a5b4fc' : '#4f46e5',
              color: '#fff', border: 'none', borderRadius: 10,
              fontSize: 15, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background 0.2s',
            }}
          >
            {loading
              ? <><span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} /> Signing in...</>
              : 'Sign In'
            }
          </button>
        </div>
      </div>
    </div>
  )
}
