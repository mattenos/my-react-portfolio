import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-800">
                        Welcome to My Webpage.
                        <br className="hidden lg:inline-block mt-4" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        My name is Matt. I am a full-stack web developer with a focus on building impactful front-end experiences on the web.
                        I am currently searching to work for a company that will
                        allow me
                        to utilize my background in project management, strong interpersonal communication skills, and coding experience to build accessible and performant products.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
                            Let's Connect
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Portfolio
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="scale-75 rounded-tr-extraLarge rounded-bl-extraLarge" alt="headshot" src={require('./tech_headshot_reduced.jpg')} />
                </div>
            </div>
        </section>
    );
}