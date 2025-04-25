import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2> Welcome to my new Page this is the Home page</h2>

        <Link href="/">
             Home
        </Link>
        <Link href="/about">
        About Me
        </Link>
        <Link href="/contact">
        Contact Me
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
         
      
      
      </footer>
    </div>
  );
}
