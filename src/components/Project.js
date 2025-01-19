import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Login Credentials of User', description: "Login Credentials of a user is done by using tkinter package of python and the data of user's login information in database using Mysql.", link: 'https://github.com/vineeth191004/Login-Credentials-of-a-user.git' },
    { title: 'Mushroom-Classification', description: 'This project involves predicting whether a given mushroom is edible or poisonous based on various features such as cap shape, cap color, gill size, and habitat. The machine learning model is deployed using Flask, allowing users to interact with the model via a web interface.', link: 'https://github.com/vineeth191004/Mushroom-Classification.git' },
    { title: 'Speaker Identification System Using GMM and 1DCNN', description: 'This project develops a speaker identification system using CNNs, GMMs to classify speakers from audio recordings. It extracts MFCCs as features and trains on a dataset of 50 speakers, leveraging data augmentation for robustness. The model achieves high accuracy, enabling practical applications like security and voice-controlled systems.', link: 'https://github.com/vineeth191004/Speaker_identification_using-1DCNN-and-GMM.git' },
    { title: 'Ecommerce App', description: 'A Flutter-based e-commerce app featuring user authentication (login/signup) and product listing functionalities. The app communicates with a backend server built using Node.js, Express, MySQL2, bcryptjs, and body-parser.',link: 'https://github.com/vineeth191004/Ecommerce_app.git'},
    { title: 'React Shopping Cart', description: 'A simple e-commerce shopping cart application built with React. This project demonstrates how to add products to a shopping cart, display the cart contents, calculate the total price, and proceed with a purchase.', link: 'https://github.com/vineeth191004/ReactShopping-Cart.git'}
  ];

  return (
    <section id="projects" className="bg-gray-100 p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 block">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
