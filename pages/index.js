import Card from '@/components/card';


export default function Home() {
  return (
    <div>
        
    
    
        <h1 style={{ marginBottom: '2rem' }}>Welcome to My Next.js Site</h1>
        <p>This is a simple example of a Next.js application.</p>
        <p>Explore the features and learn more about Next.js!</p>

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
    
  </div>

  );
}
