import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-500">Testimonials</a></li>
          <li><a href="#blog" className="hover:text-yellow-500">Blog</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
