"use client"

import Testimonials from "./Testimoinals";
import Footer from "./Footer";

export default function Last() {
  return (
    <div>
      <Testimonials />
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-lg md:text-2xl font-semibold">Stay up to date about our latest offers</h3>
          <div className="mt-6 md:mt-0 flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r-lg text-black hover:bg-yellow-600">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
