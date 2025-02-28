import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';
import tailwindConfig from "../../tailwind.config";
import BannerSlider from '@/components/banner';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
import Faq from '@/components/faq';
import Welcome from '@/components/welcome';
import Services from '@/components/services';
import Footer from '@/components/footer';

 
import { useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';



export default function AboutUs(){
    const router = useRouter()
    const { page } = router.query;
  console.log(page)
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
    
    <>
          <Navbar/>
        <BannerSlider/>
        <Services/>

     <Contact/>
     
     <Faq/>
    
    
     
        
       <Footer/>
       </>
  );
};