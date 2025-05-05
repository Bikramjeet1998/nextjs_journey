import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/logo.jpeg" alt="Logo" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Hamburger toggle */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><Link className={styles.link} href="/">Home</Link></li>
        <li><Link className={styles.link} href="/about">About</Link></li>
        <li><Link className={styles.link} href="/posts">Posts</Link></li>
        <li><Link className={styles.link} href="/live-users">Live-Posts</Link></li>
        <li><Link className={styles.link} href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
