
import Layout from "@/components/Layout";
export default function Contact() {
    return (    
        <div>
           <Layout>
           <h2> This is the contact page</h2>
              <div style={{ padding: '2rem' }}>
                 <h1 style={{ marginBottom: '2rem' }}>Contact Us</h1>
                 <p>If you have any questions, feel free to reach out!</p>
                 <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Your Email" required />
                      <textarea placeholder="Your Message" required></textarea>
                      <button type="submit">Send Message</button>
                 </form>
                </div>
        
           </Layout>
        </div>
    );
}