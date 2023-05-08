import React from "react";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <section
      id="home"
      className="relative h-screen pt-20 px-16 overflow-hidden"
    >
      <div className="flex flex-col-reverse h-full md:flex-row">
        {/*Text*/}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            show: {
              opacity: 100,
              x: 0,
            },
          }}
          className="flex flex-col basis-1/2 justify-center gap-5"
        >
          <h1 className="text-black font-francois text-[50px] md:text-[70px] lg:text-[100px]">
            WANG WEI TSE
          </h1>
          <p className="font-outfit">
            Frontend developer from Taiwan, major in Department Of Economics
          </p>
          <div className="font-outfit">
            <AnchorLink href="#contact" className="px-4 py-2 bg-purple-500 text-white text-sm rounded-md transition duration-500 ease-in-out hover:bg-purple-600">
              Contact Me
            </AnchorLink>
          </div>
        </motion.div>
        {/*Image*/}
        <motion.div className="flex justify-center items-center basis-1/2">
          <img className="w-[80%] rounded-full" src={me} alt="my picture" />
        </motion.div>
      </div>
      <div className="absolute -right-48 -bottom-48 bg-purple-700 w-[600px] h-[600px] -z-40  rounded-full md:w-[700px] md:h-[700px]" />
    </section>
  );
}

export default Header;
