import React from 'react'
import { IoMdAdd } from 'react-icons/io';

const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos"},
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

function Faqpage() {
  return (
    <>
    <section className="pt-8">
      <div className="py-12 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10  md:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#333333] mb-3">Questions Looks Here</h2>
          <p className="text-[16px] font-inter text-[#4f4f4f]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>
  
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-lg shadow-md p-4 transition-transform hover:scale-105"
            >
              <h3 className="text-[18px] font-inter font-bold  text-[#333333] flex justify-between items-center">
                {faq.question}
                <IoMdAdd className="w-6 h-6 text-[#333333]"/>
              </h3> 
              <p className="text-[16px] font-inter text-[#4f4f4f] mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

export default Faqpage