import React, { useState } from "react";
import Title from "./Title";
import { RiAddLine } from "@remixicon/react";
import { faqItems } from "../constant/data";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(faqItems[0]?.id || null);

  const handleClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };
  return (
    <section className="section pb-[90px] lg:pb-[120px]">
      <div className="container">
        <div className="grid gap-10 p-5 lg:grid-cols-2 items-start bg-white rounded-lg md:p-10">
          {/* Title */}
          <Title
            title="Frequently Asked Questions"
            text="Find answers to common questions about our courses and services."
            link="View All FAQs"
          />
          {/* Question Wrapper */}
          <div className="border border-white-95 grid p-6">
            {faqItems.map((item) => (
              // question item
              <div className="space-y-3.5" key={item.id}>
                {/* title */}
                <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-4 md:px-4">
                  <h4 className="text-md sm:text-xl">{item.title}</h4>
                  <button
                    className="w-10 h-10 bg-orange-70 flex items-center justify-center rounded-lg aspect-square hover:bg-orange-75/80 transition-colors"
                    onClick={() => handleClick(item.id)}>
                    <RiAddLine
                      size={24}
                      className={`transition-all ${activeIndex === item.id ? "rotate-45" : ""}`}
                    />
                  </button>
                </div>
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ${activeIndex === item.id ? "max-h-[200px]" : ""}`}>
                  <p className="px-5 pb-6">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
