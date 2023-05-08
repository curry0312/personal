import { motion } from "framer-motion";

function About() {
  const listItem1 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
  };
  const listItem2 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
  };
  const listItem3 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
  };
  return (
    <section id="about" className="py-20 px-2 bg-slate-50 md:px-16 lg:h-screen">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="text-center p-10">
          <h2 className="text-[100px] font-bold">1+</h2>
          <p className="font-outfit">Years devoting in frontend web</p>
        </div>
        <div className="flex flex-col gap-5 flex-1 p-10 md:p-16">
          <div>
            <h3 className="font-francois text-[30px] text-center md:text-[60px]">
              Developer who is familiar with Html, Css, Javascript and React
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/*feature 1*/}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
              }}
              variants={listItem1}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  Education
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  Study in Fu Jen Catholic University, and major in Department
                  Of Economics
                </span>
              </div>
            </motion.div>
            {/*feature 2*/}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.9,
              }}
              variants={listItem2}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  My-system
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  Be aggressively open-minded, and always be learning new things
                </span>
              </div>
            </motion.div>
            {/*feature 3*/}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 1.2,
              }}
              variants={listItem3}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  Other languages
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  I have learnt basic python and a little bit of R
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
