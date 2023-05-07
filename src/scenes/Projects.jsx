import React from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import brochure from "../assets/brochure.png";
import budget from "../assets/budget.png";
import calculator from "../assets/calculator.png";
import ecommerce from "../assets/ecommerce.png";
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
    <section id="projects" className="h-screen pt-20 px-16 bg-black">
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
        className="grid grid-cols-3 gap-3 w-[70%] mx-auto"
      >
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
          url="https://github.com/curry0312/ecommerce"
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
