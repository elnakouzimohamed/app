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
          <Navbar/>
          <Welcome  title="Welcome to our Website" description="Discover more about our products and services" image="url('/background.jpeg')"/>
          
          <Services />
          <Contact style1="repeating-linear-gradient(90deg, #b0dfe5, #b0dfe5 20px, #a9d8df 20px, #a9d8df 40px)" style2=" bg-[rgba(250,246,246,0.7)] p-[50px]"/>
          <Faq/>
          <Footer/>
      </>
  );
}

