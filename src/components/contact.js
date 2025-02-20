import Image from "next/image";
import Link from "next/link";


export default function Contact() {
   
    return (
        
<section className="flex text-center justify-center px-5 py-10 my-1 sm:bg-cover" style={{ background: "repeating-linear-gradient(90deg, #b0dfe5, #b0dfe5 20px, #a9d8df 20px, #a9d8df 40px)",}}

 id="contact">
    <div className="lg:max-w-[1400px] bg-[rgba(250,246,246,0.7)] mx-auto my-0 p-[15px] md:w-[500px] sm:w-[300px] w-[200px] ">
        <h2 className="my-4 font-bold text-3xl">Contact us</h2>
        <form className="flex flex-col gap-[15px] max-w-[1400px] mx-auto my-0  md:w-[300px] sm:w-[250px] w-1/2 md:text-[22px] sm:text-[21px] text-[20px]">
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className=" bg-[#007bff] text-[white] text-center text-base cursor-pointer max-w-[1400px] mx-auto my-0 p-2.5 rounded-[5px] border-[none] hover:bg-[#0056b3] md:w-20 sm:w-[70px] w-[60px] md:text-[20px] sm:text-[18px] text-[15px]">Submit</button>
        </form>
    </div>
</section>
    );
}
