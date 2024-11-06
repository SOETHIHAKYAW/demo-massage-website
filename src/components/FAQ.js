// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I expect during my first massage?",
      answer: "Our therapist will guide you through the process and make sure you're comfortable."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Yes, we recommend booking in advance to ensure your preferred time."
    },
    // Add more FAQs
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <h4>{faq.question}</h4>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
