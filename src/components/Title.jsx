import React from "react";
import { motion } from "motion/react";
import * as variants from "../motion/animasi";

function Title({ title, text, link }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <motion.h2 variants={variants.fadeInUp}>{title}</motion.h2>
        <motion.p
          className="max-w-[640px] mt-4 mb-6"
          variants={variants.fadeInUp}>
          {text}
        </motion.p>
      </div>
      <motion.button
        className="secondary-btn hover:text-orange-50 font-medium"
        variants={variants.fadeInUp}>
        {link}
      </motion.button>
    </div>
  );
}

export default Title;
