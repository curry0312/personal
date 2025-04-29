import React from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import brochure from "../assets/brochure.png";
import calculator from "../assets/calculator.png";
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
    <section id="projects" className="py-24 px-2 bg-black md:min-h-screen md:px-16">
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
        className="grid grid-cols-1 gap-3 w-[90%] mx-auto md:grid-cols-2 xl:grid-cols-3"
      >
        <Project
          image={next_notes}
          description={
            "A Nextjs social media app build by T3 Stack, using MySQL with Prisma, . We can create our own account to make posts."
          }
          siteUrl="https://group-discuss-app.vercel.app/"
          githubUrl="https://github.com/curry0312/group-discuss-app"
          variants={listItem}
        />
        <Project
          image={next_notes}
          description={
            "A Nextjs notes app build by Typescript and Nextauth, we can create our own account to make notes. Google login and Email login are available."
          }
          siteUrl="https://next-notes-app-two.vercel.app/"
          githubUrl="https://github.com/curry0312/next-notes-app"
          variants={listItem}
        />
        {/* <Project
          image={budget}
          description={
            "A Expense-tracker app build by react and redux-toolkit. We can add expense, and it can analyze the cost for us."
          }
          siteUrl="https://curry0312.github.io/budget-tracker/"
          githubUrl="https://github.com/curry0312/budget-tracker"
          variants={listItem}
        /> */}
        <Project
          image={brochure}
          description={"A brochure site which has some good features build by react."}
          siteUrl="https://curry0312.github.io/brochure/"
          githubUrl="https://github.com/curry0312/brochure"
          variants={listItem}
        />
        <Project
          image={calculator}
          description={"A simple calculator build by react."}
          siteUrl="https://curry0312.github.io/calculator/"
          githubUrl="https://github.com/curry0312/calculator"
          variants={listItem}
        />
        {/* <Project
          image={ecommerce}
          description={"A Ecommerce website(client only) using fake store api build by react and redux-toolkit."}
          siteUrl="https://ecommerce-one-plum.vercel.app/"
          githubUrl="https://github.com/curry0312/ecommerce"
          variants={listItem}
        /> */}
        <Project
          image={user}
          description={
            "A simple frontend and backend app build by nodejs, we can register, login, update user's information."
          }
          siteUrl="https://github.com/curry0312/login-app"
          githubUrl="https://github.com/curry0312/login-app"
          variants={listItem}
        />
      </motion.div>
    </section>
  );
}

export default Projects;
