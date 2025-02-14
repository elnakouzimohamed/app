import { useState } from "react";

export default function Faq() {
    const [openIndexes, setOpenIndexes] = useState([]); // Store multiple open indexes

    const toggleAnswer = (index) => {
        if (openIndexes.includes(index)) {
            // If the index is already open, remove it (close the FAQ item)
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            // Otherwise, add it to the array (open the FAQ item)
            setOpenIndexes([...openIndexes, index]);
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

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer(index)}>
                            {item.question}
                            <span className="icon">{openIndexes.includes(index) ? "−" : "+"}</span>
                        </button>
                        {openIndexes.includes(index) && (
                            <div className="faq-answer.open">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
