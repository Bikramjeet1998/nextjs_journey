import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();
  
    return {
      props: { products },
    };
  }

  export default function Products({ products }) {
    return (
         <div>
            <div><Navbar/></div>
            <div style={{ padding: '2rem' }}>
      <h1>Products (Fetched from Server)</h1>
      {products.map(product => (
        <div key={product.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '10px',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9'
        }}> 
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ))}
    </div>
       
       <Footer/> 
      </div>
    );
  }