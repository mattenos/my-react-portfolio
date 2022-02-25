import React from "react";

export default function Footer() {
  return (
    <section className="lg:w-1/2 md:w-1/3 px-5 mx-auto text-center mb-4">
    <div className="flex justify-center space-x-6 scale-50">
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