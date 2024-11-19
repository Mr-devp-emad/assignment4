"use client"

import Testimonials from "./Testimoinals";
import Footer from "./Footer";


export default function Last() {
  return (
    <div>
      <Testimonials />
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Heading */}
          <h3 className="text-lg md:text-2xl font-extrabold text-center md:text-left uppercase tracking-wide">
            Stay up to date about our latest offers
          </h3>

          {/* Input and Button Group */}
          <div className="flex flex-col md:flex-row w-full md:w-auto items-center">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow md:flex-grow-0 w-full md:w-auto px-6 py-3 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-300"
            />
            {/* Subscribe Button */}
            <button className="mt-2 md:mt-0 md:ml-2 bg-white text-black px-6 py-3 font-semibold border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
