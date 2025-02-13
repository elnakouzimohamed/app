import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
   
    return (
        <header> 
            <nav className="navbar">
                <div className="logo">
                    <Image src="/logo.jpg" alt="Logo" width={100} height={50} />
                </div>
                <ul className="navLinks">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
