import React from "react";
import Title from "./Title";
import { coursesSecItems } from "../constant/data";

const Courses = () => {
  return (
    <section className="section">
      <div className="container">
        {/* title */}
        <Title
          title=" Our Courses"
          text="Discover our wide range of online courses designed to help you learn new skills and advance your career."
          link="View All Courses"
        />

        {/* card wrapper */}
        <div className="grid gap-5 lg:grid-cols-2 mt-8 lg:mt-12">
          {coursesSecItems.map((item) => (
            // card
            <div
              className="bg-white p-7 lg:p-10 rounded-[10px] shadow-sm"
              key={item.id}>
              {/* image */}
              <div className="">
                <img
                  src={item.img}
                  alt={item.title}
                  width={560}
                  height={266}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
              {/* content */}
              <div className="mt-6">
                {/* tags */}
                <div className="flex items-center gap-2.5">
                  {item.tags.map((tag, index) => (
                    <span
                      className="border border-orange-75 p-2 rounded-md bg-orange-97 mr-2 text-sm"
                      key={index}>
                      {tag.tag}
                    </span>
                  ))}
                  <p className="ml-auto ">{item.instructor}</p>
                </div>
                {/* meta data */}
                <div className="my-6 space-y-1.5">
                  <h4>{item.title}</h4>
                  <p className="text-[16px] text-current">{item.text}</p>
                </div>
              </div>
              {/* button */}
              <button className="bg-white-97 w-full p-3.5 rounded-md border border-white-97 hover:text-orange-50 hover:border-orange-50 transition font-medium">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
