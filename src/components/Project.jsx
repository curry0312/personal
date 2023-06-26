import React from "react";
import { motion } from "framer-motion";

function Project({ image, description, siteUrl, githubUrl, variants }) {
  return (
    <motion.div variants={variants} className="relative group">
      <img
        src={image}
        alt={image.title}
        className="object-cover w-full h-full"
      />

      <div className="absolute hidden flex-col justify-center items-center gap-2 -z-30 text-white bg-purple-600 opacity-90 inset-0 group-hover:flex group-hover:z-20">
        <p className="font-outfit w-[70%] text-center">{description}</p>
        <div className="flex gap-2">
          <a href={siteUrl} target="_blank" className="bg-purple-700 text-white rounded-xl font-bold px-4 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-200">Go to site</a>
          <a href={githubUrl} target="_blank" className="bg-purple-700 text-white rounded-xl font-bold px-4 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-200">Go to Github</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
