import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await res.json();
  
    return {
      props: { posts },
    };
  }
  
  export default function LivePosts({ posts }) {
    return (
         <div>
            <div><Navbar/></div>
      <div style={{ padding: '2rem' }}>
        <h1>Live Blog Posts (Server-Side)</h1>
        {posts.map(post => (
          <div key={post.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '1rem'
          }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
       <Footer/> 
      </div>
    );
  }
  