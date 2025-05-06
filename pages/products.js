import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from '@/styles/MyProducts.module.css';


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
      <h1 style={{ marginBottom: '2rem' }}>My Products</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div style={{ fontWeight: 'bold', color: '#0070f3' }}>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
       
       <Footer/> 
      </div>
    );
  }