import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <header> 
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/logo.svg" alt="Logo" width={100} height={50} />
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
