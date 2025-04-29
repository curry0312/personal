import { delay, motion } from "framer-motion";

function About() {
  const listItem1 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
    delay: 0.6,
  };
  const listItem2 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
    delay: 0.8,
  };
  const listItem3 = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1 },
    delay: 1,
  };
  return (
    <section
      id="about"
      className="py-20 px-2 bg-slate-50 md:px-16 lg:min-h-screen"
    >
      <div className="flex flex-col lg:flex-row h-full">
        <div className="text-center p-10">
          <h2 className="text-[100px] font-bold">3+</h2>
          <p className="font-outfit">
            Years of experience in frontend web development
          </p>
        </div>
        <div className="flex flex-col gap-5 flex-1 p-10 md:p-16">
          <div>
            <h3 className="font-francois text-[30px] text-center md:text-[48px]">
              I specialize in building modern web applications with HTML, CSS,
              JavaScript, React, Next.js, and Tailwind CSS.
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              variants={listItem1}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  Education
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  Bachelor's degree in Economics from Fu Jen Catholic
                  University, where I developed a strong foundation in
                  analytical thinking and problem-solving.
                </span>
              </div>
            </motion.div>

            {/* feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              variants={listItem2}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  About Me
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  A lifelong learner driven by curiosity and creativity. I
                  believe in continuous growth and embrace challenges as
                  opportunities to improve.
                </span>
              </div>
            </motion.div>

            {/* feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              variants={listItem3}
              className="flex items-end md:min-h-[200px] bg-purple-100 transition-colors duration-200 ease-in-out group hover:bg-purple-600"
            >
              <div className="p-4 group-hover:text-white">
                <p className="font-francois text-2xl transition-colors duration-200 ease-in-out">
                  Other Technical Skills
                </p>
                <span className="font-outfit text-lg transition-colors duration-200 ease-in-out">
                  Python
                </span>
              </div>
            </motion.div>
          </div>

          {/*Here */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            variants={listItem1}
            className="flex flex-col gap-8 mt-10"
          >
            <div>
              <h3 className="font-francois text-[30px] md:text-[48px] text-center">
                My Working Experience
              </h3>
            </div>
            <div className="flex flex-col gap-8">
              <div className="mt-5">
                <h4 className="font-francois font-semibold text-[30px] md:text-[40px]">
                  上禾下人有限公司  2023/6 ~ 2024/2/17
                </h4>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-200 group">
                <p className="font-francois text-2xl mb-2 group-hover:text-white">
                  2023/6 ~ 2024/2/17 - Web Application Development with
                  React/Next.js using openAI
                </p>
                <ul className="list-disc list-inside font-outfit text-lg space-y-2 group-hover:text-white">
                  <li>
                    Developed web applications based on project requirements
                    assigned by supervisors, using React and Next.js frameworks.
                  </li>
                  <li>
                    Integrated various third-party APIs including OpenAI,
                    Twitch, TikTok, and others.
                  </li>
                  <li>
                    Built reusable and dynamic React components using ShadcnUI
                    to display and manage API response data.
                  </li>
                  <li>
                    Deployed the projects seamlessly to Vercel, ensuring smooth
                    production delivery.
                  </li>
                  <li>
                    Skills utilized: HTML, CSS (Tailwind CSS), JavaScript,
                    TypeScript, React, Next.js.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h4 className="font-francois font-semibold text-[30px] md:text-[40px]">
                  庫果股份有限公司 2024/3/4 ~ 2025/4/30
                </h4>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-200 group">
                <p className="font-francois text-2xl mb-2 group-hover:text-white">
                  2024/3/4 ~ 2024/9/4 - Independent Development of
                  Cross-Platform Mobile Application
                </p>
                <ul className="list-disc list-inside font-outfit text-lg space-y-2 group-hover:text-white">
                  <li>
                    Built a high-performance mobile app using React Native for
                    both iOS and Android.
                  </li>
                  <li>
                    Integrated native modules with Expo to extend
                    functionalities.
                  </li>
                  <li>
                    Developed Android features with Kotlin/Java and integrated
                    LINE/Facebook SDKs.
                  </li>
                  <li>
                    Configured iOS features including Universal Links and push
                    notifications, completed App Store submission.
                  </li>
                  <li>
                    Experienced with Google Play Console and Apple App Store
                    submission workflows.
                  </li>
                </ul>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-200 group">
                <p className="font-francois text-2xl mb-2 group-hover:text-white">
                  2024/9/4 ~ 2025/1/20 - Frontend Development for E-commerce
                  Platform
                </p>
                <ul className="list-disc list-inside font-outfit text-lg space-y-2 group-hover:text-white">
                  <li>
                    Developed responsive e-commerce websites using Next.js.
                  </li>
                  <li>
                    Leveraged Server Components and Server Actions to improve
                    SEO performance.
                  </li>
                  <li>
                    Experienced in React Hooks, Redux, and build tools like
                    Vite.
                  </li>
                  <li>
                    Integrated and optimized RESTful APIs for better data
                    fetching using Tanstack Query.
                  </li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-200 group">
                <p className="font-francois text-2xl mb-2 group-hover:text-white">
                  2025/1/20 ~ 2025/4/30 - Development of Multifunctional Photo
                  Album and Communication Platform
                </p>
                <ul className="list-disc list-inside font-outfit text-lg space-y-2 group-hover:text-white">
                  <li>
                    Built a responsive photo album and communication platform
                    using Next.js.
                  </li>
                  <li>
                    Utilized Zustand for lightweight and efficient state
                    management.
                  </li>
                  <li>
                    Integrated and optimized RESTful APIs using Tanstack Query.
                  </li>
                  <li>
                    Implemented messaging features like read receipts, message
                    deletion, and reply functionalities.
                  </li>
                  <li>
                    Integrated Jitsi for both one-on-one and group video
                    conferencing.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
