import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions about our marathons? Fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-teal-600">Or Contact Us Directly</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Email:</span> support@marathonclub.com
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Phone:</span> +1 987 654 321
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
