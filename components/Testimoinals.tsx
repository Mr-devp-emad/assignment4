"use client"


const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    feedback:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    rating: 5,
    feedback:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of clothing they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    rating: 5,
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.feedback}&quot;</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
