import React from "react";

export default function Footer() {
  return (
    <section className="lg:w-1/2 md:w-1/3 px-5 mx-auto text-center mb-20">
      <h2 className="text-slate-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
        Hire Me
      </h2>
      <p className="py-2">
        Let's connect! Please <a id="email" href="mailto:mattenos4@gmail.com">
        email</a> me with any inquiries.
      </p>
    <div className="flex justify-center space-x-6 py-2">
      <a href="https://github.com/mattenos">
        <img src={require('./github-64.png')} alt="github_thumb" />
      </a>
      <a href="https://www.linkedin.com/in/matt-enos-2177b815/">
        <img src={require('./linkedin-2166.png')} alt="linkedin_thumb" />
      </a>
    </div>
    </section>
  )
}