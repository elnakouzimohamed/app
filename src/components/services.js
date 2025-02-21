import Image from "next/image";
import { useState } from "react";

const Services = () => {

      
    const services = [
        { id: 1, title: "Service 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 2, title: "Service 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 3, title: "Service 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
    ];
        const [selectedService, setSelectedService] = useState('');
      
       
        const filteredServices = selectedService === "All"
    ? services
    : services.filter(service => service.title === selectedService);
  
   

    return (
        <section className=" gap-5 flex-wrap pt-2 pb-12">
            <h1 className="text-center font-bold  pt-[70px] pb-5 text-[32px]" >Check Out Our Services</h1>
            <div className="flex items-center justify-center text-center ">
            <label className="font-bold sm:text-[24px] text-[20px]" >Filter by Service: </label>
      <select
        
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
      >
        <option value="All" className="sm:text-[24px] text-[20px]">All</option>
        {services.map((service) =>( 
                <option key={service.id} value={service.title}>{service.title}</option>
        ))}
        
       
      </select>
      </div>
             <div className=" flex items-center justify-center mx-auto my-auto md:flex-row flex-col md:gap-8 gap-3 py-[20px] md:px-[110px] sm:px-[80px] px-[50px] ">
             {filteredServices.map(service => (
                 <div key={service.id} className="bg-[white] padd border text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]  rounded-lg border-solid border-[#ddd] md:p-5 sm:p-4 p-2">
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
    );
};

export default Services;
