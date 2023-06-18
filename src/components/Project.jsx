import React from "react";
import { motion } from "framer-motion";

function Project({ image, description, url , variants }) {
  return (
    <motion.div variants={variants} className="relative group">
      <img
        src={image}
        alt={image.title}
        className="object-cover w-full h-full"
      />

      <a href={url} target="_blank" className="absolute hidden justify-center items-center -z-30 text-white bg-purple-600 opacity-90 inset-0 group-hover:flex group-hover:z-20">
        <p className="font-outfit w-[70%] text-center">{description}</p>
      </a>
    </motion.div>
  );
}

export default Project;
