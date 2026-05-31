import React from "react";
import { heroLogos } from "../constant/data";
import { RiPlayFill } from "@remixicon/react";
// Ambil modul secara utuh
import * as ReactFastMarquee from "react-fast-marquee";
// SOLUSI UTAMA: Mengambil komponen dari lapisan terdalam objek
const Marquee =
  ReactFastMarquee.default?.default ||
  ReactFastMarquee.default ||
  ReactFastMarquee.Marquee;

function Hero() {
  return (
    <section>
      <div className="container">
        {/* content */}
        <div className="mt-[50px] md:mt-20 text-center">
          {/* title */}
          <div className="relative max-w-max mx-auto pt-8 pl-8">
            <span className="absolute top-0 left-0">
              <img
                src="/Images/shape-1.png"
                alt="Title shape"
                width={39}
                height={43}
              />
            </span>
            <div className="flex items-center bg-white border border-white-95 rounded-lg p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center ">
              <span>
                <img
                  src="/Images/shape-2.png"
                  alt="Title shape"
                  width={48}
                  height={48}
                />
              </span>
              <h1 className="text-2xl md:text-4xl">
                <span className="text-orange-50">Unlock</span> Your Potential
                with Our
              </h1>
            </div>
          </div>
          <p className="text-2xl font-medium mt-4 md:text-[28px]">
            with Online Design and Development Courses.
          </p>
          <p className="text-gray-600">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
          {/* btn Wrapper */}
          <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
            <button className="primary-btn max-sm:w-[80%]">
              Explore Courses
            </button>
            <button className="secondary-btn max-sm:w-[80%]">
              View Pricing
            </button>
          </div>
          {/* client logos */}
          <div className="mt-8 lg:mt-25 relative overflow-hidden">
            <Marquee pauseOnHover={true} gradient={false} speed={60}>
              {heroLogos.map((logo) => (
                <div className="px-14 py-4" key={logo.id}>
                  <img
                    src={logo.img}
                    alt="logo"
                    width={logo.width}
                    height={28}
                  />
                </div>
              ))}
            </Marquee>

            {/* left gradient */}
            <div className="absolute top-0 left-0 bg-linear-to-r from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
            {/* right gradient */}
            <div className="absolute top-0 right-0 bg-linear-to-l from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
          </div>
        </div>
        {/* banner */}
        <figure className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto">
          <img
            src="/Images/hero-banner.png"
            alt="Banner"
            width={940}
            height={500}
            className="w-full h-full object-cover"
          />
          {/* dark ovelay */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          {/* play button */}
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <span className="flex bg-white w-14 h-14 items-center justify-center rounded-full play-btn">
              <RiPlayFill size={24} />
            </span>
          </div>
          {/* banner */}
        </figure>
      </div>
    </section>
  );
}

export default Hero;
