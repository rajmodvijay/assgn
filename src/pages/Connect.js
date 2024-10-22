import React from "react";

const Connect = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-center mb-10">Connect with Friends</h2>
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto text-center">
        <p className="text-lg mb-6">
          Find and connect with like-minded individuals. Explore stories, engage in discussions, and build meaningful connections.
        </p>
        <a href="/explore-stories" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
          Start Exploring
        </a>
      </div>
    </div>
  );
};

export default Connect;
