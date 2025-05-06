import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
      <h1>Live Users (Fetched from Server)</h1>
      {posts.map(user => (
        <div key={user.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '10px',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9'
        }}>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        </div>
      ))}
    </div>
       <Footer/> 
      </div>
    );
  }
  