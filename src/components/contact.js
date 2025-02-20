import Image from "next/image";
import Link from "next/link";


export default function Contact() {
   
    return (
        
<section className="flex text-center justify-center px-5 py-10 my-1 sm:bg-cover" style={{ background: "repeating-linear-gradient(90deg, #b0dfe5, #b0dfe5 20px, #a9d8df 20px, #a9d8df 40px)",}}

 id="contact">
    <div className="max-w-[1400px] w-[500px] bg-[rgba(250,246,246,0.7)] mx-auto my-0 p-[15px]">
        <h2 className="my-4 font-bold text-3xl">Contact us</h2>
        <form className="flex flex-col gap-[15px] w-96 max-w-[1400px] mx-auto my-0 text-[22px]">
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="w-6/12 bg-[#007bff] text-[white] text-base cursor-pointer max-w-[1400px] mx-auto my-0 p-2.5 rounded-[5px] border-[none] hover:bg-[#0056b3]">Submit</button>
        </form>
    </div>
</section>
    );
}
