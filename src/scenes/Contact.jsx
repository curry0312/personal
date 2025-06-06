import React, { useRef } from "react";

function Contact() {
  const formRef = useRef(null);

  return (
    <section id="contact" className="h-screen bg-contact md:p-10">
      <div className="h-full md:mx-auto md:w-[80%] md:flex md:justify-center md:items-center">
        <div className="basis-1/2 hidden text-black font-francois font-bold md:block">
          <p className="text-5xl">
            If you think I'm the person you want to find
          </p>
          <p className="text-4xl my-1">Lets Contact Me!</p>
          <p className="text-purple-500 my-5">Let's create something together!</p>
        </div>
        <form action="https://formsubmit.co/curry900312@gmail.com" method="POST" ref={formRef} className="flex flex-col justify-center h-full basis-1/2 py-24 px-8 bg-white md:border-2 md:border-gray-300 md:rounded-xl md:h-auto md:py-8">
          <div className="text-4xl font-outfit font-bold my-3">Send me a message</div>
          <div className="flex flex-col gap-3 font-outfit font-bold">
            <input type="text" name="name" placeholder="Full name*" className="bg-gray-100 py-2 px-4 rounded-md"/>
            <input type="email" name="email" placeholder="Email address*" className="bg-gray-100 py-2 px-4 rounded-md"/>
            <input type="text" name="subject" placeholder="Subject" className="bg-gray-100 py-2 px-4 rounded-md"/>
            <label>Tell me more about your thought*</label>
            <textarea name="message" rows="5" className="bg-gray-100 py-2 px-4 rounded-md"/>
          </div>
          <button
            className="bg-blue-800 rounded-2xl shadow-xl px-8 py-4 mt-5 font-francois text-white text-sm"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
