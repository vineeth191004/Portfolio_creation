import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 rounded" rows="4"></textarea>
          <button className="px-6 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
