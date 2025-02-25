import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';

import 'swiper/css';

import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import { Navigation, Pagination, Autoplay } from "swiper/modules";
export default () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
    };

    const services = [
            { id: 1, title: "Service 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
            { id: 2, title: "Service 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
            { id: 3, title: "Service 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
        ];
    
  
        const [selectedService, setSelectedService] = useState("");
   
        const filteredServices = selectedService === "" 
            ? services 
            : services.filter(service => service.title === selectedService);
    
        const styl = filteredServices.length === 1 
            ? "md:px-[540px] sm:px-[100px] px-[50px]" 
            : "md:px-[110px] sm:px-[80px] px-[50px]";

            const [openIndexes, setOpenIndexes] = useState([]);

            const toggleAnswer = (index) => {
                if (openIndexes.includes(index)) {
                   
                    setOpenIndexes(openIndexes.filter((i) => i !== index));
                } else {
                
                    setOpenIndexes((prev) => [...prev, index]);
        
                }
            };
        
            const faqItems = [
                {
                    question: "How can I learn a new programming language?",
                    answer: "Learning a new programming language involves studying its syntax, practicing coding, and working on projects to apply your knowledge. Online resources and courses can be helpful."
                },
                {
                    question: "What is version control and why is it important for software development?",
                    answer: "Version control is a system that records changes to a file or set of files over time so you can recall specific versions later. It is important for collaboration and tracking history in software development."
                },
                {
                    question: "What is object-oriented programming (OOP)?",
                    answer: "Object-oriented programming is a programming paradigm based on the concept of objects, which can contain data and methods. It helps in structuring programs in a modular and reusable way."
                }
            ];
        
            const [searchTerm, setSearchTerm] = useState("");
        
            
            const filteredFaqs = faqItems.filter(faq =>
              faq.question.toLowerCase().includes(searchTerm.toLowerCase())
            );
  return (
    <Swiper
    
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20} // Space between slides
    slidesPerView={4} // Show 4 slides at a time
    navigation // Enable navigation arrows
    pagination={{ clickable: true }} // Enable pagination
    autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
  >
    
      <SwiperSlide>
      <section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: "url('/background.jpeg')" }}>
      
      <div className="absolute inset-0 bg-black opacity-20"></div>

   
      <div className="relative text-center max-w-[1400px] mx-auto p-2">
        <h1 className="font-bold sm:text-[32px] text-[24px]">Welcome to Our Website</h1>
        <p className="sm:text-[24px] text-[20px]">Discover our amazing services and products.</p>
      </div>
    </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="gap-5 flex-wrap pt-2 pb-12">
                    <h1 className="text-center font-bold pt-[70px] pb-5 text-[32px]">Check Out Our Services</h1>
                    
                    <div className="flex items-center justify-center text-center">
                        <label className="font-bold sm:text-[24px] text-[20px] my-2">Filter by Service: </label>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                        >
                            <option value="" className="sm:text-[24px] text-[20px]">All</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.title}>{service.title}</option>
                            ))}
                        </select>
                    </div>
        
                    <div className={'flex justify-center max-w-[1400px] mx-auto md:flex-row flex-col md:gap-8 gap-3 py-[20px] ' + styl}>
                        {filteredServices.map(service => (
                            <div key={service.id} className="bg-[white] border text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg border-solid border-[#ddd] md:p-5 sm:p-4 p-2">
                                <Image 
                                    src="/service.jpg" 
                                    alt={service.title} 
                                    width={300} 
                                    height={200} 
                                    style={{ width: "100%", height: "auto" }} 
                                    priority 
                                />
                                <h3 className="font-bold py-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className="flex text-center justify-center px-5 py-10  sm:bg-cover" style={{ background: "repeating-linear-gradient(90deg, #b0dfe5, #b0dfe5 20px, #a9d8df 20px, #a9d8df 40px)",}}

id="contact">
   <div className=" bg-[rgba(250,246,246,0.7)] p-[50px]">
       <h2 className="py-2 font-bold text-3xl">Contact us</h2>
       <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-[15px] max-w-[1400px] mx-auto my-0  md:w-[300px] sm:w-[250px] w-[200px] md:text-[22px] sm:text-[21px] text-[20px]">
           <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required/>
           <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required/>
           <textarea id="message" name="message" placeholder="Message" autoComplete="email" required></textarea>
           <button id="button" type="submit" className=" bg-[#007bff] text-[white] text-center text-base cursor-pointer max-w-[1400px] mx-auto my-0 p-2.5 rounded-[5px] border-[none] hover:bg-[#0056b3] md:w-20 sm:w-[70px] w-[65px] md:text-[20px] sm:text-[18px] text-[14px]">Submit</button>
       </form>
   </div>
</section>
      </SwiperSlide>
      <SwiperSlide>
      <section className="bg-[#f9f9f9] text-left p-12">
            
            <h2 className="text-center text-[32px] font-bold mb-5">Frequently Asked Questions</h2>
            <div className="flex items-center justify-center mx-auto  gap-3 sm:flex-row flex-col sm:text-[22px] text-[18px]">
                <label htmlFor="faqSearch" >Search for Questions:</label>
                <input id="faqSearch" name="faqSearch" type="text" placeholder="Search Faqs..." value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
            </div>
            <div className="mx-auto max-w-[1400px] p-[20px]">
            {filteredFaqs.length >= 1? (filteredFaqs.map((item, index)=>
            (
                <div key={index} className="border overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1)]  mx-auto my-0 rounded-[5px] border-solid border-[#ddd] max-w-[500px] ">
                        <button className="w-full text-left text-base cursor-pointer font-[bold] flex justify-between items-center p-[15px] border-[none] hover:bg-[#f1f1f1]" style={{ background: "white"}} onClick={() => toggleAnswer(index)}>
                            {item.question}
                            <span>{openIndexes.includes(index) ? "−" : "+"}</span>
                        </button>
                        {openIndexes.includes(index) && (
                            <div className="max-h-[200px] opacity-100 p-[15px]">{item.answer}</div>
                        )}    
                </div>
            )
        
        )): <div>
            <p className="flex justify-center">No Questions matched your Search!</p>
        </div>
    
    }
            
                
            </div>
        </section>
    
      </SwiperSlide>
      
    </Swiper>
  );
};