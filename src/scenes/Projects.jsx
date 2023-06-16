import React from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import brochure from "../assets/brochure.png";
import budget from "../assets/budget.png";
import calculator from "../assets/calculator.png";
import ecommerce from "../assets/ecommerce.png";
import next_notes from "../assets/next-notes-app.png";
import user from "../assets/user.png";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <section id="projects" className="py-20 px-2 bg-black md:h-screen md:px-16">
      <div className="font-francois text-center text-5xl text-white mb-16">
        My Projects
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once:true,
          amount: 0.3
        }}
        variants={container}
        className="grid grid-cols-1 gap-3 w-[90%] mx-auto md:grid-cols-3 "
      >
        <Project
          image={next_notes}
          description={
            "A Nextjs notes app build by Typescript and Nextauth, so that we can create our own account to make notes. Google login and Email login are available."
          }
          url="https://next-notes-app-two.vercel.app/"
          variants={listItem}
        />
        <Project
          image={budget}
          description={
            "A Expense-tracker app. We can add expense, and it can analyze the cost for us."
          }
          url="https://curry0312.github.io/budget-tracker/"
          variants={listItem}
        />
        <Project
          image={brochure}
          description={"A brochure site which has some good features."}
          url="https://curry0312.github.io/brochure/"
          variants={listItem}
        />
        <Project
          image={calculator}
          description={"A simple calculator."}
          url="https://curry0312.github.io/calculator/"
          variants={listItem}
        />
        <Project
          image={ecommerce}
          description={"A Ecommerce website using fake store api."}
          url="https://ecommerce-one-plum.vercel.app/"
          variants={listItem}
        />
        <Project
          image={user}
          description={
            "A simple frontend and backend app, we can register, login, update user's information."
          }
          url="https://github.com/curry0312/login-app"
          variants={listItem}
        />
      </motion.div>
    </section>
  );
}

export default Projects;
