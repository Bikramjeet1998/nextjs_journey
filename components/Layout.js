import Navbar from './navbar';

import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />

      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
