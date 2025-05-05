import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default function Contact() {
    return (    
        <div>
           <div><Navbar/></div>
           <h2> This is the contact page</h2>
           <Footer/>
        </div>
    );
}