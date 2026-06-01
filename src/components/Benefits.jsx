import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animasi";

function Benefits() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        className="container">
        {/* title */}
        <Title
          title="Benefits"
          text="Discover the advantages of learning with us."
          link="View All Benefits"
        />
        {/* card wrapper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefitItems.map((item) => {
            return (
              <motion.div
                variants={variants.fadeInUp}
                className="bg-white p-10 flex flex-col rounded-xl">
                <div
                  className="bg-orange-75 w-[55%] h-24 flex items-center justify-center mx-auto rounded-xl mb-8"
                  key={item.id}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="mb-4 text-center space-y-3.5">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

                <button className="mt-auto ml-auto border border-white-95 w-12 h-12 flex items-center justify-center rounded-md text-orange-50 transtition-colors hover:bg-orange-50 hover:text-white">
                  <RiArrowRightUpLine size={24} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
