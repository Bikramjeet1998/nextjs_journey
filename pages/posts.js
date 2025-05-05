import posts from '@/data/posts';
import Navbar from '@/components/navbar';
// import posts from data/posts.js ;

export async function getStaticProps() {
  return {
    props: {
      posts
    }
  };
}

export default function Posts({ posts }) {
  return (
    <div>
    <div><Navbar/></div>
    <div style={{ padding: '5rem' }}>
      
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '10px',
          marginBottom: '1rem'
        }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
