import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Client 1', feedback: 'Amazing work!' },
    { name: 'Client 2', feedback: 'Highly professional and talented.' },
    { name: 'Client 3', feedback: 'Delivered beyond expectations.' },
  ];

  return (
    <section id="testimonials" className="bg-gray-800 text-white p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p>"{testimonial.feedback}"</p>
              <h4 className="mt-4 font-bold">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
