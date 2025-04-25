import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <Navbar/>
            </div>
            <p>This is the about page</p>   
            <Footer/>     
        </div>
       
    );
}