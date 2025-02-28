import "@/styles/globals.css";
import tailwindConfig from "../../tailwind.config";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";


export default function App({ Component, pageProps }) {
  
  return (
    <>
    <Navbar/>
  <Welcome title="Welcome to our Website" description="Discover more about our product and services"></Welcome>
  <Services></Services>

<Contact/>

<Faq/>



  
 <Footer/>
 </>


  )
}
