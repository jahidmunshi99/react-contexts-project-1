import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              We provide exceptional services to bring your vision to life. Our mission is to deliver quality and satisfaction.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-sm text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-sm text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-sm text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

