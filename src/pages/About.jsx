// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Company Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum sapien, nec auctor justo. Sed
            consequat, ligula at sollicitudin auctor, justo arcu dapibus odio, in sagittis dolor est nec quam. Proin
            non ante et nisl vestibulum ultricies. Suspendisse potenti.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Donec ullamcorper, libero at vehicula efficitur, arcu purus cursus dui, eu aliquam nisl mi non ex. Aenean
            consequat leo id mi sollicitudin, ac fermentum justo placerat. Nullam pharetra quis mauris a blandit.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide exceptional service and to follow through on our promises. We aim to deliver
            individualized solutions to all our client's printing needs and add value to our clients' businesses. Our
            staff are focused on providing great service and forming lasting relationships with our clients.
          </p>
        </section>

        {/* Team Members */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700 mb-2">CEO</p>
              <p className="text-gray-600">
                John is the CEO and has over 20 years of experience in the industry. He is passionate about driving
                innovation and delivering the best possible results for our clients.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700 mb-2">CTO</p>
              <p className="text-gray-600">
                Jane is our Chief Technology Officer and leads our development team. She has a strong background in
                software engineering and is dedicated to maintaining the highest standards of technology in our projects.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Michael Brown</h3>
              <p className="text-gray-700 mb-2">CFO</p>
              <p className="text-gray-600">
                Michael is the Chief Financial Officer and ensures that our finances are managed effectively. He has
                extensive experience in financial management and is committed to the company's financial health.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
