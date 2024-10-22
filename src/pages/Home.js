import React from "react";
import heroBg from "../assets/images/shane-rounce-DNkoNXQti3c-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <section 
        className="relative bg-cover bg-center h-screen flex flex-col justify-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-6xl font-extrabold mb-6">Welcome to My Home</h1>
          <p className="text-lg mb-8">Your platform to explore, share, and connect.</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="/explore-stories"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Explore Stories
            </a>
            <a 
              href="/create-story"
              className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300"
            >
              Share a Story
            </a>
            <a 
              href="/connect"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Connect with Friends
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
