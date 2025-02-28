import Image from "next/image";
import Link from "next/link";


export default function Navbar({image}) {
   
    return (
      

        <header>
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto my-2 px-5 py-[15px] mb-2 sm:space-x-0 space-y-0">

                <div >
                     <Image 
                      src={image} 
                      alt="logo"
                      width={300} 
                      height={200} 
                      style={{ width: "100%", height: "auto" }} 
                       
                    />
                </div>
                <ul className="flex gap-5">
                    <li><Link href="/" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">Home</Link></li>
                    <li><Link href="aboutus" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">About</Link></li>
                    <li><Link href="#contact" className="no-underline text-[17px] text-[black] transition-all duration-[0.3s] ease-[ease-in-out] px-2.5 py-[5px] rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:rounded-[5px]">Contact</Link></li>
                </ul>
               
            </nav>
        </header>
    );
}
