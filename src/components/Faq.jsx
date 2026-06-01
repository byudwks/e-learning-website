import React, { useState } from "react";
import Title from "./Title";
import { RiAddLine } from "@remixicon/react";
import { faqItems } from "../constant/data";
import { motion } from "motion/react";
import * as variants from "../motion/animasi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(faqItems[0]?.id || null);

  const handleClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="section pb-[90px] lg:pb-[120px]">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        className="container">
        <div className="grid gap-10 p-5 lg:grid-cols-2 items-start bg-white rounded-lg md:p-10">
          {/* Title */}
          <Title
            title="Frequently Asked Questions"
            text="Find answers to common questions about our courses and services."
            link="View All FAQs"
          />
          {/* Question Wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="border border-white-95 grid p-6 divide-y divide-white-95">
            {faqItems.map((item) => {
              const isOpen = activeIndex === item.id;

              return (
                // question item
                <div className="py-4 first:pt-0 last:pb-0" key={item.id}>
                  {/* title */}
                  <div className="flex items-center justify-between gap-12 pb-4 md:px-4">
                    <h4 className="text-md sm:text-xl font-medium">
                      {item.title}
                    </h4>
                    <button
                      className="w-10 h-10 bg-orange-70 flex items-center justify-center rounded-lg aspect-square hover:bg-orange-75/80 transition-colors duration-300"
                      onClick={() => handleClick(item.id)}
                      aria-expanded={isOpen}>
                      <RiAddLine
                        size={24}
                        className={`transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Smooth Container menggunakan CSS Grid Trick */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}>
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
