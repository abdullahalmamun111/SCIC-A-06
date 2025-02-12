import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "./ThemeProvider";

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer 
    // className="bg-gradient-to-br from-teal-300 via-blue-200 to-gray-100 text-gray-800 "
    className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-br from-teal-300 via-blue-200 to-gray-100 text-gray-800"} py-10 `}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">About MarathonClub</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              MarathonClub brings together running enthusiasts from all over the world. Our platform supports organizing and promoting marathons for fitness, community, and charity. Join us and make a positive impact today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li><NavLink to="/" className="hover:text-teal-800">Home</NavLink></li>
              <li><NavLink to="/marathons" className="hover:text-teal-800"> Marathons</NavLink></li>
              <li><NavLink to="/marathons" className="hover:text-teal-800">Upcoming Marathons</NavLink></li>
              <li><NavLink to="/register" className="hover:text-teal-800">Register for a Marathon</NavLink></li>
              <li><NavLink to="/leaderboard" className="hover:text-teal-800">Marathon Tips</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-teal-800">Contact Us</NavLink></li>
              <li><NavLink to="/dashboard" className="hover:text-teal-800">Dashboard</NavLink></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Support</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li><NavLink to="/terms" className="hover:text-teal-800">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-teal-800">Privacy Policy</NavLink></li>
              <li><NavLink to="/help" className="hover:text-teal-800">Help Center</NavLink></li>
              <li><NavLink to="/donations" className="hover:text-teal-800">Donation Guidelines</NavLink></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Get In Touch</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Have questions about marathons or our platform? Feel free to reach out to us.
            </p>
            <ul className="mt-4 text-sm md:text-base space-y-2 text-gray-600">
              <li>
                <span className="font-bold text-teal-700">Email:</span> support@marathonclub.com
              </li>
              <li>
                <span className="font-bold text-teal-700">Phone:</span> +1 987 654 321
              </li>
              <li>
                <span className="font-bold text-teal-700">Address:</span> 456 Running Lane, MarathonCity, MC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} MarathonClub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
