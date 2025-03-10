import { useState } from "react";

export default function Faq() {
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
    console.log(filteredFaqs)
    console.log(filteredFaqs.length)

    return (
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
    );
}
