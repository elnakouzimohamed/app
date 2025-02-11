import Image from "next/image";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Welcome from "../components/welcome";

import { Geist, Geist_Mono } from "next/font/google";

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
          <Navbar />
          <Welcome />
          <Services />
      </>
  );
}

