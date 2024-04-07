import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus pulvinar nisi, in ultrices justo.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Politics</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Business</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Technology</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Sports</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">email@example.com</p>
            <p className="text-sm">+123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <p className="text-sm text-gray-400 text-center">&copy; 2024 Your News App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
