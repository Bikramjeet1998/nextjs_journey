import Link from 'next/link';
export default function Navbar() {
    return (
        <nav>
      <Link href="/">Home</Link><br></br>
      <Link href="/about">About</Link><br></br>
      <Link href="/contact">Contact</Link>
    </nav>
    );
}