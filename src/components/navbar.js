import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
   
    return (
      

        <header>
            <nav className="lg: flex justify-between items-center max-w-[1400px] mx-auto my-2 px-5 py-[15px] mb-2 sm:space-x-0 space-y-0 mx-0">

                <div >
                    
                </div>
                <ul className="flex gap-5">
                    <li><Link href="#home" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">Home</Link></li>
                    <li><Link href="#about" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">About</Link></li>
                    <li><Link href="#contact" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">Contact</Link></li>
                </ul>
               
            </nav>
        </header>
    );
}
