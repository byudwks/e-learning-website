import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "motion/react";
import * as variants from "../motion/animasi";

function Testimoni() {
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
          title="Testimoni"
          text="Hear what our students have to say about their learning experience."
          link="View All Testimonials"
        />

        {/* card wrapper */}
        <motion.div variants={variants.fadeInUp}>
          <Swiper
            variants={variants.fadeInUp}
            className="mt-14 lg:mt-12"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {testimonialsItems.map((item) => (
              <SwiperSlide
                className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
                key={item.id}>
                <p>{item.text}</p>
                <div className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                  <div className="flex items-center gap-3">
                    {/* image */}
                    <div>
                      <img
                        src={item.img}
                        alt={item.author}
                        width={50}
                        height={50}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    </div>
                    {/* author */}
                    <p className="">{item.author}</p>
                  </div>
                  <button className="secondary-btn">Read More</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* navigation button */}
        <motion.div
          variants={variants.fadeInUp}
          className="flex items-center justify-center mt-10 gap-6">
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl transtition-colors hover:bg-orange-50 hover:text-white active:bg-orange-75/50 transition-colors swiper-button-prev">
            <RiArrowLeftSLine size={30} />
          </button>
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl transtition-colors hover:bg-orange-50 hover:text-white active:bg-orange-75/50 transition-colors swiper-button-next">
            <RiArrowRightSLine size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimoni;
