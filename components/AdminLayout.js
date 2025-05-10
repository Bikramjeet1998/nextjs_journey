import Link from 'next/link';
import { FiHome, FiUsers, FiSettings, FiBox, FiDollarSign, FiLogOut } from 'react-icons/fi';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '1.5rem 1rem',
        position: 'fixed',
        height: '100vh',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
      }}>
        {/* Logo Section */}
        <div style={{ 
          padding: '1rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #334155'
        }}>
          <h2 style={{ 
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FiSettings size={24} />
            Admin Panel
          </h2>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <NavItem href="/admin/dashboard" icon={<FiHome />} label="Dashboard" />
            <NavItem href="/admin/users" icon={<FiUsers />} label="Users" />
            <NavItem href="/admin/products" icon={<FiBox />} label="Products" />
            <NavItem href="/admin/orders" icon={<FiDollarSign />} label="Orders" />
            
            {/* Divider */}
            <div style={{ 
              margin: '1rem 0',
              borderTop: '1px solid #334155'
            }} />

            <NavItem href="/" icon={<FiLogOut />} label="Back to Site" />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ 
        marginLeft: '260px',
        flex: 1,
        padding: '2rem',
        minHeight: '100vh'
      }}>
        {/* Content Header */}
        <header style={{
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{ 
              margin: 0,
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#1e293b'
            }}>Admin Dashboard</h1>
            
            {/* User Profile */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#475569' }}>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {children}
        </div>
      </main>
    </div>
  );
}

// Reusable Nav Item Component
const NavItem = ({ href, icon, label }) => (
  <li>
    <Link href={href} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#94a3b8',
      textDecoration: 'none',
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      transition: 'all 0.2s',
      ':hover': {
        backgroundColor: '#334155',
        color: 'white'
      }
    }}>
      {icon}
      <span style={{ fontSize: '0.95rem' }}>{label}</span>
    </Link>
  </li>
);