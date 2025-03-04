import Image from "next/image";
import Link from "next/link";


export default function Contact({style1, style2}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
    };
   
    
    
    return (
        
<section className="flex text-center justify-center px-5 py-10  sm:bg-cover  " style={{ background: style1,}}

 id="contact">
    <div className={style2}>
        <h2 className="py-2 font-bold text-3xl">Contact us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-[15px] max-w-[1400px] mx-auto my-0  md:w-[300px] sm:w-[250px] w-[200px] md:text-[22px] sm:text-[21px] text-[20px]">
            <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required/>
            <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required/>
            <textarea id="message" name="message" placeholder="Message" autoComplete="email" required></textarea>
            <button id="button" type="submit" className=" bg-[#007bff] text-[white] text-center text-base cursor-pointer max-w-[1400px] mx-auto my-0 p-2.5 rounded-[5px] border-[none] hover:bg-[#0056b3] md:w-20 sm:w-[70px] w-[65px] md:text-[20px] sm:text-[18px] text-[14px]">Submit</button>
        </form>
    </div>
</section>
    );
}
