import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

function Benefits() {
  return (
    <section className="section">
      <div className="container">
        {/* title */}
        <Title
          title="Benefits"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet ipsum non dapibus rutrum. Suspendisse tempus lacus tellus, eu faucibus ex egestas non. Nullam consequat posuere bibendum. Maecenas consequat, sem ac ultricies tincidunt."
          link="View All"
        />
        {/* card wrapper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefitItems.map((item) => {
            return (
              <div className="bg-white p-10 flex flex-col rounded-xl">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
