import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter();
  const [page, setPage] = useState(""); 
  const [selectedService, setSelectedService] = useState("");

  
  useEffect(() => {
    if (router.isReady) {
      setPage(router.query.page || ""); 
      console.log("Current Page:", router.query.page); 
    }
  }, [router.isReady, router.query.page]);

  const services = [
    { id: 1, title: "Service 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
    { id: 2, title: "Service 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
    { id: 3, title: "Service 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
  ];

  const services2 = [
    { id: 4, title: "Service 04", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
    { id: 5, title: "Service 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" },
    { id: 6, title: "Service 06", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!" }
  ];

  // Filter services based on selection
  const filteredServices = selectedService
    ? services.filter(service => service.title === selectedService)
    : services;

  const filteredServices2 = selectedService
    ? services2.filter(service => service.title === selectedService)
    : services2;

  const styl = filteredServices.length === 1
    ? "md:px-[540px] sm:px-[100px] px-[50px]"
    : "md:px-[110px] sm:px-[80px] px-[50px]";

  // Render based on `page` value
  const content = page === "aboutus" ? (
    <>
      <div className="flex items-center justify-center text-center">
        <label className="font-bold sm:text-[24px] text-[20px] my-2">Filter by Service: </label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="" className="sm:text-[24px] text-[20px]">All</option>
          {services2.map(service => (
            <option key={service.id} value={service.title}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className={`flex justify-center max-w-[1400px] mx-auto md:flex-row flex-col md:gap-8 gap-3 py-[20px] ${styl}`}>
        {filteredServices2.map(service => (
          <div key={service.id} className="bg-white border text-center shadow-md rounded-lg border-solid border-gray-300 md:p-5 sm:p-4 p-2">
            <Image src="/service.jpg" alt={service.title} width={300} height={200} style={{ width: "100%", height: "auto" }} priority />
            <h3 className="font-bold py-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center justify-center text-center">
        <label className="font-bold sm:text-[24px] text-[20px] my-2">Filter by Service: </label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="" className="sm:text-[24px] text-[20px]">All</option>
          {services.map(service => (
            <option key={service.id} value={service.title}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className={`flex justify-center max-w-[1400px] mx-auto md:flex-row flex-col md:gap-8 gap-3 py-[20px] ${styl}`}>
        {filteredServices.map(service => (
          <div key={service.id} className="bg-white border text-center shadow-md rounded-lg border-solid border-gray-300 md:p-5 sm:p-4 p-2">
            <Image src="/service.jpg" alt={service.title} width={300} height={200} style={{ width: "100%", height: "auto" }} priority />
            <h3 className="font-bold py-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="gap-5 flex-wrap pt-2 pb-12">
      <h1 className="text-center font-bold pt-[70px] pb-5 text-[32px]">Check Out Our Services</h1>
      {content}
    </section>
  );
};

export default Services;
