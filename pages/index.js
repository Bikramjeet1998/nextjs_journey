import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2> Welcome to my new Page this is the Home page</h2>
        <Navbar/>
        
      </main>
         <Footer/>
    </div>
  );
}
