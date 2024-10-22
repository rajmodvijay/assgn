import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-lg">My Home</div>
        <div>
          <Link to="/" className="text-white px-4 hover:underline">Home</Link>
          <Link to="/create-story" className="text-white px-4 hover:underline">Create Story</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;