import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import Card from '@/components/card';


export default function Home() {
  return (
    <div>
    <Navbar />
    <h1>Welcome to My Next.js Site</h1>

    <Card 
      title="Learn Next.js"
      description="Next.js is a powerful framework built on top of React."
    />

    <Card 
      title="Why Next.js?"
      description="It offers server-side rendering, static generation, and more!"
    />

    <Card 
      title="Get Started"
      description="Create your first app using create-next-app!"
    />

    <Footer />
  </div>

  );
}
