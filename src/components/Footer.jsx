// src/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <p className="text-gray-400">1234 Street Name</p>
            <p className="text-gray-400">City, State, 56789</p>
            <p className="text-gray-400">Email: info@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .594 0 1.325v21.351C0 23.406.595 24 1.325 24H12.82v-9.294H9.691v-3.622h3.128V8.411c0-3.1 1.893-4.786 4.659-4.786 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.762v2.31h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .594 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.993 9.993 0 01-2.828.775 4.938 4.938 0 002.165-2.724 9.987 9.987 0 01-3.127 1.184 4.93 4.93 0 00-8.405 4.488A13.986 13.986 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.902 4.902 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.936 4.936 0 01-2.224.084c.623 1.951 2.431 3.377 4.575 3.416A9.867 9.867 0 010 19.54a13.953 13.953 0 007.548 2.213c9.051 0 14.001-7.496 14.001-13.986 0-.213-.004-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.976.975 1.25 2.242 1.313 3.608.057 1.266.07 1.645.07 4.847 0 3.204-.012 3.584-.07 4.85-.062 1.366-.337 2.633-1.313 3.608-.975.976-2.242 1.25-3.608 1.313-1.266.057-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.337-3.608-1.313-.976-.975-1.25-2.242-1.313-3.608-.057-1.266-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.337-2.633 1.313-3.608.975-.975 2.242-1.25 3.608-1.313 1.266-.057 1.645-.07 4.85-.07M12 0C8.741 0 8.332.015 7.053.072 5.772.13 4.513.403 3.497 1.418 2.482 2.434 2.209 3.694 2.152 4.976.096 7.11 0 7.52 0 12s.096 4.89.152 7.024c.057 1.282.33 2.541 1.345 3.557 1.016 1.016 2.275 1.288 3.557 1.345C8.332 23.985 8.741 24 12 24s3.668-.015 4.947-.072c1.282-.057 2.541-.33 3.557-1.345 1.016-1.016 1.288-2.275 1.345-3.557C23.904 16.89 24 16.48 24 12s-.096-4.89-.152-7.024c-.057-1.282-.33-2.541-1.345-3.557C19.695.403 18.436.13 17.154.072 15.868.015 15.459 0 12 0zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838m0-1.838A8 8 0 114 12 8 8 0 0112 4zm4.406 1.278a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
