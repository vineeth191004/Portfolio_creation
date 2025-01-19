import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-800 text-white h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-xl">Web Developer | Tech Enthusiast | Innovator</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
