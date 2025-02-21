import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
   
    return (
      

        <header>
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto my-2 px-5 py-[15px] mb-2 sm:space-x-0 space-y-0">

                <div >
                     <Image 
                      src="/logo.jpg" 
                      alt="logo"
                      width={300} 
                      height={200} 
                      style={{ width: "100%", height: "auto" }} 
                       
                    />
                </div>
                <ul className="flex gap-5">
                    <div className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about" >About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    </div>
                </ul>
               
            </nav>
        </header>
    );
}
