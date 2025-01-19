import React from "react";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">G. Vineeth</h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="internships"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                Internships
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl font-bold">Hi, I'm G. Vineeth</h1>
        <p className="mt-4 text-lg">
          A passionate Data Analyst and Machine Learning Enthusiast
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-gray-200"
        >
          View Projects
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <div className="flex flex-col md:flex-row mt-8 items-center">
          <div className="w-80 h-80 bg-gray-300 rounded-full shadow-md overflow-hidden flex-shrink-0">
            <img
              src="/images/dp .jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:ml-12 mt-6 md:mt-0 text-center md:text-left max-w-xl">
            <p className="text-lg leading-relaxed">
            G. Vineeth, B Tech Student currently in the 4th year at IIITDM Kurnool, is deeply passionate about technology, with a particular interest in data analysis, machine learning, and deep learning. Demonstrating a keen enthusiasm for staying at the forefront of technological advancements, I actively seek opportunities to expand my skill set and apply my knowledge in practical settings.
            </p>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="container mx-auto p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 bg-blue-100 shadow-md">
            <h3 className="text-xl font-bold">Brainovision Internship</h3>
            <p className="mt-2">
              Developed web applications using Django and gained experience in
              database management and auto HTML code generation.
            </p>
          </div>
          <div className="p-4 bg-purple-100 shadow-md">
            <h3 className="text-xl font-bold">IIT Hyderabad Internship</h3>
            <p className="mt-2">
              Created an advanced image captioning model with feature
              extraction, sequence generation, and evaluation using BLEU and
              ROUGE metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div
            className="p-4 bg-green-100 shadow-md bg-cover bg-center"
            style={{
              backgroundcolor: "blue",
            }}
          >
            <a
              href="https://github.com/vineeth191004/Login-Credentials-of-a-user.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-blue-700 hover:underline"
            >
              Login Credentials System
            </a>
            <p className="mt-2 bg-white bg-opacity-70 p-2 rounded">
            The project starts with users completing a personal registration form to create an account. After registering, they can log
            in using their credentials to access platform features. Forgot password and username options are provided for secure
            credential recovery
            </p>
          </div>
          <div
            className="p-4 bg-red-100 shadow-md bg-cover bg-center"
            style={{
              backgroundcolor: "pink",
            }}
          >
            <a
              href="https://github.com/vineeth191004/Mushroom-Classification.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-blue-700 hover:underline"
            >
              Mushroom Classification
            </a>
            <p className="mt-2 bg-white bg-opacity-70 p-2 rounded">
            This project involves predicting whether a given mushroom is edible or poisonous based on various features such as cap shape, cap color, gill size, and habitat.
            The machine learning model is deployed using Flask, allowing users to interact with the model via a web interface
            </p>
          </div>
          <div
            className="p-4 bg-yellow-100 shadow-md bg-cover bg-center"
            style={{
              backgroundcolor: "yellow",
            }}
          >
            <a
              href="https://github.com/vineeth191004/Ecommerce_app.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-blue-700 hover:underline"
            >
              Ecommerce App
            </a>
            <p className="mt-2 bg-white bg-opacity-70 p-2 rounded">
              Flutter-based e-commerce app with authentication and product
              listing features.
            </p>
          </div>
          <div
            className="p-4 bg-red-100 shadow-md bg-cover bg-center"
            style={{
              backgroundcolor: "blue",
            }}
          >
            <a
              href="https://github.com/vineeth191004/ReactShopping-Cart.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-blue-700 hover:underline"
            >
              React Shopping Cart
            </a>
            <p className="mt-2 bg-white bg-opacity-70 p-2 rounded">
            A simple e-commerce shopping cart application built with React. This project demonstrates how to add products to a
            shopping cart, display the cart contents, calculate the total price, and proceed with a purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-2 w-full mb-4"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        &copy; {new Date().getFullYear()} G. Vineeth
      </footer>
    </div>
  );
};

export default App;
