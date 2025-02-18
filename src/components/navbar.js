import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
   
    return (
      

        <header className="bg-white shadow-md">
            <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">

                <div >
                    
                </div>
                <ul className="flex space-x-6 text-gray-800 font-medium">
                    <li><Link href="#home" className="hover:text-blue-500">Home</Link></li>
                    <li><Link href="#about" className="hover:text-blue-500">About</Link></li>
                    <li><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
               
            </nav>
        </header>
    );
}
