import Image from "next/image";
import Link from "next/link";
import '../styles/navbar.css';

export default function Navbar() {
    return(
      <header> 
       <nav>
            <div class="logo img">
                <Image src="../logo.svg"/>
            </div>
            <ul>
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    </header>

    );
}