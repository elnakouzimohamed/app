import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
   
    return (
        <header> 
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/logo.jpg" alt="Logo" width={100} height={50} />
                </div>
                <ul className={styles.navLinks}>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
