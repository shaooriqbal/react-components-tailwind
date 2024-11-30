import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border border-gray-300 rounded-md mb-2">
    <div
      onClick={onToggle}
      className="bg-blue-500 text-white p-4 cursor-pointer flex justify-between items-center"
    >
      <span>{title}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
        {content}
      </div>
    )}
  </div>
);

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [multipleOpen, setMultipleOpen] = useState([]);

  const accordionData = [
    { title: "Accordion 1", content: "This is the content for Accordion 1." },
    { title: "Accordion 2", content: "This is the content for Accordion 2." },
    { title: "Accordion 3", content: "This is the content for Accordion 3." },
  ];

  const toggleSingleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMultipleAccordion = (index) => {
    if (multipleOpen.includes(index)) {
      setMultipleOpen(multipleOpen.filter((i) => i !== index));
    } else {
      setMultipleOpen([...multipleOpen, index]);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Single Open Accordion</h2>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleSingleAccordion(index)}
        />
      ))}

      <h2 className="text-2xl font-bold mt-8 mb-4">Multiple Open Accordion</h2>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={multipleOpen.includes(index)}
          onToggle={() => toggleMultipleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordions;
