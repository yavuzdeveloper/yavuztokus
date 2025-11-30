// components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h5 className="text-xl md:text-xl font-bold text-white opacity-10">
            404
          </h5>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xl md:text-xl font-bold text-white animate-pulse">
              404
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto">
          <div className="bg-tertiary rounded-2xl p-8 border border-gray-800 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lost in Space?
            </h2>

            <p className="text-secondary mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Don't worry, even the best explorers get lost sometimes!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="flex items-center justify-center px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">🏠</span>
                Back to Home
              </Link>

              <Link
                to="/blog"
                className="flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                <span className="mr-2">📝</span>
                Visit Blog
              </Link>
            </div>
          </div>

          {/* Floating Astronaut Animation */}
          <div className="mt-12 animate-bounce">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👨‍🚀</span>
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Exploring new frontiers...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
