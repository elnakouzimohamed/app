import Image from "next/image";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Welcome from "../components/welcome";
import Contact from "../components/contact";
import { Geist, Geist_Mono } from "next/font/google";
import Faq from "../components/faq";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
      <>
          <Navbar image="/logo.jpg"/>
          <Welcome  title="Welcome to our Website" description="Discover more about our products and services"/>
          
          <Services />
          <Contact/>
          <Faq/>
          <Footer/>
      </>
  );
}

