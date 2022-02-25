import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <form
                name="contact"
                className="lg:w-1/2 md:w-1/3 px-5 py-10 mx-auto text-center mb-20">
                <h2 className="text-slate-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Hire Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Let's connect! Please email me with any inquiries.
                </p>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
            </form>
        </section>
    );
}