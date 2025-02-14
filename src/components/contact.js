import Image from "next/image";
import Link from "next/link";


export default function Contact() {
   
    return (
        
<section class="contact" id="contact">
    <div class="contact-container">
        <h2>Contact us</h2>
        <form>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>
    );
}
