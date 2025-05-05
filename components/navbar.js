import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
           <Image 
            src="/logo.jpeg"
            alt="Responsive Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
    </div>
      <Link href="/">Home</Link><br></br>
      <Link href="/about">About</Link><br></br>
      <Link href="/contact">Contact</Link>
    </nav>
    );
}