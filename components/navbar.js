import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 30px',
      backgroundColor: '#f8f9fa',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo */}
      <div style={{ position: 'relative', width: '120px', height: '60px' }}>
        <Image
          src="/logo.jpeg"
          alt="Logo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Navigation Links */}
      <ul style={{
        display: 'flex',
        gap: '20px',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link style={linkStyle} href="/">Home</Link></li>
        <li><Link style={linkStyle} href="/about">About</Link></li>
        <li><Link style={linkStyle} href="/posts">Posts</Link></li>
        <li><Link style={linkStyle} href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

// Link styling (can be extracted to CSS if desired)
const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  padding: '8px 12px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  cursor: 'pointer',
  fontSize: '16px',
};

