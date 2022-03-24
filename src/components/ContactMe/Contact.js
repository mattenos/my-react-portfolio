import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <form
                name="contact"
                className="lg:w-1/2 md:w-1/3 px-5 py-10 mx-auto text-center mb-20">
                <h2 className="text-slate-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Let's Connect!
                </h2>
                <p className="leading-relaxed mb-5">
                Please email me at <span class="font-bold">matthewenos1@gmail.com</span> or call me on my mobile at <span class="font-bold">678-595-6456</span> with any inquiries.
                </p>
            </form>
        </section>
    );
}