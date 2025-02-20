import Image from "next/image";


const Services = () => {
    const services = [
        { id: 1, title: "Service 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 2, title: "Service 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
        { id: 3, title: "Service 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
    ];
   

    return (
        <section className="flex justify-center gap-5 mx-auto my-0 flex-wrap pb-3">
            <h1 className="text-center font-bold text-[32px] pt-[70px] pb-5 max-w-7xl mx-auto my-0" >Check Out Our Services</h1>
            <div className="gap-5 flex items-center mx-auto my-0 sm:flex-row flex-col  ">
                {services.map(service => (
                    <div key={service.id} className="bg-[white] border w-[400px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-5 rounded-lg border-solid border-[#ddd] sm:gap-5 flex-col items-center mx-auto my-0 sm:w-[250px] w-3/4">
                      <Image 
  src="/service.jpg" 
  alt={service.title} 
  width={300} 
  height={200} 
  style={{ width: "100%", height: "auto" }} 
  priority 
/>
                        <h3 className="font-bold">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
