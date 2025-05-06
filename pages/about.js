import Layout from "@/components/Layout";



export default function About() {
    return (
        <div>
            <Layout>
            <p>This is the about page</p>   
            <div style={{ padding: '2rem' }}>
                <h1 style={{ marginBottom: '2rem' }}>About Us</h1>
                <p>We are a company dedicated to providing the best products and services.</p>
                <p>Our mission is to make your life easier and more enjoyable.</p>
                <p>Contact us for more information!</p>
            </div>
         </Layout>      
        </div>
       
    );
}